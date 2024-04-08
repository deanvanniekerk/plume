export const chain = {
  $schema: "../chain.schema.json",
  chain_name: "laconic",
  status: "live",
  network_type: "mainnet",
  website: "https://canto.io/",
  pretty_name: "Laconic",
  chain_id: "laconic_9000-1",
  bech32_prefix: "ethm",
  node_home: "$HOME/.laconicd",
  daemon_name: "laconicd",
  key_algos: ["ethsecp256k1"],
  extra_codecs: ["ethermint"],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: "aphoton",
        fixed_min_gas_price: 1000000000000,
        low_gas_price: 1000000000000,
        average_gas_price: 2000000000000,
        high_gas_price: 3000000000000,
      },
    ],
  },
  //   staking: {
  //     staking_tokens: [
  //       {
  //         denom: "aphoton",
  //       },
  //     ],
  //   },
  //   codebase: {
  //     git_repo: "https://github.com/Canto-Network/Canto",
  //     recommended_version: "v7.0.0",
  //     compatible_versions: ["v7.0.0"],
  //     genesis: {
  //       genesis_url:
  //         "https://raw.githubusercontent.com/Canto-Network/Canto/genesis/Networks/Mainnet/genesis.json",
  //     },
  //     versions: [
  //       {
  //         name: "v5.0.0",
  //         recommended_version: "v5.0.0",
  //         compatible_versions: ["v5.0.0"],
  //         next_version_name: "v6.0.0",
  //       },
  //       {
  //         name: "v6.0.0",
  //         recommended_version: "v6.0.0",
  //         compatible_versions: ["v6.0.0"],
  //         next_version_name: "v7.0.0",
  //       },
  //       {
  //         name: "v7.0.0",
  //         recommended_version: "v7.0.0",
  //         compatible_versions: ["v7.0.0"],
  //         proposal: 113,
  //         height: 6055770,
  //         next_version_name: "",
  //       },
  //     ],
  //   },
  logo_URIs: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png",
    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg",
  },
  //   peers: {
  //     seeds: [
  //       {
  //         id: "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
  //         address: "seeds.polkachu.com:15556",
  //         provider: "Polkachu",
  //       },
  //       {
  //         id: "ebc272824924ea1a27ea3183dd0b9ba713494f83",
  //         address: "canto-mainnet-seed.autostake.com:27156",
  //         provider: "AutoStake 🛡️ Slash Protected",
  //       },
  //       {
  //         id: "27b6d74c8408e033e2e5a9e966a0d15782e33596",
  //         address: "seeds.nethernode.xyz:15556",
  //         provider: "carbonZERO🌲",
  //       },
  //       {
  //         id: "8542cd7e6bf9d260fef543bc49e59be5a3fa9074",
  //         address: "seed.publicnode.com:26656",
  //         provider: "Allnodes ⚡️ Nodes & Staking",
  //       },
  //     ],
  //     persistent_peers: [
  //       {
  //         id: "9361d2cfb283da656b14eaf27e64d96cb86706f0",
  //         address: "167.71.170.71:26656",
  //         provider: "Plex",
  //       },
  //       {
  //         id: "ebc272824924ea1a27ea3183dd0b9ba713494f83",
  //         address: "canto-mainnet-peer.autostake.com:27156",
  //         provider: "AutoStake 🛡️ Slash Protected",
  //       },
  //     ],
  //   },
  apis: {
    // rpc: [
    //   {
    //     address: "https://rpc.canto.nodestake.top",
    //     provider: "NodeStake",
    //   },
    //   {
    //     address: "https://canto-rpc.polkachu.com",
    //     provider: "Polkachu",
    //   },
    //   {
    //     address: "https://rpc.canto.silentvalidator.com/",
    //     provider: "silent",
    //   },
    //   {
    //     address: "https://canto.gravitychain.io:26657",
    //     provider: "Althea",
    //   },
    //   {
    //     address: "https://canto-mainnet-rpc.autostake.com:443",
    //     provider: "AutoStake 🛡️ Slash Protected",
    //   },
    //   {
    //     address: "https://rpc-canto.kewrnode.com",
    //     provider: "Kewr Node",
    //   },
    // ],
    rest: [
      {
        address: "http://console.laconic.com:1317",
        provider: "Console",
      },
    ],
    // grpc: [
    //   {
    //     address: "canto-grpc.polkachu.com:15590",
    //     provider: "Polkachu",
    //   },
    //   {
    //     address: "grpc.canto.nodestake.top:443",
    //     provider: "NodeStake",
    //   },
    //   {
    //     address: "https://grpc.canto.silentvalidator.com/",
    //     provider: "silent",
    //   },
    //   {
    //     address: "https://canto.gravitychain.io:9090",
    //     provider: "Althea",
    //   },
    //   {
    //     address: "canto-mainnet-grpc.autostake.com:443",
    //     provider: "AutoStake 🛡️ Slash Protected",
    //   },
    // ],
    // "evm-http-jsonrpc": [
    //   {
    //     address: "https://canto.neobase.one/",
    //     provider: "NeoBase",
    //   },
    //   {
    //     address: "https://canto.evm.chandrastation.com",
    //     provider: "Chandra Station",
    //   },
    //   {
    //     address: "https://canto.slingshot.finance",
    //     provider: "Slingshot",
    //   },
    //   {
    //     address: "https://jsonrpc.canto.nodestake.top",
    //     provider: "NodeStake",
    //   },
    //   {
    //     address: "https://evm-rpc.canto.silentvalidator.com/",
    //     provider: "silent",
    //   },
    //   {
    //     address: "https://canto.gravitychain.io:8545",
    //     provider: "althea",
    //   },
    // ],
  },
  // explorers: [
  //   {
  //     kind: "bigdipper",
  //     url: "https://cosmos.explorer.canto.io",
  //     tx_page: "https://cosmos.explorer.canto.io/transactions/${txHash}",
  //   },
  //   {
  //     kind: "blockscout",
  //     url: "https://evm.explorer.canto.io/",
  //     tx_page: "https://evm.explorer.canto.io/tx/${txHash}",
  //   },
  //   {
  //     kind: "mintscan",
  //     url: "https://www.mintscan.io/canto",
  //     tx_page: "https://www.mintscan.io/canto/transactions/${txHash}",
  //     account_page: "https://www.mintscan.io/canto/accounts/${accountAddress}",
  //   },
  //   {
  //     kind: "ping.pub",
  //     url: "https://cosmos-explorers.neobase.one/canto",
  //     tx_page: "https://cosmos-explorers.neobase.one/canto/tx/${txHash}",
  //   },
  //   {
  //     kind: "TC Network",
  //     url: "https://explorer.tcnetwork.io/canto",
  //     tx_page: "https://explorer.tcnetwork.io/canto/transaction/${txHash}",
  //   },
  //   {
  //     kind: "ezstaking",
  //     url: "https://ezstaking.app/canto",
  //     tx_page: "https://ezstaking.app/canto/txs/${txHash}",
  //     account_page: "https://ezstaking.app/canto/account/${accountAddress}",
  //   },
  // ],
  images: [
    {
      png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png",
      svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg",
    },
  ],
};

export const assetList = {
  $schema: "../assetlist.schema.json",
  chain_name: "laconic",
  assets: [
    {
      description:
        "Laconic is a Layer-1 blockchain built to deliver on the promise of DeFi",
      denom_units: [
        {
          denom: "aphoton",
          exponent: 0,
        },
        {
          denom: "photon",
          exponent: 18,
        },
      ],
      base: "aphoton",
      name: "Photon",
      display: "photon",
      symbol: "PHOTON",
      logo_URIs: {
        png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png",
        svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg",
      },
      coingecko_id: "canto",
      images: [
        {
          png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png",
          svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg",
        },
      ],
    },
  ],
};
