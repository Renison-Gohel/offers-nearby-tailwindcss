'use client'

import React from 'react'
import { Button, Input } from '@mui/joy'
import LocationOn from '@mui/icons-material/LocationOn';

type Props = {}

export default function SearchBar({ }: Props) {
    return (
        <div className='flex flex-row w-full justify-center items-center pt-4 bg-[rgb(14,20,27)]'>
            <Input
                className='bg-black text-white border-zinc-300'
                placeholder="Enter your location"
                startDecorator={
                    <Button variant="soft" color='warning' startDecorator={<LocationOn className='text-orange-500'/>} className='bg-slate-700 text-orange-500'>
                        Locate
                    </Button>
                }
                // sx={{ width: 320,  }}
                onChange={(e) => console.log(e.target.value)}
                
            />
        </div>
    )
}