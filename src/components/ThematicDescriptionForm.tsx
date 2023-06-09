import { FormProps } from '@/types';

export default function ThematicDescriptionForm({ handleSubmit }: FormProps) {
	return (
		<form action={handleSubmit}>
			<div className='space-y-8'>
				<h2 className='text-2xl text-center font-semibold leading-7 text-gray-900'>
					Instructions
				</h2>
				<p className='mt-1 leading-6 text-center'>
					Input your idea for a board game theme and let me help you
					suggest an idea and mechanisms to match! Give as much or as
					little detail as you want; a few sentences should be enough
					for me to go on, but feel free to experiment.
				</p>
				<p className='mt-1 text-sm font-semibold leading-6 text-center'>
					Please be patient as I have a lot to think about! Requests
					can take around 30 - 40 seconds!
				</p>
				<p className='mt-1 text-sm leading-6 text-center'>
					Please note that this information will be shared with
					OpenAI, so please do not include any personal or sensitive
					information.
				</p>
				<div className='col-span-full'>
					<label
						htmlFor='theme-description'
						className='block font-medium leading-6 text-gray-900'
					>
						Describe your thematic idea:
					</label>
					<div className='mt-2'>
						<textarea
							id='theme-description'
							name='theme-description'
							rows={5}
							className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-pink placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-dark sm:text-sm sm:leading-6'
							defaultValue={''}
						/>
					</div>
				</div>
				<div className='flex flex-row justify-end'>
					<button className='px-4 py-5 rounded-lg bg-pink hover:bg-pink-dark text-white text-xl'>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}
