import styles from "./About.module.css";

export const metadata = {
  title: "About Page",
  description: "This is about page",
};

const AboutPage = () => {
  return (
    <div>
      <h1 className={styles.text_color}>About Page</h1>
    </div>
  );
};

export default AboutPage;
