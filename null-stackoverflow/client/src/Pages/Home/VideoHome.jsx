import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'

import { getAllVideo } from "../../actions/video";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

function VideoHome({ slideIn, handleSlideIn }) {
  const dispatch = useDispatch()
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
  //console.log(vids)
   

  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <div style={styles.navBar}>
            <h1>Videos</h1>
            <Link to="/uploads" style={styles.uploadButton}>Upload Video</Link>
        </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gridGap:'20px', padding:'20px'}}>
        {
            vids?.reverse().map(vi=>
                {
                    return (
                        <div key={vi._id} >
                            <Link to={`/videopage/${vi?._id}`}>
                                <video src={`https://stack-overflow-gilt-five.vercel.app/${vi.filePath}`} style={{width:'1500pxx' ,height:'150px'}}/>
                            </Link>
                            <h5 style={{textAlign:'center'}}>{vi.videoTitle}</h5>
                        </div>
                    )
                })
        }
      </div>
      </div>
    </div>
  );
}

const styles = {
    navBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      color:'whitesmoke',
      textDecoration: 'none',
      fontSize: '1.5rem',
    },
    uploadButton: {
      textDecoration: 'none',
      padding: '8px 16px',
      backgroundColor: 'blue',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
  };
  
export default VideoHome;