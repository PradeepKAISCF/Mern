import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Chatbot from "./Pages/Chatbot/Chatbot";
import Subscribe from "./Pages/Subscribe/Subscribe";
import VideoHome from "./Pages/Home/VideoHome";
import VideoUploader from "./Pages/VideoUploader/VideoUploader";
import Videoplayer from "./Pages/VideoPlyr/VideoPlyr";

const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route
        path="/Questions"
        element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Questions/:id"
        element={
          <DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/Tags"
        element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users"
        element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users/:id"
        element={
          <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/chatbot"
        element={
          <Chatbot slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/subscribe"
        element={
          <Subscribe slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/video"
        element={
          <VideoHome slideIn={slideIn} handleSlideIn={handleSlideIn}/>
        }
      />
      <Route
        path="/uploads"
        element={
          <VideoUploader/>
        }
      />
      <Route path='/videopage/:vid' element={<Videoplayer slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
    </Routes>
  );
};

export default AllRoutes;
