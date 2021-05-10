import { I_DraftAdministrativeDataRequestBuilder } from './I_DraftAdministrativeDataRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "I_DraftAdministrativeData" of service "SEPMRA_PROD_MAN".
 */
export declare class I_DraftAdministrativeData extends EntityV2 implements I_DraftAdministrativeDataType {
    /**
     * Technical entity name for I_DraftAdministrativeData.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Créé par.
     * Maximum length: 12.
     * @nullable
     */
    createdByUser?: string;
    /**
     * Dernière modif.
     * @nullable
     */
    lastChangeDateTime?: Moment;
    /**
     * Dernière modif. par.
     * Maximum length: 12.
     * @nullable
     */
    lastChangedByUser?: string;
    /**
     * Ty. accès vers. pré.
     * Maximum length: 1.
     * @nullable
     */
    draftAccessType?: string;
    /**
     * Début du traitement.
     * @nullable
     */
    processingStartDateTime?: Moment;
    /**
     * Responsable.
     * Maximum length: 12.
     * @nullable
     */
    inProcessByUser?: string;
    /**
     * Sauveg. par l'util.
     * @nullable
     */
    draftIsKeptByUser?: boolean;
    /**
     * Début du blocage.
     * @nullable
     */
    enqueueStartDateTime?: Moment;
    /**
     * Créée par moi.
     * @nullable
     */
    draftIsCreatedByMe?: boolean;
    /**
     * Dern. modif. par moi.
     * @nullable
     */
    draftIsLastChangedByMe?: boolean;
    /**
     * Traitée par moi.
     * @nullable
     */
    draftIsProcessedByMe?: boolean;
    /**
     * Description.
     * Maximum length: 80.
     * @nullable
     */
    createdByUserDescription?: string;
    /**
     * Description.
     * Maximum length: 80.
     * @nullable
     */
    lastChangedByUserDescription?: string;
    /**
     * Description.
     * Maximum length: 80.
     * @nullable
     */
    inProcessByUserDescription?: string;
    /**
     * VersPrélim. (IDtech).
     */
    draftUuid: string;
    /**
     * ID entité vers. pré.
     * Maximum length: 30.
     * @nullable
     */
    draftEntityType?: string;
    /**
     * Créé le.
     * @nullable
     */
    creationDateTime?: Moment;
    /**
     * Returns an entity builder to construct instances of `I_DraftAdministrativeData`.
     * @returns A builder that constructs instances of entity type `I_DraftAdministrativeData`.
     */
    static builder(): EntityBuilderType<I_DraftAdministrativeData, I_DraftAdministrativeDataType>;
    /**
     * Returns a request builder to construct requests for operations on the `I_DraftAdministrativeData` entity type.
     * @returns A `I_DraftAdministrativeData` request builder.
     */
    static requestBuilder(): I_DraftAdministrativeDataRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `I_DraftAdministrativeData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `I_DraftAdministrativeData`.
     */
    static customField(fieldName: string): CustomFieldV2<I_DraftAdministrativeData>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface I_DraftAdministrativeDataType {
    createdByUser?: string | null;
    lastChangeDateTime?: Moment | null;
    lastChangedByUser?: string | null;
    draftAccessType?: string | null;
    processingStartDateTime?: Moment | null;
    inProcessByUser?: string | null;
    draftIsKeptByUser?: boolean | null;
    enqueueStartDateTime?: Moment | null;
    draftIsCreatedByMe?: boolean | null;
    draftIsLastChangedByMe?: boolean | null;
    draftIsProcessedByMe?: boolean | null;
    createdByUserDescription?: string | null;
    lastChangedByUserDescription?: string | null;
    inProcessByUserDescription?: string | null;
    draftUuid: string;
    draftEntityType?: string | null;
    creationDateTime?: Moment | null;
}
export declare namespace I_DraftAdministrativeData {
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: StringField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[lastChangeDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGE_DATE_TIME: DateField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[lastChangedByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGED_BY_USER: StringField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[draftAccessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT_ACCESS_TYPE: StringField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[processingStartDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESSING_START_DATE_TIME: DateField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[inProcessByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IN_PROCESS_BY_USER: StringField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[draftIsKeptByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT_IS_KEPT_BY_USER: BooleanField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[enqueueStartDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENQUEUE_START_DATE_TIME: DateField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[draftIsCreatedByMe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT_IS_CREATED_BY_ME: BooleanField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[draftIsLastChangedByMe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT_IS_LAST_CHANGED_BY_ME: BooleanField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[draftIsProcessedByMe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT_IS_PROCESSED_BY_ME: BooleanField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[createdByUserDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER_DESCRIPTION: StringField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[lastChangedByUserDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGED_BY_USER_DESCRIPTION: StringField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[inProcessByUserDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IN_PROCESS_BY_USER_DESCRIPTION: StringField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[draftUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT_UUID: StringField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[draftEntityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT_ENTITY_TYPE: StringField<I_DraftAdministrativeData>;
    /**
     * Static representation of the [[creationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE_TIME: DateField<I_DraftAdministrativeData>;
    /**
     * All fields of the I_DraftAdministrativeData entity.
     */
    const _allFields: Array<StringField<I_DraftAdministrativeData> | DateField<I_DraftAdministrativeData> | BooleanField<I_DraftAdministrativeData>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<I_DraftAdministrativeData>;
    /**
     * All key fields of the I_DraftAdministrativeData entity.
     */
    const _keyFields: Array<Field<I_DraftAdministrativeData>>;
    /**
     * Mapping of all key field names to the respective static field property I_DraftAdministrativeData.
     */
    const _keys: {
        [keys: string]: Field<I_DraftAdministrativeData>;
    };
}
//# sourceMappingURL=I_DraftAdministrativeData.d.ts.map