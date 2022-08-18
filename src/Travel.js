import React from "react";

export default function Travel(props) {
  return (
    <div className="sectionTravel">
      <div className="container">
        <div className="sectionTravelDetail">
          <img src={props.image} alt="image1" />
          <div className="sectionTravelRight">
            <div className="location">
              <p className="country">{props.country}</p>
              <a href={props.googleMap}>View On Google Map</a>
            </div>
            <h1>{props.place}</h1>
            <h4>
              {props.startDate} - {props.endDate}
            </h4>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
