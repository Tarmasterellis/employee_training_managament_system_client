'use client';

import * as React from 'react';
import avatarm from '@/public/avatarm.svg';
import avatarf from '@/public/avatarf.svg';
import { blue } from '@mui/material/colors';
import { backgroundColors } from './backgroundColours';
import { CorporateFare, RememberMe, ModelTraining, ExpandMore, Pending, PlayCircleFilled } from '@mui/icons-material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, Masonry } from '@mui/lab';
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography, IconButton, Chip, Tooltip, Zoom, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';


export const Accordians = ({rowsData, department, expanded, handleChange}: any) => {

	const empCodes: Array<string> = [];

	rowsData.forEach((row: any) => {
		if (row.Active_Inactive !== 'Left')
		{
			empCodes.push(row.Emp_Code);
		}
	});

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
		<Accordion className={`p-5 bg-[#E8E7D5] mb-2 mt-2`} expanded={expanded === `panel${department}`} onChange={handleChange(`panel${department}`)}>
			<AccordionSummary expandIcon={<ExpandMore />} aria-controls={`panel${department}d-content`} id={`panel${department}d-header`}>
				<Typography>{ department.replaceAll("_", " ") + " : " + rowsData.length }</Typography>
			</AccordionSummary>
			<AccordionDetails className='p-[5vh]'>
				<Masonry columns={3} spacing={2}>
					{ 
						rowsData.map((eachEmployee: any, index: number) => (
							<Card key={index} sx={{ maxWidth: 380, display: 'flex', flexDirection: 'column' }}>
								<CardHeader avatar={ <Avatar sx={{ bgcolor: blue[500] }}>{ eachEmployee.Emp_Name.split(" ")[0][0] + eachEmployee.Emp_Name.split(" ")[1][0] }</Avatar> } title={ eachEmployee.Emp_Name } subheader={"Designation - " + eachEmployee.Designation} />								
								<CardMedia component="img" height="194" image={ eachEmployee.Photo_URL === "photo" ? eachEmployee.Gender === "Male" ? avatarm.src : avatarf.src : eachEmployee.Photo_URL } alt={ eachEmployee.Emp_Name } />
								<CardContent sx={{ flex: '1 0 auto' }}>
									<Typography component="div" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
										<Chip color="info" icon={<RememberMe fontSize='small' />} label={ eachEmployee.Emp_Code } />
										<Tooltip title={` Total Training Hours of ${eachEmployee.Emp_Name} `} arrow TransitionComponent={Zoom} placement="bottom">
											<IconButton sx={{ padding: 0.2 }} aria-label="Completed Training Hours" onClick={ () => handleVisibility(String(eachEmployee.Emp_Code)) } disabled={ eachEmployee.Total_Training_Hrs === 0 ? true : false }>
												<Chip color={ eachEmployee.Total_Training_Hrs === 0 ? "error" : "success" } icon={<ModelTraining fontSize='small' />} label={ eachEmployee.Total_Training_Hrs } />
											</IconButton>
										</Tooltip>
										<Chip color="info" icon={<CorporateFare fontSize='small' />} label={ eachEmployee.Department } />
									</Typography>
									<Typography component="div" id={String(eachEmployee.Emp_Code)} style={{ display: 'none', visibility: 'hidden'}}>
										<Timeline position="alternate" sx={{ mx: 2, marginRight: 7 }}>
											{
												eachEmployee.Training_Topic.map((eachTopic: any, indexx: number) => (
													eachTopic[Object.keys(eachTopic)[0]] !== 0
													?
														<TimelineItem key={indexx}>
															<TimelineSeparator>
																<TimelineConnector sx={{ bgcolor: backgroundColors[Object.keys(eachTopic)[0] as keyof typeof backgroundColors].backgroundColor }} />
																<TimelineDot sx={{ bgcolor: backgroundColors[Object.keys(eachTopic)[0] as keyof typeof backgroundColors].backgroundColor }}>
																	<Tooltip title={` Attended ${eachTopic[Object.keys(eachTopic)[0]]} ${eachTopic[Object.keys(eachTopic)[0]] <= "1" ? " Hr" : " Hrs" } of ${ Object.keys(eachTopic)[0].split("_")[1] !== undefined ? Object.keys(eachTopic)[0].split("_")[0] + " " + Object.keys(eachTopic)[0].split("_")[1] : Object.keys(eachTopic)[0].split("_")[0] } Training`} arrow TransitionComponent={Zoom} placement="right">
																		<Avatar sx={{ bgcolor: backgroundColors[Object.keys(eachTopic)[0] as keyof typeof backgroundColors].backgroundColor, color: backgroundColors[Object.keys(eachTopic)[0] as keyof typeof backgroundColors].color }}>{ eachTopic[Object.keys(eachTopic)[0]] }</Avatar>
																	</Tooltip>
																</TimelineDot>
																<TimelineConnector sx={{ bgcolor: backgroundColors[Object.keys(eachTopic)[0] as keyof typeof backgroundColors].backgroundColor }} />
															</TimelineSeparator>
															<TimelineContent sx={{ py: '4vh', px: Object.keys(eachTopic)[0] === 'Kubernetes' ? 1.5 : Object.keys(eachTopic)[0] === 'JavaScript_ES6' ? 1.8 : Object.keys(eachTopic)[0] === 'couchBase' ? 1.6 : 2 }}>
																<Typography variant="subtitle2" color={ '#2d333a' } component="span"> { Object.keys(eachTopic)[0].split("_")[1] !== undefined ? Object.keys(eachTopic)[0].split("_")[0] + " " + Object.keys(eachTopic)[0].split("_")[1] : Object.keys(eachTopic)[0].split("_")[0] } </Typography>
															</TimelineContent>
														</TimelineItem>
													:
														<span key={indexx}></span>
												))
											}
											<TimelineItem>
												<TimelineSeparator>
													<TimelineConnector sx={{ bgcolor: '#2d333a' }} />
													<TimelineDot sx={{ bgcolor: '#2d333a' }}>
														<Avatar sx={{ bgcolor: '#2d333a', color: '#FFFFFF' }}>
															<Pending fontSize="large" />
														</Avatar>
													</TimelineDot>
												</TimelineSeparator>
												<TimelineContent sx={{ py: '4.5vh', px: 2 }} />
											</TimelineItem>
										</Timeline>
									</Typography>
								</CardContent>
							</Card>
						))
					}
				</Masonry>
			</AccordionDetails>
		</Accordion>
	)
}
