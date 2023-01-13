import React from 'react';
import { Input, Button } from 'antd';

import "./searchbar.css";


const onSearch = (value) => console.log(value);

const Searchbar = () =>
    <>
        <Input placeholder="Search" style={{ height: 10, width: 200 }} />
        <Button type="primary" style={{ height: 40, marginLeft: '10px' }}>Search</Button>
    </>

export default Searchbar;