import React, { Component, MouseEvent } from 'react';
import { Product } from '../types';
import CartSummary from './CartSummary'; 
import { CartState } from '../actions/CartActions';
import { Button, Modal } from 'react-bootstrap';
import store from '../store';

type CartProps = {};

export default class CartHeader extends Component<CartProps, CartState> {
    summaryTitle:string = 'Shopping Cart Items';

    constructor(props: CartProps) {
        super(props);

        this.state = {
            items: [],
            totalPrice: 0,
            showSummary: false
        };

        this.showSummary = this.showSummary.bind(this);
        this.hideSummary = this.hideSummary.bind(this);

        // Set our product type from the store
        store.subscribe(() => {
            let state:CartState = store.getState().cart;
            this.setState({items: state.items})
            this.setState({totalPrice: state.totalPrice});
        });
    }

    render() {
        return (
            <span className="CartHeader" onClick={()=>{this.showSummary();}}>
                <div className="fa fa-shopping-cart flip-horizontal" id="minicart">
                </div>
                {this.renderSummary(this.state.items)}
                <div>
                    <span>
                        <b>{this.state.items.length}</b> item(s)
                    </span>
                    <span className="cartprice">
                        ${this.state.totalPrice}
                    </span>
                </div>
            </span>
        );
    }

    renderSummary(products:Array<Product>) {
        return (
            <Modal id="productSummary" show={this.state.showSummary}
                    animation={false}>
                <Modal.Header>
                    <Modal.Title>{this.summaryTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CartSummary items={this.state.items} 
                                totalPrice={this.state.totalPrice} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" 
                            onClick={this.hideSummary}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    showSummary() {
        this.setState({showSummary: true});
    }

    hideSummary(e:MouseEvent) {
        e.stopPropagation();
        this.setState({showSummary: false});
    }
}