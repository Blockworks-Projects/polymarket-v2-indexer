import { DepositWalletFactory } from "generated";

DepositWalletFactory.WalletDeployed.handler(async ({ event, context }) => {
  context.DepositWallet.set({
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    logIndex: event.logIndex,
    transactionHash: event.transaction.hash,
    timestamp: BigInt(event.block.timestamp),
    wallet: event.params.wallet,
    owner: event.params.owner,
    walletId: event.params.id,
    implementation: event.params.implementation,
  });
});
