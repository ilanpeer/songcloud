import React from 'react';

export default function Songcard(props) {

  function msToTime(duration) {
    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);

    return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
  }

  function trimTitle(title) {
    if (title.length >= 32) {
      return title.slice(0, 32) + '...';
    }
    else {
      return title;
    }
  }

  // console.log("props.image = song.artwork_url", props.image);

  const imgUrl = props.image ? props.image.replace('large', 't300x300') : props.image;


  return (
    <div className="songcard">
      <div className="cardimage"
           style={ {backgroundImage: `url(${imgUrl})`} }/>
        {/*onclick={ this.props.updateCurrentTrack(WHO IS PLAYING??) }*/}
      <p className="cardtitle">{trimTitle(props.title)}</p>
      <p className="cardduration"><i className="fa fa-clock-o" aria-hidden="true"/> {msToTime(props.duration)}</p>
      <i className="fa fa-heart-o cardheart" aria-hidden="true"/>
    </div>
  );
}

