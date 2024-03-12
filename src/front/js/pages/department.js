import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Department = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const handleFavorite = (exhibit_museum_id) => {
		actions.addFavorite(exhibit_museum_id)
		console.log(store.user)
	}
	// console.log(params)
	// console.log(store.artPieces, params)
	
	// console.log(typeof item.department_museum_id.toString(), typeof params.thedepartment)
    let artPieces = store.artPieces.filter(item => (item.department_museum_id.toString()) === params.thedepartment)
	console.log('Art pieces here -> ', artPieces)
	return (
        <div>
            <p>this is the indiviual department page</p>
			
            <div> 
				{artPieces.map((item) => (
					<div className="rowExhibit">
						
					<Link to={`../../exhibits/single/${item.exhibit_museum_id}`}>
						<div className="art-poster">
							<img className="w-100" src={item.primary_image_small} onError= {(e)=>{e.target.src = fallBackURL}} alt = {item.exhibit_name} />
							<p>{item.exhibit_name} </p>
					
							<button className="department-button" 			
										onClick={() => {
											handleFavorite(item.exhibit_museum_id);
											}}>
												<i class="fas fa-heart" aria-hidden="true"></i>
							</button>
							
						</div>
					</Link>
					{/* <Link to={`single/${item.objectID}`}>
						<div className="art-poster">
							<img className="w-100" src={item.primaryImageSmall} onError= {(e)=>{e.target.src = fallBackURL}} alt = {item.objectName} />
							<p>{item.title} </p>
						</div>
					</Link>
					<Link to={`single/${item.objectID}`}>
						<div className="art-poster">
							<img className="w-100" src={item.primaryImageSmall} onError= {(e)=>{e.target.src = fallBackURL}} alt = {item.objectName} />
							<p>{item.title} </p>
						</div>
					</Link> */}
					</div>
						
					))}	
			</div>
            {/* {artPieces.map((item) => {
                <p>{item.displayName}</p>
            })} */}
        </div>
        
    )
}