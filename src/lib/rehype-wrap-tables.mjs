/**
 * Wraps every markdown <table> in <div class="table-wrap">.
 *
 * A table can't scroll by itself without breaking its layout, so on a phone a
 * wide one would push the whole page sideways. The wrapper scrolls instead.
 */
export default function rehypeWrapTables() {
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      if (child.type === 'element' && child.tagName === 'table') {
        return { type: 'element', tagName: 'div', properties: { className: ['table-wrap'] }, children: [child] };
      }
      walk(child);
      return child;
    });
  };
  return walk;
}
