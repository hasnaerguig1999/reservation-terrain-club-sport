import React from 'react';
import '../addterrainwithinfo.css';
import { BsFillPlusSquareFill } from "react-icons/bs";
import Sidbar from '../sidbar/sidbar.component';


export default function Addterrainwithinfo() {
  return (
    <div>
      <Sidbar/>
      <div className="frameo-8">
        <h1 className="texto">Ajouter un terrain</h1>
        <div className="container-md">
        <div className="overlapo-groupmo6">
          <div className="firstdv">
            <div className="firstlb">
              <label className="labelo1">Nom de Terrain </label>
              </div>
              <div className="firstinp">
              <input type="text" className="inputo1" placeholder="Terrain" />
                </div>
            </div>
            <div className="seconddv">
              <div className="secondlb">
                <label className="labelo2">Dimensions:</label>
                </div>
                <div className="secondinp">
                <input type="text" className="inputo2" placeholder="52,3" />
                </div>
                <div className="secondicon">
                  <BsFillPlusSquareFill className='firsticono' />
                  </div>
                </div>
                <div className="thirddv">
                  {/* <div className="thirdlb"> 
                    <label className="labelo3">Prix:</label>
                    </div> */}
                    <div className="thirdinp">
                    <input type="text" className="inputo3" placeholder="34,5" />
                    </div>
                    <div className="thirdicon">
                      <BsFillPlusSquareFill className='secondicono' />
                      </div>
                      </div>
                      <div className='container'>
                      <div className="fourthdv">
                        <div className="fourthlb">
                          <label className="labelo4">Activitées:</label>
                          </div>
                          <select className="fourthinp">
                          <option type="text" className="inputo4" >Activitées:</option>
                          </select>
                          </div>
                          </div>
                          <div className="container">
                          <div className="fifthdv">
                            <div className="fifthlb">
                              <label className="labelo5">Type de terrain:</label>
                              </div>
                              </div>
                              <div className="fifthdvi">
                              <select className="fifthinp">
                              <option type="text" className="inputo5" >Type</option>
                              </select>
                              
                              </div>
                            </div>
                            <div className="container" id='conto'>
                            <div className="sixthdv">
                              <div className="sixthlb">
                                <label className="labelo6">Capacité maximum/Joueurs:</label>
                                </div>
                                <div className="sixthinp">
                                <input type="text" className="inputo6" placeholder="34,5" />
                                <div className='divicn'>
                                <BsFillPlusSquareFill className='sixicono' />
                                </div>
                                </div>
                                </div>
                                </div>
                           

        
          </div>
          <div className="container" id='conto'>
                                <div className="seventhdv">
                                  <div className="seventhlb">
                                    <label className="labelo7">Prix par heur/person:</label>
                                    </div>
                                    <div className="seventhinp">
                                    <input type="text" className="inputo7" placeholder="200 DH" />
                                    <div className='divicn'>
                                    <BsFillPlusSquareFill className='sevenicono' />
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <center>
                                    <div className="container" id='conto'>
                                      
                                <div className="eighthdv">
                                  <div className="eighthlb">
                                    <button className="btno1">Annuler</button>
                                    </div>
                                    <div className="eighthinp">
                                    <button className="btno2">Valider</button>
                                    </div>
                                    </div>
                                    
                                    </div>
                                    </center>
                                    
          </div>
          </div>
        </div>
  );
}