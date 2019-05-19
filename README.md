ln -s .env.dev .env
npm i
npm run build
npx sequelize db:migrate --env db
npm run start
