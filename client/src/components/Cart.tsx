import React from 'react'
import { Modal } from 'antd'
import { connect } from 'react-redux'
import { TAppState } from '../redux/store'
import { TCart, TCartMSTP, TCartMDTP, TArticle } from '../types/types'
import { setLockCartAC, addToCartThunk, minusFromCartThunk, deleteFromCartThunk } from '../redux/actions/cart.actions'
import CartArticle from './CartArticle'

const Cart: React.FC<TCart> = ({ open, articles, setLockCart, addToCart, minusFromCart, deleteFromCart }) => {
    return (
        <Modal
            title="Cart"
            visible={open}
            onOk={setLockCart}
            onCancel={setLockCart}
        >
            {Object.keys(articles).map((article: any) => {
                console.log(article)
                return (
                    <CartArticle
                        name={articles[article].article.name} 
                        description={articles[article].article.description}
                        price={articles[article].article.price}
                        discount={articles[article].article.discount}
                        img={articles[article].article.img}
                        id={articles[article].article.id}
                        categories={articles[article].article.categories}
                        timestamps={articles[article].article.timestamps}
                        count={articles[article].count}
                        addToCart={addToCart}
                        minusFromCart={minusFromCart}
                        deleteFromCart={deleteFromCart}
                        setLockCart={setLockCart}
                    />
                )
            })}
        </Modal>
    )
}

const mapStateToProps = (state: TAppState): TCartMSTP => ({
    articles: state.cartReducer.articles,
    open: state.cartReducer.open
})

const mapDispatchToProps: TCartMDTP = {
    setLockCart: () => setLockCartAC(),
    addToCart: (article: TArticle) => addToCartThunk(article),
    minusFromCart: (article: TArticle) => minusFromCartThunk(article),
    deleteFromCart: (article: TArticle) => deleteFromCartThunk(article)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)