const http = require('http'); // The node http module allow you to create servers
const fs = require('fs'); // The node file system module allows you to create files and interact with file system
const path = require('path'); // path allows you to get the path of a folder etc.
const PORT = 8080;

http.createServer(function (req, res) {
	let filePath = '.' + req.url;
	if (filePath == './') {
	  filePath = '/index.html';
	}

	let extName = String(path.extname(filePath)).toLowerCase();
	const mimeTypes = {
	'.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
	};

	let contentType = mimeTypes[extName] || 'application/octet-stream';
	fs.readFile(filePath, function(error, content) {
	if (error) {
	  if(error.code == 'ENOENT') {
	    fs.readFile('./404.html', function(error, content) {
	      res.writeHead(404, {'Content-Type': 'text/html'});
	      res.end(content, 'utf-8');
	    });
	  }
	  else {
	    res.writeHead(500);
	    res.end('Sorry, you got an error bro here it is'+error.code+' ..\n');
	  }
	}
	else {
	   res.writeHead(200, { 'Content-Type': contentType });
	   res.end(content, 'utf-8');
	  }
	});
}).listen(PORT);

console.log(`Server started! Listening on port: ${PORT}`);
// basic node server without express serving Hello World
