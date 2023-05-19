import {Component} from 'react'

import {v4} from 'uuid'

import UserInput from '../UserInput'

import {
  BgContainer,
  Container,
  LeftContainer,
  InfoCardContainer,
  Info,
  UserInputList,
  RightContainer,
  Heading,
  AddInputContainer,
  CustomInput,
  AddButton,
  EmptyImg,
} from './style'

class CharCounter extends Component {
  state = {
    userInput: '',
    userInputsList: [],
  }

  onChangeUserInput = e => {
    this.setState({userInput: e.target.value})
  }

  onSubmitUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userText: userInput,
      textLength: userInput.length,
    }
    this.setState(prev => ({
      userInputsList: [...prev.userInputsList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {userInputsList} = this.state
    return userInputsList.length === 0 ? (
      <EmptyImg
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
        alt="no user inputs"
      />
    ) : (
      userInputsList.map(eachInput => (
        <UserInput userInputDetails={eachInput} key={eachInput.id} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <Container>
          <LeftContainer>
            <InfoCardContainer>
              <Info>
                Count the characters like a <br /> Boss...
              </Info>
            </InfoCardContainer>
            <UserInputList>{this.renderUserInputs()}</UserInputList>
          </LeftContainer>
          <RightContainer>
            <Heading>Character Counter</Heading>
            <AddInputContainer onSubmit={this.onSubmitUserInput}>
              <CustomInput
                type="text"
                value={userInput}
                placeholder="Enter the characters here"
                onChange={this.onChangeUserInput}
              />
              <AddButton type="submit">Add</AddButton>
            </AddInputContainer>
          </RightContainer>
        </Container>
      </BgContainer>
    )
  }
}
export default CharCounter
