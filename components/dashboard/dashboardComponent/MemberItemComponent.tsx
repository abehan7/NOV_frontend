import { FC, ReactNode } from "react";
import { copiedToast } from "../../../utils/toast";
import { MemberItem } from "../styles/dashboard";

interface MemberComponentProps {
  title: string;
  wallet: string;
  icon?: ReactNode;
  onClick: () => void;
}
const MemberItemComponent: FC<MemberComponentProps> = (props) => {
  const onClickWalletContent = () => {
    navigator.clipboard.writeText(props.wallet);
    copiedToast();
  };
  return (
    <MemberItem>
      <span className="member">{props.title}</span>
      <span className="wallet" onClick={onClickWalletContent}>
        {props.wallet}
      </span>
      <div className="icon toast__icon__status" onClick={props.onClick}>
        {props.icon}
      </div>
    </MemberItem>
  );
};

export default MemberItemComponent;
