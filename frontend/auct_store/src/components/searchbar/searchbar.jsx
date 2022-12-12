import React from 'react';
import { Input } from 'antd';
const { Search } = Input;
import "./searchbar.css";


const onSearch = (value) => console.log(value);

const Searchbar = () => <Search
    
    placeholder="input search text"
    enterButton="Search"
    size="large"
    onSearch={onSearch}
/>;

export default Searchbar;