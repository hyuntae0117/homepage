import React from "react";
import GridBoardItem from "./GridBoardItem";
import { Container, Row, Col } from "reactstrap";
const GridBoard = ({ state }) => {
  console.log(state);
  const itemList = state.board.items;

  return (
    <Container>
      <Row>
        {itemList.map((item, i) => (
          <Col xs="3">
            <GridBoardItem
              alt={item.alt}
              imgUrl={item.imgUrl}
              text={item.text}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GridBoard;
