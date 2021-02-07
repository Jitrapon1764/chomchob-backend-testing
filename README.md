# chomchob-backend-testing
 - [Programming](#programming)
 - [Database](#Database)

## Programming

This simple wallet api project running on AWS EC2 

### Ability of simple wallet
  - Admin can create user 
      ```
        Postman-collection: user/create-user  
        Method: POST
        
        Url: https://{{ip}}:{{port}}/user
        body:{
            "name":$string,
        }
      ``` 
  - Admin can increase and decrease user cryptocurrency balance.  
      >edit user's volume of cryptocurrency for increase and decrease user cryptocurrency balance  
      ```
        Postman-collection: user-crypto/update-user-volume 
        Method: PUT
        
        Url: https://{{ip}}:{{port}}/user-crypto?id={$id_user}
        body:{
             "id_crypto": $string,
             "volume": $decimal
        }
      ```
  - Admin can see all total balance of all cryptocurrency.
      >get all cryptocurrency in market 
      ```
        Postman-collection: crypto/get-crypto 
        Method: GET
        
        Url: https://{{ip}}:{{port}}/crypto
      ```   
      >get all volume of cryptocurrency in market 
      ```
        Postman-collection: crypto/get-crypto-volume  
        Method: GET
        
        Url: https://{{ip}}:{{port}}/crypto/volume/?name=${name-crypto}
        
      ``` 
  - Admin can add other cryptocurrency such XRP, EOS, XLM to wallet.
      ```
        Postman-collection: crypto/create-crypto
        Method: POST
        
        Url: https://{{ip}}:{{port}}/crypto
        body:{
            "name":$string,
            "price":$decimal
        }
      ```
  - Admin can manage exchange rate between cryptocurrency.
      >rate between cryptocurrency calculate from ratio price of both cryptocurrency  
      >  **Example**  
      >  price of 1 BTC = 1000 usd  
      >  price of 1 ETH = 20 usd  
      >  ratio BTC/ETH = 50  
      >  ratio ETH/BTC = 0.02  
      >  - therefore admin must edit price of cryptocurrency for manage rate exchange, such url below
      ```
        Postman-collection: crypto/update-crypto
        Method: PUT
        
        Url: https://{{ip}}:{{port}}/crypto?id=${id_crypto}
        body:{
            "price":$decimal
        }
        
      ```   
  - User can transfer cryptocurrency to other with difference currency such ETH to BTC with exchange rate.
      >When users agreed to the exchange, admin calls this api to indicate the result
      ```
        Postman-collection: user/user-transfer-crypto
        Method: POST
        
        Url: https://{{ip}}:{{port}}/user/crypto-transfer
        body:{
              "offer_val":$decimal,
              "offer_name":$string,
              "target_name":$string"
        }
# Database
**Entity Relationship Diagram**
 ![ERD](https://github.com/Jitrapon1764/chomchob-backend-testing/blob/master/database/Database%20ER%20diagram.jpeg)
