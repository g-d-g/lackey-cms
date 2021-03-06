/* jslint node:true */
/* globals process */
'use strict';

/*
    Copyright 2016 Enigma Marketing Services Limited

    Licensed under the Apache License, Version 2.0 (the 'License');
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an 'AS IS' BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/


module.exports = {
    name: 'Lackey CMS Default Config',
    datasources: {
        pg: {
            'default': {
                dsn: 'postgres://localhost/lackey-cms'
            }
        }
    },
    rebuild : {
        sass : true
    },
    http : {
        port : process.env.PORT || 8888
    }
};
