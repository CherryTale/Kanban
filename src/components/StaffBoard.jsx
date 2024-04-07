import React, { useState } from 'react';
import { css } from '@emotion/react';

const containerStyles=css`
    width:100%;
    height:100%;
    list-style:none;
    padding:0;
    overflow:auto;
    &>li{
        padding:1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-top:1rem;
        margin-left:1rem;
        margin-right:1rem;
        background-color:#fff;
        &:hover{
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        &>div{
            display: flex;
            align-items: center;
            text-align:left;
            &>img{
                width: 10rem;
                height: 10rem;
                margin-right: 1rem;
            }
            &>div{
                &>h1{
                    font-size:1.5rem;
                    font-family:bold;
                }
                &>p{
                    color:#333;
                    letter-spacing:0.088rem;
                }
            }
        }
    }
`

export default function StaffBoard({
    list
}){
    return (<ul css={containerStyles}>
        {
            list.map((item,index)=>
                <li key={index}>
                    <div>
                        <img src={item.avatar} alt={item.name}/>
                        <div>
                            <h1>{item.name}</h1>
                            <p>{item.describe}</p>
                        </div>
                    </div>
                </li>
            )
        }
    </ul>)
}