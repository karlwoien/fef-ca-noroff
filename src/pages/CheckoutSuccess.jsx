import { useEffect } from 'react';
import { useCartStore } from '../components/Store';

export default function CheckoutSuccess() {
    const clearCart = useCartStore((state) => state.clearCart);

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div className="">
            <h1 className="text-3xl font-bold">Checkout Successful</h1>
            <p>Thank you for your purchase!</p>
        </div>
    );
}