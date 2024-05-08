
import { signOut } from '@/auth';
import AppBar from '@mui/material/AppBar';
import Tooltip from '@mui/material/Tooltip';
import { AppBarLinks } from './AppBarLinks';
import { PowerIcon } from '@heroicons/react/24/outline';

export const AppBarPage = () => {

	return(
		<>
			<AppBar position="static" component="nav">
				<div className={`flex justify-between items-center pr-5`}>
					<AppBarLinks />
					<form className={`w-10 h-10 bg-red-500 rounded-full p-2`} action={async () => { 'use server'; await signOut(); }}>
						<Tooltip title="Logout">
							<button className='flex justify-center'>
								<PowerIcon className="w-6" />
							</button>
						</Tooltip>
					</form>
				</div>
			</AppBar>
		</>
	)

}