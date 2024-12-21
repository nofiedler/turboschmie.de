'use server'

import { contactFormSchema } from '@/lib/schema'
import { z } from 'zod'

export async function contactFormAction(
  _prevState: unknown,
  formData: FormData
) {
  const defaultValues = Object.fromEntries(formData.entries())

  try {
    const data = contactFormSchema.parse({
      ...defaultValues,
      file: formData.get('file') as File | null,
    })

    // This simulates a slow response like a form submission.
    // Replace this with your actual form submission logic.
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log(data)

    // Handle file upload here
    if (data.file) {
      // Example: Save the file to a storage service
      // const fileUrl = await uploadFile(data.file)
      console.log(`File uploaded: ${data.file.name}`)
    }

    return {
      defaultValues: {
        name: '',
        email: '',
        message: '',
        file: null,
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

