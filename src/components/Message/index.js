// Write your code here

import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? 'Please Login' : 'Welcome User'

  return <h1>{message}</h1>
}

export default Message
