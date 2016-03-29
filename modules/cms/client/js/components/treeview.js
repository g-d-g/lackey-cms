/* jslint node:true, esnext:true */
/* globals document */
'use strict';
/*
    Copyright 2016 Enigma Marketing Services Limited

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

const lackey = require('./../../../../core/client/js');

class TreeView {
    constructor(options) {
        this._data = options.data || null;
        this.node = lackey.select(options.selector)[0];
        this.node.className = 'tree-view';
        this._format = options._format;
        this.draw();
    }

    crawl(node, data) {
        let self = this,
            icon;
        if (!data) {
            return;
        }

        icon = data.icon || (data.children && data.children.length) ? 'fa-folder' : 'fa-file';

        let ICON = document.createElement('SPAN');
        ICON.className = 'fa ' + icon;
        node.appendChild(ICON);

        if (data.label) {
            let SPAN = document.createElement('SPAN');
            SPAN.innerHTML = data.label;
            node.appendChild(SPAN);
        }
        if (data.children) {
            let UL = document.createElement('UL');
            data.children.forEach((child) => {
                let LI = document.createElement('LI');
                self.crawl(LI, child);
                UL.appendChild(LI);
            });
            node.appendChild(UL);
        }
    }

    setData(data) {
        this._data = data;
        this.draw();
    }

    draw() {
        this.node.innerHTML = null;
        this.crawl(this.node, this._data);
    }
}

module.exports = TreeView;
