import { useRef } from 'react';
import styles from './Dropdown.module.css';
import { useDetectOutsideClick } from '../../utils/useDetectOutsideClick';

const Dropdown = (props) => {
    const dropdownRef = useRef(null);
    const triggerRef = useRef(null);

    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, triggerRef, false);

    const onClick = () => setIsActive(!isActive);

    return (
            <div className={styles.container}>
                <button
                    ref={triggerRef}
                    className={styles.trigger}
                    onClick={onClick}
                >
                    { props.trigger }
                </button>
                <div
                    ref={dropdownRef}
                    className={`${styles.menu} ${isActive ? styles.menuActive : ''}`}
                >
                    { props.list }
                </div>
            </div>
    );
};

export default Dropdown;