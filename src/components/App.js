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
import NavbarCatalogo from './NavbarCatalogo';
import Detalle from '../views/Detalle';
import CatalogoCalderas from '../views/CatalogoCalderas';
import CatalogoAires from '../views/CatalogoAires';
import CatalogoRadiadores from '../views/CatalogoRadiadores';
import CatalogoCalefon from '../views/CatalogoCalefon';

function App() {
    return (
        <BrowserRouter>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div>
                    <Navbar />
                    <NavbarCatalogo />
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/servicios" exact component={Servicios}></Route>
                        <Route path="/instalaciones" exact component={Instalacion}></Route>
                        <Route path="/mantenimiento" exact component={Mantenimiento}></Route>
                        <Route path="/reparaciones" exact component={Reparacion}></Route>
                        <Route path="/proyectos" exact component={Proyecto}></Route>
                        <Route path="/catalogo" exact component={Catalogo}></Route>
                        <Route path="/catalogo/calderas" exact component={CatalogoCalderas}></Route>
                        <Route path="/catalogo/aires" exact component={CatalogoAires}></Route>
                        <Route path="/catalogo/radiadores" exact component={CatalogoRadiadores}></Route>
                        <Route path="/catalogo/calefon" exact component={CatalogoCalefon}></Route>
                        <Route path="/product/:idef" exact component={Detalle}></Route>
                    </Switch>
                    <Fotter />
                </div>
            </Animated>
        </BrowserRouter>
    );
}
export default App;