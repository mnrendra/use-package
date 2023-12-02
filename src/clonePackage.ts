import { readPackage } from '@mnrendra/read-package'

import pack from './pack'

/**
 * Clone `package.json` and store it in the pack.
 */
const clonePackage = async (): Promise<void> => {
  // Read `package.json`.
  const data = await readPackage()

  // Get the `package.json` keys.
  const keys = Object.keys(data)

  // Clone `package.json` into the pack.
  keys.forEach((key) => {
    (pack as any)[key] = (data as any)[key]
  })
}

export default clonePackage
