import ExcelImport from './Excelimport';
import { lusitana } from '@/app/ui/fonts';
 
export default async function Page() {

	return (
		<main>
			<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-center`}>
				Xlsx Import
			</h1>
			<hr className={'mt-5 mb-5 border-b-1 border-[#2d333a]'} />
			<ExcelImport />
			<hr className={'border-b-1 border-[#2d333a]'} />
		</main>
	);
}