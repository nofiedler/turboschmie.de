'use server'

import { contactFormSchema } from '@/lib/schema'
import { z } from 'zod'

export async function contactFormAction(
  _prevState: unknown,
  formData: FormData
) {
  const file = formData.get('file') as File | null
  const defaultValues = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
    fileName: file ? file.name : '',
  }

  try {
    const data = contactFormSchema.parse({
      ...Object.fromEntries(formData),
      file: file,
    })

    // This simulates a slow response like a form submission.
    // Replace this with your actual form submission logic.
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log(data)

    return {
      defaultValues: {
        name: '',
        email: '',
        message: '',
        fileName: '',
      },
      success: true,
      errors: null,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        defaultValues,
        success: false,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
            key,
            value?.join(', '),
          ])
        ),
      }
    }

    return {
      defaultValues,
      success: false,
      errors: null,
    }
  }
}