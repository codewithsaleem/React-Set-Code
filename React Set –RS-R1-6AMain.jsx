import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./React Set –RS-R1-6ANavbar";
import Show from "./React Set –RS-R1-6AShow";
class MainComponent extends Component {
    state = {
        dmstcFlgt: [
            { origin: "New Delhi", dest: "Bengaluru", date: "Wed, 3 Oct", amount: 3590 },
            { origin: "New Delhi", dest: "Mumbai", date: "Sun, 13 Oct", amount: 2890 },
            { origin: "Hyderabad", dest: "Bengaluru", date: "Mon,30 Sep", amount: 2150 },
            { origin: "Mumbai", dest: "Pune", date: "Sun,6 Oct", amount: 1850 }
        ],

        holdyDest: [
            { img: "https://i.ibb.co/SQ7NSZT/hol1.png", place: "Australia", price: "177,990", days: "9 Nights / 10 Days" },
            { img: "https://i.ibb.co/Wxj50q1/hol2.png", place: "Europe", price: "119,990", days: "6 Nights / 7 Days" },
            { img: "https://i.ibb.co/VY3XNZr/hol3.png", place: "New Zealand", price: "199,990", days: "6 Nights / 7 Days" },
            { img: "https://i.ibb.co/j4NNc35/hol4.jpg", place: "Sri Lanka", price: "18,999", days: "4 Nights / 5 Days" },
            { img: "https://i.ibb.co/ct6076f/hol5.jpg", place: "Kerala", price: "12,999", days: "4 Nights / 5 Days" },
            { img: "https://i.ibb.co/vB0CpYK/hol6.jpg", place: "Char Dham", price: "22,999", days: "4 Nights / 5 Days" }
        ],
        locations: [
            { display: "NewDelhi,Delhi,India(3603hotels)", value: "NewDelhi" },
            { display: "Bengaluru,Karnataka,India(2781hotels)", value: "Bengaluru" },
            { display: "Mumbai,Maharashtra,India(3188hotels)", value: "Mumbai" },
            { display: "Pune,Maharashtra,India(1419hotels)", value: "Pune" },
            { display: "Jaipur,Rajasthan,India(1822hotels)", value: "Jaipur" },
            { display: "Goa,Goa,India(4125hotels)", value: "Goa" },
            { display: "Kolkata,WestBengal,India(2466hotels)", value: "Kolkata" },
            { display: "Bangkok,Thailand", value: "Bangkok" },
            { display: "Singapore,Singapore", value: "Singapore" }
        ]
    }

    render() {
        let { dmstcFlgt, holdyDest, locations } = this.state;
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path="/"
                        render={(props) => <Show {...props}
                            dmstcFlgt={dmstcFlgt}
                            holdyDest={holdyDest}
                            locations={locations}
                        />}
                    />
                    <Redirect from="" to="/" />
                </Switch>
            </React.Fragment>
        )
    }
}
export default MainComponent;