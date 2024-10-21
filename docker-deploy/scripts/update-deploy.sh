git fetch --all
git reset --hard "origin/$(sed -n "s/^DEPLOY_BRANCH=//p" "docker-deploy/.env")"
echo "Deploying last commit:"
git log --oneline -1
cd docker-deploy || exit
docker compose up -d nginx --build
echo "Frontend updated successfully"
