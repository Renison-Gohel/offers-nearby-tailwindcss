'use client'

import React from 'react';
import { Avatar } from '@mui/joy';
import Marquee from "react-fast-marquee";
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

import { MdLocationOn } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import ScrollableParagraph from '@/components/ScrollableText';
import Link from 'next/link';





const EventDetail = () => {
  const [index, setIndex] = React.useState(0);


  return (
    <div className='flex flex-col justify-center items-center bg-[rgb(14,20,27)] h-max'>
      <img src="https://media.gettyimages.com/id/1343097420/photo/business-meeting-in-a-bright-office.jpg?s=612x612&w=0&k=20&c=XSfbrN_M2mPmH0nR8ucbtOECXP2LLPHdK29KV6YfyjM=" className='' alt="logo" />
      <h1 className='text-white justify-start w-full pt-6 pl-3 pb-2 font-semibold text-lg underline underline-offset-4'>Buy 1 waffle get 1 ice cream free 🧇</h1>
      <div className='flex flex-row w-full pt-2 pl-2 justify-start items-center text-center space-x-2'>
        <Avatar className='justify-start pt-2 pl-2' size='sm' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
        {/* <p className='text-slate-400'>Organized by: <p className='font-bold text-white'>John Doe</p></p> */}
        <div className='w-full flex flex-row gap-x-2'>
          <p className='text-slate-400'>Offer by:</p>
          <p className='font-bold text-white'>The Walls of Waffles</p>

        </div>
      </div>
      <div className='flex flex-row w-full justify-start items-center space-x-3 pt-7 pl-3'>
        <BsCalendarDateFill className='text-slate-100 text-2xl' />
        <p className='text-slate-100'>July 8, 2024 to July 12, 2024</p>
      </div>
      <div className='flex flex-row w-full justify-start items-center space-x-3 pt-7 pl-3'>
        {/* <BsLocationFill /> */}
        <MdLocationOn className='text-slate-100 text-3xl' />
        {/* <p className='text-slate-100'>Sadhu Vasvani Road, RK Chamber, Rajkot</p> */}
        <Marquee className='text-slate-100' pauseOnClick={true} pauseOnHover={true}>
          <Link href="https://www.google.com/maps/dir//The+Walls+of+Waffles,+Raj+Palace,+Sadhu+Vasvani+Rd,+Hari+Nagar,+Rajkot,+Gujarat+360005/@22.2942561,61.0029944,6z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3959cb61b9a1c21d:0x4257a9cac50f6844!2m2!1d70.7588538!2d22.2942561?entry=ttu" target='_blank'>
            Sadhu Vasvani Road, RK Chamber, Rajkot, 360004. &nbsp;
          </Link>
        </Marquee>
        {/* <ScrollableParagraph text="Sadhu Vasvani Road, RK Chamber, Rajkot, 360004. " /> */}
      </div>
      <div className='flex flex-row w-full justify-start items-center space-x-3 pt-7 pl-4'>
        <AvatarGroup size='sm' className='space-x-3'>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/6.jpg" />
          <Avatar>+153</Avatar>
        </AvatarGroup>
      </div>
      <div className='flex flex-row justify-between items-center w-full pt-3 pl-4 pr-5'>
        <p className='text-slate-500'>159 people are enjoying &nbsp;😋</p>
        <p className='text-slate-500'>See all</p>
      </div>
      <div className='flex flex-row w-full pt-6 pr-2 pl-2'>
        <Box
          sx={{
            flexGrow: 1,
            // m: -2,
            overflowX: 'hidden',
          }}
        >
          <Tabs
            // aria-label="Pipeline"
            // value={index}
            onChange={(event, value) => setIndex(value)}

            aria-label="Sticky tabs"
            value={index}
            // onChange={(event, value) => setSticky(value)}
            sx={{
              p: 1,
              maxHeight: 700,
              overflowY: 'auto',
            }}
          >
            <TabList
              sx={{
                pt: 1,
                justifyContent: 'center',
                [`&& .${tabClasses.root}`]: {
                  flex: 'initial',
                  bgcolor: 'transparent',
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                  [`&.${tabClasses.selected}`]: {
                    color: 'primary.plainColor',
                    '&::after': {
                      height: 2,
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      bgcolor: 'primary.500',
                    },
                  },
                },
              }}
              key="tablist"
              sticky={'top'}
              underlinePlacement={{ top: 'bottom', bottom: 'top' }["top"]}
            >
              <Tab indicatorInset indicatorPlacement={{ top: 'bottom', bottom: 'top' }["top"]}>
                Details{''}
              </Tab>
              <Tab indicatorInset indicatorPlacement={{ top: 'bottom', bottom: 'top' }["top"]}>
                Reviews{' '}
                <Chip
                  size="sm"
                  variant="soft"
                  color={index === 1 ? 'primary' : 'neutral'}
                >
                  20
                </Chip>
              </Tab>
              <Tab indicatorInset indicatorPlacement={{ top: 'bottom', bottom: 'top' }["top"]}>
                Ai{' '}
                <Chip
                  size="sm"
                  variant="soft"
                  color={index === 2 ? 'primary' : 'neutral'}
                >
                  1
                </Chip>
              </Tab>
            </TabList>
            <Box
              sx={(theme) => ({
                '--bg': theme.vars.palette.background.surface,
                background: 'var(--bg)',
                boxShadow: '0 0 0 100vmax var(--bg)',
                clipPath: 'inset(0 -100vmax)',
              })}
            >
              <TabPanel value={0}>
                The walls of waffles! This delightful phrase refers to a popular food shop in RAJKOT, where a crispy, golden-brown waffle is filled with a variety of sweet and savory ingredients.
                <div className='flex flex-row justify-between items-center'>
                  <p className='font-bold text-black text-xl pt-5'>About the venue</p>
                  {/* link goes here */}
                  <Link href="https://www.google.com/maps/dir//The+Walls+of+Waffles,+Raj+Palace,+Sadhu+Vasvani+Rd,+Hari+Nagar,+Rajkot,+Gujarat+360005/@22.2942561,61.0029944,6z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3959cb61b9a1c21d:0x4257a9cac50f6844!2m2!1d70.7588538!2d22.2942561?entry=ttu" target='_blank'>
                    <p className='font-semibold text-purple-700 text-xl pt-5'>Get Location</p>
                  </Link>

                </div>
                <div className='pt-4'>
                  <img className='rounded-lg' src="https://imgsrv2.voi.id/HpO09gZIQxpPSpVKdPkkZwaQELHpXUDAgoUw26q-tiA/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNTE4MjMvMjAyMjAzMzEwODA3LW1haW4uSlBH.jpg" alt="" />

                </div>
              </TabPanel>
              <TabPanel value={1}>
                Comming soon! 🔥
              </TabPanel>
              <TabPanel value={2}>
                Under Construction 🚧
              </TabPanel>
            </Box>
          </Tabs>
        </Box>
      </div>

    </div>
  );
};

export default EventDetail;
