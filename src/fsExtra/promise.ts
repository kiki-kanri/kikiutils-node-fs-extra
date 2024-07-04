import fse from 'fs-extra';

import { pTB, pTD } from '../wrappers';

export { pathExists } from 'fs-extra';

type FunctionName = 'ensureDir' | 'ensureLink' | 'ensureSymlink' | 'move' | 'outputFile' | 'outputJson' | 'readJson' | 'writeJson';
type FseParameters = { [K in `${FunctionName}Sync`]: Parameters<(typeof fse)[K]> };

/**
 * @see {@link fse.copy}
 */
export const copy = pTB(async (...args: [src: string, dest: string, options?: fse.CopyOptions]) => await fse.copy(...args));

/**
 * @see {@link fse.move}
 */
export const move = pTB(async (...args: FseParameters['moveSync']) => await fse.move(...args));

/**
 * @see {@link fse.ensureFile}
 */
export const ensureFile = pTB(async (file: string) => await fse.ensureFile(file));

/**
 * @see {@link fse.createFile}
 */
export const createFile = ensureFile;

/**
 * @see {@link fse.ensureLink}
 */
export const ensureLink = pTB(async (...args: FseParameters['ensureLinkSync']) => await fse.ensureLink(...args));

/**
 * @see {@link fse.createLink}
 */
export const createLink = ensureLink;

/**
 * @see {@link fse.ensureSymlink}
 */
export const ensureSymlink = pTB(async (...args: FseParameters['ensureSymlinkSync']) => await fse.ensureSymlink(...args));

/**
 * @see {@link fse.createSymlink}
 */
export const createSymlink = ensureSymlink;

/**
 * @see {@link fse.ensureDir}
 */
export const ensureDir = pTB(async (...args: FseParameters['ensureDirSync']) => await fse.ensureDir(...args));

/**
 * @see {@link fse.mkdirp}
 */
export const mkdirp = ensureDir;

/**
 * @see {@link fse.mkdirs}
 */
export const mkdirs = ensureDir;

/**
 * @see {@link fse.outputFile}
 */
export const outputFile = pTB(async (...args: FseParameters['outputFileSync']) => await fse.outputFile(...args));

/**
 * @see {@link fse.readJson}
 */
export const readJson = pTD(async <T>(...args: FseParameters['readJsonSync']) => (await fse.readJson(...args)) as T);

/**
 * @see {@link fse.readJSON}
 */
export const readJSON = readJson;

/**
 * @see {@link fse.writeJson}
 */
export const writeJson = pTB(async (...args: FseParameters['writeJsonSync']) => await fse.writeJson(...args));

/**
 * @see {@link fse.writeJSON}
 */
export const writeJSON = writeJson;

/**
 * @see {@link fse.outputJson}
 */
export const outputJson = pTB(async (...args: FseParameters['outputJsonSync']) => await fse.outputJson(...args));

/**
 * @see {@link fse.outputJSON}
 */
export const outputJSON = outputJson;

/**
 * @see {@link fse.remove}
 */
export const remove = pTB(async (dir: string) => await fse.remove(dir));

/**
 * @see {@link fse.emptyDir}
 */
export const emptyDir = pTB(async (path: string) => await fse.emptyDir(path));

/**
 * @see {@link fse.emptydir}
 */
export const emptydir = emptyDir;