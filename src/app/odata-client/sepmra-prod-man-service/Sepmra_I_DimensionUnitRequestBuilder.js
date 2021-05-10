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
exports.Sepmra_I_DimensionUnitRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Sepmra_I_DimensionUnit_1 = require("./Sepmra_I_DimensionUnit");
/**
 * Request builder class for operations supported on the [[Sepmra_I_DimensionUnit]] entity.
 */
var Sepmra_I_DimensionUnitRequestBuilder = /** @class */ (function (_super) {
    __extends(Sepmra_I_DimensionUnitRequestBuilder, _super);
    function Sepmra_I_DimensionUnitRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Sepmra_I_DimensionUnit` entity based on its keys.
     * @param unitOfMeasure Key property. See [[Sepmra_I_DimensionUnit.unitOfMeasure]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_I_DimensionUnit` entity based on its keys.
     */
    Sepmra_I_DimensionUnitRequestBuilder.prototype.getByKey = function (unitOfMeasure) {
        return new core_1.GetByKeyRequestBuilderV2(Sepmra_I_DimensionUnit_1.Sepmra_I_DimensionUnit, { UnitOfMeasure: unitOfMeasure });
    };
    /**
     * Returns a request builder for querying all `Sepmra_I_DimensionUnit` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_I_DimensionUnit` entities.
     */
    Sepmra_I_DimensionUnitRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(Sepmra_I_DimensionUnit_1.Sepmra_I_DimensionUnit);
    };
    return Sepmra_I_DimensionUnitRequestBuilder;
}(core_1.RequestBuilder));
exports.Sepmra_I_DimensionUnitRequestBuilder = Sepmra_I_DimensionUnitRequestBuilder;
//# sourceMappingURL=Sepmra_I_DimensionUnitRequestBuilder.js.map