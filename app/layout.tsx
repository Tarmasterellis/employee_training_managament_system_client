import "@/app/ui/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: { template: '%s | ETMS', default: 'ETMS Dashboard' }, description: "ETMS helps company manage the trainings that employees has taken over the year." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
