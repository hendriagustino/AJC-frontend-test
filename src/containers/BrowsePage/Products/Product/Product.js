import React from 'react';
import classes from './Product.module.css';

import HDFC_ERGO from './../../../../assets/HDFCErgo.png';
import RELIANCE_GENERAL from './../../../../assets/RelianceGeneral.png';
import RELIGARE_HEALTH from './../../../../assets/Religare.png';

const Product = (props) =>{

    const imgSrc = {HDFC_ERGO, RELIANCE_GENERAL, RELIGARE_HEALTH};

    return(

        <div className={classes.Product}> 
        
            <img src={imgSrc[props.insuranceProviderId]} 
                 alt={imgSrc[props.insuranceProviderId]} 
                 style={{width:'70px',height:'30px'}}
            />

            <p><b>{props.planName}</b></p>
            <p>
                Provider: {props.provider}<br/>
                Sum Insured: ${props.sumInsured}<br/>
                Premium: ${props.premium}
            </p>

            <div onClick={()=>props.moreInfoClicked(props.id)} className={classes.Button}>More Info</div>
            <div onClick={()=>props.compareClicked(props.id)} className={classes.Button}>Compare</div>

        </div>
    );
}

export default Product;
