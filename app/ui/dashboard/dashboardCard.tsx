'use client';

import * as React from 'react';
import { ModalPopup } from './ModalPopup';
import { Card, CardMedia, CardContent, Typography, Box, MenuItem, Snackbar, Alert, Slide } from '@mui/material';

export const DashboardCard = ({ color, icon, text, trainingTopics }: any) => {

	// Modal
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => setOpen(!open);

	return (
		<>
			<ModalPopup trainingTopics = { trainingTopics } open = { open } setOpen = { setOpen } />
			<Card onClick={handleClickOpen} sx={{ display: 'flex', bgcolor: color, color: '#FFFFFF', cursor: 'pointer' }} elevation={5}>
				<CardMedia sx={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', pl: 3}}>
						{ icon }
				</CardMedia>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography component="div" variant="h6" sx={{ mt: 1.5 }}>
							<MenuItem sx={{ fontWeight: 'bold' }}> { text } </MenuItem>
						</Typography>
						
					</CardContent>
				</Box>
			</Card>
		</>
	)
}


export const DashboardCardTwoIcons = ({ color, icon1, icon2, text }: any) => {

	// SnackBar
	const [openSnacBar, setOpenSnacBar] = React.useState(false);
	const handleClick = () => setOpenSnacBar(!openSnacBar);
	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => { if (reason === 'clickaway') { return; } setOpenSnacBar(false); };

	return (
		<>
			<Snackbar open={openSnacBar} autoHideDuration={2000} onClose={handleClose} TransitionComponent={Slide}>
				<Alert onClose={handleClose} severity="info" variant="filled" sx={{ width: '100%' }}> Please visit Employee-Wise Overview for Details! </Alert>
			</Snackbar>
			<Card sx={{ display: 'flex', bgcolor: color, color: '#FFFFFF', cursor: 'pointer' }} onClick={handleClick} elevation={5}>
				<CardMedia sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 3, flexDirection: 'column', gap: 0}}>
						{ icon1 }
						{ icon2 }
				</CardMedia>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography component="div" variant="h6" sx={{ mt: 1.5 }}>
							<MenuItem sx={{ fontWeight: 'bold' }}> { text } </MenuItem>
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</>
	)
}