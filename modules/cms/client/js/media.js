/* eslint no-new:0 */
/* jslint esnext:true, browser:true, node:true */
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
*/
const lackey = require('./../../../core/client/js');


class Media {
      static get manager() {
            return top.Lackey.manager;
      }
      constructor(HTMLElement) {
            this._listeners = [];
            this.node = HTMLElement;
            this.attributes = {};
            if (this.node) {
                  this.content = HTMLElement.getAttribute('data-lky-content');
                  this.path = HTMLElement.getAttribute('data-lky-path');
                  this.variant = HTMLElement.getAttribute('data-lky-variant');
                  this.update = HTMLElement.getAttribute('data-lky-update');
                  this.updatePattern = HTMLElement.getAttribute('data-lky-update-pattern');
                  this.mediaType = HTMLElement.getAttribute('data-lky-media-type');
                  if (this.mediaType === 'hook' && !this.update) {

                        this.update = 'style.backgroundImage';
                        this.updatePattern = 'url($1)';
                  }
                  this.attributes = JSON.parse(HTMLElement.getAttribute('data-lky-attributes') || '{}');

                  this.onClick = lackey.as(function () {
                        let self = this;
                        this._listeners.forEach(function (listener) {
                              listener(self);
                        });
                  }, this);
                  this.set(JSON.parse(HTMLElement.getAttribute('data-lky-media')));
            }
      }
      render() {
            if (this.update) {
                  this.node.addEventListener('click', this.onClick, true);
                  return this.field(this.node, this.update, this.updatePattern.replace('$1', this.media.source));
            }
            if (this.media && this.media.mime && this.media.mime.match(/^video\//)) {
                  return this.renderVideo();
            }
            this.renderImage();
      }
      replace(newTag) {
            let self = this;
            Object.keys(this.attributes).forEach((attr) => {
                  newTag.setAttribute(attr, self.attributes[attr]);
            });
            if (this.node) {
                  this.node.removeEventListener('click', this.onClick, true);
                  this.node.parentNode.insertBefore(newTag, this.node);
                  this.node.parentNode.removeChild(this.node);
            }
            this.node = newTag;
            this.node.addEventListener('click', this.onClick, true);
            if (this._listeners.length) {
                  newTag.style.cursor = 'pointer';
            }
      }
      renderVideo() {
            let videoTag = document.createElement('video');
            this.media.alternatives.forEach((source) => {
                  let sourceTag = document.createElement('source');
                  sourceTag.src = source.src;
                  if (source.media) {
                        sourceTag.setAttribute('media', source.media);
                  }
                  sourceTag.setAttribute('type', source.type);
                  videoTag.appendChild(sourceTag);
            });
            this.replace(videoTag);
      }
      renderImage() {
            let img = document.createElement('IMG');
            img.src = this.media ? this.media.source : '';
            this.replace(img);
      }
      field(node, path, value) {
            let result, parts = path.split('.'),
                  element = parts.shift();
            if (parts.length) {
                  node[element] = node[element] || {};
                  return this.field(node[element], parts.join('.'), value);
            } else {
                  result = node[element] = value;
                  return result;
            }
      }
      set(media) {
            this.media = media;
            this.render();
      }
      selected(listener) {
            this._listeners.push(listener);
            this.node.style.cursor = 'pointer';
      }
      notify() {
            Media.manager.set(this.content, this.path, this.variant, {
                  id: this.media.id,
                  type: 'Media'
            });
      }
}

module.exports = Media;