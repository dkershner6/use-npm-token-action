import { getInput, setFailed, setSecret } from '@actions/core';
import createNpmrc from './createNpmrc';
import { DEFAULT_WORKSPACE } from './constants';

async function run(): Promise<void> {
    try {
        const token: string = getInput('token');
        if (!token || token.length === 0) {
            setFailed('Invalid token or token not present');
        }
        setSecret(token);

        const workspace: string = getInput('workspace') ?? DEFAULT_WORKSPACE;

        createNpmrc(token, workspace);
    } catch (error) {
        setFailed(error.message);
    }
}

run();
