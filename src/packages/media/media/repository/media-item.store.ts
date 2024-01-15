import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';
import { UmbControllerHostElement } from '@umbraco-cms/backoffice/controller-api';
import { UmbItemStore, UmbStoreBase } from '@umbraco-cms/backoffice/store';
import { UmbArrayState } from '@umbraco-cms/backoffice/observable-api';
import { MediaItemResponseModel } from '@umbraco-cms/backoffice/backend-api';

/**
 * @export
 * @class UmbMediaItemStore
 * @extends {UmbStoreBase}
 * @description - Data Store for Media items
 */

export class UmbMediaItemStore extends UmbStoreBase<MediaItemResponseModel> {
	/**
	 * Creates an instance of UmbMediaItemStore.
	 * @param {UmbControllerHostElement} host
	 * @memberof UmbMediaItemStore
	 */
	constructor(host: UmbControllerHostElement) {
		super(host, UMB_MEDIA_ITEM_STORE_CONTEXT.toString(), new UmbArrayState<MediaItemResponseModel>([], (x) => x.id));
	}

	items(ids: Array<string>) {
		return this._data.asObservablePart((items) => items.filter((item) => ids.includes(item.id ?? '')));
	}
}

export const UMB_MEDIA_ITEM_STORE_CONTEXT = new UmbContextToken<UmbMediaItemStore>('UmbMediaItemStore');
