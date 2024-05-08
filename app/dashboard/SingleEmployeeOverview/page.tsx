import EmployeeSelection from '../../ui/dashboard/EmployeeSelection';

export default async function Page() {

	const response = await fetch("https://script.google.com/macros/s/AKfycbzNqziWBF3YvAZXR9F2sE7U_79wlOT9wrz-Yl1BSjGEVUl9IEQzeLX32dMq8OWq2X755g/exec");
	const { data } = await response.json();

	return (
		<>
			<div>
				<EmployeeSelection rowData = { data } />
			</div>
		</>
	);
}
