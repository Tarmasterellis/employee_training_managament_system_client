'use client';

import * as React from 'react';
import { Accordians } from './Accordians';

export const TimeLine = ({ rows }: any) => {

	// Accordian
	const [expanded, setExpanded] = React.useState<string | false>('');
	const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => { setExpanded(newExpanded ? panel : false); };

	const Development: any = [];
	const HR_and_Finance: any = [];
	const Infra_and_DevOps: any = [];
	const Sales_Analysis: any = [];
	const Tax_Analysis: any = [];

	let departmentNames = ['Development', 'HR_and_Finance', 'Infra_and_DevOps', 'Sales_Analysis_and_QA', 'Tax_Analysis'];
	const departmentNamesArray = [Development, HR_and_Finance, Infra_and_DevOps, Sales_Analysis, Tax_Analysis];

	departmentNames.map((eachDepartment: string, index: number) => {
		rows.forEach((row: any) => {
			if (row.Active_Inactive !== 'Left')
			{
				if (row.Department === eachDepartment.replaceAll("_", " "))
					departmentNamesArray[index].push(row);
			}
		})
	})

	return departmentNames.map((eachDepartment: string, index: number) => <Accordians key={index} rowsData={departmentNamesArray[index]} department={eachDepartment} expanded = { expanded } handleChange = { handleChange } />)
}