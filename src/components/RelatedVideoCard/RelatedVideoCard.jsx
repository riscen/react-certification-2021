import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

import {
  RelatedVideo,
  RelatedVideThumbnail,
  RelatedVideoTitle,
} from './RelatedVideoCard.modules';
import './RelatedVideoCard.styles.css';

function RelatedVideoCard(props) {
  const { videoId, title, imageUrl } = props;

  return (
    <Link to={`/video/${videoId}`} key={videoId}>
      <Paper className="related-video-card" elevation={3}>
        <RelatedVideo>
          <RelatedVideThumbnail>
            <img alt={title} src={imageUrl} />
          </RelatedVideThumbnail>
          <RelatedVideoTitle>{title}</RelatedVideoTitle>
        </RelatedVideo>
      </Paper>
    </Link>
  );
}

export default RelatedVideoCard;
