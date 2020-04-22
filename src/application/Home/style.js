import styled from 'styled-components';
import style from '../../assets/global-style';


export const Top = styled.div`
    display: flex;

`

export const Tab = styled.div`
    height: 44px;
    display: flex;
    flex-direction: row;
  justify-content: space-around;
  background: ${style["theme-color"]};   
  a {
      flex: 1;
      padding: 2px 0;
  }
`

export const TabItem = styled.div`
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`