import React, {Component} from 'react';
import classes from './ComparePage.module.css';
import {connect} from 'react-redux';

import HDFC_ERGO from './../../../../../assets/HDFCErgo.png';
import RELIANCE_GENERAL from './../../../../../assets/RelianceGeneral.png';
import RELIGARE_HEALTH from  './../../../../../assets/Religare.png';

class ComparePage extends Component{

    render(){

        const imgSrc = {HDFC_ERGO, RELIANCE_GENERAL, RELIGARE_HEALTH};
        
        //mapping products in the state.content
        const mapSelectedPlans = this.props.selected.map( (selectedId,i)=>{

            //return a list of max 3 product in state.content which have the same id when the user clicked
            const mapSelectedIds = this.props.content.filter((plan) => {
                            return plan.plan.id === selectedId;
                        }).map((plan,i) => {
                            
                            //deep mapping of MedicalFeatures array inside of this.props.content array
                            const medicalFeatures = (plan.plan.planBenefitCategories.MedicalFeatures.map( (med,i)=>{
                                return(<span className={classes.SpanStyle} key={i}>
                                            {med.benefitName}
                                        </span>);
                                    }
                                )
                            );

                            //deep mapping of TravelFeatures array inside of this.props.content array
                            const travelFeatures = (plan.plan.planBenefitCategories.TravelFeatures.map( (tra,i)=>{
                                return(<span className={classes.SpanStyle} key={i}>
                                            {tra.benefitName}
                                        </span>);
                                    }
                                )
                            );

                            return (
                                <div key={plan.plan.id} className={classes.Product}>

                                    <h3 style={{color: 'gray' }}>
                                        <b>{plan.plan.planName}</b>
                                    </h3>

                                    <img src={imgSrc[plan.insuranceProviderId]}
                                        alt={imgSrc[plan.insuranceProviderId]}
                                        style={{width:'195px',height:'100px', marginTop: '5px'}}
                                    />
                                    
                                    {/* <p>
                                        <span style={{fontSize: '12px'}}>Provider Id:</span>
                                        <br/>
                                        <b>{plan.insuranceProviderId}</b>
                                    </p> */}
                                    
                                    <p>
                                        {/* <span style={{fontSize: '12px'}}>Provider Name:</span>
                                        <br/> */}
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

                                    <h2>TravelFeatures Features</h2>
                                    {travelFeatures}
                                    
                                </div>
                                );
                            }
                        );
            return mapSelectedIds
        });

        return(
            <div>
                <h1 className={classes.Title}>ComparePage</h1>
                {mapSelectedPlans}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        content: state.content,
        selected: state.selected
    }
}

export default connect(mapStateToProps)(ComparePage);
