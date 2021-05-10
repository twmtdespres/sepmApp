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
exports.Sepmra_I_QuantityUnitRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Sepmra_I_QuantityUnit_1 = require("./Sepmra_I_QuantityUnit");
/**
 * Request builder class for operations supported on the [[Sepmra_I_QuantityUnit]] entity.
 */
var Sepmra_I_QuantityUnitRequestBuilder = /** @class */ (function (_super) {
    __extends(Sepmra_I_QuantityUnitRequestBuilder, _super);
    function Sepmra_I_QuantityUnitRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Sepmra_I_QuantityUnit` entity based on its keys.
     * @param unitOfMeasure Key property. See [[Sepmra_I_QuantityUnit.unitOfMeasure]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_I_QuantityUnit` entity based on its keys.
     */
    Sepmra_I_QuantityUnitRequestBuilder.prototype.getByKey = function (unitOfMeasure) {
        return new core_1.GetByKeyRequestBuilderV2(Sepmra_I_QuantityUnit_1.Sepmra_I_QuantityUnit, { UnitOfMeasure: unitOfMeasure });
    };
    /**
     * Returns a request builder for querying all `Sepmra_I_QuantityUnit` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_I_QuantityUnit` entities.
     */
    Sepmra_I_QuantityUnitRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(Sepmra_I_QuantityUnit_1.Sepmra_I_QuantityUnit);
    };
    return Sepmra_I_QuantityUnitRequestBuilder;
}(core_1.RequestBuilder));
exports.Sepmra_I_QuantityUnitRequestBuilder = Sepmra_I_QuantityUnitRequestBuilder;
//# sourceMappingURL=Sepmra_I_QuantityUnitRequestBuilder.js.map