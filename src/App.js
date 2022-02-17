import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import InputNumbers from "./containers/InputNumbers";
import "bootstrap/dist/css/bootstrap.min.css";
import { combinations } from "./utils/functions";
import ListResults from "./containers/ListResults";

function App() {
  const [countNumbers, setCountNumbers] = React.useState(0);
  const [countCombinations, setCountCombinations] = React.useState(0);
  const [numbers, setNumbers] = React.useState([]);
  const [isFilled, setIsFilled] = React.useState(false);
  const [listResults, setListResults] = React.useState([]);

  const handleClear = React.useCallback(() => {
    setCountNumbers(0);
    setCountCombinations(0);
    setNumbers([]);
    setIsFilled(false);
    setListResults([]);
  }, [
    setCountNumbers,
    setCountCombinations,
    setNumbers,
    setIsFilled,
    setListResults,
  ]);

  const handleCountNumbers = React.useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const { countNumbers } = Object.fromEntries(formData);

      const array = [];
      array.length = countNumbers;
      array.fill(0);

      setCountNumbers(countNumbers);
      setNumbers(array);
    },
    [setCountNumbers, setNumbers]
  );

  const handleCountCombinations = React.useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const { countCombinations } = Object.fromEntries(formData);

      setCountCombinations(countCombinations);
    },
    [setCountCombinations]
  );

  const handleNumbers = React.useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      const array = [];

      Object.keys(formProps).forEach((key, index) => {
        array[index] = parseInt(formProps[key]);
      });
      setIsFilled(true);
      setNumbers(array);
      const results = combinations(array, countCombinations);
      setListResults(results);
    },
    [countCombinations, setNumbers, setListResults]
  );

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <InputNumbers
              countNumbers={countNumbers}
              numbers={numbers}
              countCombinations={countCombinations}
              handleCountCombinations={handleCountCombinations}
              handleCountNumbers={handleCountNumbers}
              handleNumbers={handleNumbers}
              handleClear={handleClear}
              isFilled={isFilled}
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <ListResults listResults={listResults} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
