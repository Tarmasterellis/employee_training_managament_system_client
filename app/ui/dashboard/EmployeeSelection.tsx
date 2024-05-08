'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createData } from './CreateData';
import { CardSkeleton } from '../skeletons';
import { styled, darken } from '@mui/system';
import TextField from '@mui/material/TextField';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { BarChart } from '@mui/x-charts/BarChart';
import Autocomplete from '@mui/material/Autocomplete';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { backgroundColors } from './backgroundColours';

export default function EmployeeSelection({ rowData }: any) {
	const rows: any = rowData;

	Object.keys(rowData).forEach((keys: any) => {
		if (rowData[keys]['Emp Code'] !== undefined)
			if (rowData[keys]['Emp Code'] !== '')
				rows.push(createData(rowData[keys]['Emp Code'], rowData[keys]['Emp Name'], rowData[keys]['Designation'], rowData[keys]['Active/Inactive'], rowData[keys]['Department'], rowData[keys]['Training Topic'], rowData[keys]['Logic Building'], rowData[keys]['JavaScript / ES6'], rowData[keys]['Git Client'], rowData[keys]['HTML'], rowData[keys]['CSS'], rowData[keys]['Bootstrap'], rowData[keys]['SQL'], rowData[keys]['HTTP Protocols'], rowData[keys]['NoSql Database'], rowData[keys]['couchBase'], rowData[keys]['Angular'], rowData[keys]['Rust'], rowData[keys]['Node JS'], rowData[keys]['Android'], rowData[keys]['IOS'], rowData[keys]['CSharp'], rowData[keys]['Kafka'], rowData[keys]['Gherkin'], rowData[keys]['Git'], rowData[keys]['Linux'], rowData[keys]['Docker'], rowData[keys]['Kubernetes'], rowData[keys]['Total Training Hrs'], rowData[keys]['Gender'], rowData[keys]['Photo_URL']));
	});

	const AllTeam: any = [{}];

	rows.map((row: any, index: number) => row.Active_Inactive !== 'Left' && row.Total_Training_Hrs !== 0 ? row.Department === 'Development' ? AllTeam.push( row.Emp_Name ? { label: row.Emp_Name, department: row.Department, id: index } : '' ) : row.Department === 'HR and Finance' ? AllTeam.push( row.Emp_Name ? { label: row.Emp_Name, department: row.Department, id: index } : '' ) : row.Department === 'Infra and DevOps' ? AllTeam.push( row.Emp_Name ? { label: row.Emp_Name, department: row.Department, id: index } : '' ) : row.Department === 'Sales Analysis and QA' ? AllTeam.push( row.Emp_Name ? { label: row.Emp_Name, department: row.Department, id: index } : '' ) : row.Department === 'Tax Analysis' ? AllTeam.push( row.Emp_Name ? { label: row.Emp_Name, department: row.Department, id: index } : '' ) : row.Department === 'Training' ? AllTeam.push(row.Emp_Name ? { label: row.Emp_Name, department: row.Department, id: index } : '' ) : null : null );

	AllTeam.shift();

	const [value, setValue] = React.useState<string | null>(AllTeam[0].label);
	const [inputValue, setInputValue] = React.useState('');

	let arr: any = [{}];

	rows.map((row: any) => {
		row.Training_Topic.map((historyRow: any) => {
			if (historyRow[Object.keys(historyRow)[0]] !== 0 && historyRow[Object.keys(historyRow)[0]] !== '0' && historyRow[Object.keys(historyRow)[0]] !== undefined && row.Emp_Name === value )
				arr.push({ data: Number(historyRow[Object.keys(historyRow)[0]]), label: String(Object.keys(historyRow)[0]), backgroundColor: `${backgroundColors[Object.keys(historyRow)[0] as keyof typeof backgroundColors].backgroundColor}` });
		});
	});

	let dataset: any = [{}];
	let valuesCheck: Array<string> = [];

	arr.map((data: any, index: number) => {
		dataset.push({ data: data.data, label: data.label, id: index });
		valuesCheck.push(data.label);
	});

	dataset.shift();
	dataset.shift();
	valuesCheck.shift();

	const chartSetting = {
		yAxis: [{ label: 'Training Hours' }],
		series: [{ dataKey: 'data', label: 'Hours Attended' }],
		height: 700,
		sx: {
			[`& .${axisClasses.directionY} .${axisClasses.label}`]: {
				transform: 'translateX(-10px)',
			},
			'& .MuiBarElement-root:first-of-type': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[0])
					? backgroundColors[valuesCheck[0] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(2)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[1])
					? backgroundColors[valuesCheck[1] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(3)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[2])
					? backgroundColors[valuesCheck[2] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(4)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[3])
					? backgroundColors[valuesCheck[3] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(5)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[4])
					? backgroundColors[valuesCheck[4] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(6)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[5])
					? backgroundColors[valuesCheck[5] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(7)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[6])
					? backgroundColors[valuesCheck[6] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(8)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[7])
					? backgroundColors[valuesCheck[7] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(9)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[8])
					? backgroundColors[valuesCheck[8] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(10)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[9])
					? backgroundColors[valuesCheck[9] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(11)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[10])
					? backgroundColors[valuesCheck[10] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(12)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[11])
					? backgroundColors[valuesCheck[11] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(13)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[12])
					? backgroundColors[valuesCheck[12] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(14)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[13])
					? backgroundColors[valuesCheck[13] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(15)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[14])
					? backgroundColors[valuesCheck[14] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(16)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[15])
					? backgroundColors[valuesCheck[15] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(17)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[16])
					? backgroundColors[valuesCheck[16] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(18)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[17])
					? backgroundColors[valuesCheck[17] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(19)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[18])
					? backgroundColors[valuesCheck[18] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(20)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[19])
					? backgroundColors[valuesCheck[19] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(21)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[20])
					? backgroundColors[valuesCheck[20] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiBarElement-root:nth-of-type(22)': {
				fill: Object.keys(backgroundColors).includes(valuesCheck[21])
					? backgroundColors[valuesCheck[21] as keyof typeof backgroundColors]
							.backgroundColor
					: '',
			},
			'& .MuiChartsAxis-tickLabel, .MuiChartsLegend-series text, .MuiChartsAxis-label':
				{ fill: '#FFFFFF !important' },
			'& .MuiChartsAxis-line, .MuiChartsAxis-tick': {
				stroke: '#FFFFFF !important',
			},
		},
	};

	// Auto Complete Search with Group Options
	const options = AllTeam.map((option: any) => {
		const firstLetter = option.department.toUpperCase();
		return {
			firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
			...option,
		};
	});

	const GroupHeader = styled('div')(() => ({
		position: 'sticky',
		top: '-8px',
		padding: '4px 10px',
		color: '#FFFFFF',
		backgroundColor: darken('#2D333A', 1),
	}));

	const GroupItems = styled('ul')({
		padding: 0,
	});

	return (
		<>
			<Box sx={{ minWidth: 120 }}>
				<Autocomplete
					disableCloseOnSelect={false}
					id="combo-box-demo"
					value={value}
					onChange={(event: any, newValue: any | null) => { setValue(newValue.label) }}
					inputValue={inputValue}
					onInputChange={(event, newInputValue) => { setInputValue(newInputValue) }}
					options={options.sort( ( a: any, b: any) => -b.firstLetter.localeCompare(a.firstLetter) )}
					groupBy={(option) => option.firstLetter}
					renderInput={(params) => ( <TextField {...params} label="Employee Name" /> )}
					renderGroup={(params) => (
						<li key={params.key}>							
							<GroupHeader>{params.group}</GroupHeader>
							<GroupItems>{params.children}</GroupItems>
						</li>
					)}
					renderOption={(props, option, { inputValue }) => {
						const matches = match(option.label, inputValue, { insideWords: true });
						const parts = parse(option.label, matches);
						return (
							<li {...props}>
								<div>
									{ parts.map((part: any, index: number) => ( <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}> { part.text } </span> )) }
								</div>
							</li>
						)
					}} />
			</Box>
			<div className={`h-[50vh] w-full p-5 ${dataset === undefined || dataset === null || dataset.length === 0 ? 'invisible hidden' : ''}`}>
				<React.Suspense fallback={<CardSkeleton />}>
					<Paper elevation={2} className={`bg-[#2d333a] pl-3`}>
						<BarChart
							dataset={dataset}
							xAxis={[{ scaleType: 'band', dataKey: 'label', label: 'Training Name', tickPlacement: 'middle', tickLabelPlacement: 'tick' }]} {...chartSetting} />
					</Paper>
				</React.Suspense>
			</div>
		</>
	);
}
