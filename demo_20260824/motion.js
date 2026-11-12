(() => {
  if (!window.gsap || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const { gsap } = window;
  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.timeline({defaults:{ease:'power3.out'}}).from('.site-header',{y:-18,autoAlpha:0,duration:.46}).from('[data-reveal="hero"] > *',{y:26,autoAlpha:0,duration:.56,stagger:.07},'-.17');
    const observed=document.querySelectorAll('[data-reveal]:not([data-reveal="hero"])');
    const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(!entry.isIntersecting)return;gsap.from(entry.target,{y:28,autoAlpha:0,duration:.56,ease:'power3.out',overwrite:'auto'});observer.unobserve(entry.target)}),{threshold:.16});
    observed.forEach((element)=>observer.observe(element));
    return()=>observer.disconnect();
  });
})();
