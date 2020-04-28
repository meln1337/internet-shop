import React from 'react'
import { Menu, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { withRouter, Link } from 'react-router-dom'
import { THeader, THeaderMDTP, THeaderMSTP } from '../types/types'
import { setOpenCartAC } from '../redux/actions/cart.actions'
import { connect } from 'react-redux'
import { TAppState } from '../redux/store'
import SearchForArticles from './SearchForArticles'

const Header: React.FC<THeader> = ({ location, setOpenCart, articlesCount }) => (
    <header className="header">
        <Menu mode="horizontal">
            <Menu.Item key="store" className={location.pathname === '/' ? 'ant-menu-item-active ant-menu-item-selected' : ''}><Link to="/">Store</Link></Menu.Item>
        </Menu>
        <SearchForArticles />
        <Menu mode="horizontal">
            <Menu.Item key="alipay" onClick={setOpenCart} >
                <Badge count={articlesCount}>
                    <ShoppingCartOutlined style={{ fontSize: 18 }} />
                </Badge>
            </Menu.Item>
        </Menu>
    </header>
)

const mapStateToProps = (state: TAppState): THeaderMSTP => {
    let aCount: number = 0
    for (let count in state.cartReducer.articles) {
        aCount += state.cartReducer.articles[count].count
    }

    return {
        articlesCount: aCount
    }
}

const mapDispatchToProps: THeaderMDTP = {
    setOpenCart: () => setOpenCartAC()
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))