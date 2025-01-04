import { createTransport } from "nodemailer";

export async function POST(req: Request) {
    const adminEmail = process.env.NEXT_PUBLIC_MAIL_ADDRESS;
    const adminPass = process.env.NEXT_PUBLIC_MAIL_PASS;

    const transporter = createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
            user: adminEmail,
            pass: adminPass,
        },
    });

    const data = await req.json();
    await transporter.sendMail({
        from: data.email,
        to: adminEmail,
        subject: `【お問い合わせ】 ${data.email}`,
        text: `
            名前
            ${data.name}

            メールアドレス
            ${data.email}

            お問い合わせ内容
            ${data.body}
        `,
        html: `
            <p class='title'>名前：</p>
            <p class='text'>${data.name}</p>
            <p class='title'>メールアドレス：</p>
            <p class='text'>${data.email}</p>
            <p class='title'>内容：</p>
            <p class='text'>${data.body}</p>
            <style>
            * {
                padding: 0;
                margin: 0;
            }
            .title {
                font-weight: 600;
            }
            .text {
                padding-top: 5px;
                padding-bottom: 20px;
            }
            </style>
        `,
    });

    return new Response(JSON.stringify({status: 200, message: 'success'}))
};
