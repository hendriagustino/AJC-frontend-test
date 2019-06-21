import React from 'react';
import classes from './Product.module.css';

import HDFC_ERGO from './../../../../assets/HDFCErgo.png';
import RELIANCE_GENERAL from './../../../../assets/RelianceGeneral.png';
import RELIGARE_HEALTH from './../../../../assets/Religare.png';

const Product = (props) =>{
    
    return(
        <div className={classes.Product} > 
                
            {
                props.insuranceProviderId === 'HDFC_ERGO' ? 
                <img src={HDFC_ERGO} alt={HDFC_ERGO} style={{width:'70px',height:'30px'}}/>
                : 
                (
                    props.insuranceProviderId === 'RELIANCE_GENERAL' ? 
                    <img src={RELIANCE_GENERAL} alt={RELIANCE_GENERAL} style={{width:'70px',height:'30px'}}/>:
                    <img src={RELIGARE_HEALTH} alt={RELIGARE_HEALTH} style={{width:'70px',height:'30px'}}/>
                )
            }

            <p><b>{props.planName}</b></p>
            <p>
                Provider: {props.provider}<br/>
                Sum Insured: ${props.sumInsured}<br/>
                Premium: ${props.premium}
            </p>

        </div>
    );
}

export default Product;
