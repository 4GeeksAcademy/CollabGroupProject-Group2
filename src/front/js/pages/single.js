import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let exhibit = store.artPieces.find(
		(item) => item.exhibit_museum_id == params.objectID
	  );

	return (
		<div>
			{/* make a for loop and create cards to reuse them in the department part */}
			<p>This is the exhibit: {exhibit.exhibit_name}  </p>
			<p>Artist: {exhibit.artist_name}</p>
			<p>Country of Origin: {exhibit.culture}</p>
			<p>Region: {exhibit.region}</p>
			<p>Date Created: {exhibit.object_date}</p>
			{/* <p>Department: {exhibit.department_museum_id}</p> */}
		</div>
	);
};


