import { copiedToast } from "../../../utils/toast";
import { Box, InputStatus, InputTitle } from "../styles/dashboard";
import Setting from "../../Icons/Setting";
import { FC } from "react";

interface InputComponentProps {
  title: string;
  status: string;
  indicator: string;
  onClick: () => void;
  onClickInputStatus?: () => void;
}

const InputComponent: FC<InputComponentProps> = (props) => {
  const onClickInputContent = () => {
    navigator.clipboard.writeText(props.status);
    copiedToast();
  };

  return (
    <Box style={{ flex: 1, width: "100%" }}>
      <InputTitle>
        <div>{props.title}</div>
        <div
          className="input__title__icon toast__icon__status"
          onClick={props.onClick}
        >
          <Setting />
        </div>
      </InputTitle>
      <InputStatus className="input__status" onClick={onClickInputContent}>
        <span>{props.status}</span>
      </InputStatus>
    </Box>
  );
};

export default InputComponent;
