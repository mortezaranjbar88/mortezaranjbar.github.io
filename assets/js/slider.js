
function initSlider(containerSelector, interval=4000){
  const container=document.querySelector(containerSelector);
  if(!container) return;
  const imgs=container.querySelectorAll('img');
  let idx=0;
  imgs[idx].classList.add('active');
  const show=(i)=>{
    imgs[idx].classList.remove('active');
    idx=(i+imgs.length)%imgs.length;
    imgs[idx].classList.add('active');
  };
  setInterval(()=>show(idx+1),interval);
  const prev=container.querySelector('.slider-btn.prev');
  const next=container.querySelector('.slider-btn.next');
  prev&&prev.addEventListener('click',()=>show(idx-1));
  next&&next.addEventListener('click',()=>show(idx+1));
}
document.addEventListener("DOMContentLoaded",()=>{
  initSlider('.fullscreen',4000);
});
