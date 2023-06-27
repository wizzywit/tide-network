import React from 'react'
import VideoModal from '../ModalVideo/VideoModal';
import fImg from '../../images/funfact3.jpg'

const FunFactVideo = (props) => {
    return (
        <div className="funfact-video mt-0">
            <img src={fImg} alt="" />
            <VideoModal />
        </div>
    )
}

export default FunFactVideo;