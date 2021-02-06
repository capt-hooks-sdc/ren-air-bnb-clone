/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable quote-props */
import Web3 from 'web3';

async function run() {
  let web3;
  if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // check if metamask is running
    web3 = new Web3(window.web3.currentProvider);
  } else {
  // set up provider through infura
    const provider = new Web3.providers.HttpProvider(
    // pass url of remote node
      'https://ropsten.infura.io/v3/c1c8485a3ce345179fe01b6f404b6050',
    );
    web3 = new Web3(provider);
  }

  const address = '0xF04ae675563471C4a3483ECd6d89E131BB082a6f'; // use quotes!

  const abi = [
    {
      inputs: [
        {
          internalType: 'string',
          name: 'gg',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'gg2',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'gg3',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'gg4',
          type: 'bool',
        },
      ],
      name: 'addtodbhosts',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'gg1',
          type: 'uint256',
        },
        {
          internalType: 'string[]',
          name: 'gg2',
          type: 'string[]',
        },
        {
          internalType: 'uint256',
          name: 'gg10',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gg11',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gg12',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gg13',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gg14',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gg15',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'gg16',
          type: 'string',
        },
      ],
      name: 'addtodblodges',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'gg1',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'gg2',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'gg3',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gg4',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gg5',
          type: 'uint256',
        },
      ],
      name: 'addtodbreservs',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'filldb',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'bwh',
          type: 'string',
        },
      ],
      name: 'retrievehosts',
      outputs: [
        {
          components: [
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'image_url',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'superhost',
              type: 'bool',
            },
          ],
          internalType: 'struct Storage.Host',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'bwh',
          type: 'string',
        },
      ],
      name: 'retrievereservs',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lodgeid',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'datein',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'dateout',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'guestid',
              type: 'uint256',
            },
          ],
          internalType: 'struct Storage.Reserv',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'combs',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'bb1',
          type: 'string',
        },
      ],
      name: 'ourtest',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'bwh',
          type: 'string',
        },
      ],
      name: 'retrievelodges',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'city',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'country',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'description',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'state',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'stateabbrv',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'longitude',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'latitude',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'guests',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'bedrooms',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'baths',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'price',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'hostid',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'rating',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'image_url',
              type: 'string',
            },
          ],
          internalType: 'struct Storage.Lodge',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ];

  const myContract1 = new web3.eth.Contract(abi, address);

  const transaction = myContract1.methods.retrievelodges('d');
  // console.log(transaction);
  const options = {
    to: transaction._parent._address,
    data: transaction.encodeABI(),
    gas: await transaction.estimateGas({ from: '0xC1b54E64fDf1cF80728818CA00dA8eBdB07640b3' }),
  };
 const signedTransaction = await web3.eth.accounts.signTransaction(options, '8360dc7e9e856cfb4559aac68af7a7bdef9b4641845f5e28740b44864164d7e6');
  const transactionReceipt = await web3.eth.call(options);
 const trh = await transactionReceipt;

  // const v2 = await web3.eth.abi.decodeParameters(transaction._method.outputs);
  web3.eth.getTransaction(trh, (err, tx) => {
      // console.log(txt);
    // const tx_data = tx.input;

    const output_data = trh; // `0x${tx_data.slice(10)}`; // first 10 hexidecimal characters pertain to function selections

    const params = web3.eth.abi.decodeParameter({
 "Lodge": {
        "id": 'uint256',
        "city": 'string',
        "country": 'string',
        "description": 'string',
        "name": 'string',
        "state": 'string',
        "stateabbrv": 'string',
        "longitude": 'string',
        "latitude": 'string',
        "guests": 'uint256',
        "bedrooms": 'uint256',
        "baths": 'uint256',
        "price": 'uint256',
        "hostid": 'uint256',
        "rating": 'uint256',
        "image_url": 'string'
      }
    }, output_data);
    console.log(params);
  });

  return transactionReceipt;
}

run();
