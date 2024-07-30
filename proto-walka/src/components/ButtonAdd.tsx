import { useState } from 'react'

export default function ButtonAdd(){

    const [count,setCount] = useState<number>(0);

    function OnClickHandler(){
        setCount(count+1);
    }

    return(
        <button onClick={OnClickHandler}>加算ボタン : [{count}]</button>
    )
}