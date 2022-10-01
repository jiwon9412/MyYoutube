import React from 'react';
import styles from './playerList.module.css';
import { Grid } from '@mui/material';
import PlayerItem from '../playerItem/playerItem';

const PlayerList = ({ list, display }) => {
  if (display === 'grid') {
    return (
      <Grid container spacing={2} className={styles.listGrid}>
        {list.map((item) => (
          <Grid item xs={2.4} key={item.id}>
            <PlayerItem player={item} display="grid" />
          </Grid>
        ))}
      </Grid>
    );
  }
  if (display === 'list') {
    return (
      <div className={styles.listVertical}>
        {list
          .filter((item, index) => index < 10)
          .map((item) => (
            <PlayerItem player={item} display="list" />
          ))}
      </div>
    );
  }
};

export default PlayerList;
