import { Button, Col, Container, Row } from "react-bootstrap";
import { Form } from "react-router-dom";
import Login from "../../assets/images/login.png";

const RegisterPage = () => {
  return (
    <div>
      <Container>
        <Row className="p-2">
          <Col
            className="shadow-sm bg-white mt-2"
            md={12}
            lg={12}
            sm={12}
            xs={12}
          >
            <Row className="text-center">
              <Col
                className="d-flex justify-content-center"
                md={6}
                lg={6}
                sm={12}
                xs={12}
              >
                <Form className="onboardForm">
                  <h4 className="section-title-login"> USER SING UP </h4>
                  <br />

                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Your Name"
                  />

                  <input
                    className="form-control m-2"
                    type="email"
                    placeholder="Enter Email"
                  />

                  <input
                    className="form-control m-2"
                    type="password"
                    placeholder="Password"
                  />

                  <input
                    className="form-control m-2"
                    type="password"
                    placeholder="Confirm Password"
                  />

                  <Button className="btn btn-block m-2 site-btn-login">
                    LogIn
                  </Button>
                </Form>
              </Col>

              <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                <img className="onboardBanner" src={Login} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
