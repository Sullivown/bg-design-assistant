export async function POST(request: Request) {
	const req = await request.json();
	console.log(req.userInput);
	return new Response(JSON.stringify({ userInput: req.userInput }), {
		status: 200,
	});
}
