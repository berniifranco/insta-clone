import React from 'react';
import '../assets/css/Card.css';
import moreAction from '../assets/images/more-action.png';

function Card() {
    return (
        <div>
            <div className="card shadow-sm">
                <div className="card-body px-2">
                    <div className="row">
                        <div className="col-6 d-flex">
                            <img className='p-1 profile-pic' src="https://images.unsplash.com/photo-1530577912333-0edf2f7864f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" alt="profile pic" />
                            <div className='mt-2'>
                                <p className='fs-6 fw-bold'>Title</p>
                                <p className='location'>Description</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className='float-end fs-3 p-2 mt-2 more-action' src={moreAction} alt="more action" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <img style={{borderRadius: '15px'}} className='p-2 img-fluid rounded post-pic' src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80" alt="post pic" />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-6 d-flex">
                            <i class="ps-2 fs-4 fa-regular fa-heart" />
                            <i class="ps-3 fs-4 fa-regular fa-comment" />
                            <i class="ps-3 fs-4 fa-solid fa-location-arrow" />
                        </div>
                        <div className="col-6">
                            <span className="pe-2 fs-6 fw-bold float-end">200 Likes</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <span className="p-2 text-muted">2 Hours Ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;