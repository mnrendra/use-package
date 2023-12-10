import { readPackage } from '@mnrendra/read-package'

import pack from './pack'

import clonePackage from './clonePackage'

jest.mock('./utils', () => ({
  validateOptions: jest.fn(({ skipppedStacks }) => ({
    validateSkipppedStacks: skipppedStacks
  }))
}))

describe('Test `clonePackage`.', () => {
  describe('Without passing any arguments.', () => {
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

  describe('By passing `skippedStacks` argument with a single string.', () => {
    beforeAll(async () => {
      await clonePackage({ skippedStacks: 'any' })
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

  describe('By passing `skippedStacks` argument with a list of strings.', () => {
    beforeAll(async () => {
      await clonePackage({ skippedStacks: ['any'] })
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
})
