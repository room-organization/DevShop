import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Product } from '../utils/types'

interface CartStore {
  items: Product[]
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
          return // toast('Item already in cart.');
        }

        set({ items: [...get().items, data] })
        // toast.success('Item added to cart.');
      },
      removeItem: async (id: string) => {
        await AsyncStorage.setItem(
          'cart',
          JSON.stringify([...get().items.filter((item) => item.id !== id)]),
        )
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        // toast.success('Item removed from cart.');
      },
      removeAll: async () => {
        await AsyncStorage.removeItem('cart')
        set({ items: [] })
      },
    }),
    {
      name: 'cart-storage',
      getStorage: () => AsyncStorage,
    },
  ),
)

export default useCart
