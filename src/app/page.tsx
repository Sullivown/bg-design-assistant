import Link from 'next/link';

export default function HomePage() {
	return (
		<section className='flex flex-col justify-center content-center bg-white w-full max-w-7xl p-4 sm:p-6 lg:p-8 rounded-lg min-h-full space-y-10'>
			<h2 className='text-center font-semibold text-2xl'>
				Welcome to Board Game Design Assistant!
			</h2>
			<div className='text-center'>
				<p>Hello!</p>
				<p>
					Welcome to the Board Game Design Assistant! an OpenAI
					powered tool for assisting with the board game design
					process.
				</p>
			</div>

			<div>
				<h3 className='text-center'>Select your method:</h3>
				<div className='flex flex-row flex-wrap sm:flex-nowrap justify-center gap-x-10 gap-y-5 my-5'>
					<Link href='/random' className='w-full sm:w-1/3'>
						<button className='px-4 py-5 rounded-lg bg-pink hover:bg-pink-dark text-white text-xl w-full'>
							Random
						</button>
					</Link>
					<Link href='/thematic' className='w-full sm:w-1/3'>
						<button className='px-4 py-5 rounded-lg bg-pink hover:bg-pink-dark text-white text-xl w-full'>
							Thematic Description
						</button>
					</Link>
					<Link href='/mechanisms' className='w-full sm:w-1/3'>
						<button className='px-4 py-5 rounded-lg bg-pink hover:bg-pink-dark text-white text-xl w-full'>
							Mechanisms
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
