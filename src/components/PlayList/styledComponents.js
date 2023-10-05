import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BgImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 40vh;
  @media screen and (max-width: 575px) {
    background-repeat: no-repeat;
    height: 100%;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 1000;
  color: #ffffff;
  padding-left: 40px;
  padding-top: 120px;
  padding-bottom: 0px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    padding-top: 170px;
    padding-left: 60px;
    font-size: 35px;
  }
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  padding-left: 10px;
  padding-top: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    padding-left: ${props => props.padding};
    margin-bottom: 40px;
    font-size: 25px;
    padding-left: 40px;
    padding-top: 10px;
  }
`
export const SongsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #152850;
  min-height: 80vh;
  width: 100%;
`
export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Container = styled.div`
  overflow-y: scroll;
  margin-right: 20px;
  margin-top: 20px;
  scroll-margin-right: 5px;
  scroll-margin-top: 20px;
  @media screen and (max-width: 575px) {
    margin-right: 5px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  border-width: 1px;
  border-color: #ffffff;
  flex-direction: row;
  margin: 0px;
  border-style: solid;
  border-radius: 3px;
  margin-top: 30px;
  margin-bottom: 10px;
  height: 30px;
  width: 250px;
  margin-right: 30px;
  @media screen and (max-width: 767px) {
    width: 150px;
    margin-right: 15px;
  }
`
export const SearchIcon = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50px;
  border-width: 1px;
  border-left: 1px;
  border-right: 0px;
  border-top: 0px;
  border-bottom: 0px;
  border-style: solid;
  border-color: #ffffff;
`
export const InputElement = styled.input`
background-color: transparent;
outline: none;
cursor: pointer;
border - color: transparent;
font-family: 'Roboto';
color: black;
display: flex;
align-self: center;
width: 250px;
border : 0px;
@media screen and(max - width: 767px) {
    width: 100px;
}
`
export const Paragraph2 = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  font-weight: 500;
`
export const NoSongsContainer = styled.div`
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: center;
`
export const Head = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  padding-left: 10px;
  padding-top: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    padding-left: ${props => props.padding};
    margin-bottom: 40px;
    font-size: 25px;
    padding-left: 40px;
    padding-top: 10px;
  }
`
