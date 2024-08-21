'use client'
import React, { useState } from "react";
import Button from './Button'
import Image from 'next/image'
import Faq from "./Faq";
const GetApp = () => {

  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
      <Faq/>
      </div>
    </section>
  )
}

export default GetApp