import React from 'react';
import styles from './playerList.module.css';
import { Grid } from '@mui/material';
import PlayerItem from './playerItem';

const PlayerList = ({ list }) => {
  return (
    <Grid container spacing={2} className={styles.listGrid}>
      {list.map((item) => (
        <Grid item xs={2.4} key={item.id}>
          <PlayerItem player={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PlayerList;
