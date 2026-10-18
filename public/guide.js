export function setupGuide({panel,toggle,close}){
  const key='slopp-guide-dismissed-v1';
  let dismissed=false;
  try{dismissed=localStorage.getItem(key)==='yes';}catch{}
  function show(focus=false){
    panel.hidden=false;document.body.classList.add('guiding');toggle.setAttribute('aria-expanded','true');
    if(focus)close.focus();
  }
  function hide(){
    panel.hidden=true;document.body.classList.remove('guiding');toggle.setAttribute('aria-expanded','false');
    try{localStorage.setItem(key,'yes');}catch{}
    toggle.focus();
  }
  toggle.onclick=()=>panel.hidden?show(true):hide();close.onclick=hide;
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&!panel.hidden){event.preventDefault();event.stopImmediatePropagation();hide();}
    else if(!panel.hidden&&event.target.closest('#guide'))event.stopPropagation();
  },{capture:true});
  if(!dismissed)show();
  return {hide,show,get open(){return !panel.hidden;}};
}
