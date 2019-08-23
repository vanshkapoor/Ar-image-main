import React, { Component } from 'react'
// import logo1 from '../../images/logo1.png';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { registerUser } from '../../actions/authActions'
import swal from 'sweetalert';
import Navbar from './navbar';
import {addForm} from '../actions/FormActions';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            title:'',
            description:'',
            category:'',
            file:null,
            marker_file:null,
        }
    }

    fileChangeHandler = e => {
        console.log(e.target.files[0])
        // console.log(e.target.value)
        this.setState({[e.target.name]: e.target.files[0]})
        console.log(this.state.file)
    }

 

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newuser = {
            title:this.state.title,
            description:this.state.description,
            category:this.state.category,
            file:this.state.file,
            marker_file:this.state.marker_file
        }
        console.log(newuser);
        this.props.addForm(newuser);
    }

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

<form onSubmit={this.onSubmit} encType="multipart/form-data" >
  <div class="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input type="text" class="form-control" name="title" onChange={this.onChange} id="exampleFormControlInput1" placeholder="The board" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Description</label>
    <input type="text" class="form-control" name="description" onChange={this.onChange} id="exampleFormControlInput1" placeholder="Description" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Category</label>
    <select class="form-control" id="exampleFormControlSelect1" value={this.state.category} name="category" onChange={this.onChange}>
      <option value="animals">animals</option>
      <option value="food">food</option>
      <option value="physics">physics</option>
      <option value="maths">maths</option>
      <option value="chemistry">chemistry</option>
    </select>
  </div> 
  <div class="form-group">
    <label for="exampleFormControlSelect1">Price</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Free</option>
      <option>$10</option>
      <option>$20</option>
      <option>$30</option>
      <option>$40</option>
    </select>
  </div> 
  <div className="form-group">
                           <div className="input-field pt-2">
                               <label className="text-left" htmlFor="case_file">File</label>
                               <input className="form-control"
                                   type="file"
                                   name="file"
                                   onChange={this.fileChangeHandler}
                               />
                            </div>
  </div>
  <div className="form-group">
                           <div className="input-field pt-2">
                               <label className="text-left" htmlFor="case_file">Marker/Target File</label>
                               <input className="form-control"
                                   type="file"
                                   name="marker_file"
                                   onChange={this.fileChangeHandler}
                               />
                            </div>
  </div>
  <button type="submit" class="btn btn-primary btn-lg "style={{"float":"right","backgroundColor":"#5a8cbd","borderColor":"#5a8cbd"}}>Add Product</button>
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

// export default Landing;
export default connect(null, { addForm })(withRouter(Landing));