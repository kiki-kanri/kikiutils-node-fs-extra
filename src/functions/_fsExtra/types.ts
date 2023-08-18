import fse from 'fs-extra';

type FuncName = 'ensureDir' | 'ensureLink' | 'ensureSymlink' | 'move' | 'outputFile' | 'outputJson' | 'readJson' | 'writeJson';
type SyncName = `${FuncName}Sync`;

export type FseParameters = {
	[K in SyncName]: Parameters<typeof fse[K]>;
}
