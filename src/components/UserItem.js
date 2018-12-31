import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from './ProfilePic';

export default class UserItem extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <div className="user">
                <ProfilePic user={user} />
                <div className="user-info">
                    <div className="row">
                        <strong className="col-2">Name: </strong>
                        <label className="col-8">
                            (<i className={'fa fa-' + (user.gender ==='M' ? 'male text-info': 'female text-danger')}></i>)  {user.name}
                        </label>
                    </div>
                    <div className="row">
                        <strong className="col-2">Email Id: </strong>
                        <label className="col-8">{user.email}</label>
                    </div>
                    <div className="row">
                        <strong className="col-2">Phone: </strong>
                        <label className="col-8">{user.phone}</label>
                    </div>
                </div>
                <div>
                    <Link className="btn btn-sm btn-info mr-2" to={'/employee/update/' + user._id}><i className="fa fa-edit"></i></Link>
                    <button className="btn btn-sm btn-danger" onClick={(e) => this.props.onDelete(e)}><i className="fa fa-trash"></i></button>
                </div>
            </div>
        );
    }
}