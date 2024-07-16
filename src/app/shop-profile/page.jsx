'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import CoverImage from '@/../public/dominos-cover.jpg'
import ProfileImage from '@/../public/dominos-logo.png'

import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button'
import Chip from '@mui/material/Chip';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ReviewsCard from '@/components/ReviewsCard'
import AiReview from '@/components/AiReview'

function TabPanel(props) {
    const { children, TPvalue, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={TPvalue !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {TPvalue === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}


const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: '#1890ff',
    },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        minWidth: 0,
        [theme.breakpoints.up('sm')]: {
            minWidth: 0,
        },
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(1),
        color: 'rgba(0, 0, 0, 0.85)',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&.Mui-selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&.Mui-focusVisible': {
            backgroundColor: '#d1eaff',
        },
    }),
);


const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        variant="scrollable"
        // scrollButtons="auto"
        scrollButtons
        allowScrollButtonsMobile
        className='text-white'
    // centered
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});


const StyledTab = styled((props) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));

export default function ShopProfile(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { children, TPvalue, index, ...other } = props;

    return (
        <div className="flex flex-col justify-center items-center bg-[rgb(14,20,27)] h-max md:flex-row md:flex-wrap md:gap-2 pt-4">
            {/* <div className='w-full h-48 flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-center'> */}
            <div className='w-full h-48'>
                <Image src={CoverImage} alt="cover" className='rounded-t-xl' width={500} height={500} />
            </div>
            <div className='-mt-16'>
                <Image src={ProfileImage} alt="profile" className='rounded-full border-blue-700 border-4' width={90} height={90} />
            </div>
            <div className='text-center'>
                <p className='text-white font-bold pt-3'>Domino's Pizza</p>
                <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur ssadipisicing elit. Quaerat molestias, veniam officia esse, enim amet voluptate fuga ea consequatur excepturi ipsa dolorem autem ad?</p>
            </div>

            <div className='w-full mt-2 lg:flex lg:flex-col lg:justify-center lg:items-center'>
                <Box
                // sx={{ bgcolor: '#2e1534' }}
                >
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Profile Tabs"
                    // centered={true}
                    >
                        <StyledTab label="Offers" />
                        <StyledTab label="Menu" />
                        <StyledTab label="Reviews" />
                        <StyledTab label="Ai Summary" />
                    </StyledTabs>

                    <TabPanel TPvalue={value} index={0}>
                        <div className='flex flex-col justify-center items-center w-full gap-3'>
                            <div className='flex flex-col justify-start items-start w-full rounded-lg bg-slate-100 p-2 border-2 border-indigo-600 '>
                                <Link href={'about'}>
                                    <p className='font-semibold'>Unlimited for just Rs.450!</p>
                                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quod?</p>
                                    <div className='flex flex-row mt-2 w-full justify-between items-center'>
                                        <div className='flex flex-row gap-2'>
                                            <Chip className='p-1' variant="outlined" label="Live" color="success" size="small" icon={<EventAvailableIcon />} />
                                            <Chip className='p-1' variant="outlined" label="25 July to 29 July" color="success" size="small" icon={<TodayRoundedIcon />} />
                                        </div>
                                        <Button variant="outlined" size="sm" className=''>
                                            <KeyboardArrowRightRoundedIcon />
                                        </Button>
                                    </div>
                                </Link>
                            </div>
                            <div className='flex flex-col justify-start items-start w-full rounded-lg bg-slate-100 p-2 border-2 border-indigo-600 '>
                                <Link href={'about'}>
                                    <p className='font-semibold'>Buy any pizza get Cheeze pizza free</p>
                                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quod?</p>
                                    <div className='flex flex-row mt-2 w-full justify-between items-center'>
                                        <div className='flex flex-row gap-2'>
                                            <Chip className='p-1' variant="outlined" label="Live" color="success" size="small" icon={<EventAvailableIcon />} />
                                            <Chip className='p-1' variant="outlined" label="25 July to 29 July" color="success" size="small" icon={<TodayRoundedIcon />} />
                                        </div>
                                        <Button variant="outlined" size="sm" className=''>
                                            <KeyboardArrowRightRoundedIcon />
                                        </Button>
                                    </div>
                                </Link>
                            </div>
                            <div className='flex flex-col justify-start items-start w-full rounded-lg bg-slate-200 opacity-75 p-2 border-2 border-indigo-600 '>
                                <Link href={'about'}>
                                    <p className='font-semibold'>Buy any pizza get Cheeze pizza free</p>
                                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quod?</p>
                                    <div className='flex flex-row mt-2 w-full justify-between items-center'>
                                        <div className='flex flex-row gap-2'>
                                            <Chip className='p-1' variant="outlined" label="Expired" color="warning" size="small" icon={<EventBusyOutlinedIcon />} />
                                            <Chip className='p-1' variant="outlined" label="25 July to 29 July" color="warning" size="small" icon={<TodayRoundedIcon />} />
                                        </div>
                                        <Button variant="outlined" size="sm" className=''>
                                            <KeyboardArrowRightRoundedIcon />
                                        </Button>
                                    </div>
                                </Link>
                            </div>
                            <div className='flex flex-col justify-start items-start w-full rounded-lg bg-slate-200 opacity-75 p-2 border-2 border-indigo-600'>
                                <Link href={'about'}>
                                    <p className='font-semibold'>Buy any pizza get Cheeze pizza free</p>
                                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quod?</p>
                                    <div className='flex flex-row mt-2 w-full justify-between items-center'>
                                        <div className='flex flex-row gap-2'>
                                            <Chip className='p-1' variant="outlined" label="Expired" color="warning" size="small" icon={<EventBusyOutlinedIcon />} />
                                            <Chip className='p-1' variant="outlined" label="25 July to 29 July" color="warning" size="small" icon={<TodayRoundedIcon />} />
                                        </div>
                                        <Button variant="outlined" size="sm" className=''>
                                            <KeyboardArrowRightRoundedIcon />
                                        </Button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel TPvalue={value} index={1}>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <Zoom>
                                <Image width={500} height={500} alt="pizza" src="https://content.jdmagicbox.com/comp/patna/l6/0612px612.x612.230529204146.t1l6/catalogue/domino-s-pizza-kumhrar-patna-pizza-outlets-cz6kz2t69u.jpg" />
                            </Zoom>
                            <Zoom>
                                <Image width={500} height={500} alt="pizza" src="https://content.jdmagicbox.com/v2/comp/delhi/d3/011pxx11.xx11.231108081533.x6d3/catalogue/domino-s-pizza-noida-sector-12-delhi-pizza-outlets-r25vuklg9a.jpg" />
                            </Zoom>
                            <Zoom>
                                <Image width={500} height={500} alt="pizza" src="https://online.fliphtml5.com/kekiw/mwfd/files/large/2.webp" />
                            </Zoom>
                            <Zoom>
                                <Image width={500} height={500} alt="pizza" src="https://img.yumpu.com/20122530/1/500x640/dominosr-menu.jpg" />
                            </Zoom>
                        </div>
                    </TabPanel>
                    <TabPanel TPvalue={value} index={2}>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <ReviewsCard
                                userName='Satyam Thoria'
                                comment='We are a community of developers prepping for coding interviews, participate, chat with others and get better at interviewing.'
                                likeCount={20}
                                dislikeCount={3}
                            />
                            <ReviewsCard
                                userName='Abhishek Tadhani'
                                comment='We are a community of developers prepping for coding interviews, participate, chat with others and get better at interviewing.'
                                likeCount={30}
                                dislikeCount={5}
                            />
                            <ReviewsCard
                                userName='Rashi'
                                comment='We are a community of developers prepping for coding interviews, participate, chat with others and get better at interviewing.'
                                likeCount={15}
                                dislikeCount={8}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel TPvalue={value} index={3}>
                        <div className='flex flex-col justify-center items-center'>
                            <AiReview />
                        </div>
                    </TabPanel>
                </Box>
            </div>

        </div>
    )
}