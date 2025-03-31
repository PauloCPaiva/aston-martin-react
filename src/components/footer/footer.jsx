import styles from "./footer.module.css";
import logoFooter from "../../assets/logo-bottom.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapperFooter}>
        <div className={styles.containerFooter}>
          <div className={styles.imgFooter}>
            <img src={logoFooter} alt="" />
          </div>
          <div className={styles.footerResum}>
            <p className={styles.footerP}>
              Os valores de emissões/economia de combustível citados são
              provenientes de resultados de testes regulamentados oficiais
              obtidos através de testes de laboratório. Servem apenas para fins
              de comparabilidade e podem não refletir a sua experiência de
              condução real, que pode variar dependendo de fatores como
              condições da estrada, condições meteorológicas, carga do veículo e
              estilo de condução.
            </p>
          </div>
        </div>
        <div className={styles.copyContainer}>
          <div>
            <p className={styles.copyP}>
              © 2023 Aston Martin. Todos os direitos reservados.
            </p>
          </div>
          <div>
            <a href="#" className={styles.footerA}>
              Política de Privacidade
            </a>
            <a href="#" className={styles.footerA}>
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
