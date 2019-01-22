import React from "react";
import "./TopNavigation.scss";

const initialState = {
  editing: false
};
const TopNavigation = ({}) => {
  return (
    <div className="top-navigation">
      <ul className="setting-container">
        <li>
          <a href="ab">
            <img
              alt="W3Schools"
              src="https://www.kaptestglobal.com/sites/kaptest.co.uk/files/pictures/icon-intelligence-grey.png"
            />
          </a>
        </li>
        <li>
          <a href="abc">
            <img
              alt="W3Schools"
              src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23162125/apple-logo-1024x728.png"
            />
          </a>
        </li>
      </ul>
      <div className="nav-main">
        <h1>이거슨 네브</h1>
        <img
          alt="main"
          src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg"
        />
      </div>
    </div>
  );
};

export default TopNavigation;
