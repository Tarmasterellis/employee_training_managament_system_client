'use client';

import * as React from 'react';
import { createData } from './CreateData';
import Grid from '@mui/material/Unstable_Grid2';
import { BarChart } from '@mui/x-charts/BarChart';
import { backgroundColors } from './backgroundColours';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { Box, Chip, Table, Paper, Collapse, TableRow, TableBody, TableCell, TableHead, IconButton, Typography, TableContainer } from '@mui/material';


function Row(props: { row: ReturnType<typeof createData>, indexKey: number }) {
	const { row, indexKey } = props;
	const [open, setOpen] = React.useState(false);

	console.log(row.Total_Training_Hrs, typeof row.Total_Training_Hrs);

	const visibility = Number(row.Total_Training_Hrs) === 0 || row.Total_Training_Hrs === undefined || row.Active_Inactive === 'Left' ? 'hidden invisible' : ''

	let arr: any = [{}];

	row.Training_Topic.map((historyRow: any, index: number) => {
		if(historyRow[Object.keys(historyRow)[0]] !== 0 && historyRow[Object.keys(historyRow)[0]] !== 0 && historyRow[Object.keys(historyRow)[0]] !== undefined)
			arr.push({ data: Number(historyRow[Object.keys(historyRow)[0]]), label: `${Object.keys(historyRow)[0]}`, backgroundColor:`${backgroundColors[Object.keys(historyRow)[0] as keyof typeof backgroundColors].backgroundColor}` })
	});

	arr = arr.filter((value: any) => Object.keys(value).length !== 0);

	const chartSetting = { xAxis: [ { label: 'Training Attended' } ], width: 500, height: 250 };

	const valueFormatter = (value: number | null) => `${value}`;

	return (
		<>
			<TableRow className={`${visibility}`}>
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
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} className={`${visibility}`}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div"> Total Training Hours: { row.Total_Training_Hrs }</Typography>
							<Box sx={{ flexGrow: 1 }}>
								<Grid container spacing={2}>
									<Grid xs={6}>
										<Grid container spacing={2}>
											{
												row.Training_Topic.map((historyRow: any, index: number) => (
													<>
														<Grid className={`${historyRow[Object.keys(historyRow)[0]] === undefined || historyRow[Object.keys(historyRow)[0]] === 0 ? "hidden invisible" : '' }`} key={index} xs={2} sm={3} md={3}>
															<Chip label={`${[Object.keys(historyRow)[0]]}: ${ historyRow[Object.keys(historyRow)[0]] }`} style={{backgroundColor:`${backgroundColors[Object.keys(historyRow)[0] as keyof typeof backgroundColors].backgroundColor}`, color: `${backgroundColors[Object.keys(historyRow)[0] as keyof typeof backgroundColors].color}`}} />
														</Grid>
													</>
												))
											}
										</Grid>
									</Grid>
									<Grid xs={6} className={`flex justify-center items-center self-center`}>
										<BarChart dataset={arr} yAxis={[{ scaleType: 'band', dataKey: 'label' }]} series= {[{dataKey: 'data', label: 'Hours Of Training', valueFormatter }]} layout="horizontal" {...chartSetting} />
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

	console.log(rowData);
	const rows: any = [];

	return (
		<TableContainer component={Paper} sx={{ maxHeight: '82.5vh' }}>
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
				<TableBody> { rowData.map((row: any, index: number) => ( <Row key={index} row={row} indexKey={index} /> )) } </TableBody>
			</Table>
	  </TableContainer>
	);
}