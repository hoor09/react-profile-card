import React from 'react'

export const Notifications = () => {
    const notifications=3;
  return (
    <div>
        {notifications>0&&<p>You have 3 notifications</p>}
    </div>
  )
}
