import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, Paper } from './styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Collapse,
  Box,
} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { theme } from '../../theme';
import { getAllies, getEnemies } from '../../../store/playersSlice';
import { TPlayer, TMastery } from '../../../types/players';

type ChampionInfoProps = {
  mastery: TMastery;
};
function ChampionInfo(props: ChampionInfoProps): JSX.Element {
  const { mastery } = props;
  return (
    <TableRow>
      <TableCell>{mastery.championId}</TableCell>
      <TableCell>{mastery.championLevel}</TableCell>
      <TableCell>{mastery.championPoints}</TableCell>
    </TableRow>
  );
}

type PlayerProps = {
  player: TPlayer;
};
function Player(props: PlayerProps): JSX.Element {
  const { player } = props;
  const [open, setOpen] = useState(false);
  const masteries = player.mastery.map((mastery: TMastery) => (
    <ChampionInfo mastery={mastery} key={mastery.lastPlayTime} />
  ));
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell align="right">{player.name}</TableCell>
        <TableCell align="right">DIAMOND</TableCell>
        <TableCell align="right">IV</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Champion</TableCell>
                    <TableCell>Level</TableCell>
                    <TableCell>Points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{masteries} </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default function Matchup(): JSX.Element {
  const allies = useSelector(getAllies);
  const enemies = useSelector(getEnemies);
  return (
    <Wrapper theme={theme.light}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>IGN</TableCell>
              <TableCell>Division</TableCell>
              <TableCell>Tier</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enemies.map(enemy => (
              <Player key={enemy.name} player={enemy} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>IGN</TableCell>
              <TableCell>Division</TableCell>
              <TableCell>Tier</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allies.map(ally => (
              <Player key={ally.name} player={ally} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
}
