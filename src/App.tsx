import Button from '@mui/material/Button'
import NewWorkout from './workout/NewWorkout'
import React from 'react'

const App: React.FC = () => {
  return (
    <div className="App">
      EZFIT
      <Button color="primary" variant="outlined">
        Primary
      </Button>
      <Button color="secondary" variant="outlined">
        Secondary
      </Button>
      <Button color="error" variant="outlined">
        Error
      </Button>
      <Button color="warning" variant="outlined">
        Warning
      </Button>
      <Button color="info" variant="outlined">
        Info
      </Button>
      <NewWorkout />
    </div>
  )
}

export default App
