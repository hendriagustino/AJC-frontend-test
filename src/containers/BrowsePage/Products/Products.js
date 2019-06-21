import React, {Component} from 'react';
import classes from './Products.module.css';
import { connect } from 'react-redux';

import {withRouter} from 'react-router';
import Product from './Product/Product';
import * as actions from './../../../store/actions/actions';

class Products extends Component{
    
    handleClick = (id) =>{
        this.props.onProductClicked(id);
        this.props.history.push('/productdetailpage');
    }

    render(){

        const mapPlan = this.props.content.map(planElement=>{
            // const wkw = "kwk";
            return (
                <div key={planElement.plan.id} onClick={()=>{console.log('ini pilih');this.handleClick(planElement.plan.id)}}>
                    <Product
                        id={planElement.plan.id}
                        insuranceProviderId={planElement.insuranceProviderId}
                        planName={planElement.plan.planName}
                        provider={planElement.plan.insuranceProviderName}
                        sumInsured={planElement.sumInsured}
                        premium={planElement.totalAmount.amount}
                    />
                </div>
            )
        });

        return(
            <div>
                <h1 className={classes.Title}>Products</h1>
                
                {mapPlan}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
      content : state.content
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        onProductClicked : (id) => dispatch(actions.onProductClicked(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));
