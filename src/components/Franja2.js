import React from 'react';

document.addEventListener("DOMContentLoaded", function(){
        

    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
          e.stopPropagation();
        });
    })



    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                  this.querySelectorAll('.submenu').forEach(function(everysubmenu){
                      // hide every submenu as well
                      everysubmenu.style.display = 'none';
                  });
            })
        });
        
        document.querySelectorAll('.dropdown-menu a').forEach(function(element){
            element.addEventListener('click', function (e) {
    
                  let nextEl = this.nextElementSibling;
                  if(nextEl && nextEl.classList.contains('submenu')) {	
                      // prevent opening link if link needs to open dropdown
                      e.preventDefault();
                      console.log(nextEl);
                      if(nextEl.style.display == 'block'){
                          nextEl.style.display = 'none';
                      } else {
                          nextEl.style.display = 'block';
                      }

                  }
            });
        })
    }
    // end if innerWidth

}); 

export default function Franja2() {

    
	

    return (
    <div>
        <div className="d-flex justify-content-center row" style={{backgroundColor:"#D60238"}}>
            <div className="col-lg-2 my-2 d-flex justify-content-center">
                <a className="nav-link dropdown-toggle franja-p fw-bold link-light m-1 dropdown" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                VER CATEGORIAS
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li>
                        <a className="dropdown-item navbar-p p-3" href="#">
                        Calefont &raquo;
                        </a>
                        <ul className="submenu dropdown-menu">
                            <li>
                            <a className="dropdown-item navbar-p p-3" href="#">Radiadores</a>
                            </li>
                        </ul>
                    </li>
                    <li><a className="dropdown-item navbar-p p-3" href="#">Radiadores</a></li>
                    <li><a className="dropdown-item navbar-p p-3" href="#">Termostatos</a></li>
                    <li><a className="dropdown-item navbar-p p-3" href="#">Otros productos</a></li>
                    <li><a className="dropdown-item navbar-p p-3" href="#">Repuesto</a></li>
                </ul>
            </div>
            <div className="col-lg-3 my-lg-2 mx-3">
                <div class="input-group my-1">
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <button class="input-group-text" id="inputGroup-sizing-default"><i class="fas fa-search"></i></button>
                </div>
            </div>
            <div className="col-lg-2 my-3 d-flex justify-content-center">
                <p className="franja-p m-1 fw-bold">Valor Dolar = 775$</p>

            </div>
        </div>
    </div>
);

}