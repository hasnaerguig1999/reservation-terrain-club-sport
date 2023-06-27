import React from 'react';
import '../chiffresdaffaires.css';
import Sidbar from '../sidbar/sidbar.component';







export default function Chiffredaffaire() {
  return (
    <div>
    <Sidbar />
    <div className='framexx-8'></div>
    <div className='overlapxx-groupxx'>
      <div className='flexxx-colxx'>
        <h1 className='textxx-2 textxx-5'>Chiffre d'affaire</h1>
        <div className='framexx-74'>
          <div className='invoice'>
          <div className='invoice-1'>INV-U7163</div>
          </div>
          <div className='statusxx'>
            <div className='statusxx-1'>Payé</div>
            </div>
            <div className='shopxx'>
              <div className='shopxx-1'>Joueur</div>
              </div>
              <div className='shopxx-2'>
                <div className='shopxx-3'>Archive</div>
              </div>
              <div className='shopxx-4'>
                <div className='shopxx-5'>Download</div>
                </div>
                <div className='textxx-3 textxx-5 inter-semi-bold-tiber-20px'>Factures</div>
                </div>
            </div>
            <div className='statsxx-itemxx'>
              <div className='textxx-4 textxx-5 inter-semi-bold-tiber-20px'>Transactions Récentes</div>
              <p className='headingxx'>Mise a jour&nbsp;&nbsp;20 mins ago</p>
              <div className='paymentxx-framexx'>
                <div className='clientxx'>
                  <div className='textxx-and-supportingxx-textxx'>
                    <div className='textxx inter-medium-mirage-14px'>Joueur 1</div>
                    <div className="textxx-1 textxx-5 inter-normal-fiord-14px">300 dh</div>
                  </div>
                  </div>
                  <div className='datexx'>
                    <div className='textxx-1 textxx-5 inter-normal-fiord-14px'>LUNDI 1:00pm</div>
                  </div>
                </div>
                <div className='paymentxx-framexx'>
                  <div className='clientxx'>
                    <div className='textxx-and-supportingxx-textxx'>
                      <div className='textxx inter-medium-mirage-14px'>Joueur 2</div>
                      <div className="textxx-1 textxx-5 inter-normal-fiord-14px">100 dh</div>
                      </div>
                    </div>
                    <div className='datexx'>
                      <div className='textxx-1 textxx-5 inter-normal-fiord-14px'>LUNDI 1:00pm</div>

                      </div>
                  </div>
                  <div className='paymentxx-framexx'>
                    <div className='clientxx'>
                      <div className='textxx-and-supportingxx-textxx'>
                        <div className='textxx inter-medium-mirage-14px'>Joueur 3</div>
                        <div className="textxx textxx-5 inter-normal-fiord-14px">+500 dh</div>
                        </div>
                    </div>
                    <div className='datexx'>
                      <div className='textxx-1 textxx-5 inter-normal-fiord-14px'>LUNDI 2:00pm</div>
                      </div>
                  </div>
                  <div className='paymentxx-framexx'>
                    <div className='clientxx'>
                      <div className='textxx-and-supportingxx-textxx'>
                        <div className='textxx inter-medium-mirage-14px'>Joueur 4</div>
                        <div className="textxx-1 textxx-5 inter-normal-fiord-14px">+500 dh</div>
                        </div>
                      </div>
                      <div className='datexx'>
                        <div className='textxx-1 textxx-5 inter-normal-fiord-14px'>LUNDI 2:50pm</div>
                        </div>
                    </div>
              </div>
              {/* <img className='vectorxx' /> */}
        </div>
        </div>
  
    
  );
}