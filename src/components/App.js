import React from 'react';
import Navbar from './Navbar';
import Fotter from './Fotter';
import Home from '../views/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Servicios from '../views/Servicios';
import "react-multi-carousel/lib/styles.css";
import {Animated} from "react-animated-css";
import Instalacion from '../views/Instalacion';
import Mantenimiento from '../views/Mantenimiento'
import Reparacion from '../views/Reparacion';
import Proyecto from '../views/Proyecto'
import Catalogo from '../views/Catalogo'
import Detalle from '../views/Detalle';
import Admin from '../views/Admin';
import Registro from '../views/Registro';
import Inicio from '../views/Inicio';
import Carrito from '../views/Carrito';

function App() {
    return (
        <BrowserRouter>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/servicios" exact component={Servicios}></Route>
                        <Route path="/instalaciones" exact component={Instalacion}></Route>
                        <Route path="/mantenimiento" exact component={Mantenimiento}></Route>
                        <Route path="/reparaciones" exact component={Reparacion}></Route>
                        <Route path="/proyectos" exact component={Proyecto}></Route>
                        <Route path="/catalogo" exact component={Catalogo}></Route>
                        <Route path="/product/:idef" exact component={Detalle}></Route>
                        <Route path="/admin" exact component={Admin}></Route>
                        <Route path="/registro" exact component={Registro}></Route>
                        <Route path="/login" exact component={Inicio}></Route>
                        <Route path="/carrito" exact component={Carrito}></Route>
                    </Switch>
                    <Fotter />
                </div>
            </Animated>
        </BrowserRouter>
    );
}
export default App;