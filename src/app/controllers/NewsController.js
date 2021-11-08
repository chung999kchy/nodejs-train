class NewsController {
	// [GET] / news
	index(req, res) {
		res.render("news");
	}

	show(req, res) {
		res.send("hello show");
	}
}

module.exports = new NewsController();
