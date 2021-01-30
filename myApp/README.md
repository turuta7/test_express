#Test My app
#start: 
1) npm i
2) npm start

#endpoint: 
get /api/messages/list/:num (number "0"  0 - 10 messages;  "1" 11-20 messages; ....)
get /api/messages/single/:id  (id: id message => message);
post /api/messages  =>  body { email: string, text: string}
