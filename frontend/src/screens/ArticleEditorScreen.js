import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "../actions/articleActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import TextEditor from "../components/TextEditor";
// import Select from "react-dropdown-select";

// TODO: Add category selection

export default function ArticleEditorScreen(props) {
  const dispatch = useDispatch();
  const articleCreate = useSelector((state) => state.articleCreate);
  const { loading, error } = articleCreate;
  const [title, setTitle] = useState("");
  const [contentSrb, setContentSrb] = useState("Srpski");
  const [contentFin, setContentFin] = useState("Suomalainen");
  // const [category, setCategory] = useState("");
  const createHandler = () => {
    const article = {
      title: title,
      contentFinnish: contentFin,
      contentSerbian: contentSrb,
      category: "test",
      titleImage: "/img/1.jpg",
    };

    console.log(article);
    dispatch(createArticle(article));
    props.history.push(`/`);
  };

  const onChangeSerbian = (value) => setContentSrb(value);
  const onChangeFinnish = (value) => setContentFin(value);
  const onChangeTitle = (e) => setTitle(e.target.value);
  return (
    <div className="card editor-container">
      <input
        className="editor-input"
        type="text"
        placeholder="Naslov"
        name="title"
        onChange={onChangeTitle}
      />
      {/* <Select
        multi
        options={[{ addPlaceholder: "...add", multi: true, create: true }]}
      /> */}
      <TextEditor
        onChangeFinnish={onChangeFinnish}
        onChangeSerbian={onChangeSerbian}
      />

      <div className="editor-controls">
        <button className="btn btn-success" onClick={createHandler}>
          Save
        </button>
        <button className="btn btn-danger">Cancel</button>
      </div>
      {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
    </div>
  );
}
