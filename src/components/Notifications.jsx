import React from 'react'

export const Notifications = () => {
    const notifications=3;
  return (
    <div>
        {notifications>1&&<p>You have { notifications} notifications</p>}
        {notifications==1&&<p>You have { notifications} notification</p>}
    </div>
  )
}
