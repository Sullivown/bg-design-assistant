import { ReactNode } from 'react';

type SectionProps = {
	children: ReactNode;
	className?: string;
};

export default function Section({ children, className }: SectionProps) {
	return (
		<section
			className={`flex flex-col justify-center content-center bg-white w-full max-w-7xl p-4 sm:p-6 lg:p-8 rounded-lg min-h-full ${className}`}
		>
			{children}
		</section>
	);
}
