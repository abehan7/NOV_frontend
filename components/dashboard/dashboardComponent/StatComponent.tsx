import { FC, ReactNode } from "react";
import { Icon, Number, Stat, StatTitle } from "../styles/dashboard";

interface StatsComponentProps {
  number: number;
  title: string;
  unit: string;
  icon: ReactNode;
}

const StatComponent: FC<StatsComponentProps> = (props) => {
  return (
    <Stat>
      <Icon>{props.icon}</Icon>
      <Number>
        <span className="item1">{props.number} </span>
        <span className="item2">{props.unit}</span>
      </Number>
      <StatTitle>{props.title}</StatTitle>
    </Stat>
  );
};

export default StatComponent;
