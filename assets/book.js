(function(){
  var q=document.getElementById('q'), links=[].slice.call(document.querySelectorAll('#toc a'));
  var paras=[].slice.call(document.querySelectorAll('.book p,.book h2,.book .sharh,.book .side'));
  var last=null, idx=0, term='';
  if(q){
    q.addEventListener('input',function(){
      var t=q.value.trim();
      links.forEach(function(a){a.style.display=!t||a.textContent.indexOf(t)>-1?'':'none'});
    });
    q.addEventListener('keydown',function(e){
      if(e.key!=='Enter')return;
      var t=q.value.trim(); if(!t)return;
      if(t!==term){term=t;idx=0}
      var hits=paras.filter(function(p){return p.textContent.indexOf(t)>-1});
      if(!hits.length)return;
      if(last)last.classList.remove('hit');
      last=hits[idx%hits.length]; idx++;
      last.classList.add('hit'); last.scrollIntoView({block:'center'});
    });
  }

  // Feedback: knop per hoofdstuk, of een zwevende knop na het selecteren van tekst.
  var lang=document.body.getAttribute('data-lang')||'ar';
  if(!document.querySelector('.chapter[data-id]'))return;
  var T={
    ar:{title:'ملاحظة أو تصحيح',quote:'النص المحدد',kind:'نوع الملاحظة',msg:'الملاحظة',sug:'الصيغة المقترحة (اختياري)',mail:'بريدك الإلكتروني (اختياري، للرد فقط)',send:'إرسال',cancel:'إغلاق',ok:'شكراً لك، وصلت ملاحظتك وسيراجعها فريق التحرير.',err:'تعذّر الإرسال: ',sel:'ملاحظة على هذا النص',
      kinds:{spelling:'خطأ إملائي',translation:'خطأ في الترجمة',source:'مصدر غير صحيح',content:'خطأ في المحتوى',missing:'نص ناقص',technical:'مشكلة تقنية',suggestion:'اقتراح تحسين',other:'أخرى'}},
    nl:{title:'Feedback of correctie',quote:'Geselecteerde tekst',kind:'Soort melding',msg:'Je opmerking',sug:'Voorgestelde verbetering (optioneel)',mail:'Je e-mailadres (optioneel, alleen voor een reactie)',send:'Versturen',cancel:'Sluiten',ok:'Dank je wel. Je melding is ontvangen en wordt door de redactie bekeken.',err:'Versturen mislukt: ',sel:'Meld iets over deze tekst',
      kinds:{spelling:'Spelfout',translation:'Vertaalfout',source:'Onjuiste bron',content:'Inhoudelijke fout',missing:'Ontbrekende tekst',technical:'Technisch probleem',suggestion:'Verbetervoorstel',other:'Overig'}}
  }[lang];
  var d=document.createElement('dialog'); d.className='fbd'; d.setAttribute('dir',lang==='ar'?'rtl':'ltr');
  var opts=Object.keys(T.kinds).map(function(k){return '<option value="'+k+'">'+T.kinds[k]+'</option>'}).join('');
  d.innerHTML='<form method="dialog"><h3></h3><div class="qwrap"><label>'+T.quote+'</label><blockquote></blockquote></div>'+
    '<label for="fb-k">'+T.kind+'</label><select id="fb-k" name="category">'+opts+'</select>'+
    '<label for="fb-m">'+T.msg+'</label><textarea id="fb-m" name="message" rows="4" required minlength="5" maxlength="5000"></textarea>'+
    '<label for="fb-s">'+T.sug+'</label><textarea id="fb-s" name="suggestion" rows="2" maxlength="5000"></textarea>'+
    '<label for="fb-e">'+T.mail+'</label><input id="fb-e" name="email" type="email" maxlength="255" autocomplete="email">'+
    '<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">'+
    '<p class="msg" role="status"></p><div class="row"><button value="cancel" formnovalidate>'+T.cancel+'</button><button class="primary" value="send">'+T.send+'</button></div></form>';
  document.body.appendChild(d);
  var f=d.querySelector('form'), state={};
  function open(section,quote){
    state={type:section.getAttribute('data-type'),id:section.getAttribute('data-id'),quote:quote||'',opened:Date.now()};
    f.reset(); d.querySelector('.msg').textContent='';
    d.querySelector('h3').textContent=T.title+' · '+section.querySelector('h2').firstChild.textContent;
    d.querySelector('.qwrap').hidden=!quote; d.querySelector('blockquote').textContent=quote||'';
    f.querySelector('.primary').disabled=false;
    d.showModal();
  }
  f.addEventListener('submit',function(e){
    if(e.submitter&&e.submitter.value==='cancel')return;
    e.preventDefault();
    var btn=f.querySelector('.primary'), msg=d.querySelector('.msg'); btn.disabled=true;
    fetch('/api/feedback',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({
      entity_type:state.type,entity_id:Number(state.id),lang:lang,quote:state.quote,category:f.category.value,
      message:f.message.value,suggestion:f.suggestion.value,email:f.email.value,website:f.website.value,elapsed:Date.now()-state.opened
    })}).then(function(r){return r.json().then(function(j){if(!r.ok)throw new Error(j.error||r.status)})})
      .then(function(){msg.textContent=T.ok;setTimeout(function(){d.close()},2500)})
      .catch(function(err){msg.textContent=T.err+err.message;btn.disabled=false});
  });
  document.addEventListener('click',function(e){
    var b=e.target.closest('.fb'); if(b)open(b.closest('.chapter'),'');
  });
  var sb=document.createElement('button'); sb.type='button'; sb.className='selfb'; sb.textContent=T.sel; sb.hidden=true;
  document.body.appendChild(sb);
  var selSection=null, selText='';
  document.addEventListener('selectionchange',function(){
    var s=window.getSelection(), t=s&&s.toString().trim();
    if(!t||s.rangeCount===0){sb.hidden=true;return}
    var node=s.getRangeAt(0).commonAncestorContainer; if(node.nodeType!==1)node=node.parentElement;
    var sec=node&&node.closest('.chapter[data-id]'); if(!sec){sb.hidden=true;return}
    selSection=sec; selText=t.slice(0,2000);
    var r=s.getRangeAt(0).getBoundingClientRect();
    sb.style.top=(window.scrollY+r.bottom+6)+'px'; sb.style.left=(window.scrollX+r.left)+'px'; sb.hidden=false;
  });
  sb.addEventListener('mousedown',function(e){e.preventDefault()});
  sb.addEventListener('click',function(){sb.hidden=true;open(selSection,selText)});
})();
