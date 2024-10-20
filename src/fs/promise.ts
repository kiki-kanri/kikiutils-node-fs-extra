import type { Abortable } from 'events';
import fs from 'fs';
import type { PathLike } from 'fs';
import fsp from 'fs/promises';

import { pTB, pTD, toWrapFunctionIsUndefinedError } from '../wrappers';

/**
 * @see {@link fsp.access}
 */
export const access = pTB(fsp.access);

/**
 * @see {@link fsp.copyFile}
 */
export const copyFile = pTB(fsp.copyFile);

/**
 * @see {@link fsp.open}
 */
export const open = pTD(fsp.open);

/**
 * @see {@link fsp.rename}
 */
export const rename = pTB(fsp.rename);

/**
 * @see {@link fsp.truncate}
 */
export const truncate = pTB(fsp.truncate);

/**
 * @see {@link fsp.rmdir}
 */
export const rmdir = pTB(fsp.rmdir);

/**
 * @see {@link fsp.rm}
 */
export const rm = pTB(fsp.rm);

/**
 * @see {@link fsp.symlink}
 */
export const symlink = pTB(fsp.symlink);

/**
 * @see {@link fsp.link}
 */
export const link = pTB(fsp.link);

/**
 * @see {@link fsp.unlink}
 */
export const unlink = pTB(fsp.unlink);

/**
 * @see {@link fsp.chmod}
 */
export const chmod = pTB(fsp.chmod);

/**
 * @see {@link fsp.lchmod}
 */
export const lchmod = pTB(fsp.lchmod);

/**
 * @see {@link fsp.lchown}
 */
export const lchown = pTB(fsp.lchown);

/**
 * @see {@link fsp.lutimes}
 */
export const lutimes = pTB(fsp.lutimes);

/**
 * @see {@link fsp.chown}
 */
export const chown = pTB(fsp.chown);

/**
 * @see {@link fsp.utimes}
 */
export const utimes = pTB(fsp.utimes);

/**
 * @see {@link fsp.writeFile}
 */
export const writeFile = pTB(fsp.writeFile);

/**
 * @see {@link fsp.appendFile}
 */
export const appendFile = pTB(fsp.appendFile);

/**
 * @see {@link fsp.opendir}
 */
export const opendir = pTD(fsp.opendir);

/**
 * @see {@link fsp.cp}
 */
export const cp = pTB(fsp.cp);

/**
 * @see {@link fs.ftruncate.__promisify__}
 */
export const ftruncate = pTB(fs.ftruncate?.__promisify__);

/**
 * @see {@link fs.fchown.__promisify__}
 */
export const fchown = pTB(fs.fchown?.__promisify__);

/**
 * @see {@link fs.fchmod.__promisify__}
 */
export const fchmod = pTB(fs.fchmod?.__promisify__);

/**
 * @see {@link fs.close.__promisify__}
 */
export const close = pTB(fs.close?.__promisify__);

/**
 * @see {@link fs.futimes.__promisify__}
 */
export const futimes = pTB(fs.futimes?.__promisify__);

/**
 * @see {@link fs.fsync.__promisify__}
 */
export const fsync = pTB(fs.fsync?.__promisify__);

/**
 * @see {@link fs.fdatasync.__promisify__}
 */
export const fdatasync = pTB(fs.fdatasync?.__promisify__);

/**
 * @see {@link fs.writev.__promisify__}
 */
export const writev = pTD(fs.writev?.__promisify__);

/**
 * @see {@link fs.readv.__promisify__}
 */
export const readv = pTD(fs.readv?.__promisify__);

// Overload functions

/**
 * @see {@link fsp.mkdir}
 */
export async function mkdir(path: PathLike, options: fs.MakeDirectoryOptions & { recursive: true }): Promise<string | undefined>;
export async function mkdir(path: PathLike, options?: fs.Mode | (fs.MakeDirectoryOptions & { recursive?: false }) | null): Promise<boolean>;
export async function mkdir(path: PathLike, options?: fs.Mode | fs.MakeDirectoryOptions | null): Promise<string | undefined>;
export async function mkdir(path: PathLike, options?: any) {
	if (!fsp.mkdir) throw toWrapFunctionIsUndefinedError;
	try {
		const result = await fsp.mkdir(path, options);
		if (options?.recursive === true) return result;
		return true;
	} catch (error) {
		if (options?.recursive === true) return;
		return false;
	}
}

