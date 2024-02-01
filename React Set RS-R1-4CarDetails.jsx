import React, { Component } from "react";
import { Link } from "react-router-dom";
class CarDetails extends Component {
    render() {
        let { carDetails, carData, carImages, carInfo } = this.props;

        let fndIndex = carInfo.findIndex((ele) => ele.id === carDetails.id);
        let fnd = carInfo[fndIndex];
        console.log(fnd)
        return (
            <React.Fragment>
                <div className="container mt-2 text-center">
                    <img src="https://i.imgur.com/KMj5eG7.png" alt="" />
                </div>

                <nav className="bg-light mt-2" aria-label="Breadcrumb">
                    <ol className="breadcrumb ms-3">
                        <li className="breadcrumb-item">
                            <Link to="/home" className="breadcrumb-link text-decoration-none"><h6>Home</h6></Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/make" className="breadcrumb-link text-decoration-none"><h6>{carDetails.make}</h6></Link>
                        </li>
                        <li className="breadcrumb-item active">
                            <Link className="breadcrumb-link text-decoration-none text-dark" to="/model" aria-current="page"><h6>{carDetails.model}</h6></Link>
                        </li>
                    </ol>
                </nav>

                {/* Cars Details:---- */}
                <div className="row mt-2">
                    <div className="col-8">
                        <div className="card p-4 m-2">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {carData.map((ele, index) => (
                                        <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                            <img className="d-block" style={{ width: '100%', height: '35vw', objectFit: 'cover' }} src={ele.image} alt={`Slide ${index + 1}`} />
                                        </div>
                                    ))
                                    }
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card p-2 mr-2">
                            <div className="row">
                                <div className="col-6">
                                    <h2 className="card-title"> &#8377;{carDetails.price}</h2>
                                </div>
                                <div className="col-3"></div>
                                <div className="col-3">
                                    <i className="fa-solid fa-share-nodes mr-2"></i>
                                    <i className="fa-sharp fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <h4 className="card-text">{carDetails.year} - {carDetails.miles} km</h4>
                            <h4 className="card-text">{carDetails.make} {carDetails.model}, {carDetails.year}, {carDetails.fuel} </h4>
                            <div className="row">
                                <div className="col-6">
                                    <h4 className="card-text">{carDetails.location} {carDetails.city}</h4>
                                </div>
                                <div className="col-3"></div>
                                <div className="col-3">
                                    <h4 className="card-text">{carDetails.postedOn}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="card p-2 mr-2 mt-3">
                            <h3>Seller Description</h3>
                            <div className="row">
                                <div className="col-8">
                                    <img src="https://i.imgur.com/xLaJmx3.png" style={{ width: '50%', height: '10vw', objectFit: 'cover' }} alt="" />
                                    <span className="ms-4"><b>Mr.John</b></span>
                                </div>
                            </div>
                            <button className="form-control btn btn-primary mt-2">Chat with seller!</button>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="card p-2">
                        <h2>DETAILS</h2>
                        <div className="row">
                            <div className="col-3 text-secondary">
                                <h5>BRAND</h5>
                                <h5>YEAR</h5>
                                <h5>KM DRIVEN</h5>
                            </div>
                            <div className="col-3">
                                <h5>{carDetails.make}</h5>
                                <h5>{carDetails.year}</h5>
                                <h5>{carDetails.miles}</h5>
                            </div>
                            <div className="col-3 text-secondary">
                                <h5>MODEL</h5>
                                <h5>FUEL</h5>
                            </div>
                            <div className="col-3">
                                <h5>{carDetails.model}</h5>
                                <h5>{carDetails.fuel}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="card p-2">
                        <h2>DESCRIPTION</h2>
                        {fnd.extraInfo.map((ele) => (
                            <h5>{ele}</h5>
                        ))}
                    </div>
                </div>

            </React.Fragment >
        )
    }
}
export default CarDetails;