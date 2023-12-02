import type { Package } from '@mnrendra/read-package'

import pack from './pack'

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
