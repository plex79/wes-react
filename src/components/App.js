import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        //console.log(localStorageRef);
        if(localStorageRef) {
            this.setState({ order:JSON.parse(localStorageRef) });
        }

        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    // fishes = {
    //     fish1521036743859: {name: "aaa", price: 11111, status: "available", desc: "", image: ""},
    //     fish1521036760438: {name: "bbb", price: 22222, status: "available", desc: "", image: ""}
    //   }
    //   addFish = (fish) => {
    //           const data = Date.now();
    //           const fishesCopy = {...fishes};
    //           console.log(fish);
    //           console.log('--------------------');
    //           fishesCopy['fish'+data] = fish;
    //     console.log(fishesCopy);
        
    //   }
    //   addFish({name: "ccc", price: 33333, status: "available", desc: "", image: ""});


    addFish = (fish) => {
        const fishesCopy = {...this.state.fishes};
        //console.log(fish);
        //console.log(fishesCopy);
        fishesCopy[`fish${Date.now()}`] = fish;

        this.setState({
            fishes: fishesCopy
        })
    }

    updateFish = (key, updatedFish) => {
        //copy of current state
        const fishes = {...this.state.fishes};

        // update state
        fishes[key] = updatedFish;

        //set state
        this.setState({ fishes: fishes });
    }

    deleteFish = (key) => {
        //kopy of state
        const fishes = {...this.state.fishes};

        //update state
        fishes[key] = null;

        //update
        this.setState({ fishes:fishes });
    }

    loadSampleFish = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = (key) => {
        //copy of state
        const order = {...this.state.order};
        // console.log('order');
        // console.log(order);
        //add to order or update existing
        order[key] = order[key]+1 || 1;
        // console.log('key');
        // console.log(key);
        //update state
        this.setState({
            order: order
        })
    }

    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({
            order: order
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="coolsss" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map((key)=>{
                            //console.log(key);
                            return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
                        })}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
                <Inventory 
                    addFish={this.addFish} 
                    updateFish={this.updateFish} 
                    deleteFish={this.deleteFish}
                    loadSampleFish={this.loadSampleFish} 
                    fishes={this.state.fishes} 
                />    
            </div>
        )
    }
}

export default App;