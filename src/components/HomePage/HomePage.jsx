import styles from './HomePage.module.css';
import Navbar from "./Navbar";
import Category from "./Category";
import Footer from "./Footer";

const HomePage = () => {
    return (
        <section className={styles.container}>
            <Navbar/>
            <Category/>
            <Footer />
        </section>
    );
};

export default HomePage;