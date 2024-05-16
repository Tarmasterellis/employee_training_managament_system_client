'use client';

import * as React from 'react';
import { Masonry } from '@mui/lab';
import { TimeLine } from './Timeline';
import { createData } from './CreateData';
import avatarm from '@/public/avatarm.svg';
import avatarf from '@/public/avatarf.svg';
import { PieChart } from '@mui/x-charts/PieChart';
import { backgroundColors } from './backgroundColours';
import { purple, green, blue } from '@mui/material/colors';
import { DashboardCard, DashboardCardTwoIcons } from './dashboardCard';
import { ExpandMore, CorporateFare, RememberMe, Male, Female, Groups, ModelTraining } from '@mui/icons-material';
import { Card, CardMedia, CardContent, Grid, Typography, AccordionDetails, Accordion, Box, AccordionSummary, Chip, IconButton, Paper, Avatar, Tooltip  } from '@mui/material';



// Gantt Chart According to employees
export const GanttChart = ({ rowDataTrainer, rowData }: any) => {

	const rows: any = rowData;
	const rowsTrainer: any = [];
	const rowsAll: any = [];
	
	// Accordian
	const [expanded, setExpanded] = React.useState<string | false>('panel2');
	const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => { setExpanded(newExpanded ? panel : false); };

	let totalTrainingHoursEllis: number = 0, totalTrainingHoursAman: number = 0;

	const dataEllis: any = [];
	const paletteE: any = [];
	const paletteA: any = [];
	const dataAman: any = [];
	const empCodes: Array<string> = [];


	Object.keys(rowDataTrainer[0]['Training_Topic']).map((trainingKeys: any, index: number) => {
		Object.keys(rowDataTrainer[0]['Training_Topic'][trainingKeys]).map((trainingName: any) => {
			(
				trainingName === 'Logic_Building' || trainingName === 'JavaScript_ES6' || trainingName === 'Git_Client' || trainingName === 'HTML' || trainingName === 'CSS' || trainingName === 'Bootstrap' || trainingName === 'SQL' || trainingName === 'HTTP_Protocols' || trainingName === 'NoSql_Database' || trainingName === 'couchBase' || trainingName === 'Angular' || trainingName === 'Node_JS' || trainingName === 'Kafka' || trainingName === 'Gherkin'
				?
					(
						totalTrainingHoursEllis += Number(backgroundColors[trainingName as keyof typeof backgroundColors].hours),
						dataEllis.push({ id: index, value: backgroundColors[trainingName as keyof typeof backgroundColors].hours, label: backgroundColors[trainingName as keyof typeof backgroundColors].name, icon: backgroundColors[trainingName as keyof typeof backgroundColors].icon, backgroundColorss: backgroundColors[trainingName as keyof typeof backgroundColors].backgroundColor, colors: backgroundColors[trainingName as keyof typeof backgroundColors].color }),
						paletteE.push(backgroundColors[trainingName as keyof typeof backgroundColors].backgroundColor)
					)
				:
					(trainingName === 'Git' || trainingName === 'Crowdin')
					?
						(
							totalTrainingHoursAman += Number(backgroundColors[trainingName as keyof typeof backgroundColors].hours),
							dataAman.push({ id: index, value: backgroundColors[trainingName as keyof typeof backgroundColors].hours, label: trainingName, icon: backgroundColors[trainingName as keyof typeof backgroundColors].icon, backgroundColorss: backgroundColors[trainingName as keyof typeof backgroundColors].backgroundColor, colors: backgroundColors[trainingName as keyof typeof backgroundColors].color }),
							paletteA.push(backgroundColors[trainingName as keyof typeof backgroundColors].backgroundColor)
						)
					:
						0
			);
		})
	});


	Object.keys(rowDataTrainer).forEach((keys: any) => {

		if (rowDataTrainer[keys]['Active_Inactive'] !== 'Left') empCodes.push(rowDataTrainer[keys]['Emp_Code']);

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
						rowsAll.push(createData(rowData[keys]['Emp_Code'], rowData[keys]['Emp_Name'], rowData[keys]['Designation'], rowData[keys]['Active_Inactive'], rowData[keys]['Department'], rowData[keys]['Training_Topic'], rowData[keys]['Training_Topic'][0]['Logic_Building'], rowData[keys]['Training_Topic'][1]['JavaScript_ES6'], rowData[keys]['Training_Topic'][2]['Git_Client'], rowData[keys]['Training_Topic'][3]['HTML'], rowData[keys]['Training_Topic'][4]['CSS'], rowData[keys]['Training_Topic'][5]['Bootstrap'], rowData[keys]['Training_Topic'][6]['SQL'], rowData[keys]['Training_Topic'][7]['HTTP_Protocols'], rowData[keys]['Training_Topic'][8]['NoSql_Database'], rowData[keys]['Training_Topic'][9]['couchBase'], rowData[keys]['Training_Topic'][10]['Angular'], rowData[keys]['Training_Topic'][11]['Rust'], rowData[keys]['Training_Topic'][12]['Node_JS'], rowData[keys]['Training_Topic'][13]['Android'], rowData[keys]['Training_Topic'][14]['IOS'], rowData[keys]['Training_Topic'][15]['CSharp'], rowData[keys]['Training_Topic'][16]['Kafka'], rowData[keys]['Training_Topic'][17]['Gherkin'], rowData[keys]['Training_Topic'][18]['Git'], rowData[keys]['Training_Topic'][19]['Linux'], rowData[keys]['Training_Topic'][20]['Docker'], rowData[keys]['Training_Topic'][21]['Crowdin'], rowData[keys]['Training_Topic'][22]['Kubernetes'], rowData[keys]['Total_Training_Hrs'], rowData[keys]['Gender'], rowData[keys]['Photo_URL']));
						totalTrainingHours += rowData[keys]['Total_Training_Hrs'];
					}
					else leftEmployees += 1;
				}
	});
		
	const dashboardCardData: any = [
		{ color: blue[600], icon: <Groups fontSize='large' />, text: `Total Employees In Organization: ${ (rows.length + rowsTrainer.length) - leftEmployees }`, trainingTopics: rowsAll },
		{ color: purple[600], icon: <ModelTraining fontSize='large' />, text: `Total Trainings Topics: ${ rows[0].Training_Topic.length }`, trainingTopics: rowsTrainer[0].Training_Topic },
		{ color: green[600], icon1: <ModelTraining fontSize='large' />, icon2: <Groups fontSize='large' sx={{ mt: -2 }} />, text: ` Total Trainings Hours Completed : ${ totalTrainingHours } ` },
	];

	const handleVisibility = (cardNumber: string) => {
		let visible = document.getElementById(cardNumber);
		if(visible !== null)
		{
			if (visible.style.display === "none" && visible.style.visibility === 'hidden')
			{
				visible.style.display = "block";
				visible.style.visibility = "visible";
				for(let i = 0; i <= empCodes.length; i++)
				{
					let invisible = document.getElementById(empCodes[i]);
					if (empCodes[i] !== cardNumber)
						if(invisible !== null)
						{
							invisible.style.display = "none";
							invisible.style.visibility = "hidden";
						}
				}
			}
			else
			{
				visible.style.display = "none";
				visible.style.visibility = "hidden";
			}
		}
	}

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
					<Paper className={`bg-[#2d333a] w-full h-full p-10 rounded-lg `} elevation={3}>
						<Masonry columns={{ xs: 1, sm: 1, md: 2 }} spacing={2}>
							{
								rowsTrainer.map((eachEmployee: any, index: number) => (
									<Card key={ index } sx={{ display: 'flex', minWidth: 350 }}>
										<Box sx={{ display: 'flex', flexDirection: 'column' }}>
											<CardContent sx={{ flex: '1 0 auto' }}>
												<Typography component="div" variant="h5"> { eachEmployee.Emp_Name + " - " + eachEmployee.Designation } </Typography>
												<Typography variant="subtitle2" color="text.secondary" component="div" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
												<Masonry key={ index } columns={{ xs: 1, sm: 1, md: 2, lg: 3 }} spacing={2}>
													<Chip color="info" icon={<RememberMe fontSize='small' />} label={ eachEmployee.Emp_Code } />
													<Chip color={ eachEmployee.Gender === "Male" ? "error" : "success" } icon={ eachEmployee.Gender === "Male" ? <Male /> : <Female /> } label={ eachEmployee.Gender } />
													<Chip color="info" icon={<CorporateFare fontSize='small' />} label={ eachEmployee.Department } />
													<IconButton sx={{ padding: 0.2 }} aria-label="Completed Training Hours" onClick={ () => handleVisibility(String(eachEmployee.Emp_Code)) }>
														<Chip color="success" icon={
															<CardMedia sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 2, pl:0.5 }}>
																<ModelTraining fontSize='small' sx={{ mt: 1 }} />
																<Groups fontSize='small' sx={{ mt: -1 }} />,
															</CardMedia>
														} label= { eachEmployee.Emp_Name === 'Ellis Sanjay Tarmaster' ? totalTrainingHoursEllis : totalTrainingHoursAman } />
													</IconButton>
												</Masonry>
												</Typography>
												<Typography component="div" id={String(eachEmployee.Emp_Code)} style={{ display: 'none', visibility: 'hidden' }}>
													<PieChart
														colors={ eachEmployee.Emp_Name === 'Ellis Sanjay Tarmaster' ? paletteE : paletteA }
														series={[{
															data: eachEmployee.Emp_Name === 'Ellis Sanjay Tarmaster' ? dataEllis : dataAman,
															innerRadius: 30,
															outerRadius: 100,
															paddingAngle: 5,
															cornerRadius: 5,
															startAngle: 0,
															endAngle: 360,
															highlightScope: { faded: 'global', highlighted: 'item' }, faded: { innerRadius: 30, additionalRadius: -30, color: '#2d333a' }
														}]}
														slotProps={{ legend: { seriesToDisplay: [] } }}
														height={200}
													/>
													<span>Training Given On</span>
													<Masonry columns={{ xs: 1, md: 9}} spacing={2} className='mt-2'>
														{
															eachEmployee.Emp_Name === 'Ellis Sanjay Tarmaster' ?
																dataEllis.map((item: any, index: number) => 
																	<Tooltip key={index + 1} title={ item.label }>
																		<Chip
																			style={{ backgroundColor: item.backgroundColorss, color: item.colors, paddingLeft: 12, width: 35, height: 35 }}
																			avatar={ <Avatar alt={ item.label } src= { item.icon } /> }
																		/>
																	</Tooltip>
																)
															:
																dataAman.map((item: any, index: number) => 
																	<Tooltip key={index + 1} title={ item.label }>
																		<Chip key={index + 2}
																			style={{ backgroundColor: item.backgroundColorss, color: item.colors, paddingLeft: 12, width: 35, height: 35 }}
																			avatar={ <Avatar sizes='small' alt={ item.label } src= { item.icon } /> }
																		/>
																	</Tooltip>
																)
																
														}
													</Masonry>
												</Typography>
											</CardContent>
										</Box>
										<CardMedia className={``} component="img" sx={{ width: 350, position: 'relative', right: `${eachEmployee.Emp_Name === 'Aman Verasia' ? '-4.7vw' : '-0.2vw' }` }} image={ eachEmployee.Photo_URL === "photo" ? eachEmployee.Gender === "Male" ? avatarm.src : avatarf.src : eachEmployee.Photo_URL } alt={ eachEmployee.Emp_Name } />
									</Card>
								))
							}
						</Masonry>
					</Paper>
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