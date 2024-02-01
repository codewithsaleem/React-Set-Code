import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShowMsgs extends Component {
    state = {
        msgForm: { to: "", subject: "", text: "" },
        searchForm: { searchTxt: "", moveFolder:"" },
        checkForm: [],
        color: "",
        bgColor: -1,
    }
   
    handleSubmit = (e) => {
        e.preventDefault();
        const { msgs } = this.props;
        const { to, subject, text } = this.state.msgForm;

        // Find the maximum id in the current messages
        const maxId = Math.max(...msgs.map(msg => msg.id), 0);

        // Create a new message object
        const newMessage = {
            id: maxId + 1,
            sent: true,
            from: "jack@test.com",
            to: to,
            subject: subject,
            text: text,
            folder: "Sent"
        };
        console.log("sds", newMessage)

        // Update the parent component with the new message
        this.props.onSendMessage(newMessage);

        // Reset the message form and update the state
        this.setState({
            msgForm: { id: "", sent: true, from: "jack@test.com", to: "", subject: "", text: "", folder: "Sent" }
        });
    };

    handleClick = (num) => {
        let s1 = { ...this.state };
        switch (num) {
            case 1: s1.bgColor = 1; break;
            case 2: s1.bgColor = 2; break;
            case 3: s1.bgColor = 3; break;
            case 4: s1.bgColor = 4; break;
            case 5: s1.bgColor = 5; break;
            default: break;
        }
        this.props.onClickNum(num);
        this.setState(s1);
    }

    handleCompose = () => {
        this.setState({ bgColor: 6 });
    }


    handleChange = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state };
        if (input.type === "checkbox") {
            s1.checkForm = this.updateCBs(
                s1.checkForm,
                input.checked,
                input.value
            );
        } else {
            s1.msgForm[input.name] = input.value;
            s1.searchForm[input.name] = input.value;
        }
        this.setState(s1);
    };

    updateCBs(inpArr, checked, value) {
        let inpArr1 = [...inpArr];
        if (checked) inpArr1.push(value);
        else {
            let index = inpArr1.findIndex((ele) => ele === value);
            if (index >= 0) inpArr1.splice(index, 1);
        }
        return inpArr1;
    }

    render() {
        let { msgs, arr } = this.props;
        let { bgColor, checkForm } = this.state;
        let { searchTxt, moveFolder } = this.state.searchForm;

        if (moveFolder) {
            let fnd = arr.filter((ele) => checkForm.find((c1) => +c1 === ele.id));

            arr = arr.filter((ele) => !checkForm.find((c1) => +c1 === ele.id));
            msgs = msgs.filter((ele) => !checkForm.find((c1) => +c1 === ele.id));
            let fnd1 = fnd.map((ele) => ({ ...ele, folder: moveFolder }));
            console.log("fnd1", fnd1)

            msgs.push(...fnd1);  // Use spread operator to push elements individually
            console.log("msgs", msgs)

        }

        let { to, subject, text } = this.state.msgForm;
        let allMsgs = ["Inbox", "Sent", "Drafts", "Work", "Social"];

        // Count the number of messages in the "Sent" folder
        const sentlen = msgs.reduce((count, message) => {
            if (message.folder === "Sent") {
                return count + 1;
            }
            return count;
        }, 0);
        // Count the number of messages in the "Inbox" folder
        const inboxlen = msgs.reduce((count, message) => {
            if (message.folder === "Inbox") {
                return count + 1;
            }
            return count;
        }, 0);
        // Count the number of messages in the "Drafts" folder
        const draftslen = msgs.reduce((count, message) => {
            if (message.folder === "Drafts") {
                return count + 1;
            }
            return count;
        }, 0);
        // Count the number of messages in the "Work" folder
        const worklen = msgs.reduce((count, message) => {
            if (message.folder === "Work") {
                return count + 1;
            }
            return count;
        }, 0);
        // Count the number of messages in the "Social" folder
        const sociallen = msgs.reduce((count, message) => {
            if (message.folder === "Social") {
                return count + 1;
            }
            return count;
        }, 0);

        let filteredMessages = arr;
        if (searchTxt !== "") {
            filteredMessages = msgs.filter(message =>
                message.from.toLowerCase().includes(searchTxt.toLowerCase()) ||
                message.to.toLowerCase().includes(searchTxt.toLowerCase()) ||
                message.subject.toLowerCase().includes(searchTxt.toLowerCase()) ||
                message.text.toLowerCase().includes(searchTxt.toLowerCase())
            );
        }

        const tableRows = filteredMessages.map((ele, index) => (
            <tr key={index}>
                <td>
                    <input
                        type="checkbox"
                        name="checkForm"
                        value={ele.id}
                        checked={checkForm.find((ele) => ele.id)}
                        onChange={this.handleChange}
                    />

                </td>
                <td>{ele.from === "jack@test.com" ? "me" : ele.from}</td>
                <td>{ele.subject}</td>
                <td>{ele.text}</td>
            </tr>
        ));
        return (
            <div className="container mt-2">
                <div className="row">
                    <div className="col-2 mt-4">
                        <button className="btn btn-primary mt-4 mb-2" onClick={() => this.handleCompose()}>Compose</button>
                        <h6 onClick={() => this.handleClick(1)} className={bgColor === 1 ? 'bg-warning' : ''}>Inbox ({inboxlen})</h6>
                        <h6 onClick={() => this.handleClick(2)} className={bgColor === 2 ? 'bg-warning' : ''}>Sent ({sentlen})</h6>
                        <h6 onClick={() => this.handleClick(3)} className={bgColor === 3 ? 'bg-warning' : ''}>Drafts ({draftslen})</h6>
                        <h6 onClick={() => this.handleClick(4)} className={bgColor === 4 ? 'bg-warning' : ''}>Work ({worklen})</h6>
                        <h6 onClick={() => this.handleClick(5)} className={bgColor === 5 ? 'bg-warning' : ''}>Social ({sociallen})</h6>
                    </div>

                    <div className="col-10">
                        {/* <div className="row">
                            <div className="col-9">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="searchTxt"
                                        value={searchTxt}
                                        placeholder="Search..."
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div> */}

                        <div className="row">
                            {checkForm.length > 0 && (
                                <React.Fragment>
                                    <div className="col-3">
                                        <button className="btn btn-primary mb-2 mr-4" onClick={() => this.handleCompose()}>Delete</button>
                                    </div>
                                    <div className="col-3">
                                        <select className="form-control" name="moveFolder" value={moveFolder} onChange={this.handleChange}>
                                            <option value="">Move To</option>
                                            {allMsgs.map((ele, index) => (
                                                <option value={ele} key={index}>{ele}</option>
                                            ))}
                                        </select>
                                    </div>
                                </React.Fragment>
                            )}

                            {(searchTxt === "" && (bgColor === 1 || bgColor === 2 || bgColor === 3 || bgColor === 4 || bgColor === 5)) && (
                                <table className="table table-light">
                                    <tbody>{tableRows}</tbody>
                                </table>
                            )}

                            {searchTxt !== "" && (
                                <table className="table table-light">
                                    <tbody>{tableRows}</tbody>
                                </table>
                            )}


                            {bgColor === 6 && (
                                <form>
                                    <div className="form-group">
                                        <label>To</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="to"
                                            value={to}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="subject"
                                            value={subject}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Message</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="text"
                                            value={text}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-primary" onClick={this.handleSubmit}>Send</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShowMsgs;