import React, { Component } from 'react'
// import logo1 from '../../images/logo1.png';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { registerUser } from '../../actions/authActions'
import swal from 'sweetalert';

class Image extends Component {
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
        return (
            <div>
                 <a-scene embedded arjs="sourceType: webcam;">

<a-marker type = "pattern" url = "https://cdn.glitch.com/1b5c5ba0-db58-4f37-8aa7-f69ae3761543%2Fpattern-logo-pattern.patt?v=1566157398906" >
<a-cylinder src="url(https://cdn.glitch.com/1b5c5ba0-db58-4f37-8aa7-f69ae3761543%2Falt-logo.png?v=1566270247992https://cdn.glitch.com/1b5c5ba0-db58-4f37-8aa7-f69ae3761543%2Falt-logo.png?v=1566270247992(75 kB)
https://cdn.glitch.com/1b5c5ba0-db58-4f37-8aa7-f69ae3761543%2Falt-logo.png?v=1566270247992https://cdn.glitch.com/1b5c5ba0-db58-4f37-8aa7-f69ae3761543%2Falt-logo.png?v=1566270247992)" 
radius="3.0" scale="0.5 0.5 0.5" height= "0.05" segments-height="512" segments-width="512" >
      <a-animation attribute="rotation"
                 dur="1000"
                 from= "-15 10 10"
                 to="10 -15 0"
                 direction="alternate-reverse"
                 repeat="indefinite">
  </a-animation>
</a-cylinder>
</a-marker>
 <a-entity camera></a-entity>
     
   </a-scene>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     auth: state.auth,
// });

export default Image;
// export default connect(mapStateToProps, { LandingUser })(withRouter(Landing));