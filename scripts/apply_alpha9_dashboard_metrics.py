from pathlib import Path
p=Path('app-v05.html')
s=p.read_text()
needle='<script src="./hotfix-alpha3.js?v=3"></script>'
insert=needle+'\n<script src="./hotfix-alpha9.js?v=9"></script>'
if 'hotfix-alpha9.js' not in s:
    if needle not in s:
        raise SystemExit('alpha3 script marker not found')
    s=s.replace(needle,insert)
    p.write_text(s)
print('alpha9 dashboard metrics installed')
# workflow trigger
