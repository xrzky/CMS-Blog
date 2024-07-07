import { Editor } from "@tinymce/tinymce-react";

interface EditorComponent { }

const EditorComponent: React.FC = () => {

    return (
            <Editor
                apiKey="tkv5n5zjtrvsyzpb9l85pl6benuijzqotnramkh310cyxcke" // Replace with your TinyMCE API key
                init={{
                    height: 500,
                    menubar: false,
                    plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                    toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                    ],
                    ai_request: (request: any, respondWith: { string: (callback: () => Promise<string>) => void }) => {
                        respondWith.string(() => Promise.reject("See docs to implement AI Assistant"));
                    },
                }}
                initialValue="Description..."
            />
    );
};

export default EditorComponent;