/**
 * @see {@link fsp.readdir}
 */
export async function readdir(path: PathLike, options?: (fs.ObjectEncodingOptions & { withFileTypes?: false; recursive?: boolean }) | BufferEncoding | null): Promise<string[] | undefined>;
// @ts-expect-error
export async function readdir(path: PathLike, options: { encoding: 'buffer'; withFileTypes?: false; recursive?: boolean } | 'buffer'): Promise<Buffer[] | undefined>;
export async function readdir(path: PathLike, options?: (fs.ObjectEncodingOptions & { withFileTypes?: false; recursive?: boolean }) | BufferEncoding | null): Promise<string[] | Buffer[] | undefined>;
export async function readdir(path: PathLike, options: fs.ObjectEncodingOptions & { withFileTypes: true; recursive?: boolean }): Promise<fs.Dirent[] | undefined>;
export async function readdir(path: PathLike, options?: any) {
	if (!fsp.readdir) throw toWrapFunctionIsUndefinedError;
	try {
		return await fsp.readdir(path, options);
	} catch (error) {}
}

/**
 * @see {@link fsp.readlink}
 */
export async function readlink(path: PathLike, options?: fs.ObjectEncodingOptions | BufferEncoding | null): Promise<string | undefined>;
// @ts-expect-error
export async function readlink(path: PathLike, options: fs.BufferEncodingOption): Promise<Buffer | undefined>;
export async function readlink(path: PathLike, options?: fs.ObjectEncodingOptions | string | null): Promise<string | Buffer | undefined>;
export async function readlink(path: PathLike, options?: any) {
	if (!readlink) throw toWrapFunctionIsUndefinedError;
	try {
		return await fsp.readlink(path, options);
	} catch (error) {}
}

/**
 * @see {@link fsp.lstat}
 */
