export const styles = () => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    label: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#222',
      marginBottom: '4px',
    },
    control: {
      display: 'flex',
      gap: '8px',
    },
    item: {
      padding: '8px 16px',
      fontSize: '14px',
      fontWeight: 500,
      color: '#222',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',

      ':hover': {
        backgroundColor: '#f1f3f4',
      }
    },
    itemText: {
      pointerEvents: 'none',
    },
    itemHiddenInput: {},
    indicator: {
      width: 'var(--width)',
      height: '2px',
      backgroundColor: '#2563eb',
      bottom: 0,
      transition: 'all 0.2s ease',
    },
    horizontal: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '16px',
    },
    vertical: {
      flexDirection: 'column',
      gap: '8px',
    },
  };
};

export type SegmentGroupTypes = ReturnType<typeof styles>;
export type SegmentGroupKeys = keyof SegmentGroupTypes; 