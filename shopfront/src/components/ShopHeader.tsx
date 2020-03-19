import React from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';
import store from '../store';

type State = {count: number};

type Props = {};

export default class ShopHeader extends React.Component<Props, State> {

   // A list of strings to show in the menu
   links: string[]

   constructor(props:Props) {
      super(props);

      // Default state
      this.state = {count: 0};

      this.links = [
         "Telegraphs",
         "Pagers",
         "Dialup Modems"
      ];

      // Set up our update of the count variable from the store
      store.subscribe(() => {
         this.setState({ count: store.getState().count });
      });
   }

   render() {
      return (
         <span>
            <Navbar expand="lg">
               <Navbar.Brand href="#home">Retro Shop</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                     {this.links.map( (url, i) =>   
                        <Nav.Link key={i} href={"#/"+url.toLowerCase()}>
                           {url}
                        </Nav.Link>
                     )}
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
            <div>
               <span>Store Count: {this.state.count}</span>
               <br />
               <button onClick={this.increment}>Increment</button>
               <br />
               <button onClick={this.decrement}>Decrement</button>
            </div>
         </span>
      );
   }

   increment() {
      store.dispatch({type: 'INCREMENT'});
   }

   decrement() {
      store.dispatch({type: 'DECREMENT'});
   }

   mapStateToProps(state:State) {
      if( this.state.count ) {
         this.setState({count: state.count});
      }
   }
}
