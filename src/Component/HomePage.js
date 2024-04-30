import React, { Component } from "react";
import Photos from "./../photos";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Photos
        };
    }

    filterItem = (categoryItem) => {
        const updatedItems = Photos.filter((curElement) => {
            return curElement.category === categoryItem;
        });
        this.setState({ items: updatedItems });
    }

    resetItems = () => {
        this.setState({ items: Photos });
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <h1 className="mt-5 text-center main-heading">Photo Gallery</h1>
                <hr />
                {/* Menu Bar */}
                <div className="menu-tabs container">
                    <div className="menu-tab d-flex justify-content-around">
                        <button className="btn btn-warning p-3 m-5" onClick={this.resetItems}>All</button>
                        <button className="btn btn-warning p-3 m-5" onClick={() => this.filterItem('Nature')}>Nature</button>
                        <button className="btn btn-warning p-3 m-5" onClick={() => this.filterItem('Car')}>Cars</button>
                        <button className="btn btn-warning p-3 m-5" onClick={() => this.filterItem('Beach')}>Beach</button>
                        <button className="btn btn-warning p-3 m-5" onClick={() => this.filterItem('Technology')}>Technology</button>
                    </div>
                </div>

                {/* photos */}
                <div className="menu-items container-fluid mt-5">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <div className="row my-5">
                                {
                                    items.map((elem, keyVal) => {
                                        const { id, name, image, category } = elem;
                                        return (
                                            <div key={keyVal} className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                                <div className="row Item-inside">
                                                    {/* image */}
                                                    <div className="col-12 col-md-12 col-lg-12 img-div">
                                                        <img src={image} alt={name} className="img-fluid" style={{ width: '100%', height: '100%' }} />
                                                    </div>
                                                    <div>
                                                        <p className="text-center">{name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
