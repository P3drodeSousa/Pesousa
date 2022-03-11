import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    Providers.LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),

    //   Providers.Email({
    //     server: {
    //       host: process.env.EMAIL_SERVER_HOST,
    //       port: process.env.EMAIL_SERVER_PORT,
    //       auth: {
    //         user: process.env.EMAIL_SERVER_USER,
    //         pass: process.env.EMAIL_SERVER_PASSWORD,
    //       },
    //     },
    //     from: process.env.EMAIL_FROM,
    //   }),
  ],
  // pages: {
  //   signIn: "/signin",
  // },
  // database: {
  //   type: "sqlite",
  //   database: ":memory:",
  //   synchronize: true,
  // },
};

export default (req, res) => NextAuth(req, res, options);
