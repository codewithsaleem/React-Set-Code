import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./React Set RS-R1-4Navbar";
import Show from "./React Set RS-R1-4Show";
import CarDetails from "./React Set RS-R1-4CarDetails";
class MainComponent extends Component {
    state = {
        cars: [
            { id: 1, price: 400000, year: 2015, miles: 25000, make: "Maruti", model: "Swift Dzire", location: "MG Road", city: "Gurgaon", postedOn: "2 Feb", image: "https://i.imgur.com/ySIJH9R.png", fuel: "Petrol", featured: true },
            { id: 2, price: 480000, year: 2012, miles: 75000, make: "Toyota", model: "Etios", location: "Sector 18", city: "Noida", postedOn: "5 Feb", image: "https://i.imgur.com/m6kBxtO.png", fuel: "Diesel", featured: true },
            { id: 3, price: 300000, year: 2013, miles: 55000, make: "Honda", model: "City", location: "Rohini", city: "Delhi", postedOn: "10 Feb", image: "https://i.imgur.com/dE5wGak.png", fuel: "Petrol", featured: true },
            { id: 4, price: 400000, year: 2015, miles: 25000, make: "Maruti", model: "Swift", location: "MG Road", city: "Gurgaon", postedOn: "2 Feb", image: "https://i.imgur.com/DBvxiVR.png", fuel: "Diesel", featured: false },
            { id: 5, price: 480000, year: 2012, miles: 75000, make: "Toyota", model: "Etios", location: "Sector 18", city: "Noida", postedOn: "5 Feb", image: "https://i.imgur.com/qbTLYvJ.png", fuel: "Diesel", featured: false },
            { id: 6, price: 300000, year: 2013, miles: 55000, make: "Honda", model: "City", location: "Rohini", city: "Delhi", postedOn: "10 Feb", image: "https://i.imgur.com/epcJiAL.png", fuel: "Petrol", featured: false }
        ],
        carData: [
            { id: 1, price: 400000, year: 2015, miles: 25000, make: "Maruti", model: "Swift Dzire", location: "MG Road", city: "Gurgaon", postedOn: "2 Feb", image: "https://i.imgur.com/ySIJH9R.png", fuel: "Petrol", featured: true },
            { id: 2, price: 480000, year: 2012, miles: 75000, make: "Toyota", model: "Etios", location: "Sector 18", city: "Noida", postedOn: "5 Feb", image: "https://i.imgur.com/m6kBxtO.png", fuel: "Diesel", featured: true },
            { id: 3, price: 300000, year: 2013, miles: 55000, make: "Honda", model: "City", location: "Rohini", city: "Delhi", postedOn: "10 Feb", image: "https://i.imgur.com/dE5wGak.png", fuel: "Petrol", featured: true },
            { id: 4, price: 400000, year: 2015, miles: 25000, make: "Maruti", model: "Swift", location: "MG Road", city: "Gurgaon", postedOn: "2 Feb", image: "https://i.imgur.com/DBvxiVR.png", fuel: "Diesel", featured: false },
            { id: 5, price: 480000, year: 2012, miles: 75000, make: "Toyota", model: "Etios", location: "Sector 18", city: "Noida", postedOn: "5 Feb", image: "https://i.imgur.com/qbTLYvJ.png", fuel: "Diesel", featured: false },
            { id: 6, price: 300000, year: 2013, miles: 55000, make: "Honda", model: "City", location: "Rohini", city: "Delhi", postedOn: "10 Feb", image: "https://i.imgur.com/epcJiAL.png", fuel: "Petrol", featured: false }
        ],
        carImages: [
            { id: 1, urls: ["https://i.imgur.com/wAUhZuq.png", "https://i.imgur.com/3cV0QeO.png", "https://i.imgur.com/JxiK8Dx.png"] },
            { id: 2, urls: ["https://i.imgur.com/ZKNTBiy.png", "https://i.imgur.com/POCCyQq.png", "https://i.imgur.com/ZgwHDpF.png"] },
            { id: 3, urls: ["https://i.imgur.com/c8fP7bm.png", "https://i.imgur.com/BxsXYBk.png", "https://i.imgur.com/tInES5t.png"] },
            { id: 4, urls: ["https://i.imgur.com/1SDyXHT.png", "https://i.imgur.com/DhRZ936.png", "https://i.imgur.com/uIgDEPX.png"] },
            { id: 5, urls: ["https://i.imgur.com/ODpHqUi.png", "https://i.imgur.com/QsVCEaX.png", "https://i.imgur.com/jYBoEJK.png"] },
            { id: 6, urls: ["https://i.imgur.com/RGLTmba.png", "https://i.imgur.com/fPDkePA.png", "https://i.imgur.com/AYU8WAp.png"] }
        ],
        carInfo: [
            { id: 1, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] },
            { id: 2, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] },
            { id: 3, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] },
            { id: 4, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] },
            { id: 5, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] },
            { id: 6, extraInfo: ["ADDITIONAL VEHICLE INFORMATION:", "Aux Compatibility: Yes", "Accidental: No", "Flood Affected: No", "ABS: Yes", "Insurance Type: Third Party", "Registration Place: KL", "Power steering: Yes", "Color: White", "Insurance: Yes", "Condition: Used", "No. of Owners: First", "Variant: Celerio VXi", "Exchange: Yes", "Type of Car: Hatchback", "AM/FM Radio: Yes", "USB Compatibility: Yes", "Transmission: Manual", "Air Conditioning: With Heater "] }
        ],
        carDetails: {}
    }
    handleCarDetails = (index) => {
        let s1 = { ...this.state };
        s1.carDetails = s1.cars[+index];
        this.setState(s1);
    }
    render() {
        let { cars, carDetails, carData, carImages, carInfo } = this.state;
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path="/carDetails"
                        render={(props) => <CarDetails {...props}
                            carDetails={carDetails}
                            carData={carData}
                            carImages={carImages}
                            carInfo={carInfo}
                        />}
                    />
                    <Route path="/"
                        render={(props) => <Show {...props}
                            cars={cars}
                            onCarDetails={this.handleCarDetails}
                        />}
                    />
                    <Redirect from="" to="/" />
                </Switch>
            </React.Fragment>
        )
    }
}
export default MainComponent;