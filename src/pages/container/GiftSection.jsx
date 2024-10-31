import React from 'react'
import { motion } from 'framer-motion'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { styled } from '@mui/material/styles';
import bca from '../../assets/images/BCA.png'
import Clipboard from '../components/ui/Clipboard';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    border: `1px solid rgba(0, 0, 0, .3)`,
    backgroundColor: 'transparent',
    borderRadius: '10px',
    boxShadow: '-3px -2px 8px #85858596 inset',
    color: 'rgba(0, 0, 0, .7)',
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'transparent',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(-90deg)',
    },
    '& .MuiAccordionSummary-content': {
        // marginLeft: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'transparent',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

export default function GiftSection() {
    return (
        <section className='h-full mb-10'>
            <div className='p-8 mt-4 text-black'>
                <>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-4xl text-center my-4 tracking-widest font-cormorantgaramond'
                    >
                        SEND GIFT
                    </motion.h1>    
                    <motion.h1
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-2xl text-center my-4 tracking-widest font-greatvibes'
                    >
                        for groom and bride
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Accordion>
                            <AccordionSummary
                                aria-controls='panel1-content'
                                id="panel1-header"
                            >
                                SEND GIFT
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='text-center flex flex-col justify-center items-center'>
                                    <div className='my-4 flex flex-col justify-center items-center'>
                                        <img src={bca} alt="BCA logo" width={100} height={100} />
                                        <p>IVAN</p>
                                        <p>BCA</p>
                                        <p>0650731816</p>
                                        <Clipboard textcopy='0650731816' />
                                    </div>
                                    <hr className='w-full' />
                                    <div className='my-4 flex flex-col justify-center items-center'>
                                        <img src={bca} alt="BCA logo" width={100} height={100} />
                                        <p>MARIA SULISTIOWATI</p>
                                        <p>BCA</p>
                                        <p>0373586908</p>
                                        <Clipboard textcopy='0373586908' />
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </motion.div>
                </>
            </div>
        </section>
    )
}
