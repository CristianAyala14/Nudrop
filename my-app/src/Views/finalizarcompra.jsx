import React, { useState, useContext } from 'react';
import { ecommerce_context } from '../context/cartContext';
import '../styles/finalizarcompra.css';

function FinalizarCompra() {
    const {
        sentOrder,
        handleChange,
        handleSubmit,
        customerInfo,
        setCustomerInfo,
    } = useContext(ecommerce_context);

    const [compraFinalizada, setCompraFinalizada] = useState(false);
    const [mostrarFormulario, setMostrarFormulario] = useState(true);

    const handleSentOrder = () => {
        sentOrder();
        setCompraFinalizada(true);
        setMostrarFormulario(false); // Oculta el formulario después de enviar la orden
        // Restablecer los valores del formulario a vacíos
        setCustomerInfo({
            firstName: '',
            lastName: '',
            phoneNumber: '',
        });
    };

    return (
        <div className='form-compra'>
            {mostrarFormulario && !compraFinalizada ? (
                <form onSubmit={handleSubmit} >
                    <label>
                        <p className='campos-form-compra'>INGRESA TU NOMBRE:</p>
                        <input
                            type="text"
                            name="firstName"
                            value={customerInfo.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <p className='campos-form-compra'>INGRESA TU APELLIDO:</p>
                        <input
                            type="text"
                            name="lastName"
                            value={customerInfo.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <p className='campos-form-compra'>INGRESA TU TELEFONO:</p>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={customerInfo.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit" onClick={handleSentOrder}>
                        FINALIZAR COMPRA
                    </button>
                </form>
            ) : (
                <p className='mensaje-compra-finalizada'>¡Compra finalizada! Gracias por tu orden.</p>
            )}
        </div>
    );
}

export default FinalizarCompra;