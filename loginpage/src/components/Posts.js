import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/authActions'


class Posts extends Component {
    constructor(props){
        super(props);
        this.state={
            items:{}
        }
    }

    componentWillMount(){
        this.props.fetchPosts();
    }
    

    render() {
        const postItems = this.props.posts;
        return (
            <div style={{textAlign:"center"}}>
                <h1>post</h1>
              <h1>  login counter {postItems}</h1> 
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
}) 
export default connect(mapStateToProps, {fetchPosts} )(Posts);
