// Next Imports
import Image from 'next/image';
// Custom Components Import
import LoginForm from './ui/Login-form/login-form';

export default function Home() {
	return (
		<main className="flex min-h-screen min-w-screen overflow-hidden flex-col justify-between">
			<Image className={`landingImage`} style={{ objectFit: 'cover', zIndex: -1 }} src="/landing_page.jpg" alt="Landing Page Display" width={1428} height={1440} />
			<div className={`absolute top-[30%] left-[80%]`}>
				<LoginForm />
			</div>
		</main>
	);
}