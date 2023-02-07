import React from "react";
import { define } from 'preactement';
const HeroBanner = ({title}) => {
  
  // console.log(props);
  return (
		<>
			<h1 className="text-2xl">{title}</h1>
		</>
	)
}

define('el-hero-banner', () => HeroBanner);