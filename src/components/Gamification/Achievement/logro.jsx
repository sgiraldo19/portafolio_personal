import React from 'react'
import { useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Logro(props) {

    const logro = () => toast(
        '🏆 Logro desbloqueado!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const logroGame = localStorage.getItem('LogroGame')
    const logroHome = localStorage.getItem('LogroHome')
    const logroAbout = localStorage.getItem('LogroAbout')
    const logroSkills = localStorage.getItem('LogroSkills')
    const logroContact = localStorage.getItem('LogroContact')
    const logroMusic = localStorage.getItem('LogroMusic')

    const page = props.page;

    useEffect(() => {
        if (logroGame === null) {
            localStorage.setItem('LogroGame', JSON.stringify(page))
            return (logro)
        }

        if (logroHome === null) {
            localStorage.setItem('LogroHome', JSON.stringify(page))
            return (logro)
        }

        if (logroAbout == null) {
            localStorage.setItem('LogroAbout', JSON.stringify(page))
            return (logro)
        }

        if (logroSkills == null) {
            localStorage.setItem('LogroSkills', JSON.stringify(page))
            return (logro)
        }

        if (logroContact == null) {
            localStorage.setItem('LogroContact', JSON.stringify(page))
            return (logro)
        }

        // if (logroMusic == null) {
        //         localStorage.setItem('LogroMusic', JSON.stringify(page))
        //         return (logro)
        // }

    }, [page])

    return (
        <></>
    )

}