export async function lstat(path: PathLike, opts?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats | undefined>;
// @ts-expect-error
export async function lstat(path: PathLike, opts: fs.StatOptions & { bigint: true }): Promise<fs.BigIntStats | undefined>;
export async function lstat(path: PathLike, opts?: fs.StatOptions): Promise<fs.Stats | fs.BigIntStats | undefined>;
export async function lstat(path: PathLike, opts?: any) {
	if (!fsp.lstat) throw toWrapFunctionIsUndefinedError;
	try {
		return await fsp.lstat(path, opts);
	} catch (error) {}
}

/**
 * @see {@link fsp.stat}
 */
export async function stat(path: PathLike, opts?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats | undefined>;
// @ts-expect-error
export async function stat(path: PathLike, opts: fs.StatOptions & { bigint: true }): Promise<fs.BigIntStats | undefined>;
export async function stat(path: PathLike, opts?: fs.StatOptions): Promise<fs.Stats | fs.BigIntStats | undefined>;
export async function stat(path: PathLike, opts?: any) {
	if (!fsp.stat) throw toWrapFunctionIsUndefinedError;
	try {
		return await fsp.stat(path, opts);
	} catch (error) {}
}

/**
 * @see {@link fsp.statfs}
 */
export async function statfs(path: PathLike, opts?: fs.StatFsOptions & { bigint?: false }): Promise<fs.StatsFs | undefined>;
// @ts-expect-error
export async function statfs(path: PathLike, opts: fs.StatFsOptions & { bigint: true }): Promise<fs.BigIntStatsFs | undefined>;
export async function statfs(path: PathLike, opts?: fs.StatFsOptions): Promise<fs.StatsFs | fs.BigIntStatsFs | undefined>;
export async function statfs(path: PathLike, opts?: any) {
	if (!fsp.statfs) throw toWrapFunctionIsUndefinedError;
	try {
		return await fsp.statfs(path, opts);
	} catch (error) {}
}

/**
 * @see {@link fsp.realpath}
 */
export async function realpath(path: PathLike, options?: fs.ObjectEncodingOptions | BufferEncoding | null): Promise<string | undefined>;
// @ts-expect-error
export async function realpath(path: PathLike, options: fs.BufferEncodingOption): Promise<Buffer | undefined>;
export async function realpath(path: PathLike, options?: fs.ObjectEncodingOptions | BufferEncoding | null): Promise<string | Buffer | undefined>;
export async function realpath(path: PathLike, options?: any) {
	if (!fsp.realpath) throw toWrapFunctionIsUndefinedError;
	try {
		return await fsp.realpath(path, options);
	} catch (error) {}
}

/**
 * @see {@link fsp.mkdtemp}
 */
export async function mkdtemp(prefix: string, options?: fs.ObjectEncodingOptions | BufferEncoding | null): Promise<string | undefined>;
// @ts-expect-error
export async function mkdtemp(prefix: string, options: fs.BufferEncodingOption): Promise<Buffer | undefined>;
export async function mkdtemp(prefix: string, options?: fs.ObjectEncodingOptions | BufferEncoding | null): Promise<string | Buffer | undefined>;
export async function mkdtemp(prefix: string, options?: any) {
	if (!fsp.mkdtemp) throw toWrapFunctionIsUndefinedError;
	try {
		return await fsp.mkdtemp(prefix, options);
	} catch (error) {}
}

/**
 * @see {@link fsp.readFile}
 */
export async function readFile(path: PathLike | fsp.FileHandle, options?: ({ encoding?: null; flag?: fs.OpenMode } & Abortable) | null): Promise<Buffer | undefined>;
// @ts-expect-error
export async function readFile(path: PathLike | fsp.FileHandle, options: ({ encoding: BufferEncoding; flag?: fs.OpenMode } & Abortable) | BufferEncoding): Promise<string | undefined>;
export async function readFile(path: PathLike | fsp.FileHandle, options?: (fs.ObjectEncodingOptions & Abortable & { flag?: fs.OpenMode }) | BufferEncoding | null): Promise<string | Buffer | undefined>;
export async function readFile(path: PathLike | fsp.FileHandle, options?: any) {
	if (!fsp.readFile) throw toWrapFunctionIsUndefinedError;
	try {
		return await fsp.readFile(path, options);
	} catch (error) {}
}

/**
 * @see {@link fs.fstat.__promisify__}
 */
export async function fstat(fd: number, options?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats | undefined>;
// @ts-expect-error
export async function fstat(fd: number, options: fs.StatOptions & { bigint: true }): Promise<fs.BigIntStats | undefined>;
export async function fstat(fd: number, options?: fs.StatOptions): Promise<fs.Stats | fs.BigIntStats | undefined>;
export async function fstat(fd: number, options?: any) {
	if (!fs.fstat?.__promisify__) throw toWrapFunctionIsUndefinedError;
	try {
		return await fs.fstat.__promisify__(fd, options);
	} catch (error) {}
}

/**
 * @see {@link fs.write.__promisify__}
 */
export async function write<TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer?: TBuffer, offset?: number, length?: number, position?: number | null): Promise<{ bytesWritten: number; buffer: TBuffer } | undefined>;
// @ts-expect-error
export async function write(fd: number, string: string, position?: number | null, encoding?: BufferEncoding | null): Promise<{ bytesWritten: number; buffer: string } | undefined>;
export async function write(...args: any[]) {
	if (!fs.write?.__promisify__) throw toWrapFunctionIsUndefinedError;
	try {
		// @ts-expect-error
		return await fs.write.__promisify__(...args);
	} catch (error) {}
}

/**
 * @see {@link fs.read.__promisify__}
 */
export async function read<TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer: TBuffer, offset: number, length: number, position: number | null): Promise<{ bytesRead: number; buffer: TBuffer } | undefined>;
export async function read<TBuffer extends NodeJS.ArrayBufferView>(fd: number, options: fs.ReadAsyncOptions<TBuffer>): Promise<{ bytesRead: number; buffer: TBuffer } | undefined>;
export async function read(fd: number): Promise<{ bytesRead: number; buffer: NodeJS.ArrayBufferView } | undefined>;
export async function read(...args: any[]) {
	if (!fs.read?.__promisify__) throw toWrapFunctionIsUndefinedError;
	try {
		// @ts-expect-error
		return await fs.read.__promisify__(...args);
	} catch (error) {}
}
