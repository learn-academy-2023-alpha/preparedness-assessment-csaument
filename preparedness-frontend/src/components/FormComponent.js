import React from 'react'
import { Button, Input, Label } from "reactstrap"

const FormComponent = ({userName, updateText, submitEntry, resetForm}) => {
  return (
    <div className="form">
    <div className="input">
      <Label for="name">Enter your name</Label>
      <Input onChange={updateText} value={userName} />
    </div>
    <div className="buttons">
      <Button onClick={submitEntry}>Click Me</Button>
      <Button onClick={resetForm}>Reset</Button>
    </div>
    </div>
  )
}

export default FormComponent