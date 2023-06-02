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
          accessToken: account.access_token,
        });
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          accessToken: token.accessToken,
        });
      }
      return session;
    },
  },
});
