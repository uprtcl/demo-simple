const peerPath = `/dns4/localhost/tcp/4003/ws/p2p`;
const peerId = 'QmbcMzhHfDjHoUaHETq2PkipAE6QvP2wos13AubnVGCM8R';
const env = {
  entry: './src/index.eth.http.js',
  officialRemote: 'eth',
  http: {
    host: 'http://localhost:3100/uprtcl/1',
  },
  pinner: {
    url: 'http://localhost:3200',
    Swarm: [],
    Bootstrap: [`${peerPath}/${peerId}`],
    peerMultiaddr: `${peerPath}/${peerId}`,
  },
  ethers: {
    apiKeys: {
      etherscan: '6H4I43M46DJ4IJ9KKR8SFF1MF2TMUQTS2F',
      infura: '73e0929fc849451dae4662585aea9a7b',
    },
    // provider: "",
    provider: 'https://xdai.poanetwork.dev',
  },
};

// const peerPath = `/dns4/pinner.intercreativity.io/tcp/4003/wss/p2p`;
// const peerId = 'QmVD8LC6vjAHaDgsLySc86BVbnb256LuRZqsWtK5toABsc';

// const env = {
//   entry: './src/index.eth.http.js',
//   officialRemote: 'eth',
//   http: {
//     host: 'http://localhost:3100/uprtcl/1',
//   },
//   pinner: {
//     url: 'https://apps.intercreativity.io:3000',
//     Swarm: [],
//     Bootstrap: [`${peerPath}/${peerId}`],
//     peerMultiaddr: `${peerPath}/${peerId}`,
//   },
//   ethers: {
//     apiKeys: {
//       etherscan: '6H4I43M46DJ4IJ9KKR8SFF1MF2TMUQTS2F',
//       infura: '73e0929fc849451dae4662585aea9a7b',
//     },
//     provider: 'https://xdai.poanetwork.dev',
//   },
// };

module.exports = {
  env,
};
