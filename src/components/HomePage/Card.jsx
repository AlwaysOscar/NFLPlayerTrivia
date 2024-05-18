import PropTypes from 'prop-types';
import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={styles.card}>
            <h2>{props.name}</h2>
            <img src={props.img} alt="picture"></img>
            <p>{props.description}</p>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
};

export default Card;