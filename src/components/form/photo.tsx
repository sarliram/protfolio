import { useState } from "react";
import { Controller } from "react-hook-form";
import { Trash2, Upload, ImageIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { handleToastError } from "@/lib/utils";

interface Props {
  name: string;
  control: any;
  label: string;
  handleUpload: (data: FormData) => Promise<any>;
  handleDelete: (url: string) => Promise<any>;
  disabled?: boolean;
}

export const Photo = (props: Props) => {
  const { control, name, label, handleUpload, handleDelete, disabled } = props;

  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { value, onChange } = field;

        const onDrop = async (acceptedFiles: File[]) => {
          if (acceptedFiles.length === 0 || disabled) return;

          try {
            setIsUploading(true);

            const file = acceptedFiles[0];
            const formData = new FormData();
            formData.append("file", file);

            const response = await handleUpload(formData);

            const uploadedUrl =
              typeof response === "string" ? response : response?.url;

            if (uploadedUrl) {
              onChange(uploadedUrl);
            }
          } catch (error) {
            handleToastError(error);
          } finally {
            setIsUploading(false);
          }
        };

        const { getRootProps, getInputProps } = useDropzone({
          onDrop,
          accept: {
            "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
          },
          multiple: false,
          disabled: disabled || isUploading || isDeleting,
        });

        const onDelete = async () => {
          if (!value || disabled) return;

          try {
            setIsDeleting(true);
            await handleDelete(value);
            onChange("");
          } catch (error) {
            handleToastError(error);
          } finally {
            setIsDeleting(false);
          }
        };

        const isLoading = isUploading || isDeleting;

        return (
          <div className="grid gap-2">
            <div className="relative h-full w-full group rounded-md overflow-hidden cursor-pointer">
              <div className="absolute w-full h-9 bg-linear-to-t from-black to-transparent z-10 flex items-end justify-end bottom-0 p-1">
                <ImageIcon className="h-4 w-4 text-white mr-1" />
              </div>

              <AspectRatio ratio={2 / 2}>
                <img
                  src={
                    value ||
                    "https://blocks.astratic.com/img/general-img-square.png"
                  }
                  alt={label}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>

              <div className="bg-black/30 z-10 hidden group-hover:block absolute inset-0 transition-all" />

              <div
                {...getRootProps()}
                className="absolute w-full z-20 h-0 group-hover:h-full bottom-0 left-0 right-0 flex items-center justify-center transition-all"
              >
                <div className="text-transparent group-hover:text-white flex flex-col items-center">
                  <input {...getInputProps()} />

                  <Upload className="h-2 w-2 group-hover:h-6 group-hover:w-6" />

                  {isUploading && (
                    <span className="mt-2 text-xs text-white">
                      Uploading...
                    </span>
                  )}
                </div>
              </div>

              {isLoading && (
                <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/40 text-white text-xs">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isUploading ? "Uploading..." : "Deleting..."}
                </div>
              )}

              {value && !isLoading && (
                <div className="absolute top-3 right-3 z-30">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Trash2 className="w-4 h-4 text-white/30 group-hover:text-white cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 mt-2 bg-transparent border-none">
                      <Button
                        type="button"
                        className="p-2 py-1 text-xs h-auto"
                        variant="destructive"
                        onClick={onDelete}
                      >
                        Confirm
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              )}
            </div>
          </div>
        );
      }}
    />
  );
};
