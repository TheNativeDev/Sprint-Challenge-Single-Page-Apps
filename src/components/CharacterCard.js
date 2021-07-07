import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Col } from "reactstrap";

export default function CharacterCard(props) {
  return (
      <Col xs="6" sm="4">
        <Card inverse>
          <CardImg width="100%" src={props.image} alt={props.name} />
          <CardImgOverlay className="card-img-overlay">
            <CardTitle>Name: {props.name}</CardTitle>
            <CardText>Species: {props.species}</CardText>
            <CardText>Gender: {props.gender}</CardText>
            <CardText>
              <small>
                Last known status: {props.status}
              </small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </Col>
  );
}