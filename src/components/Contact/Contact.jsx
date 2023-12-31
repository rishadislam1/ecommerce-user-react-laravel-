import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { usePostContactMutation } from "../../redux/features/contact/contactApi";
import Swal from "sweetalert2";

const Contact = () => {

  const [postContact,{data:postContactData,isLoading}] = usePostContactMutation();

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;


    const data= {
      name: name,
      email: email,
      message: message
    }

    postContact(data);
    if(!isLoading && postContactData){
      Swal.fire({
        title: "Your Message Sent Successfully",
        text: "Thanks For Contacting With Us",
        icon: "success"
      });
      form.reset();
    }
    else{
      Swal.fire({
        title: "Sorry",
        text: "Something Went Wrong",
        icon: "error"
      });
    }

  }

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
                <Form className="onboardForm" onSubmit={handleFormSubmit} >
                  <h4 className="section-title-login">CONTACT WITH US </h4>
                  <h6 className="section-sub-title">Please Contact With Us </h6>
                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                  />

                  <input
                    className="form-control m-2"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                  />

                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Your Message"
                    name="message"
                  />
                  <Button type="submit" className="btn btn-block m-2 site-btn-login">
                    {" "}
                    Send{" "}
                  </Button>
                </Form>
              </Col>

              <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                <br></br>
                <br></br>
                <p className="section-title-contact">
                  1635 Mirput-10, Dhaka, Bangladesh <br/>
                  Email: contact@rishadislam.com
                </p>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.76825727148!2d90.36453466220155!3d23.8028744907269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1703499664967!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" style={{border: "0px"}} referrerPolicy="no-referrer-when-downgrade" ></iframe>
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
