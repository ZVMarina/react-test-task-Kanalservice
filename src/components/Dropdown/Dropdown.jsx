import { useRef, useState } from 'react';
import styles from './Dropdown.module.css';
import icon from '../../images/icon.png';

const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const onClick = () => setIsActive(!isActive);

    return (
        <div className={styles.container}>
            <button 
                className={styles.trigger}
                onClick={onClick} 
            >
                <span>Filter</span>
                {/* <img className={styles.icon} src={icon} alt="icon" /> */}
            </button>
            <div 
                ref={dropdownRef} 
                className={`${styles.menu} ${isActive ? styles.menuActive : ''}`}
            >
                <ul>
                    <li>name</li>
                    <li>distance</li>
                    <li>quantity</li>
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;