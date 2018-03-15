import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

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

    loadSampleFish = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = (key) => {
        //copy of state
        const order = {...this.state.order};
        console.log('order');
        console.log(order);
        //add to order or update existing
        order[key] = order[key]+1 || 1;
        console.log('key');
        console.log(key);
        //update state
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
                <Order />
                <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish} />    
            </div>
        )
    }
}

export default App;