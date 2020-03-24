import { Nav, Navbar } from 'react-bootstrap';
import React, { Component } from 'react';
import { ShopHeaderState, ShopHeaderProps, ShopHeaderAction } from '../types';
import store from '../store';
import fetch from 'node-fetch';

export default class ShopHeader 
   extends Component<ShopHeaderProps, ShopHeaderState> {

   constructor(props:ShopHeaderProps) {
      super(props);

      // Default state
      this.state = {
         count: 0,
         links: []
      };

      let storeState = store.getState();

      // Set up our update of the count variable from the store
      store.subscribe(() => {
         this.setState({
            count: storeState.count,
            links: storeState.links
         });
      });
   }

   componentDidMount() {
      // Test call to the product types end point
      fetch('http://shopv2.com/api/producttype')
         .then( res => res.json() )
         .then( json => console.log(json));
      
   }

   render() {
      return (
         <span>
            <Navbar expand="lg">
               <Navbar.Brand href="#home">Retro Shop</Navbar.Brand>
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                     {this.state.links.map( (url, i) => 
                        <Nav.Link key={i} href={"#/"+url.toString().toLowerCase()}>
                           {url}
                        </Nav.Link>
                     )}
                  </Nav>
               </Navbar.Collapse>

               <Navbar.Text>
                  Count: {this.state.count}
               </Navbar.Text>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
         </span>
      );
   }

   mapStateToProps(state:ShopHeaderState) {
      if( this.state.count ) {
         this.setState({count: state.count});
      }

      if( this.state.links ) {
         this.setState({links: state.links});
      }
   }
}