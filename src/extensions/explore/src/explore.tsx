import * as React from 'react';
import Collapse, { Panel } from 'mo/components/collapse';
import { IMolecule } from 'mo/core/molecule';
import { MoleculeCtx } from 'mo/provider/molecule';
import { prefixClaName } from 'mo/common/className';

interface IExplorerProps {

}

export const Explorer: React.FunctionComponent<IExplorerProps> = (IExplorerProps) => {
    const moleculeCtx: IMolecule = React.useContext(MoleculeCtx);

    const AddABar = function() {
        const id = Math.random() * 10 + 1;
        moleculeCtx.activityBar.push({
            id: id + '',
            name: 'folder' + id,
            iconName: 'codicon-edit',
        });
    };

    const NewEditor = function() {
        const id = Math.random() * 10 + 1;
        const tabData = {
            id: id,
            name: 'test-tab1',
            value: 'just test tab data',
        };
        console.log('open editor:', tabData);
        moleculeCtx.editor.open(tabData, 1);
    };

    return (
        <div className={prefixClaName('explorer', 'sidebar')}>
            <Collapse className="dee">
                <Panel header="OPEN EDITORS">
                    OPEN EDITORS
                    <button onClick={AddABar}>Add Bar</button>
                    <button onClick={NewEditor}>New Editor</button>
                </Panel>
                <Panel header="Sample-Folder"></Panel>
                <Panel header="OUTLINE">
                    OUTLINE
                </Panel>
            </Collapse>
        </div>
    );
};