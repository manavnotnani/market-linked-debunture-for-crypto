/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { IAFactory } from "../IAFactory";

export class IAFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    trexFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IAFactory> {
    return super.deploy(trexFactory, overrides || {}) as Promise<IAFactory>;
  }
  getDeployTransaction(
    trexFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(trexFactory, overrides || {});
  }
  attach(address: string): IAFactory {
    return super.attach(address) as IAFactory;
  }
  connect(signer: Signer): IAFactory__factory {
    return super.connect(signer) as IAFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAFactory {
    return new Contract(address, _abi, signerOrProvider) as IAFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "trexFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_ia",
        type: "address",
      },
    ],
    name: "ImplementationAuthorityDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "deployIA",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ia",
        type: "address",
      },
    ],
    name: "deployedByFactory",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051612b30380380612b3083398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b612a9d806100936000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806352f1431b1461003b578063de87aeeb14610064575b600080fd5b61004e6100493660046104ca565b6100a0565b60405161005b91906104ee565b60405180910390f35b6100906100723660046104ca565b6001600160a01b031660009081526001602052604090205460ff1690565b604051901515815260200161005b565b6000805460408051632d5f118760e01b8152905133926001600160a01b031691632d5f11879160048083019260209291908290030181865afa1580156100ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010e9190610502565b6001600160a01b0316146101675760405162461bcd60e51b815260206004820152601c60248201527b6f6e6c79207265666572656e63652049412063616e206465706c6f7960201b604482015260640160405180910390fd5b600080336001600160a01b0316632c5d4f8e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cc9190610502565b306040516101d9906104a5565b92151583526001600160a01b039182166020840152166040820152606001604051809103906000f080158015610213573d6000803e3d6000fd5b509050806001600160a01b0316630f3ca8ca336001600160a01b031663fabec44a6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610263573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102879190610535565b6040518263ffffffff1660e01b81526004016102a391906105ae565b600060405180830381600087803b1580156102bd57600080fd5b505af11580156102d1573d6000803e3d6000fd5b50505050806001600160a01b031663f38d2491336001600160a01b031663fabec44a6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610322573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103469190610535565b6040518263ffffffff1660e01b815260040161036291906105ae565b600060405180830381600087803b15801561037c57600080fd5b505af1158015610390573d6000803e3d6000fd5b50505050806001600160a01b031663f2fde38b846001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104059190610502565b6040518263ffffffff1660e01b815260040161042191906104ee565b600060405180830381600087803b15801561043b57600080fd5b505af115801561044f573d6000803e3d6000fd5b505050506001600160a01b0381166000818152600160208190526040808320805460ff1916909217909155517f37ea3036943d4133847a61180abdc134103db7e6a69cf0c4e2dbbda8827b0d909190a292915050565b612490806105d883390190565b6001600160a01b03811681146104c757600080fd5b50565b6000602082840312156104dc57600080fd5b81356104e7816104b2565b9392505050565b6001600160a01b0391909116815260200190565b60006020828403121561051457600080fd5b81516104e7816104b2565b805160ff8116811461053057600080fd5b919050565b60006060828403121561054757600080fd5b604051606081016001600160401b038111828210171561057757634e487b7160e01b600052604160045260246000fd5b6040526105838361051f565b81526105916020840161051f565b60208201526105a26040840161051f565b60408201529392505050565b815160ff908116825260208084015182169083015260409283015116918101919091526060019056fe60806040523480156200001157600080fd5b506040516200249038038062002490833981016040819052620000349162000173565b6200003f3362000106565b600380546001600160a81b031916841515610100600160a81b03198116919091176101006001600160a01b0386811691820292909217909355600480546001600160a01b0319169185169190911790556040805191825260208201929092527f2a6aba4ff896a38777fb29a590abf5d340a4ba64314bcadf68be9c3ee92b485a910160405180910390a16040516001600160a01b038216907f5fb25b36f93b3d8443f7502abdc1157f581f15db724459ffb2800fce6132a00890600090a2505050620001c3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200016e57600080fd5b919050565b6000806000606084860312156200018957600080fd5b835180151581146200019a57600080fd5b9250620001aa6020850162000156565b9150620001ba6040850162000156565b90509250925092565b6122bd80620001d36000396000f3fe608060405234801561001057600080fd5b50600436106101075760003560e01c80630f3ca8ca1461010c5780631320a65a146101215780631ee9ce8b1461013c5780632c5d4f8e1461015157806361f89825146101675780636df237891461016f5780636ff6e83f14610182578063709bc7f31461018a578063715018a61461019257806371673bd01461019a5780637f82a5e7146101ad5780638da5cb5b146101c05780639585548a146101c85780639e3e7bb9146101db578063afce4bea146101e3578063cd24be2214610251578063cf49020e14610259578063f2fde38b1461026c578063f38d24911461027f578063fabec44a14610292578063fedcc05214610311575b600080fd5b61011f61011a366004611d0a565b610319565b005b60035460ff1660405190151581526020015b60405180910390f35b6101446105ea565b6040516101339190611d2d565b60035461010090046001600160a01b0316610144565b61014461064c565b61011f61017d366004611d56565b6106ae565b6101446107a8565b61014461080a565b61011f610869565b61011f6101a8366004611d73565b61087d565b61011f6101bb366004611db4565b610894565b6101446114a7565b61011f6101d6366004611d73565b6114b6565b610144611712565b6101f66101f1366004611d0a565b611774565b604051610133919081516001600160a01b03908116825260208084015182169083015260408084015182169083015260608084015182169083015260808084015182169083015260a092830151169181019190915260c00190565b61014461182c565b61011f610267366004611d56565b6118aa565b61011f61027a366004611d56565b6119a2565b61011f61028d366004611d0a565b611a1b565b6102e56040805160608101825260008082526020820181905291810191909152506040805160608101825260015460ff808216835261010082048116602084015262010000909104169181019190915290565b60408051825160ff90811682526020808501518216908301529282015190921690820152606001610133565b610144611b91565b60035460ff161561037b5760405162461bcd60e51b815260206004820152602160248201527f63616e6e6f742063616c6c206f6e207265666572656e636520636f6e747261636044820152601d60fa1b60648201526084015b60405180910390fd5b600060028161039761039236869003860186611e32565b611bf3565b81526020810191909152604001600020546001600160a01b0316146103f85760405162461bcd60e51b815260206004820152601760248201527676657273696f6e206665746368656420616c726561647960481b6044820152606401610372565b61040061182c565b6001600160a01b031663afce4bea826040518263ffffffff1660e01b815260040161042b9190611e86565b60c060405180830381865afa158015610448573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046c9190611ece565b6002600061048261039236869003860186611e32565b815260208082019290925260409081016000908120845181546001600160a01b03199081166001600160a01b039283161783559486015160018301805487169183169190911790559285015160028083018054871692861692909217909155606086015160038301805487169186169190911790556080860151600483018054871691861691909117905560a0909501516005909101805490941692169190911790915561053861039236859003850185611e32565b81526020019081526020016000206040516105a1919081546001600160a01b03908116825260018301548116602083015260028301548116604083015260038301548116606083015260048301548116608083015260059092015490911660a082015260c00190565b6040518091039020816040516105b79190611f86565b604051908190038120907f5846080f2085e3dfad8cb250efdba145f8982d2e81ba7f74478da7fab659322b90600090a350565b6040805160608101825260015460ff8082168352610100820481166020840152620100009091041691810191909152600090600290829061062a90611bf3565b81526020810191909152604001600020600201546001600160a01b0316919050565b6040805160608101825260015460ff8082168352610100820481166020840152620100009091041691810191909152600090600290829061068c90611bf3565b81526020810191909152604001600020600501546001600160a01b0316919050565b6106b6611c43565b60035460ff16801561073a5750306001600160a01b0316816001600160a01b0316632d5f11876040518163ffffffff1660e01b8152600401602060405180830381865afa15801561070b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072f9190611fcd565b6001600160a01b0316145b6107565760405162461bcd60e51b815260040161037290611fea565b60038054610100600160a81b0319166101006001600160a01b038416908102919091179091556040517ff068c7797c3b666af662a0e2f018804080dc37610a1b82b55006872b06d30ef590600090a250565b6040805160608101825260015460ff808216835261010082048116602084015262010000909104169181019190915260009060029082906107e890611bf3565b81526020810191909152604001600020600101546001600160a01b0316919050565b6040805160608101825260015460ff8082168352610100820481166020840152620100009091041691810191909152600090600290829061084a90611bf3565b81526020810191909152604001600020546001600160a01b0316919050565b610871611c43565b61087b6000611ca2565b565b61088782826114b6565b61089082611a1b565b5050565b6001600160a01b0382166108ba5760405162461bcd60e51b81526004016103729061201f565b6001600160a01b0381161580156108d4575060035460ff16155b156109345760405162461bcd60e51b815260206004820152602a60248201527f6f6e6c79207265666572656e636520636f6e74726163742063616e206465706c6044820152696f79206e65772049417360b01b6064820152608401610372565b6000826001600160a01b031663134e18f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610974573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109989190611fcd565b90506000836001600160a01b0316636290865d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fe9190611fcd565b90506000826001600160a01b031663f11abfd86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a649190611fcd565b90506000836001600160a01b0316633b3e12f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610aa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aca9190611fcd565b90506000846001600160a01b031663b4f3fcb76040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b309190611fcd565b9050336001600160a01b0316876001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9e9190611fcd565b6001600160a01b0316141580610c275750336001600160a01b0316856001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bf7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1b9190611fcd565b6001600160a01b031614155b80610ca55750336001600160a01b0316846001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c999190611fcd565b6001600160a01b031614155b80610d235750336001600160a01b0316836001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cf3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d179190611fcd565b6001600160a01b031614155b80610da15750336001600160a01b0316826001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d959190611fcd565b6001600160a01b031614155b80610e1f5750336001600160a01b0316816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610def573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e139190611fcd565b6001600160a01b031614155b15610e7f5760405162461bcd60e51b815260206004820152602a60248201527f63616c6c6572204e4f54206f776e6572206f6620616c6c20636f6e74726163746044820152691cc81a5b5c1858dd195960b21b6064820152608401610372565b6001600160a01b038616610f0657600480546040516352f1431b60e01b81526001600160a01b03909116916352f1431b91610ebc918b9101611d2d565b6020604051808303816000875af1158015610edb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eff9190611fcd565b95506111af565b6040805160608101825260015460ff8082168352610100820481166020840152620100009091041691810191909152610f3e90611bf3565b610fa3876001600160a01b031663fabec44a6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610f7f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103929190612056565b1461100b5760405162461bcd60e51b815260206004820152603260248201527f76657273696f6e206f66206e65772049412068617320746f206265207468652060448201527173616d652061732063757272656e7420494160701b6064820152608401610372565b856001600160a01b0316631320a65a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611049573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106d919061209e565b8015611092575061107c61182c565b6001600160a01b0316866001600160a01b031614155b156110df5760405162461bcd60e51b815260206004820181905260248201527f6e6577204941206973204e4f54207265666572656e636520636f6e74726163746044820152606401610372565b6004805460405163de87aeeb60e01b81526001600160a01b039091169163de87aeeb9161110e918a9101611d2d565b602060405180830381865afa15801561112b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114f919061209e565b158015611175575061115f61182c565b6001600160a01b0316866001600160a01b031614155b156111af5760405162461bcd60e51b815260206004820152600a602482015269696e76616c696420494160b01b6044820152606401610372565b6040516392dd9d6560e01b81526001600160a01b038816906392dd9d65906111db908990600401611d2d565b600060405180830381600087803b1580156111f557600080fd5b505af1158015611209573d6000803e3d6000fd5b50506040516392dd9d6560e01b81526001600160a01b03881692506392dd9d659150611239908990600401611d2d565b600060405180830381600087803b15801561125357600080fd5b505af1158015611267573d6000803e3d6000fd5b50506040516392dd9d6560e01b81526001600160a01b03871692506392dd9d659150611297908990600401611d2d565b600060405180830381600087803b1580156112b157600080fd5b505af11580156112c5573d6000803e3d6000fd5b50506040516392dd9d6560e01b81526001600160a01b03851692506392dd9d6591506112f5908990600401611d2d565b600060405180830381600087803b15801561130f57600080fd5b505af1158015611323573d6000803e3d6000fd5b50506040516392dd9d6560e01b81526001600160a01b03841692506392dd9d659150611353908990600401611d2d565b600060405180830381600087803b15801561136d57600080fd5b505af1158015611381573d6000803e3d6000fd5b50505050306001600160a01b0316836001600160a01b0316632d5f11876040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f19190611fcd565b6001600160a01b03160361145e576040516392dd9d6560e01b81526001600160a01b038416906392dd9d659061142b908990600401611d2d565b600060405180830381600087803b15801561144557600080fd5b505af1158015611459573d6000803e3d6000fd5b505050505b856001600160a01b0316876001600160a01b03167ff79ab4f8584958d3168dac16d1d96119f728316536f50639339b4202837051c860405160405180910390a350505050505050565b6000546001600160a01b031690565b6114be611c43565b60035460ff166115215760405162461bcd60e51b815260206004820152602860248201527f4f4e4c59207265666572656e636520636f6e74726163742063616e206164642060448201526776657273696f6e7360c01b6064820152608401610372565b600060028161153861039236879003870187611e32565b81526020810191909152604001600020546001600160a01b0316146115985760405162461bcd60e51b815260206004820152601660248201527576657273696f6e20616c72656164792065786973747360501b6044820152606401610372565b60006115aa6040830160208401611d56565b6001600160a01b0316141580156115da575060006115ce6060830160408401611d56565b6001600160a01b031614155b80156115ff575060006115f36080830160608401611d56565b6001600160a01b031614155b80156116245750600061161860c0830160a08401611d56565b6001600160a01b031614155b80156116495750600061163d60a0830160808401611d56565b6001600160a01b031614155b801561166b5750600061165f6020830183611d56565b6001600160a01b031614155b6116875760405162461bcd60e51b81526004016103729061201f565b806002600061169e61039236879003870187611e32565b815260200190815260200160002081816116b891906120e0565b50506040516116c8908290612186565b6040518091039020826040516116de9190611f86565b604051908190038120907faecad55510e8cbc2b82b73c5c6d78c169403cb719460198f517d41cf7700b71b90600090a35050565b6040805160608101825260015460ff8082168352610100820481166020840152620100009091041691810191909152600090600290829061175290611bf3565b81526020810191909152604001600020600301546001600160a01b0316919050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152600260006117bc61039236869003860186611e32565b81526020808201929092526040908101600020815160c08101835281546001600160a01b039081168252600183015481169482019490945260028201548416928101929092526003810154831660608301526004810154831660808301526005015490911660a082015292915050565b6000600360019054906101000a90046001600160a01b03166001600160a01b0316632d5f11876040518163ffffffff1660e01b8152600401602060405180830381865afa158015611881573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118a59190611fcd565b905090565b6118b2611c43565b60035460ff16801561193c575060035460408051632d5f118760e01b81529051309261010090046001600160a01b031691632d5f11879160048083019260209291908290030181865afa15801561190d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119319190611fcd565b6001600160a01b0316145b6119585760405162461bcd60e51b815260040161037290611fea565b600480546001600160a01b0319166001600160a01b0383169081179091556040517f5fb25b36f93b3d8443f7502abdc1157f581f15db724459ffb2800fce6132a00890600090a250565b6119aa611c43565b6001600160a01b038116611a0f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610372565b611a1881611ca2565b50565b611a23611c43565b6040805160608101825260015460ff8082168352610100820481166020840152620100009091041691810191909152611a5b90611bf3565b611a6d61039236849003840184611e32565b03611ab35760405162461bcd60e51b815260206004820152601660248201527576657273696f6e20616c726561647920696e2075736560501b6044820152606401610372565b6000600281611aca61039236869003860186611e32565b81526020810191909152604001600020546001600160a01b031603611b415760405162461bcd60e51b815260206004820152602760248201527f696e76616c696420617267756d656e74202d206e6f6e206578697374696e67206044820152663b32b939b4b7b760c91b6064820152608401610372565b806001611b4e828261221a565b5050604051611b5e908290611f86565b604051908190038120907f0a46bc1766225d5a82bc50155575dc428902e93470e34ceaf7e0faae128fe0ab90600090a250565b6040805160608101825260015460ff80821683526101008204811660208401526201000090910416918101919091526000906002908290611bd190611bf3565b81526020810191909152604001600020600401546001600160a01b0316919050565b805160208083015160409384015184516001600160f81b031960f895861b81168286015292851b83166021820152931b166022830152825180830360030181526023909201909252805191012090565b33611c4c6114a7565b6001600160a01b03161461087b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610372565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060608284031215611d0457600080fd5b50919050565b600060608284031215611d1c57600080fd5b611d268383611cf2565b9392505050565b6001600160a01b0391909116815260200190565b6001600160a01b0381168114611a1857600080fd5b600060208284031215611d6857600080fd5b8135611d2681611d41565b600080828403610120811215611d8857600080fd5b611d928585611cf2565b925060c0605f1982011215611da657600080fd5b506060830190509250929050565b60008060408385031215611dc757600080fd5b8235611dd281611d41565b91506020830135611de281611d41565b809150509250929050565b604051606081016001600160401b0381118282101715611e1d57634e487b7160e01b600052604160045260246000fd5b60405290565b60ff81168114611a1857600080fd5b600060608284031215611e4457600080fd5b611e4c611ded565b8235611e5781611e23565b81526020830135611e6781611e23565b60208201526040830135611e7a81611e23565b60408201529392505050565b606081018235611e9581611e23565b60ff1682526020830135611ea881611e23565b60ff1660208301526040830135611ebe81611e23565b60ff811660408401525092915050565b600060c08284031215611ee057600080fd5b60405160c081016001600160401b0381118282101715611f1057634e487b7160e01b600052604160045260246000fd5b6040528251611f1e81611d41565b81526020830151611f2e81611d41565b60208201526040830151611f4181611d41565b60408201526060830151611f5481611d41565b60608201526080830151611f6781611d41565b608082015260a0830151611f7a81611d41565b60a08201529392505050565b60008235611f9381611e23565b60ff1682526020830135611fa681611e23565b60ff1660208301526040830135611fbc81611e23565b60ff16604083015250606001919050565b600060208284031215611fdf57600080fd5b8151611d2681611d41565b6020808252818101527f6f6e6c79207265666572656e636520636f6e74726163742063616e2063616c6c604082015260600190565b6020808252601f908201527f696e76616c696420617267756d656e74202d207a65726f206164647265737300604082015260600190565b60006060828403121561206857600080fd5b612070611ded565b825161207b81611e23565b8152602083015161208b81611e23565b60208201526040830151611e7a81611e23565b6000602082840312156120b057600080fd5b81518015158114611d2657600080fd5b80546001600160a01b0319166001600160a01b0392909216919091179055565b81356120eb81611d41565b6120f581836120c0565b50602082013561210481611d41565b61211181600184016120c0565b50604082013561212081611d41565b61212d81600284016120c0565b50606082013561213c81611d41565b61214981600384016120c0565b50608082013561215881611d41565b61216581600484016120c0565b5060a082013561217481611d41565b61218181600584016120c0565b505050565b6000823561219381611d41565b6001600160a01b0390811683526020840135906121af82611d41565b90811660208401526040840135906121c682611d41565b90811660408401526060840135906121dd82611d41565b90811660608401526080840135906121f482611d41565b908116608084015260a08401359061220b82611d41565b1660a08301525060c001919050565b813561222581611e23565b60ff8116905081548160ff198216178355602084013561224481611e23565b61ff008160081b169050808361ffff19841617178455604085013561226881611e23565b62ff00008160101b168462ffffff19851617831717855550505050505056fea264697066735822122036dfca4376f3c7a0e0aacb57b1b979901de725d7aa782d98fc24dc3c16587e8764736f6c63430008110033a264697066735822122033d3b5357a54dff69ed8b9f6984153481a5e4024ac0d5f93cf027e0c69d3a23b64736f6c63430008110033";