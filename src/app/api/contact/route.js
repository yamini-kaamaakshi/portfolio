import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "yaminikaamaakshi@gmail.com", // Your email
                pass: "axrs kgda xetv ipam", // Your app password
            },
        });

        const mailOptions = {
            from: `"Portfolio" <yaminikaamaakshi@gmail.com>`, // Custom sender name
            to: "yaminikaamaakshi@gmail.com", // Your receiving email
            subject: `Portfolio: New Contact Form Submission from ${name}`,
            text: message, // Send only the message
            replyTo: email, // Allows direct replies to the sender
        };


        const info = await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ success: true, message: "Email sent successfully!" }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, message: "Email sending failed", error: error.message }),
            { status: 500 }
        );
    }
}
