import React, { useState, useEffect } from 'react';

/* export const useDetectOutsideClick = (element, trigger, initialState) => {
    const [isActive, setIsActive] = useState(initialState);

    useEffect(() => {
        const pageClickEvent = (evt) => {
            // если активный элемент существует и щелкнут за его пределами
            if (
                element.current !== null
                && !element.current.contains(evt.target)
                && !trigger.current.contains(evt.target)
            ) {
                setIsActive(false);
            }
        };

        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }

        // отключает слушатель событий после закрытия раскрывающегося списка
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }

    }, [isActive, element]);

    return [isActive, setIsActive];
} */

class useDetectOutsideClick extends React.Component {
   constructor(props) {
      super(props);

      this.element = props.element;
      this.trigger = props.trigger;
      this.initialState = props.initialState;

      this.state = {
         isActive: this.initialState,
      };
   }

   pageClickEvent = (evt) => {
      if (
         this.element.current !== null
         && !this.element.current.contains(evt.target)
         && !this.trigger.current.contains(evt.target)
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
};

export default useDetectOutsideClick;