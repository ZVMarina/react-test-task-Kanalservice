import React, { useRef } from 'react';
import styles from './Dropdown.module.css';
import useDetectOutsideClick from '../../utils/useDetectOutsideClick';

class Dropdown extends React.Component {

   constructor(props) {
      super(props);

      this.dropdownRef = React.createRef();
      this.triggerRef = React.createRef();

      this.state = {
         isActive: false,
      };
   }

   toggleShowMenu = () => {
      this.setState({
         isActive: !this.state.isActive,
      });
   }


   render() {
      return (
         <div className={styles.container}>
            <button
               ref={this.triggerRef}
               className={styles.trigger}
               onClick={this.toggleShowMenu}
            >
               {this.props.trigger}
            </button>
            <div
               ref={this.dropdownRef}
               className={`${styles.menu} ${this.state.isActive ? styles.menuActive : ''}`}
            >
               {this.props.list}
            </div>
         </div>
      )
   }
};

export default Dropdown;