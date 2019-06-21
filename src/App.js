import React from 'react';
import './App.css';
import BrowsePage from './containers/BrowsePage/BrowsePage';
import {Route, Switch} from 'react-router-dom';
import ProductDetailPage from './containers/BrowsePage/Products/Product/ProductDetailPage/ProductDetailPage';
import ComparePage from './containers/BrowsePage/Products/Product/ComparePage/ComparePage';

function App() {
  return (
    <div>
      
      <Switch>
          <Route path="/productdetailpage" component={ProductDetailPage}/>
          <Route path="/comparepage" component={ComparePage}/>
          <Route path="/" component={BrowsePage}/>
      </Switch>
      
    </div>
  );
}

export default App;
