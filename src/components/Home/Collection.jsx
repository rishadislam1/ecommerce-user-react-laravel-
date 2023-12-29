import { Col, Container, Row } from "react-bootstrap";
import AllHeader from "../Text/AllHeader";
import Card from "react-bootstrap/Card";
import { useGetRemarksQuery } from "../../redux/features/remarks/remarks";

const Collection = () => {
  const { data: collections } = useGetRemarksQuery("COLLECTION");
 
  return (
    <div>
      <Container fluid className="text-center">
        <AllHeader
          header={"PRODUCT COLLECTION"}
          text={"Some Collections You May Like"}
        ></AllHeader>
        <Row>
          {collections?.map((collection) => (
           collection.special_price == 'na'? <>
           <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
             <Card className="image-box card w-100 ">
               <img className="center w-75" src={collection.image} alt="" />
               <Card.Body>
                 <p className="product-name-on-card">{collection.title}</p>
                 <p className="product-price-on-card">Price: ${collection.price}</p>
               </Card.Body>
             </Card>
           </Col>
         </>: <>
              <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card w-100 ">
                  <img className="center w-75" src={collection.image} alt="" />
                  <Card.Body>
                    <p className="product-name-on-card">{collection.title}</p>
                    <p className="product-price-on-card">Price: $<strike>{collection.price}</strike>${collection.special_price}</p>
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

export default Collection;
