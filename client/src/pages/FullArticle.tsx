import React from 'react'
import { TFullArticle } from '../types/types'
import { PageHeader, Descriptions, Typography, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

const { Paragraph } = Typography

const FullArticle: React.FC<TFullArticle> = ({ name, description, price, discount, img, categories, timestamps, id, addToCart }) => {
    const addToTheCart = () => {
        addToCart({ name, description, price, discount, img, categories, timestamps, id })
    }

    return (
        <main className="main">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={name}
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Creation Time">{new Date(timestamps).toLocaleDateString()}</Descriptions.Item>
                </Descriptions>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
                    <img src={img} alt="example" style={{ width: 200 }} />
                </div>
                <Paragraph>{discount ? (price - discount) : price} $</Paragraph>
                <Paragraph>{description}</Paragraph>
                <Paragraph>
                    <Button type="primary" icon={<ShoppingCartOutlined />} size="large" onClick={addToTheCart}>
                        Add to the cart
                    </Button>
                </Paragraph>
            </PageHeader>
        </main>
    )
}

export default FullArticle;