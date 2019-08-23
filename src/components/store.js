import React, { Component } from 'react'
// import logo1 from '../../images/logo1.png';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { registerUser } from '../../actions/authActions'
import swal from 'sweetalert';

class Store extends Component {
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


    // onChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

    // onSubmit = (e) => {
    //     e.preventDefault();

    //     swal("Type in the DSC Code to Landing:", {
    //         content: "input",
    //     })
    //         .then((value) => {
    //             if (value == "dscisthesecretofmyenergy") {
    //                 const newuser = {
    //                     first_name: this.state.firstname,
    //                     last_name: this.state.lastname,
    //                     branch: this.state.branch,
    //                     email: this.state.email,
    //                     phoneNumber: this.state.phoneno,
    //                     password: this.state.password,
    //                     team: this.state.team,
    //                     designation: this.state.designation
    //                 }
    //                 newuser.username = this.state.firstname + " " + this.state.lastname;
    //                 console.log(newuser);
    //                 //communicating with the backend
    //                 this.props.LandingUser(newuser, this.props.history);
    //             } else {
    //                 swal(`You typed ${value}, seriously😂 ..sorry wrong code`);

    //             }
    //         });
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
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#" style={{"fontSize":"4vh"}}>AR image</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto" style={{"marginRight":"5%"}}>
      <a class="nav-item nav-link active" style={{"fontSize":"23px"}} href="#">STORE <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">CREATE</a>
    </div>
  </div>
</nav>
            <div className="container">
                <h1>file upload</h1>
            </div>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     auth: state.auth,
// });

export default Store;
// export default connect(mapStateToProps, { LandingUser })(withRouter(Landing));