import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            name: string,
            global_name: string,
            image: string,
        };
    }
}