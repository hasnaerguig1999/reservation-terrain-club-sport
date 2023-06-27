import React from 'react';
import '../clientdetail.css';
import Sidbar from '../sidbar/sidbar.component';
import { BiSearch } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { BiFemaleSign } from "react-icons/bi"
import { AiOutlineEye} from "react-icons/ai"
// import { RiEdit2Line } from "react-icons/ri";
// import { AiOutlineDelete } from "react-icons/ai";
export default function Clientdetail() {
  return(
  <div>
    <Sidbar />
    <div className="rectanglei-353">
      </div>
      <div className="ellipsei-12"></div>
      <img className="avatari" src="avatari.png" />
      <h1 className='titlei'>Kadi Ghita</h1>
      <div className="madamei inter-semi-bold-abbey-23px">Madame</div>
      <div className="female-symbol-svgrepoi-com-1" ><BiFemaleSign className='ici' /></div>
      <div className='groupi-93'>
        <div className='groupi-82'>
          <div className='emaili inter-bold-abbey-23px'>Email :</div>
          <div className='client1gmailcomi inter-semi-bold-abbey-23px'>Client1@gmail.com</div>

          </div>
          <div className='groupi-83'>
            <div className='tlphonei inter-bold-abbey-23px'>Téléphone :</div>
            <div className='phonei inter-semi-bold-abbey-23px'>0612345678</div>
            </div>
            <div className='groupi-84'>
              <div className='datei-de-naissancei inter-bold-abbey-23px'>Date de naissance :</div>
              <div className='datei inter-semi-bold-abbey-23px'>01/01/1990</div>
              </div>
              <div className='groupi-85'>
                <div className='datei-dinscriptioni inter-bold-abbey-23px'>Date d'inscription :</div>
                <div className='datei-1 datei-2 inter-semi-bold-abbey-23px'>01/01/2021</div>
                </div>
      </div>
          <button className="editi" ><FiEdit /></button>
          <div className="overlapi-groupi1">
            <div className='abonnementi inter-bold-abbey-23px'>Abonnement :</div>
            <div className='groupi-81'>
              <div className='abonni'></div>
              <div className='abonni-1 inter-semi-bold-abbey-23px'>Abonné</div>
              </div>
         
          <div className="rservationsi inter-bold-abbey-23px">Réservations</div>
          <div className='forgri'>
          <div className="flexi-rowi">
            <div className="overlapi-groupi">
              <div className='numberi'>4</div>
            </div>
            <div className="framei">
              <button className='groupi-94' >détails <AiOutlineEye />
              
              </button>
              </div>
          </div>
    </div>
    </div>
    </div>
  );
}