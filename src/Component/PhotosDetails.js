import React from "react";

class PhotoDetails extends React.Component {
    render() {
        return (
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {
                                this.props.photoitems.map((elem, keyVal) => {
                                    const { id, name, image, category } = elem;
                                    return (
                                        <div key={keyVal} className="item1 col-12 col-md-6 col-lg-6 col-xl-3 my-5">
                                            <div className="row Item-inside">
                                                {/* image */}
                                                <div className="col-12 col-md-12 col-lg-12 img-div">
                                                    <img src={image} alt={name} className="img-fluid" style={{ width: '200px', height: '200px' }} />
                                                </div>
                                                <div className="col-12 text-center">
                                                    <p >{name}</p>
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

        )
    }
}

export default PhotoDetails;