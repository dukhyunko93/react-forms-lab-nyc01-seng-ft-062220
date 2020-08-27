import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      maxChars: this.props.maxChars - event.target.value.length,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={event => this.handleChange(event)} id="message" value={this.state.message}/>
        <p>remaining characters: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
