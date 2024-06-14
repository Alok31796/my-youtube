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

export default VideoCard;