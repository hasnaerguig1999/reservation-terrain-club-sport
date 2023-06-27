import React from 'react';
import '../clientdata.css';
import Sidbar from '../sidbar/sidbar.component';
import { BiSearch } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
// import { RiEdit2Line } from "react-icons/ri";
// import { AiOutlineDelete } from "react-icons/ai";
export default function Clientdata() {
  return(
  <div>
    <Sidbar />
    <div className="rectangled-353">

     
     <div className="jam3">
        <div  className="framed-19" >
        <input className="groupd-59" placeholder='Rechercher joueur' ></input>
        <button className="searchd" id="ss" ><BiSearch /></button>
        </div>
        </div>
        <div className='framed-20'>
          <div className='toggled-checkmarkd'>
            </div>
            
          
          <div className='nomd inter-semi-bold-abbey-20px'>Nom</div>
          <div className='prenomd inter-semi-bold-abbey-20px'>Prénom</div>
          <div className='placed inter-semi-bold-abbey-20px'>Telephone</div>
          <div className='framed-26'>
            <div className='emaild inter-semi-bold-abbey-20px'>Email</div>
          </div>
          <div className='framed-25'>
            <div className='agedinter inter-semi-bold-abbey-20px'>Age</div>
          </div>
          <div className='framed-24'>
            <div className='datedinscription inter-semi-bold-abbey-20px'>Date d'inscription</div>
            </div>
            <div className='framed-23'>
              <div className='statutd inter-semi-bold-abbey-20px'>Statut</div>
              </div>
              </div>
              <div className="framed-21">
                <input type='checkbox' className="toggled-checkmarkd" id='checd' ></input>
                <div className='kadi inter-semi-bold-abbey-20px-2'>Kadi</div>
                <div className='ghita inter-semi-bold-abbey-20px-2'>ghita</div>
                <div className='phones inter-semi-bold-abbey-20px-2'>0612345678</div>
                <div className='client1gmailcom inter-semi-bold-abbey-20px-2'>Client1@gmail.com</div>
                <div className='ww'>
                <div className='numberd-1 numberd-2'>18</div>
                </div>
                <div className='dated dates-1 inter-normal-abbey-20px-2'>12/10/2021</div>
                <div className='framed-22'>
                  <div className='abonnd-2'>
                    </div>
                    <div className='abonnd inter-semi-bold-abbey-20px-2'>Abonné</div>
                  </div>
                   </div>
               <div className='editd'>
                <button className="uniond" ><FiEdit /></button>
               </div>
               <div className="deled">
                  <button className="uniond-1" ><MdDelete /></button>
                  </div>
      </div>

  </div>
  

    );
    }

   