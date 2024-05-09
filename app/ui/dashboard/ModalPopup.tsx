'use client';

import * as React from 'react';
import { Masonry } from '@mui/lab';
import avatarm from '@/public/avatarm.svg';
import avatarf from '@/public/avatarf.svg';
import { Male, Female } from '@mui/icons-material';
import { backgroundColors } from './backgroundColours';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Avatar, CardMedia, Typography, Card, CardContent, List, Badge, ListItem, ListItemButton, ListItemAvatar, ListItemText, Chip, Paper } from '@mui/material/';


export const ModalPopup = ({ trainingTopics, open, setOpen }: any) => {
	
	const handleClose = () => setOpen(false);

	let maleCount = 0, femaleCount = 0;

	if(!trainingTopics[0].hasOwnProperty("Logic_Building")) trainingTopics.map((eachEmployee: any) => eachEmployee.Gender === "Male" ? maleCount += 1 : femaleCount += 1 )

	return (
		<>
			{

				trainingTopics[0].hasOwnProperty("Logic_Building")
				?
					<Dialog fullWidth={ true } maxWidth={'xl'} open={open} onClose={handleClose} aria-labelledby="dialog-topics">
						<DialogTitle id="dialog-topics"> Training Topics </DialogTitle>
						<DialogContent>
							<Masonry columns={{ xs: 1, sm: 2, md: 4, lg: 5 }} spacing={2}>
								{
									trainingTopics.map((item: any, index: number) =>
										<DialogContentText key={ index }>
											<Card sx={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', bgcolor: backgroundColors[Object.keys(item)[0] as keyof typeof backgroundColors].backgroundColor, color: backgroundColors[Object.keys(item)[0] as keyof typeof backgroundColors].color }}>
												<CardMedia component="img" sx={{ width: 50 }} image={ backgroundColors[Object.keys(item)[0] as keyof typeof backgroundColors].icon } alt={ Object.keys(item)[0] } />
												<CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
													<Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
														{ Object.keys(item)[0].replaceAll("_", " ") } 
													</Typography>
													<Typography variant="body2" color= { backgroundColors[Object.keys(item)[0] as keyof typeof backgroundColors].color } sx={{ display: 'flex', justifyContent: 'start' }}>
														{ "Hours of training : " + backgroundColors[Object.keys(item)[0] as keyof typeof backgroundColors].hours }
													</Typography>
												</CardContent>
											</Card>
										</DialogContentText>
									)
								}
							</Masonry>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} autoFocus> Noted...! </Button>
						</DialogActions>
					</Dialog>
				:
					<Dialog fullWidth={ true } maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby="dialog-Employees">
						<DialogTitle id="dialog-Employees" sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center' }}>
							Employee List
							<span className={`flex justify-around items-center w-full`}>
								<Chip sx={{ backgroundColor: "#21a8fa", color: "#FFFFFF" }} icon={ <Male sx={{ color: '#FFFFFF !important' }} /> } label = { maleCount } />
								<Chip sx={{ backgroundColor: "#e52264", color: "#FFFFFF" }} icon={ <Female sx={{ color: '#FFFFFF !important' }} /> } label = { femaleCount } />
							</span>
						</DialogTitle>
						<List sx={{ pt: 0 }}>
							<Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={2}>
								{
									trainingTopics.map((eachEmployee: any, index: number) =>
										<Paper key={index} sx={{ padding: 1 }} elevation={2}>
											<ListItem disableGutters sx={{ pl: 2, pr: 2 }}>
												<ListItemAvatar>
													<Avatar sx={{ width: 50, height: 50 }} alt={ eachEmployee.Gender } src={ eachEmployee.Photo_URL === "photo" ? eachEmployee.Gender === "Male" ? avatarm.src : avatarf.src : eachEmployee.Photo_URL } />
												</ListItemAvatar>
												<ListItemText className={`flex-none max-[400px]:w-[8vw]`} primary = { eachEmployee.Emp_Name } secondary = { eachEmployee.Active_Inactive } />
												<ListItemText className={`flex justify-end`} primary = { eachEmployee.Gender === "Male" ? <Male  sx={{ color: '#21a8fa' }} /> : <Female  sx={{ color: '#e52264' }} /> } />
											</ListItem>
										</Paper>
									)
								}
							</Masonry>
						</List>
					</Dialog>
			}
		</>
	)
}