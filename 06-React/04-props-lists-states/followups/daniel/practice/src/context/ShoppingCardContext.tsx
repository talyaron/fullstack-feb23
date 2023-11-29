import { FC, createContext, useContext, useState } from "react"

interface ShoppingCardProviderProps{
    children: React.ReactNode
}

interface CartItem {
    id: number,
    quantity: number
}

interface ShoppingCardContext{
    getItemQuantity: (id:number) => number
    increaseCardQuantity: (id:number) => void
    decreaseCardQuantity: (id:number) => void
    removeFromCard: (id:number) => void
}

const ShoppingCardContext =createContext({} as ShoppingCardContext)

export function useShoppingCard(){
    return useContext(ShoppingCardContext)
}

export const ShoppingCardProvider:FC<ShoppingCardProviderProps> = ( {children }) =>{
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id:number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCardQuantity(id: number){
        setCartItems(currItems =>{
            if(currItems.find(item => item.id === id) == null)//If it's not there (that's what == null means, like saying "not there"), then we do something.
            {
                return [...currItems, { id, quantity:1}]
            }else{
                return currItems.map(item =>{
                    if(item.id === id){
                        return {...item, quantity:item.quantity + 1}
                    } else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCardQuantity(id:number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id == id)?.quantity ===1){
                return currItems.filter(item => item.id !== id)
            }else{
                return currItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity:item.quantity 
                        - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    
    function removeFromCard(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
    return(
        <ShoppingCardContext.Provider value={{getItemQuantity, increaseCardQuantity, decreaseCardQuantity, removeFromCard}}>
            {children}
        </ShoppingCardContext.Provider>
    )
}