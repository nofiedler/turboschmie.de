'use server'

import nodemailer from 'nodemailer'

export async function submitForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  const file = formData.get('file') as File

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configure your email service here
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password',
    },
  })

  // Prepare email content
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'info@info.de',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    attachments: [
        {
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()), // ArrayBuffer in Buffer umwandeln
        },
      ],
  }

  try {
    // Send email
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Form submitted successfully!' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to submit form. Please try again.' }
  }
}

