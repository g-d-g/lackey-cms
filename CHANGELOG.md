# Changelog

## 0.3

### 0.3.19
  * Remove default `controls` from video

### 0.3.18
  * API actions in tables
  * Delete page
  * Clear media
  * Apply attributes to media `attr-*`

### 0.3.15 - 0.3.16
  * `@hasContent` helper

### 0.3.14
  * Default value for editable

### 0.3.13
  * Upgrades to YAML serializer

### 0.3.12
  * Not populating empty properties in block

### 0.3.11
  * Related content

### 0.3.9 - 0.3.10
  * Make strucutre editor reflect changes, cleanup

### 0.3.8
  * Add author picker for page

### 0.3.7
 * `@taxonomy` dust helper

### 0.3.6
 * Fixing view in variant
 * Remove paragraphs for heading editable
 * Minor fixes to media

### 0.3.5
 * Add `raw` option to XHR

### 0.3.4
 * Add view as fragment
 * Minor fix to media

### 0.3.3
 * Add dependencies `autoprefixer`, `postcss` and `postcss-js`

### 0.3.2
 * Fix tweetable quotes after ProseMirror upgraede

### 0.3.1
 * Add dependency `dust-naming-convention-filters`
 * Support dates in YAML
 * Add view as YAML

### 0.3.0
 * Add support for `populate` in template YAML definition

## 0.2

### 0.2.11
 * Add `!import` instruction to YAML configs

### 0.2.10
 * Fix variant edition

### 0.2.8 - 0.2.9
 * Fix author saving

### 0.2.5 - 0.2.7
 * Add support for IFRAME in prose mirror `[IFRAME](pathToSource)`

### 0.2.4
 * Add filter by taxonomy to page model `getByTaxonomies(taxonomies, limit)`

### 0.2.3
 * Add edit field for `createdAt` field of page

### 0.2.2
 * Support for fonts

### 0.2.1
 * Fix population of properties to dynamic blocks

### 0.2.0
 * Features
  * Content dump to YAML
  * `res.yaml(response)`
  * Edititin in locale - i18n
  * `page` REST API param for table and list endpoints
  * Media dialog (image and/or videos)
  * Basic structure viewer/editor
  * Creation of new pages from UI

 * Dependencies
  * ProseMirror upgraded to 0.6.0
 * Bug Fixes
  * DB Drop on deploy function fixed
  * CMS table views fixed
