import React from "react";
import { Layout, Menu, theme } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router";
import type { MenuProps } from "antd";
import { CodeSandboxOutlined, UserOutlined } from "@ant-design/icons";
import { ROUTE } from "../../constants/routes";
import "./AdminLayout.scss";

const { Content, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("Product", ROUTE.PRODUCTS, <CodeSandboxOutlined />),
    getItem("User", ROUTE.USERS, <UserOutlined />),
];

const AdminLayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();

    const location = useLocation();

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {}}
                theme="light"
                onCollapse={(collapsed, type) => {}}
            >
                <Menu
                    className="admin-menu-sidebar"
                    theme="light"
                    mode="inline"
                    items={items}
                    onClick={(info) => navigate(info.key)}
                    selectedKeys={[location.pathname]}
                />
            </Sider>
            <Layout>
                <Content style={{ margin: "10px 10px" }}>
                    <div
                        style={{
                            padding: 24,
                            height: "100vh",
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
