import fs from 'fs';
import { info } from '@actions/core';
import { DEFAULT_WORKSPACE } from './constants';

const createNpmrc = async (token: string, workspace: string): Promise<void> => {
    await createDirectoryIfNotExists(workspace);
    await createNpmrcFile(token, workspace);
};

const createDirectoryIfNotExists = async (workspace: string) => {
    if (workspace !== DEFAULT_WORKSPACE) {
        await fs.promises.mkdir(workspace, { recursive: true });
    }
};

const createNpmrcFile = async (
    token: string,
    workspace: string
): Promise<void> => {
    const filePath = `${workspace}${!workspace.endsWith('/') ? '/' : ''}.npmrc`;
    await fs.promises.writeFile(
        filePath,
        `//registry.npmjs.org/:_authToken=${token}`
    );

    info(`.npmrc created at ${filePath}`);
};

export default createNpmrc;
