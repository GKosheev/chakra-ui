import { Button } from "compositions/ui/button"
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "compositions/ui/file-button"
import { HiUpload } from "react-icons/hi"

export const FileUploadMultiple = () => {
  return (
    <FileUploadRoot maxFiles={5}>
      <FileUploadTrigger>
        <Button variant="outline" size="sm" startIcon={<HiUpload />}>
          Upload file
        </Button>
      </FileUploadTrigger>
      <FileUploadList />
    </FileUploadRoot>
  )
}
