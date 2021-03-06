import { Nav, Navbar } from 'react-bootstrap';
import React, { Component } from 'react';
import { ShopHeaderState, addProductType } from '../actions/ShopHeaderActions';
import CartHeader from './CartHeader'
import store from '../store';
import fetch from 'node-fetch';

export default class ShopHeader 
   extends Component<{}, ShopHeaderState> {
      // The url used to make product type API requests
      private productTypeUrl:string = 'http://' + process.env['REACT_APP_PUBLIC_URL'] + '/api/producttype';

      constructor(props:{}) {
         super(props);

         // Default state
         this.state = {
            count: 0,
            prodTypes: []
         };

         // Set up our update of the count variable from the store
         store.subscribe(() => {
            var state:ShopHeaderState = store.getState().shopHeader;
            this.setState({
               count: state.count? state.count: 0,
               prodTypes: state.prodTypes? state.prodTypes: []
            });
         });
      }

      componentDidMount() {
         fetch(this.productTypeUrl)
            .then( res => res.json() )
            .then( (json) => {
               store.dispatch(addProductType(json.data))
            });
      }

      render() {
         return (
            <span>
               <Navbar expand="lg">
                  <Navbar.Brand href="/">Retro Shop</Navbar.Brand>
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto">
                        {this.state.prodTypes.map( (pt, i) => (
                           <Nav.Link key={i} href={"/#/showroom/"+pt.id}>
                              {pt.prettyName}
                           </Nav.Link>
                        ) ) }
                     </Nav>
                  </Navbar.Collapse>

                  <Navbar.Text>
                     <CartHeader />
                  </Navbar.Text>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
               </Navbar>
            </span>
         );
      }
}