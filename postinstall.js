var fs = require('fs')
var path = require('path')
var exec = require('child_process').exec

var PostInstall = function(options) {
	var cwd = options.cwd
	var srcPath = options.srcPath

	var copyFile = function(sourcePath, destPath) {
		fs.createReadStream(sourcePath).pipe(fs.createWriteStream(destPath))
	}

	var maybeMkdir = function(pathname) {
		if (!fs.existsSync(pathname)) {
			fs.mkdirSync(pathname)
		}
	}

	var copyUtilFiles = function() {
		maybeMkdir(path.resolve(cwd, 'classes'))
		maybeMkdir(path.resolve(cwd, 'functions'))
		maybeMkdir(path.resolve(cwd, 'helpers'))
		maybeMkdir(path.resolve(cwd, 'placeholders'))
		maybeMkdir(path.resolve(cwd, 'variables'))

		copyFile(path.resolve(cwd, srcPath, '_classes.scss'), path.resolve(cwd, '_classes.scss'))
		copyFile(path.resolve(cwd, srcPath, '_root.scss'), path.resolve(cwd, '_root.scss'))
		copyFile(path.resolve(cwd, srcPath, '_utils.scss'), path.resolve(cwd, '_utils.scss'))

		fs.readdir(path.resolve(cwd, srcPath, 'classes'), function(err, filenames) {
			filenames.forEach(function(filename) {
				copyFile(path.resolve(cwd, srcPath, 'classes', filename), path.resolve(cwd, 'classes', filename))
			})
		})

		fs.readdir(path.resolve(cwd, srcPath, 'functions'), function(err, filenames) {
			filenames.forEach(function(filename) {
				copyFile(path.resolve(cwd, srcPath, 'functions', filename), path.resolve(cwd, 'functions', filename))
			})
		})

		fs.readdir(path.resolve(cwd, srcPath, 'helpers'), function(err, filenames) {
			filenames.forEach(function(filename) {
				copyFile(path.resolve(cwd, srcPath, 'helpers', filename), path.resolve(cwd, 'helpers', filename))
			})
		})

		fs.readdir(path.resolve(cwd, srcPath, 'placeholders'), function(err, filenames) {
			filenames.forEach(function(filename) {
				copyFile(path.resolve(cwd, srcPath, 'placeholders', filename), path.resolve(cwd, 'placeholders', filename))
			})
		})

		fs.readdir(path.resolve(cwd, srcPath, 'variables'), function(err, filenames) {
			filenames.forEach(function(filename) {
				copyFile(path.resolve(cwd, srcPath, 'variables', filename), path.resolve(cwd, 'variables', filename))
			})
		})
	}

	copyUtilFiles()
}

new PostInstall({
	cwd: process.env.CWD || './',
	srcPath: 'src'
})
