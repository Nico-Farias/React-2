
import React from 'react'
import "./style.scss"
import { useContext } from 'react';
import { CartContext } from './../../context/cartContext';


const ItemCart = ({ item }) => {

    const { addItemToCart, deleteCarrito } = useContext(CartContext);

    const { id } = item;

    return (
        <div className='carritoContenedorInterno'>
            <img src={item.image}></img>
            <h2>{item.cantidad}-- {item.title}</h2>
            <p>$ {item.price * item.cantidad}</p>
            <div className='btnAyQ'>
                <button className='agregar' onClick={() => addItemToCart(item)}>+</button>
                <button className='quitar' onClick={() => deleteCarrito(item)}>-</button>
            </div>
        </div>
    )
}

export default ItemCart;