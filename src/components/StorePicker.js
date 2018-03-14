import React from 'react';

class StorePicker extends React.Component {

    myInput = React.createRef();

    goToStore = (e) => {
        e.preventDefault();

        const storeName = this.myInput.value.value;
        //console.log(this.props);

        this.props.history.push(`/store/${storeName}`);
    }
    render(){
        return (
            <React.Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Enter S Store</h2>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        required 
                        placeholder="Store Name" 
                        ref={this.myInput}
                    />
                    <button type="submit">Visit Store</button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;