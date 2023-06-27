import React from 'react';
import '../reservationhistorique.css';
import Sidbar from '../sidbar/sidbar.component';







export default function Reservationhistorique() {
  return (
    <div>
    <Sidbar />
    <div className='framej-8'></div>
     <div className='framedd-4 framedd'>
      <div className="flexdd-rowdd">
        <div className='filtredd-par'>Filter par :</div>
        <div className='crneauxdd-histordd'>
          <select className='containerdd'>
            <option className='optionddc inter-medium-charade-14px'>Créneaux</option>
            {/* <img className='submenudd'/> */}
          </select>
        </div>
      </div>
      <div className='terrainsdde-histordd'>
        <div className='itemdde-1'>
          <select className='containerdde'>
            <option className='optiondde inter-medium-charade-14px'>Choiser un Terrain</option>
            {/* <img className='submenudd'/> */}
            </select>
        </div>
      </div>
      <div className='payedd-hostordd-dropmenudd'>
        <div className='itemdd-1-1'>
          <select className='containerddee'>
            <option className='optionddf inter-medium-charade-14px'>Payées et le reste</option>
            {/* <img className='submenudd' /> */}
            </select>
        </div>
      </div>
      <div className='groupdd-containerdd'>
        <div className='overlapdd-groupdd1'>
          <div className='rectangledd-418'></div>
          <div className='framedd-53 framedd'>
            <div className='ellipsedd-210'></div>
            <div className='titledd poppins-medium-black-25px'>Terrain 1</div>
          </div>
          <div className='framedd-54 framedd'>
            <div className='ellipsedd-210-1 ellipsedd-210-3'></div>
            <div className='overlapdd-groupdd'>
              <div className='terraindd-2 terraindd poppins-medium-black-25px'>Terrain 2</div>
              <div className='framedd-55 framedd'>
                <div className='ellipsedd-210-2 ellipsedd-210-3'></div>
                <div className='terraindd-3 terraindd poppins-medium-black-25px'>Terrain 3</div>
              </div>
            </div>
          </div>
          <div className='groupdd-20' ></div>
        </div>
      </div>
      <div className='flexdd-rowdd'>
        <div className='calendadd'></div>
        <div className='groupdd-39664'>
          <div className='groupdd-39635'>
            <div className='ellipsedd-213'></div>
            <div className='joueursdd poppins-normal-shark-16px'>Joueurs</div>
          </div>
          <div className='groupdd-3963'>
            <div className='ellipsedd-212'></div>
            <div className='crneaudd poppins-normal-shark-16px'>créneau Disponible</div>
          </div>
          <div className='groupdd-3963'>
            <div className='ellipsedd-211'></div>
            <div className='crneaudd poppins-normal-shark-16px'>créneau Anulé</div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}