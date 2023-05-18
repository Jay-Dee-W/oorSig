import GithubProvider from 'next-auth/providers/github';
import NextAuth from 'next-auth';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
});
