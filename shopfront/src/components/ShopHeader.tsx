import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

// Need to move this into redux and fetch it from the server
const initialState = {
   links: [
      "Telegraphs",
      "Pagers",
      "Dialup Modems"
   ]
};

type State = {
   links: string[]
};

export default class ShopHeader extends React.Component<object, State> {
   readonly state: State = initialState;

   render() {
      return (
         <Navbar expand="lg">
            <Navbar.Brand href="#home">Retro Shop</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  {this.state.links.map( (url, i) =>   
                     <Nav.Link key={i} href={"#/"+url.toLowerCase()}>
                        {url}
                     </Nav.Link>
                  )}
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      );
   }
}
