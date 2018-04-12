/**
 * @module  actions/SearchText
 */

/**
 * @const {string}
 */
export const SEARCH_TEXT_CHANGED = 'SEARCH_TEXT_CHANGED';

/**
 * @function searchTextUpdated
 *
 * @description  Return an `action`
 * @return {Object}
 */
export const searchTextUpdated = (text: string) => {
  return {
    type: SEARCH_TEXT_CHANGED,
    text
  };
};