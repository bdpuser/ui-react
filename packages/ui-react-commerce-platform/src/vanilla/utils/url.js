import { fromPairs } from "lodash";

const SLASH = "/";

export class Url {
  static getCurrent() {
    return window.location.href;
  }

  /**
   * Parse a url so that its components can be accessed individually, from:
   * http://stackoverflow.com/questions/6644654/ but modified so it doesn't
   * retain the HTML anchor elements (no orphaned DOM nodes).
   *
   * @TODO use regex instead of browser specific parsing
   *
   * @param {String} path
   * @returns {IUrlObject}
   */
  static parse(path) {
    let a = document.createElement("a");
    a.href = path;

    let obj = {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      port: "",
      protocol: "",
      search: ""
    };

    Object.keys(obj).forEach(key => {
      obj[key] = a[key];
    });

    // IE doesn't doesn't define origin so we are building it ourselves
    if (!obj.port || obj.port === "443" || obj.port === "80") {
      obj.origin = `${obj.protocol}//${obj.hostname}`;
    } else {
      obj.origin = `${obj.protocol}//${obj.hostname}:${obj.port}`;
    }
    // IE11 does not add slash to beginning of pathname
    obj.pathname = this.wrapSlashes(obj.pathname, false, true);

    return obj;
  }

  static parseSearch(search) {
    let result = {};
    search = search.replace("?", "");
    search.split("&").forEach(str => {
      let kv = str.split("=");
      let key = kv[0];
      let val = kv[1];
      if (key && val) {
        result[key] = val;
      }
    });
    return result;
  }

  /**
   * Build a url string from an object of url properties.
   *
   * @param {IUrlObject} obj
   * @returns {string}
   */
  static build(obj) {
    obj.search =
      typeof obj.search === "object" ? Url.param(obj.search) : obj.search;

    return [obj.origin, obj.pathname, obj.search, obj.hash].join("");
  }

  /**
   * Join all arguments together into a URL string. Removes duplicate slashes
   * (but leaves the double slashes in a protocol, eg: http://foo/bar/baz).
   *
   * @param args
   * @returns {String}
   */
  static join(...args) {
    return Url.cleanSlashes(args.join(SLASH));
  }

  /**
   * Serialize an object into a URL-friendly key1=val1&key2=val2 string.
   *
   * @param {Object} obj
   * @returns {String}
   */
  static param(obj) {
    let pairs = Object.keys(obj).map(key => {
      let k = encodeURIComponent(key);
      let v = encodeURIComponent(obj[key]);
      return k + "=" + v;
    });
    let str = pairs.join("&");
    return str ? "?" + str : "";
  }

  /**
   * Create an absolute URL from a given path.  If the path is already
   * absolute then it is returned as it is. Otherwise the path is made
   * absolute using a base URL or current URL if base is not provided.
   *
   * @param {String} path
   * @param {String} [base]
   * @returns {String}
   */
  static absolute(path, base = Url.getCurrent()) {
    let isAbsolute = path.substr(0, 4) === "http";
    return isAbsolute ? path : Url.join(base, path);
  }

  /**
   * Wrap a URL in slashes, ensuring no double slashes. Is careful not
   * to destroy search parameters.
   *
   * Example:
   * Url.wrapSlashes('foo/bar?baz=123'); -> '/foo/bar/?baz=123'
   *
   * @param {String} url
   * @param {Boolean} last
   * @param {Boolean} first
   * @returns {string}
   */
  static wrapSlashes(url, last = true, first = true) {
    let split = url.split("?");
    let search = split[1];
    url = split[0];
    url = first && url.substr(0, 4) !== "http" ? SLASH + url : url;
    url = last ? url + SLASH : url;
    url = search ? url + "?" + search : url;
    return Url.cleanSlashes(url);
  }

  /**
   * Remove double slashes from a url except when used in a protocol (https://).
   *
   * @param {String} url
   * @returns {String}
   */
  static cleanSlashes(url) {
    return url
      .replace(/([^:]\/)\/+/g, "$1") // remove from middle
      .replace(/^\/\//, SLASH) // remove from beginning
      .replace(/\/\/$/, SLASH); // remove from end
  }

  static getParameterByName(name, url) {
    if (url === null) {
      url = window.location.search;
    }

    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results === null) {
      return "";
    }
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  static getParams(url) {
    url = url || window.location.href;
    let parts = this.parse(url)
      .search.slice(1)
      .split("&");
    let map = parts.map(item => {
      if (item) {
        return item.split("=");
      }
      return undefined;
    });
    if (!map[0]) {
      return { access_token: "111111" };
    }
    let c = fromPairs(map);
    return c;
  }
}
