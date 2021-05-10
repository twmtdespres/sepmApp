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
Object.defineProperty(exports, "__esModule", { value: true });
exports.I_CurrencyRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var I_Currency_1 = require("./I_Currency");
/**
 * Request builder class for operations supported on the [[I_Currency]] entity.
 */
var I_CurrencyRequestBuilder = /** @class */ (function (_super) {
    __extends(I_CurrencyRequestBuilder, _super);
    function I_CurrencyRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `I_Currency` entity based on its keys.
     * @param currency Key property. See [[I_Currency.currency]].
     * @returns A request builder for creating requests to retrieve one `I_Currency` entity based on its keys.
     */
    I_CurrencyRequestBuilder.prototype.getByKey = function (currency) {
        return new core_1.GetByKeyRequestBuilderV2(I_Currency_1.I_Currency, { Currency: currency });
    };
    /**
     * Returns a request builder for querying all `I_Currency` entities.
     * @returns A request builder for creating requests to retrieve all `I_Currency` entities.
     */
    I_CurrencyRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(I_Currency_1.I_Currency);
    };
    return I_CurrencyRequestBuilder;
}(core_1.RequestBuilder));
exports.I_CurrencyRequestBuilder = I_CurrencyRequestBuilder;
//# sourceMappingURL=I_CurrencyRequestBuilder.js.map