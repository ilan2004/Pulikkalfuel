'use client'
import React, { useState } from "react";
import Button from './Button'
import Image from 'next/image'
import Faq from "./Faq";
const GetApp = () => {

  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <h1>Frequently asked questions</h1>
      <Faq/>
      </div>
    </section>
  )
}

export default GetApp