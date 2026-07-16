import React from 'react'

export const UserStatus = () => {
    const isPremium=true;
  return (
    <div>
        {isPremium?<h3>Premium Member</h3>:<p>Upgrade to Premium</p>}
    </div>
  )
}
