import type { UmbBlockGridEntryContext } from '../../context/block-grid-entry.context.js';
import { UMB_BLOCK_GRID_INLINE_PROPERTY_DATASET_CONTEXT } from './block-grid-inline-property-dataset.context-token.js';
import type { UmbPropertyDatasetContext } from '@umbraco-cms/backoffice/property';
import { UMB_PROPERTY_DATASET_CONTEXT } from '@umbraco-cms/backoffice/property';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { UmbControllerBase } from '@umbraco-cms/backoffice/class-api';
import { UmbVariantId } from '@umbraco-cms/backoffice/variant';
import type { Observable } from '@umbraco-cms/backoffice/external/rxjs';
import { UmbBooleanState } from '@umbraco-cms/backoffice/observable-api';

export class UmbBlockGridInlinePropertyDatasetContext extends UmbControllerBase implements UmbPropertyDatasetContext {
	#entryContext: UmbBlockGridEntryContext;

	#currentVariantCultureIsReadOnly = new UmbBooleanState(false);
	public currentVariantCultureIsReadOnly = this.#currentVariantCultureIsReadOnly.asObservable();

	// default data:

	getVariantId() {
		return UmbVariantId.CreateInvariant();
	}
	getEntityType() {
		return this.#entryContext.getEntityType();
	}
	getUnique() {
		return this.#entryContext.getUnique();
	}

	getName(): string | undefined {
		return 'TODO: get label';
	}
	readonly name: Observable<string | undefined> = 'TODO: get label observable' as any;

	constructor(host: UmbControllerHost, entryContext: UmbBlockGridEntryContext) {
		// The controller alias, is a very generic name cause we want only one of these for this controller host.
		super(host, UMB_PROPERTY_DATASET_CONTEXT.toString());
		this.#entryContext = entryContext;

		this.provideContext(UMB_BLOCK_GRID_INLINE_PROPERTY_DATASET_CONTEXT, this);
	}

	/**
	 * Gets the value of a property.
	 * @template ReturnType
	 * @param {string} propertyAlias
	 * @returns {*}
	 * @memberof UmbBlockGridInlinePropertyDatasetContext
	 */
	async propertyValueByAlias<ReturnType = unknown>(propertyAlias: string) {
		// TODO: Investigate how I do that with the workspaces..
		return await this.#entryContext.contentPropertyValueByAlias<ReturnType>(propertyAlias);
	}

	/**
	 * Sets the value of a property.
	 * @param {string} propertyAlias
	 * @param {unknown} value
	 * @returns {*}
	 * @memberof UmbBlockGridInlinePropertyDatasetContext
	 */
	async setPropertyValue(propertyAlias: string, value: unknown) {
		// TODO: Investigate how I do that with the workspaces..
		return this.#entryContext.setContentPropertyValue(propertyAlias, value);
	}

	/**
	 * Gets the read-only state of the current variant culture.
	 * @returns {*}  {boolean}
	 * @memberof UmbBlockGridInlinePropertyDatasetContext
	 */
	getCurrentVariantCultureIsReadOnly(): boolean {
		return this.#currentVariantCultureIsReadOnly.getValue();
	}
}
