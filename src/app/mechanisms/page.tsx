'use client';
import { useState } from 'react';
import MechanismsForm from '@/components/MechanismsForm';
import GameDetails from '@/components/GameDetails';
import Loading from '@/components/Loading';

export default function ThematicPage() {
	const [output, setOutput] = useState<{
		overview: string;
		title: string;
		rules: string;
		image: string;
	} | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function handleSubmit(formData: FormData) {
		setIsLoading(true);

		const mechanisms = formData.get('mechanisms')?.valueOf().toString();
		const audience = formData.get('audience')?.valueOf().toString();
		const minPlayers = formData.get('min-players')?.valueOf().toString();
		const maxPlayers = formData.get('max-players')?.valueOf().toString();

		const dataObject = {
			userInput: `A game with ${mechanisms} for an audience of ${audience} with a player count of ${minPlayers} to ${maxPlayers} players.`,
		};
		const fetchRes = await fetch('http://localhost:3000/api/mechanisms', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(dataObject),
		});
		const fetchedData = await fetchRes.json();
		setIsLoading(false);
		setOutput(fetchedData.game);
	}

	return (
		<>
			<section className='flex flex-col justify-center content-center bg-white w-full max-w-7xl p-4 sm:p-6 lg:p-8 rounded-lg min-h-full text-center text-2xl font-semibold mb-5'>
				<h2>Generate themes to match your game idea mechanisms</h2>
			</section>
			<section className='flex flex-col justify-center content-center bg-white w-full max-w-7xl p-4 sm:p-6 lg:p-8 rounded-lg min-h-full'>
				{!output ? (
					isLoading ? (
						<Loading />
					) : (
						<MechanismsForm handleSubmit={handleSubmit} />
					)
				) : (
					<GameDetails game={output} />
				)}
			</section>
		</>
	);
}
