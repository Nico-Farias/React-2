import React from 'react'

import "./style.scss"
import { useEffect } from 'react';
import { useState } from 'react';


export default function ItemsCount({ stock, initial, addCarrito }) {

    const [count, setCount] = useState([]);

    useEffect(() => {
        return (
            setCount)

    }, [])

    function agregarProducto() {
        setCount += 1;
    }
    function quitarProducto() {
        setCount -= 1;
    }

    return (

        <div>
            <div className='ContenedorCount'>
                <div className='contenedor'>
                    <p onClick={() => agregarProducto()}>-</p>
                    <p>{count}</p>
                    <p onClick={() => quitarProducto()}>+</p>
                </div>
                <button>Agregar al carrito</button>
            </div>

        </div>
    )
}
