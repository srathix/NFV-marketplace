
var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "cname",
				"type": "string"
			},
			{
				"name": "cid",
				"type": "uint256"
			},
			{
				"name": "caddr",
				"type": "address"
			}
		],
		"name": "commSimReg",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "uname",
				"type": "string"
			},
			{
				"name": "ulocation",
				"type": "string"
			},
			{
				"name": "uhwSpec",
				"type": "string"
			},
			{
				"name": "uswSpec",
				"type": "string"
			},
			{
				"name": "nid",
				"type": "uint256"
			}
		],
		"name": "hardwareReg",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "vnf_form",
				"type": "bool"
			},
			{
				"name": "nfvi_form",
				"type": "bool"
			},
			{
				"name": "comm_form",
				"type": "bool"
			},
			{
				"name": "name_form",
				"type": "string"
			}
		],
		"name": "registerOrg",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "vname",
				"type": "string"
			},
			{
				"name": "vdetails",
				"type": "string"
			},
			{
				"name": "vid",
				"type": "uint256"
			},
			{
				"name": "vaddr",
				"type": "address"
			}
		],
		"name": "vnfTypeReg",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "comm",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hwIndexes",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hwPlatforms",
		"outputs": [
			{
				"name": "location",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "hwSpec",
				"type": "string"
			},
			{
				"name": "swSpec",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "orgs",
		"outputs": [
			{
				"name": "vnf_provider",
				"type": "bool"
			},
			{
				"name": "nfvi_provider",
				"type": "bool"
			},
			{
				"name": "comm_service_provider",
				"type": "bool"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "orgsAddresses",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "vnfInstances",
		"outputs": [
			{
				"name": "hwId",
				"type": "uint256"
			},
			{
				"name": "vnfTypeId",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "details",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "vnfInstancesIndexes",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "vnfTypeIndexes",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "vnfTypes",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "details",
				"type": "string"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

eth.defaultAccount = eth.accounts[0];
var addr = "0xb903d0f0c568727f2e0ede6c61212a7f801fb7a4"; //Replace the value of 'addr' with your contract addresss
var nfvorg = eth.contract(abi).at(addr);



