'use client'

import * as React from 'react'
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

import { contactFormAction } from '@/lib/actions'
import { Check, Upload } from 'lucide-react'

const MAX_FILE_SIZE = 5000000 // 5MB

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
  const [state, formAction, pending] = React.useActionState(contactFormAction, {
    defaultValues: {
      name: '',
      email: '',
      message: '',
      file: null,
    },
    success: false,
    errors: null,
  })

  const [fileName, setFileName] = React.useState<string | null>(null)
  const [fileSize, setFileSize] = React.useState<number>(0)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setFileSize(file.size)
    } else {
      setFileName(null)
      setFileSize(0)
    }
  }

  React.useEffect(() => {
    if (state.success) {
      setFileName(null)
      setFileSize(0)
      // Reset the file input
      const fileInput = document.getElementById('file') as HTMLInputElement
      if (fileInput) {
        fileInput.value = ''
      }
    }
  }, [state.success])

  const fileSizePercentage = (fileSize / MAX_FILE_SIZE) * 100

  return (
    <Card className={cn('w-full max-w-md', className)}>
      <CardHeader>
        <CardTitle>How can we help?</CardTitle>
        <CardDescription>
          Need help with your project? We&apos;re here to assist you.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="flex flex-col gap-6">
          {state.success ? (
            <p className="text-green-600 flex items-center gap-2 text-sm">
              <Check className="size-4" />
              Your message has been sent. Thank you.
            </p>
          ) : null}
          {!state.success && state.errors && (
            <p className="text-red-600 flex items-center gap-2 text-sm">
              An error occurred. Please try again.
            </p>
          )}
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors?.name}
          >
            <Label
              htmlFor="name"
              className="group-data-[invalid=true]/field:text-destructive"
            >
              Name <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Lee Robinson"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.name}
              aria-errormessage="error-name"
              defaultValue={typeof state.defaultValues.name === 'string' ? state.defaultValues.name : ''}
            />
            {state.errors?.name && (
              <p id="error-name" className="text-destructive text-sm">
                {state.errors.name}
              </p>
            )}
          </div>
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors?.email}
          >
            <Label
              htmlFor="email"
              className="group-data-[invalid=true]/field:text-destructive"
            >
              Email <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="leerob@acme.com"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.email}
              aria-errormessage="error-email"
              defaultValue={typeof state.defaultValues.email === 'string' ? state.defaultValues.email : ''}
            />
            {state.errors?.email && (
              <p id="error-email" className="text-destructive text-sm">
                {state.errors.email}
              </p>
            )}
          </div>
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors?.message}
          >
            <Label
              htmlFor="message"
              className="group-data-[invalid=true]/field:text-destructive"
            >
              Message <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.message}
              aria-errormessage="error-message"
              defaultValue={typeof state.defaultValues.message === 'string' ? state.defaultValues.message : ''}
            />
            {state.errors?.message && (
              <p id="error-message" className="text-destructive text-sm">
                {state.errors.message}
              </p>
            )}
          </div>
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors?.file}
          >
            <Label
              htmlFor="file"
              className="group-data-[invalid=true]/field:text-destructive"
            >
              Attachment <span aria-hidden="true">*</span>
            </Label>
            <div className="flex flex-col gap-2">
              <Input
                id="file"
                name="file"
                type="file"
                accept=".jpg,.png,.pdf"
                className="hidden"
                onChange={handleFileChange}
                disabled={pending}
                required
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => document.getElementById('file')?.click()}
              >
                <Upload className="mr-2 h-4 w-4" />
                {fileName || 'Upload file'}
              </Button>
              {fileName && (
                <div className="text-sm text-muted-foreground">
                  <p>{fileName}</p>
                  <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${Math.min(fileSizePercentage, 100)}%` }}
                    ></div>
                  </div>
                  <p className="mt-1">
                    {(fileSize / 1000000).toFixed(2)} MB / 5 MB
                  </p>
                </div>
              )}
            </div>
            {state.errors?.file && (
              <p id="error-file" className="text-destructive text-sm">
                {state.errors.file}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" size="sm" disabled={pending}>
            {pending ? 'Sending...' : 'Send Message'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

