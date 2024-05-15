'use client';

import * as React from 'react';
import { Masonry } from '@mui/lab';
import avatarm from '@/public/avatarm.svg';
import avatarf from '@/public/avatarf.svg';
import { PieChart } from '@mui/x-charts/PieChart';
import { Male, Female, RememberMe, CorporateFare, ModelTraining, Groups, ArrowDropDown } from '@mui/icons-material';
import { backgroundColors } from './backgroundColours';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Avatar, CardMedia, Typography, Card, CardContent, ListItem, ListItemAvatar, ListItemText, Chip, Paper, ButtonBase, Box, IconButton, Tooltip, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material/';


export const ModalPopup = ({ trainingTopics, open, setOpen }: any) => {
	
	const handleClose = () => setOpen(false);

	const [data, setData]: any = React.useState([]);
	const [palette, setPalette]: any = React.useState([]);
	const [openChild, setOpenChild] = React.useState(false);
	const [passedEmployees, setpassedEmployees]: any = React.useState([{}]);

	let maleCount = 0, femaleCount = 0;

	if(!trainingTopics[0].hasOwnProperty("Logic_Building")) trainingTopics.map((eachEmployee: any) => eachEmployee.Gender === "Male" ? maleCount += 1 : femaleCount += 1 );

	const handleModalClick = (passedEmployee: any) => {
		setpassedEmployees(passedEmployee);

		const dataValues: any = [];
		const paletteValues: any = [];
		let counter = 0;

		Object.keys(passedEmployee['Training_Topic']).map((trainingKeys: any, index: number) => {
			Object.keys(passedEmployee['Training_Topic'][trainingKeys]).map((trainingName: any, indexx: number) => {
				if(passedEmployee['Training_Topic'][trainingKeys][trainingName] !== 0)
				{
					dataValues.push({ id: counter, value: passedEmployee['Training_Topic'][trainingKeys][trainingName], label: backgroundColors[trainingName as keyof typeof backgroundColors].name, icon: backgroundColors[trainingName as keyof typeof backgroundColors].icon, backgroundColorss: backgroundColors[trainingName as keyof typeof backgroundColors].backgroundColor, colors: backgroundColors[trainingName as keyof typeof backgroundColors].color  });
					paletteValues.push(backgroundColors[trainingName as keyof typeof backgroundColors].backgroundColor);
				}
			});
			counter+=1;
			setData(dataValues);
			setPalette(paletteValues);
		});

		setOpenChild(!openChild);
	}

	const handleCloseChild = () => setOpenChild(false);

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
						<Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={2}>
							{
								trainingTopics.map((eachEmployee: any, index: number) =>
									<ButtonBase key={index} onClick={ () => handleModalClick(eachEmployee) }>
										<Paper sx={{ padding: 1 }} elevation={2}>
											<ListItem disableGutters sx={{ pl: 2, pr: 2 }} secondaryAction = { eachEmployee.Gender === "Male" ? <Male  sx={{ color: '#21a8fa' }} /> : <Female  sx={{ color: '#e52264' }} /> }>
												<ListItemAvatar>
													<Avatar sx={{ width: 50, height: 50 }} alt={ eachEmployee.Gender } src={ eachEmployee.Photo_URL === "photo" ? eachEmployee.Gender === "Male" ? avatarm.src : avatarf.src : eachEmployee.Photo_URL } />
												</ListItemAvatar>
												<ListItemText className={`flex-none max-[400px]:w-[8vw] min-[800px]:w-[8vw]`} primary = { eachEmployee.Emp_Name } secondary = { eachEmployee.Active_Inactive } />
											</ListItem>
										</Paper>
									</ButtonBase>
								)
							}
						</Masonry>
					</Dialog>
			}

			<Dialog fullWidth={ true } maxWidth={'lg'} open={openChild} onClose={handleCloseChild} aria-labelledby="dialog-Employees">
				<DialogTitle id="dialog-Employees" sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center' }}> Employee Details </DialogTitle>
				<DialogContent>
					<Card sx={{ display: 'flex', minWidth: 350 }} elevation={0}>
						<CardMedia className={``} component="img" sx={{ width: data.length > 0 ? 400 : 200, borderRadius: '2%' }} image={ passedEmployees.Photo_URL === "photo" ? passedEmployees.Gender === "Male" ? avatarm.src : avatarf.src : passedEmployees.Photo_URL } alt={ passedEmployees.Emp_Name } />
						<CardContent sx={{ flex: '1 0 auto' }}>
							<Typography component="div" variant="h5"> { passedEmployees.Emp_Name + " - " + passedEmployees.Designation } </Typography>
							<Typography variant="subtitle2" color="text.secondary" component="div" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
							<Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 3 }} spacing={2}>
								<Chip color="info" icon={<RememberMe fontSize='small' />} label={ passedEmployees.Emp_Code } />
								<Chip sx={{ backgroundColor: passedEmployees.Gender === "Male" ? "#21a8fa" : "#e52264", color: '#FFFFFF' }} icon={ passedEmployees.Gender === "Male" ? <Male sx={{ color: '#FFFFFF !important' }} /> : <Female sx={{ color: '#FFFFFF !important' }} /> } label={ passedEmployees.Gender } />
								<Chip color="info" icon={<CorporateFare fontSize='small' />} label={ passedEmployees.Department } />
								<IconButton sx={{ padding: 0.2 }} aria-label="Completed Training Hours">
									<Chip color="success" icon={
										<CardMedia sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 2, pl:0.5 }}>
											<ModelTraining fontSize='small' sx={{ mt: 1 }} />
											<Groups fontSize='small' sx={{ mt: -1 }} />,
										</CardMedia>
									} label= { passedEmployees.Total_Training_Hrs } />
								</IconButton>
							</Masonry>
							</Typography>
							<Typography variant="h4" sx={{ display: data.length > 0 ? 'none' : 'flex', visibility: data.length > 0 ? 'hidden' : '', justifyContent: 'center', height: '100%' }}>
								No Training Data Found...!
							</Typography>
							<Typography sx={{ display: data.length > 0 ? '' : 'none', visibility: data.length > 0 ? '' : 'hidden' }}>
								<PieChart
									colors={ palette }
									series={[{
										data,
										innerRadius: 30,
										outerRadius: 150,
										paddingAngle: 5,
										cornerRadius: 5,
										startAngle: 0,
										endAngle: 360,
										highlightScope: { faded: 'global', highlighted: 'item' }, faded: { innerRadius: 30, additionalRadius: -30, color: '#2d333a' }
									}]}
									slotProps={{ legend: { seriesToDisplay: [] } }}
									height={350}
								/>
								<Accordion defaultExpanded sx={{ padding: 1, mt: 2, borderTop: 0, display: data.length > 0 ? '' : 'none', visibility: data.length > 0 ? '' : 'hidden' }}>
									<AccordionSummary expandIcon={ <ArrowDropDown /> } aria-controls="panel2-content" id="panel2-header">
										<Typography>Topics</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography className='flex gap-3'>
											{
												data.map((item: any, index: number) => 
													<Tooltip key={index + 1} title={ item.label }>
														<Paper style={{ backgroundColor: item.backgroundColorss, color: item.colors, width: '2.5vw', height: '5vh', display: 'flex', justifyContent: 'center', borderRadius: '50%' }} elevation={2}>
															<Avatar sx={{ padding: 0.5, mt: 0.5 }} alt={ item.label } src= { item.icon } />
														</Paper>
													</Tooltip>
												)
											}
										</Typography>
									</AccordionDetails>
								</Accordion>
							</Typography>
						</CardContent>
					</Card>
				</DialogContent>
			</Dialog>
		</>
	)
}