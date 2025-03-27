
"use client";

import React, { useState } from "react";
import SvgBase from '../Componentes/SvgBase';
import SvgTesteSvgConv from '../Componentes/SvgTesteSvgConv';

export default function Sedan() {
    return (
    <div>
        <SvgBase width={600} height={600}>
            <SvgTesteSvgConv width="100%" height="100%" />
        </SvgBase>
    </div>
       ) ;
}  