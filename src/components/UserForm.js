import React from 'react';
import ProfilePic from './ProfilePic';
import { Link } from 'react-router-dom';

export default class UserForm extends React.Component {
    state = {
        user: {
            name: '',
            email: '',
            gender: '',
            phone: '',
            photo: '',
            photoVal: ''
        }
    };

    onSave(e) {
        e.preventDefault();
        this.props.onSave(this.state.user);
    }

    componentDidMount() {
        const {name, email, gender, phone} = this.props.user;
        this.setState({
            user: {
                ...this.state.user,
                name,
                email,
                gender,
                phone,
            }
        });
    }

    onChangeInput(e) {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        });
    }

    onChangeFile(e) {
        this.setState({
            user: {
                ...this.state.user,
                photo: e.target.value,
                photoVal: e.target.files[0]
            }
        });
    }
    
    render() {
        return (
            <form className="form pt-2">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-label-group">
                            <input className="form-control" type="text" id="name" autoComplete="off" name="name" value={this.state.user.name} onChange={(e) => this.onChangeInput(e)} placeholder="Name"/>
                            <label className="control-label" htmlFor="name">Name</label>
                        </div>
                        <div className="form-label-group">
                            <input className="form-control" type="text" id="email" autoComplete="off" name="email" value={this.state.user.email} onChange={(e) => this.onChangeInput(e)} placeholder="Email"/>
                            <label className="control-label" htmlFor="email">Email Id</label>
                        </div>
                        <div className="form-label-group">
                            <input className="form-control" type="text" id="phone" autoComplete="off" name="phone" value={this.state.user.phone} onChange={(e) => this.onChangeInput(e)} placeholder="Phone"/>
                            <label className="control-label" htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="form-label-group">
                            <input className="form-control" type="text" id="gender" autoComplete="off" name="gender" value={this.state.user.gender} onChange={(e) => this.onChangeInput(e)} placeholder="Gender"/>
                            <label className="control-label" htmlFor="gender">Gender</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-label-group">
                            <input className="form-control" type="file" id="photo" name="photo" value={this.state.user.photo} onChange={(e) => this.onChangeFile(e)} />
                            <label className="control-label" htmlFor="photo">Profile Pic</label>
                            <ProfilePic label="Existing Pic" user={this.props.user}/>
                        </div>
                    </div>
                </div>
                <div className="form-label-group">
                    <div className="row">
                        <div className="col-3">
                            <Link className="btn btn-block btn-secondary" to="/">Cancel</Link>
                        </div>
                        <div className="col-9">
                            <button className="btn btn-block btn-success" type="submit" onClick={(e) => this.onSave(e)}>Save</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
