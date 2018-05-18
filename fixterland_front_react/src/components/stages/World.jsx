import React from 'react';
import {Midgard} from './Midgard';
export const World =({position,profile,muñequito})=>(
    <div>
    <Midgard {...position} {...profile} {...muñequito} />
    </div>
)