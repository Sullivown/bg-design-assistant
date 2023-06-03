import Button from '@/elements/Button';

export default function Home() {
	return (
		<div className='flex flex-col justify-center content-center bg-white w-full max-w-7xl p-4 sm:p-6 lg:p-8 rounded-lg'>
			<h2 className='text-center'>
				Welcome to Board Game Design Assistant!
			</h2>
			<p>Some intro text</p>
			<div>
				<h3>Select your method:</h3>
				<div className='flex flex-row justify-center gap-x-10'>
					<Button className='w-1/3'>Random</Button>
					<Button className='w-1/3'>Thematic Description</Button>
					<Button className='w-1/3 '>Mechanisms</Button>
				</div>
			</div>
		</div>
	);
}
