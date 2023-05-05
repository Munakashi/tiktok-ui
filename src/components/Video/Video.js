import React from "react";
import { FaMusic } from 'react-icons/fa';
import classNames from "classnames/bind";
import  styles  from "./Video.module.scss";


import Button from "~/components/Button/Button";
const cx = classNames.bind(styles);

const VideoInfo = () => {
  return (
  <div className={cx('main-content')}>
<img  className={cx('avatarchar')}  src="https://cdn.discordapp.com/attachments/965806784675733604/965811263412260934/3-19_1.jpg" alt="avt" />
<div className="ml-3 min-w-[80%]">
    <div>
      <a href="#" className={cx('Text1')} > Anh Đang Code</a>
      <a href="#" className={cx('Text2')}> Kênh Lập Trình</a>
    </div>
<div className={cx('text3')}>
Hay Ghe Tham ôi
  </div>
  <div className="flex flex-row items-center">
    <FaMusic /> <span className={cx('text4')} > Bài Hát Đang Phát</span>
  </div>
  </div>
   <div> <Button  primary  className='' > Follow</Button></div>
  </div>
  );
};
const VideoContent = () => {
  return <div>
    <video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
  </div>
}
const  Video = () => {
  return (
    <div className='max-w-[500px]'>
    <  VideoInfo />
    <VideoContent />
    </div>
  );
}

export default Video;
