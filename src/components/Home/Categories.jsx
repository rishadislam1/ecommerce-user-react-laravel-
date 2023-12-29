import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AllHeader from "../Text/AllHeader";
import { useGetMenuQuery } from "../../redux/features/navMenu/navMenuApi";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data: meghaMenuItems } = useGetMenuQuery();
  return (
    <div>
      <Container className="text-center" fluid>
        <AllHeader
          header={"CATEGORIES"}
          text={"Some Of Our categories, You May Like"}
        ></AllHeader>

        <Row>
          {meghaMenuItems?.map((menu) => (
            <>
              <Col xl={2} lg={2} md={3} sm={6} xs={6}>
                <Link to={`productcategory/${menu.category_name}`}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img
                        className="center"
                        src={menu.category_image}
                        alt=""
                      />
                      <h5 className="category-name"> {menu.category_name}</h5>
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

export default Categories;
