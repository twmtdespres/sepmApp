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
exports.Sepmra_C_CurrencyValueHelpRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Sepmra_C_CurrencyValueHelp_1 = require("./Sepmra_C_CurrencyValueHelp");
/**
 * Request builder class for operations supported on the [[Sepmra_C_CurrencyValueHelp]] entity.
 */
var Sepmra_C_CurrencyValueHelpRequestBuilder = /** @class */ (function (_super) {
    __extends(Sepmra_C_CurrencyValueHelpRequestBuilder, _super);
    function Sepmra_C_CurrencyValueHelpRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Sepmra_C_CurrencyValueHelp` entity based on its keys.
     * @param currency Key property. See [[Sepmra_C_CurrencyValueHelp.currency]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_C_CurrencyValueHelp` entity based on its keys.
     */
    Sepmra_C_CurrencyValueHelpRequestBuilder.prototype.getByKey = function (currency) {
        return new core_1.GetByKeyRequestBuilderV2(Sepmra_C_CurrencyValueHelp_1.Sepmra_C_CurrencyValueHelp, { Currency: currency });
    };
    /**
     * Returns a request builder for querying all `Sepmra_C_CurrencyValueHelp` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_C_CurrencyValueHelp` entities.
     */
    Sepmra_C_CurrencyValueHelpRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(Sepmra_C_CurrencyValueHelp_1.Sepmra_C_CurrencyValueHelp);
    };
    return Sepmra_C_CurrencyValueHelpRequestBuilder;
}(core_1.RequestBuilder));
exports.Sepmra_C_CurrencyValueHelpRequestBuilder = Sepmra_C_CurrencyValueHelpRequestBuilder;
//# sourceMappingURL=Sepmra_C_CurrencyValueHelpRequestBuilder.js.map