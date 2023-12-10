import type { Options } from './types'

import { readPackage } from '@mnrendra/read-package'

import { validateOptions } from './utils'

import pack from './pack'

/**
 * Clone `package.json` and store it in the pack.
 * @param options Options object
 */
const clonePackage = async ({
  skippedStacks
}: Options = {
  skippedStacks: []
}): Promise<void> => {
  // Validate options.
  const { validSkippedStacks } = validateOptions({ skippedStacks })

  // Read `package.json` by skipping the skipped stacks.
  const data = await readPackage({ skippedStacks: validSkippedStacks })

  // Get the `package.json` keys.
  const keys = Object.keys(data)

  // Clone `package.json` into the pack.
  keys.forEach((key) => {
    (pack as any)[key] = (data as any)[key]
  })
}

export default clonePackage
