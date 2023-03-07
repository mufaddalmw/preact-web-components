import React, { useEffect, useState, lazy, Suspense } from "react";
import { define } from 'preactement';
// import YoutubePlr from "../components/YoutubePlr";
const YoutubePlr = lazy(() => import( /* webpackChunkName: "youtube-plr" */ '../components/YoutubePlr'));


const Youtube = (props) => {

  const {children} = props
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <YoutubePlr {...props}>{children}</YoutubePlr>
    </Suspense>
	)
}

define('el-youtube', () => Youtube, { attributes: ['link'] });