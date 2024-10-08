import { Button, Layout, theme } from "antd";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import { useState } from "react";
import ToggleTheme from "./components/ToggleTheme";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Test from "./pages/Test";
const App = () => {
  const { Header, Sider, Content } = Layout;
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [conllapsed, setConllapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={conllapsed}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
        trigger={null}
      >
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleTheme toggleTheme={toggleTheme} darTheme={darkTheme} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            className="toggle"
            onClick={() => setConllapsed(!conllapsed)}
            type="text"
            icon={conllapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Header>
        <Content>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<Test />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
