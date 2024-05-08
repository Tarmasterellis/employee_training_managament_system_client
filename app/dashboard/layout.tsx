import SideNav from '@/app/ui/dashboard/sidenav';
import { AppBarPage } from '../ui/dashboard/AppBarPage';
 
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen flex-col">
			<div className="w-full h-[7.5vh] flex-none">
				<AppBarPage />
			</div>
			{/* <div className="w-full flex-none md:w-64">
				<SideNav />
			</div> */}
			<div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
		</div>
	);
}