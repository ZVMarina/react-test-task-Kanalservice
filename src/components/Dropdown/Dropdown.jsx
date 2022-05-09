import React from 'react';
import styles from './Dropdown.module.css';

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

   pageClickEvent = (evt) => {
      if (
         this.dropdownRef.current !== null
         && !this.dropdownRef.current.contains(evt.target)
         && !this.triggerRef.current.contains(evt.target)
      ) {
         this.setState({
            isActive: false,
         });
      };
   }

   componentDidUpdate() {
      if (this.state.isActive) {
         window.addEventListener('click', this.pageClickEvent);
      }
   }

   componentWillUnmount() {
      window.removeEventListener('click', this.pageClickEvent);
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