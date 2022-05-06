import { useRef, useState } from 'react';
import styles from './Dropdown.module.css';
import icon from '../../images/icon.png'

const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const onClick = () => setIsActive(!isActive);

    return (
        <div className={styles.dropdownMenu}>
            <button onClick={onClick} className={styles.trigger}>
                <span>Filter</span>
                <img className={styles.icon} src={icon} alt="icon" />
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li>name</li>
                    <li>distance</li>
                    <li>quantity</li>
                </ul>
            </nav>
        </div>
    );
};

export default Dropdown;