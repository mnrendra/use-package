# @mnrendra/use-package
A utility to provide `package.json` data. Because [@mnrendra/read-package](https://www.npmjs.com/package/@mnrendra/read-package) is expensive, this utility is used to save it.

## Install
```bash
npm i @mnrendra/use-package
```

## Usage

Using `CommonJS`:

`index.js`
```javascript
const { clonePackage } = require('@mnrendra/use-package')
const submodule = require('./submodule')

const main = async () => {
  await clonePackage()
  submodule()
}
```
`submodule.js`
```javascript
const { pack } = require('@mnrendra/use-package')

const main = () => {
  pack.customField = 'customField'

  console.log(pack.name) // Will print your package.json name.
  console.log(pack.version) // Will print your package.json version.
  console.log(pack.customField) // Will print your package.json customField.
}
```

Using `ES Module`:

`index.js`
```javascript
import { clonePackage } from '@mnrendra/use-package'
import submodule from './submodule'

const main = async () => {
  await clonePackage()
  submodule()
}
```
`submodule.js`
```javascript
import { pack } from '@mnrendra/use-package'

const main = () => {
  pack.customField = 'customField'

  console.log(pack.name) // Will print your package.json name.
  console.log(pack.version) // Will print your package.json version.
  console.log(pack.customField) // Will print your package.json customField.
}
```

# Types
```typescript
import type {
  Package // @mnrendra/types-package
} from '@mnrendra/use-package'
```

## License
[MIT](https://github.com/mnrendra/read-packag/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
