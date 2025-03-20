import styles from "./Contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "This is contact page",
};

const ContactPage = () => {
  return (
    <div>
      <h1 className={styles.text_color}>Contact Page</h1>
    </div>
  );
};

export default ContactPage;
