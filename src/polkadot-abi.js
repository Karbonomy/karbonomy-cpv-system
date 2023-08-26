const { ApiPromise, WsProvider } = require('@polkadot/api');
const { ContractPromise } = require('@polkadot/api-contract');
const abi = require('./abi/metadata.json');

const wsProvider = new WsProvider('ws://127.0.0.1:9944');
const smartcontract_address = "5EnrFDp8krurvP3L7jyzNcpU2tYsFSr4aaDdGNYf4Zbetdv7";

export async function callMintFunction(walletAddress) {
  const _api = await ApiPromise.create({ provider: wsProvider });
  const contract = new ContractPromise(_api, abi, smartcontract_address);
  console.log(contract.query)

  // const value = 0; // only useful on isPayable messages

  // const gasLimit = 3000n * 10000000000000000000000000n;
  const fromAddress = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty'
  // const targetAddress = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

  try {
    if (!contract) {
      console.error('Contract is not initialized yet.');
      return;
    }
    const { result } = await contract.query.totalSupply(fromAddress, { gasLimit: 3000n * 1000000n })
    if (result.isOk) {
      console.log('function executed successfully');
    } else {
      console.log(result.asErr.toHuman())
      console.log('error')
    }
  } catch (error) {
    console.error('Error calling function:', error);
  }
}

