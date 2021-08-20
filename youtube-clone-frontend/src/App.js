import React, { Component } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider, Icon } from 'semantic-ui-react'
import NavBar from './NavBar/NavBar';
import Comments from './Comments/Comments';
import CommentForm from './CommentForm/CommentForm';
import RecommendedVideos from './RecommendedVideos/RecVideos';
import SearchBar from './SearchBar/SearchBar'; 
import { apikey } from '../apikey';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoId: '',
      videoTitle: '',
      videoDescription: '',
      relatedVideos: [],
      RecommendedVideos: []
    }
  }


  componentDidMount() {
  }

  handleSubmit = async (searchTerm) => {
		const response = await axios.get('search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: 'AIzaSyCjN-KiVubfVkVrOHCiY4ADEKeLU9bkqXk',
				q: searchTerm
			}
		});

		this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
	};

  render() {
    console.log(apikey)
    return (
    <React.Fragment>
    <div>
      <Container>
      <Divider />
      <NavBar/>
      <SearchBar onFormSubmit={this.handleSubmit} />
      <h1>Youtube Clone <Icon name='video' size='small' /></h1>
      <Divider />
      <h1>{this.state.videoTitle}</h1>
      <iframe className="iframe" title="title" id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${this.state.videoId}?`}
          frameBorder="0"><br/>
      </iframe>
      <p>{this.state.videoDescription}</p>
      <Comments/>
      <CommentForm/>
      </Container>
    </div>
    </React.Fragment>
    )
  }
}

export default App;