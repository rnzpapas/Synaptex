import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

console.log(process.env.GOOGLE_CLIENT_ID)
console.log(process.env.GOOGLE_CLIENT_SECRET)
const authOption: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            // Attach user ID to session
            if (session.user) {
                session.user.id = token.sub as string
            }
            return session
        },
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
    },
    pages: {
        signIn: "/login",
    },
}

const handler = NextAuth(authOption);

export { handler as GET, handler as POST }