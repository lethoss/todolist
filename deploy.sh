
# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lethoss/todolist.git master:gh-pages

cd -
