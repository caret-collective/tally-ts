import type { ExpectedOutputMap } from '../../../types.ts';

const expectedOutputMap: ExpectedOutputMap = {
	graphemes: {
		total: 67,
		by: {
			spaces: {
				total: 13,
			},
			letters: {
				total: 48,
			},
			digits: {
				total: 0,
			},
			punctuation: {
				total: 6,
			},
			symbols: {
				total: 0,
			},
		},
		related: {
			paragraphs: {
				total: 2,
			},
			lines: {
				total: 3,
			},
		},
	},
	words: {
		total: 13,
	},
	sentences: {
		total: 3,
	},
};

export default expectedOutputMap;
