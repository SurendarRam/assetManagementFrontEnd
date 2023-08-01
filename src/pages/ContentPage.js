import React from 'react'
import Cards from '../components/Cards'
import DatePicker from '../components/DatePicker';
import MatTable from '../components/MatTable';
import  './ContentPage.css';
import Header from '../components/Header';

function ContentPage() {
  return (
    <div className='main-div'>
      <Header/>
     <Cards/>
     <DatePicker/>
     <MatTable/>
    </div>
  )
}

export default ContentPage;
