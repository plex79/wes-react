import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>inventoryyy</h2>
                {Object.keys(this.props.fishes).map((key)=> {
                    return <EditFishForm key={key} index={key} fish={this.props.fishes[key]} updateFish={this.props.updateFish} deleteFish={this.props.deleteFish} />
                })}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFish}>Load sample</button>
                
            </div>
        )
    }
}

export default Inventory;