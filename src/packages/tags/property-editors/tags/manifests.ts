import { manifest as storageType } from './config/storage-type/manifests.js';
import type { ManifestPropertyEditorUI } from '@umbraco-cms/backoffice/extension-registry';

const manifest: ManifestPropertyEditorUI = {
	type: 'propertyEditorUI',
	alias: 'Umb.PropertyEditorUi.Tags',
	name: 'Tags Property Editor UI',
	loader: () => import('./property-editor-ui-tags.element.js'),
	meta: {
		label: 'Tags',
		propertyEditorModel: 'Umbraco.Tags',
		icon: 'umb:tags',
		group: 'common',
	},
};

const config: Array<ManifestPropertyEditorUI> = [storageType];

export const manifests = [manifest, ...config];
