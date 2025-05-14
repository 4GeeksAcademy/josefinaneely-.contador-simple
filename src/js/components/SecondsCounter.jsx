import React from "react";

const SecondsCounter = (props) => {
    var unidad = props.segundos % 10;
    var decena = Math.floor(props.segundos / 10) % 10;
    var centena = Math.floor(props.segundos / 100) % 10;
    var mil = Math.floor(props.segundos / 1000) % 10;
    var diezmil = Math.floor(props.segundos / 10000) % 10;


    return (
        <div className="row justify-content-center mt-5">

            <div className="col-1 m-1">

                <i class="fas fa-stopwatch "></i>
            </div>
            <div className="col-1 m-1 my-auto">{diezmil}</div>
            <div className="col-1 m-1">{mil}</div>
            <div className="col-1 m-1">{centena}</div>
            <div className="col-1 m-1">{decena}</div>
            <div className="col-1 m-1">{unidad}</div>




        </div>
    );
};

export default SecondsCounter;

