export type Variant = 'color' | 'size' | 'type' | 'variant';

export type Tailwind =
  | 'static'
  | 'fixed'
  | 'absolute'
  | 'relative'
  | 'sticky'
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'table'
  | 'inline-table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-row'
  | 'flow-root'
  | 'grid'
  | 'inline-grid'
  | 'contents'
  | 'list-item'
  | 'hidden'
  | 'visible'
  | 'invisible'
  | 'collapse'
  | 'float-right'
  | 'float-left'
  | 'float-none'
  | 'w-0'
  | 'w-full'
  | 'w-min'
  | 'w-max'
  | 'w-fit'
  | 'min-w-0'
  | 'min-w-full'
  | 'min-w-screen'
  | 'min-w-min'
  | 'min-w-max'
  | 'min-w-fit'
  | 'max-w-0'
  | 'max-w-full'
  | 'max-w-screen'
  | 'max-w-min'
  | 'max-w-max'
  | 'max-w-fit'
  | 'h-0'
  | 'h-full'
  | 'h-screen'
  | 'h-min'
  | 'h-max'
  | 'h-fit'
  | 'min-h-0'
  | 'min-h-full'
  | 'min-h-screen'
  | 'min-h-min'
  | 'min-h-max'
  | 'min-h-fit'
  | 'max-h-0'
  | 'max-h-full'
  | 'max-h-screen'
  | 'max-h-min'
  | 'max-h-max'
  | 'max-h-fit'
  | 'top-0'
  | 'bottom-0'
  | 'left-0'
  | 'right-0'
  | 'overflow-auto'
  | 'overflow-hidden'
  | 'overflow-clip'
  | 'overflow-visible'
  | 'overflow-scroll'
  | 'overflow-x-auto'
  | 'overflow-y-auto'
  | 'overflow-x-hidden'
  | 'overflow-y-hidden'
  | 'overflow-x-clip'
  | 'overflow-y-clip'
  | 'overflow-x-visible'
  | 'overflow-y-visible'
  | 'overflow-x-scroll'
  | 'overflow-y-scroll'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'normal-case'
  | 'text-left'
  | 'text-center'
  | 'text-right'
  | 'text-justify'
  | 'text-start'
  | 'text-end'
  | 'text-ellipsis'
  | 'text-clip'
  | 'object-contain'
  | 'object-cover'
  | 'object-fill'
  | 'object-none'
  | 'object-scale-down'
  | 'align-baseline'
  | 'align-top'
  | 'align-middle'
  | 'align-bottom'
  | 'align-text-top'
  | 'align-text-bottom'
  | 'align-sub'
  | 'align-super'
  | 'transform-none'
  | 'cursor-auto'
  | 'cursor-default'
  | 'cursor-pointer'
  | 'cursor-wait'
  | 'cursor-text'
  | 'cursor-move'
  | 'cursor-help'
  | 'cursor-not-allowed'
  | 'cursor-context-menu'
  | 'cursor-progress'
  | 'cursor-cell'
  | 'cursor-crosshair'
  | 'cursor-vertical-text'
  | 'cursor-alias'
  | 'cursor-no-drop'
  | 'cursor-grab'
  | 'cursor-grabbing'
  | 'cursor-all-scroll'
  | 'cursor-col-resize'
  | 'cursor-row-resize'
  | 'cursor-n-resize'
  | 'cursor-e-resize'
  | 'cursor-s-resize'
  | 'cursor-w-resize'
  | 'cursor-ne-resize'
  | 'cursor-nw-resize'
  | 'cursor-se-resize'
  | 'cursor-sw-resize'
  | 'cursor-ew-resize'
  | 'cursor-ns-resize'
  | 'cursor-nesw-resize'
  | 'cursor-nwse-resize'
  | 'cursor-zoom-in'
  | 'cursor-zoom-out'
  | 'whitespace-normal'
  | 'whitespace-nowrap'
  | 'whitespace-pre'
  | 'whitespace-pre-line'
  | 'whitespace-pre-wrap'
  | 'break-normal'
  | 'break-words'
  | 'break-all'
  | 'break-keep'
  | 'flex-row'
  | 'flex-row-reverse'
  | 'flex-col'
  | 'flex-col-reverse'
  | 'flex-wrap'
  | 'flex-wrap-reverse'
  | 'flex-nowrap'
  | 'content-center'
  | 'content-start'
  | 'content-end'
  | 'content-between'
  | 'content-around'
  | 'content-evenly'
  | 'content-baseline'
  | 'items-start'
  | 'items-end'
  | 'items-center'
  | 'items-baseline'
  | 'items-stretch'
  | 'justify-start'
  | 'justify-end'
  | 'justify-center'
  | 'justify-between'
  | 'justify-around'
  | 'justify-evenly'
  | 'justify-items-start'
  | 'justify-items-end'
  | 'justify-items-center'
  | 'justify-items-stretch'
  | 'touch-auto'
  | 'touch-none'
  | 'touch-manipulation'
  | 'will-change-auto'
  | 'will-change-scroll'
  | 'will-change-contents'
  | 'will-change-transform'
  | 'clear-left'
  | 'clear-right'
  | 'clear-both'
  | 'clear-none'
  | 'box-border'
  | 'box-content'
  | 'select-none'
  | 'select-text'
  | 'select-all'
  | 'select-auto'
  | 'resize-none'
  | 'resize-y'
  | 'resize-x'
  | 'resize'
  | 'bg-repeat'
  | 'bg-no-repeat'
  | 'bg-repeat-x'
  | 'bg-repeat-y'
  | 'bg-repeat-round'
  | 'bg-repeat-space'
  | 'bg-auto'
  | 'bg-cover'
  | 'bg-contain'
  | 'bg-bottom'
  | 'bg-center'
  | 'bg-left'
  | 'bg-left-bottom'
  | 'bg-left-top'
  | 'bg-right'
  | 'bg-right-bottom'
  | 'bg-right-top'
  | 'bg-top'
  | 'bg-origin-border'
  | 'bg-origin-padding'
  | 'bg-origin-content'
  | 'bg-inherit'
  | 'bg-current'
  | 'bg-transparent'
  | 'bg-black'
  | 'bg-white'
  | 'bg-clip-border'
  | 'bg-clip-padding'
  | 'bg-clip-content'
  | 'bg-clip-text'
  | 'bg-fixed'
  | 'bg-local'
  | 'bg-scroll'
  | 'pointer-events-none'
  | 'pointer-events-auto'