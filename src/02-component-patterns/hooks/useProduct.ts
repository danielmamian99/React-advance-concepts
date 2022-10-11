import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interface';

interface useProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs)=>void;
    value?: number;
}
export const useProduct = ({onChange, product, value = 0}:useProductArgs)=> {
    const [counter, setCounter] = useState<number>(value);

    const isControlled = useRef(!!onChange);   
    const increaseBy = (value:number):void=>{
        if( isControlled.current ){
            return onChange!({ count:value, product })
        }
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);
    }
    useEffect(() => {
        setCounter(value)
    }, [value])
    
    return{
        counter,
        increaseBy
    }
}