import './Home.scss'
import Navbar from "../../components/Navbar/Navbar";
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Forms from '../../components/Forms/Forms';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner/>

      <Forms/>
      <Footer/>
    </div>
  );
};

export default Home;
