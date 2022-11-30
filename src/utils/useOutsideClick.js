import { useEffect } from 'react'

export function useOutsideClick(ref, outsideCallback) {
    useEffect(() => {
        /**
         * Set listData to null
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                outsideCallback()
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
}
