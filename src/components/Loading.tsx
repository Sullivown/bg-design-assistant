import Image from 'next/image';

export default function Loading() {
	return (
		<div className='flex flex-row justify-center items-center my-20'>
			<Image
				className=''
				src='/images/loading.svg'
				width='100'
				height='100'
				alt='Loading...'
			/>
		</div>
	);
}
