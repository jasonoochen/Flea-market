/*
main user interface in router component
*/ 
import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import BuyerInfo from '../buyer-info/buyer-info'
import SellerInfo from '../seller-info/seller-info'

export default class Main extends Component { 
    render() { 
        return ( 
        <div>
            <Route path='/buyerinfo' component={BuyerInfo}/>
            <Route path='/sellerinfo' component={SellerInfo}/>
        </div> 
        ) 
    } 
}