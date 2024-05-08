"use client";

import { Chart } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, LinearScale, RadialLinearScale, CategoryScale, BarElement, PointElement, LineElement, LineController, BarController, TimeScale, Legend, Tooltip, Filler, Title} from 'chart.js';


ChartJS.register(LinearScale, RadialLinearScale, CategoryScale, BarElement, PointElement, LineElement, LineController, BarController, TimeScale, Legend, Tooltip, Filler, Title, ChartDataLabels );

export const OverviewChart = () => {
	const [chartOptions, setChartOptions] = useState({});
	const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });

	useEffect(() => {
		const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		setChartData({
			labels,
			datasets: [
				{
					type: 'radar' as const,
					label: "Employees",
					data: [120, 49, 134, 8, 50, 137, 140, 145, 56, 47, 54, 1],
					backgroundColor: "rgb(225, 172, 28, 0.4)",
					borderColor: "rgb(225, 172, 28)",
					borderWidth: 2,
					fill: {
						target: "origin",
						above: "rgba(225, 172, 28, 0.3)"
					}
				},
				{
					type: 'radar' as const,
					label: "Trainings Completed",
					data: [5, 10, 15, 30, 55, 60, 80, 20, 10, 5, 2, 22],
					backgroundColor: "rgb(170, 225, 0, 0.3)",
					borderColor: "rgb(170, 225, 0)",
					borderWidth: 2,
					fill: {
						target: "origin",
						above: "rgba(170, 225, 0, 0.3)"
					}
				},
				{
					type: 'radar' as const,
					label: "Trainings Pending",
					data: [42, 18, 57, 26, 17, 20, 35, 75, 65, 53, 63, 31],
					backgroundColor: "rgb(238, 75, 43, 0.2)",
					borderColor: "rgb(238, 75, 43)",
					borderWidth: 2,
					fill: {
						target: "origin", // 3. Set the fill options
						above: "rgba(238, 75, 43, 0.3)"
					}
				},
				{
					type: 'radar' as const,
					label: "Total Trainings",
					data: [12, 42, 79, 39, 88, 51, 3, 19, 16, 11, 62, 25],
					backgroundColor: "rgb(0, 150, 225, 0.1)",
					borderColor: "rgb(0, 150, 225)",
					borderWidth: 2,
					fill: {
						target: "origin", // 3. Set the fill options
						above: "rgba(0, 150, 225, 0.3)"
					}
				},
			]
		});
		setChartOptions({
			responsive: true,
			tension: 0,
		});
	}, [])

	return (
		<>
			<div className='bg-transparent mb-[5vh] h-[60vh] w-[50vw]'>
				<Chart type='radar' data={chartData} />
			</div>
		</>
	);

}

export const TrainingCompletedChart = () => {
	const [chartOptions, setChartOptions] = useState({});
	const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });

	useEffect(() => {
		const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		setChartData({
			labels,
			datasets: [
				{
					type: 'line' as const,
					label: "Trainings Completed",
					data: [5, 10, 15, 30, 55, 60, 80, 20, 10, 5, 2, 22],
					backgroundColor: "rgb(170, 225, 0, 0.3)",
					borderColor: "rgb(170, 225, 0)",
					borderWidth: 2,
					fill: {
						target: "origin",
						above: "rgba(170, 225, 0, 0.3)"
					}
				},
			]
		});
		setChartOptions({
			responsive: true,
			tension: 0,
		});
	}, [])

	return (
		<>
			<div className='bg-white mb-[5vh]'>
				<Chart type='line' data={chartData} options={chartOptions} />
			</div>
		</>
	);

}

export const TrainingPendingChart = () => {
	const [chartOptions, setChartOptions] = useState({});
	const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });

	useEffect(() => {
		const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		setChartData({
			labels,
			datasets: [
				{
					type: 'line' as const,
					label: "Trainings Pending",
					data: [42, 18, 57, 26, 17, 20, 35, 75, 65, 53, 63, 31],
					backgroundColor: "rgb(238, 75, 43, 0.2)",
					borderColor: "rgb(238, 75, 43)",
					borderWidth: 2,
					fill: {
						target: "origin", // 3. Set the fill options
						above: "rgba(238, 75, 43, 0.3)"
					}
				}
			]
		});
		setChartOptions({
			responsive: true,
			tension: 0,
		});
	}, [])

	return (
		<>
			<div className='bg-white mb-[5vh]'>
				<Chart type='line' data={chartData} options={chartOptions} />
			</div>
		</>
	);

}

export const TotalTrainingChart = () => {
	const [chartOptions, setChartOptions] = useState({});
	const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });

	useEffect(() => {
		const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		setChartData({
			labels,
			datasets: [
				{
					type: 'line' as const,
					label: "Total Trainings",
					data: [12, 42, 79, 39, 88, 51, 3, 19, 16, 11, 62, 25],
					backgroundColor: "rgb(0, 150, 225, 0.1)",
					borderColor: "rgb(0, 150, 225)",
					borderWidth: 2,
					fill: {
						target: "origin", // 3. Set the fill options
						above: "rgba(0, 150, 225, 0.3)"
					}
				},
			]
		});
		setChartOptions({
			responsive: true,
			tension: 0,
		});
	}, [])

	return (
		<>
			<div className='bg-white mb-[5vh]'>
				<Chart type='line' data={chartData} options={chartOptions} />
			</div>
		</>
	);

}

export const TotalEmployeesChart = () => {
	const [chartOptions, setChartOptions] = useState({});
	const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });

	useEffect(() => {
		const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		setChartData({
			labels,
			datasets: [
				{
					type: 'line' as const,
					label: "Employees",
					data: [120, 49, 134, 8, 50, 137, 140, 145, 56, 47, 54, 1],
					backgroundColor: "rgb(225, 172, 28, 0.4)",
					borderColor: "rgb(225, 172, 28)",
					borderWidth: 2,
					fill: {
						target: "origin",
						above: "rgba(225, 172, 28, 0.3)"
					}
				}
			]
		});
		setChartOptions({
			responsive: true,
			tension: 0,
		});
	}, [])

	return (
		<>
			<div className='bg-white mb-[5vh]'>
				<Chart type='line' data={chartData} options={chartOptions} />
			</div>
		</>
	);

}