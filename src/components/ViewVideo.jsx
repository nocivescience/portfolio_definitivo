import { useRef } from 'react'
import '../static/sass/ViewVideo.css'
export const MyVideo=(props)=>{
    const videoRef=useRef(null)
    const {fuente} = props
    const handlePlay=()=>{
        videoRef.current.play()
    }
    const handlePause=()=>{
        videoRef.current.pause()
    }
    return (
        <div id='migranvideo' className=' video-container'>
            <h6>Has ckick acá</h6>
            <video 
            width='300' 
            height='170'
            ref={videoRef}
            onClick={handlePlay}
            onMouseLeave={handlePause}
            >
                <source src={fuente} />
            </video>
            <hr/>
        </div>
    )
} 