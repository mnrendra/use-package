import type { Options, ValidOptions } from '../types'

/**
 * Validate `clonePackage` options.
 * @param clonePackageOptions `clonePackage` options object
 * @returns valid `clonePackage` options
 */
const validateOptions = ({
  skippedStacks
}: Options = {
  skippedStacks: []
}): ValidOptions => {
  // Validate `skippedStacks` option.
  const validSkippedStacks = !Array.isArray(skippedStacks)
    ? [skippedStacks]
    : skippedStacks

  // Add this package name as the first element of `validSkippedStacks`.
  validSkippedStacks.unshift('@mnrendra/use-package')

  // Return valid options.
  return {
    validSkippedStacks
  }
}

export default validateOptions
