export const apiURL =(process.env.NODE_ENV ==='production')
  ?'YOUR_URL_FOR_PROD'
  :(process.env.NODE_ENV ==='staging')
  ?'YOUR_URL_FOR_PROD'
  :'http://localhost:8080/YOUR_END_POINT'
