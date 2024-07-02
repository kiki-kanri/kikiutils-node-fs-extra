import type { Abortable } from 'node:events';
import type { BigIntStats, BigIntStatsFs, BufferEncodingOption, Dirent, MakeDirectoryOptions, Mode, ObjectEncodingOptions, OpenMode, PathLike, StatsFs, StatFsOptions, StatOptions, Stats } from 'node:fs';
import fsp from 'node:fs/promises';
import type { FileHandle } from 'node:fs/promises';

import { tB, tD } from '../wrappers';

/**
 * @see {@link fsp.access}
 */
export const access = tB(fsp.access);

/**
 * @see {@link fsp.copyFile}
 */
export const copyFile = tB(fsp.copyFile);

/**
 * @see {@link fsp.open}
 */
export const open = tD(fsp.open);

/**
 * @see {@link fsp.rename}
 */
export const rename = tB(fsp.rename);

/**
 * @see {@link fsp.truncate}
 */
export const truncate = tB(fsp.truncate);

/**
 * @see {@link fsp.rmdir}
 */
export const rmdir = tB(fsp.rmdir);

/**
 * @see {@link fsp.rm}
 */
export const rm = tB(fsp.rm);

/**
 * @see {@link fsp.symlink}
 */
export const symlink = tB(fsp.symlink);

/**
 * @see {@link fsp.link}
 */
export const link = tB(fsp.link);

/**
 * @see {@link fsp.unlink}
 */
export const unlink = tB(fsp.unlink);

/**
 * @see {@link fsp.chmod}
 */
export const chmod = tB(fsp.chmod);

/**
 * @see {@link fsp.lchmod}
 */
export const lchmod = tB(fsp.lchmod);

/**
 * @see {@link fsp.lchown}
 */
export const lchown = tB(fsp.lchown);

/**
 * @see {@link fsp.lutimes}
 */
export const lutimes = tB(fsp.lutimes);

/**
 * @see {@link fsp.chown}
 */
export const chown = tB(fsp.chown);

/**
 * @see {@link fsp.utimes}
 */
export const utimes = tB(fsp.utimes);

/**
 * @see {@link fsp.writeFile}
 */
export const writeFile = tB(fsp.writeFile);

/**
 * @see {@link fsp.appendFile}
 */
export const appendFile = tB(fsp.appendFile);

/**
 * @see {@link fsp.opendir}
 */
export const opendir = tD(fsp.opendir);

/**
 * @see {@link fsp.cp}
 */
export const cp = tB(fsp.cp);

// Overload functions

/**
 * @see {@link fsp.mkdir}
 */
export async function mkdir(path: PathLike, options: MakeDirectoryOptions & { recursive: true }): Promise<string | undefined>;
export async function mkdir(path: PathLike, options?: Mode | (MakeDirectoryOptions & { recursive?: false }) | null): Promise<boolean>;
export async function mkdir(path: PathLike, options?: any) {
	try {
		const result = await fsp.mkdir(path, options);
		if (options?.recursive === true) return result;
		return true;
	} catch (error) {
		if (options?.recursive === true) return undefined;
		return false;
	}
}

/**
 * @see {@link fsp.readdir}
 */
export async function readdir(path: PathLike, options?: (ObjectEncodingOptions & { withFileTypes?: false; recursive?: boolean }) | BufferEncoding | null): Promise<string[] | undefined>;
// @ts-ignore
export async function readdir(path: PathLike, options: { encoding: 'buffer'; withFileTypes?: false; recursive?: boolean } | 'buffer'): Promise<Buffer[] | undefined>;
export async function readdir(path: PathLike, options?: (ObjectEncodingOptions & { withFileTypes?: false; recursive?: boolean }) | BufferEncoding | null): Promise<string[] | Buffer[] | undefined>;
export async function readdir(path: PathLike, options: ObjectEncodingOptions & { withFileTypes: true; recursive?: boolean }): Promise<Dirent[] | undefined>;
export async function readdir(path: PathLike, options?: any) {
	try {
		return await fsp.readdir(path, options);
	} catch (error) {}
}

/**
 * @see {@link fsp.readlink}
 */
