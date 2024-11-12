import './App.css'
import Year from './Year'
import Title from './Title'
import { Button } from 'react-bootstrap'
import BasicButtonExample from './Dropdown'
import Section from './Section'

function App() {
 
  return (
   <div className='section-container'>
   {/* <Year/> */}
   <Title/>
   <div className='add-button'>
       <Button>Add Task</Button>
       <BasicButtonExample />
   </div>
   <div className='gray-bg-con'>
     <Section carName="Tata" />
     <Section carName="Hyundai" />
     <Section carName="Kia" />
     <Section carName="Maruthi" />
   </div>
   </div>
  )
}


export default App
