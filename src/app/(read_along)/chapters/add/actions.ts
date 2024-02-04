'use server';
import db from '@/src/lib/db';
import sanitizeHtml from 'sanitize-html';

interface Chapters {
   title: string;
   content: string;
}

interface Content {
   html: string;
}

function processContent(content: string): Chapters[] {
   const sanitizedContent: string = sanitizeHtml(content, {
      allowedTags: ['b', 'i', 'em', 'strong', 'p', 'h1'],
      allowedAttributes: {},
      allowedIframeHostnames: [],
      parser: {
         lowerCaseTags: true,
      },
   });
   return sanitizedContent.split('<h1>').reduce((chapters: Chapters[], chapter: string): Chapters[] => {
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
   const chapters = processContent(contentData);
   await db.chapter.createMany({ data: chapters });
   return { html: '' };
}
