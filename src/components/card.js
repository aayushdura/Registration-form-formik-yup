import React from "react";
import { Col, Row } from "react-bootstrap";
const Card = ({ userDatas }) => {
  return (
    <div
      className="container"
      style={{
        borderStyle: "solid",
        borderWidth: "2px",
        width: "5in",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row className="main">
        <Row style={{ margin: "4px" }}>
          <Row>
            <Col>Name</Col>
            <Col>
              {userDatas?.studentfname}
              {userDatas?.studentlname}
            </Col>
          </Row>
          <Row>
            <Col>Date of birth</Col>
            <Col>{userDatas?.studentdob}</Col>
          </Row>
          <Row>
            <Col>Gender</Col>
            <Col>{userDatas?.studentgender}</Col>
          </Row>
          <Row>
            <Col>Sibblings</Col>
            <Col>{userDatas?.studentsibdetails}</Col>
          </Row>
          <Row>
            <Col>Address</Col>
            <Col>{userDatas?.studentaddress}</Col>
          </Row>
        </Row>
        <Row style={{ margin: "4px" }}>
          <Row>
            <Col>Father's name</Col>
            <Col>
              {userDatas?.fatherfname}
              {userDatas?.fatherlname}
            </Col>
          </Row>
          <Row>
            <Col>Qualification</Col>
            <Col>{userDatas?.fatherqualification}</Col>
          </Row>
          <Row>
            <Col>Contact</Col>
            <Col>{userDatas?.fatherphn}</Col>
          </Row>
          <Row>
            <Col>Email</Col>
            <Col>{userDatas?.fatheremail}</Col>
          </Row>
          <Row>
            <Col>Occupation</Col>
            <Col>{userDatas?.fatheroccup}</Col>
          </Row>
        </Row>
        <Row style={{ margin: "4px" }}>
          <Row>
            <Col>Mother's name</Col>
            <Col>
              {userDatas?.motherfname}
              {userDatas?.motherlname}
            </Col>
          </Row>
          <Row>
            <Col>Qualification</Col>
            <Col>{userDatas?.motherqualification}</Col>
          </Row>
          <Row>
            <Col>Contact</Col>
            <Col>{userDatas?.motherphn}</Col>
          </Row>
          <Row>
            <Col>Email</Col>
            <Col>{userDatas?.motheremail}</Col>
          </Row>
          <Row>
            <Col>Occupation</Col>
            <Col>{userDatas?.motheroccup}</Col>
          </Row>
        </Row>
      </Row>
    </div>
  );
};

export default Card;
