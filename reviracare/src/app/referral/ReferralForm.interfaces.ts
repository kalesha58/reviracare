export type ReferrerRole =
  | "participant"
  | "parent"
  | "family"
  | "support-coordinator"
  | "lac"
  | "plan-manager";

export type GenderOption =
  | "female"
  | "male"
  | "non-binary"
  | "prefer-not-to-say"
  | "other";

export type AboriginalTorresStraitOption =
  | "no"
  | "yes-aboriginal"
  | "yes-torres-strait"
  | "yes-both"
  | "not-sure";

export type LivingArrangement = "alone" | "family" | "supported" | "other";

export type FundingManaged = "ndia" | "self" | "plan-managed";

export type DeliveryPreference = "at-home" | "sil" | "community" | "clinic";

export interface IReferralFormState {
  referrerRole: ReferrerRole | "";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  participantFirstName: string;
  participantLastName: string;
  participantAge: string;
  participantDob: string;
  participantEmail: string;
  participantPhone: string;
  addressStreet: string;
  addressLine2: string;
  addressSuburb: string;
  addressPostCode: string;
  addressState: string;
  gender: GenderOption | "";
  aboriginalTorresStrait: AboriginalTorresStraitOption | "";
  livingArrangements: LivingArrangement | "";
  requireInterpreter: "yes" | "no" | "";
  interpreterDetails: string;
  primaryContactSameAsReferrer: "yes" | "no" | "";
  primaryContactFirstName: string;
  primaryContactLastName: string;
  primaryContactEmail: string;
  primaryContactPhone: string;
  primaryDisabilityDetail: string;
  ndisPlanNumber: string;
  planStartDate: string;
  planEndDate: string;
  servicesRequired: string[];
  desiredOutcomes: string;
  preferredDelivery: DeliveryPreference[];
  preferredAppointmentTime: string;
  fundingManaged: FundingManaged | "";
  planManagerName: string;
  planManagerEmail: string;
  planManagerPhone: string;
  billingEmail: string;
  behaviours: string[];
  otherBehavioursRisks: string;
  acknowledgement: boolean;
}
