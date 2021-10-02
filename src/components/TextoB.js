import React from 'react';
import Boton from './Boton.js';
import style from './styles/Texto.css';
import meinklima from './images/meinklima.png';
import {Animated} from "react-animated-css";
import { useState } from 'react';

let a = 1;

function TextoB() {
    const[tittle, setTittle] = useState("ETAPA 1");
    const[txt, setTxt] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

    function siguiente(){
        a = a+1;
        if(a === 1){
            setTittle("ETAPA 1");
            setTxt("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        }
        else if(a === 2){
            setTittle("ETAPA 2");
            setTxt("el dante se la come Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        }
        else if(a === 3){
            setTittle("ETAPA 3");
            setTxt("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        }
        else if(a === 4){
            a = 0;
        }
    }
    function anterior(){
        a = a-1;
        if(a === 1){
            setTittle("ETAPA 1");
            setTxt("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        }
        else if(a === 2){
            setTittle("ETAPA 2");
            setTxt("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        }
        else if(a === 3){
            setTittle("ETAPA 3");
            setTxt("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        }
        else if(a === 0){
            a = 4;
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="row d-flex justify-content-center container p-lg-5 m-lg-5 pt-4 my-5">
                
                <div className="d-flex justify-content-center col-lg-6 col-12 mt-lg-5 mb-4">
                    <div>
                    <img className="img-text d-none d-lg-block my-5" src="https://mantencioncaldera.cl/wp-content/uploads/2019/04/hogar-en-Las-Condes-con-Instalacion-Calefaccio%CC%81n-Central-Santiago.jpg" />
                    </div>
                </div>
                <div className="col-lg-5 col-12 mt-lg-4">
                    <div className="m-4 mt-lg-0">
                        <div className="m-lg-4 mt-lg-0">
                            <img className="logo mb-4 " src={meinklima}></img>
                            <h1 className="titulo-b my-3">{tittle}</h1>
                            <p className="text me-lg-3 mb-4">{txt}</p>
                            
                            <div className="mt-lg-5 mb-5">
                            <div className="row d-flex justify-content-center">
                            <div className="col-12 col-lg-5 m-3 mx-lg-3 d-flex justify-content-center">
                                <button onClick={anterior} className="my-btn">ANTERIOR</button>
                            </div>
                            <div className="col-12 col-lg-5 m-3 mx-lg-3 d-flex justify-content-center">
                                <button onClick={siguiente} className="my-btn">SIGUIENTE</button>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    );
}

export default TextoB;