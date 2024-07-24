"use client";
import React from 'react'
import { Canvas } from '@react-three/fiber';
import exp from 'constants';
import dynamic from 'next/dynamic'


const Scene = dynamic(() => import('../components/Scene'), {
    ssr: false
  })

export default function Home(){
    return(
        <Canvas>

        </Canvas>
    )
}