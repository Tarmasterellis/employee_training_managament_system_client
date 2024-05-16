'use client';

import * as React from 'react';
import { Masonry } from '@mui/lab';
import avatarm from '@/public/avatarm.svg';
import avatarf from '@/public/avatarf.svg';
import { PieChart } from '@mui/x-charts/PieChart';
import { backgroundColors } from './backgroundColours';
import { Male, Female, RememberMe, CorporateFare, Face, Face3 } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Avatar, CardMedia, Typography, Card, CardContent, ListItem, ListItemAvatar, ListItemText, Chip, Paper, ButtonBase, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material/';


export const ModalPopup = ({ trainingTopics, open, setOpen }: any) => {
	
	const handleClose = () => setOpen(false);

	const [data, setData]: any = React.useState([]);
	const [palette, setPalette]: any = React.useState([]);
	const [totalTrainingHours, setTotalTrainingHours]: any = React.useState(null);
	const [openChild, setOpenChild] = React.useState(false);
	const [passedEmployees, setpassedEmployees]: any = React.useState([{}]);

	let maleCount = 0, femaleCount = 0;

	if(!trainingTopics[0].hasOwnProperty("Logic_Building")) trainingTopics.map((eachEmployee: any) => eachEmployee.Gender === "Male" ? maleCount += 1 : femaleCount += 1 );

	const handleModalClick = (passedEmployee: any) => {
		setpassedEmployees(passedEmployee);

		const dataValues: any = [];
		const paletteValues: any = [];
		let counter = 0;

		Object.keys(passedEmployee['Training_Topic']).map((trainingKeys: any) => {
			Object.keys(passedEmployee['Training_Topic'][trainingKeys]).map((trainingName: any) => {
				if(passedEmployee['Training_Topic'][trainingKeys][trainingName] !== 0)
				{
					dataValues.push({ id: counter, value: passedEmployee['Training_Topic'][trainingKeys][trainingName], label: backgroundColors[trainingName as keyof typeof backgroundColors].name, icon: backgroundColors[trainingName as keyof typeof backgroundColors].icon, backgroundColorss: backgroundColors[trainingName as keyof typeof backgroundColors].backgroundColor, colors: backgroundColors[trainingName as keyof typeof backgroundColors].color });
					paletteValues.push(backgroundColors[trainingName as keyof typeof backgroundColors].backgroundColor);
				}
			});
			counter+=1;
			setData(dataValues);
			setPalette(paletteValues);
		});

		setTotalTrainingHours(passedEmployee['Total_Training_Hrs']);

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
						<Masonry columns={{ xs: 1, sm: 2, lg: 3 }} spacing={2}>
							{
								trainingTopics.map((eachEmployee: any, index: number) =>
									<ButtonBase key={index} onClick={ () => handleModalClick(eachEmployee) }>
										<Paper sx={{ padding: 1, width: '95%' }} elevation={2}>
											<ListItem disableGutters sx={{ pl: 2, pr: 2 }} secondaryAction = { eachEmployee.Gender === "Male" ? <Male  sx={{ color: '#21a8fa' }} /> : <Female  sx={{ color: '#e52264' }} /> }>
												<ListItemAvatar>
													<Avatar sx={{ width: 50, height: 50 }} alt={ eachEmployee.Gender } src={ eachEmployee.Photo_URL === "photo" ? eachEmployee.Gender === "Male" ? avatarm.src : avatarf.src : eachEmployee.Photo_URL } />
												</ListItemAvatar>
												<ListItemText className={`flex-none w-[100%]`} primary = { eachEmployee.Emp_Name } secondary = { eachEmployee.Active_Inactive } />
											</ListItem>
										</Paper>
									</ButtonBase>
								)
							}
						</Masonry>
					</Dialog>
			}

			<Dialog fullWidth={ true } maxWidth={ data.length > 0 ? 'lg' : 'sm' } open={openChild} onClose={handleCloseChild} aria-labelledby="dialog-Employees">
				<DialogTitle id="dialog-Employees" sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center' }}> { passedEmployees.Emp_Name } </DialogTitle>
				<DialogContent sx={{ overflow: 'hidden', '@media screen and (max-width: 1100px)': { overflow: 'auto' } }}>
					<Card sx={{ display: 'flex', '@media screen and (max-width: 600px)': { display: 'flex', flexDirection: 'column' }, minWidth: 350, justifyContent: data.length > 0 ? '' : 'center' }} elevation={0}>
						<div>
							<CardMedia className={``} component="img" sx={{ width: 400, borderRadius: '2%', height: 400, '@media screen and (max-width: 500px)': { width: 270, height: 270 } }} image={ passedEmployees.Photo_URL === "photo" ? passedEmployees.Gender === "Male" ? avatarm.src : avatarf.src : passedEmployees.Photo_URL } alt={ passedEmployees.Emp_Name } />
							<Typography component="div" sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 2, '@media screen and (max-width: 500px)': { width: 270 }, '@media screen and (min-width: 501px) and (min-width: 700px)': { width: 340 } }}>
								<Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
									<Chip color="info" icon={<RememberMe fontSize='small' />} label={ passedEmployees.Emp_Code } />
									<Chip sx={{ backgroundColor: passedEmployees.Gender === "Male" ? "#21a8fa" : "#e52264", color: '#FFFFFF' }} icon={ passedEmployees.Gender === "Male" ? <Male sx={{ color: '#FFFFFF !important' }} /> : <Female sx={{ color: '#FFFFFF !important' }} /> } label={ passedEmployees.Gender } />
									<Chip color="info" icon={ passedEmployees.Gender === "Male" ? <Face fontSize='small' /> : <Face3 fontSize='small' /> } label={ passedEmployees.Designation } />
									<Chip color="info" icon={<CorporateFare fontSize='small' />} label={ passedEmployees.Department } />
									
								</Masonry>
							</Typography>
							<Typography variant="h4" sx={{ display: data.length > 0 ? 'none' : 'flex', visibility: data.length > 0 ? 'hidden' : '', justifyContent: 'center', height: '100%' }}>
								No Training Data Found...!
							</Typography>
						</div>
						<CardContent sx={{ flex: '1 0 auto', '@media screen and (max-width: 500px)': { flex: 'auto', width: 270 }, '@media screen and (min-width: 501px) and (max-width: 700px)': { width: 500 }, display: data.length > 0 ? 'flex' : 'none', width: '60%' }}>
							<Typography component={'div'} sx={{ display: data.length > 0 ? '' : 'none', visibility: data.length > 0 ? '' : 'hidden', width: '100%' }}>
								<TableContainer>
									<Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
										<caption><strong>Total Training Hours - { totalTrainingHours } { totalTrainingHours > 1 ? ' Hours' : ' Hour' }</strong></caption>
										<TableHead>
											<TableRow>
												<TableCell>Training Name</TableCell>
												<TableCell>Hours</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
										{
											data.map((row: any) => (
											<TableRow key={ row.id } sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: row.backgroundColorss }}>
												<TableCell sx={{ color: row.colors }} component="th" scope="row"> { row.label } </TableCell>
												<TableCell sx={{ color: row.colors }}>{ row.value }{ row.value > 1 ? ' Hours' : ' Hour' }</TableCell>
											</TableRow>
										))}
										</TableBody>
									</Table>
								</TableContainer>
									<Typography component={'div'} className='flex w-[100%]'>
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
											slotProps={{ legend: { hidden: true } }}
											height={350}
											sx={{ '@media screen and (max-width: 500px)': { width: `100% !important`, height: '200px !important' }, '@media screen and (min-width: 501px) and (max-width: 800px)': { width: `100% !important`, height: '300px !important' } }}
										/>
									</Typography>
							</Typography>
						</CardContent>
					</Card>
				</DialogContent>
			</Dialog>
		</>
	)
}