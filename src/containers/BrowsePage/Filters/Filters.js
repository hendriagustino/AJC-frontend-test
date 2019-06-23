import React, {Component} from 'react';
import classes from './Filters.module.css';

import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import Product from './../../../containers/BrowsePage/Products/Product/Product';
import * as actions from './../../../store/actions/actions'


class Filters extends Component{

    handleMoreInfoClicked = (id) =>{
        this.props.onProductClicked(id);
        this.props.history.push('/productdetailpage');
    }

    handleCompareClicked = () =>{
        
    }

    render(){

        ////////////////////////////////////////////////////////////////////////////////////
        let planArray = [];
        this.props.content.map(planEl=>{
            return planArray.push(planEl.insuranceProviderId);
        });

        let newPlanArray = [...new Set(planArray)].map((insuranceProviderId,i)=>{
                return <option key={i}>{insuranceProviderId}</option>
            }
        );

        ////////////////////////////////////////////////////////////////////////////////////
        let planArray2= [];
        this.props.content.map(planEl=>{
            return planArray2.push(planEl.plan.planEligibility.serviceAreaIds.toString());
        });

        let newPlanArray2 = [...new Set(planArray2)].map((serviceArea,i)=>{
                return <option key={i}>{serviceArea}</option>
            }
        );
        
        ////////////////////////////////////////////////////////////////////////////////////
        const filterResult = (this.props.content.filter((plan)=> {
                            return plan.insuranceProviderId === this.props.filterInsuranceProvider[0];
                        }
                    )
                );
        
        const filterResultMapping = filterResult.map((planElement,i) => {
            return (<div key={planElement.plan.id}>
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
                        />
                    </div>
                );
            }
        );

        return(
            <div >
                <h1 className={classes.Title}>Filters</h1>
                
                <p className={classes.Title}>By Insurance Provider</p>

                <form style={{textAlign: 'center'}}>
                    <select>
                        {newPlanArray}
                    </select>
                    <button>
                        Submit
                    </button>
                </form><br/>

                {filterResultMapping}
                
                <p className={classes.Title}>By Service Area Ids</p>
                <form style={{textAlign: 'center'}}>
                    <select>
                        {newPlanArray2}
                    </select>
                    <button>
                        Submit
                    </button>
                </form>

                

            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        content: state.content,
        selected: state.selected,
        filterInsuranceProvider: state.filterInsuranceProvider
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onProductClicked : (id) => dispatch(actions.onProductClicked(id)),
        onCompareClicked : (id) => dispatch(actions.onCompareClicked(id)),
        onCompareClearClicked : () => dispatch(actions.onCompareClearClicked())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Filters));
