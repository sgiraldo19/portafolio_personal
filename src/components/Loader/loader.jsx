import React from 'react'
import { useEffect, useState } from 'react'

import './loader.css'

export default function Loader() {

    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000);
    // }, []);

    // if (isLoading) {
    //     return (
    //         <>
    //             <div class="loader">
    //                 <div class="circles">
    //                     <span class="one"></span>
    //                     <span class="two"></span>
    //                     <span class="three"></span>
    //                 </div>
    //                 <div class="pacman">
    //                     <span class="top"></span>
    //                     <span class="bottom"></span>
    //                     <span class="left"></span>
    //                 </div>
    //             </div>
    //         </>
    //     )
    // }
    return (
        <>
            <div class="loader">
                <div class="circles">
                    <span class="one"></span>
                    <span class="two"></span>
                    <span class="three"></span>
                </div>
                <div class="pacman">
                    <span class="top"></span>
                    <span class="bottom"></span>
                    <span class="left"></span>
                </div>
            </div>
        </>
    )
}