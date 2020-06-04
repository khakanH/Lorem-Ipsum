import React, { useContext, useState } from "react";
import Context from "../context/context";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
const Main = (props) => {
  const { mainState, filterMethod } = useContext(Context);
  const [filters, setfilters] = useState({
    genrateFilter: false,
    txtNumber: "",
    btnRadioType: "",
    check: false,
  });

  const { txtNumber } = filters;
  const { paragraph1, paragraph2, paragraph3, paragraph4 } = mainState;
  const handleChange = (e) => {
    setfilters({
      ...filters,
      [e.target.name]: e.target.value,
      genrateFilter: true,
    });
    console.log("this is real tym changes");
    console.log(JSON.stringify(filters));
  };
  const handleClick = (e) => {
    filterMethod(filters);
  };
  return (
    <Row>
      <Col
        lg={{ size: "4", offset: "1" }}
        md={{ size: "4", offset: "1" }}
        sm={12}
      >
        <h2 className="paragraph-title">{paragraph1.title}</h2>
        <p className=" paragraph-text">{paragraph1.description}</p>
      </Col>
      <Col
        lg={{ size: "5", offset: "1" }}
        md={{ size: "5", offset: "1" }}
        sm={12}
      >
        <h2 className="paragraph-title">{paragraph2.title}</h2>
        <p className=" paragraph-text">{paragraph2.description}</p>
      </Col>
      <Col
        lg={{ size: "4", offset: "1" }}
        md={{ size: "4", offset: "1" }}
        sm={12}
      >
        <h2 className="paragraph-title">{paragraph3.title}</h2>
        <p className=" paragraph-text">
          {paragraph3.description1}
          <br />
          {paragraph3.description2}
        </p>
      </Col>
      <Col
        lg={{ size: "5", offset: "1" }}
        md={{ size: "5", offset: "1" }}
        sm={12}
      >
        <h2 className="paragraph-title">{paragraph4.title}</h2>
        <p className=" paragraph-text">{paragraph4.description}</p>

        <Form>
          <FormGroup tag="fieldset">
            <Input
              type="number"
              value={txtNumber}
              name={"txtNumber"}
              onChange={handleChange}
              placeholder="Enter the Number"
            />
            {""}
            <FormGroup check inline>
              <Label check>
                <Input
                  value="paragraph"
                  onChange={handleChange}
                  name="btnRadioType"
                  type="radio"
                />{" "}
                Paragraphs
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  value="words"
                  onChange={handleChange}
                  name="btnRadioType"
                  type="radio"
                />{" "}
                Words
              </Label>
            </FormGroup>
            <br />
            <FormGroup check inline>
              <Label check>
                <Input
                  value="bytes"
                  onChange={handleChange}
                  name="btnRadioType"
                  type="radio"
                />{" "}
                Bytes
              </Label>
            </FormGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormGroup check inline>
              <Label check>
                <Input
                  value="lists"
                  onChange={handleChange}
                  name="btnRadioType"
                  type="radio"
                />{" "}
                lists
              </Label>
            </FormGroup>
          </FormGroup>
          {/* <FormGroup check inline >
                        <Label check >
                            <Input type="checkbox" />{' '}
          Start with 'Lorem
            ipsum dolor sit amet...'
        </Label>
                    </FormGroup> */}
          <Button outline size="md" onClick={handleClick} color="dark">
            Genrate Lorem Ipsum
          </Button>{" "}
        </Form>
      </Col>
    </Row>
  );
};

export default Main;
