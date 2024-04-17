import { ChangeEvent } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type PopUpProps = {
  title: string;
  description?: string;
  inputValue: string;
  inputPlaceHolder?: string;
  onInputValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  buttonMessage: string;
  buttonAction: () => void;
};
type Input = PopUpProps & {
  show: boolean;
  onHide: () => void;
};
const OneInputPopUp = ({
  show,
  onHide,
  title,
  description,
  inputValue,
  inputPlaceHolder,
  onInputValueChange,
  buttonMessage,
  buttonAction,
}: Input) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Dialog>
        <Modal.Header className="flex-column-reverse" closeButton>
          <p>{description}</p>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="number"
            className="form-control"
            value={inputValue}
            onChange={onInputValueChange}
            placeholder={inputPlaceHolder}
          />
        </Modal.Body>

        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={buttonAction}>
            {buttonMessage}
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default OneInputPopUp;
