import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import connectDb from "@/middleware/ConnectDb";
import User from "@/models/User";
import Payment from "@/models/Payment";

export const authoptions = NextAuth({
    secret: process.env.SECRET,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    callbacks: {
        // Funtion for retriving information from the provider
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider === 'github') {
                try {
                    await connectDb();
                    const existingUser = await User.findOne({ email: user.email });
                    if (!existingUser) {
                        await User.create({
                            email: user.email,
                            username: user.email.split('@')[0],
                        });
                    }
                    return true;
                } catch (error) {
                    console.error('Error in signIn:', error);
                    return false; // Indicate failure
                }
            }
        },

        // Function for Setting the arguemnt to the session
        async session({ session, token, user }) {
            await connectDb()
            const dbuser = await User.findOne({ email: session.user.email })
            session.user.name = dbuser.username
            return session
        }
    }
});

export { authoptions as GET, authoptions as POST };