import React, { useState } from 'react';
import '../assets/css/Profile.css';
import Modal from 'react-bootstrap/Modal';
import moreAction from '../assets/images/more-action.png';
import '../assets/css/Card.css';

function Profile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    <div className="card" onClick={handleShow}>
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
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://images.unsplash.com/photo-1594467974320-2cddc11e52bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://images.unsplash.com/photo-1556816214-fda351e4a7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Anterior</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Siguiente</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-6 d-flex">
                                    <img className='p-1 post-profile-pic' src="https://images.unsplash.com/photo-1530577912333-0edf2f7864f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" alt="profile pic" />
                                    <div className='mt-2 ms-2'>
                                        <p className='fs-6 fw-bold'>Title</p>
                                        <p className='location'>Description</p>
                                    </div>
                                    <div className="dropdown ms-5">
                                        <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                                            <img className='fs-3 p-2 mt-2 more-action' src={moreAction} alt="more action" />
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pen-to-square px-2" /> Edit Post</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa-regular fa-trash-can px-2" /> Delete Post</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12">
                                    <span className="p-2 text-muted">2 Hours Ago</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 ms-2">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum hic labore totam eveniet quae nulla molestiae reiciendis consequuntur dicta dignissimos dolore culpa quis, sequi dolorem mollitia cupiditate quo ullam accusantium?</p>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-6 d-flex">
                                    <i className="ps-2 fs-4 fa-regular fa-heart" />
                                    <i className="ps-3 fs-4 fa-regular fa-comment" />
                                    <i className="ps-3 fs-4 fa-solid fa-location-arrow" />
                                </div>
                                <div className="col-12 mt-3 ms-2">
                                    <span className="fs-6 fw-bold">200 Likes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
};

export default Profile;