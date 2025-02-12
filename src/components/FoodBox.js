import 'bulma/css/bulma.min.css';
import React from 'react';
import foods from './foods.json';


class FoodBox extends React.Component {
    render() {
        return (
            <div>
                {foods.map((foods, index) => {
                    return (
                        <div className="columns">
                            <div className="box column" id={index}>
                                <article className="media">
                                    <div className="media-left">
                                        <figure className="image is-64x64">
                                            <img src={foods.image} />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>{foods.name}</strong> <br />
                                                <small>{foods.calories} cal</small>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="media-right">
                                        <div className="field has-addons">
                                            <div className="control">
                                                <input className="input" type="number" value={foods.quantity} />
                                            </div>
                                            <div className="control">
                                                <button className="button is-info">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="column">

                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default FoodBox