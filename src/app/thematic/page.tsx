'use client';
import { useState } from 'react';
import ThematicDescriptionForm from '@/components/ThematicDescriptionForm';
import GameDetails from '@/components/GameDetails';

export default function ThematicPage() {
	const [output, setOutput] = useState<{
		overview: string;
		title: string;
		rules: string;
		image: string;
	} | null>(null);

	async function handleSubmit(formData: FormData) {
		const dataObject = {
			thematicDescription: formData
				.get('theme-description')
				?.valueOf()
				.toString(),
		};
		const fetchRes = await fetch('http://localhost:3000/api/thematic', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(dataObject),
		});
		const fetchedData = await fetchRes.json();
		setOutput(fetchedData.game);
	}

	return (
		<>
			<section className='flex flex-col justify-center content-center bg-white w-full max-w-7xl p-4 sm:p-6 lg:p-8 rounded-lg min-h-full text-center text-2xl font-semibold mb-5'>
				<h2>Generate ideas from a thematic description</h2>
			</section>
			<section className='flex flex-col justify-center content-center bg-white w-full max-w-7xl p-4 sm:p-6 lg:p-8 rounded-lg min-h-full'>
				{!output ? (
					<ThematicDescriptionForm handleSubmit={handleSubmit} />
				) : (
					<GameDetails game={output} />
				)}
			</section>
		</>
	);
}
