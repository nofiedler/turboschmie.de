import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(32, { message: 'Name must be at most 32 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z
    .string()
    .min(2, { message: 'Message must be at least 2 characters' })
    .max(1000, { message: 'Message must be at most 1000 characters' }),
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 5000000, `Max file size is 5MB.`)
    .refine(
      (file) => ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type),
      "Only .jpg, .png, and .pdf files are accepted."
    ),
})

