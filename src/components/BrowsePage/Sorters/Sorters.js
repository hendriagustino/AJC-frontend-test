import React, {Component} from 'react';
import classes from './Sorters.module.css';

import * as actions from './../../../store/actions/actions';

import {connect} from 'react-redux';
import Product from './../Products/Product/Product';
import {withRouter} from 'react-router-dom';

class Sorters extends Component{

    handleMoreInfoClicked = (id) =>{
        this.props.onProductClicked(id);
        this.props.history.push('/productdetailpage');
    }

    handleCompareClicked = (id) =>{
        this.props.onCompareClicked(id);
    }

    onSortPremiumChange = (e) =>{
        this.props.onSortPremium(e.target.value);
    }

    onSortCreatedAtChange = (e) =>{
        this.props.onSortCreatedAt(e.target.value);
    }

    render(){

        //copy the whole data / whatever is is "this.props.content" and then put it inside of an array and
        //save it to a new constant

        //after saving the "Content" to a new constant, here we are going to Sort the data based on
        //the information we received from "this.props.sortPremium"
        const sortPremiumContent = [...this.props.content];
        const sortPremiumContentMap = sortPremiumContent.sort((a,b)=>{
            if(this.props.sortPremium === 'asc'){
                return a.totalAmount.amount - b.totalAmount.amount;
            } else {
                return b.totalAmount.amount - a.totalAmount.amount;
            }
        });

        //here we finished sorting datas (be is Ascengdingly or Descendingly), 
        //now we are going to map the data inside the constant just now
        const mappingSortPremium = sortPremiumContentMap.map((plan,i)=>{

                //here we do checking for whether plan.plan.id / for every id we mapped, /
                //we want to know whether the id belong to one of the many ids inside
                //of the state.selected
                const mapSelectedIds = this.props.selected.filter( selectedId => {
                        return selectedId === plan.plan.id
                    }
                );
                
                //if the filter function above return true (not zero or >0) then we want to pass the style object
                //of {backgroundColor : lightgray} to constant of compareProductClickedColor
                let compareProductClickedColor = null;
                if(mapSelectedIds.length > 0 ){
                    compareProductClickedColor= {backgroundColor: 'lightGray'}
                }
                
            return (<div key={plan.plan.id}>
                <Product
                    id={plan.plan.id}
                    insuranceProviderId={plan.insuranceProviderId}
                    planName={plan.plan.planName}
                    provider={plan.plan.insuranceProviderName}
                    sumInsured={plan.sumInsured}
                    premium={plan.totalAmount.amount}
                    moreInfoClicked={this.handleMoreInfoClicked}
                    compareClicked={this.handleCompareClicked}
                    selected={this.props.selected}
                    compareProductClickedColor={compareProductClickedColor}
                />
            </div>
            );
        });

        //copy the whole data / whatever is is "this.props.content" and then put it inside of an array and
        //save it to a new constant

        //after saving the "Content" to a new constant, here we are going to Sort the data based on
        //the information we received from "this.props.sortPremium"
        const sortCreatedAtContent = [...this.props.content];
        const sortCreatedAtContentMap = sortCreatedAtContent.sort((a,b)=>{
            if(this.props.sortCreatedAt === 'asc'){
                return a.plan.createdAt - b.plan.createdAt;
            } else {
                return b.plan.createdAt - a.plan.createdAt;
            }
        });

        //here we finished sorting datas (be is Ascengdingly or Descendingly), 
        //now we are going to map the data inside the constant just now
        const mappingSortCreatedAt = sortCreatedAtContentMap.map((plan,i)=>{

            //here we do checking for whether plan.plan.id / for every id we mapped, /
            //we want to know whether the id belong to one of the many ids inside
            //of the state.selected
            const mapSelectedIds2 = this.props.selected.filter(selectedId => {
                return selectedId === plan.plan.id
                }
            );
            
            //if the filter function above return true (not zero or >0) then we want to pass the style object
            //of {backgroundColor : lightgray} to constant of compareProductClickedColor
            let compareProductClickedColor2 = null;
            if(mapSelectedIds2.length > 0 ){
                compareProductClickedColor2= {backgroundColor: 'lightGray'}
            }

            return (<div key={plan.plan.id}>
                <Product
                    id={plan.plan.id}
                    insuranceProviderId={plan.insuranceProviderId}
                    planName={plan.plan.planName}
                    provider={plan.plan.insuranceProviderName}
                    sumInsured={plan.sumInsured}
                    premium={plan.totalAmount.amount}
                    moreInfoClicked={this.handleMoreInfoClicked}
                    compareClicked={this.handleCompareClicked}
                    selected={this.props.selected}
                    compareProductClickedColor={compareProductClickedColor2}
                />
            </div>
            );
        });

        return(
            <div>
                <h1 className={classes.Title}>Sorters</h1>

                <div style={{textAlign: 'center'}}>
                    <span style={{backgroundColor: 'lightgray'}}>Sort by Premium</span>
                    <br/>
                    <form onChange={this.onSortPremiumChange}>
                        <select>
                            <option value="asc" >Low to High</option>
                            <option value="desc" >High to Low</option>
                        </select>
                    </form>
                    <br/>
                </div>

                {mappingSortPremium}

                <div style={{textAlign: 'center'}}>
                    <span style={{backgroundColor: 'lightgray'}}>Sort by CreatedAt</span>
                    <br/>
                    <form onChange={this.onSortCreatedAtChange}>
                        <select>
                            <option value="asc" >Low to High</option>
                            <option value="desc" >High to Low</option>
                        </select>
                    </form>
                    <br/>
                </div>

                {mappingSortCreatedAt}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        content: state.content,
        selected: state.selected,
        sortPremium : state.sortPremium,
        sortCreatedAt : state.sortCreatedAt
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onProductClicked :      (id) => dispatch(actions.onProductClicked(id)),
        onCompareClicked :      (id) => dispatch(actions.onCompareClicked(id)),
        onCompareClearClicked : () => dispatch(actions.onCompareClearClicked()),
        onSortPremium :         (sortpremiumvalue) => dispatch(actions.onSortPremium(sortpremiumvalue)),
        onSortCreatedAt :       (sortcreatedatvalue) => dispatch(actions.onSortCreatedAt(sortcreatedatvalue))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Sorters));