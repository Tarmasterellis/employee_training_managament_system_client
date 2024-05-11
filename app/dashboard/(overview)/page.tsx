'use client';

import * as React from 'react';
import { CircularProgress, Paper } from '@mui/material';
import { GanttChart } from '@/app/ui/dashboard/GanttChart';
 
export default function Page() {

	const finalSheetdataObjectTrainer = {};
	const rowData: any = [];

	const [data, setData]: any = React.useState(null);
	const [isLoading, setLoading] = React.useState(true)

	React.useLayoutEffect(() => {
		fetch('https://script.google.com/macros/s/AKfycbyh6cISkAJMWKOmA_1I8Ke5Yte_146eOx8XClC6czbgpOnjAdEj8ia1iedpVYxam7Oh-A/exec')
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setTimeout(() => {
					setLoading(false);
				}, 4000);
			})
	}, []);

	if (isLoading) return <Paper elevation={0} className={`flex justify-center items-center content-center w-full h-full`}> <CircularProgress /> </Paper>
	
	for(let item in data.data)
	{
		if (data.data[item].Emp_Name === 'Ellis Sanjay Tarmaster') Object.assign(finalSheetdataObjectTrainer, { 0: {...data.data[item]} })
		else if (data.data[item].Emp_Name === 'Aman Verasia') Object.assign(finalSheetdataObjectTrainer, { 1: {...data.data[item]} })

		else if (data.data[item].Active_Inactive !== 'left') rowData.push( data.data[item] )
	}

	console.log(rowData);
	console.log(finalSheetdataObjectTrainer);

	return (
		<main>
			<div className='w-full h-full'>
				<GanttChart rowDataTrainer = { finalSheetdataObjectTrainer } rowData = { rowData } />
			</div>
		</main>
	);
}