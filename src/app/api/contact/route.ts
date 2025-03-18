import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "yaminikaamaakshi@gmail.com", // Your email
                pass: "your-app-password", // Your Gmail app password (use an app-specific password)
            },
        });

        const mailOptions = {
            from: `"Portfolio" <yaminikaamaakshi@gmail.com>`, // Custom sender name
            to: "yaminikaamaakshi@gmail.com", // Your receiving email
            subject: `Portfolio: ${subject} (From ${name})`, // Include subject in email
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`, // Include name, email, and message
            replyTo: email, // Allows direct replies to the sender
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: ", info.response);

        return new Response(
            JSON.stringify({ success: true, message: "Email sent successfully!" }),
            { status: 200 }
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            // Now that TypeScript knows error is an instance of Error, we can access error.message safely
            console.error("Error while sending email: ", error.message);

            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Email sending failed",
                    error: error.message,
                }),
                { status: 500 }
            );
        } else {
            // In case the error is not an instance of Error
            console.error("Unknown error while sending email:", error);

            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Email sending failed",
                    error: "Unknown error",
                }),
                { status: 500 }
            );
        }
    }
}