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



// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   button: {
//     marginRight: theme.spacing(1),
//   },
//   backButton: {
//     marginRight: theme.spacing(1),
//   },
//   completed: {
//     display: 'inline-block',
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
  
// }));

function getSteps() {
  return ['From val: 175', 'From val: 150', 'From val: 100','From val: 50'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div style={{display:'flex',alignItems:'center'}}>
        <div>
          <Typography >pipeline count: 3</Typography>
          <Typography>Job Count: 30</Typography>
          <Typography>BO Count: 30</Typography>
        </div>
        <span style={{ borderLeft:' 1px solid grey',height: '50px',marginLeft:'2%',marginRight:'2%'}}></span>
        <div >
        <Typography >Updated by: Name</Typography>
        <Typography >Pipeline group: Name</Typography>
      </div>
      </div>
      );
    case 1:
      return (
        <div style={{display:'flex',alignItems:'center'}}>
        <div>
          <Typography >pipeline count: 3</Typography>
          <Typography>Job Count: 30</Typography>
          <Typography>BO Count: 30</Typography>
        </div>
        <span style={{ borderLeft:' 1px solid grey',height: '50px',marginLeft:'2%',marginRight:'2%'}}></span>
        <div >
        <Typography >Updated by: Name</Typography>
        <Typography >Pipeline group: Name</Typography>
      </div>
      </div>
      );
    case 2:
      return (
        <div style={{display:'flex',alignItems:'center'}}>
        <div>
          <Typography >pipeline count: 3</Typography>
          <Typography>Job Count: 30</Typography>
          <Typography>BO Count: 30</Typography>
        </div>
        <span style={{ borderLeft:' 1px solid grey',height: '50px',marginLeft:'2%',marginRight:'2%'}}></span>
        <div >
        <Typography >Updated by: Name</Typography>
        <Typography >Pipeline group: Name</Typography>
      </div>
      </div>
      );
      case 3:
      return (
        <div style={{display:'flex',alignItems:'center'}}>
        <div>
          <Typography >pipeline count: 3</Typography>
          <Typography>Job Count: 30</Typography>
          <Typography>BO Count: 30</Typography>
        </div>
        <span style={{ borderLeft:' 1px solid grey',height: '50px',marginLeft:'2%',marginRight:'2%'}}></span>
        <div >
        <Typography >Updated by: Name</Typography>
        <Typography >Pipeline group: Name</Typography>
      </div>
      </div>
      );
    default:
      return 'Unknown step';
  }
}
const VerticalStepper = () => {
  // const classes = useStyles();
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
              
              
            <StepLabel onClick={handleStep(index)} >{label}<span className="stepLabel">05-09-2023</span></StepLabel>
            
            
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
