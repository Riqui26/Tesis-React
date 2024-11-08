import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li>
                <Link to="category/Remeras"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Pantalones">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Bermudas">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Buzos">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;
