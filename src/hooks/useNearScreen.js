import 'intersection-observer'

const { useState, useEffect, useRef } = require("react")

function useNearScreen({distance = '100px', externalRef, once = true} = {}){
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()
    
    useEffect(() => {
        const element = externalRef ? externalRef.current : fromRef.current
        const onChange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting){
                setShow(true)
                once && observer.disconnect()
                //observer.unobserve(el) //for unobserve single element 
            } else {
                !once && setShow(false)
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        })
        element && observer.observe(element)
        
        return () => observer && observer.disconnect()
    })

    return {isNearScreen, fromRef}
}
export default useNearScreen