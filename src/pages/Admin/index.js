import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import SideBar from './../../components/layout/menu'
import './index.less'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;


class Admin extends React.Component{
    constructor(props) {
        super(props)
        
    }
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render(){
        return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideBar />
            <Layout className="site-layout">
                {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                    })}
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {/* {this.props.children} */}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    
                </Footer>
            </Layout>
            
        </Layout>
        )
    }
}
export default Admin
