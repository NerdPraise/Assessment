export {};

declare global {
  interface Window {
    nextPage: () => void;
    updatePage: () => void;
    previousPage: () => void;
  }
}
