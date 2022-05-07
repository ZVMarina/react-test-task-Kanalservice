import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (element, trigger, initialState) => {
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
}