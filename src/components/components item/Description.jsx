const Description = (props) => {
    return(
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>

            <div className="description">
                <span className="descriptionTitle">Talles:</span>
                <p className="parrafo">
                    {props.size}
                </p>
            </div>

            <span className="cant">
                Cantidad: {props.cantidad} unidades
            </span>

            <span className="precio">
                ${props.precio}
            </span>
        </div>
    )
}

export default Description;