import React from 'react';
import '../assets/css/Profile.css';

function Profile() {
    return (
        <div className='container shadow mt-3 p-4'>
            <div className="row">
                <div className="col-md-6 d-flex flex-column">
                    <img className='p-2 img-fluid profile-image' src="https://images.unsplash.com/photo-1561580726-1bd7aed04eb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1785&q=80" alt="profile-pic" />
                    <p className="ms-3 fs-5 fw-bold">lionel_messi</p>
                    <p className="ms-3 fs-5">Lionel Messi</p>
                    <p className="ms-3 fs-5">Campeón del mundo | Follow @leomessi</p>
                    <p className="ms-3 fs-5">Mis copas en: <a href='#'>www.leomessi.com/copas</a></p>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between mt-3">
                    <div className='d-flex justify-content-equal'>
                        <div className='count-section pe-5 text-center fw-bold'>
                            <h4>10</h4>
                            <p>Posts</p>
                        </div>
                        <div className='count-section px-5 text-center fw-bold'>
                            <h4>20</h4>
                            <p>Followers</p>
                        </div>
                        <div className='ps-5 text-center fw-bold'>
                            <h4>20</h4>
                            <p>Following</p>
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <button className="custom-btn custom-btn-white me-md-3">
                            <span className='fs-6'>Edit Profile</span>
                        </button>
                        <button className="custom-btn custom-btn-white">
                            <span className='fs-6'>Upload Post</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-12">
                    <hr />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1527871252447-4ce32da643c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" className="card-img-top" alt="fulbo" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="futbol" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="football" />
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1527871252447-4ce32da643c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" className="card-img-top" alt="fulbo" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="futbol" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="football" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;