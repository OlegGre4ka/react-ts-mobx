import styled from "styled-components";

interface IBtnStyled{
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    backgroundColor?:string;
    disabled?:boolean;
    borderColor?:string;
    hoverBackgroundColor?:string;
}
const BtnStyled = styled.button<IBtnStyled>`
  position: relative;
  display: block;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  width: ${({width}) => width ? width : "50px"};
  height: ${({height}) => height ? height : "50px"};
  margin: ${({margin}) => margin ? margin : ""};
  padding: ${({padding}) => padding ? padding : "6px 12px"};
  color: #e5e5e5;
  border: none;
  border-radius: 50%;
  background: ${({backgroundColor}) => backgroundColor ? backgroundColor : " #118a7e"}; 
  cursor: ${({disabled}) => disabled ? "not-allowed" : "pointer"};

  &:hover{
    background: ${({hoverBackgroundColor}) => hoverBackgroundColor ? hoverBackgroundColor : "#3baea0"}; 
  }

`
export default BtnStyled;