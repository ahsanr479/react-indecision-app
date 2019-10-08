class VisibilityToggle extends React.Component {
    constructor(){
        super()
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }


    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility === false ? "Show details" : "Hide details"} </button>
                <p>{this.state.visibility === true ? "Here are your details" : ""}</p>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));