import {UserInputItem, UserEnteredDetails} from './style'

const UserInput = props => {
  const {userInputDetails} = props
  const {textLength, userText} = userInputDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userText} : {textLength}
      </UserEnteredDetails>
    </UserInputItem>
  )
}
export default UserInput
