import { defineStore } from 'pinia';

interface ObjectList {
	[key: string]: string[];
}

export const usePermissStore = defineStore('permiss', {
	state: () => {
		const keys = localStorage.getItem('ms_keys');
		return {
			key: keys ? JSON.parse(keys) : <string[]>[],
			defaultList: <ObjectList>{
				admin: ['1',
					'2','21','22','23','24',
					'3','31','32',
					'4','41','42','43',
					'5',
					'6','61','62','63','631','632',
					'7',
					'8',
					'98','99',
				],
				user: ['1',
				'2','21','22','23','24',
				],
				sap: ['1',
					'2','24',
				]
			}
		};
	},
	actions: {
		handleSet(val: string[]) {
			this.key = val;
		}
	}
});
