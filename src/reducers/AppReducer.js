const defaultStore = {
    title: 'HR Tracker',
    footer: 'Powered by www.triecoders.com'
}
const AppReducer = (store = defaultStore, action) => {
    switch(action.type) {
        default: return store;
    }
}

export default AppReducer;
