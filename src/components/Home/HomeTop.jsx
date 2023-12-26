import { Col, Container, Row } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";



const HomeTop = () => {
    
    return (
        <div>
            <Container className="p-0 m-0 overflow-hidden" fluid>
                <Row>
                    {/* meghamenu */}
                    <Col lg={3} md={3} sm={12}>
                        <MegaMenu></MegaMenu>
                    </Col>
                    {/* slide */}
                    <Col lg={9} md={9} sm={12}>
                        <HomeSlider></HomeSlider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeTop;