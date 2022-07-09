import styled from 'styled-components';

export const StepTwo = styled.div`
  button {
    position: absolute;
    border: none;
    top: 330px;
    left: 80px;
    width: 149px;
    height: 97px;
    background: ${(props) => props.btnColor} 0% 0% no-repeat padding-box;
    border-radius: 10px 0px 0px 10px;
    opacity: 1;
  }

  p {
    position: absolute;
    top: 378px;
    left: 113px;
    width: 149px;
  }
`;