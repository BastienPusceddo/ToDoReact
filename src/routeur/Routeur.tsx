import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "../components/navbar/NavBar";
import Home from "../pages/home/Home";
import NewTodo from "../pages/newTodo/NewTodo";




function Routeur (){
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path={'/'} element={<Home />}></Route>
                <Route path={'/NewTodo'} element={<NewTodo />}></Route>
            </Routes>


        </BrowserRouter>


    );
}

export default Routeur;