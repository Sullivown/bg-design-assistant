import { generateGame } from '@/lib/apiCalls';
import { UserInputEnums } from '@/enums';

export const runtime = 'edge';

export async function POST(request: Request) {
	const req = await request.json();

	const game = await generateGame({
		userInputType: UserInputEnums.MECHANISMS,
		userInput: req.userInput,
	});

	return new Response(JSON.stringify({ game }), {
		status: 200,
	});
}
