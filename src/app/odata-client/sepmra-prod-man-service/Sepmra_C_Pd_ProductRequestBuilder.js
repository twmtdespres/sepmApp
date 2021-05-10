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
exports.Sepmra_C_Pd_ProductRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Sepmra_C_Pd_Product_1 = require("./Sepmra_C_Pd_Product");
/**
 * Request builder class for operations supported on the [[Sepmra_C_Pd_Product]] entity.
 */
var Sepmra_C_Pd_ProductRequestBuilder = /** @class */ (function (_super) {
    __extends(Sepmra_C_Pd_ProductRequestBuilder, _super);
    function Sepmra_C_Pd_ProductRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Sepmra_C_Pd_Product` entity based on its keys.
     * @param productDraftUuid Key property. See [[Sepmra_C_Pd_Product.productDraftUuid]].
     * @param activeProduct Key property. See [[Sepmra_C_Pd_Product.activeProduct]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_C_Pd_Product` entity based on its keys.
     */
    Sepmra_C_Pd_ProductRequestBuilder.prototype.getByKey = function (productDraftUuid, activeProduct) {
        return new core_1.GetByKeyRequestBuilderV2(Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product, {
            ProductDraftUUID: productDraftUuid,
            ActiveProduct: activeProduct
        });
    };
    /**
     * Returns a request builder for querying all `Sepmra_C_Pd_Product` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_C_Pd_Product` entities.
     */
    Sepmra_C_Pd_ProductRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product);
    };
    /**
     * Returns a request builder for creating a `Sepmra_C_Pd_Product` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Sepmra_C_Pd_Product`.
     */
    Sepmra_C_Pd_ProductRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Sepmra_C_Pd_Product`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Sepmra_C_Pd_Product`.
     */
    Sepmra_C_Pd_ProductRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product, entity);
    };
    Sepmra_C_Pd_ProductRequestBuilder.prototype.delete = function (productDraftUuidOrEntity, activeProduct) {
        return new core_1.DeleteRequestBuilderV2(Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product, productDraftUuidOrEntity instanceof Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product ? productDraftUuidOrEntity : {
            ProductDraftUUID: productDraftUuidOrEntity,
            ActiveProduct: activeProduct
        });
    };
    return Sepmra_C_Pd_ProductRequestBuilder;
}(core_1.RequestBuilder));
exports.Sepmra_C_Pd_ProductRequestBuilder = Sepmra_C_Pd_ProductRequestBuilder;
//# sourceMappingURL=Sepmra_C_Pd_ProductRequestBuilder.js.map