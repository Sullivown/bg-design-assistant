import { ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
	className?: string;
};

export default function Button({ children, className }: ButtonProps) {
	return (
		<button
			className={`px-4 py-5 rounded-lg bg-pink hover:bg-pink-dark text-white text-xl ${className}`}
		>
			{children}
		</button>
	);
}
