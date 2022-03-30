import React, { useState, useRef } from "react";
import { FaMusic, FaHeart, FaComment, FaShare } from "react-icons/fa";

const VideoInfo = () => {
  return (
    <div className="flex flex-row">
      <img
        className="w-[50px] h-[50px] rounded-full"
        src="https://thuthuatnhanh.com/wp-content/uploads/2021/02/Anh-avatar-bua-cute-dep-390x390.jpg"
        alt="avt"
      />
      <div className="ml-3 min-w-[80%]">
        <div>
          <a href="" className="mr-1 text-xl font-bold hover:underline">
            trunganh
          </a>
          <span className=" text-xl">Trung Anh</span>
        </div>
        <div>caption neeee </div>
        <div className="flex flex-row items-center">
          <FaMusic />
          <a href="" className="ml-2 hover:underline">
            Music ne
          </a>
        </div>
      </div>

      <div>
        <button className="p-1 pl-3 pr-3 border-2 border-red-400 text-red-400 rounded-md">
          Follow
        </button>
      </div>
    </div>
  );
};

const VideoContent = () => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const handleVideo = () => {
    if (playing) {
      videoRef.current.play();
      setPlaying(false);
    } else {
      videoRef.current.pause();
      setPlaying(true);
    }
  };

  return (
    <div className="flex flex-row">
      <video
        ref={videoRef}
        onClick={handleVideo}
        className="w-[80%] max-h-[500px] ml-[60px] mt-3 mb-5 rounded-md"
        src="https://v16-webapp.tiktok.com/808410c151b16173aeb947133504619a/624414ac/video/tos/useast2a/tos-useast2a-pve-0037-aiso/b8cc706c7cf447ae89d343f8aa7d4ef8/?a=1988&br=2368&bt=1184&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThwZtgDXq&l=202203300228070102440262290D6BDBFB&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZ3dzo6ZjdvOzMzZjgzM0ApMzplZDk6ZDw4N2c1Z2U5PGdoZi9xcjQwb3JgLS1kL2Nzcy1hNi4vXjA1LjQwMDQtLjI6Yw%3D%3D&vl=&vr="
      />
      <div className="flex flex-col justify-end ml-4 mb-2">
        <div>
          <div className="w-[40px] h-[40px] bg-slate-100 rounded-full flex items-center justify-center ">
            <FaHeart className="text-xl" />
          </div>
          <span className="text-xs font-bold text-gray-600 flex justify-center my-2">
            3110
          </span>

          <div className="w-[40px] h-[40px] bg-slate-100 rounded-full flex items-center justify-center ">
            <FaComment className="text-xl" />
          </div>
          <span className="text-xs font-bold text-gray-600 flex justify-center my-2">
            2003
          </span>

          <div className="w-[40px] h-[40px] bg-slate-100 rounded-full flex items-center justify-center ">
            <FaShare className="text-xl" />
          </div>
          <span className="text-xs font-bold text-gray-600 flex justify-center my-2">
            1552
          </span>
        </div>
      </div>
    </div>
  );
};

const Video = () => {
  return (
    <div className="snap-start max-w-[500px] border-b-2 mt-2 py-2">
      <VideoInfo />
      <VideoContent />
    </div>
  );
};

export default Video;
