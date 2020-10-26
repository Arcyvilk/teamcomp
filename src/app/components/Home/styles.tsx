import {
  Card as MUICard,
  // Input as MUIInput,
  Paper as MUIPaper,
  TextField as MUITextField,
} from '@material-ui/core';
import { Alert as MUIAlert } from '@material-ui/lab';
import styled from 'styled-components';
import { ThemeProps } from '../../theme';

type ThemeType = {
  theme: ThemeProps;
};

export const Wrapper = styled.div.attrs(({ theme }: ThemeType) => {
  return {
    style: {
      backgroundColor: theme.secondary,
    },
  };
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;

export const Paper = styled(MUIPaper).attrs(({ theme }: ThemeType) => {
  return {
    style: {
      backgroundColor: theme.primary,
    },
  };
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled(MUICard).attrs(({ theme }: ThemeType) => {
  return {
    style: {
      backgroundColor: theme.secondary,
    },
  };
})`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  margin: 20px;
`;

export const TextField = styled(MUITextField).attrs(({ theme }: ThemeType) => {
  return {
    style: {
      backgroundColor: theme.primary,
    },
  };
})`
  margin-bottom: 2px;
`;

export const Title = styled.h3`
  margin: 0 0 20px 0;
`;

export const Alert = styled(MUIAlert)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
`;
