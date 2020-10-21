import React from "react";
import { connect } from "react-redux";
import { setActivity } from "../redux/actions";

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

const Ul = styled.ul`
    list-style-type: none;
`;

// Functional Component Starts Here

const CatDetail = ({ cat, setActivity }) => {
  const { catId, name, activity } = cat;
  return (
    <Container>
        <Ul>
            <li>
                {name} is currently {activity}. What's next?
                <br />
                <Button onClick={() => setActivity({ id: catId, activity: "eating" })}>
                    Eating
                </Button>
                <Button onClick={() => setActivity({ id: catId, activity: "playing" })}>
                    Playing
                </Button>
                <Button onClick={() => setActivity({ id: catId, activity: "napping" })}>
                    Napping
                </Button>
            </li>
            <br />
        </Ul>
    </Container>
  );
};

export default connect(null, { setActivity })(CatDetail);