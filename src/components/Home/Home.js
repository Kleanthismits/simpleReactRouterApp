import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../../pokeball.png'

import './Home.css';

class Home extends React.Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        this.setState({
          posts: response.data.slice(0, 10)
        })
        console.log(this.state.posts);
      })
  }

  render() {
    const { posts } = this.state;
    const postList = !posts.length ? (
      <div className="center">No posts yet</div>
    ) : (
        posts.map(post => {
          console.log(post.body)
          return (
            <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball"/>
              <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
              </div>
            </div>
          )
        })
      )
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

export default Home;
