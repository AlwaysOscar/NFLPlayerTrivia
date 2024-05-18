import styles from './Gallery.module.css';
import Card from "./Card";

function Gallery({ cards }) {
    return (
        <div className={styles.gallery}>
            {cards.map((card, index) => (
                <Card key={index} name={card.name} img={card.img} description={card.description} />
            ))}
        </div>
    );
}

export default Gallery;