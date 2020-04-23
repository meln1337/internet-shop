import React from 'react'
import { ArticleProps } from '../types/types'
import { PageHeader, Descriptions, Typography } from 'antd'

const { Paragraph } = Typography

const FullArticle: React.FC<ArticleProps> = ({ name, description, price, discount, img, categories, timestamps, id }) => (
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
            <Paragraph>{description}</Paragraph>
        </PageHeader>
    </main>
)

export default FullArticle;