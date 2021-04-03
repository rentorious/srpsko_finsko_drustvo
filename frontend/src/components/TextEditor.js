import React, { useRef, useEffect, useState } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const TextEditor = (props) => {
  const { defaultValue } = props;
  const editorRef = useRef();
  useEffect(() => {
    // Get underlining core object here
    // Notice that useEffect is been used because you have to make sure the editor is rendered.
    console.log(editorRef.current.editor.core);
  }, []);
  const [value, setValue] = useState("");
  const onChange = (value) => {
    setValue(value);
    console.log(value);
  };
  return (
    <div>
      <SunEditor
        height="500px"
        defaultValue={"<h1>Srpski</h1>"}
        className="text-editor"
        ref={editorRef}
        setOptions={{ buttonList: buttonList.complex }}
        onChange={onChange}
        id="editor-serbian"
      />
      <SunEditor
        height="500px"
        defaultValue={"<h1>Suomalainen</h1>"}
        className="text-editor"
        ref={editorRef}
        setOptions={{ buttonList: buttonList.complex }}
        onChange={onChange}
        id="editor-finnish "
      />
    </div>
  );
};
export default TextEditor;
