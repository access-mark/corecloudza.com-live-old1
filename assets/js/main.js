(function(){
  const toggle=document.querySelector('[data-menu-toggle]');
  const panel=document.querySelector('[data-mobile-panel]');
  if(toggle&&panel){toggle.addEventListener('click',()=>panel.classList.toggle('open'));}
  const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();

  const current=(location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.links a,.mobile-panel a').forEach(a=>{
    const href=(a.getAttribute('href')||'').split('/').pop().toLowerCase();
    if(href===current || (current==='' && href==='index.html')) a.classList.add('active');
  });

  // Moving AI atom field inspired by the marketplace visual language.
  const host=document.createElement('div');
  host.className='ai-atoms';
  const atoms=[
    [6,16,100,-80,22,-4,1],
    [12,54,90,-140,29,-12,0],
    [19,82,70,-100,25,-18,1],
    [27,22,-75,110,31,-2,0],
    [34,68,-95,-90,23,-15,0],
    [42,13,115,120,35,-9,1],
    [50,78,-110,-75,27,-21,0],
    [58,30,95,95,24,-5,0],
    [66,59,-85,130,30,-14,1],
    [75,18,70,105,26,-20,0],
    [84,72,-80,-125,33,-7,0],
    [92,34,-110,70,28,-16,1],
    [14,28,140,30,38,-22,0],
    [24,46,-125,40,32,-11,1],
    [38,88,90,-60,24,-6,0],
    [51,46,125,-20,36,-24,0],
    [63,8,-80,155,29,-17,1],
    [72,88,-95,-50,31,-3,0],
    [88,52,-130,-20,34,-13,0],
    [4,76,110,-120,27,-19,1],
    [47,24,-120,80,22,-8,0],
    [58,63,100,-115,25,-1,1],
    [31,6,65,145,37,-25,0],
    [80,8,-70,135,30,-11,1]
  ];
  atoms.forEach((a,i)=>{
    const s=document.createElement('span');
    s.className='ai-atom'+(a[6]?' gold':'');
    s.style.left=a[0]+'%'; s.style.top=a[1]+'%';
    s.style.setProperty('--dx',a[2]+'px'); s.style.setProperty('--dy',a[3]+'px');
    s.style.setProperty('--dur',a[4]+'s'); s.style.setProperty('--delay',a[5]+'s');
    s.style.setProperty('--angle',(25+i*17)+'deg');
    host.appendChild(s);
  });
  document.body.prepend(host);
})();