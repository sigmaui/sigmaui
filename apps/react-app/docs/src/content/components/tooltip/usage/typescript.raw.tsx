import React from 'react';
import Tooltip from '@sigmaui-kit/tooltip';
import Button from '@sigmaui-kit/button';

export default function Demo() {
  return (
    <Tooltip
      overlay="Tooltip"
    >
      <Button>
        Tooltip
      </Button>
    </Tooltip>
  )
}
