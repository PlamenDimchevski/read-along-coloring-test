import DiscordProvider from 'next-auth/providers/discord';

export const options = {
   providers: [
      DiscordProvider({
         clientId: process.env.DISCORD_CLIENT_ID,
         clientSecret: process.env.DISCORD_CLIENT_SECRET,
         authorization: 'https://discord.com/api/oauth2/authorize?scope=identify+guilds',
         async profile(profile, channels) {
            const channelsData = await fetch('https://discord.com/api/users/@me/guilds', {
               headers: {
                  Authorization: `Bearer ${channels.access_token}`,
               },
            }).then(res => res.json());

            const requiredChanel = channelsData.find(item => (item.id = process.env.ALLOWED_CHANEL_ID));

            if (profile.avatar === null) {
               const defaultAvatarNumber = parseInt(profile.discriminator) % 5;
               profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
            } else {
               const format = profile.avatar.startsWith('a_') ? 'gif' : 'png';
               profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
            }

            return {
               id: profile.id,
               name: profile.username,
               global_name: profile.global_name,
               image: profile.image_url,
               requiredChanel,
            };
         },
      }),
   ],
};
