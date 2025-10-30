import React from 'react';
import Button from '@sigma-ui-kit/button';
import Tooltip from '@sigma-ui-kit/tooltip';

const text = <span>prompt text</span>;

const buttonWidth = '80px';

const App: React.FC = () => (
  <div
    className="demo"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        whiteSpace: 'nowrap',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <Tooltip placement="topLeft" title={text}>
        <Button styles={{ wrapper: { width: buttonWidth } }}>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <Button styles={{ wrapper: { width: buttonWidth } }}>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <Button styles={{ wrapper: { width: buttonWidth } }}>TR</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: `calc(${buttonWidth} * 5 + 32px)`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <Tooltip placement="leftTop" title={text}>
          <Button styles={{ wrapper: { width: buttonWidth } }}>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text}>
          <Button styles={{ wrapper: { width: buttonWidth } }}>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text}>
          <Button styles={{ wrapper: { width: buttonWidth } }}>LB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <Tooltip placement="rightTop" title={text}>
          <Button styles={{ wrapper: { width: buttonWidth } }}>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Button styles={{ wrapper: { width: buttonWidth } }}>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text}>
          <Button styles={{ wrapper: { width: buttonWidth } }}>RB</Button>
        </Tooltip>
      </div>
    </div>
    <div
      style={{
        whiteSpace: 'nowrap',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <Tooltip placement="bottomLeft" title={text}>
        <Button styles={{ wrapper: { width: buttonWidth } }}>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <Button styles={{ wrapper: { width: buttonWidth } }}>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <Button styles={{ wrapper: { width: buttonWidth } }}>BR</Button>
      </Tooltip>
    </div>
  </div>
);

export default App;
