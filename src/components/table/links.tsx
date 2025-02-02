import { AnyAccountId } from '@subsocial/types'
import { ExternalLink } from '../identity/utils'
import styles from './Table.module.sass'
import { RelayChain } from '../../types/index'

const picassoRefCode = 'XHJ2o0'

type AppLink = {
  label?: string
  url: string
}

export type NetworkLinks = {
  subscanSubdomain: string
  website: string
  twitter: string
  discord: string
  telegram: string
  github: string
  apps: AppLink[]
}

export const linksByNetworks: Record<string, Partial<NetworkLinks>> = {
  kusama: {
    subscanSubdomain: 'kusama',
    website: 'https://kusama.network/',
    twitter: 'https://twitter.com/kusamanetwork',
    discord: 'https://kusama-discord.w3f.tools/',
    github: 'https://github.com/paritytech/polkadot/',
    telegram: '',
  },
  polkadot: {
    subscanSubdomain: 'polkadot',
    website: 'https://polkadot.network/',
    twitter: 'https://twitter.com/Polkadot',
    github: 'https://github.com/paritytech/polkadot',
    discord: 'https://polkadot-discord.w3f.tools/',
  },
  centrifugePara: {
    subscanSubdomain: 'centrifuge',
    website: 'https://centrifuge.io/',
    twitter: 'https://twitter.com/centrifuge',
    discord: 'https://discord.com/invite/yEzyUq5gxF',
    telegram: 'https://t.me/centrifuge_chat',
    apps: [
      {
        url: 'https://gov.centrifuge.io/',
      },
    ],
  },
  sora: {
    subscanSubdomain: 'sora',
    website: 'https://sora.org/',
    twitter: 'https://twitter.com/sora_xor',
    telegram: 'https://t.me/sora_xor',
    discord: 'https://discord.com/invite/4TXRN6Y4gb',
    github: 'https://github.com/sora-xor',
    apps: [
      {
        url: 'https://polkaswap.io/',
      },
    ],
  },
  'sora-parachain': {
    subscanSubdomain: 'sora',
    website: 'https://sora.org/',
    twitter: 'https://twitter.com/sora_xor',
    telegram: 'https://t.me/sora_xor',
    discord: 'https://discord.com/invite/4TXRN6Y4gb',
    github: 'https://github.com/sora-xor',
    apps: [
      {
        url: 'https://polkaswap.io/',
      },
    ],
  },
  edgeware: {
    subscanSubdomain: 'edgeware',
    website: 'https://www.edgeware.io/',
    github: 'https://github.com/Edgeware-Network/edgeware-node',
    discord: 'https://discord.com/invite/bDktqyj',
    twitter: 'https://twitter.com/EdgewareDAO',
    telegram: 'https://t.me/heyedgeware',
    apps: [
      {
        url: 'https://www.edgeware.app/',
      },
    ],
  },
  chainx: {
    subscanSubdomain: 'chainx',
    website: 'https://chainx.org/',
    github: 'https://github.com/chainx-org/ChainX',
    twitter: 'https://twitter.com/chainx_org',
    telegram: 'https://t.me/chainx_org',
  },
  calamari: {
    subscanSubdomain: 'calamari',
    website: 'https://calamari.network/',
    github: 'https://github.com/Manta-Network/Manta',
    twitter: 'https://twitter.com/CalamariNetwork',
    telegram: 'https://t.me/mantanetwork',
    discord: 'https://discord.com/invite/5khsf6QmCb',
    apps: [
      {
        url: 'https://app.manta.network/calamari/stake',
      },
    ],
  },
  kilt: {
    subscanSubdomain: 'spiritnet',
    website: 'https://www.kilt.io/',
    github: 'https://github.com/KILTprotocol/kilt-node',
    twitter: 'https://github.com/KILTprotocol/kilt-node',
    telegram: 'https://t.me/KILTProtocolChat',
  },
  bifrostKusama: {
    subscanSubdomain: 'bifrost',
    website: 'https://bifrost.finance/',
    github: 'https://github.com/bifrost-finance/bifrost',
    discord: 'https://discord.com/invite/8DRBw2h5X4',
    twitter: 'https://twitter.com/BifrostFinance',
    telegram: 'https://t.me/bifrost_finance',
    apps: [
      {
        url: 'https://bifrost.app/',
      },
    ],
  },
  bifrostPolkadot: {
    subscanSubdomain: 'bifrost',
    website: 'https://bifrost.finance/',
    github: 'https://github.com/bifrost-finance/bifrost',
    discord: 'https://discord.com/invite/8DRBw2h5X4',
    twitter: 'https://twitter.com/BifrostFinance',
    telegram: 'https://t.me/bifrost_finance',
    apps: [
      {
        url: 'https://bifrost.app/',
      },
    ],
  },
  statemine: {
    subscanSubdomain: 'statemine',
  },
  karura: {
    subscanSubdomain: 'karura',
    website: 'https://acala.network/karura',
    github: 'https://github.com/AcalaNetwork/Acala',
    twitter: 'https://twitter.com/KaruraNetwork',
    discord: 'https://discord.com/invite/Mw4PFHf',
    telegram: 'https://t.me/karuranetwork',
    apps: [
      {
        url: 'https://apps.karura.network/',
      },
    ],
  },
  khala: {
    subscanSubdomain: 'khala',
    website: 'https://www.phala.network/en/khala/',
    github: 'https://github.com/Phala-Network/phala-blockchain',
    discord: 'https://discord.com/invite/CKaKkBGbcy',
    twitter: 'https://twitter.com/PhalaNetwork',
    telegram: 'https://t.me/joinchat/I-ejoxKrdHlOx_zv9VsykA',
  },
  moonriver: {
    subscanSubdomain: 'moonriver',
    website: 'https://moonbeam.foundation/moonriver-token/',
    github: 'https://github.com/PureStake/moonbeam',
    discord: 'https://discord.com/invite/PfpUATX',
    twitter: 'https://twitter.com/MoonbeamNetwork',
    telegram: 'https://t.me/Moonbeam_Official',
    apps: [
      {
        url: 'https://apps.moonbeam.network/moonriver',
      },
    ],
  },
  shiden: {
    subscanSubdomain: 'shiden',
    website: 'https://shiden.astar.network/',
    github: 'https://github.com/AstarNetwork/Astar',
    discord: 'https://discord.com/invite/Z3nC9U4',
    twitter: 'https://twitter.com/ShidenNetwork',
    telegram: 'https://t.me/PlasmOfficial',
    apps: [
      {
        url: 'https://portal.astar.network/',
      },
    ],
  },
  acala: {
    subscanSubdomain: 'acala',
    website: 'https://acala.network/',
    github: 'https://github.com/AcalaNetwork/Acala',
    discord: 'https://discord.com/invite/Mw4PFHf',
    twitter: 'https://twitter.com/AcalaNetwork',
    telegram: 'https://t.me/acalaofficial',
    apps: [
      {
        url: 'https://apps.acala.network/',
      },
    ],
  },
  astar: {
    subscanSubdomain: 'astar',
    website: 'https://astar.network/',
    github: 'https://github.com/AstarNetwork/Astar',
    twitter: 'https://twitter.com/AstarNetwork',
    discord: 'https://discord.com/invite/Z3nC9U4',
    telegram: 'https://t.me/PlasmOfficial',
    apps: [
      {
        url: 'https://portal.astar.network/',
      },
    ],
  },
  altair: {
    subscanSubdomain: 'altair',
    github: 'https://github.com/centrifuge/centrifuge-chain',
    discord: 'https://discord.com/invite/yEzyUq5gxF',
    twitter: 'https://twitter.com/altair_network',
    telegram: 'https://t.me/centrifuge_chat',
  },
  kintsugi: {
    subscanSubdomain: 'kintsugi',
    website: 'https://kintsugi.interlay.io/',
    discord: 'https://discord.com/invite/KgCYK3MKSf',
    twitter: 'https://twitter.com/kintsugi_btc',
    telegram: 'https://t.me/interlay_community',
    github: 'https://github.com/interlay/interbtc',
  },
  quartz: {
    subscanSubdomain: 'quartz',
    website: 'https://unique.network/quartz/',
    discord: 'https://discord.com/invite/jHVdZhsakC',
    telegram: 'https://t.me/Uniquechain',
    github: 'https://github.com/UniqueNetwork',
    twitter: 'https://twitter.com/Unique_NFTchain',
  },
  litmus: {
    subscanSubdomain: 'litmus',
    website: 'https://www.litentry.com/',
    github: 'https://github.com/litentry/litentry-parachain',
    discord: 'https://discord.com/invite/M7T4y4skVD',
    twitter: 'https://twitter.com/litentry',
    telegram: 'https://t.me/Litentry',
  },
  robonomics: {
    subscanSubdomain: 'robonomics',
    website: 'https://robonomics.network/',
    github: 'https://github.com/airalab/robonomics',
    twitter: 'https://twitter.com/AIRA_Robonomics',
    telegram: 'https://t.me/robonomics',
    apps: [
      {
        url: 'https://dapp.robonomics.network/',
      },
    ],
  },
  polkadex: {
    subscanSubdomain: 'polkadex',
    website: 'https://polkadex.trade/',
    github: 'https://github.com/Polkadex-Substrate/Polkadex',
    discord: 'https://discord.com/invite/Uvua83QAzk',
    twitter: 'https://twitter.com/polkadex',
    telegram: 'https://t.me/Polkadex',
    apps: [
      {
        url: 'https://orderbook.polkadex.trade/',
      },
    ],
  },
  'polkadex-polkadot': {
    subscanSubdomain: 'polkadex',
    website: 'https://polkadex.trade/',
    github: 'https://github.com/Polkadex-Substrate/Polkadex',
    discord: 'https://discord.com/invite/Uvua83QAzk',
    twitter: 'https://twitter.com/polkadex',
    telegram: 'https://t.me/Polkadex',
    apps: [
      {
        url: 'https://orderbook.polkadex.trade/',
      },
    ],
  },
  'nodle-polkadot': {
    subscanSubdomain: 'nodle',
    website: 'https://www.nodle.com/',
    github: 'https://github.com/NodleCode/chain',
    discord: 'https://discord.com/invite/N5nTUt8RWJ',
    twitter: 'https://twitter.com/NodleNetwork',
    telegram: 'https://t.me/nodlecommunity',
  },
  darwinia: {
    subscanSubdomain: 'darwinia',
    website: 'https://darwinia.network/',
    github: 'https://github.com/darwinia-network/darwinia',
    twitter: 'https://twitter.com/DarwiniaNetwork',
    discord: 'https://discord.com/invite/aQdK9H4MZS',
    telegram: 'https://t.me/DarwiniaNetwork',
  },
  darwiniaPokadot: {
    subscanSubdomain: 'darwinia',
    website: 'https://darwinia.network/',
    github: 'https://github.com/darwinia-network/darwinia',
    twitter: 'https://twitter.com/DarwiniaNetwork',
    discord: 'https://discord.com/invite/aQdK9H4MZS',
    telegram: 'https://t.me/DarwiniaNetwork',
  },
  'darwinia-crab-parachain': {
    subscanSubdomain: 'crab-parachain',
    website: 'https://crab.network/',
    github:
      'https://github.com/darwinia-network/darwinia/tree/main/runtime/crab',
    discord: 'https://discord.com/invite/aQdK9H4MZS',
    twitter: 'https://twitter.com/DarwiniaNetwork',
    telegram: 'https://t.me/DarwiniaNetwork',
    apps: [
      {
        url: 'https://apps.darwinia.network/?network=crab',
      },
    ],
  },
  'darwinia-crab': {
    subscanSubdomain: 'crab',
    website: 'https://crab.network/',
    github:
      'https://github.com/darwinia-network/darwinia/tree/main/runtime/crab',
    discord: 'https://discord.com/invite/aQdK9H4MZS',
    twitter: 'https://twitter.com/DarwiniaNetwork',
    telegram: 'https://t.me/DarwiniaNetwork',
    apps: [
      {
        url: 'https://apps.darwinia.network/?network=crab',
      },
    ],
  },
  zeitgeist: {
    subscanSubdomain: 'zeitgeist',
    website: 'https://zeitgeist.pm/',
    github: 'https://github.com/zeitgeistpm/zeitgeist',
    discord: 'https://discord.com/invite/xv8HuA4s8v',
    twitter: 'https://twitter.com/ZeitgeistPM',
    telegram: 'https://t.me/zeitgeist_official',
    apps: [
      {
        url: 'https://app.zeitgeist.pm/',
      },
    ],
  },
  heiko: {
    subscanSubdomain: 'parallel-heiko',
    website: 'https://parallel.fi/',
    github: 'https://github.com/parallel-finance/parallel',
    discord: 'https://discord.com/invite/buKKx4dySW',
    twitter: 'https://twitter.com/ParallelFi',
    telegram: 'https://t.me/parallelfi',
    apps: [
      {
        url: 'https://app.parallel.fi/',
      },
    ],
  },
  bitCountry: {
    subscanSubdomain: 'pioneer',
    website: 'https://bit.country/',
    github: 'https://github.com/bit-country/Metaverse-Network',
    discord: 'https://discord.com/invite/PaMAXZZ59N',
    twitter: 'https://twitter.com/bitdotcountry',
    telegram: 'https://t.me/BitCountryOfficialTG',
    apps: [
      {
        url: 'https://pioneer.bit.country/',
      },
    ],
  },
  shadow: {
    subscanSubdomain: 'shadow',
    website: 'https://crust.network/',
    github: 'https://github.com/crustio/crust',
    discord: 'https://discord.com/invite/Jbw2PAUSCR',
    twitter: 'https://twitter.com/crustnetwork',
    telegram: 'https://t.me/CrustNetwork',
  },
  picasso: {
    subscanSubdomain: 'picasso',
    website: 'https://www.picasso.xyz/',
    github: 'https://github.com/ComposableFi/',
    discord: 'https://github.com/ComposableFi/',
    twitter: 'https://twitter.com/Picasso_Network',
    telegram: 'https://t.me/ComposableFinanceAnnouncements',
    apps: [
      {
        url: 'https://app.picasso.xyz/',
      },
    ],
  },
  moonbeam: {
    subscanSubdomain: 'moonbeam',
    website: 'https://moonbeam.network/',
    github: 'https://github.com/PureStake/moonbeam',
    discord: 'https://discord.com/invite/PfpUATX',
    twitter: 'https://twitter.com/MoonbeamNetwork',
    telegram: 'https://t.me/Moonbeam_Official',
    apps: [
      {
        url: 'https://apps.moonbeam.network/moonbeam',
      },
    ],
  },
  parallel: {
    subscanSubdomain: 'parallel',
    website: 'https://parallel.fi/',
    github: 'https://github.com/parallel-finance/parallel',
    discord: 'https://discord.com/invite/buKKx4dySW',
    twitter: 'https://twitter.com/ParallelFi',
    telegram: 'https://t.me/parallelfi',
    apps: [
      {
        url: 'https://app.parallel.fi/',
      },
    ],
  },
  clover: {
    subscanSubdomain: 'clv',
    website: 'https://clv.org/',
    github: 'https://github.com/clover-network/clover',
    discord: 'https://discord.com/invite/M6SxuXqMVB',
    twitter: 'https://twitter.com/clover_finance',
    telegram: 'https://t.me/clvorg',
  },
  basilisk: {
    subscanSubdomain: 'basilisk',
    website: 'https://bsx.fi/',
    github: 'https://github.com/galacticcouncil',
    discord: 'https://discord.com/invite/S8YZj5aXR6',
    twitter: 'https://twitter.com/bsx_finance',
    telegram: 'https://t.me/bsx_fi',
    apps: [
      {
        url: 'https://app.basilisk.cloud/#/trade',
      },
    ],
  },
  interlay: {
    subscanSubdomain: 'interlay',
    website: 'https://www.interlay.io/',
    github: 'https://github.com/interlay/interbtc',
    discord: 'https://discord.com/invite/interlay',
    twitter: 'https://twitter.com/interlayHQ',
    telegram: 'https://t.me/interlay_community',
    apps: [
      {
        url: 'https://app.interlay.io/dashboard',
      },
    ],
  },
  hydra: {
    subscanSubdomain: 'hydradx',
    website: 'https://hydradx.io/',
    github: 'https://github.com/galacticcouncil/HydraDX-node',
    discord: 'https://discord.com/invite/xtVnQgq',
    twitter: 'https://twitter.com/hydra_dx',
    telegram: 'https://t.me/hydradx',
    apps: [
      {
        url: 'https://app.hydradx.io/#/trade',
      },
    ],
  },
  integritee: {
    subscanSubdomain: 'integritee',
    website: 'https://integritee.network/',
    github: 'https://github.com/integritee-network/worker',
    discord: 'https://discord.com/invite/anhtxwr4eS',
    twitter: 'https://twitter.com/integri_t_e_e',
    telegram: 'https://t.me/Integritee_Official',
  },
  phala: {
    subscanSubdomain: 'phala',
    website: 'https://www.phala.network/en/',
    github: 'https://github.com/Phala-Network/phala-blockchain',
    discord: 'https://discord.com/invite/phala',
    twitter: 'https://twitter.com/PhalaNetwork',
    telegram: 'https://t.me/joinchat/I-ejoxKrdHlOx_zv9VsykA',
    apps: [
      {
        url: 'https://app.phala.network/',
      },
    ],
  },
  centrifuge: {
    subscanSubdomain: 'centrifuge',
    website: 'https://centrifuge.io/',
    github: 'https://github.com/centrifuge/centrifuge-chain/',
    discord: 'https://discord.com/invite/yEzyUq5gxF',
    twitter: 'https://twitter.com/centrifuge',
    telegram: 'https://t.me/centrifuge_chat',
    apps: [
      {
        url: 'https://tinlake.centrifuge.io/',
      },
    ],
  },
  originTrail: {
    subscanSubdomain: 'origintrail',
    website: 'https://parachain.origintrail.io/',
    github: 'https://github.com/OriginTrail/origintrail-parachain',
    discord: 'https://discord.com/invite/FCgYk2S',
    twitter: 'https://twitter.com/OT_Parachain',
    telegram: 'https://t.me/origintrail',
    apps: [
      {
        url: 'https://teleport.origintrail.io/',
      },
    ],
  },
  turing: {
    subscanSubdomain: 'turing',
    website: 'https://oak.tech/',
    github: 'https://github.com/OAK-Foundation/OAK-blockchain',
    discord: 'https://discord.com/invite/7W9UDvsbwh',
    twitter: 'https://twitter.com/oak_network',
    telegram: 'https://t.me/OAK_Announcements',
  },
  nodle: {
    subscanSubdomain: 'nodle',
    website: 'https://www.nodle.com/',
    github: 'https://github.com/NodleCode/chain',
    discord: 'https://discord.com/invite/N5nTUt8RWJ',
    twitter: 'https://twitter.com/NodleNetwork',
    telegram: 'https://t.me/nodlecommunity',
  },
  subsocial: {
    website: 'https://subsocial.network/',
    github: 'https://github.com/dappforce',
    discord: 'https://discord.com/invite/w2Rqy2M',
    twitter: 'https://twitter.com/SubsocialChain',
    telegram: 'https://t.me/SubsocialNetwork',
    apps: [
      {
        label: 'PolkaVerse',
        url: 'https://polkaverse.com/',
      },
      {
        label: 'Grill.chat',
        url: 'https://grill.chat/',
      },
    ],
  },
  invArch: {
    website: 'https://invarch.network/',
    github: 'https://github.com/InvArch/InvArch-node',
    discord: 'https://discord.com/invite/VjtyvR32Br',
    twitter: 'https://twitter.com/InvArchNetwork',
    telegram: 'https://t.me/InvArch',
  },


  efinity: {
    website: 'https://enjin.io/',
    github: 'https://github.com/enjin/claims-substrate',
    discord: 'https://discord.com/invite/qVA6uDr2f8',
    twitter: 'https://twitter.com/enjin',
    telegram: 'https://t.me/enjin',
  },
  composable: {
    website: 'https://www.composable.finance/',
    github: 'https://github.com/ComposableFi/',
    discord: 'https://discord.com/invite/composable',
    twitter: 'https://twitter.com/ComposableFin',
    telegram: 'https://t.me/ComposableFinanceAnnouncements',
    apps: [
      {
        label: 'Pablo',
        url: 'https://app.pablo.finance/'
      },
      {
        label: 'Picasso',
        url: 'https://app.picasso.xyz/'
      },
      {
        label: 'XCVM Tools',
        url: 'https://tools.xcvm.dev/'
      }
    ]
  },
  litentry: {
    website: 'https://www.litentry.com/',
    github: 'https://github.com/litentry/litentry-parachain',
    discord: 'https://discord.com/invite/M7T4y4skVD',
    twitter: 'https://twitter.com/litentry',
    telegram: 'https://t.me/Litentry',
  },
  unique: {
    website: 'https://unique.network/',
    github: 'https://github.com/UniqueNetwork',
    discord: 'https://discord.com/invite/jHVdZhsakC',
    twitter: 'https://twitter.com/Unique_NFTchain',
    telegram: 'https://t.me/Uniquechain',
  },
  equilibrium: {
    website: 'https://equilibrium.io/',
    github: 'https://github.com/equilibrium-eosdt/equilibrium-substrate-chain',
    discord: 'https://discord.com/invite/p2FmYuW5Hu',
    twitter: 'https://twitter.com/EquilibriumDeFi',
    telegram: 'https://t.me/equilibrium_eosdt_official',
    apps: [
      { url: 'https://app.equilibrium.io/' }
    ]
  },
  kylin: {
    website: 'https://www.kylin.network/',
    github: 'https://github.com/Kylin-Network/kylin-collator',
    discord: 'https://discord.com/invite/PwYCssr',
    twitter: 'https://twitter.com/Kylin_Network',
    telegram: 'https://t.me/KylinOfficial',
  },
  coinversation: {
    website: 'https://www.coinversation.io/',
    github: 'https://github.com/Coinversation/coinpro',
    twitter: 'https://twitter.com/Coinversation_',
    telegram: 'https://t.me/coinversationofficial',
    apps: [
      { label: 'Kako', url: 'https://www.kaco.finance/' }
    ]
  },
  manta: {
    website: 'https://manta.network',
    github: 'https://github.com/Manta-Network/Manta',
    discord: 'https://discord.com/invite/5khsf6QmCb',
    twitter: 'https://twitter.com/mantanetwork',
    telegram: 'https://t.me/mantanetwork',
    apps: [
      { url: 'https://app.manta.network/calamari/transact' }
    ]
  },
  subdao: {
    website: 'https://www.subdao.network',
    github: 'https://github.com/SubDAO-Network/subdao-node',
    twitter: 'https://twitter.com/subdao_network',
    telegram: 'https://t.me/subdao',
  },
  subGame: {
    website: 'https://subgame.org/',
    github: 'https://github.com/SubGame-Network',
    twitter: 'https://twitter.com/SubGame_Network',
    telegram: 'https://t.me/subgamenetwork',
  },
  geminis: {
    discord: 'https://discord.com/invite/zFS3Mnfpwj',
    telegram: 'https://t.me/ParaState',
  },
  gm: {
    website: 'https://www.gmordie.com',
    discord: 'https://discord.com/invite/JFzD2b5P2B',
    twitter: 'https://twitter.com/GmOrDie_',
    apps: [
      { url: 'https://app.gmordie.com/' }
    ]
  },
  genshiro: {
    website: 'https://genshiro.equilibrium.io/en',
    github: 'https://github.com/equilibrium-eosdt',
    twitter: 'https://twitter.com/GenshiroDeFi',
    discord: 'https://discord.com/invite/p2FmYuW5Hu',
    telegram: 'https://t.me/genshiro_official',
    apps: [
      { url: 'https://genshiro.equilibrium.io/gateway/en/deposit' }
    ]
  },
  bajun: {
    website: 'https://ajuna.io',
    github: 'https://github.com/ajuna-network/',
    discord: 'https://discord.com/invite/cE72GYcFgY',
    twitter: 'https://twitter.com/AjunaNetwork',
    telegram: 'https://t.me/ajunanetwork',
  },
  amplitude: {
    website: 'https://pendulumchain.org/amplitude',
    github: 'https://github.com/pendulum-chain/pendulum',
    discord: 'https://discord.com/invite/wJ2fQh776B',
    twitter: 'https://twitter.com/amplitude_chain',
    telegram: 'https://t.me/pendulum_chain',
  },
  listen: {
    github: 'https://github.com/listenofficial/listen-parachain',
    twitter: 'https://twitter.com/Listen_io',
    telegram: 'https://t.me/listengroup',
  },
  dora: {
    website: 'https://dorafactory.org',
    twitter: 'https://twitter.com/DoraFactory',
    telegram: 'https://t.me/dorafactory',
  },
  kabocha: {
    website: 'https://www.kabocha.network/?ref=parachains-info',
    discord: 'https://discord.com/invite/bDktqyj',
    telegram: 'https://t.me/heyedgeware',
  },
  pichiu: {
    website: 'https://www.kylin.network/',
    github: 'https://github.com/Kylin-Network/kylin-collator',
    discord: 'https://discord.com/invite/PwYCssr',
    twitter: 'https://twitter.com/Kylin_Network',
    telegram: 'https://t.me/KylinOfficial',
  },
  mangata: {
    website: 'https://x.mangata.finance',
    github: 'https://github.com/mangata-finance/mangata-node',
    discord: 'https://discord.com/invite/X4VTaejebf',
    twitter: 'https://twitter.com/MangataFinance',
    telegram: 'https://t.me/mgtfi',
    apps: [
      { url: 'https://app.mangata.finance/' }
    ]
  },
  tanganika: {
    website: 'https://www.datahighway.com',
    github: 'https://github.com/DataHighway-DHX/DataHighway-Parachain',
    discord: 'https://discord.com/invite/UuZN2tE',
    twitter: 'https://twitter.com/DataHighway_DHX',
  },
  imbue: {
    website: 'https://www.imbue.network',
    github: 'https://github.com/ImbueNetwork/imbue',
    discord: 'https://discord.com/invite/cVTEhDhVKs',
    twitter: 'https://twitter.com/ImbueNetwork',
    telegram: 'https://t.me/ImbueNetwork',
  },
  kico: {
    website: 'https://dico.io',
    github: 'https://github.com/DICO-TEAM/dico-chain',
    discord: 'https://discord.com/invite/V2MASPX3Ra',
    twitter: 'https://twitter.com/DICONetwork',
    telegram: 'https://t.me/dicochain',
    apps: [
      {
        label: 'Dico',
        url: 'https://app.dico.io/ico/'
      }
    ]
  },
  mars: {
    website: 'https://www.aresprotocol.io',
    github: 'https://github.com/aresprotocols/mars',
    discord: 'https://discord.com/invite/cqduK4ZNaY',
    twitter: 'https://twitter.com/AresProtocolLab',
    telegram: 'https://t.me/AresProtocolLab',
  },
  sakura: {
    website: 'https://clv.org/',
    github: 'https://github.com/clover-network/clover',
    discord: 'https://discord.com/invite/M6SxuXqMVB',
    twitter: 'https://twitter.com/clover_finance',
    telegram: 'https://t.me/clvorg',
  },
  sherpax: {
    website: 'https://chainx.org/en/',
    github: 'https://github.com/chainx-org/ChainX',
    twitter: 'https://twitter.com/chainx_org',
    telegram: 'https://t.me/chainx_org',
    apps: [
      {
        url: 'https://chainx.org/wallet'
      }
    ]
  },
  
}

