import { createContext, useEffect, useState } from "react";
import getData from "../data/Product";


export const CartContext = createContext();


function CartProvider({ children }) {


    //CARGAR PRODUCTOS AL DOM

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData
            .then((res) => setData(res))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])


    //FUNCONES DE CARRITO

    const [cartItem, setCartItems] = useState(() => {
        try {
            const productosEnLocal = localStorage.getItem("cartProducts");
            return productosEnLocal ? JSON.parce(productosEnLocal) : [];
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItem));


    }, [cartItem]);




    const addItemToCart = (product) => {
        const inCart = cartItem.find((productInCart) => productInCart.id === product.id);

        if (inCart) {
            setCartItems(
                cartItem.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, cantidad: inCart.cantidad + 1 }


                    } else return productInCart;
                })
            )
        } else {
            setCartItems([...cartItem, { ...product, cantidad: 1 }]);
        }

    }
    const deleteCarrito = (product) => {
        const inCart = cartItem.find((productInCart) => productInCart.id === product.id);


        if (inCart.cantidad === 1) {
            setCartItems(
                cartItem.filter(productInCart => productInCart.id !== product.id)
            )
        } else {
            setCartItems(
                cartItem.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, cantidad: inCart.cantidad - 1 }
                    } else return productInCart;
                })
            )
        };


    }
    return (
        <CartContext.Provider value={{ data, loading, cartItem, addItemToCart, deleteCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;