(function(){
  var q=document.getElementById('q'), links=[].slice.call(document.querySelectorAll('#toc a'));
  var paras=[].slice.call(document.querySelectorAll('.book p,.book h2,.book .sharh,.book .side'));
  var last=null, idx=0, term='';
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
})();
