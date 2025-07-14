export const styles = ({ theme = {} }) => {
  // console.log('theme', theme)

  return {
    wrapper: {},
    label: {},
    control: {},
    trigger: {
      border: 0,
      paddingBlock: 8,
      paddingInline: 12,
      cursor: 'pointer'
    },
    valueText: {},
    content: {},
    itemGroup: {},
    itemGroupLabel: {},
    item: {},
    indicator: {}
  }
}

export type SelectTypes = ReturnType<typeof styles>;
export type SelectKeys = keyof SelectTypes;