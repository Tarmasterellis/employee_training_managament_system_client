'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useRouter, usePathname } from 'next/navigation';


export const AppBarLinks = () => {

	const router = useRouter();
	const pathname = usePathname();

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const pages = ['Dashboard', 'Employee-Wise Overview', 'Single Employee Overview'];
	const NavigationLink = ['/dashboard', '/dashboard/EmployeeWiseOverview', '/dashboard/SingleEmployeeOverview']

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget)

	const handleCloseNavMenu = (index: number) => {
		router.push(`${ pathname?.split("/dashboard")[0] + NavigationLink[index].toString() }`, { scroll: false });
		setAnchorElNav(null);
	};

	return (
		<div className={`w-[98vw] pl-[1vw]`}>
			<Toolbar disableGutters>
				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit"> <MenuIcon /> </IconButton>
					<Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
						{ pages.map((page, index) => <MenuItem key={index} onClick={ () => handleCloseNavMenu(index) }> <Typography textAlign="center"> { page } </Typography> </MenuItem> ) }
					</Menu>
				</Box>
				<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
				<Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}> LOGO </Typography>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					{ pages.map((page, index) => <Button key={index} onClick={ () => handleCloseNavMenu(index) } sx={{ my: 2, color: 'white', display: 'block' }}> { page } </Button> ) }
				</Box>
			</Toolbar>
		</div>
	)

}