import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import style from "./home.module.css"
const Room = () => {
    const {roomId}=useParams()
    const mymeeting=async(element)=>{
        const appID=1785150300
        const serverSecret="4572337deb1fbfc9fff89107ee1703e9" 
        const kittoken=ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,serverSecret,roomId,Date.now().toString(),"nufaij"
        )
        const zc=ZegoUIKitPrebuilt.create(kittoken)
        zc.joinRoom(
            {
                container:element,
                sharedLinks:[
                    {
                        name:'Copy Link',
                        url:`http://localhost:3000/room/${roomId}`
                    }
                ],
                scenario:{
                    mode:ZegoUIKitPrebuilt.OneONoneCall
                },showScreenSharingButton:true
            }
        )
    }
  return (
    <div className={style.full}>
        
      <div ref={mymeeting} className={style.mymeeting}/>
    </div>
  )
}

export default Room
