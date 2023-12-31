import { Card, Container, Row } from "react-bootstrap";

import Slider from "react-slick";
import AllHeader from "../Text/AllHeader";
import { useGetRemarksQuery } from "../../redux/features/remarks/remarks";

const NewArrival = () => {
  const { data: newArrivals } = useGetRemarksQuery("NEW");
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Container className="text-center" fluid>
        <AllHeader
          header={"NEW ARRIVAL"}
          text={"New Arrival Products you Like"}
        ></AllHeader>

        <Row>
          <Slider {...settings}>
            {newArrivals?.map((newArrival) => (
             newArrival.special_price=='na'? <>
             <div>
               <Card className="image-box">
                 <img className="center" src={newArrival.image} alt="" />
                 <Card.Body>
                   <p className="product-name-on-card">{newArrival.title}</p>
                   <p className="product-price-on-card">Price: ${newArrival.price}</p>
                 </Card.Body>
               </Card>
             </div>
           </>: <>
                <div>
                  <Card className="image-box">
                    <img className="center" src={newArrival.image} alt="" />
                    <Card.Body>
                      <p className="product-name-on-card">{newArrival.title}</p>
                      <p className="product-price-on-card">Price: $<strike>{newArrival.price}</strike>${newArrival.special_price}</p>
                    </Card.Body>
                  </Card>
                </div>
              </>
            ))}
          </Slider>
        </Row>
      </Container>
    </div>
  );
};

export default NewArrival;
