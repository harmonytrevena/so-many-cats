import React, { Component } from "react";
import { connect } from "react-redux";
import { addCat } from "../redux/actions";

// Component Styling

import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  :disabled {
    opacity: 0.5;
  }
  :hover {
    box-shadow: 0 0 10px grey;
  }

  ${props => props.primary && css`
    background: black;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "black"};
  background: whitesmoke;
  border: none;
  border-radius: 3px;
`;

const Select = styled.select`
  background: white;
  color: black;
  padding-left: 5px;
  font-size: 16px;
  border: none;
`;

// Functional Component Starts Here

class AddCat extends Component {
    state = {
        catName: "",
        activity: ""
    }

    _handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    _handleSubmit = e => {
        e.preventDefault();
        const { catName, activity } = this.state;
        this.props.addCat({ name: catName, activity });
        this.setState({
            catName: '',
            activity: ''
        })
    }

    render() {
        const { catName, activity } = this.state;
        return (
            <form onSubmit={this._handleSubmit}>
                <Container>
                    <Input type="text" name="catName" onChange={this._handleChange} value={catName} /> 
                    <Select name="activity" value={activity} onChange={this._handleChange}>
                        <option defaultValue>Choose an Activity</option>
                        <option value="eating">is eating</option>
                        <option value="napping">is napping</option>
                        <option value="playing">is playing</option>
                    </Select>
                    <Button primary type="submit">Submit</Button>
                </Container>
            </form>
        )
    }
}

export default connect(null, { addCat })(AddCat);
