import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product) =>
                set((state) => {
                    const exists = state.items.find((item) => item.id === product.id);

                    if (exists) {
                        return {
                            items: state.items.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }

                    return {
                        items: [...state.items, { ...product, quantity: 1 }],
                    };
                }),

            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),

            increaseQuantity: (id) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                })),

            decreaseQuantity: (id) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id && item.quantity > 1
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                })),

            clearCart: () => set(() => ({ items: [] })),

            getTotal: () =>
                get().items.reduce(
                    (sum, item) => sum + item.discountedPrice * item.quantity,
                    0
                ),
        }),
        {
            name: "cart-store",
        }
    )
);