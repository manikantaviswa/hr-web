import React from 'react';
import { connect } from 'react-redux';

import UsersList from '../components/UsersList';
import UserActions from '../actions/UserActions';

class UsersListContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { users } = this.props.user;
        return <UsersList users={users} onDelete={(userId) =>this.props.onDelete(userId)}/>
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    onDelete: (id) => {
        dispatch(UserActions.deleteUser(id));
    },
    getUsers: () => {
        dispatch(UserActions.getUsers())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
