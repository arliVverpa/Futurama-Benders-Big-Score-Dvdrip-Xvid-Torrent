import * as React from 'react';
import SplitPane from 'react-split-pane';

import { prefixClaName } from '@/common/className';
import { APP_PREFIX } from '@/common/const';

import Sidebar from './sidebar';
import MenuBar from './menuBar';
import ActivityBar from './activityBar';
import StatusBar from './statusBar';
import Editor from './editor';
import Panel from './panel';

import './workbench.scss';

const MainBench: React.FunctionComponent = function(props: any) {
    return (
        <div className={prefixClaName('mainBench')}>{props.children}</div>
    );
};

export const Workbench: React.FunctionComponent = function() {
    return (
        <div className={APP_PREFIX + ' center'}>
            <div className={prefixClaName('workbench')}>
                <MenuBar />
                <ActivityBar />
                <MainBench>
                    <SplitPane
                        split={'vertical'}
                        minSize={246}
                        maxSize={-246}
                        primary="first"
                        allowResize={true}
                    >
                        <Sidebar />
                        <SplitPane
                            primary="first"
                            split="horizontal"
                            defaultSize={'70%'}
                            maxSize={-1}
                            allowResize={true}
                        >
                            <Editor />
                            <Panel/>
                        </SplitPane>
                    </SplitPane>
                </MainBench>
            </div>
            <StatusBar />
        </div>
    );
};

export default Workbench;
