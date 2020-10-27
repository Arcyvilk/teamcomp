import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { theme, ThemeProps } from './theme';
import Home from './components/Home';
import Matchup from './components/Matchup';

const StyledApp = styled.div.attrs((theme: ThemeProps) => {
  return {
    style: {
      backgroundColor: theme.primary,
      color: theme.textPrimary,
    },
  };
})`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

function App(): JSX.Element {
  const defaultTheme = 'light';
  return (
    <Router>
      <StyledApp className="App" theme={theme[defaultTheme]}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/matchup">
            <Matchup />
          </Route>
        </Switch>
      </StyledApp>
    </Router>
  );
}

export default App;
