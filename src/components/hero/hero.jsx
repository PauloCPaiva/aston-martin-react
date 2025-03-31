import styles from "../hero/hero.module.css";
import blackCar from "../../assets/carro-preto.png";
import Button from "../button/button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapperHero}>
        <div className={styles.contentHero}>
          <h2>
            DBS
            <span> ULTIMATE 700</span>
          </h2>
          <p>
            Por mais de meio século, o nome DBS significou apenas uma coisa: a
            produção definitiva do Aston Martin.
          </p>
          <div className={styles.imgHero}>
            <Button>SAIBA MAIS</Button>
          </div>
        </div>
        <div>
          <img src={blackCar} alt="Aston Martin" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
