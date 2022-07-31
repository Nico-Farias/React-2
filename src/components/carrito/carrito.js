
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useState, useContext, useEffect } from "react";
import { CartContext } from './../../context/cartContext';
import ItemCart from './ItemCart';



function Carrito() {

    const [carritoOpen, setCarritoOpen] = useState(false);
    const [cantidadProductos, setCantidadProductos] = useState(0);

    const { cartItem } = useContext(CartContext)

    useEffect(() => {
        setCantidadProductos(
            cartItem.reduce((previus, current) => previus + current.cantidad, 0)
        )
    }, [cartItem])

    const total = cartItem.reduce((previus, current) => previus + current.cantidad * current.price, 0)


    return (
        <div className="carrito ">
            <div onClick={() => {
                setCarritoOpen(!carritoOpen)
            }} >
                <div>
                    {carritoOpen ? (<p className="cerrarCarrito"> x </p>

                    ) : (
                        <Button variant="success">
                            <img src='img/carrito.png'></img><Badge bg="danger"> {cantidadProductos}</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                    )}





                </div>
            </div>
            {cartItem && carritoOpen && (
                <div className="carritoContenedor">
                    <h2>Tu carrito</h2>

                    {cartItem.length === 0 ? <p>Tu carrito esta vacio</p> : (
                        <div>
                            {cartItem.map((item, i) => (
                                <ItemCart key={i} item={item} />
                            ))}
                        </div>
                    )}

                    <h2 className="total">Total: $ <span>{total}</span>  </h2>

                </div>
            )}






        </div>






    )

}

export default Carrito;
