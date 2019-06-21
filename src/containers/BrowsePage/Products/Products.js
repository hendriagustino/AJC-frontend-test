import React, {Component} from 'react';
import classes from './Products.module.css';
import { connect } from 'react-redux';

import Product from './Product/Product';

class Products extends Component{
    render(){

        const mapPlan = this.props.content.map(planElement=>{
            return (
                <div>
                    <Product
                        key={planElement.plan.id}
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
                <h1 className={classes.ProductsTitle}>Products</h1>
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

export default connect(mapStateToProps)(Products);
