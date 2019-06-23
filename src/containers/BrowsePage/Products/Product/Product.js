import React from 'react';
import classes from './Product.module.css';

import HDFC_ERGO from './../../../../assets/HDFCErgo.png';
import RELIANCE_GENERAL from './../../../../assets/RelianceGeneral.png';
import RELIGARE_HEALTH from './../../../../assets/Religare.png';

const Product = (props) =>{

    const imgSrc = {HDFC_ERGO, RELIANCE_GENERAL, RELIGARE_HEALTH};

    let compareButton= (
        <button disabled style={{cursor: 'not-allowed'}} onClick={()=>props.compareClicked(props.id)} className={classes.Button}>
            Compare
        </button>
    );

    if (props.selected.length < 3) {
        compareButton = (
            <button onClick={()=>props.compareClicked(props.id)} className={classes.Button}>
                Compare
            </button>
        );
    }

    return(
        <div className={classes.Product} style={props.compareProductClickedColor}> 

            <img src={imgSrc[props.insuranceProviderId]} 
                 alt={imgSrc[props.insuranceProviderId]} 
                 className={classes.ImgStyle}
            />

            <p><b>{props.planName}</b></p>
            <p>
                Provider: {props.provider}<br/>
                Sum Insured: ${props.sumInsured}<br/>
                Premium: ${props.premium}<br/>
            </p>

            <button onClick={()=>props.moreInfoClicked(props.id)} className={classes.Button}>
                View Detail
            </button>

            {compareButton}
        </div>
    );
}

export default Product;
