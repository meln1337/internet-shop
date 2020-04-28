import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button } from 'antd'
import { PlusOutlined, MinusOutlined, DeleteOutlined, ReadOutlined } from '@ant-design/icons'
import { TCartArticle } from '../types/types'

const { Title, Paragraph } = Typography

const CartArticle: React.FC<TCartArticle> = ({ name, description, price, discount, img, id, categories, timestamps, count, addToCart, minusFromCart, deleteFromCart, setLockCart }) => {
    const addToTheCart = () => {
        addToCart({ name, description, price, discount, img, id, categories, timestamps })
    }

    const minusFromTheCart = () => {
        minusFromCart({ name, description, price, discount, img, id, categories, timestamps })
    }

    const deleteFromTheCart = () => {
        deleteFromCart({ name, description, price, discount, img, id, categories, timestamps })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div>
                <Title level={4}>{name}</Title>
                <Paragraph>{description}</Paragraph>
                <Button icon={<DeleteOutlined />} onClick={deleteFromTheCart} />
                <Link to={`/articles/${id}`}><Button icon={<ReadOutlined />} onClick={setLockCart} /></Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <img src={img} alt="" style={{ width: 100 }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <Button icon={<PlusOutlined />} onClick={addToTheCart} />
                    <Button><Paragraph >{count}</Paragraph></Button>
                    <Button icon={<MinusOutlined />} onClick={minusFromTheCart} />
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default CartArticle