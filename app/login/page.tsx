// Custom Form Import
import LoginForm from '@/app/ui/Login-form/login-form';
 
export default function LoginPage() {
	return (
		<main className="flex items-center justify-center">
			<div className={`absolute top-0`}>
				<LoginForm />
			</div>
		</main>
	);
}