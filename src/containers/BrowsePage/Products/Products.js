import React, {Component} from 'react';
import classes from './Products.module.css';
import { connect } from 'react-redux';

import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';

import Product from './Product/Product';
import * as actions from './../../../store/actions/actions';

class Products extends Component{
    
    handleMoreInfoClicked = (id) =>{
        this.props.onProductClicked(id);
        this.props.history.push('/productdetailpage');
    }

    handleCompareClicked = (id) =>{
        this.props.onCompareClicked(id);
    }

    render(){

        const mapPlan = this.props.content.map(planElement=>{
            return (
                <div key={planElement.plan.id}>
                    <Product
                        id={planElement.plan.id}
                        insuranceProviderId={planElement.insuranceProviderId}
                        planName={planElement.plan.planName}
                        provider={planElement.plan.insuranceProviderName}
                        sumInsured={planElement.sumInsured}
                        premium={planElement.totalAmount.amount}
                        moreInfoClicked={this.handleMoreInfoClicked}
                        compareClicked={this.handleCompareClicked}
                    />
                </div>
            )
        });
        
        const selectedLength= this.props.selected.length;

        const selectedPlanName1 = (
            this.props.content.filter((plan)=> {
              return plan.plan.id === this.props.selected[0];
            })
        );
        
        const selectedPlanName2 = (
            this.props.content.filter((plan)=> {
              return plan.plan.id === this.props.selected[1];
            })
        );

        const selectedPlanName3 = (
            this.props.content.filter((plan)=> {
              return plan.plan.id === this.props.selected[2];
            })
        );

        const mapSelectedProducts = ( 
            selectedLength === 3 ? 
                selectedPlanName1[0].plan.planName + ", " + selectedPlanName2[0].plan.planName + ", " + selectedPlanName3[0].plan.planName
                : 
                    (   selectedLength === 2 ? 
                        selectedPlanName1[0].plan.planName + ", " + selectedPlanName2[0].plan.planName
                    :   
                        selectedLength === 1 ? 
                        selectedPlanName1[0].plan.planName :  
                        <p>You havenot selected any plan.</p>
                    )
            )
        ;

        
        return(
            <div>
                <h1 className={classes.Title}>Products</h1>
                
                <h4 className={classes.Title} style={{color:'grey'}}>
                    {/* <span style={{color:'black'}}>
                        Compare{" : "}
                    </span> */}
                    {/* <button style={{width: '90px', height: '23px', margin: 'auto'}}>Compare Plan</button> */}
                    <NavLink 
                        to={"/comparepage"}
                    >
                        Compare Plan
                    </NavLink>

                    <br/>
                    {mapSelectedProducts}
                </h4>

                {mapPlan}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
      content : state.content,
      selected: state.selected
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        onProductClicked : (id) => dispatch(actions.onProductClicked(id)),
        onCompareClicked : (id) => dispatch(actions.onCompareClicked(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));
