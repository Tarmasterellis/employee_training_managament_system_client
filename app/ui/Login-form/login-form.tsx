'use client';

import * as React from 'react';
import { Button } from '@/app/ui/button';
import { lusitana } from '@/app/ui/fonts';
import { authenticate } from '@/app/lib/actions/action';
import { useFormState, useFormStatus } from 'react-dom';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { Alert, Card, CardActions, CardContent, Divider, Slide, Snackbar, Typography } from '@mui/material';

export default function LoginForm() {

	const { pending } = useFormStatus();
	const [open, setOpen] = React.useState(false);
	const [errorMessage, dispatch] = useFormState(authenticate, undefined);

	const handleClick = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<form action={dispatch} className="space-y-3">
			<Card elevation={5}>
				<Typography variant='h6' className={`${lusitana.className} mb-3 pt-3 text-2xl flex justify-center`}>Please log in to continue</Typography>
				<Divider />
				<CardContent>
					<div className="w-full">
						<div>
							<label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email"> Email </label>
							<div className="relative">
								<input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" id="email" type="email" name="email" placeholder="Enter your email address" required />
								<AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
							</div>
						</div>
						<div className="mt-4">
							<label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password"> Password </label>
							<div className="relative">
								<input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" id="password" type="password" name="password" placeholder="Enter password" required minLength={6} />
								<KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
							</div>
						</div>
					</div>
				</CardContent>
				<CardActions className='pl-5 pr-5 pb-5'>
					<Button className="mt-4 w-full" aria-disabled={pending} onClick={ handleClick }>
						Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
					</Button>
				</CardActions>
				{
					errorMessage && (
						<div>
							<Snackbar anchorOrigin = {{ vertical: "bottom", horizontal: "right" }} autoHideDuration={2000} TransitionComponent = { Slide } open = { open } onClose={ handleClose }>
								<Alert severity="error" variant="filled" sx={{ width: '100%' }} onClose={ handleClose }> { errorMessage } </Alert>
							</Snackbar>
						</div>
					)
				}
			</Card>
		</form>
	);
}