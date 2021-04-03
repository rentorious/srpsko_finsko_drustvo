import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsArticle } from "../actions/articleActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import TextEditor from "../components/TextEditor";

export default function ArticleEditorScreen(props) {
  return (
    <div className="card editor-container">
      <input
        className="editor-input"
        type="text"
        placeholder="Naslov"
        name="title"
      />
      {/* #TODO Might not even need this if i use slugify */}
      {/* <input
        className="editor-input"
        type="text"
        placeholder="Slug"
        name="slug"
      /> */}
      <TextEditor />

      <div className="editor-controls">
        <button className="btn btn-success">Save</button>
        <button className="btn btn-danger">Cancel</button>
      </div>
    </div>
  );
}
