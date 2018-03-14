import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

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
        console.log(fish);
        console.log(fishesCopy);
        fishesCopy[`fish${Date.now()}`] = fish;

        this.setState({
            fishes: fishesCopy
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="coolsss" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />    
            </div>
        )
    }
}

export default App;