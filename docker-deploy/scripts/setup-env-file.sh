cp --no-clobber ./docker-deploy/.env.example ./docker-deploy/.env
echo ""
echo "Edit .env file. Write right DOMAIN_URL without https:// and url paths!"
echo "[press Enter...]"
read ENTER
nano ./docker-deploy/.env
