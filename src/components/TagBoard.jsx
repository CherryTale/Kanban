import React, { useState } from 'react';
import { css } from '@emotion/react';

const containerStyles=css`
    width:80vw;
    height:100%;
    list-style:none;
    padding:0;
    overflow:auto;
    display:flex;
    flex-flow:row wrap;
    flex:0 0 auto;
    align-content:flex-start;
`

const itemStyles=css`
    width:10rem;
    height:6rem;
    box-shadow: 0 0.2rem 0.2rem rgba(0,0,0,0.2), inset 0 1px #fff;
    margin:1rem;
    padding:0.8rem;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:4rem;
    &>div{
        &>h1{
            margin:0;
            padding:0;
        }
        &>p{
            margin:0;
            padding:0;
        }
    }
`

export default function TagBoard({
    list
}){
    return (<ul css={containerStyles}>
        {
            list.map((item,index)=>
                <li style={{backgroundColor:item.color}} css={itemStyles} key={index}>
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.describe}</p>
                    </div>
                </li>
            )
        }
    </ul>)
}