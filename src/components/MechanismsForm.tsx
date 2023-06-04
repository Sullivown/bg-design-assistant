import { FormProps } from '@/types';

export default function MechanismsForm({ handleSubmit }: FormProps) {
	return (
		<form action={handleSubmit}>
			<div className='space-y-12'>
				<div className='mb-5 space-y-8'>
					<h2 className='text-2xl text-center font-semibold leading-7 text-gray-900'>
						Instructions
					</h2>
					<p className='mt-1 leading-6 text-center'>
						Fill out the form with details about the mechanisms you
						want in your game and I will suggest an idea with a
						theme to match!
					</p>
					<p className='mt-1 text-sm font-semibold leading-6 text-center'>
						Please be patient as I have a lot to think about!
						Requests can take around 30 - 40 seconds!
					</p>
					<p className='mt-1 text-sm leading-6 text-center'>
						Please note that this information will be shared with
						OpenAI, so please do not include any personal or
						sensitive information.
					</p>

					<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
						<div className='col-span-full'>
							<label
								htmlFor='mechanisms'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Game mechanisms
							</label>
							<div className='mt-2'>
								<textarea
									id='mechanisms'
									name='mechanisms'
									rows={3}
									placeholder='e.g. trick-taking, worker placement, card drafting'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div className='sm:col-span-2'>
							<label
								htmlFor='audience'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Target audience
							</label>
							<div className='mt-2'>
								<div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
									<input
										type='text'
										name='audience'
										id='audience'
										className='lock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										placeholder='e.g. adults, under 5s, teenagers'
									/>
								</div>
							</div>
						</div>

						<div className='sm:col-span-1 sm:col-start-1'>
							<label
								htmlFor='min-players'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Min number of players
							</label>
							<div className='mt-2'>
								<input
									type='number'
									name='min-players'
									id='min-players'
									min='0'
									autoComplete='address-level2'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div className='sm:col-span-1'>
							<label
								htmlFor='max-players'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Max number of players
							</label>
							<div className='mt-2'>
								<input
									type='number'
									name='max-players'
									id='max-players'
									min='0'
									autoComplete='address-level1'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='space-y-8'>
				<div className='mt-6 flex items-center justify-end gap-x-6'>
					<button className='px-4 py-5 rounded-lg bg-pink hover:bg-pink-dark text-white text-xl'>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}
