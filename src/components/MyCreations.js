import React, { Component } from 'react';
import pok from '../images/pok.jpeg';
// import logo1 from '../../images/logo1.png';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { registerUser } from '../../actions/authActions'
import swal from 'sweetalert';
import Navbar from './navbar';


const Cards =() => {
    return(
      <div className="col-lg-4 col-sm-12 mb-4 mt-4">
        <div class="card">
        <img src={pok} class="card-img-top" alt="..." />
        <div class="card-body">
          <strong>Pokemon AR</strong>            
            <br />
            <p>An Ar depicting the pokemon Ars</p>
        <Link to="/image/2"><button class="btn btn-primary" style={{"backgroundColor":"#5a8cbd","borderColor":"#5a8cbd"}}>view</button></Link>
        </div>
      </div>
      </div>
    )
  }


class My extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            branch: '',
            email: '',
            phoneno: '',
            password: '',
            team: '',
            designation: ''
        }
    }
    // componentDidMount() {
    //     if (this.props.auth.isAuthenticated) {
    //         this.props.history.push('/');
    //     }
    // }

    render() {
        const StyledH = styled.h1`
        font-size: 30px;
        color: grey;
        /* color: #3FC6D0; */
        text-align: center;
        `
        return (
            <div>
              <Navbar head="my"/>
              <div className="container">
              <div className="row">
              <Cards />
              <Cards />
              </div>
              </div>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     auth: state.auth,
// });

export default My;