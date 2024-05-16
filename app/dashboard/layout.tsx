import { AppBarPage } from '../ui/dashboard/AppBarPage';
 
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen flex-col">
			<div className="w-full h-[8vh] flex-none">
				<AppBarPage />
			</div>
			<div className="flex-grow p-6 md:overflow-y-auto md:pl-12 md:pr-12 md:pt-12 md:pb-5">{children}</div>
		</div>
	);
}