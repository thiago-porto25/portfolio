/* eslint-disable class-methods-use-this */
import "@testing-library/jest-dom/vitest";

// jsdom has no IntersectionObserver (used by framer-motion's whileInView)
class IntersectionObserverStub {
  observe() {}

  unobserve() {}

  disconnect() {}
}
globalThis.IntersectionObserver =
  IntersectionObserverStub as unknown as typeof IntersectionObserver;
