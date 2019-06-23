import React, {Component} from 'react';
import classes from './Products.module.css';

import Product from './Product/Product';
import * as actions from './../../../store/actions/actions';

import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';

class Products extends Component{
    
    handleMoreInfoClicked = (id) =>{
        this.props.onProductClicked(id);
        this.props.history.push('/productdetailpage');
    }

    handleCompareClicked = (id) =>{
        this.props.onCompareClicked(id);
    }

    render(){

        const selectedLength= this.props.selected.length;

        const mapPlan = this.props.content.map(planElement=>{

            const mapSelectedIds = this.props.selected.filter((selectedId) => {
                            return selectedId === planElement.plan.id});
            
            let compareProductClickedColor = null;
            if(mapSelectedIds.length > 0 ){
                compareProductClickedColor= {backgroundColor: 'lightGray'}
            }

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
                        selected={this.props.selected}
                        compareProductClickedColor={compareProductClickedColor}
                    />
                </div>
            )
        });
        
        return(
            <>
                <h1 className={classes.Title}>Products</h1>
                
                <h4 className={classes.Title} style={{color:'grey'}}>
                    
                    { selectedLength > 1 
                        ?   
                            <>
                                <button>X</button>
                                <NavLink to={"/comparepage"}>
                                    Compare Plan
                                </NavLink>
                            </>
                        : 
                            null
                    }
                    
                </h4>
                {mapPlan}
            </>
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