export async function readlink(path: PathLike, options?: ObjectEncodingOptions | BufferEncoding | null): Promise<string | undefined>;
// @ts-ignore
export async function readlink(path: PathLike, options: BufferEncodingOption): Promise<Buffer | undefined>;
export async function readlink(path: PathLike, options?: ObjectEncodingOptions | string | null): Promise<string | Buffer | undefined>;
export async function readlink(path: PathLike, options?: any) {
	try {
		return await fsp.readlink(path, options);
	} catch (error) {}
}

/**
 * @see {@link fsp.lstat}
 */
export async function lstat(path: PathLike, opts?: StatOptions & { bigint?: false }): Promise<Stats | undefined>;
// @ts-ignore
export async function lstat(path: PathLike, opts: StatOptions & { bigint: true }): Promise<BigIntStats | undefined>;
export async function lstat(path: PathLike, opts?: StatOptions): Promise<Stats | BigIntStats | undefined>;
export async function lstat(path: PathLike, opts?: any) {
	try {
		return await fsp.lstat(path, opts);
	} catch (error) {}
}

/**
 * @see {@link fsp.stat}
 */
export async function stat(path: PathLike, opts?: StatOptions & { bigint?: false }): Promise<Stats | undefined>;
// @ts-ignore
export async function stat(path: PathLike, opts: StatOptions & { bigint: true }): Promise<BigIntStats | undefined>;
export async function stat(path: PathLike, opts?: StatOptions): Promise<Stats | BigIntStats | undefined>;
export async function stat(path: PathLike, opts?: any) {
	try {
		return await fsp.stat(path, opts);
	} catch (error) {}
}

/**
 * @see {@link fsp.statfs}
 */
export async function statfs(path: PathLike, opts?: StatFsOptions & { bigint?: false }): Promise<StatsFs | undefined>;
// @ts-ignore
export async function statfs(path: PathLike, opts: StatFsOptions & { bigint: true }): Promise<BigIntStatsFs | undefined>;
export async function statfs(path: PathLike, opts?: StatFsOptions): Promise<StatsFs | BigIntStatsFs | undefined>;
export async function statfs(path: PathLike, opts?: any) {
	try {
		return await fsp.statfs(path, opts);
	} catch (error) {}
}

/**
 * @see {@link fsp.realpath}
 */
export async function realpath(path: PathLike, options?: ObjectEncodingOptions | BufferEncoding | null): Promise<string | undefined>;
// @ts-ignore
export async function realpath(path: PathLike, options: BufferEncodingOption): Promise<Buffer | undefined>;
export async function realpath(path: PathLike, options?: ObjectEncodingOptions | BufferEncoding | null): Promise<string | Buffer | undefined>;
export async function realpath(path: PathLike, options?: any) {
	try {
		return await fsp.realpath(path, options);
	} catch (error) {}
}

/**
 * @see {@link fsp.mkdtemp}
 */
export async function mkdtemp(prefix: string, options?: ObjectEncodingOptions | BufferEncoding | null): Promise<string | undefined>;
// @ts-ignore
export async function mkdtemp(prefix: string, options: BufferEncodingOption): Promise<Buffer | undefined>;
export async function mkdtemp(prefix: string, options?: ObjectEncodingOptions | BufferEncoding | null): Promise<string | Buffer | undefined>;
export async function mkdtemp(prefix: string, options?: any) {
	try {
		return await fsp.mkdtemp(prefix, options);
	} catch (error) {}
}

/**
 * @see {@link fsp.readFile}
 */
// @ts-ignore
export async function readFile(path: PathLike | FileHandle, options?: ({ encoding?: null; flag?: OpenMode } & Abortable) | null): Promise<Buffer | undefined>;
export async function readFile(path: PathLike | FileHandle, options: ({ encoding: BufferEncoding; flag?: OpenMode } & Abortable) | BufferEncoding): Promise<string | undefined>;
export async function readFile(path: PathLike | FileHandle, options?: (ObjectEncodingOptions & Abortable & { flag?: OpenMode }) | BufferEncoding | null): Promise<string | Buffer | undefined>;
export async function readFile(path: PathLike, options?: any) {
	try {
		return await fsp.readFile(path, options);
	} catch (error) {}
}
