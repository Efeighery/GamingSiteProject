sudo apt update && sudo apt install nodejs npm

sudo npm install -g pm2

pm2 stop ex_app

cd GamingSiteProject/

npm install

pm2 start ./bin/www --name ex_app