const scrollTop = () => {
  const btn = document.querySelector('.aside--scroll');
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  function scrollToTop() {
    window.scrollTo({behavior: "smooth", top: 0, left: 0});
  }

  function btnVisibility() {   
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos <= 0.5*vh) {
      btn.style.display = "none";
    } else {
      btn.style.display = "block";
    }
  }

  btn.addEventListener('click', scrollToTop);

  window.addEventListener('scroll', btnVisibility);
}

export default scrollTop;