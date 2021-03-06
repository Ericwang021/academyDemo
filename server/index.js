// Import prerequisite packages
const next = require("next");
const Koa = require("koa");

// Initialize NextJs instance and expose request handler
const dev = process.env.NODE_ENV !== "production"; //determine whether it is in dev: developer state or production: official service state
const app = next({ dev }); //Initialize next.js
const handle = app.getRequestHandler(); // get http response

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
	//Initialize KoaJs server and router
	const server = new Koa();
	server.use(async (ctx, next) => {
		await handle(ctx.req, ctx.res);
		ctx.respond = false;
	});

	server.listen(PORT, () => {
		console.log(`koa server listening on http://localhost:${PORT}/`);
	});
});
