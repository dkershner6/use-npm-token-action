import createNpmrc from '../src/createNpmrc';
import { DEFAULT_WORKSPACE } from '../src/constants';
import { readFileSync } from 'fs';

describe('createNpmrc', () => {
    it('Should create a file in the standard location with the correct token', async () => {
        await createNpmrc('TESTTOKEN', DEFAULT_WORKSPACE);

        const npmrc = readFileSync('.npmrc', {
            encoding: 'utf-8',
        });
        expect(npmrc.endsWith('TESTTOKEN')).toBeTruthy();
    });

    it('Should create a file in a different location with the correct token', async () => {
        const aDifferentLocation = './node';

        await createNpmrc('TESTTOKEN', aDifferentLocation);

        const npmrc = readFileSync(`${aDifferentLocation}/.npmrc`, {
            encoding: 'utf-8',
        });
        expect(npmrc.endsWith('TESTTOKEN')).toBeTruthy();
    });
});
