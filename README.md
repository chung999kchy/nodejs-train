# Những thư viện sử dụng

-   Express : npm install express : là 1 framework
-   Nodemon: npm i nodemon --save-dev
    => Thêm script cho file package.json:
    "start": "nodemon index.js", hoặc "nodemon --inspect index.js"

-   Template engines: handlebars
    npm install express-handlebars

-   Thêm file scss cho project:
    npm i node-sass --save-dev

    "watch": "node-sass --watch src/resources/scss/ --output src/public/css/",

-   Cấu hình static file: để thêm đường dẫn cho file tĩnh như css, img
    (Trong index.js) app.use(express.static(path.join(\_\_dirname, "public")));

## Basic routing express

[Basic routing](https://expressjs.com/en/starter/basic-routing.html)

## Bootstrap 4

[Boostrap 4](https://getbootstrap.com/docs/4.0/components/navbar/)
