import { generateOverview } from '@/lib/apiCalls';
import { UserInputEnums } from '@/enums';

export async function POST(request: Request) {
	const req = await request.json();

	console.log(req.thematicDescription);

	const overview = await generateOverview({
		userInputType: UserInputEnums.THEMATIC,
		userInput: req.thematicDescription,
	});

	return new Response(JSON.stringify({ overview }), {
		status: 200,
	});
}
