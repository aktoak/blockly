/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Utility methods for size calculation.
 * These methods are not specific to Blockly, and could be factored out into
 * a JavaScript framework such as Closure.
 */

/**
 * Utility methods for size calculation.
 * These methods are not specific to Blockly, and could be factored out into
 * a JavaScript framework such as Closure.
 * @class
 */



/**
 * Class for representing sizes consisting of a width and height.
 * @alias Blockly.utils.Size
 */
export class Size {
  /**
   * @param width Width.
   * @param height Height.
   * @struct
   */
  constructor(public width: number, public height: number) {}

  /**
   * Compares sizes for equality.
   * @param a A Size.
   * @param b A Size.
   * @return True iff the sizes have equal widths and equal heights, or if both
   *     are null.
   */
  static equals(a: Size|null, b: Size|null): boolean {
    if (a === b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    return a.width === b.width && a.height === b.height;
  }
}
