import React from 'react';
import Navbar from './Navbar';
import Fotter from './Fotter';
import Home from '../views/Home'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Servicios from '../views/Servicios';
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import {Animated} from "react-animated-css";
import Instalacion from '../views/Instalacion';
import Mantenimiento from '../views/Mantenimiento'





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
                    </Switch>
                    <Fotter />

                    

                </div>
            </Animated>
        </BrowserRouter>
    );
}
export default App;