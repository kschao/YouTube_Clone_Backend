import React, { Component } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider, Icon } from 'semantic-ui-react'
import NavBar from './Components/NavBar/navbar';
import Comments from './Components/Comments/Comments'
import CommentForm from './Components/CommentForm/commentform';
import SearchBar from './Components/SearchBar/searchbar';
import { apikey } from '../src/APIkey';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: 'd0V2FdtFI_w',
      selectedVideo: { id: { videoId: 'd0V2FdtFI_w'}},
      videoTitle: '',
      videoDescription: '',
      relatedVideos: [],
      RecommendedVideos: []
    }
  }


  componentDidMount() {
  }

  handleSubmit = async (searchTerm) => {
    debugger;
		const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
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
        src={`https://www.youtube.com/embed/${this.state.selectedVideo.id.videoId}?autoplay=1&origin=http://example.com`}
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