import React from 'react';

//ES6

const GIPHY_LOADING_URL = 'https://media.giphy.com/media/4U5x6an6sYyU8/giphy.gif';
const styles = {
  minHeight: '310px',
  margin: '0.5em'
};

class Gif extends React.Component{

  getUrl() {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  }

  render() {
    let url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

    return (
      <div style={styles}>
        <a href={this.getUrl()} title='view this on giphy' target='new'>
          <img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}}/>
        </a>
      </div>
    );
  }
}