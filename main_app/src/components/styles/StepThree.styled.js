import styled from 'styled-components';

export const StepThree = styled.div`
  button {
    position: absolute;
    outline: none;
    border: none;
    top: 430px;
    left: 80px;
    width: 149px;
    height: 97px;
    background: ${(props) => props.btnColor} 0% 0% no-repeat padding-box;
    border-radius: 10px 0px 0px 10px;
    opacity: 1;
  }
  p {
    position: absolute;
    top: 480px;
    left: 113px;
    width: 149px;
  }
`;