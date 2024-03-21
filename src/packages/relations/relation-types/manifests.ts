import { manifests as repositoryManifests } from './repository/detail/manifests.js';
import { manifests as menuItemManifests } from './menu-item/manifests.js';
import { manifests as workspaceManifests } from './workspace/manifests.js';

export const manifests = [...repositoryManifests, ...menuItemManifests, ...workspaceManifests];
