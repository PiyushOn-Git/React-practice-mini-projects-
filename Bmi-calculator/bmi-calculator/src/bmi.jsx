import React, { useState } from "react";
import "./Bmi.css";

function Bmi() {
    const [weight, setweight] = useState("");
    const [height, setheight] = useState("");
    const [bmi, setbmi] = useState("");
    const [category, setcategory] = useState("");

    
    const BmiSubmit = () => {
        const h = Number(height) / 100;
        const w = Number(weight);

        if(!w || !h) return;

        const calculatedbmi = w / (h * h);
        setbmi(calculatedbmi.toFixed(2));

        if(calculatedbmi < 18.5) {
            setcategory("underweight")
        } else if (calculatedbmi < 24.9) {
            setcategory("normal") 
        } else if (calculatedbmi < 29.9) {
            setcategory("overweight") 
        } else {
            setcategory("obese")
        }


    };

    return(
        <>
        <div className="card">
        <h1>Bmi calculator</h1>
        <input type="number" placeholder="Enter weight(Kg)" 
        value={weight} onChange={(e) => setweight(e.target.value)}></input>
        <input type="number" placeholder="Enter Height(Cm)" value={height}
        onChange={(e) => setheight(e.target.value)}></input>
        <button onClick={BmiSubmit}>submit</button>
        {bmi && <h2>Your BMI is: {bmi}</h2>}
        {category && <h2 className={category}>You are : {category}</h2>}
        </div>
        </>
    )
}


export default Bmi