import { validOptions } from '@tests/stubs'

import { validateOptions } from '.'

describe('Test utils.', () => {
  describe('Test `validateOptions` util.', () => {
    it('Should return the default value when given an empty argument.', () => {
      const received = validateOptions()
      const expected = validOptions()

      expect(received).toEqual(expected)
    })

    describe('Test `skippedStacks` option.', () => {
      it('Should return the default value with modified `skippedStacks` when given a `skippedStacks` option with a string.', () => {
        const received = validateOptions({ skippedStacks: 'any' })
        const expected = validOptions()

        expect(received).toEqual({
          ...expected,
          validSkippedStacks: [...expected.validSkippedStacks, 'any']
        })
      })

      it('Should return the default value with modified `skippedStacks` when given a `skippedStacks` option with a list of strings.', () => {
        const received = validateOptions({ skippedStacks: ['any'] })
        const expected = validOptions()

        expect(received).toEqual({
          ...expected,
          validSkippedStacks: [...expected.validSkippedStacks, 'any']
        })
      })
    })
  })
})
