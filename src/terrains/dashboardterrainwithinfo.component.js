import React from 'react';
import '../dashboardterrainwithinfo.css';
import Sidbar from '../sidbar/sidbar.component';
import { RiEdit2Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
export default function Dashboardterrainwithinfo() {
  return(
    <div>
    <Sidbar />
    <div className='framex-7'>
    <div className='flexx-rowx flex'>
      <h1 className='textx'>Terrains</h1>
      <div className='ajoux'>
      <button className='groupx-36'  >AJOUTER UN TERRAIN</button>
      </div>
      </div>
      <div className='overlapx-groupx'>
        <div className='flexx-colx flex'>
          <div className='navbarx'>
            <div className='navbarx-linkx-nomx-de-terrainx  inter-medium-bombay-16-3px'>Nom de terrain </div>
            <div  className='navbarx-linkx-typex-de-terrainsx inter-medium-bombay-16-3px'>Type de Terrains </div>
            <div className='navbarx-linkx-activitex inter-medium-bombay-16-3px'>Activitée</div>
            <div className='navbarx-linkx-dimensionsx navbarx-linkx inter-medium-bombay-16-3px'>Dimensions</div>
            <div className='navbarx-linkx-capacitx-maxx inter-medium-bombay-16-3px'>Capacité max</div>
            <div className='navbarx-linkx-prixx-par-heure-personne inter-medium-bombay-16-3px'><span className='spanx0 inter-medium-bombay-16-3px'>Prix Par Heur<br></br></span><span className='spanx1'>(par personne)</span></div>
          </div>
          {/* <div className='navbarx-1 navbarx-3'>
            <div className='navbarx-linkx-terrainx-1 inter-semi-bold-pale-sky-19-6px'>Terrain 1</div>
            <div className='navbarx-linkx-goudronx navbarx-linkx inter-semi-bold-pale-sky-19-6px'>Goudron</div>
            <div className='navbarx-linkx-paddlex navbarx-linkx inter-semi-bold-pale-sky-19-6px'>paddle</div>
            <div className='navbarx-linkx-textx inter-semi-bold-pale-sky-19-6px'>10*20</div>
            <div className='navbarx-linkx-numberx navbarx-linkx inter-semi-bold-pale-sky-19-6px'>4</div>
            <div className='navbarx-linkx-numberx-1 navbarx-linkx-numberx-4 inter-semi-bold-pale-sky-19-6px'>350</div>
            <div className='groupx-39644'>
              <div className='groupx-39645'>
                <img className='hiconx-outlinex-editx-3'  />
                </div>
              </div>
            </div> */}
          {/* <div className='navbarx-2 navbarx-3'>
            <div className='terrainx inter-semi-bold-pale-sky-19-6px'>Terrain 2</div>
            <div className='navbarx-linkx-herbe navbarx-linkx inter-semi-bold-pale-sky-19-6px'>Herbe</div>
            <div className='navbarx-linkx-mini-foot inter-semi-bold-pale-sky-19-6px'>Mini foot</div>
            <div className='navbarx-linkx-textx inter-semi-bold-pale-sky-19-6px'>26*10</div>
            <div className='navbarx-linkx-numberx-2 navbarx-linkx-numberx-4 inter-semi-bold-pale-sky-19-6px'>10</div>
            <div className='navbarx-linkx-numberx-3 navbarx-linkx-numberx-4 inter-semi-bold-pale-sky-19-6px'>400</div>
            <div className='groupx-3964'>
              <img className='hiconx-outlinex-editx'  />
              </div>
            </div> */}
          <div className='terrainx-3'>
            <div className='terrainx inter-semi-bold-pale-sky-19-6px'>Terrain 3</div>
            <div className='gravier inter-semi-bold-pale-sky-19-6px'>Gravier</div>
            <div className='tennisx inter-semi-bold-pale-sky-19-6px'>Tennis</div>
            <div className='textx-3 inter-semi-bold-pale-sky-19-6px'>8,34*20</div>
            <div className='numberx inter-semi-bold-pale-sky-19-6px'>4</div>
            <div className='numberx-1 inter-semi-bold-pale-sky-19-6px'>600</div>
            <div className='groupx-3964'>
              <RiEdit2Line className='hiconx-outlinex-editx'  />
              </div>



            </div>
        </div>
        <div className='overlapx-groupx1'>
          <AiOutlineDelete className='hiconx-outlinex-deletex-1'  />
          </div>
        </div>
      </div>
      {/* <div className='rectanglex-373'></div> */}
      <img className='hiconx-outlinex-delete-1-2 hiconx-outlinex-deletex-1-3'  />
    </div>
  );
}