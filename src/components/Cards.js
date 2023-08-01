import React from 'react'
import PieChart1 from './PieChart1'
import './Cards.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PieChart2 from './PieChart2';
import PieChart3 from './PieChart3';



const Cards = () => {

       const data1 = [
        { category: 'Use', value: 50 },
        { category: 'Stock', value: 40 },
        { category: 'Repair', value: 10 },
      ];
      const data2 = [
        { category: 'Use', value: 40 },
        { category: 'Stock', value: 40 },
        { category: 'Repair', value: 20 },
      ];
      const data3 = [
        { category: 'Use', value: 60 },
        { category: 'Stock', value: 30 },
        { category: 'Repair', value: 10 },
      ];
    
    
      
  return (
    
   <Grid container containerSpacing={12} justifyContent='center' className='container'>
     <Grid  container  item xs={4} className='card-con' >
        <Card className='card'>
            <CardContent style={{borderRadius:'5%'}}>
            <Typography variant="p" component="div" className='tit'>Laptop({data1[0].value+data1[1].value+data1[2].value})</Typography>
            <PieChart1 data={data1}/>
            </CardContent>
        </Card>
    </Grid>
    <Grid container item xs={4} className='card-con'>
        <Card className='card' >
            <CardContent>
            <Typography variant="p" component="div" className='tit'>Mouse({data2[0].value+data2[1].value+data2[2].value})</Typography>
            <PieChart2 data={data2}/>
            </CardContent>
         </Card>
    </Grid>
    <Grid container item xs={4} className='card-con'>
        <Card className='card'>
            <CardContent>
            <Typography variant="p" component="div" className='tit'>Dongle({data3[0].value+data3[1].value+data3[2].value})</Typography>
            <PieChart3 data={data3}/>
            </CardContent>
        </Card>
    </Grid>
   </Grid>

    
   
  )
}

export default Cards;
