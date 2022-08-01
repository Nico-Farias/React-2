
import React from 'react'
import "./style.scss"
import { useContext } from 'react';
import { CartContext } from './../../context/cartContext';



const ItemCart = ({ item }) => {


    const { addItemToCart, deleteCarrito, count, setCount } = useContext(CartContext);

    const { id } = item;

    return (
        <div className='carritoContenedorInterno'>
            <img src={item.image}></img>
            <h2>{item.cantidad}  --  {item.title}</h2>
            <div className='itemCantidad'>
                <p>Quedan {item.stock - count} disponibles</p>
                <p>$ {item.price * item.cantidad}</p>
            </div>

            <div className='btnAyQ'>
                <button className='agregar' onClick={() => addItemToCart(item)} disabled={count >= item.stock}>+</button>
                <button className='quitar' onClick={() => deleteCarrito(item)} disabled={count < 1}>-</button>
            </div>
        </div>
    )
}

export default ItemCart;