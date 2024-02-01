import React, { Component } from "react";
class Show extends Component {
    state = {
        view: -1,
    }
    handleListView = () => {
        this.setState({ view: 1 })
    }
    handleGridView = () => {
        this.setState({ view: 2 })
    }
    handleDesktopView = () => {
        this.setState({ view: -1 })
    }
    handleClickImage = (index) => {
        this.props.onCarDetails(index);
        this.props.history.push("/carDetails")
    }
    render() {
        let { cars } = this.props;
        let { view } = this.state;

        return (
            <React.Fragment>
                <div className="container mt-2 mb-2 text-center">
                    <div className="row">
                        <div className="">
                            <img src="https://i.imgur.com/DhHqrQQ.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <div className="row border m-1">
                            <div className="col-2"></div>
                            <div className="col-2 mt-2"><h4>VIEW</h4></div>
                            <div className="col-2 mt-2" onClick={() => this.handleListView()}><h4><i class="fa-solid fa-list"></i></h4></div>
                            <div className="col-2 mt-2" onClick={() => this.handleGridView()}><h4><i class="fa-solid fa-th"></i></h4></div>
                            <div className="col-2 mt-2" onClick={() => this.handleDesktopView()}><h4><i class="fa-solid fa-desktop"></i></h4></div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>
                {/* List View:------ */}
                {view === 1 && (
                    cars.map((ele, index) => (
                        <div className="row mt-2">
                            <div className="col-12">
                                <div className="card">
                                    <div className="row p-4">
                                        <div className="col-4" onClick={() => this.handleClickImage(index)}>
                                            <img className="card-img-top p-2" style={{ width: '100%', height: '15vw', objectFit: 'cover' }} src={ele.image} alt="Card image cap" />
                                        </div>
                                        <div className="col-1"></div>
                                        <div className="col-7 mt-4">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h2 className="card-title"> &#8377;{ele.price}</h2>
                                                </div>
                                                <div className="col-3"></div>
                                                <div className="col-3">
                                                    <i className="fa-solid fa-share-nodes mr-2"></i>
                                                    <i className="fa-sharp fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                            <h4 className="card-text">{ele.year} - {ele.miles} km</h4>
                                            <h4 className="card-text">{ele.make} {ele.model}, {ele.year}, {ele.fuel} </h4>
                                            <div className="row">
                                                <div className="col-6">
                                                    <h4 className="card-text">{ele.location} {ele.city}</h4>
                                                </div>
                                                <div className="col-3"></div>
                                                <div className="col-3">
                                                    <h4 className="card-text">{ele.postedOn}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}

                {/* Desktop View:---- */}
                {view === -1 && (
                    <div className="row mt-2">
                        {cars.map((ele, index) => (
                            <div className="col-4">
                                <div className="card">
                                    <div className="" onClick={() => this.handleClickImage(index)}>
                                        <img className="card-img-top p-2" style={{ width: '100%', height: '15vw', objectFit: 'cover' }} src={ele.image} alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"> &#8377;{ele.price}</h5>
                                        <p className="card-text">{ele.year} - {ele.miles} km</p>
                                        <p className="card-text">{ele.make} {ele.model}, {ele.year}, {ele.fuel} </p>
                                        <div className="row">
                                            <div className="col-6">
                                                <p className="card-text">{ele.location} {ele.city}</p>
                                            </div>
                                            <div className="col-3"></div>
                                            <div className="col-3">
                                                <p className="card-text">{ele.postedOn}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Grid View:----- */}
                {view === 2 && (
                    <div className="container">
                        {cars.map((ele, index) => (
                            <div className="row mt-2">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-3"></div>
                                        <div className="col-6">
                                            <div className="col" onClick={() => this.handleClickImage(index)}>
                                                <img className="card-img-top p-2" style={{ width: '100%', height: '30vw', objectFit: 'cover' }} src={ele.image} alt="Card image cap" />
                                            </div>
                                        </div>
                                        <div className="col-3"></div>
                                    </div>
                                    <div className="col mt-4">
                                        <div className="row">
                                            <div className="col-6">
                                                <h2 className="card-title"> &#8377;{ele.price}</h2>
                                            </div>
                                            <div className="col-3"></div>
                                            <div className="col-3">
                                                <i className="fa-solid fa-share-nodes mr-2"></i>
                                                <i className="fa-sharp fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <h4 className="card-text">{ele.year} - {ele.miles} km</h4>
                                        <h4 className="card-text">{ele.make} {ele.model}, {ele.year}, {ele.fuel} </h4>
                                        <div className="row">
                                            <div className="col-6">
                                                <h4 className="card-text">{ele.location} {ele.city}</h4>
                                            </div>
                                            <div className="col-3"></div>
                                            <div className="col-3">
                                                <h4 className="card-text">{ele.postedOn}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </React.Fragment>
        )
    }
}
export default Show;