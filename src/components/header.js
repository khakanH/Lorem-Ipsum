import React, { useContext } from "react";
import Context from "../context/context";
import { Col } from "reactstrap";
const Header = (props) => {
  const { headerState } = useContext(Context);
  const { mainTitle, mainDescritionTop, mainDescritionbottom } = headerState;
  return (
    <div>
      <Col>
        <p className="main-heading ">{mainTitle}</p>
        <p className="main-description italic">{mainDescritionTop}</p>
        <p className="main-description ">{mainDescritionbottom}</p>
      </Col>
      <hr className="seprator" />
    </div>
  );
};

export default Header;
/* lg={{ size: '12', offset: '10' }} sm={{ size: '12', offset: '6' }}         */
