import { useEffect, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interface';

interface useProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs)=>void;
    value?: number;
}
export const useProduct = ({onChange, product, value = 0}:useProductArgs)=> {
    const [counter, setCounter] = useState<number>(value)
    
    const increaseBy = (value:number):void=>{
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);

        onChange && onChange({count: newValue, product});
    }
    useEffect(() => {
        setCounter(value)
    }, [value])
    
    return{
        counter,
        increaseBy
    }
}