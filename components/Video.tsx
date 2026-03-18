import React from 'react'

const Video = () => {
  return (
    <div className="w-full h-96 relative overflow-hidden bg-black ">
      <video
        className="w-full h-full object-cover"
        src="/6.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}

export default Video