import { useRef, useState } from "react";
import styles from './Dropdown.module.css'

const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
  
    return (
        <div className={styles.dropdown}>Dropdown</div>
    );
  };

  export default Dropdown;