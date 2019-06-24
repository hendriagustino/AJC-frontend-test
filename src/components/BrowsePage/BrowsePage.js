import React, {Component} from 'react';
import Products from './Products/Products';
import Filters from './Filters/Filters';
// import Sorters from './Sorters/Sorters';


class BrowsePage extends Component{    
    render(){

        return(
            <div>
              <Products/>
              
              <Filters/>
              {/* <Sorters/> */}

            </div>
        );
    }
}


export default BrowsePage;
