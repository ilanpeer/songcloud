import React from 'react';
import Songcard from './Songcard';
import Genrebar from './Genrebar';

export default class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      songsLoading: 'loading...'
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://create-bootcamp-songcloud-server.now.sh/tracks?genre=trance');
    xhr.addEventListener('load', () => {
      this.setState({songs: JSON.parse(xhr.responseText), songsLoading: 'loaded'});
    });
    xhr.addEventListener('error', () => {
      this.setState({songsLoading: 'error'});
    });
    xhr.send();
  }

  render() {
    console.log('state.songs:', this.state.songs);
    switch (this.state.songsLoading) {
      case 'loading...':
        return <div className="loading">KAN TAVO ANIMATZIA SHEL -----> Loading...</div>;
      case 'error':
        return <div className="404">AMOD 404 CLASSY -----> Error!</div>;
      case 'loaded':
        return (
          <div className="first-div-of-return-from-explore">
            <Genrebar/>
            <h1 className="exploretitle">Genre: get from this.state.songs.genre</h1>
            <ul className="explorelist">
              {
                this.state.songs.map((song, i) => <li className="cardunit" key={ song.id }>
                    <Songcard
                      image={ song.artwork_url }
                      title={ song.title }
                      duration={ song.duration }
                    />
                  </li>
                )}
            </ul>
          </div>
        );
    }

  };

};

