import React from 'react';

class StorePicker extends React.Component {

    myInput = React.createRef();

    goToStore = (e) => {
        e.preventDefault();

        console.log(this.myInput.value.value);

        const input2 = e.target.elements.inp2.value.trim();
        console.log(input2);
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
                    <input 
                        type="text" 
                        name="inp2" 
                        id="" 
                        required 
                        placeholder="Store address" 
                    />
                    <button type="submit">Visit Store</button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker;