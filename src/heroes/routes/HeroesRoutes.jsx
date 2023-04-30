import React from 'react'
import { Navbar } from '../../ui/components/Navbar'
import { MarvelPage, DCPages, HeroPage, SearchPage } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container'>
            <Routes>

                <Route path="marvel" element={ <MarvelPage /> } />
                <Route path="dc" element={ <DCPages />} /> 

                <Route path="search" element={ <SearchPage />} />
                <Route path="hero" element={ <HeroPage />} />


                <Route path="/" element={ <Navigate to="/marvel" /> } />
            </Routes>
        </div>
    </>
  )
}
