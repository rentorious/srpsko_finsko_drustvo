import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsArticle } from "../actions/articleActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function FullArticleScreen(props) {
  const dispatch = useDispatch();
  const slug = props.match.params.slug;
  const articleDetails = useSelector((state) => state.articleDetails);
  const { loading, error, article } = articleDetails;

  useEffect(() => {
    dispatch(detailsArticle(slug));
  }, [dispatch, slug]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <header>
            <div className="card detail-header">
              <div className="image">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="responsive"
                />
              </div>
              <div className="description">
                <div className="date-text">{article.date}</div>
                <h1>{article.title}</h1>

                <div className="footer">
                  <a href="/share">
                    <i className="fas fa-share-alt"></i>
                  </a>
                  <a href="/print">
                    <i className="fas fa-print"></i>
                  </a>
                </div>
              </div>
            </div>
          </header>
          <main className="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
              tortor nec ante porttitor sollicitudin. Etiam ultricies est nisl,
              sit amet lacinia nibh molestie sed. Suspendisse facilisis dui nec
              turpis lacinia volutpat. Duis quis semper felis, sed porttitor
              felis. Vivamus fringilla tincidunt efficitur. Donec posuere felis
              id tellus viverra, nec pharetra erat tincidunt. Mauris fringilla
              fringilla pretium. Etiam placerat tellus at mi porttitor dapibus.
              Donec pellentesque enim vel rutrum imperdiet. Aenean varius quam
              nunc, at malesuada odio auctor sit amet.
            </p>
            <p>
              Vivamus posuere orci in rutrum vestibulum. Etiam venenatis odio at
              odio lacinia viverra. Fusce pellentesque posuere ipsum, nec
              sagittis turpis sagittis eget. Etiam auctor pharetra hendrerit.
              Donec nec tincidunt est. Mauris tortor sem, ultrices sit amet
              tincidunt a, viverra eu nunc. Etiam id commodo urna, sed sodales
              nulla.
            </p>
            <p>
              Quisque interdum, risus eu tempus vestibulum, elit justo iaculis
              sapien, quis aliquet nunc odio non elit. Fusce dui ligula, laoreet
              non dignissim eget, pulvinar vitae sem. Sed non turpis ut lacus
              malesuada mollis sed a magna. Vivamus ut molestie felis. Maecenas
              elementum sed purus sed consectetur. Nulla quis tortor at dui
              vestibulum iaculis. Duis cursus suscipit venenatis. Aliquam ligula
              mauris, laoreet sed porta eget, consectetur sed ipsum. Morbi in
              porta lectus. Aliquam erat volutpat. Integer euismod pulvinar
              tellus, lacinia ornare justo dignissim et.
            </p>
            <p>
              Maecenas mauris odio, convallis vel felis quis, semper pharetra
              massa. Vivamus laoreet tellus purus, eu viverra dui facilisis ut.
              Praesent consequat ligula ac leo interdum faucibus. Nunc aliquet
              tortor sit amet aliquet molestie. Maecenas pulvinar massa magna,
              vitae hendrerit massa maximus in. Duis nisl enim, commodo id dui
              id, cursus sollicitudin nulla. Sed bibendum mollis convallis. Nam
              maximus rutrum nunc in ultrices. Nulla sed imperdiet velit, eu
              efficitur leo. Curabitur ac orci vel tortor viverra mattis. Morbi
              interdum orci congue, posuere nisi at, pharetra risus. Morbi ac
              feugiat lectus, nec rutrum augue. Pellentesque malesuada at purus
              eu venenatis. Phasellus lacinia massa vel mi lobortis dictum.
            </p>
            <p>
              Ut fermentum elementum tincidunt. Morbi placerat vel sem ac
              condimentum. Phasellus justo orci, venenatis non placerat et,
              varius quis tortor. Maecenas interdum tristique risus, in
              facilisis nibh porta quis. Mauris rhoncus ante a convallis
              tristique. Cras vehicula cursus fringilla. Nullam ac finibus quam,
              vitae bibendum est. Nulla facilisi. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Proin
              maximus, nibh id fringilla efficitur, leo felis laoreet nisi, nec
              congue metus lectus pharetra sapien. Morbi sit amet lorem nulla.
              Fusce interdum orci libero, et imperdiet massa viverra vitae.
              Curabitur nec lacus rhoncus, dictum justo at, finibus nunc.
            </p>
          </main>
        </div>
      )}
    </div>
  );
}
