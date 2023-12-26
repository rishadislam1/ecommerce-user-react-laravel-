import Categories from "../../../components/Home/Categories";
import Collection from "../../../components/Home/Collection";
import FeaturedProducts from "../../../components/Home/FeaturedProducts";
import HomeTop from "../../../components/Home/HomeTop";
import NewArrival from "../../../components/Home/NewArrival";

const Home = () => {
    return (
        <div>
            <HomeTop/>
            <FeaturedProducts/>
            <NewArrival/>
            <Categories/>
            <Collection/>
       
        </div>
    );
};

export default Home;