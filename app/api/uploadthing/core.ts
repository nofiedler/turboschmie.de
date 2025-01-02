import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
export const ourFileRouter = {
  contactUploader: f({
    image: { maxFileSize: "4MB" },
    pdf: { maxFileSize: "4MB" }
  })
    .middleware(async () => {
      return { uploadedAt: new Date().toISOString() };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { 
        uploadedAt: metadata.uploadedAt,
        fileUrl: file.url 
      };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;
