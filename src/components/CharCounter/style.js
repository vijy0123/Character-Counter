import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  margin: 20px;
  border-radius: 20px;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  box-shadow: 0px 1px 2px 1px #ff11;
  border: none;
`

export const LeftContainer = styled.div`
  background-color: #ffc533;
  width: 50%;
  padding: 20px;
  height: 95vh;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
export const InfoCardContainer = styled.div`
  background-color: #ffbf1f;
  padding: 20px;
`

export const Info = styled.h1`
  color: #334155;
  font-weight: bold;
  font-size: 32px;
  font-family: 'Roboto';
  line-height: 50px;
`

export const UserInputList = styled.ul`
  margin-top: 50px;
`

export const RightContainer = styled.div`
  background-color: #0f172a;
  width: 50%;
  padding: 20px;
  height: 95vh;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const Heading = styled.h1`
  color: #ffbf1f;
  font-weight: bold;
  font-size: 32px;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 60px;
`

export const AddInputContainer = styled.form`
  display: flex;
`

export const CustomInput = styled.input`
  height: 35px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  border: none;
  padding-left: 15px;
  color: #475569;
  font-size: 16px;
`

export const AddButton = styled.button`
  height: 35px;
  background-color: #ffc533;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 15px;
  padding: 10px 20px 10px 20px;
  color: #334155;
  font-weight: bold;
  font-size: 14px;
  font-family: 'Roboto';
`

export const EmptyImg = styled.img`
  height: 400px;
  width: 100%;
  padding: 50px;
  margin-top: 60px;
`
