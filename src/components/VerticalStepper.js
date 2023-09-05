import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import './VerticalStepper.css'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  
}));

function getSteps() {
  return ['From val: 175', 'From val: 150', 'From val: 100','From val: 50'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <Typography >pipeline count: 3</Typography>
          <Typography>Job Count: 30</Typography>
          <Typography>BO Count: 30</Typography>
        </>
      );
    case 1:
      return (
        <>
          <Typography >pipeline count: 3</Typography>
          <Typography>Job Count: 30</Typography>
          <Typography>BO Count: 30</Typography>
        </>
      );
    case 2:
      return (
        <>
          <Typography >pipeline count: 3</Typography>
          <Typography>Job Count: 30</Typography>
          <Typography>BO Count: 30</Typography>
        </>
      );
      case 3:
      return (
        <>
          <Typography >pipeline count: 3</Typography>
          <Typography>Job Count: 30</Typography>
          <Typography>BO Count: 30</Typography>
        </>
      );
    default:
      return 'Unknown step';
  }
}
const VerticalStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <div className='stepperDiv'>
      <Stepper orientation="vertical" nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label} className='content' >
              
              <span className="stepLabel">05-09-2023</span>
            <StepLabel onClick={handleStep(index)}>{label}</StepLabel>
            
              <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      </div>
  )
}

export default VerticalStepper
