import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import logo from "../../../assets/images/logo/logo.jpg";
import { Link, redirect } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { useGetIpQuery } from "../../../redux/features/visitor/visitorApi";
import { useGetNotificationsQuery } from "../../../redux/features/notifications/notifications";
import { useState } from "react";
import useAuthCheck from "../../../hooks/useAuthChcek";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../../redux/features/auth/authSlice";

const Header = () => {
  const [search,setSearch] = useState('');
  const { data: getVisitorIp } = useGetIpQuery();
  const { data: notifications } = useGetNotificationsQuery();

  const unreadNotifications = notifications?.filter(notification=>notification.status==='unread');

  useAuthCheck();

  const {user} = useSelector(state=>state.auth);
  const dispatch = useDispatch();
  const handleLogout = ()=>{
    dispatch(userLoggedOut());
    localStorage.clear();
  }
  
 

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
                  <input type="text" className="form-control " onChange={(e)=>setSearch(e.target.value)} />
                  <Link to={`/search/${search}`}><Button type="button" className="btn site-btn">
                    <FaSearch />
                  </Button></Link>
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
                    <span className="badge text-white bg-danger">{unreadNotifications?.length}</span>
                  </sup>
                </Link>
                <a className="btn">
                  <i className="fa h4 fa-mobile-alt"></i>
                </a>
                {
                  user?<button onClick={handleLogout} className="btn btn-success">Logout</button>:<>  <Link to="/login" className="h4 btn">
                  LOGIN
                </Link>

                <Link to="/register" className="h4 btn">
                  Register
                </Link>
</>
                }
              
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
