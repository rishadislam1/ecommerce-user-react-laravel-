import { Card, Container, Row } from "react-bootstrap";

import Slider from "react-slick";
import AllHeader from "../Text/AllHeader";

const NewArrival = () => {
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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
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
          <div>
          <Card className="image-box">
              <img className="center" src="" alt="" />
              <Card.Body>
                <p className="product-name-on-card"></p>
                <p className="product-price-on-card">Price: $</p>
              </Card.Body>
            </Card>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
        </Row>
      </Container>
    </div>
  );
};

export default NewArrival;
