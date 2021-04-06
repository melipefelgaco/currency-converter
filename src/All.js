import React, { useState } from 'react';
import brlImage from './images/brl-flag.png';
import usdImage from './images/usd-flag.png';
import eurImage from './images/eur-flag.png';
require('dotenv').config();

export default function All() {
// // Function that converts CURRENCY
// const convCur = async (curr) => {
//     const inputVal = document.getElementById('val-input').value;

//     const toRatio = async (curr2) => {
//         const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${saida.innerHTML}`)
//         const responseBody = await response.json();
//         return responseBody.rates[curr];
//     }

//     const ratioResult = await toRatio();
//     let result = (inputVal/ratioResult);
//     // Check to see if entrada == saida
//     if (entrada.innerHTML == saida.innerHTML) {
//         result = 'Ambas moedas são iguais. Tente uma moeda diferente.'
//     }
//     // Make const result show on the selected currency
//     if (saida.innerHTML == 'BRL') {
//         result = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//     }
//     if (saida.innerHTML == 'USD') {
//         result = result.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//     }
//     if (saida.innerHTML == 'EUR') {
//         result = result.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
//     }
//     // Prints the final result
//     document.getElementById('result').textContent = `${result}`;
    


    const [entrada, setEntrada]  = useState('Moeda de entrada');
    const [saida, setSaida] = useState('Moeda de saída');
    const [resultado, setResultado] = useState('Resultado');
    const [input, setInput] = useState('');
    
    const API_KEY = process.env.REACT_APP_API_KEY;

    function handleClickDropdown1 (currency) {
        setEntrada(currency)
    };
    function handleClickDropdown2 (currency) {
        setSaida(currency)
    };

    function getInput(input) {
        setInput(input.target.value)
    }

    const toRatio = async (resultado) => {
        const response = await fetch(`https://free.currconv.com/api/v7/convert?q=${saida}_${entrada}&compact=ultra&apiKey=${API_KEY}`)
        const responseBody = await response.json();
        setResultado((resultado / responseBody[`${saida}_${entrada}`]).toFixed(2))
        return resultado / responseBody[`${saida}_${entrada}`];
    }
console.log(resultado);
    return (
        <div>
            <div className="all">
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="entrada" data-bs-toggle="dropdown" aria-expanded="false">{entrada}</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><img src={brlImage} alt="brl-flag"></img><button className="dropdown-item" href="#" id="BRL1" onClick={() => handleClickDropdown1('BRL')}>BRL</button></li>
                <li><img src={usdImage} alt="usd-flag"></img><button className="dropdown-item" href="#" id="USD1" onClick={() => handleClickDropdown1('USD')}>USD</button></li>
                <li><img src={eurImage} alt="eur-flag"></img><button className="dropdown-item" href="#" id="EUR1" onClick={() => handleClickDropdown1('EUR')}>EUR</button></li>
            </ul>
            <svg id="arrow-icon" alt="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-right"
                viewBox="0 0 16 16">
                <path fillRule="evenodd"
                    d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
            </svg>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="saida" data-bs-toggle="dropdown"
                aria-expanded="false">{saida}</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><img src={brlImage} alt="brl-flag"></img><button className="dropdown-item" href="#" id="BRL2" onClick={() => handleClickDropdown2('BRL')}>BRL</button></li>
                <li><img src={usdImage} alt="usd-flag"></img><button className="dropdown-item" href="#" id="USD2" onClick={() => handleClickDropdown2('USD')}>USD</button></li>
                <li><img src={eurImage} alt="eur-flag"></img><button className="dropdown-item" href="#" id="EUR2" onClick={() => handleClickDropdown2('EUR')}>EUR</button></li>
            </ul>
        </div>
        <h2>Digite o valor desejado</h2>
        <input type="input" placeholde="Valor a ser convertido" onChange={getInput} id="val-input"></input>
            <button className="converter" id="converter" onClick={() => toRatio(input)}>Converter</button>
        <div>
            <button className="result" id="result">{resultado}</button>
        </div>
        <h3>Feito com <span>bootstrap</span></h3>
        <div className="footer">
            <h4><a href="https://github.com/fmagesty">github.com/fmagesty</a></h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle" id="github-icon" alt="github-icon"
                viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
        </div>
    </div>
        </div>
    )
}
