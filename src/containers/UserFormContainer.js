import React from 'react';
import { connect } from 'react-redux';

import UserForm from '../components/UserForm';
import UserActions from '../actions/UserActions';

class UsersFormContainer extends React.Component {
    componentDidMount() {
        const { params } = this.props.match;
        if (params && params.id) {
            this.props.getUser(params.id);
        }
    }

    render() {
        const { user, loading, isSaved } = this.props;
        if (isSaved) {
            this.props.history.push('/');
        }
        const onSave = (updated) => {
            this.props.saveUser(updated, user._id);
        }
        return !loading? <UserForm user={user} onSave={(updated) => onSave(updated)} />: ''
    }
}

const mapStateToProps = (state) => ({
    ...state.user
});

const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => {
        dispatch(UserActions.getUser(id));
    },
    saveUser: (user, id) => {
        dispatch(UserActions.saveUser(user, id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersFormContainer);
