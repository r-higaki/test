import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

//変更予定箇所
const StyledButton = styled(Button)`
  background: #6699ff;
  border-radius: 50px;
  border: 0;
  color: white;
  height: 100px;
  padding: 30px 50px;
  font-size: 24px;
`;

export default function StyledComponents() {
  return (
    <div>
      <Button>Material-UI</Button>
      <StyledButton>Styled Components</StyledButton>
    </div>
  );
}