export const resolveSubscanUrl = (network: string, address: string) => {
  const subdomain = linksByNetworks[network]?.subscanSubdomain

  return subdomain
    ? `https://${subdomain}.subscan.io/account/${address}`
    : undefined
}

export const statescanBaseUrl = 'https://statemine.statescan.io'

export const resolveStatescanUrl = (address: AnyAccountId) =>
  `${statescanBaseUrl}/account/${address}`

export const resolveStatescanAssetUrl = (assetId: number) =>
  `${statescanBaseUrl}/asset/${assetId}`

export const defaultContributionLink: Record<RelayChain, string> = {
  kusama:
    'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan',
  polkadot:
    'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/parachains/crowdloan',
}

export type ContributionInfo = {
  contribLink?: string
  refBonus?: string
  details?: React.ReactNode
  rewardPool?: string
}

type ContributionByNetwork = Record<string, ContributionInfo>

export const kusamaContributionInfoByNetwork: ContributionByNetwork = {
  subsocial: {
    rewardPool: '16.5%',
    refBonus: '15 SUB per KSM',
  },
  integritee: {
    contribLink: 'https://crowdloan.integritee.network/',
    rewardPool: '10%',
  },
  bitCountry: {
    contribLink:
      'https://ksmcrowdloan.bit.country/crowdloan?referralCode=EGGt1JS6HhKkSXq9P12BtmXiGwrGHaVxPtRrot8hDewz66Z',
    refBonus: '2.5%',
    rewardPool: '15%',
  },
  quartz: {
    contribLink: 'https://unique.network/quartz/crowdloan/contribute/',
    rewardPool: '8%',
  },
  picasso: {
    details: (
      <ol className={styles.DetailsList}>
        <li>
          Go to the{' '}
          <ExternalLink
            url='https://crowdloan.composable.finance/kusama'
            value='Picasso Contribution page'
          />
          .
        </li>
        <li>Click on the &quot;Connect wallet&quot; button.</li>
        <li>
          Select your Kusama account address and enter the amount you want to
          contribute.
        </li>
        <li>
          Enter this referral code:{' '}
          <span className={styles.ReferralCode}>{picassoRefCode}</span>
        </li>
        <li>
          Click on the &quot;Submit&quot; button near the referral code input.
        </li>
        <li>Click on the &quot;Contribute&quot; button.</li>
      </ol>
    ),
    rewardPool: '25%',
  },
  calamari: {
    rewardPool: '30%',
  },
  altair: {
    rewardPool: '15.8%',
  },
  basilisk: {
    rewardPool: '15%',
  },
  parallel: {
    rewardPool: '15%',
  },
  kilt: {
    rewardPool: '1.55%',
  },
  polkasmith: {
    rewardPool: '15%',
  },
  bifrost: {
    rewardPool: '13.5%',
  },
  genshiro: {
    rewardPool: '12.5%',
  },
  karura: {
    rewardPool: '11%',
  },
  khala: {
    rewardPool: '1.5%',
  },
  kintsugi: {
    rewardPool: '10%',
  },
  moonriver: {
    rewardPool: '30%',
  },
  shiden: {
    rewardPool: '22%',
  },
  shadow: {
    rewardPool: '20%',
  },
  robonomics: {
    rewardPool: '1.08%',
  },
  zeitgeist: {
    contribLink:
      'https://crowdloan.zeitgeist.pm/referral=RUdHdDFKUzZIaEtrU1hxOVAxMkJ0bVhpR3dyR0hhVnhQdFJyb3Q4aERld3o2Nlo=',
    refBonus: '5%',
    rewardPool: '12.5%',
  },
  //  sakura: {
  //    rewardPool: '1.5%'
  //  },
  sherpax: {
    rewardPool: '40%',
  },
  mars: {
    rewardPool: '30%',
  },
  mangata: {
    rewardPool: '14%',
  },
  litmus: {
    rewardPool: '1.5%',
  },
  kico: {
    rewardPool: '5%',
  },
  pichiu: {
    rewardPool: '10.5%',
  },
  turing: {
    rewardPool: '16%',
  },
  tanganika: {
    rewardPool: '0.3%',
  },
  invArch: {
    rewardPool: '15%',
  },
  kabocha: {
    rewardPool: '4.98%',
  },
  bajun: {
    rewardPool: '10%',
  },
  imbue: {
    rewardPool: '15%',
  },
  gm: {
    rewardPool: '30%',
  },
  amplitude: {
    rewardPool: '10%',
  },
}

