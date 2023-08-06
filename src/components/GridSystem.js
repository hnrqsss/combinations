import React from "react";
import { Row, Col, Container, ListGroup, Badge } from "react-bootstrap";

/*  This grid system takes an array of JSX items as children
    and calculates the number of rows needed based on chilren count and col count.
*/
const GridSystem = ({ colCount, children, md, items }) => {
  let rowCount = Math.floor(items.length / colCount) + 1;

  //Index is needed to keep track of the current element that we are one.
  let index = 0;

  //This is the driver function for building the grid system.
  const buildGrid = () => {
    return renderRows();
  };

  //Returns For example, we can have a row with 2 columns inside it.
  const renderRows = () => {
    let rows = [];

    for (let row = 0; row < rowCount; row++) {
      rows.push(<Row className="Row">{renderCols()}</Row>);
    }

    return rows;
  };

  //Returns an array of columns with the children inside.
  const renderCols = () => {
    let cols = [];

    //If you want to add more bootstrap breakpoints you can pass them as props here.
    for (let col = 0; col < colCount; col++) {
      if (index < items.length) {
        cols.push(
          <Col className="Col" md={md}>
            <ListGroup.Item key={`list-result-item-${index}`}>
              <Badge pill bg="info" className="me-2">
                {index + 1}
              </Badge>
              {items[index].map((i, index) => (
                <span key={index}>
                  <Badge bg="secondary">{i}</Badge>
                  &nbsp;
                </span>
              ))}
            </ListGroup.Item>
          </Col>
        );
        index++;
      }
    }

    return cols;
  };

  return (
    <Container className="Container">
      <p>Resultados: {items.length}</p>
      {buildGrid()}
    </Container>
  );
};

export default GridSystem;
