import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createArticle,
  detailsArticle,
  updateArticle,
} from "../actions/articleActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import TextEditor from "../components/TextEditor";
import Axios from "axios";

export default function ArticleEditorScreen(props) {
  const dispatch = useDispatch();
  const articleCreate = useSelector((state) => state.articleCreate);
  const { error } = articleCreate;
  const [title, setTitle] = useState("");
  const [contentSrb, setContentSrb] = useState("Srpski");
  const [contentFin, setContentFin] = useState("Suomalainen");
  const [category, setCategory] = useState("article");
  const articleDetails = useSelector((state) => state.articleDetails);
  const { loadingDetails, errorDetails, article } = articleDetails;

  // For editing articles
  useEffect(() => {
    if (props.match.params.slug) {
      dispatch(detailsArticle(props.match.params.slug));
    }
  }, [dispatch, props.match.params.slug]);

  useEffect(() => {
    if (
      article &&
      !(Object.keys(article).length === 0 && article.constructor === Object)
    ) {
      console.log(article);
      setTitle(article.title);
      setContentSrb(article.contentSerbian);
      setContentFin(article.contentFinnish);
      setCategory(article.category);
      setTitleImage(article.titleImage);
    }
  }, [article]);

  const createHandler = (e) => {
    e.preventDefault();

    const updatedArticle = {
      title: title,
      contentFinnish: contentFin,
      contentSerbian: contentSrb,
      category: category,
      titleImage: titleImage,
      slug: props.match.params.slug,
    };

    if (props.match.params.slug) dispatch(updateArticle(updatedArticle));
    else {
      console.log("new article", updatedArticle);
      dispatch(createArticle(updatedArticle));
    }
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
    <div>
      {loadingDetails ? (
        <LoadingBox />
      ) : errorDetails ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
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
                value={title}
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
              />
            </div>
            {loadingUpload && <LoadingBox />}
            {errorUpload && (
              <MessageBox variant="danger">{errorUpload}</MessageBox>
            )}
            <div className="input-group">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                label="category"
                placeholder="Article"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                required
              />
            </div>

            <div className="text-editor-container">
              <TextEditor
                setContentsSrb={contentSrb}
                setContentsFin={contentFin}
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
            {/* {/* {loading && <LoadingBox />} */}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
          </form>
        </div>
      )}
    </div>
  );
}
