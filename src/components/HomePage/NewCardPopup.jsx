import { useState } from 'react';
import styles from './NewCardPopup.module.css';

function NewCardPopup({ onAddCard, onClose }) {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');

    const handleAdd = () => {
        onAddCard({ name, img, description });
        onClose();
    };

    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <h2>Create New Itinerary</h2>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Image URL" value={img} onChange={(e) => setImg(e.target.value)} />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <button onClick={handleAdd}>Add</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default NewCardPopup;