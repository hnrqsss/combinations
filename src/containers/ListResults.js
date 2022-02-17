import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

export default function ListResults({ listResults }) {
  return (
    <ListGroup>
      <p>Resultados: {listResults.length}</p>
      {listResults.map((item, index) => (
        <ListGroup.Item key={`list-result-item-${index}`}>
          {item.map((i, index) => (
            <span key={index}>
              <Badge bg="secondary">{i}</Badge>
              &nbsp;
            </span>
          ))}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
