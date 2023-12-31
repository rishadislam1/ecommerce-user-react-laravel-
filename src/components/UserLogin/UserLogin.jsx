import { Button, Col, Container, Row } from "react-bootstrap";
import { Form, useLocation, useNavigate } from "react-router-dom";
import Login from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useEffect, useState } from "react";

const UserLogin = () => {
  const [errorlog, setError] = useState('');
  const [login,{data:loginData,isLoading,error: responseError}] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;

  useEffect(()=>{
    if(responseError?.data){
      setError(responseError.data);
    }
    if(loginData?.token && loginData?.user){
      navigate(from, {replace: true});
      setError('');
    }
  },[loginData,responseError,navigate,from]);
  if(loginData){
    navigate('/user');
   }

  const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = {
      email: email,
      password: password
    }
  
    login(data);
  
    form.reset();
    
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
                <Form className="onboardForm" onSubmit={handleLogin}>
                  <h4 className="section-title-login"> USER SING IN </h4>
              <br />
                  <input
                    className="form-control m-2"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                  />

            
                  <input
                    className="form-control m-2"
                    type="password"
                    name="password"
                    placeholder="*****"
                  />
                  <Button type="submit" className="btn btn-block m-2 site-btn-login">
                    LogIn
                  </Button>
                  <br /> <hr /> <br />
                <p>Forget My Password? <strong><b><Link to='/forgetpassword'>Forget Password</Link> </b></strong> </p>
                <p className="text-danger">{errorlog?.message}</p>
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

export default UserLogin;
