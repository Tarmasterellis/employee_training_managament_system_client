// Next Imports
import Image from 'next/image';
// Custom Components Import
import LoginForm from './ui/Login-form/login-form';

export default function Home() {
	return (
		<main className="flex min-h-screen min-w-screen overflow-hidden flex-col justify-between">
			<Image className={`landingImage`} style={{ objectFit: 'cover', zIndex: -1 }} src="/landing_page.jpg" alt="Landing Page Display" width={1428} height={1440} />
			<div className={`absolute min-[343px]:top-[40%] min-[343px]:left-[10%] max-[600px]:top-[45%] max-[600px]:left-[15%] min-[539px]:top-[40%] min-[539px]:left-[25%] min-[700px]:top-[35%] min-[700px]:left-[30%] min-[1000px]:top-[40%] min-[1000px]:left-[38%] min-[1200px]:top-[30%] min-[1200px]:left-[80%]`}>
				<LoginForm />
			</div>
		</main>
	);
}