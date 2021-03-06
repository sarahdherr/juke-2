import React, {Component} from 'react';
import Songs from '../components/Songs';

export default class Album extends Component{
  constructor(props) {
    super(props);  
  }
  
  componentDidMount(){
    const selectAlbum = this.props.selectAlbum;
    selectAlbum(this.props.routeParams.albumId)
  }

  render() {
  return (
    <div className="album">
      <div>
        <h3>{ this.props.album.name }</h3>
        <img src={ this.props.album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={this.props.album.songs}
        currentSong={this.props.currentSong}
        isPlaying={this.props.isPlaying}
        toggleOne={this.props.toggleOne} />
    </div>
  );
  }
}

