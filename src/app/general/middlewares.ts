// Scroll top
export const scrollTop = (
  element: HTMLElement | (Window & typeof globalThis) = window,
  behavior: 'auto' | 'smooth' = 'auto',
) => {
  element.scrollTo({
    top: 0,
    left: 0,
    behavior: behavior,
  });
};
