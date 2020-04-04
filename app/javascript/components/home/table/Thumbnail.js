import React, { Component } from 'react'

const Thumbnail =()=> {
    return (
      <div className="pt-4 pb-4r">
        <iframe
          width="100%"
          height="10%"
          src="https://www.youtube.com/embed/5F_JUvPq410"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
}

export default Thumbnail