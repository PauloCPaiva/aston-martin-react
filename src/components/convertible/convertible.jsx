import styles from "./convertible.module.css";
import redCar from "../../assets/carro-vermelho.png";
import Button from "../button/button";

const Convertible = () => {
  return (
    <section className={styles.convertible}>
      <div className={styles.wrapperConvertible}>
        <div class={styles.containerConvertible}>
          <div class={styles.contentConvertible}>
            <h2>Velocidade e qualidade aston martin!</h2>
            <p>
              Obtenha os nossos melhores carros e seja seu sonho, desempenho
              ágil mais habilidade artesanal.
            </p>
            <div>
              <Button>Comprar</Button>
            </div>
          </div>
          <div class={styles.imgConvertible}>
            <img src={redCar} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convertible;
