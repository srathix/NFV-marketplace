pragma solidity ^0.5.7;

contract NfvMarketplace{

//The structure definitions below show the variable list for different entities that can be registered onto the network

    struct Organization{
		bool vnf_provider;
		bool nfvi_provider;
		bool comm_service_provider;
		string name;
		address addr;
	}

	struct HardwarePlatform{
		string location;
		string name;
		string hwSpec;
		string swSpec;
		uint id;
		address addr;
	}

	struct VnfType {
		string name;
		string details;
		uint id;
		address addr;
	}

	struct VnfInstance {
		uint hwId;
		uint vnfTypeId;
		string name;
		string details;
		uint id;
	}
	
	struct CommSP{
	    string name;
	    uint id;
	    address addr;
	}

    //The following mappings allow us to access different instances of the above structures by specifiying its address or its index number
	mapping(address => Organization)public orgs;
	mapping(uint => HardwarePlatform)public hwPlatforms;
	mapping(uint => VnfType)public vnfTypes;
	mapping(uint => VnfInstance)public vnfInstances;
	mapping(uint => CommSP)public comm;

	address[] public orgsAddresses;
	string[] public orgNames;
	uint[] public hwIndexes;
	uint[] public vnfTypeIndexes;
	uint[] public vnfInstancesIndexes;

	uint hwPlatformCounter;
	uint vnfTypeCounter;
	uint vnfInstanceCounter;
	
	//The following functions are to register yourself as a new organisation, VNF provider, or Commmuncation service provider. You can also register your hardware onto the platform as an organization

	//Register a new organization
	function registerOrg(bool vnf_form,bool nfvi_form,bool comm_form,string memory name_form)public returns(string memory)  {
	    
	    address addr_form = msg.sender;
				
		for(uint i=0;i<orgsAddresses.length;i++)		
		    require(orgsAddresses[i]!=msg.sender, "This organization is already registered on the platform.");
		
		orgs[addr_form].vnf_provider = vnf_form;
		orgs[addr_form].nfvi_provider = nfvi_form;
		orgs[addr_form].comm_service_provider = comm_form;
		orgs[addr_form].addr = addr_form;
		orgs[addr_form].name = name_form;
		orgsAddresses.push(addr_form);
		
		return name_form;
	    }
	    
		
	
	
	//returns the list of organisations
	function display(string memory value) public returns(string memory){
	    return value;
	}
	
	function list_org() public {
	for(uint i=0;i<orgsAddresses.length;++i)
      {
          orgNames[i] = orgs[orgsAddresses[i]].name;
          display(orgNames[i]);
          
      }
          
	}
	
	
	//Register your hardware as an organisation
	function hardwareReg(string memory uname,string memory ulocation,string memory uhwSpec,string memory uswSpec,uint nid) public 	{
	    
	   uint flag = 0;
		   for(uint i=0;i<orgsAddresses.length;i++){
		        
		    
		     if(orgsAddresses[i]==msg.sender){
		     	require(orgs[orgsAddresses[i]].nfvi_provider==true,"The organisation is not a nfvi_provider");
		     	
        		     	hwPlatforms[nid].name = uname;
                		hwPlatforms[nid].location = ulocation;
                		hwPlatforms[nid].hwSpec = uhwSpec;
                		hwPlatforms[nid].swSpec = uswSpec;
                		hwPlatforms[nid].id = nid;
        		        flag = 1;
			}
		    }
		    
		 require(flag==1, "Please register your organisation with the network.");
		 
		
				
		}
		
	
	//Register as a VNF provider
	function vnfTypeReg(string memory vname,string memory vdetails,uint vid)public {
	    
	    uint flag = 1;
	    //The following code is to check if the organisation is an VNF provider
	    	for(uint i=0;i<orgsAddresses.length;i++){
	    	    
	    	    
			    if(orgsAddresses[i] == msg.sender ){
				    require(orgs[orgsAddresses[i]].vnf_provider == true,"The organization is not a VNF provider.");
				    
                		vnfTypes[vid].name = vname;
                        vnfTypes[vid].details = vdetails;
                        vnfTypes[vid].id = vid;
                        vnfTypes[vid].addr = msg.sender;	
				        flag = 0;
			    }
		}
		
		    require(flag == 0, "Please register your organisation with the network.");
	}
	
	//Register as a communication service provider
	function commSPReg( string memory cname,uint cid)public {
	        
	        uint flag = 1;
	        
	        for(uint i=0;i<orgsAddresses.length;i++){

			    if(orgsAddresses[i] == msg.sender ){
			        require(orgs[orgsAddresses[i]].comm_service_provider == true,"The Org is not a communication service provider.");
					    
            			comm[cid].name = cname;
                	    comm[cid].id = cid;
                	    comm[cid].addr = msg.sender;
                	    flag = 0;
			    }
			        		
		    require(flag==0, "Please register your organisation with the network.");
		                 
				         
		}
	}
}
