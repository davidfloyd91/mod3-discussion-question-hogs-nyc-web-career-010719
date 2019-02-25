/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  setTimeout(() => {
    fadeOut(div);
  }, range);
};

function delayedFadeIn(div, range) {
  setTimeout(() => {
    fadeIn(div);
  }, range);
};

function fadeAllOut(el, group) {
  delayedFadeOut(el);
  setTimeout(() => {
    group.forEach(div => {
      delayedFadeOut(div);
    });
  }, 400);
};

function fadeAllIn(group) {
  setTimeout(() => {
    group.forEach(div => {
      delayedFadeIn(div);
    });
  }, 200);
};
