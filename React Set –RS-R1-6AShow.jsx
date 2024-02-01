import React, { Component } from "react";
import { Field, Form, FieldArray, Formik, ErrorMessage } from "formik";

class Show extends Component {
    state = {
        view: -1,
        isTravellersClassExpanded: false,
        flightColor: -1,
        deptDate: -1,
        flightForm: { depart: "", returns: "", departDate: "", returnDate: "", travelType: "" },
        adult: 0,
        child: 0,
        infant: 0,
        hotelForm: { loc: "" },
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { depart, returns, departDate, returnDate, travelType } = this.state.flightForm;
        let { adult, child, infant } = this.state;
        let total = adult + child + infant;

        alert(
            `From: ${depart}, 
            To: ${returns}, 
            Travel Type: ${travelType}, 
            Number of Travellers = ${total}( 
                ${adult}: Adult, ${child}: Child, ${infant}: Infant)`
        )
    }

    handleAdultInc = () => {
        this.setState({ adult: this.state.adult + 1 })
    }
    handleAdultDec = () => {
        this.setState({ adult: this.state.adult - 1 })
    }
    handleChildInc = () => {
        this.setState({ child: this.state.child + 1 })
    }
    handleChildDec = () => {
        this.setState({ child: this.state.child - 1 })
    }
    handleInfantInc = () => {
        this.setState({ infant: this.state.infant + 1 })
    }
    handleInfantDec = () => {
        this.setState({ infant: this.state.infant - 1 })
    }

