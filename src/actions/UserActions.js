import { API } from '../Constant';

const baseURI = `${API}/employee`;

export const ACTIONS = {
    FETCH: {
        REQ: 'FETCH_USERS',
        SUCCESS: 'FETCH_USERS_SUCCESS',
        FAILED: 'FETCH_USERS_FAILED'
    }
}

const UserActions = {
    getUsers: () => {
        return dispatch => {
            dispatch({ type: ACTIONS.FETCH.REQ});
            return fetch(baseURI).then((response) => {
                return response.json();
            }).then((res) => {
                dispatch({type: ACTIONS.FETCH.SUCCESS, users: res.data});
            }, (err) => {
                dispatch({type: ACTIONS.FETCH.FAILED, error: err});
            })
        }
    },

    getUser: (id) => {
        return dispatch => {
            dispatch({ type: 'FETCH_USER'});
            return fetch(baseURI + '/' + id).then((response) => {
                return response.json();
            }).then((res) => {
                dispatch({type: 'FETCH_USER_SUCCESS', user: res.data});
            }, (err) => {
                dispatch({type: 'FETCH_USER_FAILED', error: err});
            })
        }
    },

    saveUser: (user, id) => {
        return dispatch => {
            dispatch({ type: 'SAVE_USER'});
            const {photoVal} = user;
            delete user.photo;
            delete user.photoVal;

            const url = id ? baseURI + '/' + id : baseURI;
            return fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            }).then((response) => {
                return response.json();
            }).then((res) => {
                if (photoVal) {
                    UserActions.uploadPhoto(res.data._id, photoVal)(dispatch);
                } else {
                    dispatch({type: 'SAVE_USER_SUCCESS', users: res.data});
                }
            }, (err) => {
                dispatch({type: 'SAVE_USER_FAILED', error: err});
            })
        }
    },

    deleteUser: (id) => {
        return dispatch => {
            dispatch({ type: 'DELETE_USER'});
            const url = baseURI + '/' + id;
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                },
            }).then((response) => {
                return response.json();
            }).then((res) => {
                dispatch({type: 'DELETE_USER_SUCCESS', id: id});
            }, (err) => {
                dispatch({type: 'DELETE_USER_FAILED', error: err});
            })
        }
    },

    uploadPhoto: (id, file) => {
        const fd = new FormData();
        fd.append('myfile', file);

        return dispatch => {
            dispatch({ type: 'USER_PHOTO_UPLOAD'});
            const url = baseURI + '/upload/' + id;
            return fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                },
                body: fd
            }).then((response) => {
                return response.json();
            }).then((res) => {
                dispatch({type: 'USER_PHOTO_UPLOAD_SUCCESS', users: res.data});
            }, (err) => {
                dispatch({type: 'USER_PHOTO_UPLOAD_FAILED', error: err});
            })
        }
    }
}

export default UserActions;
