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



const Carousel = () => {
  return (
    <div>
  
  <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div id="imgcarousel" className="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#imgcarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#imgcarousel" data-slide-to="1"></li>
                                <li data-target="#imgcarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="img-fluid" src={pok} alt="">
                                    </img>

                                </div>
                                <div className="carousel-item">
                                    <img className="img-fluid" src={pok} alt="">
                                    </img>

                                </div>
                                <div className="carousel-item">
                                    <img className="img-fluid" src={pok} alt="">
                                    </img>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</div>
  )}


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

    render() {
        const StyledH = styled.h1`
        font-size: 30px;
        color: grey;
        /* color: #3FC6D0; */
        text-align: center;
        `
        return (
            <div>
              <Navbar head="store"/>
              <Carousel />
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     auth: state.auth,
// });

export default Store;
// export default connect(mapStateToProps, { LandingUser })(withRouter(Landing));