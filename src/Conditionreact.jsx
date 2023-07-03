import React from "react";

class Conditionreact extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
         text: '',
         inputText: '',
         status: 'edit',   

        }

        this.edit = this.edit.bind(this)
        this.save = this.save.bind(this)
        this.textChange = this.textChange.bind(this)
    }

    textChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    save = () => {
        this.setState({
            status: 'view',
            text: this.state.inputText
            
        })
    }

    edit = () => {
        this.setState({ status: 'edit' })
    }

    render() {
        if (this.state.status === 'view') {
            return (
                <>
                <div className="outer">
                <h1>My today's status</h1>
                <h1>{this.state.text}</h1>
                <div className="edit">
                <button onClick={this.edit} className="butt-color">Edit</button>
                </div>
                </div>
                </>
            )
        }else {
            return (
                <>
                 <div className="outer">
                <h1>Show your today's status</h1>
                <input type="text" value={this.state.inputText} onChange={this.textChange} className="myinput"/>
                <div className="save">
                <button onClick={this.save} className="savebutt">Save</button>
                </div>
                </div>
                </>
            )
        }
    }
}



export default Conditionreact