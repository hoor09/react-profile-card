import React from 'react'

export const LoginStatus = () => {
    const isLoggedIn=false;
  return (
    <div>
        {isLogedIn? <h3>Welcome Zainab</h3>:<p>Please Login</p>}
    </div>
  )
}
export default LoginStatus;