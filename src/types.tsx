import { UserInputEnums } from './enums';

export type FormProps = {
	handleSubmit: (formData: FormData) => Promise<void>;
};

export type GenerateGameTypes = {
	userInputType: UserInputEnums;
	userInput?: string;
};

export type RequestCompletionTypes = {
	prompt: string;
	maxTokens: number;
};

export type GameDetailsProps = {
	game: {
		overview: string;
		title: string;
		rules: string;
		image: string;
	};
};
