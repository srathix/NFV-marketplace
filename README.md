# NFV_Marketplace

# Interfacing with the NFV_Marketplace smart contract

A step by step guide to use the various functions from the smart contract to interact with the blockchain. 

## Initialisation

Run the provided script file named startminer.sh. 


```bash
$user/NFV_Marketplace chmod +x startminer.sh
```

```bash
$user/NFV_Marketplace ./startminer.sh
```
In the subsequent terminal window, enter 

```bash
miner.start()
```
This will start mining and creating new blocks. 

## Usage

```bash
loadScript("nfv.js")
```
The created object will be 'nfvorg' through which we can access the functions of the smart contract.
The following functions can be accessed through the object - nfvorg :

```bash
//This is to register a new organisation
nfvorg.registerOrg(bool vnf_form,bool nfvi_form,bool comm_form,string memory name_form) 

//This is to register the hardware possessed by an organisation
nfvorg.hardwareReg(string memory uname,string memory ulocation,string memory uhwSpec,string memory uswSpec,uint nid)

//This is to register the VNF Type of an organisation
nfvorg.vnfTypeReg(string memory vname,string memory vdetails,uint vid,address vaddr)

//This is used to register a Communication Service Provider
nfvorg.commSimReg( string memory cname,uint cid,address caddr)
```

