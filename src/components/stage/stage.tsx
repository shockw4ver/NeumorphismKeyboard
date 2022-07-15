import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { getVar } from '../../theme/helpers';

const _Stage = styled.div`
  background-color: ${getVar('--primary-color')};
`;

export interface IStageProps extends PropsWithChildren {
  color?: string,
  className?: string,
}

export const Stage = (props: IStageProps) => (
  <_Stage className={props.className}>
    { props.children }
  </_Stage>
);
