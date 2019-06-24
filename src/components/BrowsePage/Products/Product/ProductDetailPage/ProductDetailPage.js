import React, {Component} from 'react';
import classes from './ProductDetailPage.module.css';
import { connect } from 'react-redux';

import HDFC_ERGO from './../../../../../assets/HDFCErgo.png';
import RELIANCE_GENERAL from './../../../../../assets/RelianceGeneral.png';
import RELIGARE_HEALTH from  './../../../../../assets/Religare.png';

class ProductDetailPage extends Component{
    
    render(){

        const imgSrc = {HDFC_ERGO, RELIANCE_GENERAL, RELIGARE_HEALTH};

        //filter out the whole state.content to return a single id which is the clicked product id
        const result = (
            this.props.content
            .filter((plan)=> {
              return plan.plan.id === this.props.productDetailPageId;
            })
        );
        
        const newResult = result.map((plan,i) => {
            
            //deep mapping of MedicalFeatures array inside of this.props.content array mapping
            const medicalFeatures = (plan.plan.planBenefitCategories.MedicalFeatures.map( (med,i)=>{
                            return(<span className={classes.SpanStyle} key={i}>
                                        {med.benefitName}
                                    </span>);
                        }
                    )
                );

            //deep mapping of TravelFeatures array inside of this.props.content array mapping
            const travelFeatures = (plan.plan.planBenefitCategories.TravelFeatures.map( (tra,i)=>{
                            return(<span className={classes.SpanStyle} key={i}>
                                        {tra.benefitName}
                                    </span>);
                        }
                    )
                );

            return (
                <div key={i} className={classes.ProductDetail}>
                    
                    <h1>
                        <b>{plan.plan.planName}</b>
                    </h1>
                    
                    <img src={imgSrc[plan.insuranceProviderId]} 
                        alt={imgSrc[plan.insuranceProviderId]} 
                        style={{width:'195px',height:'100px', marginTop: '5px'}}
                    />

                    <p>
                        {/* <span style={{fontSize: '12px'}}>Provider Name:</span> */}
                        {/* <br/> */}
                        <b>{plan.plan.insuranceProviderName}</b>
                    </p>

                    <p>
                        <span style={{fontSize: '12px'}}>Sum Insured :</span>
                        <br/>
                        <b>${plan.sumInsured}</b>
                    </p>

                    <p>
                        <span style={{fontSize: '12px'}}>Premium :</span>
                        <br/>
                        <b>${plan.totalAmount.amount}</b>
                    </p>

                    <h2>Medical Features</h2>
                    {medicalFeatures}
                    <h2>Travel Features</h2>
                    {travelFeatures}
                </div>
            );
        });

        return(
            <div>
                {/* <h1 className={classes.Title}>ProductDetailPage</h1> */}
                {newResult}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        content : state.content,
        productDetailPageId: state.productDetailPageId,
        selected: state.selected
    }
}

export default connect(mapStateToProps)(ProductDetailPage);
