import React, {Component} from 'react';
import classes from './ComparePage.module.css';
import {connect} from 'react-redux';

class ComparePage extends Component{

    render(){
        
        const mapSelectedPlans = this.props.selected.map( (selectedId,i)=>{
            const mapSelectedIds = this.props.content.filter((plan) => {
                            return plan.plan.id === selectedId;
                        }).map((plan,i) => {
                            return (
                                <div key={plan.plan.id} className={classes.Product}>
                                    <p>Insurance Id : {plan.plan.id}</p>
                                    <p>Insurance Provider Id: {plan.insuranceProviderId}</p>
                                    <p>Insurance Provider Name : {plan.plan.insuranceProviderName}</p>
                                    <p>Sum Insured: {plan.sumInsured}</p>
                                    <p>Premium : {plan.totalAmount.amount}</p>
                                    <hr/>
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
