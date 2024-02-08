import type { UmbFileSystemTreeItemModel } from '../types.js';
import { UmbFileSystemTreeItemContext } from './file-system-tree-item.context.js';
import { css, html, nothing, customElement, property } from '@umbraco-cms/backoffice/external/lit';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import { UmbLitElement } from '@umbraco-cms/internal/lit-element';
import type {
	UmbBackofficeManifestKind,
	UmbTreeItemElement} from '@umbraco-cms/backoffice/extension-registry';
import {
	umbExtensionsRegistry,
} from '@umbraco-cms/backoffice/extension-registry';

// TODO: Move to separate file:
const manifest: UmbBackofficeManifestKind = {
	type: 'kind',
	alias: 'Umb.Kind.FileSystemTreeItem',
	matchKind: 'fileSystem',
	matchType: 'treeItem',
	manifest: {
		type: 'treeItem',
		elementName: 'umb-file-system-tree-item',
	},
};
umbExtensionsRegistry.register(manifest);
/**
 * Tree item element for file system tree items. Uses the path as the unique identifier.
 *
 * @export
 * @class UmbFileSystemTreeItemElement
 * @extends {UmbLitElement}
 * @implements {UmbTreeItemExtensionElement}
 */
@customElement('umb-file-system-tree-item')
export class UmbFileSystemTreeItemElement extends UmbLitElement implements UmbTreeItemElement {
	private _item?: UmbFileSystemTreeItemModel;
	@property({ type: Object, attribute: false })
	public get item() {
		return this._item;
	}
	public set item(value: UmbFileSystemTreeItemModel | undefined) {
		this._item = value;
		this.#context.setTreeItem(value);
	}

	#context = new UmbFileSystemTreeItemContext(this);

	render() {
		if (!this.item) return nothing;
		return html`<umb-tree-item-base></umb-tree-item-base>`;
	}

	static styles = [UmbTextStyles, css``];
}

declare global {
	interface HTMLElementTagNameMap {
		'umb-file-system-tree-item': UmbFileSystemTreeItemElement;
	}
}
