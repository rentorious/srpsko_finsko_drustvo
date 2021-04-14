import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "../actions/articleActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import TextEditor from "../components/TextEditor";
import Axios from "axios";
// import Select from "react-dropdown-select";

// TODO: Add category selection

export default function ArticleEditorScreen(props) {
  const dispatch = useDispatch();
  const articleCreate = useSelector((state) => state.articleCreate);
  const { loading, error } = articleCreate;
  const [title, setTitle] = useState("");
  const [contentSrb, setContentSrb] = useState("Srpski");
  const [contentFin, setContentFin] = useState("Suomalainen");
  const [category, setCategory] = useState("article");

  const createHandler = (e) => {
    e.preventDefault();

    const article = {
      title: title,
      contentFinnish: contentFin,
      contentSerbian: contentSrb,
      category: category,
      titleImage: titleImage,
    };

    console.log(category, titleImage);

    dispatch(createArticle(article));
    props.history.push(`/`);
  };

  const onChangeSerbian = (value) => setContentSrb(value);
  const onChangeFinnish = (value) => setContentFin(value);
  const onChangeTitle = (e) => setTitle(e.target.value);

  // Image upload
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const [titleImage, setTitleImage] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setTitleImage(data);
      console.log(titleImage);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  return (
    <div className="card">
      <form className="form editor-container" onSubmit={createHandler}>
        <div className="input-group">
          <label htmlFor="Title">Title:</label>
          <input
            className="editor-input"
            type="text"
            placeholder="Naslov"
            name="title"
            onChange={onChangeTitle}
            maxLength="50"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="titleImage">Title Image:</label>
          <input
            type="file"
            id="titleImage"
            label="Choose Title Image"
            onChange={uploadFileHandler}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            label="category"
            placeholder="Article"
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        {loadingUpload && <LoadingBox />}
        {errorUpload && <MessageBox variant="danger">{errorUpload}</MessageBox>}
        {/* <Select
        multi
        options={[{ addPlaceholder: "...add", multi: true, create: true }]}
      /> */}
        <div className="text-editor-container">
          <TextEditor
            onChangeFinnish={onChangeFinnish}
            onChangeSerbian={onChangeSerbian}
          />
        </div>

        <div className="editor-controls">
          <button className="btn btn-success" type="submit">
            Save
          </button>
          <button className="btn btn-danger">Cancel</button>
        </div>
        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
      </form>
    </div>
  );
}
