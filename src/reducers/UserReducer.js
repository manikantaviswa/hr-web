const defaultStore = {
    users: [],
    user: {},
    loading: false
}
const UserReducer = (store = defaultStore, action) => {
    switch (action.type) {
        case 'FETCH_USERS': return ({
            ...store,
            user: {},
            isSaved: false,
            loading: true,
        })
        case 'FETCH_USERS_SUCCESS': return ({
            ...store,
            loading: false,
            users: action.users
        })
        case 'FETCH_USERS_FAILED': return ({
            ...store,
            loading: false,
            users: action.err
        })

        case 'FETCH_USER': return ({
            ...store,
            loading: true,
        })
        case 'FETCH_USER_SUCCESS': return ({
            ...store,
            loading: false,
            user: action.user
        })
        case 'FETCH_USER_FAILED': return ({
            ...store,
            loading: false,
            user: action.err
        })

        case 'SAVE_USER': return ({
            ...store,
            loading: true,
        })
        case 'SAVE_USER_SUCCESS': return ({
            ...store,
            isSaved: true,
            loading: false,
        })
        case 'SAVE_USER_FAILED': return ({
            ...store,
            loading: false,
        })

        case 'DELETE_USER': return ({
            ...store,
            loading: true,
        })
        case 'DELETE_USER_SUCCESS':
            const { users } = store;
            const index = users.findIndex((user) => {
                return user._id === action.id
            });
            users.splice(index, 1);
            return ({
                ...store,
                users: [
                    ...users
                ],
                loading: false,
            })
        case 'DELETE_USER_FAILED': return ({
            ...store,
            loading: false,
            err: action.err
        })

        case 'USER_PHOTO_UPLOAD': return ({
            ...store,
            loading: true,
        })
        case 'USER_PHOTO_UPLOAD_SUCCESS': return ({
            ...store,
            isSaved: true,
            loading: false,
        })
        case 'USER_PHOTO_UPLOAD_FAILED': return ({
            ...store,
            loading: false,
        })

        default: return store;
    }
}

export default UserReducer;
