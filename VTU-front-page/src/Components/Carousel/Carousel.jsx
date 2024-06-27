import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://www.uni-vt.bg/res/14157/%D0%A1%D1%82%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%B8.jpg',
    },
    {
        label: 'Bird',
        imgPath:
            'https://www.uni-vt.bg/res/14245/IMG_E2357.jpg',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://www.uni-vt.bg/res/9017/DSC_4740.JPG',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://boliarinews.bg/wp-content/uploads/2023/05/347251601_271969128546231_5193620626140022276_n.jpg',
    },
];

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: '#b29ad8',
                }}
            >
                <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: '40rem',
                                    display: 'block',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    width: '100vw',
                                    objectFit: 'cover',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{bgcolor: '#b29ad8',
                    '& .MuiMobileStepper-dot': {
                        backgroundColor: 'white', //
                    },
                    '& .MuiMobileStepper-dotActive': {
                        backgroundColor: 'purple', //
                    },}}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1} sx={{
                            color: 'purple',
                            '&:hover': {
                                backgroundColor: 'rgba(128,0,128,0.1)',
                            },
                            '&:focus': {
                                backgroundColor: 'rgba(128,0,128,0.3)',
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'purple', // Change arrow color
                            },
                        }}
                    >
                        {/*Next*/}
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="medium" onClick={handleBack} disabled={activeStep === 0}
                            sx={{
                                    color: 'purple',
                                    '&:hover': {
                                        backgroundColor: 'rgba(128,0,128,0.1)',
                                    },
                                    '&:focus': {
                                        backgroundColor: 'rgba(128,0,128,0.3)',
                                    },
                                    '& .MuiSvgIcon-root': {
                                        color: 'purple', // Change arrow color
                                    },
                                }}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        {/*Back*/}
                    </Button>
                }
            />
        </Box>
    );
}

export default Carousel;
