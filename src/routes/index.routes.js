import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Recipes } from '../views/Recipes';

export const RoutesMain = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Recipes />} />
                </Routes>
            </Router>
        </>
    )
}
