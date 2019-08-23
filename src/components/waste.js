import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class waste extends Component {
    render() {
        return (
            <div>
                <Link to="/login" className="btn btn-lg btn-light">Login</Link>
                <Link to="/register" className="btn btn-lg btn-light">Register</Link>
                <Link to="/blogs" className="btn btn-lg btn-light">Blogs</Link>
                <Link to="/registerportal" className="btn btn-lg btn-light">Register Portal</Link>
                <Link to="/osp" className="btn btn-lg btn-light">OSP page</Link>
                <Link to="/RSVP/confirmed" className="btn btn-lg btn-light">RSVP page</Link>
                <Link to="/event/add" className="btn btn-lg btn-light">event page</Link>
                <Link to="/achievements" className="btn btn-lg btn-light">achievements</Link>
                <Link to="/event" className="btn btn-lg btn-light">Events</Link>
                <Link to="/qandapost" className="btn btn-lg btn-light">Q-AND-A</Link>
            </div>
        )
    }
}
