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
exports.Sepmra_C_Pd_ProductTextRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Sepmra_C_Pd_ProductText_1 = require("./Sepmra_C_Pd_ProductText");
/**
 * Request builder class for operations supported on the [[Sepmra_C_Pd_ProductText]] entity.
 */
var Sepmra_C_Pd_ProductTextRequestBuilder = /** @class */ (function (_super) {
    __extends(Sepmra_C_Pd_ProductTextRequestBuilder, _super);
    function Sepmra_C_Pd_ProductTextRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Sepmra_C_Pd_ProductText` entity based on its keys.
     * @param productTextDraftUuid Key property. See [[Sepmra_C_Pd_ProductText.productTextDraftUuid]].
     * @param activeProduct Key property. See [[Sepmra_C_Pd_ProductText.activeProduct]].
     * @param activeLanguage Key property. See [[Sepmra_C_Pd_ProductText.activeLanguage]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_C_Pd_ProductText` entity based on its keys.
     */
    Sepmra_C_Pd_ProductTextRequestBuilder.prototype.getByKey = function (productTextDraftUuid, activeProduct, activeLanguage) {
        return new core_1.GetByKeyRequestBuilderV2(Sepmra_C_Pd_ProductText_1.Sepmra_C_Pd_ProductText, {
            ProductTextDraftUUID: productTextDraftUuid,
            ActiveProduct: activeProduct,
            ActiveLanguage: activeLanguage
        });
    };
    /**
     * Returns a request builder for querying all `Sepmra_C_Pd_ProductText` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_C_Pd_ProductText` entities.
     */
    Sepmra_C_Pd_ProductTextRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(Sepmra_C_Pd_ProductText_1.Sepmra_C_Pd_ProductText);
    };
    /**
     * Returns a request builder for creating a `Sepmra_C_Pd_ProductText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Sepmra_C_Pd_ProductText`.
     */
    Sepmra_C_Pd_ProductTextRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(Sepmra_C_Pd_ProductText_1.Sepmra_C_Pd_ProductText, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Sepmra_C_Pd_ProductText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Sepmra_C_Pd_ProductText`.
     */
    Sepmra_C_Pd_ProductTextRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(Sepmra_C_Pd_ProductText_1.Sepmra_C_Pd_ProductText, entity);
    };
    Sepmra_C_Pd_ProductTextRequestBuilder.prototype.delete = function (productTextDraftUuidOrEntity, activeProduct, activeLanguage) {
        return new core_1.DeleteRequestBuilderV2(Sepmra_C_Pd_ProductText_1.Sepmra_C_Pd_ProductText, productTextDraftUuidOrEntity instanceof Sepmra_C_Pd_ProductText_1.Sepmra_C_Pd_ProductText ? productTextDraftUuidOrEntity : {
            ProductTextDraftUUID: productTextDraftUuidOrEntity,
            ActiveProduct: activeProduct,
            ActiveLanguage: activeLanguage
        });
    };
    return Sepmra_C_Pd_ProductTextRequestBuilder;
}(core_1.RequestBuilder));
exports.Sepmra_C_Pd_ProductTextRequestBuilder = Sepmra_C_Pd_ProductTextRequestBuilder;
//# sourceMappingURL=Sepmra_C_Pd_ProductTextRequestBuilder.js.map