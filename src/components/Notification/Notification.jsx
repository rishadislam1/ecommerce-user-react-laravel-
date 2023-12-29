import { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { useGetNotificationsQuery } from "../../redux/features/notifications/notifications";

const Notification = () => {
  const [show, setShow] = useState(false);
  const [date,setDate] = useState('');
  const [message,setMessage] = useState('');
  const [title,setTitle] = useState('');

  const { data: notifications } = useGetNotificationsQuery();
 


  const handleShow = (title,date,message) => {
    setDate(date);
    setMessage(message);
    setTitle(title);
    setShow(true);
  
  };

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <Container className="TopSection">
        <Row>
          {notifications?.map((notification) => (
            <>
              <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                <Card className="notification-card">
                  <Card.Body>
                    <h6> {notification.title}</h6>
                    <p className="py-1   px-0 text-primary m-0">
                      <i className="fa  fa-bell"></i> {notification.date} | <strong className={`${notification.status==='unread'?'text-danger':'no'}`}>Status:
                      
                      {notification.status}</strong>
                    </p>
                    <button className="btn btn-danger" onClick={()=>handleShow(notification.title,notification.date,notification.message)} >Details</button>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h6>
            <i className="fa fa-bell"></i> {date}
          </h6>
        </Modal.Header>
        <Modal.Body>
          <h6>{title}</h6>
          <p>
            {message}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Notification;
