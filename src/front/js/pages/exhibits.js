import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import AuthComponent from "../component/auth";
import "../../styles/exhibit.css";

export const Exhibits = () => {
  let fallBackURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqX-q4R4VGGs1ArQpqZ-Y5deWIBVJ97KHOp4bkuQlmg&s";
  const { store, actions } = useContext(Context);
  const [artPieces, setArtPieces] = useState([]);
  useEffect(() => {
    setArtPieces(store.artPieces);
  }, []);

  const handleFavorite = (exhibit_museum_id) => {
    actions.addFavorite(exhibit_museum_id);
    console.log(store.user);
  };

  return (
    <AuthComponent>
      <div
        className="text-center justify-content-center d-flex flex-wrap w-100"
        id="main"
      >
        {artPieces.map((item, index) => (
          <div className="rowExhibit" key={index}>
            <div
              className="card"
              style={{
                width: "18rem",
                height: "420px",
                boxShadow: "10px 10px 20px 21px rgba(0, 0, 0, 0.2)",
                border: "15px solid black",
              }}
            >
              <Link to={`single/${item.exhibit_museum_id}`}>
                <img
                  src={item.primary_image_small}
                  className="card-img-top"
                  width="18rem"
                  height="320px"
                  onError={(e) => {
                    e.target.src = fallBackURL;
                  }}
                  alt={item.exhibit_name}
                />
              </Link>
              <div className="card-body overflow-auto mb-2">
                <p className="card-text" style={{ fontSize: "x-small" }}>
                  {item.exhibit_name}
                </p>
                <button
                  className="exhibit-button"
                  onClick={() => {
                    handleFavorite(item.exhibit_museum_id);
                  }}
                >
                  <i className="fas fa-heart" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AuthComponent>
  );
};
