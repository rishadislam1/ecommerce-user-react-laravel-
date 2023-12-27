import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import logo from "../../../assets/images/logo/logo.jpg";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { useGetIpQuery } from "../../../redux/features/visitor/visitorApi";

const Header = () => {
  const { data: getVisitorIp } = useGetIpQuery();

  console.log(getVisitorIp);


  return (
    <div>
      <div className="topSectionDown ">
        <Navbar bg="light">
         
          <Container
            fluid={"true"}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Link to="/">
                  {" "}
                  <img className="nav-logo" src={logo} />{" "}
                </Link>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <div className="input-group search-form">
                  <input type="text" className="form-control " />
                  <Button type="button" className="btn site-btn">
                    <FaSearch />
                  </Button>
                </div>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <Link to="/favorite" className="btn">
                  <MdFavorite className="fs-3" />
                  <sup>
                    <span className="badge text-white bg-danger">5</span>
                  </sup>
                </Link>
                <Link to="/notification" className="btn">
                  <IoIosNotifications className="fs-3" />
                  <sup>
                    <span className="badge text-white bg-danger">5</span>
                  </sup>
                </Link>
                <a className="btn">
                  <i className="fa h4 fa-mobile-alt"></i>
                </a>
                <Link to="/login" className="h4 btn">
                  LOGIN
                </Link>

                <Link to="/cart">
                  {" "}
                  <Button className="cart-btn">
                    <IoMdCart className="fs-3" /> 3 Items{" "}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
