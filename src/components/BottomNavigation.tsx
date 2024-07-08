'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Box sx={{ pb: 6, }} ref={ref} className="bg-slate-800">
      <CssBaseline />
      <List>
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} className="z-40 bg-slate-700">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ backgroundColor: 'rgb(15,20,27)' }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} sx={{color: 'rgb(228,220,220)'}}/>
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} sx={{color: 'rgb(228,220,220)'}}/>
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} sx={{color: 'rgb(228,220,220)'}}/>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
