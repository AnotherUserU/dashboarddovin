// Static dev server for the site, reachable from other devices on the same network.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 5173;
const HOST = '0.0.0.0';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  // Folders serve their index.html; "/id" redirects to "/id/" so relative links resolve.
  if (!path.extname(urlPath) && !urlPath.endsWith('/') && fs.existsSync(path.join(ROOT, urlPath, 'index.html'))) {
    res.writeHead(301, { Location: `${urlPath}/` }).end();
    return;
  }
  const filePath = path.normalize(path.join(ROOT, urlPath.endsWith('/') ? `${urlPath}index.html` : urlPath));

  // Block path traversal, hidden folders (.impeccable, .claude, .git), the server itself,
  // and anything that isn't a web asset (PRODUCT.md, package.json, ...).
  const rel = path.relative(ROOT, filePath);
  const isPrivate = rel === 'server.js' || rel === 'package.json' || !TYPES[path.extname(filePath).toLowerCase()];
  if (rel.startsWith('..') || rel.split(path.sep).some((part) => part.startsWith('.')) || isPrivate) {
    res.writeHead(403).end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(err.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/plain' });
      res.end(err.code === 'ENOENT' ? 'Not found' : 'Server error');
      return;
    }
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  });
});

server.on('error', (err) => {
  console.error(err.code === 'EADDRINUSE' ? `Port ${PORT} is already in use. Try: PORT=3000 npm run dev` : err);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  const lan = Object.values(os.networkInterfaces())
    .flat()
    .filter((i) => i && i.family === 'IPv4' && !i.internal)
    .map((i) => `  Network: http://${i.address}:${PORT}`);
  console.log(`Nusajawa Clove running\n  Local:   http://localhost:${PORT}\n${lan.join('\n')}`);
});
