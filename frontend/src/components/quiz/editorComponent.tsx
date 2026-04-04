import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import { image_handler } from "../../utils/imageHandler";

interface EditorComponentProps {
    control: any,
    name: string,
    answerId?: string,
    update?: any
}

export function EditorComponent({ control, name }: EditorComponentProps) {

    return (
        <>
            <Controller 
                control={control}
                name={name}
                render={({ field: {onChange, value} }) => (
                    <Editor
                        tinymceScriptSrc="/tinymce/tinymce.min.js"
                        licenseKey="gpl"
                        value={value || ""}
                        onEditorChange={(content) => {
                            onChange(content)
                        }}
                        init={{
                            base_url: '/tinymce', 
                            suffix: '.min',
                            promotion: false,     
                            branding: false,
                            height: 250,
                            width: 750,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor code | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            images_upload_handler: (blobInfo: any, progress: any) => image_handler(blobInfo, progress)
                        }}
                    />
                )}
            />
        </>
    )
}