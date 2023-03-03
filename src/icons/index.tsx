import { FC } from "react";
import { IconProps } from "../types";

export const RocketIcon: FC<IconProps> = ({ size }) => {
  return (
    <svg 
      fill="#fff" 
      version="1.1" 
      id="Capa_1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      width={size ? size : "30px"} height={size ? size : "30px"}
      viewBox="0 0 230.942 230.942" 
      xmlSpace="preserve" 
      stroke="#fff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g 
        id="SVGRepo_iconCarrier"> 
        <g> 
        <g> 
        <path 
        d="M133.772,188.948c-3.074-0.922-6.164-0.132-8.557,1.831c-2.477-2.713-5.919-4.408-9.744-4.408 c-3.816,0-7.259,1.699-9.744,4.408c-2.384-1.947-5.474-2.761-8.548-1.819c-5.412,1.644-8.616,7.943-7.175,14.078 c1.457,6.132,15.18,19.717,15.18,19.717s0.882-2.93,1.877-6.869c3.841,7.727,8.409,15.057,8.409,15.057s4.571-7.33,8.418-15.057 c0.99,3.939,1.871,6.869,1.871,6.869s13.722-13.585,15.181-19.717C142.404,196.895,139.186,190.587,133.772,188.948z"
        /> 
        <path 
          d="M135.795,41.92C134.706,27.884,123.705,0,115.471,0c-8.233,0-19.233,27.884-20.323,41.92 c6.302,1.204,13.179,1.879,20.323,1.879C122.619,43.799,129.496,43.14,135.795,41.92z"
        /> 
        <path 
          d="M153.568,116.574c-14.37-11.942-7.093-23.814-18.967-28.924l1.271-41.928c-6.332,1.12-13.177,1.763-20.4,1.763 c-7.221,0-14.067-0.643-20.383-1.781l1.264,41.93c-11.876,5.112-4.601,16.974-18.959,28.928 c-19.043,15.869-38.086,7.381-38.086,37.365c0,0-0.008-2.08,0,2.797c0,3.395,37.021,4.54,59.43,10.279l0.13,4.279l6.302,3.511 c0,5.029-0.981,9.101,10.303,9.101c11.295,0,10.306-4.087,10.306-9.101l6.3-3.511l0.132-4.279 c22.41-5.735,59.431-6.885,59.431-10.279c0-1.555,0-2.36,0-2.797C191.47,123.952,172.587,132.432,153.568,116.574z M103.704,161.453c0,0-3.917-100.229-4.039-106.086c-0.123-5.853,6.003-4.106,6.003-4.106L103.704,161.453z"
        /> 
        </g> 
        </g> 
        </g>
    </svg>
  );
}