import React from 'react';
import { Link } from 'react-router-dom';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initials: '',
      fname: '',
      lname: '',
      mstat: '',
      dob: '',
      age: '',
      hno: '',
      street: '',
      city: '',
      pcode: '',
      country: '',
      email: '',
      password: '',
      mlphone: ''
    };
  }
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const {
      initials,
      fname,
      lname,
      mstat,
      dob,
      age,
      hno,
      street,
      city,
      pcode,
      country,
      email,
      password,
      mlphone
    } = this.state;
    return (
      <div className='container'>
        <form>
          <div className='row'>
            <div className='col border border-info m-2'>
              <div className='d-flex flex-row justify-content-between'>
                <h2 className='text-secondary'>Personal Details</h2>
                <div className='d-flex flex-row justify-content-between'>
                  <Link className='nav-link text-secondary' to='/address'>
                    Edit
                  </Link>
                </div>
              </div>
              <div className='form-group'>
                <label>Initials</label>
                <input
                  type='text'
                  className='form-control'
                  name='initials'
                  value={initials}
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
                <label>First Name *</label>
                <input
                  type='text'
                  className='form-control'
                  required
                  name='fname'
                  value={fname}
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
                <label>Last Name *</label>
                <input
                  type='text'
                  required
                  className='form-control'
                  name='lname'
                  value={lname}
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
                <label>Status</label>
                <input
                  type='text'
                  className='form-control'
                  name='mstat'
                  value={mstat}
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
                <label>Date of Birth *</label>
                <input
                  type='date'
                  className='form-control'
                  required
                  name='dob'
                  value={dob}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col m-2 border border-info'>
                  <div className='d-flex flex-row justify-content-between'>
                    <h2 className='text-secondary'>Address</h2>
                    <Link className='nav-link text-secondary' to='/address'>
                      Edit
                    </Link>
                  </div>
                  <div className='form-group'>
                    <label>House / Flat No.</label>
                    <input
                      type='text'
                      className='form-control'
                      name='hno'
                      value={hno}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col border border-info m-2'>
                  <div className='d-flex flex-row justify-content-between'>
                    <h2 className='text-secondary'>Communication</h2>
                    <div className='d-flex flex-row justify-content-between'>
                      <Link
                        className='nav-link text-secondary'
                        to='/communication'
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label>E-Mail *</label>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      value={email}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Password *</label>
                    <input
                      type='password'
                      className='form-control'
                      name='password'
                      value={password}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Mobile / Phone</label>
                    <input
                      type='number'
                      className='form-control'
                      name='mlphone'
                      value={mlphone}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex flex-row'>
            <button type='submit' className='btn btn-primary'>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
