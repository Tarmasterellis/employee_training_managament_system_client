import { GanttChart } from '@/app/ui/dashboard/GanttChart';
 
export default async function Page() {

	const finalSheetdataObjectTrainer = {};
	const rowData: any = [];

	const response = await fetch("https://script.google.com/macros/s/AKfycbzNqziWBF3YvAZXR9F2sE7U_79wlOT9wrz-Yl1BSjGEVUl9IEQzeLX32dMq8OWq2X755g/exec");
	const { data } = await response.json();
	

	for(let item in data)
	{
		if (data[item].Emp_Name === 'Ellis Sanjay Tarmaster') Object.assign(finalSheetdataObjectTrainer, { 0: {...data[item]} })
		else if (data[item].Emp_Name === 'Aman Verasia') Object.assign(finalSheetdataObjectTrainer, { 1: {...data[item]} })

		else if (data[item].Active_Inactive !== 'left') rowData.push( data[item] )
	}

	return (
		<main>
			<div className='w-full h-full'>
				<GanttChart rowDataTrainer = { finalSheetdataObjectTrainer } rowData = { rowData } />
			</div>
		</main>
	);
}