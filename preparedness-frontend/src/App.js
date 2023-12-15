import React, { useState } from "react"
import ModalComponent from "./components/ModalComponent"
import FormComponent from "./components/FormComponent"
import "./App.css"

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [userName, setUserName] = useState("")

  const updateText = (e) => {
    setUserName(e.target.value)
  }

  const submitEntry = (e) => {
    setShowModal(!showModal)
  }

  const resetForm = (e) => {
    setUserName("")
  }

  return (
    <div className="entire-content">
      <div className="title">Preparedness Assessment</div>
      <FormComponent
        userName={userName}
        updateText={updateText}
        submitEntry={submitEntry}
        resetForm={resetForm}
      />
      <ModalComponent
        userName={userName}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default App