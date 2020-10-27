import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import { Wrapper, Paper, Card, Title, TextField, Alert } from './styles';
import { theme } from '../../theme';
import { TPlayer } from '../../../types/players';
import { savePlayers } from '../../../store/playersSlice';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const [allyPlayers, setAllyPlayers] = useState('' as string);
  const [enemyPlayers, setEnemyPlayers] = useState('' as string);
  const [error, setError] = useState('' as string);

  const onScoutClick = async () => {
    const alliesIGNs = allyPlayers.split(',').map(player => player.trim());
    const enemiesIGNs = enemyPlayers.split(',').map(player => player.trim());
    const body = {
      allies: alliesIGNs,
      enemies: enemiesIGNs,
    };
    const response = await fetch('http://localhost:8123/api/players/scout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response?.ok) {
      setError('Something went wrong.');
    }
    const players = await response.json();
    const allies = players.filter(
      (player: TPlayer) => player.allignment === 'ally',
    );
    const enemies = players.filter(
      (player: TPlayer) => player.allignment === 'enemy',
    );
    dispatch(savePlayers({ allies, enemies }));
    history.push('/matchup');
  };
  return (
    <Wrapper theme={theme.light}>
      <Paper theme={theme.light}>
        <Grid container>
          <Grid item xs={6}>
            <Card theme={theme.light}>
              <Title>Your team</Title>
              <TextField
                id="outlined-multiline-static"
                theme={theme.light}
                placeholder={'IGNs of allies (separated by commas)'}
                multiline
                rows={4}
                variant="outlined"
                value={allyPlayers}
                onChange={event => setAllyPlayers(event.target.value)}
                error={allyPlayers.length === 0}
              />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card theme={theme.light}>
              <Title>Enemy team</Title>
              <TextField
                id="outlined-multiline-static"
                theme={theme.light}
                placeholder={'IGNs of enemies (separated by commas)'}
                multiline
                rows={4}
                variant="outlined"
                value={enemyPlayers}
                onChange={event => setEnemyPlayers(event.target.value)}
                error={enemyPlayers.length === 0}
              />
            </Card>
          </Grid>
        </Grid>
        <Button
          color="primary"
          variant="contained"
          style={{ marginBottom: '20px' }}
          onClick={onScoutClick}
          disabled={allyPlayers.length === 0 || enemyPlayers.length === 0}>
          Scout
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
      </Paper>
    </Wrapper>
  );
}
