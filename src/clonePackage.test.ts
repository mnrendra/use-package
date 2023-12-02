import { readPackage } from '@mnrendra/read-package'

import pack from './pack'

import clonePackage from './clonePackage'

describe('Test `clonePackage`.', () => {
  beforeAll(async () => {
    await clonePackage()
  })

  it('Should clone `package.json` "name" to pack!', async () => {
    const expected = (await readPackage()).name
    expect(pack.name).toBe(expected)
  })

  it('Should clone `package.json` "version" to pack!', async () => {
    const expected = (await readPackage()).version
    expect(pack.version).toBe(expected)
  })

  it('Should clone `package.json` "author" to pack!', async () => {
    const expected = (await readPackage()).author
    expect(pack.author).toEqual(expected)
  })
})
