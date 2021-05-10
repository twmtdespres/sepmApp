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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sepmra_C_Pd_Review = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_C_Pd_ReviewRequestBuilder_1 = require("./Sepmra_C_Pd_ReviewRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_C_PD_Review" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_C_Pd_Review = /** @class */ (function (_super) {
    __extends(Sepmra_C_Pd_Review, _super);
    function Sepmra_C_Pd_Review() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_Pd_Review`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Review`.
     */
    Sepmra_C_Pd_Review.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_C_Pd_Review);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_Review` entity type.
     * @returns A `Sepmra_C_Pd_Review` request builder.
     */
    Sepmra_C_Pd_Review.requestBuilder = function () {
        return new Sepmra_C_Pd_ReviewRequestBuilder_1.Sepmra_C_Pd_ReviewRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_Review`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Review`.
     */
    Sepmra_C_Pd_Review.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_Review);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_C_Pd_Review.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_C_Pd_Review.
     */
    Sepmra_C_Pd_Review._entityName = 'SEPMRA_C_PD_Review';
    /**
     * Default url path for the according service.
     */
    Sepmra_C_Pd_Review._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_C_Pd_Review;
}(core_1.EntityV2));
exports.Sepmra_C_Pd_Review = Sepmra_C_Pd_Review;
(function (Sepmra_C_Pd_Review) {
    /**
     * Static representation of the [[productReviewPostUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Review.PRODUCT_REVIEW_POST_UUID = new core_1.StringField('ProductReviewPostUUID', Sepmra_C_Pd_Review, 'Edm.Guid');
    /**
     * Static representation of the [[product]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Review.PRODUCT = new core_1.StringField('Product', Sepmra_C_Pd_Review, 'Edm.String');
    /**
     * Static representation of the [[reviewPostText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Review.REVIEW_POST_TEXT = new core_1.StringField('ReviewPostText', Sepmra_C_Pd_Review, 'Edm.String');
    /**
     * Static representation of the [[reviewRatingValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Review.REVIEW_RATING_VALUE = new core_1.NumberField('ReviewRatingValue', Sepmra_C_Pd_Review, 'Edm.Byte');
    /**
     * Static representation of the [[numberOfAffirmativeAnswers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Review.NUMBER_OF_AFFIRMATIVE_ANSWERS = new core_1.NumberField('NumberOfAffirmativeAnswers', Sepmra_C_Pd_Review, 'Edm.Int32');
    /**
     * Static representation of the [[reviewDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Review.REVIEW_DATE_TIME = new core_1.DateField('ReviewDateTime', Sepmra_C_Pd_Review, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[isHelpfulForCurrentUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Review.IS_HELPFUL_FOR_CURRENT_USER = new core_1.BooleanField('IsHelpfulForCurrentUser', Sepmra_C_Pd_Review, 'Edm.Boolean');
    /**
     * Static representation of the [[isReviewOfCurrentUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Review.IS_REVIEW_OF_CURRENT_USER = new core_1.BooleanField('IsReviewOfCurrentUser', Sepmra_C_Pd_Review, 'Edm.Boolean');
    /**
     * Static representation of the [[userDisplayName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Review.USER_DISPLAY_NAME = new core_1.StringField('UserDisplayName', Sepmra_C_Pd_Review, 'Edm.String');
    /**
     * All fields of the Sepmra_C_Pd_Review entity.
     */
    Sepmra_C_Pd_Review._allFields = [
        Sepmra_C_Pd_Review.PRODUCT_REVIEW_POST_UUID,
        Sepmra_C_Pd_Review.PRODUCT,
        Sepmra_C_Pd_Review.REVIEW_POST_TEXT,
        Sepmra_C_Pd_Review.REVIEW_RATING_VALUE,
        Sepmra_C_Pd_Review.NUMBER_OF_AFFIRMATIVE_ANSWERS,
        Sepmra_C_Pd_Review.REVIEW_DATE_TIME,
        Sepmra_C_Pd_Review.IS_HELPFUL_FOR_CURRENT_USER,
        Sepmra_C_Pd_Review.IS_REVIEW_OF_CURRENT_USER,
        Sepmra_C_Pd_Review.USER_DISPLAY_NAME
    ];
    /**
     * All fields selector.
     */
    Sepmra_C_Pd_Review.ALL_FIELDS = new core_1.AllFields('*', Sepmra_C_Pd_Review);
    /**
     * All key fields of the Sepmra_C_Pd_Review entity.
     */
    Sepmra_C_Pd_Review._keyFields = [Sepmra_C_Pd_Review.PRODUCT_REVIEW_POST_UUID];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_Review.
     */
    Sepmra_C_Pd_Review._keys = Sepmra_C_Pd_Review._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_C_Pd_Review = exports.Sepmra_C_Pd_Review || (exports.Sepmra_C_Pd_Review = {}));
exports.Sepmra_C_Pd_Review = Sepmra_C_Pd_Review;
//# sourceMappingURL=Sepmra_C_Pd_Review.js.map