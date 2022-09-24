import Gif from "../Gif/Gif";
import "./ListOfGifs.css"

export default function ListOFGifs({gifs}){
    
    return (
        <div className="ListOfGifs">{ 
            gifs.map(sigleGif => 
            <Gif 
            key={sigleGif.id}
            id={sigleGif.id}
            title={sigleGif.title} 
            url={sigleGif.url} 
            />)
        }</div>
    )
}