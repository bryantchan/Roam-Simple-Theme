const gulp = require("gulp");
const sass = require("gulp-sass");
const livereload = require("gulp-livereload");

let livereloadPort = "35729";

/** watch task: watch sass files changes */
const compileSass = function () {
	return gulp
		.src("./style.scss")
		.pipe(sass())
		.pipe(gulp.dest("."))
		.pipe(livereload({ start: true }));
};

const watchSass = async function () {
	livereload.listen({ port: livereloadPort });
	console.log("listening on: " + livereloadPort);
	return gulp.watch("style.scss", compileSass);
};

exports.default = watchSass;
