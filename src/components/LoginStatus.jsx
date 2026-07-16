import React from 'react'

export const LoginStatus = () => {
    const isLoggedIn=false;
  return (
    <div>
        {isLoggedIn && <h3>Welcome Zainab</h3>}
        {!isLoggedIn&& <p>Please Login</p>}
    </div>
  )
}
export default LoginStatus;