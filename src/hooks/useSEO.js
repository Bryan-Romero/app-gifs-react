import React, { useEffect, useRef } from "react";

const useTitle= ({ title, description }) => {

    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]').content)

    useEffect(() => {
        const previousTitle = prevTitle.current
        document.title = `${title} | GIFty`

        return () => document.title = previousTitle
    }, [title])

    useEffect(() => {
        const metaDescription = document.querySelector('meta[name="description"]')
        const previousDescription = prevDescription.current
        if(description){
            metaDescription.setAttribute('content', description)
        }

        return () => metaDescription.setAttribute('content', previousDescription)
    }, [description])
}
export default useTitle