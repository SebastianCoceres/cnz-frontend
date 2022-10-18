const useScrollSmooth = (id) => {
  let target = document.querySelector(id);
  if (target) {
    let elDistanceToTop =
      window.pageYOffset + target.getBoundingClientRect().top;
    window.scrollTo(0, elDistanceToTop);
    return 1;
  } else {
    return null;
  }
};

export default useScrollSmooth;

//depende de CSS scroll-behaviour