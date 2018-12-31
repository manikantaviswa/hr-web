import React from 'react';
import { API } from '../Constant';

const ProfilePic = (props) => {
    const { _id: id } = props.user;
    const time = Date.now();
    return (
        <div className="profile-pic"> 
            {id? (
                <div>
                    <div>{props.label}</div>
                    <img className="img-thumbnail" src={`${API}/employee/photo/${id}?dt=${time}`} alt="No Pic Uploaded"></img>
                </div>
            ) :''}
        </div>
    )
}

export default ProfilePic;