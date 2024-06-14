import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideo(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {video[0] && <AdVideoCard info={video[0]} />}
      {video.map((videos) => (
        <Link key={videos.id} to={"/watch?v=" + videos.id}>
          <VideoCard info={videos} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
