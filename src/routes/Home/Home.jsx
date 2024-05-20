import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import CardLeft from "../../components/CardLeft/CardLeft";
import CardRight from "../../components/CardRight/CardRight";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Forms from "../../components/Forms/Forms";
import data from "../../data.json";

import girlImg from "../../assets/1-girl.png";
import girlImg3 from "../../assets/girl-jumping.png";
import girlImg2 from "../../assets/2-girl.png";
import enfermeira from "../../assets/enfermeira.png";
import enfermeira2 from "../../assets/enfermeira2.png";
import enfermeira3 from "../../assets/enfermeira3.png";
import enfermeira4 from "../../assets/enfermeira4.png";

const Home = () => {
  const images = {
    "1-girl.png": girlImg,
    "2-girl.png": girlImg2,
    "enfermeira.png": enfermeira,
    "enfermeira2.png": enfermeira2,
    "enfermeira3.png": enfermeira3,
    "enfermeira4.png": enfermeira4,
    "girl-jumping.png": girlImg3,
  };

  return (
    <>
      <Navbar />
      <Banner />

      {data.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <CardRight
              key={index}
              id={item.id}
              img={images[item.img]}
              title={item.title}
              number={item.number}
              first_text={item.first_text}
              second_text={item.second_text}
            />
          );
        } else {
          return (
            <CardLeft
              key={index}
              id={item.id}
              img={images[item.img]}
              title={item.title}
              number={item.number}
              first_text={item.first_text}
              second_text={item.second_text}
            />
          );
        }
      })}

      <Forms />
      <Footer />
    </>
  );
};

export default Home;
