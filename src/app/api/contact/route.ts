import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json(); // Get subject from request

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "yaminikaamaakshi@gmail.com", // Your email
            pass: "axrs kgda xetv ipam",
        },
    });

    const mailOptions = {
        from: `"Portfolio" <yaminikaamaakshi@gmail.com>`, // Custom sender name
        to: "yaminikaamaakshi@gmail.com", // Your receiving email
        subject: `Portfolio: ${subject} (From ${name})`, // Include subject in email
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`, // Include name, email, and message
        replyTo: email, // Allows direct replies to the sender
    };

    return transporter.sendMail(mailOptions)
        .then(info => {
            console.log(info);
            return new Response(
                JSON.stringify({ success: true, message: "Email sent successfully!" }),
                { status: 200 }
            );
        })
        .catch(error => {
            return new Response(
                JSON.stringify({ success: false, message: "Email sending failed", error: error.message }),
                { status: 500 }
            );
        });
}
