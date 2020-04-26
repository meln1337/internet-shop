import React from 'react'
import { Menu, Input } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { withRouter, Link } from 'react-router-dom'
import { THeader } from '../types/types'

const { Search } = Input

const Header: React.FC<THeader> = ({ location }) => (
    <header className="header">
        <Menu mode="horizontal">
            <Menu.Item key="store" className={location.pathname === '/' ? 'ant-menu-item-active ant-menu-item-selected' : ''}><Link to="/">Store</Link></Menu.Item>
        </Menu>
        <Search
            placeholder="type name of the article"
            size="middle"
            className="search"
            enterButton
        />
        <Menu mode="horizontal">
            <Menu.Item key="alipay">
                <ShoppingCartOutlined />
            </Menu.Item>
        </Menu>
    </header>
)

export default withRouter(Header);