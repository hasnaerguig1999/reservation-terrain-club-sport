import React from 'react';
import '../addterrain.css';
import Sidbar from '../sidbar/sidbar.component';
import { RiEdit2Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
export default function Addterrain() {
  return(
    <div>
    <Sidbar />
    <div className='framem-7'>
    <h1 className='textm'>Ajouter un terrain</h1>
    <div className='overlapm-groupmm6'>
      <div className='rectanglef-375'>
        
        <label className='Nom-du-terrain'>Nom du terrain</label><br></br>
        <input className='Nom-du-terrainf' placeholder='Terrain' ></input>
        </div>
          <div className='labf'>
        <label className='identifiant-du-terrain'>identifiant du terrain</label>
        <div className='identifiaf'>
        <input className='identifiant-du-terrainf' placeholder='4' ></input>
          </div>
          </div>
          <div className='overlapf-groupf7'>
            </div>
            </div>
            <div className='actf'>
            <label className='acrivitef'>Activitée</label><br></br>
            <select className='acrivitef1'>
              <option >Activitées</option>
              <option value='minifoot'>minifoot</option>
              <option value='tennis'>Tennis</option>
              </select>
              </div>
              <div className='overlapf-groupf8'>
                <div className='rectanglef-376'>
                  <label className='Capaci-maxf'>Capacité maximum</label><br></br>
                  <input className='Capacinp' placeholder='0' ></input>
                  </div>
                  </div>
                  <div className='overlapf-groupf9'>
                    <label className='joueursf'>Joueurs</label>
                    </div>
                    <div className='overlapf-groupf10'>
                        <button className='btnf'>Valider</button>
                        </div>
                        <div className='overlapf-groupf11'>
                          <a href='#' className='btnf1'>Annuler</a>
                          </div>

    
    </div>
    </div>

    );
    }
