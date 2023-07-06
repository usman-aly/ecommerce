import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css'

const App = () => {
  const activeManu = true;
  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-10 bottom-10 style={{ z-index: "1000"}}'>
         <TooltipComponent content="Settings" position='top'>
          <button type='button' className="text-3xl p-3 hover:drop-shadow-xl
           hover:bg-gray-200 text-white" style={{ background:'blue', borderRadius: '50%' }}>
            <FiSettings />
          </button>
         </TooltipComponent>
        </div>
        {activeManu ? (
          <div className='w-72 fixed sidebar 
         dark:bg-secondary bg-white'>
            sidebar
          </div>
        ) : (
          <div>
            sidebar w-0
          </div>
        )}
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App