import React from 'react';
import '../support.css';
import Sidbar from '../sidbar/sidbar.component';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';








export default function Support() {
  return (
    <div>
    <Sidbar />
    <div className='framej-8'></div>
    <div className='overlapj-groupj'>
    <h1 className='textpp-2 '>Support</h1>
    <div className='framepp-63'>

      </div>
      <label className='textpp'>Nom *</label>
      <input className='inputpp' type='text' placeholder='Nom' />
      <label className='textpp-emaill'>Email *</label>
      <input className='inputpp-emailpp' type='email' placeholder='nom@domaine.com' />
      <textarea className='overlapgpp-groupgpp-1' placeholder='Message...' />
      <button className='envoyerpp'>Envoyer</button>
      <button className='ovrirteck'>Ouvrir un Ticket</button>
      <div className='framepp-76'></div>
      <div className='textpp-3 inter-medium-bold-20px'>Information d'entreprise</div>
      <div className='textpp-4 inter-regular-bold-35px'>Entreprise x</div>
      <div className='framepp-77'>
        <span className='arobaz'> <img className='arb' src='aroba.png' /></span><span>  </span> <span className='katba inter-regular-bold-24px'>client.test@gmail.com</span>
      </div>
      <div className='groupp-39629'>
        <span className='phn'><img className='calls' src='calls.png' /></span> <span className='num'>(467)-555-4782</span>
        </div>
        <div className='groupp-39630'>
          <span className='insta'><img className='instag' src='insta.png' /></span> <span className='twit'><img className='twitt' src='twit.png' /></span>
        </div>
      </div>
    </div>
  );
}