import React, { Component } from "react";

class ShowTeam extends Component {
    state = {
        dropdownForm: { tms: "", mbr: "" },
        view: -1
    }

    handleChange = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.dropdownForm[input.name] = input.value;
        this.setState(s1);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { dropdownForm } = this.state;
        this.props.onSubmit(dropdownForm)
        this.setState({ dropdownForm: { tms: "", mbr: "" } })
    }

    handleSearchMember = () => {
        this.setState({ view: 1 })
    }
    render() {
        let { team, members, arr } = this.props;
        let { tms, mbr } = this.state.dropdownForm;
        let { view } = this.state;
        let fnd = members;
        if (arr.length > 0) {
            fnd = members.filter((member) => (
                !arr.some((team) => (
                    team.member1.includes(member)
                ))
            ));
        }

        let fnd1 = [];
        fnd1 = arr.map((ele) => (
            ele.reduce((acc, curr) => {
                if (!acc.includes(curr)) {
                    acc.push(curr);
                }
                return acc;
            }, [])
        ));

        return (
            <div className="container mt-3">
                <button className="btn btn-primary mr-2">Main View</button>
                <button className="btn btn-primary mr-2" onClick={() => this.handleSearchMember()}>Search Member</button>
                <button className="btn btn-primary mr-2">Member View</button>

                    <React.Fragment>
                        <div className="row mt-2">
                            <div className="col-3">
                                <select className="form-control" name="tms" value={tms} onChange={this.handleChange}>
                                    <option value="">Choose Team</option>
                                    {team.map((ele, index) => (
                                        <option value={ele} key={index}>{ele}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-3">
                                <select className="form-control" name="mbr" value={mbr} onChange={this.handleChange}>
                                    <option value="">Choose Member</option>
                                    {fnd.map((ele, index) => (
                                        <option value={ele} key={index}>{ele}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-primary mr-2" onClick={this.handleSubmit}>Add Member to Team</button>
                            </div>
                        </div>

                        <div className="row border bg-dark text-white mt-2">
                            <div className="col-3">Team</div>
                            <div className="col-3">Members</div>
                        </div>
                        {arr.map((ele, index) => (
                            <div className="row border p-1" key={index}>
                                <div className="col-3">{ele.teams}</div>
                                <div className="col-3">
                                    {ele.member1.map((member, memberIndex) => (
                                        <span className="bg-warning m-1" key={memberIndex}>{member}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
            
                {view === 1 && (
                    <React.Fragment>
                        <div className="row border bg-dark text-white mt-2">
                            <div className="col">Search for members</div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <select className="form-control" name="mbr" value={mbr} onChange={this.handleChange}>
                                    <option value="">Choose Member</option>
                                    {fnd1.map((ele, index) => (
                                        <option value={ele} key={index}>{ele}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        )
    }
}
export default ShowTeam;