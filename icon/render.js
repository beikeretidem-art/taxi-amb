const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const svg=fs.readFileSync('icon.svg','utf8');
for(const s of [512,192,180]){const p=await b.newPage({viewport:{width:s,height:s}});
await p.setContent(`<html><body style="margin:0;background:transparent">${svg.replace('<svg ','<svg width="'+s+'" height="'+s+'" ')}</body></html>`);
await p.screenshot({path:`icon-${s}.png`,omitBackground:true});await p.close();}
await b.close();})();
