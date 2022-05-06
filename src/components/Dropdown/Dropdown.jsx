import { useRef, useState } from "react";

const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
  
    return (
        <div>Dropdown</div>
    );
  };

  export default Dropdown;