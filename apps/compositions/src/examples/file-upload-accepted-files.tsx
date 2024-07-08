import { Button } from "compositions/ui/button"
import { FileUploadRoot, FileUploadTrigger } from "compositions/ui/file-button"
import { HiUpload } from "react-icons/hi"

export const FileUploadAcceptedFiles = () => {
  return (
    <FileUploadRoot accept={["image/png"]}>
      <FileUploadTrigger>
        <Button variant="outline" size="sm" startIcon={<HiUpload />}>
          Upload file
        </Button>
      </FileUploadTrigger>
    </FileUploadRoot>
  )
}
