import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background:
      'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background:
      'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
    transform: 'rotate(30deg)',
  },
});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

// ... (existing code remains the same)

// ... (existing code remains the same)

export default function Player2() {
  const back=()=>{
    localStorage.removeItem("artworkUrl100");
    localStorage.removeItem("artistName");
    localStorage.removeItem("trackName");
    localStorage.removeItem("previewUrl");
  }

  const artworkUrl100 =localStorage.getItem("artworkUrl100");
  const artistName= localStorage.getItem("artistName");
  const trackName=localStorage.getItem("trackName");
  const previewUrl=localStorage.getItem("previewUrl");


  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // 100% of the viewport height
      }}
    >
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Widget>
          
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CoverImage>
                <img src={artworkUrl100} alt="Artwork" />
              </CoverImage>
              <Box sx={{ ml: 1.5, minWidth: 0 }}>
                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                  {artistName}
                </Typography>
                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                  {trackName}
                </Typography>
              </Box>
            </Box>
         
         
            <div alignItems='center' className='mt-2'>
              <audio controls>
                <source src={previewUrl} type="audio/mp4" />
                Your browser does not support the audio element
              </audio>
            </div>
       
          <Link to='/'>
            <Button onClick={back} variant="contained">Back</Button>
          </Link>
        </Widget>

        <WallPaper />
      </Box>
    </div>
  );
}
