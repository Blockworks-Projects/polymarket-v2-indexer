import {
  CollateralOnramp,
  CollateralOfframp,
  PermissionedRamp,
  CTFCollateralAdapter,
  NegRiskCTFCollateralAdapter,
} from "generated";

// ============================================================
// CollateralOnramp — Paused / Unpaused
// ============================================================

CollateralOnramp.Paused.handler(async ({ event, context }) => {
  context.CollateralRampPaused.set({
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    logIndex: event.logIndex,
    transactionHash: event.transaction.hash,
    timestamp: BigInt(event.block.timestamp),
    ramp: "onramp",
    asset: event.params.asset,
  });
});

CollateralOnramp.Unpaused.handler(async ({ event, context }) => {
  context.CollateralRampUnpaused.set({
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    logIndex: event.logIndex,
    transactionHash: event.transaction.hash,
    timestamp: BigInt(event.block.timestamp),
    ramp: "onramp",
    asset: event.params.asset,
  });
});

// ============================================================
// CollateralOfframp — Paused / Unpaused
// ============================================================

CollateralOfframp.Paused.handler(async ({ event, context }) => {
  context.CollateralRampPaused.set({
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    logIndex: event.logIndex,
    transactionHash: event.transaction.hash,
    timestamp: BigInt(event.block.timestamp),
    ramp: "offramp",
    asset: event.params.asset,
  });
});

CollateralOfframp.Unpaused.handler(async ({ event, context }) => {
  context.CollateralRampUnpaused.set({
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    logIndex: event.logIndex,
    transactionHash: event.transaction.hash,
    timestamp: BigInt(event.block.timestamp),
    ramp: "offramp",
    asset: event.params.asset,
  });
});

// ============================================================
// PermissionedRamp — Paused / Unpaused
// ============================================================

PermissionedRamp.Paused.handler(async ({ event, context }) => {
  context.CollateralRampPaused.set({
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    logIndex: event.logIndex,
    transactionHash: event.transaction.hash,
    timestamp: BigInt(event.block.timestamp),
    ramp: "permissioned",
    asset: event.params.asset,
  });
});

PermissionedRamp.Unpaused.handler(async ({ event, context }) => {
  context.CollateralRampUnpaused.set({
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    logIndex: event.logIndex,
    transactionHash: event.transaction.hash,
    timestamp: BigInt(event.block.timestamp),
    ramp: "permissioned",
    asset: event.params.asset,
  });
});

// ============================================================
// CTFCollateralAdapter — Paused / Unpaused
// ============================================================

CTFCollateralAdapter.Paused.handler(async ({ event, context }) => {
  context.CollateralRampPaused.set({
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    logIndex: event.logIndex,
    transactionHash: event.transaction.hash,
    timestamp: BigInt(event.block.timestamp),
    ramp: "ctf-adapter",
    asset: event.params.asset,
  });
});

CTFCollateralAdapter.Unpaused.handler(async ({ event, context }) => {
  context.CollateralRampUnpaused.set({
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    logIndex: event.logIndex,
    transactionHash: event.transaction.hash,
    timestamp: BigInt(event.block.timestamp),
    ramp: "ctf-adapter",
    asset: event.params.asset,
  });
});

// ============================================================
// NegRiskCTFCollateralAdapter — Paused / Unpaused
// ============================================================

NegRiskCTFCollateralAdapter.Paused.handler(async ({ event, context }) => {
  context.CollateralRampPaused.set({
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    logIndex: event.logIndex,
    transactionHash: event.transaction.hash,
    timestamp: BigInt(event.block.timestamp),
    ramp: "negrisk-ctf-adapter",
    asset: event.params.asset,
  });
});

NegRiskCTFCollateralAdapter.Unpaused.handler(async ({ event, context }) => {
  context.CollateralRampUnpaused.set({
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    logIndex: event.logIndex,
    transactionHash: event.transaction.hash,
    timestamp: BigInt(event.block.timestamp),
    ramp: "negrisk-ctf-adapter",
    asset: event.params.asset,
  });
});
