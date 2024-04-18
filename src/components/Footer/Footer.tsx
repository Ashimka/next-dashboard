import styles from "@/styles/footer/index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>Sushi shop</div>
      <div className={styles.footer__text}>© Все права защищены.</div>
    </footer>
  );
};

export default Footer;
