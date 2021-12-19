import React from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import "./form.css";
const Formcomp = ({ validation, initialvals }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialvals,
    validationSchema: validation,
    onSubmit: () => {
      if (formik.isValid === true) {
        alert("Registered");
        navigate("/success");
        localStorage.setItem("userData", JSON.stringify(formik.values));
      }
    },
  });

  return (
    <div className="container">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Label className="label">Name of Applicant</Form.Label>
        <Row>
          <Col>
            <Form.Control
              id="studentfname"
              name="studentfname"
              type="text"
              placeholder="First"
              {...formik.getFieldProps("studentfname")}
            />
            {formik.errors.studentfname && formik.touched.studentfname ? (
              <p>{formik.errors.studentfname}</p>
            ) : null}
          </Col>

          <Col>
            <Form.Control
              id="studentlname"
              name="studentlname"
              type="text"
              placeholder="Last"
              {...formik.getFieldProps("studentlname")}
            />
            {formik.errors.studentlname && formik.touched.studentlname ? (
              <p>{formik.errors.studentlname}</p>
            ) : null}
          </Col>
        </Row>
        <Form.Label className="label">Date of Birth</Form.Label>
        <Form.Control
          name="studentdob"
          type="date"
          placeholder="First"
          {...formik.getFieldProps("studentdob")}
        />
        {formik.errors.studentdob && formik.touched.studentdob ? (
          <p>{formik.errors.studentdob}</p>
        ) : null}
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="label" as="legend" column sm={2}>
            Gender
          </Form.Label>
          <Row>
            <Col>
              <Form.Check
                type="radio"
                label="Male"
                name="studentgender"
                value="male"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Female"
                name="studentgender"
                value="female"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Col>
            {formik.errors.studentgender && formik.touched.studentgender ? (
              <p>{formik.errors.studentgender}</p>
            ) : null}
          </Row>
        </Form.Group>
        <Form.Label className="label">Details Of Sibblings</Form.Label>
        <Form.Control
          name="studentsibdetails"
          as="textarea"
          style={{ height: "10ch" }}
          {...formik.getFieldProps("studentsibdetails")}
        />
        <h2>Parents Information</h2>
        <Form.Label className="label">Fathers Name</Form.Label>
        <Row>
          <Col>
            <Form.Control
              name="fatherfname"
              type="text"
              placeholder="First"
              {...formik.getFieldProps("fatherfname")}
            />
            {formik.errors.fatherfname && formik.touched.fatherfname ? (
              <p>{formik.errors.fatherfname}</p>
            ) : null}
          </Col>
          <Col>
            <Form.Control
              name="fatherlname"
              type="text"
              placeholder="Last"
              {...formik.getFieldProps("fatherlname")}
            />
            {formik.errors.fatherlname && formik.touched.fatherlname ? (
              <p>{formik.errors.fatherlname}</p>
            ) : null}
          </Col>
        </Row>
        <Form.Label className="label">Fathers Qualification</Form.Label>
        <Form.Control
          type="text"
          name="fatherqualification"
          {...formik.getFieldProps("fatherqualification")}
        />
        {formik.errors.fatherqualification &&
        formik.touched.fatherqualification ? (
          <p>{formik.errors.fatherqualification}</p>
        ) : null}
        <Form.Label className="label">Contact</Form.Label>
        <Row>
          <Col>
            <Form.Control
              name="fatherphn"
              type="number"
              placeholder="Phone Number"
              {...formik.getFieldProps("fatherphn")}
            />
            {formik.errors.fatherphn && formik.touched.fatherphn ? (
              <p>{formik.errors.fatherphn}</p>
            ) : null}
          </Col>
          <Col>
            <Form.Control
              name="fatheremail"
              type="email"
              placeholder="Email"
              {...formik.getFieldProps("fatheremail")}
            />
            {formik.errors.fatheremail && formik.touched.fatheremail ? (
              <p>{formik.errors.fatheremail}</p>
            ) : null}
          </Col>
        </Row>
        <Form.Label className="label">Fathers Occupation</Form.Label>
        <Form.Control
          type="text"
          name="fatheroccup"
          {...formik.getFieldProps("fatheroccup")}
        />
        <Form.Label className="label">Mothers Name</Form.Label>
        <Row>
          <Col>
            <Form.Control
              type="text"
              name="motherfname"
              placeholder="First"
              {...formik.getFieldProps("motherlname")}
            />
            {formik.errors.motherfname && formik.touched.motherfname ? (
              <p>{formik.errors.motherfname}</p>
            ) : null}
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="motherlname"
              placeholder="Last"
              {...formik.getFieldProps("motherfname")}
            />
            {formik.errors.motherlname && formik.touched.motherlname ? (
              <p>{formik.errors.motherlname}</p>
            ) : null}
          </Col>
        </Row>
        <Form.Label className="label">Mothers Qualification</Form.Label>
        <Form.Control
          type="text"
          name="motherqualification"
          {...formik.getFieldProps("motherqualification")}
        />
        <Form.Label className="label">Contact</Form.Label>
        <Row>
          <Col>
            <Form.Control
              type="number"
              name="motherphn"
              placeholder="Phone Number"
              {...formik.getFieldProps("motherphn")}
            />
            {formik.errors.motherphn && formik.touched.motherphn ? (
              <p>{formik.errors.motherphn}</p>
            ) : null}
          </Col>
          <Col>
            <Form.Control
              type="email"
              name="motheremail"
              placeholder="Email"
              {...formik.getFieldProps("motheremail")}
            />
          </Col>
        </Row>
        <Form.Label className="label">Mothers Occupation</Form.Label>
        <Form.Control
          type="text"
          name="motheroccup"
          {...formik.getFieldProps("motheroccup")}
        />
        <Form.Label className="label">Address</Form.Label>
        <Row>
          <Col>
            <Form.Control
              type="text"
              name="studentrtaddress"
              placeholder="Street Adress"
              {...formik.getFieldProps("studentaddress")}
            />
            {formik.errors.studentaddress && formik.touched.studentaddress ? (
              <p>{formik.errors.studentaddress}</p>
            ) : null}
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="strtaddress2"
              placeholder="Street Adress Line 2"
            />{" "}
          </Col>
        </Row>{" "}
        <Row>
          <Col>
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              {...formik.getFieldProps("studentcity")}
            />
            {formik.errors.studentcity && formik.touched.studentcity ? (
              <p>{formik.errors.studentcity}</p>
            ) : null}
          </Col>
          <Col>
            <Form.Control type="text" name="region" placeholder="Region" />
          </Col>
        </Row>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="label" as="legend" column sm={10}>
            Payment method
          </Form.Label>
          <Row>
            <Col>
              <Form.Check
                type="radio"
                label="Cash"
                name="studentpayment"
                id="cash"
                value="cash"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Cheque"
                name="studentpayment"
                id="cheque"
                value="cheque"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Card"
                name="studentpayment"
                id="card"
                value="card"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Col>
            {formik.errors.studentpayment && formik.touched.studentpayment ? (
              <p>{formik.errors.studentpayment}</p>
            ) : null}
          </Row>
        </Form.Group>
        <Form.Label className="label" as="legend" column sm={10}>
          Terms of Services
        </Form.Label>
        <Form.Check
          value={
            formik.values.termsofServices === false ? "disagreed" : "agreed"
          }
          name="termsofServices"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        I agree to Terms of Services
        {formik.errors.termsofServices && formik.touched.termsofServices ? (
          <p>{formik.errors.termsofServices}</p>
        ) : null}
        <Col sm={{ span: 10, offset: 6 }}>
          <Button type="submit">Send</Button>
        </Col>
      </Form>
    </div>
  );
};

export default Formcomp;
