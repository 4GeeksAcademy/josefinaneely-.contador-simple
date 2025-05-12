import React, { useEffect, useState } from "react";


function SimpleCounter() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setContador(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    const digitos = String(contador).padStart(6, '0').split('');
    return (<div className="contador">
        {digitos.map((digit, index) => (
            <div className="digit" key={index}>
                {digit}
            </div>
        ))}        </div>);
}




export default SimpleCounter;