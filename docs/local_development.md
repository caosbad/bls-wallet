# Local Development

These steps will setup this repo on your machine for local development for the majority of the components in this repo.
If you would like to target a remote network instead, add the addtional steps in [Remote Development](./remote_development.md) as well.

## Dependencies

### Required

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com/getting-started/install) (`npm install -g yarn`)
- [Deno](https://deno.land/#installation)

### Optional (Recomended)

- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- [docker-compose](https://docs.docker.com/compose/install/)

## Setup

Install the latest Node 16.  If using nvm to manage node versions, run this in the root directory:
```sh
nvm install
```

Run the repo setup script
```sh
./setup.ts
```

Then choose to target either a local Hardhat node or the Arbitrum Testnet.

### Chain (RPC Node)

Start a local Hardhat node for RPC use.
```sh
cd ./contracts
yarn hardhat node
```

### Contracts

Fund the `create2Deployer`.
```sh
yarn hardhat fundDeployer --network gethDev
```

Deploy all `bls-wallet` contracts.
```sh
git checkout 45def922036c441aa1559419470a131de3ce8ae4
yarn hardhat run scripts/deploy_all.ts --network gethDev
git checkout - # Switches back to the previous branch
```

***Note***: We currently advise deploying contracts from version 45def9 using the `checkout` commands above for compatibility with the extension and contracts deployed to arbitrum testnet. This isn't necessary if you're working on the contracts in isolation or otherwise know how to workaround this issue. This should be improved in the future. [More information](https://github.com/web3well/bls-wallet/issues/295).

## Run

```sh
docker-compose up -d postgres # Or see local postgres instructions in ./aggregator/README.md#PostgreSQL
cd ./aggregator
./programs/aggregator.ts
```

In a seperate terminal/shell instance
```sh
cd ./extension
yarn run dev:chrome # or dev:firefox, dev:opera
```

### Chrome

1. Go to Chrome's [extension page](chrome://extensions).
2. Enable `Developer mode`.
3. Either click `Load unpacked extension...` and select `./extension/extension/chrome` or drag that folder into the page.

### Firefox

1. Go to Firefox's [debugging page](about:debugging#/runtime/this-firefox).
2. Click `Load Temporary Add-on...`.
3. Select `./extension/extension/firefox/manifest.json`.

### Tests
See each components `README.md` for how to run tests.

## Testing/using updates to ./clients

### extension
```sh
cd ./contracts/clients
yarn build
yarn link
cd ../extension
yarn link bls-wallet-clients
```

If you would like live updates to from the clients package to trigger reloads of the extension, be sure to comment out this section of `./extension/weback.config.js`:
```javascript
...
module.exports = {
  ...
  watchOptions: {
    // Remove this if you want to watch for changes
    // from a linked package, such as bls-wallet-clients.
    ignored: /node_modules/,
  },
  ...
};
```

### aggregator

You will need to push up an `@experimental` version to 'bls-wallet-clients' on npm and update the version in `./aggregtor/src/deps.ts` until a local linking solution for deno is found. See https://github.com/alephjs/esm.sh/discussions/216 for details.
You will need write access to the npmjs project to do this. You can request access or request one of the BLS Wallet project developers push up your client changes in the `Discussions` section of this repo.

In `./contracts/clients` with your changes:
```
yarn publish-experimental
```
Note the `x.y.z-abc1234` version that was output.

Then in `./aggregtor/deps.ts`, change all `from` references for that package.
```typescript
...
} from "https://esm.sh/bls-wallet-clients@x.y.z-abc1234";
...
```
