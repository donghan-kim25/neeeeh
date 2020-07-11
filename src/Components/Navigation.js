import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const S_header = styled.header`
    display : flex;
    &:hover {
        background-color:red;
    };
    background-color:blue;
`;
//const S_ul = styled.ul``;
//const S_link = styled(Link)``;


export default ()=>(
    <S_header>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/tv">TV</Link></li>
    <li><Link to="/Detail">Detail</Link></li>    
    </ul>
    </S_header>
    );