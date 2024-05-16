import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function Room() {

    const {id} = useParams()

    const myMeeting = async (element) => {

        const appID = 940242502;
        const serverSecret = '5f9ef8978b21371e6b2548480ab0d63c';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,id, Date.now().toString(),'nandu');
        
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom(
            {
                container:element,
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
            });
    };

    return (

    <div className='w-full h-screen' >
        <div ref={myMeeting} />
    </div>
  )
}

export default Room
