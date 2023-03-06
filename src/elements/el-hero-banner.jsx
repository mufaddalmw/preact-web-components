import React from "react";
import { define } from 'preactement';
const HeroBanner = ({title, desc, image, text}) => {
  
  return (
		<>
			<h1 className="text-2xl min-h-full">{title}</h1>
			<p>{desc}</p>
			{image}
		</>
	)
}

define('el-hero-banner', () => HeroBanner);