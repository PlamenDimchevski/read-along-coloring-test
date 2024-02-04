'use server';
import sanitizeHtml from 'sanitize-html';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from '@/config';

import demoLines from './demo';

interface Batches {
   content: string;
   batches: string[];
}

interface Lines {
   text: string;
   speaker: string;
}

interface Chapters {
   title: string;
   content: string;
}

interface AIResponse {
   lines: Lines[];
   message: string;
   error: boolean;
}

interface Content {
   html: string;
}

const openai = new OpenAI({
   apiKey: OPENAI_API_KEY,
});

const prompt = async (userMessage: string) => {
   const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
         {
            role: 'system',
            content: `You will be provided with text, your task is to make all part of the text in which a character is speaking.
               When the narrator is speaking, return what's the name of the narrator even if you have to deduce it.

               Provide your answer as a JSON array.

               Here is an example of a valid response format:
               [
                  {
                  text: 'The text spoken by a character',
                  speaker : 'The speaker'
                  }
               ]

               Do not include any other text except the JSON in the response.`,
         },
         {
            role: 'user',
            content: userMessage,
         },
      ],
      temperature: 1,
      max_tokens: 4095,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
   });

   return response.choices[0].message;
};

async function searchContentForDialog(batches: string[]): Promise<AIResponse> {
   let lines: Lines[] = [];
   let response = await Promise.all(batches)
      .then(res => res.map((item: any) => item.content.replace(/^(```json)/, '').replace(/(```)$/, '')))
      .catch(err => err);

   if (response.error) {
      return { lines: [], error: true, message: response.error.message };
   }
   try {
      lines = response.map((item: string) => JSON.parse(item)).flat();
   } catch (e) {
      console.error(e);
      return { lines: [], error: true, message: 'error' };
   }
   return { lines, error: false, message: 'success' };
}

function processContent(content: string): Batches {
   let textPerBatch: string = '';
   const batches: string[] = [];
   const sanitizedContent: string = sanitizeHtml(content, {
      allowedTags: ['b', 'i', 'em', 'strong', 'p', 'h1'],
      allowedAttributes: {},
      allowedIframeHostnames: [],
      parser: {
         lowerCaseTags: true,
      },
      textFilter: function (text: string, tagName: string): string {
         if (tagName !== 'p') {
            return text;
         }
         if (text.trim()) {
            textPerBatch += `${text}\n`;
         }
         if (textPerBatch.length > 2500) {
            batches.push(textPerBatch);
            textPerBatch = '';
         }
         return text;
      },
   });
   return { content: sanitizedContent, batches };
}

function markContent(content: string, lines: Lines[] = []): string {
   return sanitizeHtml(content, {
      textFilter: function (text: string): string {
         const line = lines.find(item => text.includes(item.text));

         if (line) {
            return text.replace(
               line.text,
               `<span class="inline bg-warning text-warning-content tooltip" data-tip="${line.speaker}">${line.text}</span>`
            );
         }
         return text;
      },
   });
}

function breakContentByChapter(content: string): Chapters[] {
   return content.split('<h1>').reduce((chapters: Chapters[], chapter: string): Chapters[] => {
      if (!chapter.trim()) {
         return chapters;
      }
      const [title, content] = chapter.split('</h1>');
      return [
         ...chapters,
         {
            title,
            content,
         },
      ];
   }, []);
}

export async function parsContent(prevState: any, formData: FormData): Promise<Content> {
   const contentData: any = formData.get('content');
   const { content, batches } = processContent(contentData);
   const { lines, error, message } = await searchContentForDialog(batches);
   if (error) {
      return { html: message };
   }
   const result = markContent(content, lines);
   const chapters = breakContentByChapter(result);

   console.log(
      ' ------> chapters ',
      chapters.length,
      chapters.map(item => item.title)
   );

   return { html: result };
}
