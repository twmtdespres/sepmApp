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
exports.Sepmra_I_ProductCategoryRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Sepmra_I_ProductCategory_1 = require("./Sepmra_I_ProductCategory");
/**
 * Request builder class for operations supported on the [[Sepmra_I_ProductCategory]] entity.
 */
var Sepmra_I_ProductCategoryRequestBuilder = /** @class */ (function (_super) {
    __extends(Sepmra_I_ProductCategoryRequestBuilder, _super);
    function Sepmra_I_ProductCategoryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Sepmra_I_ProductCategory` entity based on its keys.
     * @param productCategory Key property. See [[Sepmra_I_ProductCategory.productCategory]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_I_ProductCategory` entity based on its keys.
     */
    Sepmra_I_ProductCategoryRequestBuilder.prototype.getByKey = function (productCategory) {
        return new core_1.GetByKeyRequestBuilderV2(Sepmra_I_ProductCategory_1.Sepmra_I_ProductCategory, { ProductCategory: productCategory });
    };
    /**
     * Returns a request builder for querying all `Sepmra_I_ProductCategory` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_I_ProductCategory` entities.
     */
    Sepmra_I_ProductCategoryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(Sepmra_I_ProductCategory_1.Sepmra_I_ProductCategory);
    };
    return Sepmra_I_ProductCategoryRequestBuilder;
}(core_1.RequestBuilder));
exports.Sepmra_I_ProductCategoryRequestBuilder = Sepmra_I_ProductCategoryRequestBuilder;
//# sourceMappingURL=Sepmra_I_ProductCategoryRequestBuilder.js.map