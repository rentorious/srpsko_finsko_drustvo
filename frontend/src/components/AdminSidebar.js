import React from "react";
import { signout } from "../actions/userActions";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

function AdminSidebar(props) {
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
    props.history.push("/");
  };

  return (
    <div className="admin-sidebar">
      <Link to="/new-article">
        <div className=" btn-block btn-primary">NEW ARTICLE</div>
      </Link>
      <Link to="#signout" onClick={signoutHandler}>
        <div className="btn-block btn-danger">SIGN OUT</div>
      </Link>
    </div>
  );
}
export default withRouter(AdminSidebar);
