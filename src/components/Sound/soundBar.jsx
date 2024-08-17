import React, { useState, useRef } from 'react'

import music1 from '../../assets/music/hyrule_castle.mp3'
import music2 from '../../assets/music/hyrule_field.mp3'

import './soundBar.css'

export default function SoundBar() {
    const ref = useRef(null)
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)

        if (!click) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }
    return (
        <div className='soundBar'>
            <div onClick={() => handleClick()}>
                <div className='play'>
                    <div className='jukebox'></div>
                </div>
            </div>
            <audio src={music2} ref={ref} loop /> &nbsp;
        </div>
    )
}