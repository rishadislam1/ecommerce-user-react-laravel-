import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AllHeader from "../Text/AllHeader";

const Categories = () => {
  return (
    <div>
      <Container className="text-center" fluid>
       
        <AllHeader header={'CATEGORIES'} text={'Some Of Our categories, You May Like'}></AllHeader>
        <Row>
          <Col xl={6} lg={6} md={2} sm={12} xs={12}>
            <Row>
              <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <img className="center" src="" alt="" />
                    <h5 className="category-name"></h5>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
