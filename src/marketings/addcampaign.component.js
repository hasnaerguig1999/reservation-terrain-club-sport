import React from 'react';
import '../addcampaign.css';
import Sidbar from '../sidbar/sidbar.component';







export default function Addcampaign() {
  return (
    <div>
    <Sidbar />
    {/* <div className='container'> */}
     <div className="rectangleg-409"></div>
     <viv className="rectangleg-410"></viv>
     <h1 className="creg-campagneg">créer campagne</h1>
     <div className="frameg-28">
        <div className="envoyerg">Envoyer</div>
        <div className="overlapg-groupg">
          <div className="overlapg-groupg1">
            <div className="lesg-clientsg inter-medium-pale-sky-16px">Les Clients</div>
          </div>
          <div className="filtg-containerg">
            <div className="filtreg-par inter-normal-pale-sky-16px">Filtre par :</div>
            <img className="iconsg-mediumg-filterg" src="Filter.png" />
            </div>
          <div className="activitesg-dropmenug">
            <div className="itemg-1">
              <div className="containerg">
                <select className="ne inter-medium-charade-14px">
                  <option className='oppgg'>Activitées</option>
                  </select>
                {/* <img className="submenug" src="Chevron.png" /> */}
                </div>
            </div>
            </div>
          <div className="paiementg-containerg">
            <article className="paiementg">
              <input className="ellipseg-86"  type="radio" id="javascript" name="abon" value="JavaScript" />
              <div className="paiementg-especeg inter-normal-pale-sky-16px">Non Abonné</div>
            </article>
            <article className="paiementg-1">
              <input className="ellipseg-86-1"  type="radio" id="javascript" name="abon" value="JavaScript" checked />
              <div className="paiementg-especeg-1">Abonné</div>
              </article>
            </div>
          </div>
          
        <div className="rectangleg-420"></div>
        <div className="rectangleg-419"></div>
        <div className='allinfre'>
        <div className="compagneg-dtailsg inter-medium-pale-sky-16px">Campagne Détails</div>
        <div className='container' id='toutg'>
        <div className="nomg-de-compagneg inter-normal-pale-sky-14px">Nom De Campagne</div>
        <input className="inputg" placeholder='Nom de compagne' id='textg'>
          {/* <div className="textg">Nom de compagne</div> */}
        </input>
        {/* <div className="channelsg"> */}
          {/* <div className="itemg-1"> */}
            {/* <div className="containerg"> */}
              <div className='coto'>
              <select  className="channelsg inter-medium-charade-14px" id='chan'><option>Channels</option></select>
              {/* <img className="submenug" src="Chevron.png" /> */}
              </div>
              {/* </div> */}
              {/* </div> */}
            {/* </div> */}
        </div>
        <div className="messageg">
          <div className="messageg-1 messageg-3 inter-normal-pale-sky-14px">Message</div>
          <textarea className="overlapg-groupg-1" placeholder='Message....'>
            {/* <div className="messageg-2 messageg-3">Message....</div> */}
            </textarea>
            </div>
            <button className="buttong-1">Envoyer</button>
        </div>
      </div>
    </div>
    // </div>
  );
}
