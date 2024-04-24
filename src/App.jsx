import { useState } from 'react'
import City from './assets/city.jpg'
import Smart from "./assets/Smart.png"
import './App.css'

function App() {

  return (
    <div className="max-h-screen max-w-screen relative box-border">
      <img className="h-full w-full box-border absolute z-[-1] bg-cover" src={City}/>
      <div className="w-full h-full absolute z-[-1] bg-gradient-to-t from-[#003D97]"/>
      <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-row box-border w-full justify-between h-16 z-50 px-6 py-8">
        <img className="h-8" src={Smart}/>
        <div className="flex flex-row gap-6">
        </div>
      </div>
      <div className="flex flex-col w-full h-full justify-center items-center gap-10 z-50 pb-16 box-border px-2">
        <h1 className="text-white md:text-[144px] text-[48px] tracking-tighter">Coming Soon</h1>
        <p className="text-white text-center text-lg md:text-[24px] opacity-[0.7]">Hello, our new website is currently under development.</p>
      </div>
      </div>
    </div>
  )
}

export default App
