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
					<button className='px-4 py-5 w-1/3 rounded-lg bg-pink hover:bg-pink-dark text-white text-xl'>
						Random
					</button>
					<button className='px-4 py-5 w-1/3 rounded-lg bg-pink hover:bg-pink-dark text-white text-xl'>
						Thematic Description
					</button>
					<button className='px-4 py-5 w-1/3 rounded-lg bg-pink hover:bg-pink-dark text-white text-xl'>
						Mechanisms
					</button>
				</div>
			</div>
		</div>
	);
}
