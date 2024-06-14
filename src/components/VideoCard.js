const VideoCard = ({ info }) => {
  if (!info) return;
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img
        className="rounded-lg"
        alt="Thumbnail_img"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-5">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-700 p-1 m-1">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
