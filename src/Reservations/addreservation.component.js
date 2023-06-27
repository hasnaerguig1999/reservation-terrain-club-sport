import React from 'react';
import '../addreservation.css';
import Sidbar from '../sidbar/sidbar.component';
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import {FiSearch} from "react-icons/fi";
import {CgAddR} from "react-icons/cg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { render } from '@testing-library/react';
const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date);
  };
  return(
     <div className='calend'>
    <Calendar onChange={onChange} value={date}  className='calend'/>
    </div>
    );
};
// render(<ReactCalendar />);

export default function Addreservation() {
  return (
    <div>
    <Sidbar />
     <div className="framet-4">
      <div className="groupt-containert">
        <div className="groupt-52">
          <div className="textt-containert">
             <div className="textt inter-semi-bold-bombay-15px">07:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>08:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>09:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>10:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>11:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>12:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>13:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>14:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>15:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>16:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>17:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>18:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>19:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>20:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>21:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>22:00</div>
             <div className='textt inter-semi-bold-bombay-15px'>23:00</div>
            </div>
                <div className="flext-colt">
                  <div className="flext-rowt">
                    <div className="terraint-change">
                      <div className="overlapt-groupt">
                        <div className='groupt-48'>
                          <MdOutlineNavigateBefore className='skip' />
                          <MdOutlineNavigateNext className="next1" />
                          {/* <img className="hicon-outlinet" src="img/terrain.png" /> */}
                          {/* <img className="hicon-outlinet-left-2" src="img/terrain.png" /> */}
                        </div>
                         <h1 className="textt-1">Terrain 1</h1>
                      </div>
                    </div>
                    <button className="groupt-36"  id="ajt" >Ajouter un terrain</button>
                    </div>
                    <div className="linet-containert">
                    {/* <hr className="linet-2" src="line22.png" ></hr> */}
                    <img className="linet-2445"src="line22.png"  />
                    <img className="linet-278" src="line22.png"  />
                      <img className="linet-23" src="line22.png" />
                      <img className="linet-24" src="line22.png" />
                      <img className="linet-25" src="line22.png" />
                      <img className="linet-26" src="line22.png" />
                      <img className="linet-27" src="line22.png" />
                      <img className="linet-28" src="line22.png" />
                      <img className="linet-29" src="line22.png" />
                      <img className="linet-30" src="line22.png" />
                      <img className="linet-31" src="line22.png" />
                      <img className="linet-32" src="line22.png" />
                      <img className="linet-33" src="line22.png" />
                      <img className="linet-34" src="line22.png" /> 
                      <img className="linet-35" src="line22.png" />
                      {/* <img className="linet-36" src="line22.png" /> */}
                      {/* <img className="linet-37" src="line22.png" /> */}
                      </div>
                  </div>
               
          </div>
          <div className='groupt-54'>
            <img className='linet-37-1' src='img/line-37-1.png' />
            <div className='groupt-53-1'>
              {/* <div className='crneau-rserv crneau'>Créneau résérvé</div>
              <div className='textt-18'>14:00- 23:00</div> */}
              </div>
            </div>
            <div className='groupt-containert-1 groupt-containert-3'>
              {/* <div className='groupt-56'> */}
                <img className='linet-37' src='img/line-38.png' />
                {/* </div> */}
                <div className='groupt-53'>
                  {/* <div className='crneau-disponible crneau'>Créneau disponible</div>
                  <div className='textt-19'>11:00- 14:00</div> */}
                  </div>
              </div>
              <div className='groupt-containert-2 groupt-containert-3'>
                {/* <div className='groupt-56-1'> */}
                  <img className='linet-37' src='img/line-38.png' />
                  </div>
                  <div className='groupt-53'>
                    {/* <div className='joueurs'>Joueurs</div>
                    <div className='textt-20'>08:00- 11:00</div> */}
                    </div>

                {/* </div> */}

        </div>
         <div className='groupt-58'>
          <div  className='groupt-20'  >
          <div className='buthid'>
           <button className='fisarch'><FiSearch />
           </button> 
          
           <input className='inputt' placeholder='Rechercher joueur'></input>
           </div>
          </div>
          <div className='calenda'>
          <ReactCalendar />
            <div className='flext-rowt-1'>
              
              
              {/* <div className='name inter-medium-abbey-16px'>jan 2023</div> */}
              <div className='groupt-48-1'>
              </div>
              </div>
              {/* <div className='flext-rowt-2'>
                <div className='flext-rowt-itemt inter-semi-bold-bombay-9-1px'>Lun</div>
                <div className='flext-rowt-itemt inter-semi-bold-bombay-9-1px'>Mar</div>
                <div className='flext-rowt-itemt inter-semi-bold-bombay-9-1px'>Mer</div>
                <div className='flext-rowt-itemt inter-semi-bold-bombay-9-1px'>Jeu</div>
                <div className='flext-rowt-itemt inter-semi-bold-bombay-9-1px'>Ven</div>
                <div className='flext-rowt-itemt inter-semi-bold-bombay-9-1px'>Sam</div>
                <div className='flext-rowt-itemt inter-semi-bold-bombay-9-1px'>Dim</div>
              </div> */}
              {/* <div className='numbert-containert'>
                <div className='numbert inter-semi-bold-bombay-9-1px'>26</div>
                <div className='numbert-1 inter-semi-bold-bombay-9-1px'>27</div>
                <div className='numbert inter-semi-bold-bombay-9-1px'>28</div>
                <div className='numbert-1 inter-semi-bold-bombay-9-1px'>29</div>
                <div className='numbert inter-semi-bold-bombay-9-1px'>30</div>
                <div className='numbert-1 inter-semi-bold-bombay-9-1px'>31</div>
                <div className='numbert inter-semi-bold-pale-sky-9-1px'>1</div>
                </div> */}
                {/* <div className='numbert-containert'>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>2</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>3</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>4</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>5</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>6</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>7</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>8</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>9</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>10</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>11</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>12</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>13</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>14</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>15</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>16</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>17</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>18</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>19</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>20</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>21</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>22</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>23</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>24</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>25</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>26</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>27</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>28</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>29</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>30</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>31</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>1</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>2</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>3</div>
                  <div className='numbert-1 inter-semi-bold-pale-sky-9-1px'>4</div>
                  <div className='numbert inter-semi-bold-pale-sky-9-1px'>5</div>
                  
                </div> */}

            </div>
             <div className='overlapt-groupt2'>
              <div className='flext-rowt-3'>
                <div className='actions inter-medium-abbey-16px'>Actions</div>
                {/* <img className='hicon-outlinet-add' src="hicon-outline-add.png" /> */}
                <CgAddR  className='hicon-outlinet-add'/>
              </div>
              <div className='groupt-51'>
                <div className='ellipset-containert'>
                  <div className='ellipset-8'></div>
                  <div className='ellipset-9'></div>
                  <div className='ellipset-10'></div>
                  </div>
                  <div className='flext-colt-1'>
                    <div className='flext-colt-itemt inter-light-abbey-13-2px'>Créneau disponible</div>
                    <div className='flext-colt-itemt inter-light-abbey-13-2px'>Créneau réservé</div>
                    <div className='flext-colt-itemt inter-light-abbey-13-2px'>Joueurs</div>
                  </div>
                </div>
             </div>
          </div>
      </div>
    </div>

    );
    }
