import React, { useContext } from "react";
import Context from "../context/context";
import { Col, Row, Container } from "reactstrap";

var randomWords = require("random-words");
const ResultPage = (props) => {
  const { dummyParagrphState, filters } = useContext(Context);
  const {
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    list1,
    list2,
    list3,
    list4,
  } = dummyParagrphState;
  var dummyDataGenrator = [];
  var key = 0;
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;

  if (filters.btnRadioType === "paragraph") {
    for (let index = 0; index < filters.txtNumber; index++) {
      dummyDataGenrator.push(
        <span key={key++}>
          <p className=" paragraph-text">
            {index === 0
              ? paragraph1
              : index === 1
              ? paragraph2
              : index === 2
              ? paragraph3
              : index === 3
              ? paragraph4
              : index % 2 === 0
              ? paragraph1
              : paragraph2}
          </p>
        </span>
      );
    }
  } else if (filters.btnRadioType === "lists") {
    for (let index = 0; index < filters.txtNumber; index++) {
      dummyDataGenrator.push(
        <span key={key++}>
          {index === 0 ? (
            <span>
              <li className=" paragraph-text">{list1}</li>
              <li className=" paragraph-text">{list2}</li>
              <li className=" paragraph-text">{list3}</li>
              <li className=" paragraph-text">{list4}</li>
              <br />
            </span>
          ) : index === 2 ? (
            <span>
              <li className=" paragraph-text">{list4}</li>
              <li className=" paragraph-text">{list1}</li>
              <li className=" paragraph-text">{list3}</li>
              <br />
            </span>
          ) : index === 3 ? (
            <span>
              <li className=" paragraph-text">{list2}</li>
              <li className=" paragraph-text">{list4}</li>
              <br />
            </span>
          ) : index === 4 ? (
            <span>
              <li className=" paragraph-text">{list2}</li>
              <li className=" paragraph-text">{list4}</li>
              <li className=" paragraph-text">{list3}</li>
              <li className=" paragraph-text">{list1}</li>
              <br />
            </span>
          ) : index % 2 === 0 ? (
            <span>
              <li className=" paragraph-text">{list1}</li>
              <li className=" paragraph-text">{list2}</li>
              <br />
            </span>
          ) : (
            <span>
              <li className=" paragraph-text">{list4}</li>
              <li className=" paragraph-text">{list1}</li>
              <li className=" paragraph-text">{list3}</li>
              <br />
            </span>
          )}
        </span>
      );
    }
  } else if (filters.btnRadioType === "words") {
    for (let index = 0; index < filters.txtNumber; index++) {
      dummyDataGenrator.push(
        <span key={key++}>
          <span className=" paragraph-text">{randomWords(1)} ,</span>
        </span>
      );
    }
  } else if (filters.btnRadioType === "bytes") {
    for (let index = 0; index < filters.txtNumber; index++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      if (index % 5 === 0) {
        result += " ";
      } else if (index % 6 === 0) {
        result += " ";
      } else {
      }
    }
    dummyDataGenrator.push(
      <span key={key++}>
        <span className=" paragraph-text">{result} ,</span>
      </span>
    );
  } else if (filters.txtNumber !== "") {
    for (let index = 0; index < filters.txtNumber; index++) {
      dummyDataGenrator.push(
        <span key={key++}>
          <p className=" paragraph-text">
            {index === 0
              ? paragraph1
              : index === 1
              ? paragraph2
              : index === 2
              ? paragraph3
              : index === 3
              ? paragraph4
              : index % 2 === 0
              ? paragraph1
              : paragraph2}
          </p>
        </span>
      );
    }
  }

  return (
    <Container>
      <Row>
        <Col
          lg={{ size: "10", offset: "1" }}
          md={{ size: "10", offset: "1" }}
          sm={12}
        >
          <h2 className="paragraph-title">
            Your {filters.btnRadioType} Data is here
          </h2>
          {dummyDataGenrator}
        </Col>
      </Row>
    </Container>
  );
};

export default ResultPage;

{
  /* {index===0?list1:(index===1?list2:(index===2?list3:(index===3?list4:(index%2===0?list1:list3))))} */
}
