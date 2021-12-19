import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Success = () => {
  const [values, setvalues] = useState();
  useEffect(() => {
    const userDatas = JSON.parse(localStorage.getItem("userData"));
    console.log(userDatas);
    setvalues(userDatas);
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Registered Student:</h1>
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
                {values?.studentfname}
                {values?.studentlname}
              </Col>
            </Row>
            <Row>
              <Col>Date of birth</Col>
              <Col>{values?.studentdob}</Col>
            </Row>
            <Row>
              <Col>Gender</Col>
              <Col>{values?.studentgender}</Col>
            </Row>
            <Row>
              <Col>Sibblings</Col>
              <Col>{values?.studentsibdetails}</Col>
            </Row>
            <Row>
              <Col>Address</Col>
              <Col>{values?.studentaddress}</Col>
            </Row>
          </Row>
          <Row style={{ margin: "4px" }}>
            <Row>
              <Col>Father's name</Col>
              <Col>
                {values?.fatherfname}
                {values?.fatherlname}
              </Col>
            </Row>
            <Row>
              <Col>Qualification</Col>
              <Col>{values?.fatherqualification}</Col>
            </Row>
            <Row>
              <Col>Contact</Col>
              <Col>{values?.fatherphn}</Col>
            </Row>
            <Row>
              <Col>Email</Col>
              <Col>{values?.fatheremail}</Col>
            </Row>
            <Row>
              <Col>Occupation</Col>
              <Col>{values?.fatheroccup}</Col>
            </Row>
          </Row>
          <Row style={{ margin: "4px" }}>
            <Row>
              <Col>Mother's name</Col>
              <Col>
                {values?.motherfname}
                {values?.motherlname}
              </Col>
            </Row>
            <Row>
              <Col>Qualification</Col>
              <Col>{values?.motherqualification}</Col>
            </Row>
            <Row>
              <Col>Contact</Col>
              <Col>{values?.motherphn}</Col>
            </Row>
            <Row>
              <Col>Email</Col>
              <Col>{values?.motheremail}</Col>
            </Row>
            <Row>
              <Col>Occupation</Col>
              <Col>{values?.motheroccup}</Col>
            </Row>
          </Row>
        </Row>
      </div>
      <Button
        style={{ marginLeft: "18ch", marginTop: "2ch" }}
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Register New
      </Button>
    </div>
  );
};

export default Success;
