import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setStepTrue } from "../redux/action";

const StepComplete = (props) => {
  const dispatch = useDispatch();
  const isTicked = useSelector((state) => state.data.isTickedObj);

  const handleClick = () => {
    
    if (props.step === 1){
      let isTickedObj = {
        step1: true,
        step2: isTicked.step2,
        step3: isTicked.step3,
        step4: isTicked.step4
      }
      dispatch(setStepTrue(isTickedObj));
    } else if (props.step === 2){
      let isTickedObj = {
        step1: isTicked.step1,
        step2: true,
        step3: isTicked.step3,
        step4: isTicked.step4
      }
      dispatch(setStepTrue(isTickedObj));
    } else if (props.step === 3){
      let isTickedObj = {
        step1: isTicked.step1,
        step2: isTicked.step2,
        step3: true,
        step4: isTicked.step4
      }
      dispatch(setStepTrue(isTickedObj));
    } else if (props.step === 4) {
      let isTickedObj = {
        step1: isTicked.step1,
        step2: isTicked.step2,
        step3: isTicked.step3,
        step4: true
      }
      dispatch(setStepTrue(isTickedObj));
    }
  }
  return (
    <>
      <button onClick={handleClick}>
        Step Complete
      </button>
    </>
  )
}

export default StepComplete