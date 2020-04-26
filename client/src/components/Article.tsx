import React from 'react'
import { Card } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { TArticle } from '../types/types'

const { Meta } = Card

const Article: React.FC<TArticle> = ({ name, description, price, discount, img, categories, timestamps, id }) => (
    <Card
        cover={
            <img
                alt="example"
                src={img}
            />
        }
        actions={[
            <ShoppingCartOutlined key="add_to_cart" />
        ]}
        className="article"
    >
        <Meta
            title={name}
            description={description}
        />
        <br/>
        <Meta
            description={`${price - discount} $`}
        />
    </Card>
)

export default Article