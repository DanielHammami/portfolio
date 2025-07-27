import "../../styles/home.scss";
import PortfolioInfo from "./PortfolioInfo";
import PortfolioImg from "./PortfolioImg";

function Home() {
  return (
    <section className='home'>
      <PortfolioImg />
      <PortfolioInfo />
    </section>
  );
}

export default Home;
