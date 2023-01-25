import {
  Brands,
  Business,
  Card,
  Control,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  People,
  Statistic,
  TryService,
} from "../src/components/index";

import styles from "./styles/styles";

const App = () => (
  <div className="bg-primary w-full overflow-hidden font-poppins">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexCenter} z-[20]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Statistic />
        <Business />
        <Control />
        <Card />
        <People />
        <Brands />
        <TryService />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
