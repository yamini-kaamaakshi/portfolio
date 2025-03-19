import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // Use env variable
            pass: process.env.EMAIL_PASS, // Use env variable
        },
    });

    const mailOptions = {
        from: `"Portfolio" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `Portfolio: ${subject} (From ${name})`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info);

    return new Response(
        JSON.stringify({ success: true, message: "Email sent successfully!" }),
        { status: 200 }
    );
}
