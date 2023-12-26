import { Col, Container, Row } from "react-bootstrap";
import AllHeader from "../Text/AllHeader";
import Card from "react-bootstrap/Card";

const Collection = () => {
  return (
    <div>
      <Container fluid className="text-center">
        <AllHeader
          header={"PRODUCT COLLECTION"}
          text={"Some Collections You May Like"}
        ></AllHeader>
        <Row>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100 " >
              <img className="center w-75" src="" alt="" />
              <Card.Body>
                <p className="product-name-on-card"></p>
                <p className="product-price-on-card">Price: $</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Collection;
