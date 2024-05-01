import React from "react";

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeButton: ""
        };
    }

    handleButtonClick = (category) => {
        this.setState({ activeButton: category });
        if (category === "All") {
            this.props.resetItems();
        } else {
            this.props.filterItem(category);
        }
    }

    render() {
        const { activeButton } = this.state;
        return (
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    {this.props.catItems.map((currElem) => {
                        return <button key={currElem} className={`btn btn-warning p-3 m-5 
                        ${activeButton === currElem ? 'btn-danger' : ''}`} onClick={() => this.handleButtonClick(currElem)}>
                            {currElem}</button>
                    }
                    )}
                </div>
            </div>
        );
    }
}

export default Category;
