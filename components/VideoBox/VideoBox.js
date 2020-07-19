import buttonStyles from '../../styles/components/buttons.module.scss';
import styles from './VideoBox.module.scss';
import React from 'react';
import ClosedCaptionIcon from '@material-ui/icons/ClosedCaption';
import CropFreeIcon from '@material-ui/icons/CropFree';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReactPlayer from 'react-player/lazy';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { Grid, IconButton, Slider } from '@material-ui/core';

const VideoBox = () => {
  const [slideValue, setSlideValue] = React.useState(90);
  const handleChange = (event, newSlideValue) => {
    setSlideValue(newSlideValue);
  };

  return (
    <div className={styles.videoWrapper}>
      <div className="videoPlayBox">
        <ReactPlayer
          url="https://youtu.be/xjadNS2HBpM"
          className="player"
          width={'100%'}
          height={500}
          autoPlay={false}
          controls={true}
          volume={1}
          muted={false}
        />
      </div>
      <div className={styles.playController}>
        <div className={styles.playAndVolume}>
          <Grid item xs>
            <IconButton className={buttonStyles.IconButtonLg}>
              <div>
                <PlayArrowIcon fontSize="large" style={{ color: '#fff' }} />
              </div>
            </IconButton>
          </Grid>
          <VolumeDown className={styles.volume} />
          <Slider
            className={styles.volumeMiddle}
            value={slideValue}
            onChange={handleChange}
          />
          <VolumeUp className={styles.volume} />
        </div>
        <div className={styles.rightController}>
          <IconButton>
            <div>
              <ClosedCaptionIcon fontSize="large" style={{ color: '#fff' }} />
            </div>
          </IconButton>
          <IconButton>
            <div>
              <CropFreeIcon fontSize="large" style={{ color: '#fff' }} />
            </div>
          </IconButton>
        </div>
      </div>
      <div className={styles.videoMark}>
        <ul>
          <li className={styles.signUp}>
            <span>Signup</span>
          </li>
          <li className={styles.explore}>
            <span>Explore</span>
          </li>
          <li className={styles.preview}>
            <span>Course Preview</span>
          </li>
          <li className={styles.video}>
            <span>Video & Markers</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoBox;
