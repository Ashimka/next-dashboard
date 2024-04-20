import styles from "@/styles/footer/index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>Суши-бар</div>
      <div className={styles.footer__text}>© 2012 - 2024 Sushi shop</div>
    </footer>
  );
};

export default Footer;
