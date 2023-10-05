import styled from 'styled-components'

export const MusicItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  list-style-type: none;
  align-items: flex-start;
  justify-content: space-between;
`
export const Image = styled.img`
  height: 100px;
  width: 150px;
  margin-left: 10px;
  @media screen and (max-width: 575px) {
    height: 80px;
    width: 100px;
    margin-left: 0px;
    padding-left: 0px;
  }
`
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

export const P = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => props.color};
  font-weight: 500;
  margin-top: ${props => props.margin};
  padding-top: 4px;
  padding-bottom: 0px;
  margin-bottom: 5px;
  padding-left: 15px;
  @media screen and (max-width: 575px) {
    padding-left: 0px;
    margin-bottom: 5px;
    font-size: 13px;
    margin-left: 7px;
  }
`
export const Div1 = styled.div`
  display: flex;
`
export const DeleteButton = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  margin-top: 15px;
  margin-left: 20px;
  cursor: pointer;
`
export const Div2 = styled.div`
  display: flex;
  margin-right: 100px;
  margin-top: 10px;
`
