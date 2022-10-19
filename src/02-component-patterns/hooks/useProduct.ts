import { useEffect, useState, useRef } from 'react';
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interface';

interface useProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs)=>void;
    value?: number;
    initialValues?: InitialValues;
}
export const useProduct = ({onChange, product, value = 0, initialValues}:useProductArgs)=> {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);
    const increaseBy = (value:number):void=>{
        const newValue = initialValues?.maxCount ? Math.min(initialValues.maxCount, Math.max(counter + value, 0)) : Math.max(counter + value, 0);
        setCounter(newValue);
        onChange && onChange({ count:newValue, product })
    }
    const reset = ()=>{
        setCounter(initialValues?.count || value)
    }
    useEffect(() => {
        if( !isMounted.current ) return;
        setCounter(value)
    }, [value])
    
    useEffect(() => {
        isMounted.current = true;
    }, [])
    
    return{
        counter,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }
}