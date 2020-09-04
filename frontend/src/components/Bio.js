import React, { Component } from 'react';
import { connect } from 'react-redux';
import { followUser } from '../actions/userActions'

class Bio extends Component {

    handleClick = event => {
        this.props.followUser()
    }

    followersCount = () => {
        return `${this.props.followers.length} Followers`
    }

    followingCount = () => {
        return `${this.props.following.length} Following`
    }

    render() {
        return(
            <div className='bio'>
                <h3>{this.props.user.name}</h3>
                <h4>@{this.props.user.username}</h4>
                <h4>{this.followingCount()} {this.followersCount()}</h4>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        followUser: () => {
            dispatch(followUser())
        }
    }
}

export default connect(null, mapDispatchToProps)(Bio);