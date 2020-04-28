import React, { useState } from 'react'
import { Input } from 'antd'

const { Search } = Input

const SearchForArticles: React.FC = () => {
    const [form, setForm] = useState<string>('')

    const searchForArticles = (name: string) => {

    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(e.target.value)
    }

    return (
        <Search
            placeholder="type name of the article"
            size="middle"
            className="search"
            value={form}
            onChange={onChange}
            enterButton
        />
    )
}

export default SearchForArticles