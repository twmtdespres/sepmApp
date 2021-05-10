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
exports.Sepm_I_ProductTypeRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Sepm_I_ProductType_1 = require("./Sepm_I_ProductType");
/**
 * Request builder class for operations supported on the [[Sepm_I_ProductType]] entity.
 */
var Sepm_I_ProductTypeRequestBuilder = /** @class */ (function (_super) {
    __extends(Sepm_I_ProductTypeRequestBuilder, _super);
    function Sepm_I_ProductTypeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Sepm_I_ProductType` entity based on its keys.
     * @param productType Key property. See [[Sepm_I_ProductType.productType]].
     * @returns A request builder for creating requests to retrieve one `Sepm_I_ProductType` entity based on its keys.
     */
    Sepm_I_ProductTypeRequestBuilder.prototype.getByKey = function (productType) {
        return new core_1.GetByKeyRequestBuilderV2(Sepm_I_ProductType_1.Sepm_I_ProductType, { ProductType: productType });
    };
    /**
     * Returns a request builder for querying all `Sepm_I_ProductType` entities.
     * @returns A request builder for creating requests to retrieve all `Sepm_I_ProductType` entities.
     */
    Sepm_I_ProductTypeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(Sepm_I_ProductType_1.Sepm_I_ProductType);
    };
    return Sepm_I_ProductTypeRequestBuilder;
}(core_1.RequestBuilder));
exports.Sepm_I_ProductTypeRequestBuilder = Sepm_I_ProductTypeRequestBuilder;
//# sourceMappingURL=Sepm_I_ProductTypeRequestBuilder.js.map