import React from 'react';
import { useContext } from 'react';
export default function Navigation() {
    return (
        <div className='box'>
                <nav>
                    <ul>
                        <li><a className='active' href='#home'>Home</a></li>
                        <li><a className='active' href='#news'>News</a></li>
                        <li><a className='active' href='#about'>About</a></li>
                        <li><a className='active' href='#contact'>Contact</a></li>
                    </ul>
                </nav>
        </div>
    )
}
