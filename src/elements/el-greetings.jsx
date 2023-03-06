import { define } from 'preactement';
import React, { useState } from "react";

const Greeting = () => {
  const [display, setDisplay] = useState(true);
  const handleToogle = () => {
    setDisplay(!display);
  }
  return (  
    <>
      {
        display && <h3 className="text-2xl">hi greetings</h3>
      }
      <button className="border p-4 bg-slate-300" onClick={handleToogle}>Toggle</button>
      <el-hero-banner>
        <span slot="title">My favorate web components</span>
      </el-hero-banner>
    </>
  )
};

define('el-greeting', () => Greeting);