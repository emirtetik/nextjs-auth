import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
console.log(process.env.GITHUP_SECRET)
console.log(process.env.GITHUP_ID)
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUP_ID ?? "",
      clientSecret: process.env.GITHUP_SECRET ?? "",
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };