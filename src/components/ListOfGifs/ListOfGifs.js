import Gif from "../Gif/Gif";
import "./ListOfGifs.css"

export default function ListOFGifs({gifs}){
    
    return (
        <div className="ListOfGifs">{ 
            gifs.map(({id, title, url, ...restOfGifs}) => 
                <Gif 
                    key={id}
                    id={id}
                    title={title} 
                    url={url} 
                    extraInfo={restOfGifs}
                />
            )
        }</div>
    )
}