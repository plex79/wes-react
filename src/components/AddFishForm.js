import React from 'react';

class AddFishForm extends React.Component {
    createFish = (e) => {
        e.preventDefault();
        //const input2 = e.target.elements.inp2.value.trim();
        const name = e.target.elements.name.value.trim();
        const price = e.target.elements.price.value.trim();
        const status = e.target.elements.status.value;
        const desc = e.target.elements.desc.value.trim();
        const image = e.target.elements.image.value.trim();
        
        const fish = {
            name: name,
            price: price,
            status: status,
            desc: desc,
            image: image
        }

        console.log(fish);
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="Name" />
                <input name="price" type="text" placeholder="Price" />
                <select name="status">
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea name="desc" placeholder="Desc"></textarea>
                <input name="image" type="text" placeholder="Image" />
                <button type="submit">Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;