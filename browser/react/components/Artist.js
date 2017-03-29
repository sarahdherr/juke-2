import React, {Component} from 'react';
import {Link} from 'react-router';
import Songs from '../components/Songs';

export default class Artist extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
	    const selectArtist = this.props.selectArtist;
	    selectArtist(this.props.routeParams.artistId)
	  }

	render() {
		const albums = this.props.selectedArtist.albums
		
		return (
			<div>
			{this.props.selectedArtist.id ? (
				<div>
				  <h3>{this.props.selectedArtist.name}</h3>

				  <div>
				      <h3>Albums</h3>
				      <div className="row">
				      {
				        albums.map(album => (
				          <div className="col-xs-4" key={ album.id }>
				            <Link to={`/albums/${album.id}`} className="thumbnail">
				              <img src={ album.imageUrl } />
				              <div className="caption">
				                <h5>
				                  <span>{ album.name }</span>
				                </h5>
				                <small>{ album.songs.length } songs</small>
				              </div>
				            </Link>
				          </div>
				        ))
				      }
				      </div>
				    </div>

				  <Songs
			        songs={this.props.selectedArtist.songs}
			        currentSong={this.props.currentSong}
			        isPlaying={this.props.isPlaying}
			        toggleOne={this.props.toggleOne} />
				</div>
			) : (<h1>Loading...</h1>)}
			</div>
		)
	}
}