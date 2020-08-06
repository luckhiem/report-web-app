import React, { useState } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Analyst from './Pages/Analyst';
import Page2 from './Pages/Page2';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  UserOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [isCollape, setCollape] = useState(false)
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={isCollape} onCollapse={(value) => { setCollape(value) }}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[window.location.hash.toString()]} mode="inline">
            <Menu.Item key="#/" icon={<PieChartOutlined />}>Profile<Link to={"/"} />
            </Menu.Item>
            <Menu.Item key="#/Operation/" icon={<UserOutlined />}>Operation<Link to={"/Operation/"} />
            </Menu.Item>
            <Menu.Item key="#/Status/" icon={<BarChartOutlined />}>Status <Link to={"/Status/"} />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-header"/>
          <Content style={{ margin: '24px' }}>
            <div className="site-layout-background" style={{ padding: 24,  minHeight: '100vh' }}>
              <Switch>
                <Route exact path="/" component={Analyst}></Route>
                <Route path="/Operation/" component={Page2}></Route>
                <Route path="/Status/" component={Analyst}></Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Design by KhiemLuc</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
