import { useEffect, useState } from "react"
import {getStoredCard} from "../utilities/fakedb"

const useCart =(products)=>{
    const [cart , setSelectItem]= useState([])
    useEffect(()=>{
        const storedCard = getStoredCard()
        const saveStoredCard =[]
        for(const id in storedCard){
           const buyProduct =products.find(product=>product.id === id) 
           if(buyProduct){
            const quantity = storedCard[id]
            buyProduct.quantity = quantity
            saveStoredCard.push(buyProduct)
           }
        }
        setSelectItem(saveStoredCard)
       
    },[products]) 
    return [cart , setSelectItem]
}

export default useCart;