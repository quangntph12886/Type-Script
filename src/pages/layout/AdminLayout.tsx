import React from 'react'
import { Outlet,Link } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <Layout>
            <Layout>
            <Sider width={200} className="site-layout-background">
                  <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}>
                

                <SubMenu key="sub2" icon={<LaptopOutlined />} title="product">
                    <Menu.Item key="5">
                        <Link to='/admin/product/list'>list</Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to='/admin/product/add'>add</Link>
                    </Menu.Item>
                </SubMenu>

                </Menu>
            </Sider>
            <Layout style={{ padding: '24px' }}>
                <Outlet/>
            </Layout>
            </Layout>
        </Layout>
    )
}

export default AdminLayout