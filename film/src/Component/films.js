import React from 'react'
import { Films } from "../shared/listOfFilms";
import { useState } from "react";
export default function Film(){
    const [films, setFilm] = useState([]);
        return (
            <div className='container'>
                {Films.map((films) => (
                    <div className='column'>
                        <div className='card'>
                            <img src={films.img} />
                            <h3>{films.name}</h3>
                            <p className='title'>{films.type}</p>
                            <p className="but"><button onClick={()=>{setFilm(films)}}>
                            <a href='#popup1' id='openPopUp'>Detail</a></button>
                            </p>
                        </div>
                    </div>
                ))}
                <div id ='popup1' className='overlay'>
          <div className='popup'>
            <img src={films.img}/>
            <h2>{films.name}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
              {films.info}
            </div>
          </div>
        </div>
            </div>
        )
    }
    // render(){
    //     return(
    //         <div className='container'>
    //     <div className='column'>
    //         <div className='card'>
    //             <img src='assets/image/5zrqbpkh_chuyen-tau-sinh-tu_vertical-thumbnail-png.jpg'/>
    //             <h3>Train of Busan</h3>
    //             <p className='title'>Zombie</p>
    //             <p><button>Detail</button></p>
    //         </div>
    //     </div>
    //     <div className='column'>
    //         <div className='card'>
    //             <img src='assets/image/68747470733a2f2f692e696d6775722e636f6d2f624456475270662e6a7067.jpg'/>
    //             <h3>No Game No Life</h3>
    //             <p className='title'>anime</p>
    //             <p><button>Detail</button></p>
    //         </div>
    //     </div>
    //     <div className='column'>
    //         <div className='card'>
    //             <img src='assets/image/the-conjuring-2013-578600.jpg'/>
    //             <h3>The Counjuring</h3>
    //             <p className='title'>horrified</p>
    //             <p><button>Detail</button></p>
    //         </div>
    //     </div>
    //     <div className='column'>
    //         <div className='card'>
    //             <img src='assets/image/qVbNDmPrbnfgINfEoAMx41N7IfH.jpg'/>
    //             <h3>The Troll</h3>
    //             <p className='title'>Cartoon</p>
    //             <p><button>Detail</button></p>
    //         </div>
    //     </div>
    //     <div className='column'>
    //         <div className='card'>
    //             <img src='assets/image/200721121203_Trai-Tim-Quai-Vat_bLVJC.jpg'/>
    //             <h3>Trái tim quái vật</h3>
    //             <p className='title'>horrified</p>
    //             <p><button>Detail</button></p>
    //         </div>
    //     </div>
    //     <div className='column'>
    //         <div className='card'>
    //             <img src='assets/image/doraemon-movies-download-3-9a6b.jpg'/>
    //             <h3>Doraemon movie</h3>
    //             <p className='title'>anime</p>
    //             <p><button>Detail</button></p>
    //         </div>
    //     </div>
    //     <div className='column'>
    //         <div className='card'>
    //             <img src='assets/image/a866af6dc4747a142c1f61a5958691b0.jpg'/>
    //             <h3>Zootopia</h3>
    //             <p className='title'>Cartoon</p>
    //             <p><button>Detail</button></p>
    //         </div>
    //     </div>
    //     <div className='column'>
    //         <div className='card'>
    //             <img src='assets/image/hai-phuong-2019-orig-poster.jpg'/>
    //             <h3>Hai Phuong</h3>
    //             <p className='title'>Action</p>
    //             <p><button>Detail</button></p>
    //         </div>
    //     </div>
    //     <div className='column'>
    //         <div className='card'>
    //             <img src='assets/image/nang-3---poster-khong-logo_1582692152072.jpg'/>
    //             <h3>Nắng 3</h3>
    //             <p className='title'>humorous</p>
    //             <p><button>Detail</button></p>
    //         </div>
    //     </div>
    // </div>
    //     )
    // }

