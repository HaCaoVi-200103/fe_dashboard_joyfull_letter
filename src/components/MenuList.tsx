import { Menu } from "antd";
import {
  AppstoreOutlined,
  AreaChartOutlined,
  BarsOutlined,
  HomeOutlined,
  PayCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { MenuInfo } from "rc-menu/lib/interface";
const menuItems = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: "Home",
  },
  {
    key: "activity",
    icon: <AppstoreOutlined />,
    label: "Activity",
  },
  {
    key: "subtasks",
    icon: <BarsOutlined />,
    label: "Tasks",
    children: [
      {
        key: "task-1",
        label: "Task 1",
      },
      {
        key: "task-2",
        label: "Task 2",
      },
      {
        key: "tasks",
        label: "Subtasks",
        children: [
          {
            key: "subtask-1",
            label: "Subtask 1",
          },
          {
            key: "subtask-2",
            label: "Subtask 2",
          },
        ],
      },
    ],
  },
  {
    key: "progress",
    icon: <AreaChartOutlined />,
    label: "Progress",
  },
  {
    key: "payment",
    icon: <PayCircleOutlined />,
    label: "Payment",
  },
  {
    key: "setting",
    icon: <SettingOutlined />,
    label: "Setting",
  },
];
interface Props {
  darkTheme: boolean;
}
const MenuList: React.FC<Props> = ({ darkTheme }) => {
  const navigate = useNavigate();

  const handleClick = (e: MenuInfo) => {
    navigate(`/${e.key}`);
  };
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
      items={menuItems}
      onClick={(e) => handleClick(e)}
    />
  );
};

export default MenuList;
