import { sendMail } from "../../config/email.config";

export const sendVerifyEmailOTP = async (
  receiver: string,
  otp: string
): Promise<void> => {
  const subject = "Verify Your Email";

  const body = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Verify Your Email</title>
      </head>

      <body style="
        margin: 0;
        padding: 0;
        background-color: #f4f6f8;
        font-family: Arial, Helvetica, sans-serif;
        color: #1f2937;
      ">
        <div style="
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        ">

          <div style="
            background-color: #111827;
            padding: 28px;
            text-align: center;
          ">
            <h1 style="
              margin: 0;
              color: #ffffff;
              font-size: 24px;
            ">
              VeeTrade
            </h1>
          </div>

          <div style="padding: 35px 30px;">
            <h2 style="
              margin-top: 0;
              font-size: 22px;
            ">
              Verify your email address
            </h2>

            <p style="
              font-size: 15px;
              line-height: 1.6;
              color: #4b5563;
            ">
              Thanks for creating your VeeTrade account. Please use the
              verification code below to verify your email address.
            </p>

            <div style="
              margin: 30px 0;
              padding: 20px;
              background-color: #f3f4f6;
              border-radius: 8px;
              text-align: center;
            ">
              <span style="
                font-size: 32px;
                font-weight: bold;
                letter-spacing: 8px;
                color: #111827;
              ">
                ${otp}
              </span>
            </div>

            <p style="
              font-size: 14px;
              color: #6b7280;
              line-height: 1.5;
            ">
              This code will expire shortly. If you did not create this
              account, you can safely ignore this email.
            </p>

            <p style="
              margin-top: 30px;
              font-size: 14px;
              color: #4b5563;
            ">
              — The VeeTrade Team
            </p>
          </div>

          <div style="
            padding: 20px 30px;
            background-color: #f9fafb;
            text-align: center;
            font-size: 12px;
            color: #9ca3af;
          ">
            © ${new Date().getFullYear()} VeeTrade. All rights reserved.
          </div>

        </div>
      </body>
    </html>
  `;

  await sendMail(subject, body, receiver);
};


export const sendResetPasswordOTP = async (
  receiver: string,
  otp: string
): Promise<void> => {
  const subject = "Reset Your Password";

  const body = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Reset Your Password</title>
      </head>

      <body style="
        margin: 0;
        padding: 0;
        background-color: #f4f6f8;
        font-family: Arial, Helvetica, sans-serif;
        color: #1f2937;
      ">
        <div style="
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        ">

          <div style="
            background-color: #111827;
            padding: 28px;
            text-align: center;
          ">
            <h1 style="
              margin: 0;
              color: #ffffff;
              font-size: 24px;
            ">
              VeeTrade
            </h1>
          </div>

          <div style="padding: 35px 30px;">
            <h2 style="
              margin-top: 0;
              font-size: 22px;
            ">
              Reset your password
            </h2>

            <p style="
              font-size: 15px;
              line-height: 1.6;
              color: #4b5563;
            ">
              We received a request to reset the password for your VeeTrade
              account. Use the OTP below to continue.
            </p>

            <div style="
              margin: 30px 0;
              padding: 20px;
              background-color: #f3f4f6;
              border-radius: 8px;
              text-align: center;
            ">
              <span style="
                font-size: 32px;
                font-weight: bold;
                letter-spacing: 8px;
                color: #111827;
              ">
                ${otp}
              </span>
            </div>

            <p style="
              font-size: 14px;
              color: #6b7280;
              line-height: 1.5;
            ">
              This code will expire shortly. If you did not request a
              password reset, please ignore this email. Your password will
              remain unchanged.
            </p>

            <p style="
              margin-top: 30px;
              font-size: 14px;
              color: #4b5563;
            ">
              — The VeeTrade Team
            </p>
          </div>

          <div style="
            padding: 20px 30px;
            background-color: #f9fafb;
            text-align: center;
            font-size: 12px;
            color: #9ca3af;
          ">
            © ${new Date().getFullYear()} VeeTrade. All rights reserved.
          </div>

        </div>
      </body>
    </html>
  `;

  await sendMail(subject, body, receiver);
};


