import React from 'react';
import '../occupationterrain.css';
import Sidbar from '../sidbar/sidbar.component';
import { RiErrorWarningLine} from "react-icons/ri";
import { FcNext } from "react-icons/fc";
import { IoIosArrowBack } from "react-icons/io";







export default function Occupationterrain() {
  return (
    <div>
    <Sidbar />
    <div className="framel-8">
      <div className="flexl-rowl">
        
        <div className="textl-1 textl-4" id="tdl">Taux doccupation</div>
        <div className="terrainl-changel">
          <div className="overlapl-groupl-1">
            <div className="groupl-48">
              {/* <img className='hiconl-outlinel' /> */}
              <IoIosArrowBack  className='lightbluel'/>
              {/* <img className='hiconl-outlinel' /> */}
              <FcNext />

              </div>
              <h1 className="textl-2 textl-4">Terrain 1</h1>
            </div>
        </div>
        <div className="overlll">
         <select className="framel-79">
          <img className="vectorle-1"  src='Vectorle.png'/>
          <option className='adressl-3 adressl-4'>30 Derniers Jours</option>
          {/* <img className="arrowl-dropl-downl" src='Vectorle.png' /> */}
          </select>
          </div>
      </div>
      <img className='vectorl-2'  src='Vectorlee.png'/>
      <div className="overlapl-groupl2">
        <div className="overlapl-groupl4">
          <div className="overlapl-groupl3">
            <img className="linel-136" />
            <div className="groupl-39577">
              <div className="groupl-39569">
                <div className="ellipsel-containerl">
                  <img className='ellipsel-208'  src='ellipsel-208.png'/>
                  <img className='ellipsel-209' src='ellipsel-209.png' />
                  </div>
                  <div className="pricel">Synthése</div>
                  </div>
                  <img className="linel-137" />
            </div>
            <img className="linel-137-1" />
            </div>
            <div className="pricel-1">Détaille</div>
          </div>
          <div className="likebook">
            <img className="boook" src='mdi.png' />
            </div>
          <div className="flexl-rowl-2">
            <div className="framel-4">
              <div className="groupl-39596">
                <div className="infol-containerl">
                  <div className="elementsl-infol">
                    <img className='colorl' id='redell' src='redellpse.png' />
                    <div className="textl dmsans-normal-black-14px">Club</div>
                  </div>
                  <div className="iconsl-mediuml-infol iconsl-mediuml">
                    <div className='overlapl-groupl'>
                    <RiErrorWarningLine id='warninginclu' />
                      {/* <img className='vectorl' /> */}
                      {/* <img className='linel-1' /> */}
                    </div>
                    </div>
                  </div>
                </div>
                <div className="groupl-3959">
                  <div className="groupl">
                    <img className="elementsl-linel-gorizontall" />
                    </div>
                    <div className="percentl inter-medium-bombay-22px">0.0%</div>
                  </div>
              </div>
              <div className="groupl-3960">
                <div className="adressl inter-medium-bombay-16px">0 Minutes</div>
                <div className="adressl-1 adressl-4 inter-medium-bombay-16px">0 hours</div>
                <div className="adressl-2 adressl-4 inter-medium-bombay-16px">0 jours</div>
                </div>
            </div>
            <div className="flexl-rowl">
              <div className="framel-4">
                <div className="groupl-39595">
                  <div className="elementsl-infol elementsl-infol-3">
                    <img className='colorl' src='blueellpe.png' />
                    <div className='textl dmsans-normal-black-14px'>Utilisateurs</div>
                  </div>
                  <div className="iconsl-mediuml-infol-1 iconsl-mediuml-infol-3">
                    <div className='overlapl-groupl'>
                    <RiErrorWarningLine id='warninginuti' />
                      {/* <img className='vectorl' /> */}
                      {/* <img className='linel-1' /> */}
                      </div>
                    </div>
                  </div>
                  <div className="groupl-3959">
                    <div className="groupl-1">
                      <img className="elementsl-linel-gorizontall-1" />
                      </div>
                      <div className="percentl inter-medium-bombay-22px">0.0%</div>
                    </div>
                </div>
                <div className="groupl-3960">
                  <div className="adressl inter-medium-bombay-16px">0 Minutes</div>
                  <div className="adressl-1 adressl-4 inter-medium-bombay-16px">0 hours</div>
                  <div className="adressl-2 adressl-4 inter-medium-bombay-16px">0 jours</div>
                  </div>
              </div>
              <div className="flexl-rowl">
                <div className="framel-4">
                  <div className="groupl-39594">
                    <div className="elementsl-infol-2 elementsl-infol-3">
                      <div id="incp" >
                      <img className='colorli' src='ellipgreen.png'/>
                      </div> 
                      <div className='textl dmsans-normal-black-14px' id='ino'>Inoccupé</div>
                      </div>
                      <div className="iconsl-mediuml-infol-2 iconsl-mediuml-infol-3">
                        <div className='overlapl-groupl'>
                          {/* <img className='vectorl' /> */}
                          <RiErrorWarningLine id='warningincop' />
                          {/* <img className='linel-1' /> */}
                          </div>
                        </div>
                    </div>
                    <div className="groupl-3959">
                      <div className="groupl-2">
                        <img className="elementsl-linel-gorizontall-2" />

                        </div>
                        <div className="percentl inter-medium-bombay-22px">0.0%</div>
                      </div>
                  </div>
                  <div className="groupl-3960">
                    <div className="adressl inter-medium-bombay-16px">0 Minutes</div>
                    <div className="adressl-1 adressl-4 inter-medium-bombay-16px">0 hours</div>
                    <div className="adressl-2 adressl-4 inter-medium-bombay-16px">0 jours</div>
                    </div>
                </div>
                <div className="groupl-39604">
                  <div className="textl-3 textl-4">Taux d'occupation :
                    </div>
                    <div className='flexl-coll-1'>
                      <img className='linel-138' />
                      <div className="flexl-roxl-3">
                        <div className='perc'>
                        <div className="percentl inter-medium-bombay-22px">0.0%</div>
                        </div>
                        <div className='groupl-39603'>
                          <div className="adressl inter-medium-bombay-16px" id='mints'>0 Minutes</div>
                          <div className="adressl-1 adressl-4 inter-medium-bombay-16px" id='hrs'>0 hours</div>
                          <div className="adressl-2 adressl-4 inter-medium-bombay-16px" id='jrs'>0 jours</div>
                        </div>
                        </div>
                        <div className='linelll'>
                          <img className='imagline' src='Linl6138.png' />
                          {/* <hr className="solid" id='sl'></hr> */}
                        </div>
                    </div>
                  </div>
        </div>
        <img className='iconsl-mediuml-mapl iconsl-mediuml' />
      </div>
    </div>
  );
}