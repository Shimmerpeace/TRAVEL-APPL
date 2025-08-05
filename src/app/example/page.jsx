import React from 'react';

/**
 * Stack component for flex layouts.
 * @param {Object} props
 * @param {'row'|'column'} props.direction - Layout direction
 * @param {number} props.spacing - Space (pixels) between children
 * @param {React.ReactNode[]} props.children - Child elements
 */
function Stack({ direction = 'column', spacing = 0, children }) {
  // Ensure children is an array
  const childArray = React.Children.toArray(children);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        gap: spacing,
      }}
    >
      {childArray}
    </div>
  );
}

// Example usage:
export default function Example() {
  return (
    <Stack direction="column" spacing={16}>
      <div style={{ background: '#e0e0e0', padding: 16 }}>Item 1</div>
      <div style={{ background: '#bdbdbd', padding: 16 }}>Item 2</div>
      <div style={{ background: '#9e9e9e', padding: 16 }}>Item 3</div>
    </Stack>
  );
}










