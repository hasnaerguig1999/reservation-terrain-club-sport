import React from 'react';
import '../dashboardterain.css';
import Sidbar from '../sidbar/sidbar.component';
import { RiEdit2Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default function Dashboardterrain() {
  const handleClickCustom = (indexToRemove) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Es-tu sûr?</h1>
            <p className='pf'>Êtes-vous sûr de vouloir le supprimer  ?</p>
            <button onClick={onClose} id='no'>Non</button>
            <button id='yes'
              onClick={() => {
                // removeRecord(indexToRemove)
                onClose();
              }}
            >
              Oui
            </button>
          </div>
        );
      }
    });
  };
  return(
    
    <div>
    <Sidbar />
    <div className='framem-7'>
    <h1 className='textm'>Terrains</h1>
    <div className='overlapm-groupm6'>
      <div className='terrainm-containerm'>
        <div className='nomm-de-terrainm inter-medium-bombay-16-3px'>Nom de terrain </div>
        <div className='terrainm-1 inter-semi-bold-pale-sky-19-6px'>Terrain 1</div>
        <div className='terrainm inter-semi-bold-pale-sky-19-6px'>Terrain 2</div>
        <div className='terrainm inter-semi-bold-pale-sky-19-6px'>Terrain 3</div>
        </div>
        <div className='flexm-colm'>
        <div className='activitem inter-medium-bombay-16-3px'>Activitée</div>
        <div className='paddlem inter-semi-bold-pale-sky-19-6px'>paddle</div>
        <div className='flexm-colm-item inter-semi-bold-pale-sky-19-6px'>Mini foot</div>
        <div className='flexm-colm-item inter-semi-bold-pale-sky-19-6px'>Tennis</div>
          </div>
          <div className='flexm-colm-1'>
          <div className='capacitm-max inter-medium-bombay-16-3px'>Capacité max</div>
          <div className='numberm-1 numberm-2 inter-semi-bold-pale-sky-19-6px'>4</div>
          <div className='numberm numberm-2 inter-semi-bold-pale-sky-19-6px'>10</div>
          <div className='numberm numberm-2 inter-semi-bold-pale-sky-19-6px'>4</div>
          </div>
          <div className='groupm-65'>
            <div className='overlapm-groupm-containerm'>
              <button type='submit'className='overlapm-groupm2'>
                <RiEdit2Line className='hiconm-outlinem' id='over' />
              </button>
              <button type='submit'className='overlapm-groupm'>
              <RiEdit2Line className='hiconm-outlinem-1' id='over' />
              </button>
              <button type='submit' className='overlapm-groupm'>
                <RiEdit2Line className='hiconm-outlinem-1' id='over'/>
                </button>
            </div>
            <div className='overlapm-groupm-containerm-1'>
              <button onClick={handleClickCustom} className='overlapm-groupm-2'>
                <AiOutlineDelete className='hiconm-outlinem' id="del"  />
                </button>
                <button type='submit'className='overlapm-groupm-1'> 
                  <AiOutlineDelete className='hiconm-outlinem-1' id="del"  />
                  </button>
                  <button type='submit' className='overlapm-groupm-1'>
                    <AiOutlineDelete className='hiconm-outlinem-1' id="del" />
                    </button>
              </div>
      </div>  
    </div>
    <button className='groupm-36' >Ajouter un terrain </button>
  
    </div>
    </div>

    );
    }
