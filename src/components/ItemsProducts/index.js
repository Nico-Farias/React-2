

import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./style.scss"



export default function Product() {



    const { addItemToCart, data, loading } = useContext(CartContext)




    return (
        <div className="contenedorItemsProduct container" >

            {
                loading ? <h2>Cargando...</h2> :

                    data.map(product =>
                        <div key={product.id}>

                            <div className="contenedorProduct">
                                <img className="imageP" src={product.image}></img>

                                <div className="title">
                                    <h2 className="titleP">{product.title}</h2>
                                </div>

                                <div className="info">
                                    <p className="priceP">Precio: $ {product.price}</p>
                                    <p className="stockP">Disponibles {product.stock}</p>
                                </div>


                                <button className="btnAgregar" onClick={() => addItemToCart(product)}>Agregar al carrito</button>

                            </div>
                        </div>

                    )}


        </div>
    )

}

