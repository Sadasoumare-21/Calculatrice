import { useState } from "react"

function Calculatrice(){

function Opperation(){
    try{
        const expression = affichage
            .replace (/×/g, "*")
            .replace (/÷/g, "/")
            .replace (/−/g, "-")
            .replace (/,/g, ".")
            const result = eval (expression)
            setAffichage (result.toString())
    }
    catch{
        setAffichage('Erreur')
    }
}

    const [affichage, setAffichage] = useState("0");

    return(
        <div className="justify-center items-center rounded-2xl m-10 ml-10 p-4 grid grid-cols-4 gap-3 bg-black max-w-xs">
            <div className="text-white text-right text-5xl font-light mb-4 px-2 py-4 h-20 overflow-hidden break-all col-span-4">{affichage}</div>
            <button className="col-span-3 p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={() => setAffichage ("0")}>AC</button>
            <button className="p-2 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-800" onClick={() => setAffichage(affichage === "0"? "÷" : affichage + "÷")}>÷</button>
            <button  className="p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={()=> setAffichage(affichage === "0"? "7" : affichage + "7")}>7</button>
            <button  className="p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={()=> setAffichage(affichage === "0"? "8": affichage + "8")}>8</button>
            <button  className="p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={()=> setAffichage(affichage === "0"? "9": affichage + "9")}>9</button>
            <button  className="p-2 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-800" onClick={()=> setAffichage(affichage === ""? "×": affichage + "×")}>×</button>
            <button className="p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={()=> setAffichage(affichage === "0"? "4": affichage + "4")}>4</button>
            <button  className="p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={()=> setAffichage(affichage === "0"? "5": affichage + "5")}>5</button>
            <button  className="p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={()=> setAffichage(affichage === '0'? '6': affichage + '6')}>6</button>
            <button  className="p-2 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-800" onClick={()=> setAffichage(affichage === "0"? "-": affichage + '-')}>−</button>
            <button  className="p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={()=> setAffichage(affichage === "0"? "1": affichage + '1')}>1</button>
            <button className="p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={()=> setAffichage(affichage === "0"? '2': affichage + "2")}>2</button>
            <button  className="p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={()=> setAffichage(affichage === "0"? '3': affichage + "3")}>3</button>
            <button className="p-2 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-800" onClick={()=> setAffichage(affichage === "0"? '+': affichage + "+")}>+</button>
            <button  className="col-span-2 p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={() => setAffichage(affichage === "0"? '0' :affichage + '0')}>0</button>
            <button  className="p-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-800" onClick={()=> setAffichage(affichage === "0"? ",": affichage + ',')}>,</button>
            <button  className="p-2 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-800" onClick={Opperation}>=</button>
        </div>
    )
}
export default Calculatrice