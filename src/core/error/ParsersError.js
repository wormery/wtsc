"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    /**
     *
     * @param msg 错误信息
     * @param cssNmae css名字
     * @param parsersName parsers名字
     * @param groupName 组名
     * @param groupId 组id
     * @param error
     */
    function default_1(msg, cssNmae, parsersName, groupName, groupId, error) {
        if (msg === void 0) { msg = 'Parser错误'; }
        if (cssNmae === void 0) { cssNmae = ''; }
        if (parsersName === void 0) { parsersName = ''; }
        if (groupName === void 0) { groupName = 'wtsc'; }
        if (groupId === void 0) { groupId = -1; }
        if (error === void 0) { error = undefined; }
        var _this = _super.call(this, msg) || this;
        _this.msg = msg;
        _this.cssNmae = cssNmae;
        _this.parsersName = parsersName;
        _this.groupName = groupName;
        _this.groupId = groupId;
        _this.error = error;
        return _this;
    }
    default_1.prototype.toString = function () {
        var str = 'PARSER ERROR:' + this.msg + '\n';
        if (this.cssNmae !== '') {
            str += "CSS属性：'" + this.cssNmae + "'发生了错误\n";
        }
        str += "组名：'" + this.groupName + "'组内发生了一个错误\n";
        if (this.groupId !== -1) {
            str += "组ID：第'" + this.groupId.toString() + "'个组发生了错误";
        }
        if (this.parsersName !== '') {
            str += "解析器:'" + this.parsersName + "'发生了一个错误\n";
        }
        return str;
    };
    return default_1;
}(Error));
exports["default"] = default_1;
