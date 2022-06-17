import { Box, Status, Title, Toggle } from "../styles/dashboard";
import ToggleIcon from "../../Icons/Toggle";
import { FC } from "react";

interface ToggleBtnComponentProps {
  title: string;
  status: boolean;
  handleClick: () => void;
}

const ToggleBtnComponent: FC<ToggleBtnComponentProps> = (props) => {
  return (
    <Box>
      <Title>{props.title}</Title>
      <Status>
        {/* 색깔도 on off에 따라서 초록색 빨강색 테두리건 뭐건 */}
        <span>{props.status ? "ON" : "OFF"}</span>
        <Toggle
          onClick={props.handleClick}
          status={props.status}
          className="toast__icon__status"
        >
          <ToggleIcon />
        </Toggle>
      </Status>
    </Box>
  );
};

export default ToggleBtnComponent;
