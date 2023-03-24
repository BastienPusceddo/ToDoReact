import React from "react";
import './NavBar.css'
import { NavLink } from 'react-router-dom';

function NavBar(){
    return(
        <div className={'navigation'}>
            <div>
                <NavLink to={"/"}>
                    <div>Home</div>
                </NavLink>
                <NavLink to={"/newTodo"}>
                    <div>Nouvelle todoList</div>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;