import React, { Component } from "react";
import Photos from "./../photos";
import PhotoDetails from "./PhotosDetails";
import Category from "./Category";

const allCategoryValues = () => [...new Set(Photos.map((currElement) => currElement.category)), "All"];

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Photos,
            catItems: allCategoryValues()
        };
    }

    categoryItems = () => {
        this.setState({ catItems: allCategoryValues() }); 
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
                <div className="bg-dark text-white vh-20 d-flex justify-content-center align-items-center">
                    <h1 className="mt-5 text-center main-heading">Photo Gallery</h1>
                </div>
                {/* Category  */}
                <Category filterItem={this.filterItem} resetItems={this.resetItems} catItems={this.state.catItems} />

                {/* photos */}
                <PhotoDetails photoitems={items} />
            </div>
        );
    }
}

export default HomePage;
