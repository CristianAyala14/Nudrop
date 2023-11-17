import React, { createContext } from "react";
import { useState, useEffect } from "react";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";

export const ecommerce_context = createContext(); //exportar el contexto creado

    function CartProvider({ children }) {
    const [productosFS, setProductosFS] = useState([]);

    useEffect(() => {
        let productosData = [];
        const products = getFirestore();
        const productscollection = collection(products, "productos");

        getDocs(productscollection).then((snapshot) => {
        if (!snapshot.empty) {
            productosData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            setProductosFS(productosData);
        }
        });
    }, []);

    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    function addToCart(product) {
        if (allProducts.find((el) => el.id === product.id)) {
        const newallProducts = allProducts.map((item) =>
            item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
        setTotal(total + product.precio * product.cantidad);
        setCountProducts(countProducts + product.cantidad);
        setAllProducts([...newallProducts]);
        } else {
        setTotal(total + product.precio * product.cantidad);
        setCountProducts(countProducts + product.cantidad);

        if (allProducts.length < 6) {
            setAllProducts([...allProducts, product]);
        } else {
            alert("No podes agregar mas en esta compra.");
        }
        }
    }

    function Deletefromcart(product) {
        const newrestProducts = allProducts.filter(
        (item) => item.id !== product.id
        );
        setAllProducts(newrestProducts);
        setTotal(total - product.precio * product.cantidad);
        setCountProducts(countProducts - product.cantidad);
    }
    //recopilo datos del comprador
    const [customerInfo, setCustomerInfo] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        setCustomerInfo({
        ...customerInfo,
        [e.target.name]: e.target.value,
        });
    };


    //aca es donde envio la orden
    function sentOrder() {
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        if (allProducts.length > 0) {
        const orderWithCustomer = {
            ...customerInfo,
            products: allProducts,
            total: total,
        };

        addDoc(orderCollection, orderWithCustomer)
            .then(() => {
            setAllProducts([]);
            setTotal(0);
            setCountProducts(0);
            })
            .catch((error) => {
            console.error("Error al enviar la orden:", error);
            });
        } else {
        alert("No hay productos en el carrito. Agrega productos antes de comprar.");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sentOrder();
    };

    return (
        <ecommerce_context.Provider
        value={{
            allProducts,
            setAllProducts,
            total,
            setTotal,
            countProducts,
            setCountProducts,
            addToCart,
            Deletefromcart,
            productosFS,
            sentOrder,
            handleChange,
            handleSubmit,
            customerInfo,
            setCustomerInfo,
        }}
        >
        {children}
        </ecommerce_context.Provider>
    );
    }

    export default CartProvider;