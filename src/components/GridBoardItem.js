import React from "react";
import PropTypes from "prop-types";
import "./GridBoardItem.scss";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardLink
} from "reactstrap";
const GridBoardItem = ({ imgUrl, alt, text, title }) => {
  return (
    <Card
      className="grid-item"
      body
      inverse
      style={{ backgroundColor: "#333", borderColor: "#333" }}
    >
      <CardBody>
        <CardTitle>title</CardTitle>
      </CardBody>
      <img width="100%" src={imgUrl} alt="Card image cap" />
      <CardBody>
        <CardText>{text}</CardText>
      </CardBody>
    </Card>
  );
};

GridBoardItem.propTypes = {
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string
};

GridBoardItem.defaultProps = {
  items: [],
  onClick: () => console.warn("onClick is not defined in GridBoardItems")
};

export default GridBoardItem;
