import GithubProvider from 'next-auth/providers/github';
import NextAuth from 'next-auth';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID ?? '',
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET ?? '',
      authorization: {
        params: {
          scope: 'read:org read:discussion read:repo read:user user:email',
        },
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_JWT_SECRET ?? '',
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token = Object.assign({}, token, {
          access_token: account.access_token,
        });
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          access_token: token.access_token,
        });
      }
      return session;
    },
  },
});
