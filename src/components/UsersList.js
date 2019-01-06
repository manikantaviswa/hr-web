import React from 'react';
import UserItem from './UserItem';
import { Link } from 'react-router-dom';

export default class UsersList extends React.Component {
    render() {
        const { users = [] } = this.props;
        return (
            <div className="container-fluid user-list pt-2">
                <Link className="pull-right btn btn-sm btn-success" to="/employee/add">Add User <i className="fa fa-plus"></i></Link>
                <div className="clearfix"></div>
                <div className="row">
                    {users.map((user, key) => {
                        return (
                            <UserItem user={user} key={key} onDelete={() => this.props.onDelete(user._id)} className="col-lg-3 col-md-4 col-sm-6 mt-2 pl-0"/>
                        )
                    })}
                </div>
            </div>
        );
    }
}
