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
exports.Sepmra_I_ProductSalesDataRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var Sepmra_I_ProductSalesData_1 = require("./Sepmra_I_ProductSalesData");
/**
 * Request builder class for operations supported on the [[Sepmra_I_ProductSalesData]] entity.
 */
var Sepmra_I_ProductSalesDataRequestBuilder = /** @class */ (function (_super) {
    __extends(Sepmra_I_ProductSalesDataRequestBuilder, _super);
    function Sepmra_I_ProductSalesDataRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Sepmra_I_ProductSalesData` entity based on its keys.
     * @param product Key property. See [[Sepmra_I_ProductSalesData.product]].
     * @param deliveryDateTime Key property. See [[Sepmra_I_ProductSalesData.deliveryDateTime]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_I_ProductSalesData` entity based on its keys.
     */
    Sepmra_I_ProductSalesDataRequestBuilder.prototype.getByKey = function (product, deliveryDateTime) {
        return new core_1.GetByKeyRequestBuilderV2(Sepmra_I_ProductSalesData_1.Sepmra_I_ProductSalesData, {
            Product: product,
            DeliveryDateTime: deliveryDateTime
        });
    };
    /**
     * Returns a request builder for querying all `Sepmra_I_ProductSalesData` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_I_ProductSalesData` entities.
     */
    Sepmra_I_ProductSalesDataRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(Sepmra_I_ProductSalesData_1.Sepmra_I_ProductSalesData);
    };
    return Sepmra_I_ProductSalesDataRequestBuilder;
}(core_1.RequestBuilder));
exports.Sepmra_I_ProductSalesDataRequestBuilder = Sepmra_I_ProductSalesDataRequestBuilder;
//# sourceMappingURL=Sepmra_I_ProductSalesDataRequestBuilder.js.map