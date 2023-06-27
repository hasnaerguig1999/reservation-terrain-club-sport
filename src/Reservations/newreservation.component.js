import React from 'react';
import '../newreservation.css';
import Sidbar from '../sidbar/sidbar.component';
import Fullcalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction";
import { Eventcalendar } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import Even from './even.component';






export default function Newreservation() {
  return (
    <div>
    <Sidbar />
  
    <div className="framen-30 framen">
      
    <div className="overlapn-groupn2">
      {/* <div className="flexn-coln"> */}
        <div className="activitesn-dropmenu">
          <div className="itemn-1">
            <select className="containern">
              <option className="optionn inter-medium-charade-14px">Activitées</option>
              </select>
            </div>
          </div>
          {/* <div className="numbern">2</div> */}
      {/* </div> */}
      <div className="payen-dropmenun">
        <div className="itemn-1-1">
          <select className="containern">
            <option className="optionn inter-medium-charade-14px">Payées et le reste</option>
            </select>
        </div>
        </div>
        
        <div className="one">
          {/* kjdfjkdrkjf */}
          {/* <Fullcalendar
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                initialView={"dayGridMonth"}
                                headerToolbar={{
                                    start: "today prev next",
                                    center: "title",
                                    end: "dayGridMonth,timeGridWeek,timeGridDay"
                                }}
                                businessHours={{
                                    daysOfWeek: [1, 2, 3, 4, 5, 6,7],
                                    startTime: '07:00',
                                    endTime: '23:00',
                                }}
                                slotLabelFormat={{
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false
                                }}
                                hiddenDays={[1, 7]}
                                slotMinTime="07:00:00"
                                slotMaxTime="24:00:00"
                                height={'80vh'}
                                events={[
                                    {
                                      title: 'Mini Foot',
                                      start: '2023-06-02 07:00',
                                    }
                                  ]}

                            /> */}

                        
                       <div className='framek-83'>
                       <Even />
                        </div>  
                       
          </div>


        <div className='container'>
        <div className='framen-29 framen'>
          <div className="overlapn-groupn1">
            <div className="rectanglen-401 rectanglen"></div>
            <div className='framen-34 framen'>
              <h1 className="textn lora-medium-abbey-24px">Informations Personnelles</h1>
              <div className="framen-32 framen">
                {/* <div className="overlap-groupn"> */}
                  <input className="nomn inter-medium-bombay-16px"  placeholder='Nom'></input>
                </div>
                <div className="framen-31 framen">
                  <input className="place inter-medium-bombay-16px" placeholder='Telephone'></input>
                  </div>
                  <div className="framen-30-1">
                    <input className='emailn inter-medium-bombay-16px' placeholder='Email'></input>
                    </div>
                  </div>
                  <div className="framen-33 framen">
                    <div className="textn-1 lora-medium-abbey-24px">
                    
                      sport Details
                      </div>
                      <div className='overlapn-groupn'>
                        <input className="joueurn" placeholder='Joueur'></input>
                        </div>
                        <div className="paiementn">
                          <input type="radio" className="ellipsen-86"  name="paiement" value="Ligne" checked></input>
                          <label className="paiementn-en-ligne" for="contactChoice1">paiement en Ligne</label>
                          </div>
                          <div className="paiementn-1">
                            <input type="radio" className="ellipsen-86-1" name="paiement" value="espece"></input>
                            <label className="paiementn-espece" for="contactChoice2" >espece</label>
                          </div>
                    </div>
            {/* </div> */}
            <div className="primary-small">
              <div className="defaultn">Procéder</div>
              </div>

            </div>
        </div>
      </div>
      </div>
      </div>
     
    </div>

    );
    }
