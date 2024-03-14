import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/single.css"

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(params.objectID);
  let exhibit = store.artPieces.find(
    (item) => item.exhibit_museum_id == params.objectID
  );

  return (
    <div className="m-auto" id="single-background" style={{width: "90%"}}>
      {/* make a for loop and create cards to reuse them in the department part */}
      {/* <p>This is the exhibit: {exhibit.exhibit_name} </p>
      <p>Artist: {exhibit.artist_name}</p>
      <p>Country of Origin: {exhibit.culture}</p>
      <p>Region: {exhibit.region}</p>
      <p>Date Created: {exhibit.object_date}</p> */}
      {/* <p>Department: {exhibit.department_museum_id}</p> */}
      <div className="card text-center mx-auto" id="single-background"
        style={{ maxWidth: "1000px", border: "15px solid black", boxShadow: "10px 10px 20px 21px rgba(0,0,0,0.2)", marginTop: "50px", marginBottom: "50px" }}
        >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={exhibit.primary_image_small}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="singlecard-body">
              <p className="singlecard-title m-auto" style={{backgroundColor: "white", width: "90%", border:"3px solid black"}}>
                Name: <span style={{fontWeight: "3px"}}>{exhibit.exhibit_name}</span>
                <br />
                Artist Name: {exhibit.artist_name}
                <p className="singlecard-text mt-50px">
                <small className="text-body-secondary">
                  Culture:{exhibit.culture}
                  <br />
                  Region:{exhibit.region}
                  <br />
                  Object Date:{exhibit.object_date}
                </small>
              </p>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
