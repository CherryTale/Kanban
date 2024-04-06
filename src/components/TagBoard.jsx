import React, { useState } from 'react';
import { css } from '@emotion/react';

const containerStyles=css`
    width:100%;
    height:100%;
    list-style:none;
`

const itemStyles=css`
    color:black;
`

export default function TagBoard({
    list
}){
    return (<ul css={containerStyles}>
        {
            list.map(item=>
                <li css={itemStyles} key={item.name}>
                    {item}
                </li>
            )
        }
    </ul>)
}