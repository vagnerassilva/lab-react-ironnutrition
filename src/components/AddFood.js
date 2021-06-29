import React from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.min.css';


class AddFood extends React.Component {
    state = {
        newFood: [...foods],
        isValid: false,
        name: "",
    };
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleClick = () => {
        const clone = [...this.state.newFood];
        // clone.push(this.state.name, this.state.calories, this.state.image);
        clone.push(this.state.name);
        this.setState({ newFood: clone });
        console.log(clone);
    };
    addClick = () => {
        if (this.state.isValid === false) {
            this.setState({ isValid: !this.state.isValid });
        }
    }
    render() {
        return (
            <div>
                <h1>IronNutrition</h1>
                <div>
                    <button type="button" className="btn btn-primary m-2" onClick={this.addClick}>New Food</button>
                    {this.state.isValid && (
                        <form>
                            <input
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.name}
                                name="name"
                                placeholder="insert a new food"
                            ></input>
                            {/* <input
                type=“number”
                onChange={this.handleChange}
                value={this.state.calories}
                name=“calories”
                placeholder=“insert the calories”
              ></input>
              <input
                type=“url”
                onChange={this.handleChange}
                value={this.state.image}
                name=“image”
                placeholder=“insert a image of your food”
              ></input> */}
                        </form>
                    )}
                    <button type="button" className="btn btn-primary m-2" onClick={this.handleClick}> Refresh </button>
                </div >
            </div >
        );
    }
}
export default AddFood;