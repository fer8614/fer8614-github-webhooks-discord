
# How to execute 

1. Clone repository
2. Clone .env.template a .env
3. Execute `npm install`
4. Create webhook in Discord account
5. Create a secret token for GitHub one way to generate it can place it in our terminal 
   `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'`
   As a requirement, you must have ruby installed to be able to generate the token
4. Execute `npm run dev`