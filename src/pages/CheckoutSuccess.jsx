import { useEffect } from 'react';
import { useCartStore } from '../components/Store';
import { Link } from 'react-router-dom';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function CheckoutSuccess() {
    const clearCart = useCartStore((state) => state.clearCart);

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Success Icon */}
            <AiOutlineCheckCircle className="text-megablue text-9xl mb-4" />

            {/* Success Message */}
            <h1 className="text-5xl font-bold mb-4 ">Checkout Successful</h1>
            <p className="text-lg text-center mb-8">
                
                We hope you'll be happy with your purchase. <br />
                Please don't hesitate to{' '}
                <Link to="/contact" className="text-megablue underline">
                    contact
                </Link>{' '}
                us if you have any questions.
            </p>

            {/* Shop More Button */}
            <Link
                to="/"
                className="bg-megablue text-white py-3 px-6 rounded hover:bg-megablue-dark transition"
            >
                Shop More!
            </Link>
        </div>
    );
}