cd docker-deploy || exit
docker compose --env-file ../.env down
docker compose --env-file ../.env up -d nginx-certbot
docker compose --env-file ../.env run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d "$(DOMAIN_URL)"
sudo chmod ugo+rwx -R ./certbot/
