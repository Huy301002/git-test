import { useParams } from 'react-router-dom'
import { Films } from '../shared/listOfFilms'
import ModalCase from "./ModalCase";
import { useState } from "react";
export default function Detail() {
    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const Film = Films.find(obj => {
        return obj.id == userName.id;
    });
   
//    let cost = Film.cost.toLocaleString();
   return(
    <div className='container'>
     <div className='product-card'>
    	<div className='badge'>{Film.name}</div>
    	<div className='product-tumb'>
    		<img src={`../${Film.img}`} alt=''/>
    	</div>
        <div className="background-info-cost">
                    <div className='product-details'>
                        <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red" id="video">
                            video 
                        </a>
                        {isOpen && <ModalCase setIsOpen={setIsOpen} Film={Film} />}
                        <p id="abc">{Film.info}</p>
                        <div className='product-bottom-details'></div>
                    </div>
                </div>
  </div>
</div>
   )
}
