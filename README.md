# Next.js socket proxy using http-proxy-middleware
Example repository showing potential limitation in utilising /api/[...catch_all_api_route].js as a proxy, if it involves websockets 

## How to test
1. install the dependencies
```
npm i
```
2. start the api server
```
npm run start:api
```
3. start the next.js without custom server
```
npm run dev
```
4. start the next.js with custom server 
```
npm run dev:server
```
5. Navigate to http://localhost:3003 (next.js without custom server) open developer console.You should see 3 logs ("first message", "bar", "second message"), now refresh the page. Notice there is only 1 message from the api server & an error ("invalid frame")
6. Navigate to http://localhost:3002 (next.js with custom server) open developer console. Notice there is 2 messages from the api server & no error message no matter how many times you refresh the application

