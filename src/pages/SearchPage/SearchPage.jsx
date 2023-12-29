import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AllHeader from "../../components/Text/AllHeader";
import { useGetSearchQuery } from "../../redux/features/Search/search";

const SearchPage = () => {
    const params = useParams();
  const { key } = params;

  const {data:searchResult} = useGetSearchQuery(key);
  return (
    <div>
      <Container fluid className="text-center">
        <AllHeader
          header={`${key}`}
         
        ></AllHeader>
        <Row>
          {searchResult?.map((category) => (
            <>
              <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card w-100 ">
                  <img className="center w-75" src={category.image} alt="" />
                  <Card.Body>
                    <p className="product-name-on-card">{category.title}</p>
                    <p className="product-price-on-card">
                      Price: ${category.price}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SearchPage;
