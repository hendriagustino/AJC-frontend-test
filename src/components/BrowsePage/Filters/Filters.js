import React, {Component} from 'react';
import classes from './Filters.module.css';

import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import Product from '../Products/Product/Product';
import * as actions from '../../../store/actions/actions'


class Filters extends Component{

    handleMoreInfoClicked = (id) =>{
        this.props.onProductClicked(id);
        this.props.history.push('/productdetailpage');
    }

    handleCompareClicked = () =>{}

    handleInsuranceProviderFilter = (e) => {
        this.props.onInsuranceProviderFilter(e.target.value);
    }

    handleServiceAreaIdsFilter = e =>{
        this.props.onServiceAreaIdsFilter(e.target.value);
    }


    render(){

        //mapping Distinct "insuranceProviderId" inside state.content for the select's options
        let planArray = [];
        this.props.content.map(planEl=>{
            return planArray.push(planEl.insuranceProviderId);
        });

        let newPlanArray = [...new Set(planArray)].map((insuranceProviderId,i)=>{
                return <option key={i} 
                                value={insuranceProviderId} 
                                >
                                    {insuranceProviderId}
                        </option>
            }
        );

        //mapping Distinct "serviceAreaIds" inside state.content for the select's options
        let planArray2= [];
        this.props.content.map(planEl=>{
            return planArray2.push(planEl.plan.planEligibility.serviceAreaIds.toString());
        });

        let newPlanArray2 = [...new Set(planArray2)].map((serviceArea,i)=>{
                return <option key={i}>{serviceArea}</option>
            }
        );
        
        //match result of filterInsuranceProvider provided by user and proceed to do mapping
        //products which do filtering based on Insurance Provider 
        const filterInsuranceProviderResult = (this.props.content.filter((plan)=> {
                            return plan.insuranceProviderId === this.props.filterInsuranceProvider;
                        }
                    )
                );

        const filterInsuranceProviderMappingResult = filterInsuranceProviderResult.map((planElement,i) => {
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

        //match result of filterServiceAreaIds provided by user and proceed to do mapping
        //products which do filtering based on Service Area Ids
        const filterServiceAreaIdsResult = this.props.content.filter((plan)=> {
                return plan.plan.planEligibility.serviceAreaIds.toString() === this.props.filterServiceAreaIds;
            }
        );
        
        const filterServiceAreaIdsMappingResult = filterServiceAreaIdsResult.map((planElement,i) => {
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
        });

        return(
            <div >
                <h1 className={classes.Title}>Filters</h1>
                
                <p className={classes.Title}>By Insurance Provider</p>

                <form style={{textAlign: 'center'}} onChange={this.handleInsuranceProviderFilter}>
                    <select>
                        <option>---Select---</option>
                        {newPlanArray}
                    </select>
                </form><br/>

                {filterInsuranceProviderMappingResult}
                
                <p className={classes.Title}>By Service Area Ids</p>
                <form style={{textAlign: 'center'}} onChange={this.handleServiceAreaIdsFilter}>
                    <select>
                        <option>---Select---</option>
                        {newPlanArray2}
                    </select>
                </form>

                {filterServiceAreaIdsMappingResult}<br/>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        content: state.content,
        selected: state.selected,
        filterInsuranceProvider: state.filterInsuranceProvider,
        filterServiceAreaIds : state.filterServiceAreaIds
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onProductClicked : (id) => dispatch(actions.onProductClicked(id)),
        onCompareClicked : (id) => dispatch(actions.onCompareClicked(id)),
        onCompareClearClicked : () => dispatch(actions.onCompareClearClicked()),
        onInsuranceProviderFilter : (name) => dispatch(actions.onInsuranceProviderFilter(name)),
        onServiceAreaIdsFilter : (areaname) => dispatch(actions.onServiceAreaIdsFilter(areaname))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Filters));
