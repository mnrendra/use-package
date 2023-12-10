import type { Package } from '@mnrendra/read-package'

import { readPackage } from '@mnrendra/read-package'

import { pack, clonePackage } from '.'

jest.mock('./utils', () => ({
  validateOptions: jest.fn(({ skipppedStacks }) => ({
    validateSkipppedStacks: skipppedStacks
  }))
}))

describe('Test `index`.', () => {
  describe('Test `pack`.', () => {
    it('Should have a `name` property!', () => {
      expect(pack.name).toBe('package-name')
    })

    it('Should have a `version` property!', () => {
      expect(pack.version).toBe('0.0.0')
    })

    it('Should be able to change the `name` value!', () => {
      pack.name = 'new-name'
      expect(pack.name).toBe('new-name')
    })

    it('Should be able to change the `version` value!', () => {
      pack.name = '0.0.0-development'
      expect(pack.name).toBe('0.0.0-development')
    })

    it('Should be able to add a new `package.json` property!', () => {
      pack.scripts = { start: 'node .' }
      expect(pack.scripts).toEqual({ start: 'node .' })
    })

    it('Should be able to add a custom property!', () => {
      type CustomType = Package & { pluginName: string }
      (pack as CustomType).pluginName = 'plugin-name'
      expect((pack as CustomType).pluginName).toBe('plugin-name')
    })
  })

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
})
