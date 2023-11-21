import React, { useState } from "react";

const index = () => {
    const [weight, setweight] = useState();
    const [height, setheight] = useState();
    const [result, setresult] = useState();

    const calculaImc =() => {
        const imc = weight / (height * height);
        const formattedImc = imc.toFixed(2);
        setresult(+formattedImc);
    };
    return (
        <div>
            <input type="number" value={weight} onChange={(e)=> setweight(+e.target.value)}  placeholder="Digite seu peso (kg)"/>
            <input type="number" value={height} onChange={(e)=> setheight(+e.target.value)}  placeholder="Digite sua altura (m)"/>
            <button onClick={calculaImc}>Calcular</button>

            <h1>{result}</h1>
        </div>
    )
}

export default Imc;