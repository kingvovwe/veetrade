import { createTransport } from "nodemailer";
import { SMTP_EMAIL, SMTP_PASS } from "./env.config";

const transporter = createTransport({
    service: "gmail",
    auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASS
    }
});


export const verifyEmailConn = async () => {
    try{
        await transporter.verify();
        console.log("Gmail connected");
    } catch(e) {
        console.error(`Gmail verification failed: ${e}`)
    }
}

export const sendMail = async (subject: string, body: string, receiver: string) => {

    try {
        const info = await transporter.sendMail({
            from: `"Vovwero" ${SMTP_EMAIL}`,
            to: receiver,
            subject,
            html: body,
        });
        console.log(`Email sent successfully: ${info.messageId}`);
    } catch(e) {
        console.error(`Failed to send email: ${e}`);
    }
}