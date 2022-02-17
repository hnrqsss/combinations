import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

export default function InputNumbers({
  countNumbers,
  numbers,
  isFilled,
  countCombinations,
  handleCountNumbers,
  handleNumbers,
  handleCountCombinations,
  handleClear,
}) {
  return (
    <>
      {countNumbers === 0 && (
        <Form onSubmit={handleCountNumbers}>
          <Form.Label>Quandidade de números:</Form.Label>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Col sm="4">
              <Form.Control
                type="number"
                defaultValue={2}
                name="countNumbers"
              />
            </Col>
            <Col sm="2">
              <Button type="submit">Confirmar</Button>
            </Col>
          </Form.Group>
        </Form>
      )}

      {countCombinations === 0 && countNumbers > 0 && (
        <Form onSubmit={handleCountCombinations}>
          <Form.Label>Quandidade de combinações:</Form.Label>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Col sm="4">
              <Form.Control
                type="number"
                defaultValue={2}
                name="countCombinations"
              />
            </Col>
            <Col sm="2">
              <Button type="submit">Confirmar</Button>
            </Col>
          </Form.Group>
        </Form>
      )}

      {countCombinations > 0 && countNumbers > 0 && !isFilled && (
        <Form onSubmit={handleNumbers}>
          <Form.Label>Digite os números:</Form.Label>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            {numbers.map((item, index) => (
              <Col sm="4" key={`number-${index}`}>
                <Form.Control
                  type="number"
                  defaultValue={index + 1}
                  name={`number[${index}]`}
                />
              </Col>
            ))}
          </Form.Group>
          <Button type="submit">Confirmar</Button>
        </Form>
      )}

      {isFilled && (
        <Button onClick={handleClear} className={"mt-3 mb-3"}>
          Nova consulta
        </Button>
      )}
    </>
  );
}
