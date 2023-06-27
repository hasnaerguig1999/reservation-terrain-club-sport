import React from 'react';
import '../clientstatistique.css';
import Sidbar from '../sidbar/sidbar.component';
import { BiSearch } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { BiFemaleSign } from "react-icons/bi"
import { AiOutlineEye} from "react-icons/ai"
// import { RiEdit2Line } from "react-icons/ri";
// import { AiOutlineDelete } from "react-icons/ai";
function Test()
{
  return <clientSuite 
  {...clientSuite} />;
}

export default Test;
function clientSuite(props){
  const{
    titleq,
    ModalTitle,
    rpartitionqDesClientsqParSportq,
    paddleq,
    numberq1,
    layerq2,
    tennisq,
    numberq2,
    groupsq1,
    miniqfootq,
    groupsq2,
    numberq3,
    nombreqDeClientqParStatutq,
    abonnsq,
    numberq4,
    textq1,
    nonAbonnsq,
    numberq5,
    percentq,
    spanTextq1,
    spanTextq2,
    textq,
    abonnqProps,
    groupq891Props,
    groupq892Props,

  } = props;

  return(
  <div>
    <Sidbar />
    <div className="rectangleq-353"></div>
    <h1 className='titleq lora-medium-black-40px'>{titleq}</h1>
    <p className='rpartitionq-par-sportq lora-medium-black-40px'>{rpartitionqDesClientsqParSportq}</p>
    <div className="overlapq-groupq">
      <div className='paddleq inter-medium-abbey-18-1px'>{paddleq}</div>
      <div className='numberq-1'>{numberq1}</div>
      </div>
      <img className="rectangleq-360" />
      <img className="layerq-2" />
      <div className="overlapq-groupq1">
        <div className="overlapq-groupq-1">
          <div className='tennisq inter-medium-abbey-18-1px'>{tennisq}</div>
          <div className='numberq-2'>{numberq2}</div>
          {/* div her */}
          <div className="rectangleq-359" >
            </div>
            <img className="groupq" />

        </div>
        <div className="overlapq-groupq2">
        <div className="overlapq-groupq-2">

          <div className='miniq-footq inter-medium-abbey-18-1px'>{miniqfootq}</div>
          </div>
          <div className='rectangleq-359-1'></div>
          <img className='groupq-1' />
          <div className='numberq-3'>{numberq3}</div>
        </div>
        {/* one div here */}
        <p className='nombreq-de-clientq-par-statutq lora-medium-black-40px'>{nombreqDeClientqParStatutq}</p>
        <div className="groupq-80">
          <div className='groupq-78'>
            <div className='groupq-75'>
              <Abonnq />
              <div className='abonnsq inter-medium-abbey-24px'>{abonnsq}</div>
              </div>
              <div className='groupq-74'>
                <div className='numberq inter-medium-abbey-32px'>{numberq4}</div>
              </div>
              <div className='textq-1'>{textq1}</div>
          </div>
          </div>
          <div className='groupq-79'>
            <div className='groupq-76'>
              <Abonnq className={abonnqProps.className} />
              <div className='non-abonnsq inter-medium-abbey-24px'>{nonAbonnsq}</div>
              </div>
              <div className='groupq-77'>
                <div className='numberq inter-medium-abbey-32px'>{numberq5}</div>
                <div className='percentq inter-medium-abbey-32px'>{percentq}</div>
                </div>
            </div>
            {/* div her */}
            <div className='overlapq-groupq3'>
              <img className='x40-57' />
              <img className='x29-20' />
              <img className='x10-14' />
              </div>
              <Groupq89 spanTextq1={groupq891Props.spanTextq1} spanTextq2={groupq891Props.spanTextq2} />
              <div className='groupq-90'>
                <div className='ellipseq'></div>
                <div className='miniq-footq-29 inter-bold-black-13-9px'>
                  <span className='inter-bold-black-13-9px'>{spanTextq1}</span>
                  <span className='inter-bold-black-13-9px'>{spanTextq2}</span>
                </div>
              
              <div className='textq'>{textq}</div>
              <Groupq89 spanTextq1={groupq892Props.spanTextq1} spanTextq2={groupq892Props.spanTextq2} />
        </div>
        </div>
       

    </div>
  );
}
function Abonnq(props){
  const{ className } = props;
  return <div className={`abonnq ${className || ""}`}></div>;
}
function Groupq89(props){
  const { spanTextq1, spanTextq2,className } = props;
  return(
    <div className={`groupq-89 ${className || ""}`}>
      <div className='ellipseq-1'>
        </div>
        <div className='tennisq-57 inter-bold-black-13-9px'>
          <span className='spanq-1 inter-bold-black-13-9px'>{spanTextq1}</span>
          <span className='spanq-1 inter-bold-black-13-9px'>{spanTextq2}</span>
        </div>
        </div>
  );
  }
  const abonnq2Data = {
    className: "abonnq-1",
  };
  const groupq891Data = {
    spanTextq1: "Tennis",
    spanTextq2: "(57%)",
  };
  const groupq892Data = {
    spanTextq1: "Paddle",
    spanTextq2: "(14%)",
    className: "groupq-90",
  };
  const clientSuiteData = {
titleq:"Nombre de client par sport",
rpartitionqDesClientsqParSportq:"Répartition des clients par sport",
paddleq:"Paddle",
numberq1:"100",
layerq2:"layerq-2.png",
tennisq:"Tennis",
numberq2:"150",
groupsq1:"groupq.png",
miniqfootq:"Mini-foot",
groupsq2:"groupq-1.png",
numberq3:"170",
nombreqDeClientqParStatutq:"Nombre de client par statut",
abonnsq:"Abonnés",
numberq4:"100",
textq1:"5.4",
nonAbonnsq:"Non abonnés",
numberq5:"50",
percentq:"0.4%",
spanTextq1:"Mini Foot",
spanTextq2:"(29%)",
textq:"",
abonnqProps: abonnq2Data,
groupq891Props: groupq891Data,
groupq892Props: groupq892Data,
  };