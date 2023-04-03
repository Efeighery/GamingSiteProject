# Installing Nodejs NPM and update parameters
sudo apt update && sudo apt install nodejs npm

# Second npm installation
sudo npm install -g pm2

# For exiting Ubuntu server
pm2 stop ex_app

# Entering newly cloned Git repository
cd GamingSiteProject/

# NPM installation in repository directory
npm install

# Activating instance and triggering port tables
pm2 start ./bin/www --name ex_app
