import Image from "./Image";
import Description from "./Description";
import "../../styles/detailsItem.css";
import ButtonDetalles from "./Buttondetalles";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/ClipLoader";

const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {

        setDatos([])

        fetchSimultion(productos.filter( flt => flt.id == idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])
    
    return(
        <div className="detailsItem">
            {
                (datos.length === 0) ? <MoonLoader color="#5b00fb" /> 
                : datos.map( items => (
                    <>
                        <div className="containerLeft">
                            <Image 
                                imagen={items.imageProduct}
                            />
                        </div>  

                        <div className="containerRigth">
                                <Description 
                                    title= {items.title}
                                    size= {items.size}
                                    cantidad = {items.stock}
                                    precio={items.price}
                                />
                                
                            <div className="buttons">
                        
                                    <ButtonDetalles 
                                        txt="Volver"
                                    />
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailsItem;