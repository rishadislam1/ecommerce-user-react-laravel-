import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AllHeader from "../Text/AllHeader";
import { Link } from "react-router-dom";
import { useGetRemarksQuery } from "../../redux/features/remarks/remarks";

const FeaturedProducts = () => {
  const { data: featured } = useGetRemarksQuery("FEATURED");

  return (
    <div>
      <Container className="text-center" fluid>
        <AllHeader
          header={"FEATURED PRODUCT"}
          text={"Some Of Our Exclusive Collection, You May Like"}
        ></AllHeader>
        <Row>
          {featured?.map((feature) => (
            feature.special_price == 'na'?<>
            <Col xl={2} lg={2} md={2} sm={4} xs={6} className="p-1">
              <Link to="/productDetails">
                <Card className="image-box card">
                  <img className="center" src={feature?.image} alt="" />
                  <Card.Body>
                    <p className="product-name-on-card">{feature.title}</p>
                    <p className="product-price-on-card">Price: ${feature.price}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </>:<>
              <Col xl={2} lg={2} md={2} sm={4} xs={6} className="p-1">
                <Link to="/productDetails">
                  <Card className="image-box card">
                    <img className="center" src={feature?.image} alt="" />
                    <Card.Body>
                      <p className="product-name-on-card">{feature.title}</p>
                      <p className="product-price-on-card">Price: $<strike>{feature.price}</strike>${feature.special_price}</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