export const sendLoginWelcomeEmail = async (
  receiver: string,
  firstname: string
): Promise<void> => {
  const subject = "Welcome Back to VeeTrade";

  const body = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome Back</title>
      </head>

      <body style="
        margin: 0;
        padding: 0;
        background-color: #f4f6f8;
        font-family: Arial, Helvetica, sans-serif;
        color: #1f2937;
      ">
        <div style="
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        ">

          <div style="
            background-color: #111827;
            padding: 28px;
            text-align: center;
          ">
            <h1 style="
              margin: 0;
              color: #ffffff;
              font-size: 24px;
            ">
              VeeTrade
            </h1>
          </div>

          <div style="padding: 35px 30px;">

            <h2 style="
              margin-top: 0;
              font-size: 22px;
            ">
              Welcome back, ${firstname}!
            </h2>

            <p style="
              font-size: 15px;
              line-height: 1.6;
              color: #4b5563;
            ">
              You have successfully logged into your VeeTrade account.
              We're glad to have you back.
            </p>

            <div style="
              margin: 30px 0;
              padding: 20px;
              background-color: #f3f4f6;
              border-radius: 8px;
            ">
              <p style="
                margin: 0;
                font-size: 14px;
                line-height: 1.6;
                color: #4b5563;
              ">
                If this login wasn't you, please secure your account by
                changing your password immediately.
              </p>
            </div>

            <p style="
              font-size: 14px;
              color: #4b5563;
            ">
              — The VeeTrade Team
            </p>

          </div>

          <div style="
            padding: 20px 30px;
            background-color: #f9fafb;
            text-align: center;
            font-size: 12px;
            color: #9ca3af;
          ">
            © ${new Date().getFullYear()} VeeTrade. All rights reserved.
          </div>

        </div>
      </body>
    </html>
  `;

  await sendMail(subject, body, receiver);
};


export const sendRegisterWelcomeEmail = async (
  receiver: string,
  firstname: string
): Promise<void> => {
  const subject = "Welcome to VeeTrade";

  const body = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to VeeTrade</title>
      </head>

      <body style="
        margin: 0;
        padding: 0;
        background-color: #f4f6f8;
        font-family: Arial, Helvetica, sans-serif;
        color: #1f2937;
      ">
        <div style="
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        ">

          <div style="
            background-color: #111827;
            padding: 28px;
            text-align: center;
          ">
            <h1 style="
              margin: 0;
              color: #ffffff;
              font-size: 24px;
            ">
              VeeTrade
            </h1>
          </div>

          <div style="padding: 35px 30px;">

            <h2 style="
              margin-top: 0;
              font-size: 22px;
            ">
              Welcome to VeeTrade, ${firstname}!
            </h2>

            <p style="
              font-size: 15px;
              line-height: 1.6;
              color: #4b5563;
            ">
              Your account has been successfully created.
              We're excited to have you with us.
            </p>

            <div style="
              margin: 30px 0;
              padding: 20px;
              background-color: #f3f4f6;
              border-radius: 8px;
            ">
              <p style="
                margin: 0;
                font-size: 14px;
                line-height: 1.6;
                color: #4b5563;
              ">
                Please verify your email address to complete your account
                setup and get access to all available features.
              </p>
            </div>

            <p style="
              font-size: 14px;
              color: #4b5563;
            ">
              Thanks for choosing VeeTrade.
            </p>

            <p style="
              margin-top: 30px;
              font-size: 14px;
              color: #4b5563;
            ">
              — The VeeTrade Team
            </p>

          </div>

          <div style="
            padding: 20px 30px;
            background-color: #f9fafb;
            text-align: center;
            font-size: 12px;
            color: #9ca3af;
          ">
            © ${new Date().getFullYear()} VeeTrade. All rights reserved.
          </div>

        </div>
      </body>
    </html>
  `;

  await sendMail(subject, body, receiver);
};