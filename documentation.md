# Paps Icons

A crisp set of 24×24 icons designed by the [TeamBlue](https://papslogistics.com) team.

---

## Documentation

All icons are available as individual React components.

Install Paps Icons from npm or yarn:

```bash
npm install paps-icon --save
# or
yarn add paps-icon
```

Import the icons into your React project:

```js
import { AccessAlarm, AccessTime, AccountBalance } from 'paps-icon';

function MyComponent() {
  return (
    <div>
      <AccessAlarm />
      <AccessTime />
      <AccountBalance />
    </div>
  );
}
```

With props:

```js
import { AccessAlarm } from 'paps-icon';

function MyComponent() {
  return (
    <div>
      <AccessAlarm title={'AccessAlarm'} color={'red'} width={32} height={32} />
    </div>
  );
}
```

## License

Licensed under the ISC License, Copyright © 2022-present WorkOS.

<!-- See [LICENSE](./LICENSE.md) for more information. -->
