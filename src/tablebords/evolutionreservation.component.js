import React from 'react';
import '../evolutionreservation.css';
import Sidbar from '../sidbar/sidbar.component';







export default function Evolutionreservation() {
  return (
    <div>
    <Sidbar />
    <div className="flexl-rowl">
    <div className="framej-8">
      <h1 className="textj">Evolution des réservations</h1>
      <div className="overlapj-groupj">
        <button className="rectanglej-342">
          
          <a className='addressj'>30 derniers jours</a>
          </button>
          <img className='vectorj-1'  src='Vectorlee.png'/>
        </div>
        <img className='iconsj-mediumj-filterj'  src='Filter.png'/>
        <select className="dropbarj">
          {/* <select className="textj-1"> */}
            {/* <option className='textj-1'>..............</option> */}
            <option className='textj-1'>default</option>
            </select>
          {/* <img className="iconsj-mediumj-chevronj-2"  src='Vectorj.png'/> */}
          </div>
          <div className="chartj-de-evolutionj"></div>

      </div>
      </div>

    // </div>
  );
}