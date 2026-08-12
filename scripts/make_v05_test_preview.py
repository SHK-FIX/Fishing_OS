from pathlib import Path
src=Path('index.html').read_text()
assert "const STORE='fishingOS-v030';" in src
assert '<meta name="apple-mobile-web-app-title" content="Fishing OS">' in src
assert "if('serviceWorker' in navigator){" in src
out=src.replace("const STORE='fishingOS-v030';","const STORE='fishingOS-v050-test';",1)
out=out.replace('<meta name="apple-mobile-web-app-title" content="Fishing OS">','<meta name="apple-mobile-web-app-title" content="Fishing OS Test">',1)
out=out.replace('<title>Fishing OS 0.5</title>','<title>Fishing OS 0.5 Test</title>',1)
out=out.replace("if('serviceWorker' in navigator){","if(false&&'serviceWorker' in navigator){",1)
Path('test.html').write_text(out)
print('isolated test preview generated')
