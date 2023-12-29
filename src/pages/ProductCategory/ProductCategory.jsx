import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useGetCategoriesQuery } from "../../redux/features/productCategories/productCategories";
import AllHeader from "../../components/Text/AllHeader";

const ProductCategory = () => {
  const params = useParams();
  const { category } = params;
  const {data:categories} = useGetCategoriesQuery(category);
  return (
    <div>
      <Container fluid className="text-center">
        <AllHeader
          header={`${category}`}
          text={`Here You Can Find All ${category} Products`}
        ></AllHeader>
        <Row>
          {categories?.map((category) =>
          
              <>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className="image-box card w-100 ">
                    <img
                      className="center w-75"
                      src={category.image}
                      alt=""
                    />
                    <Card.Body>
                      <p className="product-name-on-card">{category.title}</p>
                      <p className="product-price-on-card">
                        Price: ${category.price}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductCategory;
