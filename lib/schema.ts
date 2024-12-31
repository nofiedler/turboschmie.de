import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name muss mindestens 2 Zeichen lang sein' })
    .max(32, { message: 'Name darf höchstens 32 Zeichen lang sein' }),
  email: z.string().email({ message: 'Ungültige E-Mail-Adresse' }),
  message: z
    .string()
    .min(2, { message: 'Nachricht muss mindestens 2 Zeichen lang sein' })
    .max(1000, { message: 'Nachricht darf höchstens 1000 Zeichen lang sein' }),
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 4 * 1024 * 1024, {
      message: 'Dateigröße muss 4MB oder weniger sein',
    })
    .refine(
      (file) => ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type),
      {
        message: 'Datei muss JPG, JPEG, PNG oder PDF sein',
      }
    ),
})
