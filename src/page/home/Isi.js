import React from 'react'
import { Editor } from "react-draft-wysiwyg";
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Isi() {
  return (
    <div  className='mt-12 mb-12'>
      <Editor
        // editorState={editorState}
        // toolbarClassName="toolbarClassName"
        // wrapperClassName="wrapperClassName"
        // editorClassName="editorClassName"
        // onEditorStateChange={this.onEditorStateChange}
        />
    </div>
  )
}
