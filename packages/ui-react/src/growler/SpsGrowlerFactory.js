import EventManager from "../commercePlatform/vanilla/utils/EventManager/EventManager";
import { uid } from "../commercePlatform/vanilla/utils/uid";

function newGrowler(text, opts) {
  let growler = Object.assign({}, opts);
  growler.id = uid();
  growler.msg = text;
  return growler;
}

export const SpsGrowlerFactory = {
  /**
   * A message element is created and options set, then compiled
   * with a new scope and returned.
   *
   * @param {string} [text]
   * @param {object} [opts]
   */

  /**
   * Create and return a new error growler
   *
   * @param {string} [text]
   * @param {object} [opts]
   */
  error(text, opts) {
    opts = Object.assign(opts, { preset: "error" });
    EventManager.emit("GROWLER.SHOW", newGrowler(text, opts));
  },

  /**
   * Create and return a new info growler
   *
   * @param {string} [text]
   * @param {object} [opts]
   */
  info(text, opts) {
    opts = Object.assign(opts, { preset: "info" });
    EventManager.emit("GROWLER.SHOW", newGrowler(text, opts));
  },

  /**
   * Create and return a new success growler
   *
   * @param {string} [text]
   * @param {object} [opts]
   */
  success(text, opts) {
    opts = Object.assign(opts, { preset: "success" });
    EventManager.emit("GROWLER.SHOW", newGrowler(text, opts));
  },

  /**
   * Create and return a new pending growler
   *
   * @param {string} [text]
   * @param {object} [opts]
   */
  pending(text, opts) {
    opts = Object.assign(opts, { preset: "pending" });
    EventManager.emit("GROWLER.SHOW", newGrowler(text, opts));
  },

  /**
   * Create and return a new warning growler
   *
   * @param {string} [text]
   * @param {object} [opts]
   */
  warning(text, opts) {
    opts = Object.assign(opts, { preset: "warning" });
    EventManager.emit("GROWLER.SHOW", newGrowler(text, opts));
  },
  /**
   * Create and return a new default growler
   *
   * @param {string} [text]
   * @param {object} [opts]
   */
  default(text, opts) {
    opts = Object.assign(opts, { preset: "default" });
    EventManager.emit("GROWLER.SHOW", newGrowler(text, opts));
  }
};

export default SpsGrowlerFactory;
