import type { Package } from '@mnrendra/read-package'

interface ValidOptions {
  validSkippedStacks: Array<Package['name']>
}

export default ValidOptions
