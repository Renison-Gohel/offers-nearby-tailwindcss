import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

type Props = {
  userName: string;
  comment: string;
  likeCount?: number;
  dislikeCount?: number;
};

export default function ReviewsCard({userName,comment,likeCount=0,dislikeCount=0}: Props) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        // to make the card resizable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          alignItems: 'center',
        }}
      >
        <Avatar src="/static/images/avatar/1.jpg" size="lg" alt={userName[0]} />
        <Typography level="title-lg">{userName}</Typography>
      </Box>
      <CardContent>
        <Typography level="body-sm">
          {comment}
        </Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px" sx={{ justifyContent: 'space-between' }}>
        {/* <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
          <FavoriteBorder />
        </IconButton> */}
        <Button variant="outlined" color="neutral" sx={{ justifyContent: 'space-evenly' }}>
          <ThumbDownOutlinedIcon /> {dislikeCount}
        </Button>
        <Button variant="solid" color="primary" sx={{ justifyContent: 'space-evenly' }}>
          <ThumbUpAltOutlinedIcon />{likeCount}
        </Button>
      </CardActions>
    </Card>
  );
}
