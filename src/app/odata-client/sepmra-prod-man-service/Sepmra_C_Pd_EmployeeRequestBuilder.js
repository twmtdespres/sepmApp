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
exports.Sepmra_C_Pd_EmployeeRequestBuilder = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Sepmra_C_Pd_Employee_1 = require("./Sepmra_C_Pd_Employee");
/**
 * Request builder class for operations supported on the [[Sepmra_C_Pd_Employee]] entity.
 */
var Sepmra_C_Pd_EmployeeRequestBuilder = /** @class */ (function (_super) {
    __extends(Sepmra_C_Pd_EmployeeRequestBuilder, _super);
    function Sepmra_C_Pd_EmployeeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Sepmra_C_Pd_Employee` entity based on its keys.
     * @param employeeUuid Key property. See [[Sepmra_C_Pd_Employee.employeeUuid]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_C_Pd_Employee` entity based on its keys.
     */
    Sepmra_C_Pd_EmployeeRequestBuilder.prototype.getByKey = function (employeeUuid) {
        return new core_1.GetByKeyRequestBuilderV2(Sepmra_C_Pd_Employee_1.Sepmra_C_Pd_Employee, { EmployeeUUID: employeeUuid });
    };
    /**
     * Returns a request builder for querying all `Sepmra_C_Pd_Employee` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_C_Pd_Employee` entities.
     */
    Sepmra_C_Pd_EmployeeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(Sepmra_C_Pd_Employee_1.Sepmra_C_Pd_Employee);
    };
    return Sepmra_C_Pd_EmployeeRequestBuilder;
}(core_1.RequestBuilder));
exports.Sepmra_C_Pd_EmployeeRequestBuilder = Sepmra_C_Pd_EmployeeRequestBuilder;
//# sourceMappingURL=Sepmra_C_Pd_EmployeeRequestBuilder.js.map