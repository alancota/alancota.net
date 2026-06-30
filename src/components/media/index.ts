// Field Note media system. These are injected into MDX via the `components`
// prop in src/pages/field-notes/[...slug].astro, so authors can use <Figure>,
// <Gallery>, and <Video> in any Field Note without importing the components —
// they only import their images. See docs/handoffs for the authoring guide.
export { default as Figure } from './Figure.astro';
export { default as Gallery } from './Gallery.astro';
export { default as Video } from './Video.astro';
