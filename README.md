# chomchob-backend-testing
 - [Programming](#programming)
 - [Database](#database)

## Programming
 **Technical**
   - Typescript
   - nodeJS (express, https, mariadb, winston etc.)
   - MariaDB engine on AWS(RDS) 
   - Docker hub 
   - container docker run on AWS(EC2)  
     - [source code](https://github.com/Jitrapon1764/chomchob-backend-testing/tree/master/programming)    
     - [postman collection and environment](https://github.com/Jitrapon1764/chomchob-backend-testing/tree/master/postman)
     >run on local requires .env file (contact me)  

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
  - Admin can get all user 
      ```
        Postman-collection: user/get-user-all  
        Method: GET
        
        Url: https://{{ip}}:{{port}}/user/all
      ``` 
  - Admin can get user market value 
     >calculate from multiply of volume of cryptocurrency and cryptocurrency current price 
      ```
        Postman-collection: user/get-user-market-value  
        Method: GET
        
        Url: https://{{ip}}:{{port}}/user/market-value?id_user=${id_user}
      ```   
  - Admin can edit volume of cryptocurrency in user wallet
      ```
        Postman-collection: user/edit-user-crypto-volume  
        Method: PUT
        
        Url: https://{{ip}}:{{port}}/user/crypto-volume?id_user=${id_user}
        body:{
            "id_crypto": $string,
            "volume": $declmal
        }
      ```        
  - Admin can increase and decrease user cryptocurrency balance.  
      ```
        Postman-collection: user/edit-user-balance
        Method: PUT
        
        Url: https://{{ip}}:{{port}}/user/balance?id=${id_user}
        body:{
             "balance": $string,
        }
      ```
  - Admin can see all total balance of all cryptocurrency.
      >get all cryptocurrency in market 
      ```
        Postman-collection: crypto/get-crypto 
        Method: GET
        
        Url: https://{{ip}}:{{port}}/crypto
      ```   
      >get total volume of cryptocurrency in market 
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
   [ Database in form of model from sequelize.](https://github.com/Jitrapon1764/chomchob-backend-testing/tree/master/database)
## Entity Relationship Diagram
 ![ERD](https://github.com/Jitrapon1764/chomchob-backend-testing/blob/master/database/Database%20ER%20diagram.jpeg)
 
## Description 
 * **user**  
   เป็น table ที่ประกอบไปด้วยข้อมูลส่วนตัวของผู้ใช้ เช่น ชื่อ,วันเดือนปีเกิดม,email,username,password  
   แต่เบื้องต้นเพื่อให้เข้าใจง่าย ผมจะใช้แค่รหัสผู้ใช้(id)และชื่อผู้ใช้(name) ซึ่งมีรหัสผู้ใช้เป็น primary-key  
   
 * **item**  
   เป็น table ที่เก็บข้อมูลของสินค้าต่างๆซึ้งประกอบไปด้วย รหัสสินค้า(id), ชื่อสินค้า(name), รายละเอียดสินค้า(description), ราคาขาย(price), วันที่เปิดขาย(start_date) และวันที่เลิกขาย(expire_date)  
   ซึ่งมีรหัสสินค้าเป็น primary-key  
   
 * **orders**  
   เป็น table ที่เกิดจากความสัมพันธ์ของ table user และ table item หรือเรียกว่า Composite Entity ซึงจะเก็บคำสั่งซื้อต่างๆของผู้ใช้เอาไว้ใน table นี้ 
   โดยจะเก็บ รหัสคำสั่งซื้อ(id), รหัสสินค้า(id_item), รหัสผู้ใช้(id_user), โค้ด(code)และเวลาที่ซื้อ(purchase_time) ซึ่งมีรหัสการสั่งซื้อเป็น primary-key และมีรหัสสินค้า รหัสผู้ใช้เป็น foreign-key  
   >code จะสร้างขึ้นมาหลังจากที่ผู้ใช้ทำการสั่งซื้อสินค้าสำเร็จ  
      
 * **promotion**  
   เป็น table ที่เก็บข้อมูลของโปรโมชั่นโดยจะมี รหัสโปรโมชั่น(id), ชื่อโปรโมชั่น(name), รายละเอียดโปรโมชั่น(description), รหัสสินค้าที่ร่วมโปรโมชั่น(id_item), 
   วันเริ่มของโปรโมชั่น(start_date), วันหมดอายุของโปรโมชั่น(expire_date) และชนิดของโปรโมชั่น(type) ซึ่งมีรหัสโปรโมชั่นเป็น primary-key และมีรหัสสินค้า foreign-key
   >ชนิดของโปรโมชั่น(type) คือค่าที่จะบอกว่าโปรโมชั่นนั้นๆเป็นโปรโมชั่นแบบไหน เช่น item:A ,type:discount แสดงว่าสินค้า A มีโปรโมชั่นส่วนลด ซึ่ง type เบื้องต้นจะมีอยู่ด้วยกันสามประเภท
   >ซึ่ง type เบื้องต้นจะมีอยู่ด้วยกันสามประเภท คือ ส่วนลด(discount),สินค้าเป็นเซต(set),กล่องสุ่ม(random)
   >  - สินค้าที่มี type เป็น set และ random อาจจะต้องสร้าง table หรือ view เพิ่ม เพื่อทำการ group สินค้าที่ถูกจัดอยู่ในกลุ่มเดียวกัน
   
 
