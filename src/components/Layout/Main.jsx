import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom/dist';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Main;