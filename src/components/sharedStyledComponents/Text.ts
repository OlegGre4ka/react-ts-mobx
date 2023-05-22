import styled from "styled-components";

interface IText {
    fontFamily?: string;
    color?: string;
    alignSelf?: string;
    fontSize?: string;
    fontWeight?: string;
    marginLeft?: string;
    marginBottom?: string;
    textDecoration?: string;
    textAlign?: string;
}

export const Text = styled.span<IText>`
  display: block;
  align-self: ${({ alignSelf }) => alignSelf ? alignSelf : ""};
  font-family: ${({ fontFamily }) => fontFamily ? fontFamily : 'Roboto'};
  color: ${({ color }) => color ? color : "#E1FCB7"}; 
  font-size: ${({ fontSize }) => fontSize ? fontSize : "20px"};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : "400"};
  margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : ""};
  margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : ""};
  text-transform: ${({ textDecoration }) => textDecoration && textDecoration}; 
  text-align: ${({ textAlign }) => textAlign ? textAlign : "left"}; 
  white-space: normal;
`
export default Text