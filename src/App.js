import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import UsersListContainer from './containers/UsersListContainer';
import UserFormContainer from './containers/UserFormContainer';
import { store } from './Store';

class App extends Component {
  render() {
    const state = store.getState();
    return (
      <Provider store={store}>
        <Header title={state.app.title} />
        <Router>
          <div>
            <Route exact path="/" component={UsersListContainer} />
            <Route exact path="/employee" component={UsersListContainer} />
            <Route exact path="/employee/add" component={UserFormContainer} />
            <Route exact path="/employee/update/:id" component={UserFormContainer} />
          </div>
        </Router>
        <Footer footer={state.app.footer} />
      </Provider>
    );
  }
}

export default App;
