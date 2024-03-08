import DiscordProvider from 'next-auth/providers/discord';

import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, ALLOWED_CHANEL_ID } from '@/config';

export const options = {
   providers: [
      DiscordProvider({
         clientId: DISCORD_CLIENT_ID,
         clientSecret: DISCORD_CLIENT_SECRET,
         authorization: {
            url: 'https://discord.com/api/oauth2/authorize',
            params: { scope: 'identify guilds' },
         },
         profile(profile) {
            if (profile.avatar === null) {
               const defaultAvatarNumber = parseInt(profile.discriminator) % 5;
               profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
            } else {
               const format = profile.avatar.startsWith('a_') ? 'gif' : 'png';
               profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
            }
            return {
               id: profile.id,
               name: profile.global_name,
               image: profile.image_url,
            };
         },
      }),
   ],
   pages: {
      error: '/auth/error',
   },
   callbacks: {
      async jwt({ token, account, profile, ...all }, ...props) {
         // Persist the OAuth access_token and or the user id to the token right after signin
         if (profile) {
            token.id = profile.id;
         }
         return token;
      },
      async session({ session, token, user, ...all }, ...props) {
         // Send properties to the client, like an access_token and user id from a provider.
         session.user.id = token.id;
         return session;
      },
      async signIn({ account }) {
         const channelsData = await fetch('https://discord.com/api/users/@me/guilds', {
            headers: {
               Authorization: `Bearer ${account.access_token}`,
            },
         })
            .then(res => res.json())
            .catch(() => []);
         const requiredChanel = channelsData.find(item => item.id == ALLOWED_CHANEL_ID);

         return requiredChanel?.id === ALLOWED_CHANEL_ID;
      },
   },
};
