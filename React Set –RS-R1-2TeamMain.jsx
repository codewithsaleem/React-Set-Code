import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ShowTeam from "./React Set –RS-R1-2Team";
class MainComponent extends Component {
    state = {
        team: ["Superman", "Wonder Woman", "Thor", "Captain America", "Spiderman"],
        members: ["Jack", "Anita", "Mary", "Steve", "Bob", "Dave", "Edwards", "Joe", "Felix", "Nate", "Peter", "Pam", "Alice", "Wendy", "Tim", "James", "Kathy", "Anna"],
        arr: [],
    }

    handleAddSubmit = (value) => {
        console.log(value)
        let s1 = { ...this.state };
        let teamIndex = s1.arr.findIndex((t1) => t1.teams === value.tms);

        if (teamIndex !== -1) {
            s1.arr[teamIndex].member1 = [...s1.arr[teamIndex].member1, value.mbr];
        } else {
            s1.arr.push({ teams: value.tms, member1: [value.mbr] });
        }
        this.setState(s1);
    }

    render() {
        let { team, members, arr } = this.state;
        return (
            <div className="container">
                <Switch>
                    <Route
                        path="/team"
                        render={(props) => <ShowTeam {...props}
                            team={team}
                            members={members}
                            onSubmit={this.handleAddSubmit}
                            arr={arr}
                        />}
                    />
        
                    <Redirect from="" to="/team" />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;