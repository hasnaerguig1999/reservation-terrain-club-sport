import React from 'react';
import '../marketingcomapgne.css';
import Sidbar from '../sidbar/sidbar.component';
import { BsPlusLg} from "react-icons/bs"
import { AiOutlineMore } from "react-icons/ai"







export default function Marketingcomapgne() {
  return (
    <div>
    <Sidbar />
    <div className='framej-8'></div>
    <div className='rectangleh-410'>
      <div className='fmasque'>
      <h1 className='placeh'>Compagne</h1>
      </div>
      <div className='kolj'>
      <div className='rectangleh-402'></div>
      </div>
      <div className='frameh-27 frameh'>
        <button  className='plush' ><BsPlusLg className='pluso' /></button>
        <div className='crerh-compagneh'>créer campagne</div>
         {/* this div down */}
         </div>
        <div className='filterh-par'>Filter par :</div>
        <select className='dropbarh'>
          <option className='texth-4 texth-5'>Default</option>
          <img className='iconsh-mediumh-chevronh-2' />
        </select>
        <div className='navbarh'>
          <div className='navbarh-linkh-texth inter-medium-abbey-18px'>Nom Campagne</div>
          <div className='navbarh-linkh-texth inter-medium-abbey-18px' id='sth'>Statut</div>
          <div className='navbarh-linkh-texth inter-medium-abbey-18px' id='eth'>Chennel</div>
          <div className='navbarh-linkh-texth inter-medium-abbey-18px' id='dth'>Date</div>
          </div>
          <div className='frameh-49 frameh'>
          <input type="checkbox" className='toggleh-checkmarkh-1' id="scales" name="text" checked></input>
            {/* <img className='toggleh-checkmarkh-1' /> */}
            <div className='texth inter-normal-abbey-16px'>Text</div>
            <div className='marketingh'>
              <div className='abonnh'></div>
              <div className='texth-1 texth-5 inter-normal-abbey-16px'>Active</div>
            </div>
            <div className='texth-2 texth-5 inter-normal-abbey-16px'>Email</div>
            <div className='texth-3 text-5 inter-normal-abbey-16px'>21/2/2023</div>
            <button className='moreh'><AiOutlineMore /></button>
            {/* <img className='moreh-verticalh'/> */}
          </div>
          <img className='iconsh-mediumh-filterh' src='Filter.png' />
      


    </div>
    </div>
  );
}