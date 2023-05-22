import styled from "styled-components";

interface IFlexBox{
    justifyContent?: string;
    flexDirection?: string;
    alignItems?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    backgroundColor?: string;
    cursor?: string;

}
const FlexBox = styled.div<IFlexBox>`
  display: flex;
  justify-content: ${({justifyContent})=> justifyContent ? justifyContent : null};
  flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : null};
  align-items: ${({alignItems}) => alignItems ? alignItems : null};
  width: ${({width}) => width ? width : ""};
  height: ${({height}) => height ? height : ""};
  margin: ${({margin}) => margin ? margin : ""};
  padding: ${({padding}) => padding ? padding : ""};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ""};
  cursor:${({cursor}) => cursor ? cursor : "auto"};
  transition: all 0.3s ease 0s;
`


export default FlexBox