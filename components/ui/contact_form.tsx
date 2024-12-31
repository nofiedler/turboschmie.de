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
import { Check, X, Moon, Sun } from 'lucide-react'

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
  const [state, formAction, pending] = React.useActionState(contactFormAction, {
    defaultValues: {
      name: '',
      email: '',
      message: '',
      fileName: '',
    },
    success: false,
    errors: null,
  })

  const [file, setFile] = React.useState<File | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const removeFile = () => {
    setFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  //const fileProgress = file ? (file.size / (4 * 1024 * 1024)) * 100 : 0
  const isFileTooLarge = file && file.size > 4 * 1024 * 1024;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Card className={cn('w-full max-w-md', className, isDarkMode ? 'dark' : '')}>
      <CardHeader className="relative">
        <CardTitle className="dark:text-white">Wie können wir helfen?</CardTitle>
        <CardDescription className="dark:text-gray-300">
          Brauchen Sie Hilfe bei Ihrem Projekt?<br />Wir sind hier, um Ihnen zu helfen.
        </CardDescription>
        <Button
          className="absolute top-4 right-4"
          size="icon"
          variant="outline"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="flex flex-col gap-6">
          {state.success ? (
            <p className="text-muted-foreground flex items-center gap-2 text-sm dark:text-gray-300">
              <Check className="size-4" />
              Ihre Nachricht wurde gesendet. Vielen Dank.
            </p>
          ) : null}
          <div
            className="group/field grid gap-2"
            data-invalid={!!state.errors?.name}
          >
            <Label
              htmlFor="name"
              className="group-data-[invalid=true]/field:text-destructive dark:text-white"
            >
              Name <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Lee Robinson"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive dark:bg-gray-700 dark:text-white dark:border-gray-600"
              disabled={pending}
              aria-invalid={!!state.errors?.name}
              aria-errormessage="error-name"
              defaultValue={state.defaultValues.name}
            />
            {state.errors?.name && (
              <p id="error-name" className="text-destructive text-sm dark:text-red-400">
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
              className="group-data-[invalid=true]/field:text-destructive dark:text-white"
            >
              Email <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="leerob@acme.com"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive dark:bg-gray-700 dark:text-white dark:border-gray-600"
              disabled={pending}
              aria-invalid={!!state.errors?.email}
              aria-errormessage="error-email"
              defaultValue={state.defaultValues.email}
            />
            {state.errors?.email && (
              <p id="error-email" className="text-destructive text-sm dark:text-red-400">
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
              className="group-data-[invalid=true]/field:text-destructive dark:text-white"
            >
              Nachricht/Anfrage <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Geben Sie hier Ihre Nachricht ein..."
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive dark:bg-gray-700 dark:text-white dark:border-gray-600"
              disabled={pending}
              aria-invalid={!!state.errors?.message}
              aria-errormessage="error-message"
              defaultValue={state.defaultValues.message}
            />
            {state.errors?.message && (
              <p id="error-message" className="text-destructive text-sm dark:text-red-400">
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
              className="group-data-[invalid=true]/field:text-destructive dark:text-white"
            >
              File Upload <span aria-hidden="true">*</span>
              <small className="block text-xs text-gray-500 dark:text-gray-400">Laden Sie bitte ihren Fahrzeugschein hoch</small>
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id="file"
                name="file"
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf"
                className="hidden"
                disabled={pending}
                aria-invalid={!!state.errors?.file}
                aria-errormessage="error-file"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                disabled={pending}
                className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
              >
                Datei auswählen
              </Button>
              {file && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="truncate max-w-[150px] dark:text-white">{file.name}</span>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-destructive hover:text-destructive/80 dark:text-red-400 dark:hover:text-red-300"
                    disabled={pending}
                  >
                    <X className="size-4" />
                  </button>
                </div>
              )}
            </div>
            {file && (
              <div className="mt-2">
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className={cn(
                    isFileTooLarge ? "text-destructive dark:text-red-400" : "dark:text-white"
                  )}>
                    {formatFileSize(file.size)}/4MB
                  </span>
                  <span className={cn(
                    isFileTooLarge ? "text-destructive dark:text-red-400" : "dark:text-white"
                  )}>
                    {Math.min(Math.round((file.size / (4 * 1024 * 1024)) * 100), 100)}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 dark:bg-gray-600">
                  <div
                    className={cn(
                      "h-2 rounded-full",
                      isFileTooLarge
                        ? "bg-destructive dark:bg-red-500"
                        : "bg-primary dark:bg-blue-500"
                    )}
                    style={{ width: `${Math.min((file.size / (4 * 1024 * 1024)) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            )}
            {isFileTooLarge && (
              <p className="text-destructive text-sm mt-1 dark:text-red-400">
                Dateigröße überschreitet das Limit von 4MB.
              </p>
            )}
            {state.errors?.file && (
              <p id="error-file" className="text-destructive text-sm dark:text-red-400">
                {state.errors.file}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            size="sm"
            disabled={pending}
            className="dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
          >
            {pending ? 'Senden...' : 'Nachricht senden'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}