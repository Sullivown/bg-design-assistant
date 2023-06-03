import ThematicDescriptionForm from '@/components/ThematicDescriptionForm';

export default function ThematicPage() {
	return (
		<>
			<section className='flex flex-col justify-center content-center bg-white w-full max-w-7xl p-4 sm:p-6 lg:p-8 rounded-lg min-h-full text-center text-2xl font-semibold mb-5'>
				<h2>Generate ideas from a thematic description</h2>
			</section>
			<section className='flex flex-col justify-center content-center bg-white w-full max-w-7xl p-4 sm:p-6 lg:p-8 rounded-lg min-h-full'>
				<ThematicDescriptionForm />
			</section>
		</>
	);
}
