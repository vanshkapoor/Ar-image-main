import React, { Component } from 'react'
// import logo1 from '../../images/logo1.png';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { registerUser } from '../../actions/authActions'
import swal from 'sweetalert';
import Navbar from './navbar';

class Landing extends Component {
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
{/* -----navbar start  */}
<Navbar head="file" />
{/* -----navbar stop */}

{/*  -------form start */}
<div className="container">

<div className="container mt-4">
       <h1 className="text-center text-muted">file upload</h1>
</div>

<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input type="text" class="form-control" name="title" id="exampleFormControlInput1" placeholder="The board" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Description</label>
    <input type="text" class="form-control" name="description" id="exampleFormControlInput1" placeholder="Description" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Category</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> 
  <button type="submit" class="btn btn-primary btn-lg "style={{"float":"right","backgroundColor":"#5a8cbd","borderColor":"#5a8cbd"}}>SUBMIT</button>
</form>
</div>

{/* ---------form stop */}


            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     auth: state.auth,
// });

export default Landing;
// export default connect(mapStateToProps, { LandingUser })(withRouter(Landing));