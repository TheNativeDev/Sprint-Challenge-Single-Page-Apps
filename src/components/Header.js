import React from "react";
import {Jumbotron, Container} from 'reactstrap';
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-4">Rick & Morty Fan Page</h1>
          <p className="lead">This is a Lambda School student sprint project demonstrating retained knowledge.</p>
        </Container>
      </Jumbotron>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters/">Characters</Link>
      </nav>
    </div>
  );
}