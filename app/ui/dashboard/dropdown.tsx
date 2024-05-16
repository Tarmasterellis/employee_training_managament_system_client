'use client';

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import * as React from 'react';
import { createData } from './CreateData';
import Grid from '@mui/material/Unstable_Grid2';
import { BarChart } from '@mui/x-charts/BarChart';
import { backgroundColors } from './backgroundColours';
import { KeyboardArrowUp, KeyboardArrowDown, FilterList, BarChart as BarChartIcon } from '@mui/icons-material';
import { Box, Chip, Table, Paper, Collapse, TableRow, TableBody, TableCell, TableHead, IconButton, Typography, TableContainer, Button } from '@mui/material';


function Row(props: { row: ReturnType<typeof createData>, indexKey: number }) {
	const { row, indexKey } = props;
	const [open, setOpen] = React.useState(false);

	const visibility = Number(row.Total_Training_Hrs) === 0 || row.Total_Training_Hrs === undefined || row.Active_Inactive === 'Left' ? '!hidden invisible' : ''

	let arr: any = [{}];
	let arrData: any = [];
	const arrDataColours: any = [];
	const arrDataTextColours: any = [];
	const arrDataLabels: any = [];
	const newArrData: any = [{}];

	row.Training_Topic.map((historyRow: any, index: number) => {

		if(historyRow[Object.keys(historyRow)[0]] !== 0 && historyRow[Object.keys(historyRow)[0]] !== 0 && historyRow[Object.keys(historyRow)[0]] !== undefined)
		{
			arr.push({ data: Number(historyRow[Object.keys(historyRow)[0]]), label: `${Object.keys(historyRow)[0]}`, backgroundColor:`${backgroundColors[Object.keys(historyRow)[0] as keyof typeof backgroundColors].backgroundColor}` })
			arrData.push(Number(historyRow[Object.keys(historyRow)[0]]))
			arrDataColours.push(backgroundColors[Object.keys(historyRow)[0] as keyof typeof backgroundColors].backgroundColor)
			arrDataTextColours.push(backgroundColors[Object.keys(historyRow)[0] as keyof typeof backgroundColors].color)
			arrDataLabels.push(Object.keys(historyRow)[0])
		}
		newArrData['series'] = [{}]
		newArrData['series'][0]['data'] = arrData;
		newArrData['series'][0]['name'] = '';
		newArrData.shift();
	});

	arr = arr.filter((value: any) => Object.keys(value).length !== 0);

	const chartSetting = { xAxis: [ { label: 'Training Attended' } ], width: 450, height: 250 };

	const valueFormatter = (value: number | null) => `${value}`;

	const [selectedC, setSelected] = React.useState('Bar Chart');
	const handleClick = (event: any) => setSelected(event.target.value === 'Bar Chart' ? 'Funnel Chart' : 'Bar Chart');
	
	return (
		<>
			<TableRow key={indexKey + 'data'} className={`${visibility} ${indexKey}`}>
				<TableCell>
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}> { open ? <KeyboardArrowUp /> : <KeyboardArrowDown /> } </IconButton>
				</TableCell>
				<TableCell component="th" scope="row"> { row.Emp_Code } </TableCell>
				<TableCell align="center"> { row.Emp_Name } </TableCell>
				<TableCell align="center"> { row.Designation } </TableCell>
				<TableCell align="center"> { row.Department } </TableCell>
				<TableCell align="center"> { row.Total_Training_Hrs } </TableCell>
				<TableCell align="center"> <Chip label={ row.Active_Inactive } color={`${row.Active_Inactive === 'Left' ? 'error' : 'success'}`} /> </TableCell>
			</TableRow>
			<TableRow key={indexKey+"_"} className={`${visibility}`}>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div"> Total Training Hours: { row.Total_Training_Hrs }</Typography>
							<Box sx={{ flexGrow: 1 }}>
								<Grid container spacing={2}>
									<Grid xs={12} md={3} lg={4}>
										<Grid key={indexKey+"__"} container spacing={2}>
											{
												row.Training_Topic.map((historyRow: any, index: number) => (
													<Grid key={index} className={`${historyRow[Object.keys(historyRow)[0]] === undefined || historyRow[Object.keys(historyRow)[0]] === 0 ? "hidden invisible" : '' }`} xs={4} sm={3} md={12} lg={5}>
														<Chip label={`${[Object.keys(historyRow)[0]]}: ${ historyRow[Object.keys(historyRow)[0]] }`} style={{backgroundColor:`${backgroundColors[Object.keys(historyRow)[0] as keyof typeof backgroundColors].backgroundColor}`, color: `${backgroundColors[Object.keys(historyRow)[0] as keyof typeof backgroundColors].color}`}} />
													</Grid>
												))
											}
										</Grid>
									</Grid>
									<Grid xs={12} md={9} lg={8} className={`flex justify-center items-center self-center flex-col`}>
										<div>
											<Button variant='outlined' endIcon={ selectedC === 'Bar Chart' ? <FilterList /> : <BarChartIcon /> } value={ selectedC } onClick={ (event) => handleClick(event) }>
												Change Chart Design To
											</Button>
										</div>
										<div className={` ${ selectedC === 'Bar Chart' ? '' : 'hidden invisible' } w-full flex`}>
											<BarChart dataset={arr} yAxis={[{ scaleType: 'band', dataKey: 'label' }]} series= {[{dataKey: 'data', label: 'Hours Of Training', valueFormatter }]} layout="horizontal" {...chartSetting} />
										</div>
										<div className={` ${ selectedC !== 'Bar Chart' ? '' : 'hidden invisible' } `}>
											<Chart options={{ chart: { type: 'bar' }, plotOptions: { bar: { borderRadius: 0, horizontal: true, distributed: true, barHeight: '80%', isFunnel: true, }}, colors: arrDataColours, dataLabels: { enabled: true, style: { colors: arrDataTextColours } }, title: { text: 'Training Hours', align: 'center' }, xaxis: { categories: arrDataLabels }, legend: { show: false } }} series={newArrData.series} type="bar" height={250} />
										</div>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}

export default function DropDownTable({ rowData }: any) {

	return (
		<TableContainer component={Paper} sx={{ maxHeight: '82vh' }}>
			<Table aria-label="collapsible table a dense table" stickyHeader size="small">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>Employee Code</TableCell>
						<TableCell align="center">Employee Name</TableCell>
						<TableCell align="center">Designation</TableCell>
						<TableCell align="center">Department</TableCell>
						<TableCell align="center">Total Training Hours</TableCell>
						<TableCell align="center">Working / Left</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{ rowData.data.map((row: any, index: number) => (<Row key = { index } row = { row } indexKey = { index } />)) }</TableBody>
			</Table>
		</TableContainer>
	);
}