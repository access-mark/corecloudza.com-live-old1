(function(){
  const backdrop=document.querySelector('[data-modal-backdrop]');
  const close=document.querySelector('[data-modal-close]');
  const title=document.querySelector('[data-guide-title]');
  const asset=document.querySelector('[data-guide-asset]');
  const cfg=window.CORECLOUD_CONFIG||{};

  document.querySelectorAll('[data-guide]').forEach(card=>{
    card.addEventListener('click',(e)=>{
      e.preventDefault();
      const guide=card.getAttribute('data-guide');
      if(title) title.textContent='Complete the form to receive the Executive Guide to '+guide+'.';
      if(asset) asset.value=guide;
      const form = document.querySelector('[data-lead-form]');
      const guideUrl = cfg.GUIDE_ASSETS && cfg.GUIDE_ASSETS[guide];
      if(form && guideUrl){
        const next = form.querySelector('input[name="_next"]');
        if(next) next.value = new URL(guideUrl, location.origin + location.pathname).href;
        const subject = form.querySelector('input[name="_subject"]');
        if(subject) subject.value = '[CoreCloudZA] Executive Guide Download: ' + guide;
      }
      if(backdrop) backdrop.classList.add('open');
    });
  });

  if(close&&backdrop) close.addEventListener('click',()=>backdrop.classList.remove('open'));
  if(backdrop) backdrop.addEventListener('click',(e)=>{if(e.target===backdrop) backdrop.classList.remove('open');});

  document.querySelectorAll('[data-lead-form]').forEach(form=>{
    if(!form.getAttribute('action')) form.setAttribute('data-corecloud-capture','true');
    form.addEventListener('corecloud:capture:complete', function(ev){
      const data = ev.detail && ev.detail.payload ? ev.detail.payload : {};
      if(data.type === 'GUIDE_DOWNLOAD' || data.leadType === 'GUIDE_DOWNLOAD'){
        const guide = data.asset || form.querySelector('[data-guide-asset]')?.value;
        const guideUrl = cfg.GUIDE_ASSETS && cfg.GUIDE_ASSETS[guide];
        const note = form.querySelector('[data-form-note]') || document.querySelector('[data-form-note]');
        if(note) note.textContent = 'Thank you. Your guide is opening now. If it does not open, use the link below.';
        if(guideUrl){
          setTimeout(()=>{ window.open(guideUrl, '_blank', 'noopener'); }, 350);
        }
      }
      form.reset();
    });
  });
})();
