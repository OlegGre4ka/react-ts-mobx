import React from "react";
import BtnStyled from "./styled";

interface IButton{
    width?: string;
    height?: string;
    backgroundColor?:string;
    disabled?:boolean;
    borderColor?:string;
    hoverBackgroundColor?:string;
    children: React.ReactNode;
    clickHandler:()=>void;
}
export default function Button({ children, clickHandler, disabled,
     width, height, backgroundColor, hoverBackgroundColor, borderColor }:IButton) {   
    return (<BtnStyled
        onClick={clickHandler}
        disabled={disabled}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        borderColor={borderColor}
    >{children}</BtnStyled>)
}