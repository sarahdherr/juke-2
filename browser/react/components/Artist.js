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
		const selectedArtist = this.props.selectedArtist;
		const children = this.props.children;
		let theseSongs = [];
		// this.props.selectedArtist.albums.forEach((album) => {
		// 	album.songs.forEach((song) => {
		// 		theseSongs.push(song)
		// 	})
		// })
		const propsToPassToChildren = {
			albums: this.props.selectedArtist.albums,
			songs: this.props.selectedArtist.songs,
			currentSong: this.props.currentSong,
			isPlaying: this.props.isPlaying,
			toggleOne: this.props.toggleOne
		}
		console.log('prooooopos', this.props)

return (
	<div>
 	 	<h3>{ selectedArtist.name }</h3>
  	<ul className="nav nav-tabs">
   	 <li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
    	<li><Link to={`/artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
  	</ul>
  	{ children && React.cloneElement(children, propsToPassToChildren) }
	</div>
)
	// 	const albums = this.props.selectedArtist.albums
		
	// 	return (
	// 		<div>
	// 		{this.props.selectedArtist.id ? (
	// 			<div>
	// 			  <h3>{this.props.selectedArtist.name}</h3>

	// 			  <div>
	// 			      <h3>Albums</h3>
	// 			      <div className="row">
	// 			      {
	// 			        albums.map(album => (
	// 			          <div className="col-xs-4" key={ album.id }>
	// 			            <Link to={`/albums/${album.id}`} className="thumbnail">
	// 			              <img src={ album.imageUrl } />
	// 			              <div className="caption">
	// 			                <h5>
	// 			                  <span>{ album.name }</span>
	// 			                </h5>
	// 			                <small>{ album.songs.length } songs</small>
	// 			              </div>
	// 			            </Link>
	// 			          </div>
	// 			        ))
	// 			      }
	// 			      </div>
	// 			    </div>

	// 			  <Songs
	// 		        songs={this.props.selectedArtist.songs}
	// 		        currentSong={this.props.currentSong}
	// 		        isPlaying={this.props.isPlaying}
	// 		        toggleOne={this.props.toggleOne} />
	// 			</div>
	// 		) : (<h1>Loading...</h1>)}
	// 		</div>
	// 	)
	}
}