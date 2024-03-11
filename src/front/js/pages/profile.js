import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/profile.css"

export const Profile = () => {
    const { store, actions } = useContext(Context);
    useEffect(()=>{
        actions.usersFavoritePage()
        store.user.favorites
    },[])
    const handleDeleteFavorite = (exhibit_museum_id) => {
        actions.deleteFavorite(exhibit_museum_id)

    }
    return (
        <div className="text-center mt-5">
            <section className="h-100 gradient-custom-2">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="profile-card">
                                <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: "#000", height:"200px",}}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{width: "150px",}}>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                    alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                    style={{width: "150px", zIndex: "1",}} />
                                        <button type="button" className="btn btn-outline-dark w-100" data-mdb-ripple-color="dark"
                                        style={{zIndex: "1", marginTop: "-21px", marginLeft: "155px"}}>
                                        Edit profile
                                        </button>
                                </div>
                                <div className="ms-3" style={{marginTop: "130px",}}>
                                    <h5>{store.user?.name}</h5>
                                    <p className="text-start fw-lighter">{store.user?.username}</p>
                                </div>
                            </div>
                    <div className="p-4 text-black" style={{backgroundColor: "#F8F9FA",}}>
                        <div className="d-flex justify-content-end text-center py-1">
                            {/* <div>
                                <p className="mb-1 h5">253</p>
                                <p className="small text-muted mb-0">Photos</p>
                            </div>
                            <div className="px-3">
                                <p className="mb-1 h5">1026</p>
                                <p className="small text-muted mb-0">Followers</p>
                            </div>
                            <div>
                                <p className="mb-1 h5">478</p>
                                <p className="small text-muted mb-0">Following</p>
                            </div> */}
                        </div>
                    </div>
                        <div className="card-body p-4 text-black flex-column">
                            
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0 text-decoration-underline">FAVORITES</p>
                                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                </div>
                                <div>
                                    {store.user?.favorites?.map((item) => {
                                        return( 

                                            <div className="profile-row g-2">
                                                <div className="profile-col mb-2">
                                                <div className="profile-col ">
                                                <div className="card" style={{width: "18rem", height: "420px", boxShadow: "10px 10px 20px 21px rgba(0, 0, 0, 0.2)", border:"15px solid black"}}>
                                                    <Link to={`../exhibits/single/${item.exhibit_museum_id}`}>
                                                        <img src={item.primary_image_small}
                                                        alt="image 1" className="w-50 rounded-3" />
                                                    </Link>

                                                    <div className="profile-col card-body overflow-auto">
                                                    <button className="profile-button m-0" onClick={() => {
                                                        handleDeleteFavorite(item.exhibit_museum_id);
                                                        console.log(store.user.favorites)
                                                    }}>
                                                        <i class="fas fa-trash" aria-hidden="true"></i>
                                                    </button>
                                                    </div>
                                                 </div> 
                                                

                                            </div>
                                            </div>
                                            </div>
                                        )})

                                    }
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};