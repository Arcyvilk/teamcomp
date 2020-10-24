import React from 'react';
import { Input } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export default function Home() {
  return (
    <Wrapper>
      <Column>
        {[0, 1, 2, 3, 4].map((player: number) => (
          <Input key={`ally-${player}`} />
        ))}
      </Column>
      <Column>
        {[0, 1, 2, 3, 4].map((player: number) => (
          <Input key={`enemy-${player}`} />
        ))}
      </Column>
    </Wrapper>
  );
}
