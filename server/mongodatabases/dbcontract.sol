// SPDX-License-Identifier: GPL-3.0

pragma experimental ABIEncoderV2;
//pragma solidity >=0.7.0 <0.8.0;
contract Storage {

    //uint256 number;
   
    string[] public combs;
       string basedly='hello world';
       struct Host {  
      string name; 
      string image_url; 
      uint id; 
      bool superhost; 
   } 
   Host[] colle;
struct Lodge {
    uint id;
    string city;
    string country;
    string description;
    string name;
    string state;
    string stateabbrv;
    string longitude;
    string latitude;
    uint guests;
    uint bedrooms;
    uint baths;
    uint price;
    uint hostid;
    uint rating;
    string image_url;
}
Lodge[] lcolle;

struct Reserv {
    uint id;
    uint lodgeid;
    string datein;
    string dateout;
    uint guestid;
    
}
Reserv[] rcolle;
   
     function filldb() public  {
          Host memory book2  = Host("Building Ethereum DApps",  
            "Roberto Infante ",  
             2, false); 
             
      Host memory book1 = Host("Introducing Ethereum and Solidity",  
                   "Chris Dannen",  
                    1, true); 
                    colle.push(book1);
                    colle.push(book2);
      Lodge memory lodge1 = Lodge(1, 'San Jose', 'United States', 'This is a comfy little log cabin outside the cliffside village of Positano', 'ClubhouseBest', 'California', 'CA', 'sixty five', 'fourty eight', 4, 3, 3, 249, 1, 4, 'localhost:3000randomimage');
      lcolle.push(lodge1);
      Reserv memory reserv1 = Reserv(1, 1, 'December 5th 2019', 'December 8th 2019', 8);
      rcolle.push(reserv1);
     }
     
     
    function retrievehosts(string memory bwh) public payable returns (Host memory){
   for (uint i=0; i<colle.length; i++) {
       if (keccak256(bytes(colle[i].name)) == keccak256(bytes(bwh))) {
           //combs = [colle[i].name, colle[i].image_url];
           return colle[i];
       }
       
   }
       
        
        
        
    }
    
   
     function addtodbhosts (string memory gg, string memory gg2, uint gg3, bool gg4) public payable returns (string memory) {
        Host memory book1 = Host(gg,  
                  gg2,
                    gg3, gg4); 
                    colle.push(book1);
        return "Successfully added to hosts";
    }
    
    
        function retrievelodges(string memory bwh) public view  returns (Lodge memory){
   for (uint i=0; i<colle.length; i++) {
       if (keccak256(bytes(lcolle[i].name)) == keccak256(bytes(bwh))) {
           //combs = [lcolle[i].name, lcolle[i].image_url];
           return lcolle[i];
       }
       
   }
       
        
        
        
    }
    //string memory gg3, string memory gg4, string memory gg5, string memory gg6, string memory gg7, string memory gg8, string memory gg9,
   
     function addtodblodges (uint gg1, string[] memory gg2,  uint gg10, uint gg11, uint gg12, uint gg13, uint gg14, uint gg15, string memory gg16) public payable returns (string memory) {
            Lodge memory lodge1 = Lodge(gg1, gg2[0], gg2[1], gg2[2], gg2[3], gg2[4], gg2[5], gg2[6], gg2[7], gg10, gg11, gg12, gg13, gg14, gg15, gg16);
      lcolle.push(lodge1);
      return "Successfully added to lodges";
    }
   function retrievereservs(string memory bwh) public payable returns (Reserv memory){
   for (uint i=0; i<colle.length; i++) {
       if (keccak256(bytes(rcolle[i].datein)) == keccak256(bytes(bwh))) {
           //combs = [rcolle[i].datein, rcolle[i].dateout];
           return rcolle[i];
       }
       
   }
       
        
        
        
    }
    
   
     function addtodbreservs (string memory gg1, string memory gg2, uint gg3, uint gg4, uint gg5) public payable returns (string memory) {
       Reserv memory reserv1 = Reserv(gg4, gg3, gg2, gg1, gg5);
      rcolle.push(reserv1);
      return 'Successfuly added to reservations';
    }
    function ourtest (string memory bb1) public view returns (string memory){
        return 'Success1';
    }
}