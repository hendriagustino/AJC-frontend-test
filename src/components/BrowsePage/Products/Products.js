import React, {Component} from 'react';
import classes from './Products.module.css';

import Product from './Product/Product';
import * as actions from '../../../store/actions/actions';

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

        //mapping every single content of "Plan" inside of the Redux State
        const mapPlan = this.props.content.map(planElement=>{

            //checking whether the id of this "Product" we are going to return is already
            //selected by the user (clicked Compare Button). If so, we pass an addition 
            //backgroundColor style to the Product so that it looks "Highlighted"
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

        //logic for Compare Button is enabled when selected products is more than 1 (minimum 2)
        let ComparePlanButton = true;
        if (selectedLength >1 ){
            ComparePlanButton = false;
        }

        //logic to disable Compare Clear Button if selected product is 0
        let CompareClearButton = true;
        if (selectedLength > 0 ){
            CompareClearButton = false;
        }
        
        return(
            <>
                <h1 className={classes.Title}>Products</h1>
                
                <h4 className={classes.Title} style={{color:'grey'}}>
                    <NavLink to={"/comparepage"}>
                        <button disabled={ComparePlanButton} 
                                className={classes.CompareButton}>
                            Compare Plan
                        </button>

                    </NavLink>

                    <button disabled={CompareClearButton} 
                            className={classes.CrossMarkButton}
                            onClick={this.props.onCompareClearClicked}>
                                &#10006;
                    </button>

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
        onCompareClicked : (id) => dispatch(actions.onCompareClicked(id)),
        onCompareClearClicked : () => dispatch(actions.onCompareClearClicked())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));
