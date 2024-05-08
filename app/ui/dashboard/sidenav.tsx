import Link from 'next/link';
import Image from 'next/image';
import { signOut } from '@/auth';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

import logo from '@/public/data.svg';

export default function SideNav() {

  return (
  	<>		
		<div className="flex h-full flex-col px-3 py-4 md:px-2">
			<Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40" href="/dashboard">
				<div className="w-full h-full text-white">
					<Image src={logo} className={`relative w-full h-full`} alt='Dashboard Svg Here...!' width={0} height={0} />
				</div>
			</Link>
			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<NavLinks />
				<div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
				<form action={async () => { 'use server'; await signOut(); }}>
					<button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
						<PowerIcon className="w-6" />
						<div className="hidden md:block">Sign Out</div>
					</button>
				</form>
				<Link className="flex h-15 items-center justify-center rounded-full bg-blue-600 p-4" href="mailto: ellis0078@gmail.com">
					<div className="w-full text-white text-center text-xs">
						Author: Ellis Sanjay Tarmaster
					</div>
				</Link>
			</div>
		</div>
	</>
	);
}