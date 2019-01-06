import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../Constant';
import Confirmation from './Confirmation';

export default class UserItem extends React.Component {
    state = {showConfirmation: false};
    render() {
        const { user, className } = this.props;
        const { _id: id } = user;
        const time = Date.now();

        const onDelete = () => {
            this.setState({
                showConfirmation: true
            }); 
        }

        const onDeleteCofirm = () => {
            this.setState({
                showConfirmation: false
            });
            this.props.onDelete(); 
        }

        const onDeleteCancel = () => {
            this.setState({
                showConfirmation: false
            });
        }
        return (
            <div className={className}>
                <div className="card">
                    <img className="card-img-top" src={`${API}/employee/photo/${id}?dt=${time}`} alt="No Pic Uploaded"></img>
                    <div className="card-body">
                        <h5 className="card-title">
                            (<i className={'fa fa-' + (user.gender === 'M' ? 'male text-info' : 'female text-danger')}></i>) {user.name}
                        </h5>
                        <p className="card-text">{user.bio}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <strong className="col-sm-2 px-0">Email Id: </strong>
                            <label className="col-sm-8 px-0">{user.email}</label>
                        </li>
                        <li className="list-group-item">
                            <strong className="col-sm-2 px-0">Phone: </strong>
                            <label className="col-sm-8 px-0">{user.phone}</label>
                        </li>
                    </ul>
                    <div className="card-footer">
                        <Link className="card-link" to={'/employee/update/' + user._id}><i className="fa fa-edit"></i></Link>
                        <button className="btn btn-danger btn-sm ml-2 pull-right" onClick={(e) => onDelete()}><i className="fa fa-trash"></i></button>
                    </div>
                </div>
                <Confirmation onConfirm={onDeleteCofirm} onCancel={onDeleteCancel} show={this.state.showConfirmation}/>
            </div>
        );
    }
}