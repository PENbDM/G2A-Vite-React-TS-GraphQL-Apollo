import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";


interface CartItem {
    user_id: string;
    id: string;
    title: string;
    price: number;
    amount: number;
    imgUrl: string;
}

interface CartState {
    id: string | null;
    user_id: string | null;
    products: CartItem[]; // Now an array of objects

    setUserId: (userId: string) => void;
    // 2. Update the action to accept the whole object (excluding amount)
    addProduct: (product: Omit<CartItem, 'amount'>) => void;
    removeProduct: (productId: string) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            id: crypto.randomUUID(),
            user_id: null,
            products: [],

            setUserId: (userId) => set({ user_id: userId }),

            addProduct: (newProduct) =>
                set((state) => {
                    const existingProductIndex = state.products.findIndex(
                        (p) => p.id === newProduct.id && p.user_id === newProduct.user_id
                    );

                    if (existingProductIndex !== -1) {
                        const updatedProducts = [...state.products];
                        updatedProducts[existingProductIndex].amount += 1;
                        return { products: updatedProducts };
                    }

                    // Now correctly spreading newProduct which will contain user_id
                    return {
                        products: [...state.products, { ...newProduct, amount: 1 }]
                    };
                }),

            removeProduct: (productId) =>
                set((state) => ({
                    products: state.products.filter((p) => p.id !== productId),
                })),

            clearCart: () => set({ products: [] }),
        }),
        {
            name: 'shopping-cart',
            storage: createJSONStorage(() => localStorage),
        }
    )
);