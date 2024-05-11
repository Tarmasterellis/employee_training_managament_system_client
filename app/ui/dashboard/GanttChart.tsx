'use client';

import * as React from 'react';
import { TimeLine } from './Timeline';
import { createData } from './CreateData';
import avatarm from '@/public/avatarm.svg';
import avatarf from '@/public/avatarf.svg';
import { purple, green, blue } from '@mui/material/colors';
import { DashboardCard, DashboardCardTwoIcons } from './dashboardCard';
import { ExpandMore, CorporateFare, RememberMe, Male, Female, Groups, ModelTraining } from '@mui/icons-material';
import { Card, CardMedia, CardContent, Grid, Typography, AccordionDetails, Accordion, Box, AccordionSummary, Chip } from '@mui/material';


// Gantt Chart According to employees
export const GanttChart = ({ rowDataTrainer, rowData }: any) => {

	const rows: any = rowData;
	const rowsTrainer: any = [];
	const rowsAll: any = [];
	
	// Accordian
	const [expanded, setExpanded] = React.useState<string | false>('panel2');
	const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => { setExpanded(newExpanded ? panel : false); };

	Object.keys(rowDataTrainer).forEach((keys: any) => {
		rowDataTrainer[keys].Emp_Code !== undefined && rowDataTrainer[keys].Emp_Code !== ''
		?
			rowsTrainer.push(createData(rowDataTrainer[keys].Emp_Code, rowDataTrainer[keys]['Emp_Name'], rowDataTrainer[keys]['Designation'], rowDataTrainer[keys]['Active_Inactive'], rowDataTrainer[keys]['Department'], rowDataTrainer[keys]['Training_Topic'], rowDataTrainer[keys]['Logic_Building'], rowDataTrainer[keys]['JavaScript_ES6'], rowDataTrainer[keys]['Git_Client'], rowDataTrainer[keys]['HTML'], rowDataTrainer[keys]['CSS'], rowDataTrainer[keys]['Bootstrap'], rowDataTrainer[keys]['SQL'], rowDataTrainer[keys]['HTTP_Protocols'], rowDataTrainer[keys]['NoSql_Database'], rowDataTrainer[keys]['couchBase'], rowDataTrainer[keys]['Angular'], rowDataTrainer[keys]['Rust'], rowDataTrainer[keys]['Node_JS'], rowDataTrainer[keys]['Android'], rowDataTrainer[keys]['IOS'], rowDataTrainer[keys]['CSharp'], rowDataTrainer[keys]['Kafka'], rowDataTrainer[keys]['Gherkin'], rowDataTrainer[keys]['Git'], rowDataTrainer[keys]['Linux'], rowDataTrainer[keys]['Docker'], rowData[keys]['Crowdin'], rowDataTrainer[keys]['Kubernetes'], rowDataTrainer[keys]['Total_Training_Hrs'], rowDataTrainer[keys]['Gender'], rowDataTrainer[keys]['Photo_URL']))
		:
			null
	});

	let leftEmployees = 0;
	let totalTrainingHours = 0;
	Object.keys(rowData).forEach((keys: any) => {
		if(rowData[keys]['Emp_Code'] !== undefined)
			if(rowData[keys]['Emp_Code'] !== '')
				{
					if(rowData[keys]['Active_Inactive'] !== 'Left')
					{
						rowsAll.push(createData(rowData[keys]['Emp_Code'], rowData[keys]['Emp_Name'], rowData[keys]['Designation'], rowData[keys]['Active_Inactive'], rowData[keys]['Department'], rowData[keys]['Training_Topic'], rowData[keys]['Logic_Building'], rowData[keys]['JavaScript_ES6'], rowData[keys]['Git_Client'], rowData[keys]['HTML'], rowData[keys]['CSS'], rowData[keys]['Bootstrap'], rowData[keys]['SQL'], rowData[keys]['HTTP_Protocols'], rowData[keys]['NoSql_Database'], rowData[keys]['couchBase'], rowData[keys]['Angular'], rowData[keys]['Rust'], rowData[keys]['Node_JS'], rowData[keys]['Android'], rowData[keys]['IOS'], rowData[keys]['CSharp'], rowData[keys]['Kafka'], rowData[keys]['Gherkin'], rowData[keys]['Git'], rowData[keys]['Linux'], rowData[keys]['Docker'], rowData[keys]['Crowdin'], rowData[keys]['Kubernetes'], rowData[keys]['Total_Training_Hrs'], rowData[keys]['Gender'], rowData[keys]['Photo_URL']));
						totalTrainingHours += rowData[keys]['Total_Training_Hrs'];
					}
					else leftEmployees += 1;
				}
		});

		
	const dashboardCardData: any = [
		{ color: blue[600], icon: <Groups fontSize='large' />, text: `Total Employees In Organization: ${ (rows.length + rowsTrainer.length) - leftEmployees }`, trainingTopics: rowsAll },
		{ color: purple[600], icon: <ModelTraining fontSize='large' />, text: `Total Trainings Topics: ${ rows[0].Training_Topic.length }`, trainingTopics: rowsTrainer[0].Training_Topic },
		{ color: green[600], icon1: <ModelTraining fontSize='large' />, icon2: <Groups fontSize='large' sx={{ mt: -2 }} />, text: ` Total Trainings Hours Completed : ${ totalTrainingHours } ` },
	]

	return (
		<>
			{/* Header Components */}
			<Grid container spacing={2} className='mb-2'>
				{
					dashboardCardData.map((item: any, index: number) =>
						item.hasOwnProperty("icon2")
						?
							<Grid item xs={12} md={6} lg={4} key = { index }>
								<DashboardCardTwoIcons color = { item.color } icon1 = { item.icon1 } icon2 = { item.icon2 } text = { item.text } />
							</Grid>
						:
							<Grid item xs={12} md={6} lg={4} key = { index }>
								<DashboardCard color = { item.color } icon = { item.icon } text = { item.text } trainingTopics = { item.trainingTopics } />
							</Grid>
				)}
			</Grid>
			
			{/* Trainer Accordian */}
			<Accordion className={`p-5`} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1d-content" id="panel1d-header">
					<Typography>Total Trainers: { rowsTrainer.length }</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container spacing={2} sx={{ bgcolor: '#2d333a', padding: '1vw' }} className='rounded-lg flex justify-around'>
						{
							rowsTrainer.map((eachEmployee: any, index: number) => (
								<Grid item key={ index } xs={12} md={6} lg={4}>
									<Card sx={{ display: 'flex' }}>
										<Box sx={{ display: 'flex', flexDirection: 'column' }}>
											<CardContent sx={{ flex: '1 0 auto' }}>
												<Typography component="div" variant="h5"> { eachEmployee.Emp_Name + " - " + eachEmployee.Designation } </Typography>
												<Typography variant="subtitle2" color="text.secondary" component="div" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
													<Grid container spacing={2}>
														<Grid item xs={12} md={6} lg={4}>
															<Chip color="info" icon={<RememberMe fontSize='small' />} label={ eachEmployee.Emp_Code } />
														</Grid>
														<Grid item xs={12} md={6} lg={4}>
															<Chip color={ eachEmployee.Gender === "Male" ? "error" : "success" } icon={ eachEmployee.Gender === "Male" ? <Male /> : <Female /> } label={ eachEmployee.Gender } />
														</Grid>
														<Grid item xs={12} md={6} lg={4}>
															<Chip color="info" icon={<CorporateFare fontSize='small' />} label={ eachEmployee.Department } />
														</Grid>
													</Grid>
												</Typography>
											</CardContent>
										</Box>
										<CardMedia component="img" sx={{ width: 151 }} image={ eachEmployee.Photo_URL === "photo" ? eachEmployee.Gender === "Male" ? avatarm.src : avatarf.src : eachEmployee.Photo_URL } alt={ eachEmployee.Emp_Name } />
									</Card>
								</Grid>
							))
						}
					</Grid>
				</AccordionDetails>
			</Accordion>

			{/* Employee Accordian */}
			<Accordion className={`p-5`} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2d-content" id="panel2d-header">
					<Typography>Total Employees: { rows.length - leftEmployees }</Typography>
				</AccordionSummary>
				<AccordionDetails className={`pb-0`}>
					<TimeLine rows={ rows } />
				</AccordionDetails>
			</Accordion>
		</>
	)
}