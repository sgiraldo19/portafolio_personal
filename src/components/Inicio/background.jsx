import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../Sidebar/sidebar'

import './background.css'

export default function Inicio() {
    return (
        <>
            <Sidebar />
            <div className="page">
                <span className="top-tag">Portafolio personal</span>
                <Outlet />
                <ul class="circle" >
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>                    
                </ul >                
            </div>
            
        </>
    )
}
