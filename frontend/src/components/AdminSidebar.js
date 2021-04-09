import React from "react";
import { signout } from "../actions/userActions";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function AdminSidebar(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
    props.history.push("/");
  };

  return (
    <div className="admin-sidebar">
      <div className=" btn-block btn-primary">
        <Link to="/new-article">NEW ARTICLE</Link>
      </div>
      <div className="btn-block btn-danger">
        <Link to="#signout" onClick={signoutHandler}>
          SIGN OUT
        </Link>
      </div>
    </div>
  );
}
export default withRouter(AdminSidebar);
