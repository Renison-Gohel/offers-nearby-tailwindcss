'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { grey, orange, red,  } from '@mui/material/colors';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import data from './Data.json'; // Adjust the import path as necessary
import Link from 'next/link';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState<{ [key: number]: boolean }>({});

    const handleExpandClick = (id: number) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <>
            {data.map((item) => (
                <Card key={item.id} sx={{ maxWidth: 345, mt: 2, backgroundColor: 'rgb(245,231,231)' }}>
                    {/* <Link href="about"> */}
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: orange[300] }} aria-label={item.title}>
                                {item.title[0]}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <ArrowForwardIosOutlinedIcon />
                            </IconButton>
                        }
                        sx={{}}
                        title={item.title}
                        subheader={item.subheader}
                    />
                    {/* </Link> */}
                    <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <CardMedia
                                component="img"
                                height="194"
                                image={'https://images.jdmagicbox.com/comp/lucknow/j9/0522px522.x522.181214152337.h9j9/catalogue/the-belgian-waffle-co-ap-sabha-lucknow-waffle-centres-931gzxsw2s.jpg'}
                                alt={item.title}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardMedia
                                component="img"
                                height="194"
                                image={'https://images.jdmagicbox.com/comp/lucknow/j9/0522px522.x522.181214152337.h9j9/catalogue/the-belgian-waffle-co--ap-sabha-lucknow-waffle-centres-1jlw99ilvq.jpg'}
                                alt={item.title}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardMedia
                                component="img"
                                height="194"
                                image={'https://content.jdmagicbox.com/comp/lucknow/j9/0522px522.x522.181214152337.h9j9/catalogue/the-belgian-waffle-co--ap-sabha-lucknow-waffle-centres-0atcy9jlcr.jpg'}
                                alt={item.title}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardMedia
                                component="img"
                                height="194"
                                image={'https://images.jdmagicbox.com/comp/lucknow/d5/0522px522.x522.190125202013.x7d5/catalogue/the-belgian-waffle-co--lucknow-fu4zkjpuxa.jpg'}
                                alt={item.title}
                            />
                        </SwiperSlide>
                    </Swiper>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.content}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            {/* <FavoriteIcon /> */}
                            <FavoriteBorderOutlinedIcon className='text-red-500' />
                        </IconButton>
                        <IconButton aria-label="share">
                            {/* <ShareIcon /> */}
                            <ShareOutlinedIcon />
                        </IconButton>
                        <Link href={item.location} target='_blank'>
                            <IconButton aria-label="location">
                                {/* LocationIcon */}
                                <LocationOnOutlinedIcon />
                            </IconButton>
                        </Link>

                        <Link href="about">
                            <Button sx={{ color: 'rgb(30,41,59)' }}>
                                View More
                            </Button>
                        </Link>

                        <ExpandMore
                            expand={expanded[item.id] || false}
                            onClick={() => handleExpandClick(item.id)}
                            aria-expanded={expanded[item.id] || false}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded[item.id] || false} timeout="auto" unmountOnExit>
                        <CardContent>
                            {item.sections.map((section, index) => (
                                // <React.Fragment key={index}>
                                //     <Typography className='font-semibold'>{section.title}</Typography>
                                //     <Typography paragraph>{section.content}</Typography>
                                // </React.Fragment>
                                <React.Fragment key={index}>
                                    {section.title == "Address" ?
                                        <>
                                            <Link href={item.location} target='_blank'>
                                                <Typography className='font-semibold'>{section.title+":"}</Typography>
                                                <Typography paragraph className='underline underline-offset-4'>{section.content}</Typography>
                                            </Link>
                                        </>
                                        :
                                        <>
                                            <Typography className='font-semibold'>{section.title+":"}</Typography>
                                            <Typography paragraph>{section.content}</Typography>
                                        </>
                                    }

                                </React.Fragment>
                            ))}
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </>
    );
}
