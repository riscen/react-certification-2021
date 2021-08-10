import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

import {
  VideoThumbnail,
  VideoInfo,
  VideoTitle,
  VideoDescription,
} from './VideoCard.module';

import './VideoCard.styles.css';

function HomeView(props) {
  const { title, thumbnail, description, videoId } = props;
  const [isCardHovered, setIsCardHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseOver = () => {
    setIsCardHovered(true);
  };

  const handleMouseOut = () => {
    setIsCardHovered(false);
  };

  useEffect(() => {
    const node = cardRef.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  });

  return (
    <Link to={`/video/${videoId}`}>
      <Paper className="video-card" elevation={3} ref={cardRef}>
        <VideoThumbnail>
          <img alt={title} src={thumbnail} />
        </VideoThumbnail>
        <VideoInfo>
          <VideoTitle>
            <span>{title}</span>
          </VideoTitle>
          <VideoDescription className={!isCardHovered && 'video-description-reduce'}>
            {description || 'No description :('}
          </VideoDescription>
        </VideoInfo>
      </Paper>
    </Link>
  );
}

export default HomeView;
