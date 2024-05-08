'use client';

import * as XLSX from 'xlsx';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';

const ExcelImport = () => {

	const [tableData, setTableData] = useState([]);

	const convertToJson = async (headers, data) => {
		const rows = [];
		data.forEach(async row => {
			let rowData = {};
			row.forEach(async (element, index) => { rowData[headers[index]] = element })
			rows.push(rowData);
		});
		setTableData(rows);
		return rows;
	}

	const importExcel = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (event) => {
			const bstr = event.target.result;
			const workBook = XLSX.read(bstr, { type: 'binary' });
			const workSheetName = workBook.SheetNames[4];
			const workSheet = workBook.Sheets[workSheetName];
			const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
			const headers = fileData[1];
			const heads = headers.map(head => ({ title: head, field: head }));
			fileData.splice(0, 2);
			const arrayOfData = [convertToJson(headers, fileData)];
			console.log(arrayOfData)
		}
		reader.readAsBinaryString(file);
	}

	const columns = [
		{
			name: "Emp Code",
			label: "Emp Code",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Emp Name",
			label: "Emp Name",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Designation",
			label: "Designation",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Active/Inactive",
			label: "Active/Inactive",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
				display: () => arrayOfData['Active/Inactive'] === 'left' ? false : true,
			}
		},
		{
			name: "Department",
			label: "Department",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Training Topic",
			label: "Training Topic",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Logic Building",
			label: "Logic Building",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "JavaScript / ES6",
			label: "JavaScript / ES6",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Git Client",
			label: "Git Client",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "HTML",
			label: "HTML",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "CSS",
			label: "CSS",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Bootstrap",
			label: "Bootstrap",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "SQL",
			label: "SQL",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "HTTP Protocols",
			label: "HTTP Protocols",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "NoSql Database",
			label: "NoSql Database",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "couchBase",
			label: "couchBase",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Angular",
			label: "Angular",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Node JS",
			label: "Node JS",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Android",
			label: "Android",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "IOS",
			label: "IOS",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "CSharp",
			label: "CSharp",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Kafka",
			label: "Kafka",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Gherkin",
			label: "Gherkin",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Git",
			label: "Git",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
		{
			name: "Total Training Hrs",
			label: "Total Training Hrs",
			options: {
				filter: true,
				sort: true,
				setCellProps: () => ({
					style:{
						whiteSpace: "nowrap",
						position: "static",
						left: "0",
						zIndex: 100,
						fontWeight: "normal",
						fontSize: "12px",
					}
				}),
				setCellHeaderProps: () => ({
					style: {
						whiteSpace: "nowrap",
						position: "static",
						left: 0,
						zIndex: 101,
						textAlign: "center",
					}
				}),
			}
		},
	];

	const options = {
		sorting: true,
		print: true,
		download: true,
		filter: true,
		caseSensitive: false,
		fixedHeader: true,
		selectedRows: true,
		customSearch: false,
	}

	return (
		<>
			<div className={`w-[100%] mb-[1%] mt-[2%]`}>
				<h4 className={`text-center`}>Excel Import</h4>
				<Paper className={`w-[100%] mb-[1%] mt-[3%] pl-[1%] pr-[3%] pb-[1%] pt-[1%]`} elevation={0}>
					<div>
						<Grid container spacing={2}>
							<Grid item xs={6} md={8}>
								<div>
									<label htmlFor='upload-photo'>
										<input required style={{ display:'none' }} id={`upload-photo`} name={`upload_photo`} type={`file`} onChange={importExcel} />
										<Fab color={`primary`} size={`small`} component={`span`} aria-label={`add`} variant={`extended`}>Upload Document</Fab>
									</label>
								</div>
							</Grid>
							<Grid item xs={6} md={12}>
								<MUIDataTable title={`Excel import`} data={ tableData } columns={ columns } options={ options } />
							</Grid>
						</Grid>
					</div>
				</Paper>
			</div>
		</>
	)
}


export default ExcelImport;