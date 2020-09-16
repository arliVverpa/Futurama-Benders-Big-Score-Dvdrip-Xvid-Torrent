import * as React from 'react';

import { prefixClaName } from '@/common/className';

export const Panel: React.FunctionComponent = function() {
    return (
        <div className={prefixClaName('panel')}>
            Panel
        </div>
    );
};

export default Panel;
