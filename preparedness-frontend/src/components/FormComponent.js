import React from 'react'
import { Button, Input, Label } from "reactstrap"

const FormComponent = ({ userName, updateText, submitEntry, resetForm }) => {
  const submit = () => {
    submitEntry()
  }

  const reset = () => {
    resetForm()
  }

  return (
    <div className="form">
      <div className="input">
        <Label for="name">Enter your name</Label>
        <Input onChange={updateText} value={userName} />
      </div>
      <div className="buttons">
        <Button onClick={submit}>Click Me</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  )
}

export default FormComponent