    handleChange = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.flightForm[input.name] = input.value;
        s1.hotelForm[input.name] = input.value;
        this.setState(s1);
    }

    handleDepartureDate = () => {
        this.setState({ deptDate: 1 })
    }
    handleReturnDate = () => {
        this.setState({ deptDate: 2 })
    }

    handleHotels = () => {
        this.setState({ view: 2, flightColor: 2 })
    }
    handleFlights = () => {
        this.setState({ view: 1, flightColor: 1 })
    }

    toggleTravellersClass = () => {
        this.setState({ isTravellersClassExpanded: true })
    }

    render() {
        let { loc } = this.state.hotelForm;
        let { depart, returns, departDate, returnDate, travelType } = this.state.flightForm;
        let { dmstcFlgt, holdyDest, locations } = this.props;
        let { view, isTravellersClassExpanded, flightColor, deptDate, adult, child, infant } = this.state;
        let uniqueDest = dmstcFlgt.reduce((acc, curr) => {
            if (!acc.includes(curr.dest)) {
                return acc.concat(curr.dest);
            }
            return acc;
        }, []);
        console.log("ffffffffffff", travelType)
        //total traveller:-----
        let totalTraveller = adult + child + infant;

        // Create a new Date object for the current date
        const currentDate = new Date();

        // Define options for formatting the date
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long',
        };

        // Format the date using toLocaleString with the specified options
        const formattedDate = currentDate.toLocaleString('en-US', options);

        //radio button array:
        let allTravelerType = ["Economy", "Premium Economy", "Bussiness"];

        return (
            <div className="row">
                <div className="col-5 mt-3">
                    <div className="row text-center">
                        <div className="col-3" onClick={() => this.handleFlights()}>
                            <span className={flightColor === 1 ? 'fa-stack fa-2x text-danger' : 'fa-stack fa-2x'}>
                                <i className="fa-solid fa-circle fa-stack-2x"></i>
                                <i className="fa-solid fa-flight fa-plane fa-stack-1x fa-inverse"></i>
                            </span>
                            <h5>Flights</h5>
                        </div>
                        <div className="col-3" onClick={() => this.handleHotels()}>
                            <span className={flightColor === 2 ? 'fa-stack fa-2x text-danger' : 'fa-stack fa-2x'}>
                                <i className="fa-solid fa-circle fa-stack-2x"></i>
                                <i className="fa-solid fa-bed fa-stack-1x fa-inverse"></i>
                            </span>
                            <h5>Hotels</h5>
                        </div>
                        <div className="col-3">
                            <span className="fa-stack fa-2x">
                                <i className="fa-solid fa-circle fa-stack-2x"></i>
                                <i className="fa-solid fa-bus fa-stack-1x fa-inverse"></i>
                            </span>
                            <h5>Buses</h5>
                        </div>
                        <div className="col-3">
                            <span className="fa-stack fa-2x">
                                <i className="fa-solid fa-circle fa-stack-2x"></i>
                                <i className="fa-solid fa-taxi fa-stack-1x fa-inverse"></i>
                            </span>
                            <h5>Taxis</h5>
                        </div>
                    </div>


                    {/* Flight Details Form: -------------------------------------------------------------------------------------------- */}
                    {view === 1 && (
                        <React.Fragment>
                            <div className="row">
                                <h2 className="text-center">Flights</h2>
                                <div className="form-group text-center">
                                    <button className="btn btn-light btn-sm btn-outline-primary mr-2">One Way</button>
                                    <button className="btn btn-primary btn-sm mr-2">Return</button>
                                </div>
                            </div>

                            <div className="row ms-2">
                                <div className="col-5">
                                    <div className="form-group">
                                        <label><b>Depart From</b></label>
                                        <select className="form-control" name="depart" value={depart} onChange={this.handleChange}>
                                            <option value="">Select Dest</option>
                                            {uniqueDest.map((ele) => (
                                                <option value={ele} key={ele}>{ele}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <span class="fa-stack fa-1x text-success mt-4 p-2">
                                        <i class="fa-solid fa-circle fa-stack-2x"></i>
                                        <i class="fa-solid fa-arrow-right fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                                <div className="col-5">
                                    <div className="form-group">
                                        <label><b>Going To</b></label>
                                        <select className="form-control" name="returns" value={returns} onChange={this.handleChange}>
                                            <option value="">Select Dest</option>
                                            {uniqueDest.map((ele) => (
                                                <option value={ele} key={ele}>{ele}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className="row ms-2">
                                <div className="col-6">
                                    <b onClick={() => this.handleDepartureDate()}>Departure Date</b> <br />
                                    <h5>{formattedDate}</h5>

                                    {deptDate === 1 && (
                                        <div className="container">
                                            <div className="row">
                                                <div className="span12">
                                                    <table className="table-condensed table-bordered table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th colspan="7">
                                                                    <span class="btn-group">
                                                                        <a className="btn"><i class="fa-solid fa-arrow-left"></i></a>
                                                                        <a className="btn active">February 2012</a>
                                                                        <a className="btn"><i class="fa-solid fa-arrow-right"></i></a>
                                                                    </span>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th>Su</th>
                                                                <th>Mo</th>
                                                                <th>Tu</th>
                                                                <th>We</th>
                                                                <th>Th</th>
                                                                <th>Fr</th>
                                                                <th>Sa</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="muted">29</td>
                                                                <td className="muted">30</td>
                                                                <td className="muted">31</td>
                                                                <td>1</td>
                                                                <td>2</td>
                                                                <td>3</td>
                                                                <td>4</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>6</td>
                                                                <td>7</td>
                                                                <td>8</td>
                                                                <td>9</td>
                                                                <td>10</td>
                                                                <td>11</td>
                                                            </tr>
                                                            <tr>
                                                                <td>12</td>
                                                                <td>13</td>
                                                                <td>14</td>
                                                                <td>15</td>
                                                                <td>16</td>
                                                                <td>17</td>
                                                                <td>18</td>
                                                            </tr>
                                                            <tr>
                                                                <td>19</td>
                                                                <td className="btn-primary"><strong>20</strong></td>
                                                                <td>21</td>
                                                                <td>22</td>
                                                                <td>23</td>
                                                                <td>24</td>
                                                                <td>25</td>
                                                            </tr>
                                                            <tr>
                                                                <td>26</td>
                                                                <td>27</td>
                                                                <td>28</td>
                                                                <td>29</td>
                                                                <td className="muted">1</td>
                                                                <td className="muted">2</td>
                                                                <td className="muted">3</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="col-6">
                                    <b onClick={() => this.handleReturnDate()}>Departure Date</b> <br />
                                    <b><a href="" style={{ textDecoration: 'none' }}>Book round trip to save extra</a></b>

                                    {deptDate === 2 && (
                                        <div className="container">
                                            <div className="row">
                                                <div className="span12">
                                                    <table className="table-condensed table-bordered table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th colspan="7">
                                                                    <span class="btn-group">
                                                                        <a className="btn"><i class="fa-solid fa-arrow-left"></i></a>
                                                                        <a className="btn active">February 2012</a>
                                                                        <a className="btn"><i class="fa-solid fa-arrow-right"></i></a>
                                                                    </span>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th>Su</th>
                                                                <th>Mo</th>
                                                                <th>Tu</th>
                                                                <th>We</th>
                                                                <th>Th</th>
                                                                <th>Fr</th>
                                                                <th>Sa</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="muted">29</td>
                                                                <td className="muted">30</td>
                                                                <td className="muted">31</td>
                                                                <td>1</td>
                                                                <td>2</td>
                                                                <td>3</td>
                                                                <td>4</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>6</td>
                                                                <td>7</td>
                                                                <td>8</td>
                                                                <td>9</td>
                                                                <td>10</td>
                                                                <td>11</td>
                                                            </tr>
                                                            <tr>
                                                                <td>12</td>
                                                                <td>13</td>
                                                                <td>14</td>
                                                                <td>15</td>
                                                                <td>16</td>
                                                                <td>17</td>
                                                                <td>18</td>
                                                            </tr>
                                                            <tr>
                                                                <td>19</td>
                                                                <td className="btn-primary"><strong>20</strong></td>
                                                                <td>21</td>
                                                                <td>22</td>
                                                                <td>23</td>
                                                                <td>24</td>
                                                                <td>25</td>
                                                            </tr>
                                                            <tr>
                                                                <td>26</td>
                                                                <td>27</td>
                                                                <td>28</td>
                                                                <td>29</td>
                                                                <td className="muted">1</td>
                                                                <td className="muted">2</td>
                                                                <td className="muted">3</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <hr />

                            {/* Traveller Details */}
                            <div className="row ms-2">
                                <div className="col-6">
                                    <b>Travellers class</b> <br />
                                    <h5>{totalTraveller} Traveller, {travelType}</h5>
                                </div>
                                <div className="col-4"></div>
                                <div className="col-2">
                                    <span
                                        className="fa-stack fa-1x text-secondary mt-2 p-2"
                                        style={{ cursor: "pointer" }}
                                        onClick={this.toggleTravellersClass}
                                    >
                                        <i className={`fa-solid fa-stack-2x ${isTravellersClassExpanded === true ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                    </span>
                                </div>
                            </div>

                            {isTravellersClassExpanded === true && (
                                <React.Fragment>
                                    <div className="row mt-2 ms-2">
                                        <div className="col-4">
                                            <b>Adult</b> <br />
                                            <button className="btn bg-white btn-outline-dark" onClick={() => this.handleAdultDec()}>-</button>
                                            <button className="btn btn-light btn-outline-dark">{adult}</button>
                                            <button className="btn bg-white btn-outline-dark" onClick={() => this.handleAdultInc()}>+</button>
                                        </div>
                                        <div className="col-4">
                                            <b>Child</b> (2-12 yrs) <br />
                                            <button className="btn bg-white btn-outline-dark" onClick={() => this.handleChildDec()}>-</button>
                                            <button className="btn btn-light btn-outline-dark">{child}</button>
                                            <button className="btn bg-white btn-outline-dark" onClick={() => this.handleChildInc()}>+</button>
                                        </div>
                                        <div className="col-4">
                                            <b>Infant</b> (Below 2 yrs) <br />
                                            <button className="btn bg-white btn btn-outline-dark" onClick={() => this.handleInfantDec()}>-</button>
                                            <button className="btn btn-light btn btn-outline-dark">{infant}</button>
                                            <button className="btn bg-white btn btn-outline-dark" onClick={() => this.handleInfantInc()}>+</button>
                                        </div>
                                    </div>
                                    <div className="row ms-2 mt-3">
                                        <div className="col-6">
                                            {allTravelerType.map((ele, index) => (
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="travelType"
                                                        value={ele}
                                                        checked={travelType === ele}
                                                        onChange={this.handleChange}
                                                    />
                                                    <label className="form-check-label">
                                                        <b>{ele}</b>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </React.Fragment>
                            )}
                            <hr />

                            <div className="row">
                                <div className="col-6"></div>
                                <div className="col-6">
                                    <button className="bnt btn-primary btn-lg" onClick={this.handleSubmit}>Search Flights <i class="fa-solid fa-arrow-right ms-2"></i></button>
                                </div>
                            </div>
                        </React.Fragment>
                    )}







                    {/* Hotels Details Form:------------------------------------------------------------------------------------------------ */}
                    {view === 2 && (
                        <React.Fragment>
                            <div className="container">
                                <h2 className="text-center">Hotels</h2>

                                <div className="form-group">
                                    <label><b>Select City, Location, Hotel Name</b></label>
                                    <select className="form-control" name="loc" value={loc} onChange={this.handleChange}>
                                        <option value="">Select Location</option>
                                        {locations.map((ele, index) => (
                                            <option value={ele.display} key={index}>{ele.display}</option>
                                        ))}
                                    </select>
                                </div>
                                <hr />

                                <div className="row ms-2">
                                    <div className="col-6">
                                        <b onClick={() => this.handleDepartureDate()}>Check-in Date</b> <br />
                                        <h5>{formattedDate}</h5>

                                        {deptDate === 1 && (
                                            <div className="container">
                                                <div className="row">
                                                    <div className="span12">
                                                        <table className="table-condensed table-bordered table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th colspan="7">
                                                                        <span class="btn-group">
                                                                            <a className="btn"><i class="fa-solid fa-arrow-left"></i></a>
                                                                            <a className="btn active">February 2012</a>
                                                                            <a className="btn"><i class="fa-solid fa-arrow-right"></i></a>
                                                                        </span>
                                                                    </th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Su</th>
                                                                    <th>Mo</th>
                                                                    <th>Tu</th>
                                                                    <th>We</th>
                                                                    <th>Th</th>
                                                                    <th>Fr</th>
                                                                    <th>Sa</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="muted">29</td>
                                                                    <td className="muted">30</td>
                                                                    <td className="muted">31</td>
                                                                    <td>1</td>
                                                                    <td>2</td>
                                                                    <td>3</td>
                                                                    <td>4</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>6</td>
                                                                    <td>7</td>
                                                                    <td>8</td>
                                                                    <td>9</td>
                                                                    <td>10</td>
                                                                    <td>11</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>12</td>
                                                                    <td>13</td>
                                                                    <td>14</td>
                                                                    <td>15</td>
                                                                    <td>16</td>
                                                                    <td>17</td>
                                                                    <td>18</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>19</td>
                                                                    <td className="btn-primary"><strong>20</strong></td>
                                                                    <td>21</td>
                                                                    <td>22</td>
                                                                    <td>23</td>
                                                                    <td>24</td>
                                                                    <td>25</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>26</td>
                                                                    <td>27</td>
                                                                    <td>28</td>
                                                                    <td>29</td>
                                                                    <td className="muted">1</td>
                                                                    <td className="muted">2</td>
                                                                    <td className="muted">3</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-6">
                                        <b onClick={() => this.handleReturnDate()}>Check-out Date</b> <br />
                                        <h5>{formattedDate}</h5>

                                        {deptDate === 2 && (
                                            <div className="container">
                                                <div className="row">
                                                    <div className="span12">
                                                        <table className="table-condensed table-bordered table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th colspan="7">
                                                                        <span class="btn-group">
                                                                            <a className="btn"><i class="fa-solid fa-arrow-left"></i></a>
                                                                            <a className="btn active">February 2012</a>
                                                                            <a className="btn"><i class="fa-solid fa-arrow-right"></i></a>
                                                                        </span>
                                                                    </th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Su</th>
                                                                    <th>Mo</th>
                                                                    <th>Tu</th>
                                                                    <th>We</th>
                                                                    <th>Th</th>
                                                                    <th>Fr</th>
                                                                    <th>Sa</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="muted">29</td>
                                                                    <td className="muted">30</td>
                                                                    <td className="muted">31</td>
                                                                    <td>1</td>
                                                                    <td>2</td>
                                                                    <td>3</td>
                                                                    <td>4</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>6</td>
                                                                    <td>7</td>
                                                                    <td>8</td>
                                                                    <td>9</td>
                                                                    <td>10</td>
                                                                    <td>11</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>12</td>
                                                                    <td>13</td>
                                                                    <td>14</td>
                                                                    <td>15</td>
                                                                    <td>16</td>
                                                                    <td>17</td>
                                                                    <td>18</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>19</td>
                                                                    <td className="btn-primary"><strong>20</strong></td>
                                                                    <td>21</td>
                                                                    <td>22</td>
                                                                    <td>23</td>
                                                                    <td>24</td>
                                                                    <td>25</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>26</td>
                                                                    <td>27</td>
                                                                    <td>28</td>
                                                                    <td>29</td>
                                                                    <td className="muted">1</td>
                                                                    <td className="muted">2</td>
                                                                    <td className="muted">3</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <hr />

                                {/* Traveller Details */}
                                <div className="row ms-2">
                                    <div className="col-6">
                                        <b>Traveller and Hotel</b> <br />
                                        <h5>{totalTraveller} Travellers, 1 Room</h5>
                                    </div>
                                    <div className="col-4"></div>
                                    <div className="col-2">
                                        <span
                                            className="fa-stack fa-1x text-secondary mt-2 p-2"
                                            style={{ cursor: "pointer" }}
                                            onClick={this.toggleTravellersClass}
                                        >
                                            <i className={`fa-solid fa-stack-2x ${isTravellersClassExpanded === true ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                        </span>
                                    </div>
                                </div>

                                {isTravellersClassExpanded === true && (
                                    <React.Fragment>
                                        <div className="row mt-2 ms-2">
                                            <h5>Room 1:</h5>
                                            <div className="col-2 mt-4">
                                                <i class="fa-solid fa-user mr-4"></i>
                                            </div>
                                            <div className="col-5">
                                                <b>Adult</b> (Above 12 years) <br />
                                                <button className="btn bg-white btn-outline-dark" onClick={() => this.handleAdultDec()}>-</button>
                                                <button className="btn btn-light btn-outline-dark">{adult}</button>
                                                <button className="btn bg-white btn-outline-dark" onClick={() => this.handleAdultInc()}>+</button>
                                            </div>
                                            <div className="col-5">
                                                <b>Child</b> (Below 12 years) <br />
                                                <button className="btn bg-white btn-outline-dark" onClick={() => this.handleChildDec()}>-</button>
                                                <button className="btn btn-light btn-outline-dark">{child}</button>
                                                <button className="btn bg-white btn-outline-dark" onClick={() => this.handleChildInc()}>+</button>
                                            </div>
                                        </div>

                                        <div className="row mt-2 ms-2">
                                            <div className="form-group">
                                                <button className="btn btn-light btn-sm btn-outline-danger text-danger mr-2"><b>Add Room</b></button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )}
                                <hr />

                                <div className="row">
                                    <div className="col-6"></div>
                                    <div className="col-6">
                                        <button className="bnt btn-primary btn-lg" onClick={this.handleSubmit}>Search Flights <i class="fa-solid fa-arrow-right ms-2"></i></button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </div>

















                {/* Col-7 elements showing:--------------------------------------------------------------------------------------------- */}
                <div className="col-7 bg-light">
                    <h3 className="text-secondary">Flight Discounts for you</h3>

                    <div className="row">
                        <div className="col-4"><img src="https://i.ibb.co/qdc2z7Z/ad01.png" alt="" /></div>
                        <div className="col-4"><img src="https://i.ibb.co/yp0bbgz/ad02.png" alt="" /></div>
                        <div className="col-4 mb-3"><img src="https://i.ibb.co/DkrVrkY/ad03.png" alt="" /></div>
                    </div>

                    <img src="https://i.ibb.co/Rc9qLyT/banner1.jpg" alt="" />

                    <h4 className="text-secondary mt-3">Popular Domestic Flight Routes</h4>
                    <div className="row text-center mr-2">
                        {dmstcFlgt.map((ele, index) => (
                            <div className="col-3">
                                <div className="card">
                                    <b className="mt-3">{ele.origin}</b>
                                    {ele.date} <br /> <br />
                                    <b>{ele.dest}</b>
                                    Starting from
                                    <div className="form-group">
                                        <button className="btn btn-sm btn-warning mt-2"><b>Rs. {ele.amount}</b></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h4 className="text-secondary mt-3">Popular Holiday Destinations</h4>
                    <div className="row text-center mr-2">
                        {holdyDest.map((ele, index) => (
                            <div className="col-6 mb-2">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-2 mt-2 ms-2">
                                            <img src={ele.img} alt="" />
                                        </div>
                                        <div className="col-8">
                                            <b>{ele.place}</b> <br />
                                            <b className="text-danger">Rs. {ele.price} </b>per person <br />
                                            {ele.days}
                                        </div>
                                        <div className="col-1 mt-4"><i class="fa-solid fa-arrow-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default Show;