export const polkadotContributionInfoByNetwork: ContributionByNetwork = {
  acala: {
    contribLink:
      'https://acala.network/acala/join-acala?ref=0x4ab52bb8245e545fc6b7861df6cf6a2db175f95c99f6b4b27e8f3bb3e9d10c4b',
    refBonus: '5%',
    rewardPool: '17%',
  },
  moonbeam: {
    contribLink: 'https://crowdloan.moonbeam.foundation/',
    rewardPool: '10%',
  },
  astar: {
    contribLink:
      'https://crowdloan.astar.network/?referral=12gxN2DdKhwsSKiuLKEyS6EgRJfG9vKTaWnAdSbXmWTyRFaG',
    rewardPool: '20%',
    refBonus: '1%',
  },
  litentry: {
    rewardPool: '20%',
  },
  parallel: {
    contribLink:
      'https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2012?referral=0x9fe857c39295267fa451e45337fd50658624b01b82f759d1e8843e43c16ed577',
    refBonus: '5%',
    rewardPool: '15%',
  },
  manta: {
    contribLink:
      'https://crowdloan.manta.network/?referral=4ab52bb8245e545fc6b7861df6cf6a2db175f95c99f6b4b27e8f3bb3e9d10c4b',
    refBonus: '2.5%',
    rewardPool: '15.6%',
  },
  clover: {
    rewardPool: '20%',
  },
  subdao: {
    rewardPool: '30%',
  },
  darwinia: {
    contribLink:
      'https://darwinia.network/plo_contribute?referral=12gxN2DdKhwsSKiuLKEyS6EgRJfG9vKTaWnAdSbXmWTyRFaG',
    refBonus: '5%',
    rewardPool: '9.84%',
  },
  subGame: {
    rewardPool: '6.8%',
  },
  efinity: {
    rewardPool: '10%',
  },
  phala: {
    rewardPool: '10%',
  },
  equilibrium: {
    rewardPool: '20%',
  },
  crust: {
    rewardPool: '5%',
  },
  hydra: {
    rewardPool: '10%',
  },
  coinversation: {
    rewardPool: '22.5%',
  },
  'nodle-polkadot': {
    rewardPool: '4.05%',
  },
  'polkadex-polkadot': {
    rewardPool: '10%',
  },
  unique: {
    rewardPool: '15%',
  },
  geminis: {
    rewardPool: '15%',
  },
  kylin: {
    rewardPool: '3.33%',
  },
}

export const contributionInfoByRelayChain: Record<
  RelayChain,
  ContributionByNetwork
> = {
  kusama: kusamaContributionInfoByNetwork,
  polkadot: polkadotContributionInfoByNetwork,
}
