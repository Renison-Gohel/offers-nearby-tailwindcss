'use client'

import React from 'react'
// import { BoltLoader } from "react-awesome-loaders";

type Props = {}

export default function loading({ }: Props) {
  return (
    <div className="animate-pulse">
      <div className="w-full max-w-md mx-auto my-2 bg-gray-200 rounded"></div>
      <div className="flex space-x-2 items-center px-4 py-2">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="flex-1 h-4 bg-gray-200 rounded"></div>
        <div className="w-8 h-8 bg-gray-200 rounded"></div>
      </div>
      <div className="px-4 pb-2">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
      <div className="px-4 pt-2">
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
      <div className="px-4 py-2">
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
      <div className="px-4 pb-2 space-y-1">
        <div className="grid grid-cols-5 gap-1">
          <div className="h-8 bg-gray-200 rounded"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      </div>
      <div className="p-4 space-y-1">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
    // <>
    //   <BoltLoader
    //     className={"loaderbolt"}
    //     boltColor={"#6366F1"}
    //     backgroundBlurColor={"#E0E7FF"}
    //   />
    // </>
  )
}