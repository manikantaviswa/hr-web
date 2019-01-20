import React from 'react';
import ProfilePic from './ProfilePic';
import { Link } from 'react-router-dom';

const DEF_USER = {
    name: '',
    email: '',
    gender: 'M',
    phone: '',
    photo: '',
    photoVal: ''
}

export default class UserForm extends React.Component {
    state = {
        user: { ...DEF_USER }
    };

    onSave(e) {
        e.preventDefault();
        this.props.onSave(this.state.user);
    }

    componentDidMount() {
        const { name = DEF_USER.name, email = DEF_USER.email, gender = DEF_USER.gender, phone = DEF_USER.phone } = this.props.user;
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
                            <input className="form-control" type="text" id="name" autoComplete="off" name="name" value={this.state.user.name} onChange={(e) => this.onChangeInput(e)} placeholder="Name" />
                            <label className="control-label" htmlFor="name">Name</label>
                        </div>
                        <div className="form-label-group">
                            <input className="form-control" type="text" id="email" autoComplete="off" name="email" value={this.state.user.email} onChange={(e) => this.onChangeInput(e)} placeholder="Email" />
                            <label className="control-label" htmlFor="email">Email Id</label>
                        </div>
                        <div className="form-label-group">
                            <input className="form-control" type="text" id="phone" autoComplete="off" name="phone" value={this.state.user.phone} onChange={(e) => this.onChangeInput(e)} placeholder="Phone" />
                            <label className="control-label" htmlFor="phone">Phone Number</label>
                        </div>
                        <div className="form-label-group radio-group">
                            <label><input className="form-control-radio" type="radio" name="gender" value="M" checked={this.state.user.gender === 'M'} onChange={(e) => this.onChangeInput(e)} /> Male</label>
                            <label><input className="form-control-radio" type="radio" name="gender" value="F" checked={this.state.user.gender === 'F'} onChange={(e) => this.onChangeInput(e)} /> Female</label>
                            <label className="control-label">Gender</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-label-group">
                            <input className="form-control" type="file" id="photo" name="photo" value={this.state.user.photo} onChange={(e) => this.onChangeFile(e)} />
                            <label className="control-label" htmlFor="photo">Profile Pic</label>
                            <ProfilePic label="Existing Pic" user={this.props.user} />
                        </div>
                    </div>
                </div>
                <div className="form-label-group">
                    <div className="row">
                        <div className="col-sm-3 col-6">
                            <Link className="btn btn-block btn-secondary" to="/">Cancel</Link>
                        </div>
                        <div className="col-sm-9 col-6">
                            <button className="btn btn-block btn-success" type="submit" onClick={(e) => this.onSave(e)}>Save</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
