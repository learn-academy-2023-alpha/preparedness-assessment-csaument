import React from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"

const ModalComponent = ({userName, showModal, setShowModal}) => {
  const toggle = () => {
    setShowModal(!showModal)
  }

  return (<>
    <Modal className="modalContent" isOpen={true} toggle={toggle} backdrop="static" centered>
      <ModalHeader className="modalHeader" toggle={toggle}>
        {`Hello there, ${userName}!`}
      </ModalHeader>
      <ModalBody className="modalBody">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ModalBody>
    </Modal>
    </>)
}

export default ModalComponent
