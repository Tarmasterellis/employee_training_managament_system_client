'use client';

import * as React from 'react';
import DropDownTable from '../../ui/dashboard/dropdown';
import { CircularProgress, Paper } from '@mui/material';

export default function Page() {


	const [data, setData]: any = React.useState(null);
	const [isLoading, setLoading] = React.useState(true)

	React.useLayoutEffect(() => {
		fetch('https://script.google.com/macros/s/AKfycbyh6cISkAJMWKOmA_1I8Ke5Yte_146eOx8XClC6czbgpOnjAdEj8ia1iedpVYxam7Oh-A/exec')
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setTimeout(() => {
					setLoading(false);
				}, 1000);
			})
	}, []);

	if (isLoading) return <Paper elevation={0} className={`flex justify-center items-center content-center w-full h-full`}> <CircularProgress /> </Paper>

	return <DropDownTable rowData = { data } />
}
