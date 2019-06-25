import * as actionTypes from './actionTypes';

//action creator for each time a Product View Detail is clicked
export const onProductClicked = (id) =>{
    return{
        type: actionTypes.ON_PRODUCT_CLICKED,
        id: id
    }
}

//action creator when Compare Button of Product is clicked
export const onCompareClicked = (id) =>{
    return{
        type: actionTypes.ON_COMPARE_CLICKED,
        id: id
    }
}

//action creator when Compare Clear button is clicked
export const onCompareClearClicked = () =>{
    return{
        type: actionTypes.ON_COMPARE_CLEAR_CLICKED
    }
}

//action creator for filtering Product of Insurance Provider
export const onInsuranceProviderFilter = (name) =>{
    return{
        type: actionTypes.ON_INSURANCE_PROVIDER_FILTER,
        name: name
    }
}

//action creator for filtering Product of serviceAreaIds
export const onServiceAreaIdsFilter = (areaname) =>{
    return{
        type: actionTypes.ON_SERVICE_AREA_IDS_FILTER,
        areaname: areaname
    }
}

export const onSortPremium = (sortpremiumvalue) =>{
    return{
        type: actionTypes.ON_SORT_PREMIUM,
        sortpremiumvalue: sortpremiumvalue
    }
}

export const onSortCreatedAt = (sortcreatedatvalue) =>{
    return{
        type: actionTypes.ON_SORT_CREATEDAT,
        sortcreatedatvalue : sortcreatedatvalue
    }
}