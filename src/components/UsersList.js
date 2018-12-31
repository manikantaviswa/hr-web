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
                {users.map((user, key) => <UserItem user={user} key={key} onDelete={() => this.props.onDelete(user._id)}/>)}
            </div>
        );
    }
}
