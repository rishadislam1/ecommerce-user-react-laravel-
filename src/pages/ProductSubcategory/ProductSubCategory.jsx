import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import AllHeader from "../../components/Text/AllHeader";
import { useGetSubCategoriesQuery } from "../../redux/features/productCategories/productCategories";

const ProductSubCategory = () => {
    const params = useParams();
    const{category,subcategory} = params;

    const {data:subcategories} = useGetSubCategoriesQuery({category,subcategory});
    return (
        <div>
        <Container className="text-center" fluid>
          <AllHeader
            header={`${category}/${subcategory}`}
            
          ></AllHeader>
  
          <Row>
            {subcategories?.map((menu) => (
              <>
                <Col xl={2} lg={2} md={3} sm={6} xs={6}>
                  <Link to={`productcategory/${menu.title}`}>
                    <Card className="h-100 w-100 text-center">
                      <Card.Body>
                        <img
                          className="center"
                          src={menu.image}
                          alt=""
                        />
                        <h5 className="category-name"> {menu.title}</h5>
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

export default ProductSubCategory;