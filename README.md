


# Executive Technical Documentation



---

# Account.md

# SwaggerClient::Account

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **String** | The customer account identifier in encrypted format, that needs to be enrolled to multi currency accounts | [optional] 





---

# AccountAccessCodeGenerationResponse.md

# SwaggerClient::AccountAccessCodeGenerationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_access_code** | **String** | Account access Code which will be used to see the clear account number | 
**access_url** | **String** | URL for viewing clear account number | 





---

# AccountApi.md

# SwaggerClient::AccountApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**account_closure**](AccountApi.md#account_closure) | **POST** /v1/accounts/closure | Closure of Account

# **account_closure**
> AccountClosureResponse account_closure(bodyauthorizationuuidacceptclient_idcontent_type, opts)

Closure of Account

This API allows the customer to close the account or credit card.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AccountApi.new
body = SwaggerClient::AccountClosureRequest.new # AccountClosureRequest | AccountClosureRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Closure of Account
  result = api_instance.account_closure(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AccountApi->account_closure: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AccountClosureRequest**](AccountClosureRequest.md)| AccountClosureRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**AccountClosureResponse**](AccountClosureResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json







---

# AccountBalancesSummaryInquiryResponse.md

# SwaggerClient::AccountBalancesSummaryInquiryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_account_balance_summary** | [**CreditCardAccountBalanceSummary**](CreditCardAccountBalanceSummary.md) |  | [optional] 
**ready_credit_account_balance_summary** | [**ReadyCreditAccountBalanceSummary**](ReadyCreditAccountBalanceSummary.md) |  | [optional] 





---

# AccountClosureRequest.md

# SwaggerClient::AccountClosureRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **String** | The account identifier in encrypted format.Typically, this is not displayed to the customer | 
**account_closure_reason_code** | **String** | Account closure reason code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClosureReasonCode} resource to get valid value of this field with description. | [optional] 
**consent_given_flag** | **BOOLEAN** | This is consent flag from the customer to pay back if any outstanding on that account while closure | 





---

# AccountClosureResponse.md

# SwaggerClient::AccountClosureResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_closure_reference_id** | **String** | Unique Reference Id for the request for account closure. | [optional] 





---

# AccountConsentDetails.md

# SwaggerClient::AccountConsentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_type** | **String** | ConsentType | 
**consent_given_flag** | **BOOLEAN** | Consent flag. Valid values: true and false | 
**consent_update_date** | **Date** | Consent Updated Date | 
**card_id** | **String** | The card id  in encrypted format. | [optional] 





---

# AccountCurrencyDetails.md

# SwaggerClient::AccountCurrencyDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format | [optional] 
**new_account_opened_flag** | **BOOLEAN** | This field is to indicate if the  account is newly opened or not. | 
**global_wallet_account_type** | **String** | Type of account.Type of account.This is a reference data field. Please use /v1/apac/utilities/referenceData/{globalWalletAccountType} resource to get possible values of this field with descriptions. | [optional] 
**enrollment_status_flag** | **BOOLEAN** | Flag to indicate whether new FCY account is enrolled to Multi currency account(Global Wallet). | [optional] 





---

# AccountDetails.md

# SwaggerClient::AccountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **String** | The customer account identifier in encrypted format | 
**enrollment_status_flag** | **BOOLEAN** | This field is to indicate if the  account is enrolled for multi currency account or not. | 





---

# AccountDetailsResponse.md

# SwaggerClient::AccountDetailsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_account** | [**CreditCardAccount**](CreditCardAccount.md) |  | [optional] 
**ready_credit_account** | [**ReadyCreditAccount**](ReadyCreditAccount.md) |  | [optional] 
**checking_account** | [**CheckingAccount**](CheckingAccount.md) |  | [optional] 
**savings_account** | [**SavingsAccount**](SavingsAccount.md) |  | [optional] 
**time_deposit_account** | [**TimeDepositAccount**](TimeDepositAccount.md) |  | [optional] 
**loan_account** | [**LoanAccount**](LoanAccount.md) |  | [optional] 
**mutual_fund_account** | [**MutualFundAccount**](MutualFundAccount.md) |  | [optional] 
**securities_brokerage_account** | [**SecuritiesBrokerageAccount**](SecuritiesBrokerageAccount.md) |  | [optional] 
**call_deposit_account** | [**CallDepositAccount**](CallDepositAccount.md) |  | [optional] 
**premium_deposit_account** | [**PremiumDepositAccount**](PremiumDepositAccount.md) |  | [optional] 





---

# AccountDtls.md

# SwaggerClient::AccountDtls

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_account_number** | **String** | Currency code which has to be added to Multi Currency Account in ISO 4217 format. | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format | [optional] 
**currency_code** | **String** | Currency code which has to be added to Multi Currency Account in ISO 4217 format. | [optional] 
**enrollment_status_flag** | **BOOLEAN** | This field is to indicate if the  account is enrolled for Multi Currency Account or not. | [optional] 
**primary_account_flag** | **BOOLEAN** | Flag to indicate if account is primary | [optional] 
**account_balance** | **Float** | Current Balance of the Account. | [optional] 
**linked_account_details** | [**Array&lt;LinkedAccountDetails&gt;**](LinkedAccountDetails.md) |  | [optional] 





---

# AccountGroupSummary.md

# SwaggerClient::AccountGroupSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_group** | **String** | Account group is a classification of accounts according to their common characteristics. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountGroup} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | 
**accounts** | [**Array&lt;AccountSummary&gt;**](AccountSummary.md) | Summarized list of each account type under a specific product group, held by customer | 
**insurance_policies** | [**Array&lt;InsurancePolicySummary&gt;**](InsurancePolicySummary.md) | Summarized list of every insurance policy held by the customer. | [optional] 
**total_current_balance** | [**GroupBalance**](GroupBalance.md) |  | [optional] 
**total_available_balance** | [**GroupBalance**](GroupBalance.md) |  | [optional] 
**total_outstanding_balance** | [**GroupBalance**](GroupBalance.md) |  | [optional] 





---

# AccountInfo.md

# SwaggerClient::AccountInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **String** | The account identifier in encrypted format.Typically, this is not displayed to the customer. | 





---

# AccountStatementListResponse.md

# SwaggerClient::AccountStatementListResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statement_list** | [**Array&lt;StatementList&gt;**](StatementList.md) |  | [optional] 
**next_start_index** | **String** | The next start index that indicates the next set of records to be fetched, if there are available. Typically, this value should be populated if the first response has the value of nextStartIndex. | [optional] 





---

# AccountSummary.md

# SwaggerClient::AccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checking_account_summary** | [**CheckingAccountSummary**](CheckingAccountSummary.md) |  | [optional] 
**savings_account_summary** | [**SavingsAccountSummary**](SavingsAccountSummary.md) |  | [optional] 
**credit_card_account_summary** | [**CreditCardAccountSummary**](CreditCardAccountSummary.md) |  | [optional] 
**ready_credit_account_summary** | [**ReadyCreditAccountSummary**](ReadyCreditAccountSummary.md) |  | [optional] 
**loan_account_summary** | [**LoanAccountSummary**](LoanAccountSummary.md) |  | [optional] 
**mutual_fund_account_summary** | [**MutualFundAccountSummary**](MutualFundAccountSummary.md) |  | [optional] 
**securities_brokerage_account_summary** | [**SecuritiesBrokerageAccountSummary**](SecuritiesBrokerageAccountSummary.md) |  | [optional] 
**call_deposit_account_summary** | [**CallDepositAccountSummary**](CallDepositAccountSummary.md) |  | [optional] 
**premium_deposit_account_summary** | [**PremiumDepositAccountSummary**](PremiumDepositAccountSummary.md) |  | [optional] 
**time_deposit_account_summary** | [**TimeDepositAccountSummary**](TimeDepositAccountSummary.md) |  | [optional] 





---

# Accounts.md

# SwaggerClient::Accounts

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unmasked_account_number** | **String** | An unmasked account number to be displayed to the customer | 
**account_id** | **String** | The account identifier in encrypted format.Typically, this is not displayed to the customer. | 





---

# AccountsApi.md

# SwaggerClient::AccountsApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**credit_limit_decrease**](AccountsApi.md#credit_limit_decrease) | **PUT** /v1/creditCards/creditLimits/decrease | Decrease Credit Limit
[**credit_limit_decrease_consent**](AccountsApi.md#credit_limit_decrease_consent) | **PUT** /v1/creditCards/creditLimits/decrease/consents | Decrease Credit Limit with Consent

# **credit_limit_decrease**
> CreditLimitDecreaseResponse credit_limit_decrease(bodyauthorizationuuidacceptclient_idcontent_type, opts)

Decrease Credit Limit

This API allows the customer to submit a request for the credit limit decrease.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AccountsApi.new
body = SwaggerClient::CreditLimitDecreaseRequest.new # CreditLimitDecreaseRequest | CreditLimitDecreaseRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | client id generated during consumer on-boarding
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Decrease Credit Limit
  result = api_instance.credit_limit_decrease(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AccountsApi->credit_limit_decrease: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreditLimitDecreaseRequest**](CreditLimitDecreaseRequest.md)| CreditLimitDecreaseRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D; | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| client id generated during consumer on-boarding | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**CreditLimitDecreaseResponse**](CreditLimitDecreaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **credit_limit_decrease_consent**
> CreditLimitDecreaseConsentResponse credit_limit_decrease_consent(bodyauthorizationuuidacceptclient_idcontent_type, opts)

Decrease Credit Limit with Consent

This API allows the customer to submit a request for the credit limit decrease with consent.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::AccountsApi.new
body = SwaggerClient::CreditLimitDecreaseConsentRequest.new # CreditLimitDecreaseConsentRequest | CreditLimitDecreaseConsentRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | client id generated during consumer on-boarding
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Decrease Credit Limit with Consent
  result = api_instance.credit_limit_decrease_consent(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AccountsApi->credit_limit_decrease_consent: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreditLimitDecreaseConsentRequest**](CreditLimitDecreaseConsentRequest.md)| CreditLimitDecreaseConsentRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D; | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| client id generated during consumer on-boarding | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**CreditLimitDecreaseConsentResponse**](CreditLimitDecreaseConsentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json







---

# AccountsGroupList.md

# SwaggerClient::AccountsGroupList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_group_summary** | [**Array&lt;AccountGroupSummary&gt;**](AccountGroupSummary.md) | Summarized list of every product group by the customer | [optional] 
**next_start_index** | **String** | In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data. | [optional] 





---

# ActivateCardRequest.md

# SwaggerClient::ActivateCardRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | 





---

# ActivationRequest.md

# SwaggerClient::ActivationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overseas_card_activation_end_date** | **Date** | Card activation end date in ISO 8601 date format YYYY-MM-DD for overseas usage. For perpetual activation, no value to be sent. | [optional] 
**overseas_card_activation_start_date** | **Date** | Card activation start date in ISO 8601 date format YYYY-MM-DD for overseas usage. For perpetual activation, no value to be sent. | [optional] 
**perpetual_activation_indicator** | **String** | Indicator to specify whether the card to be activated perpetually | [optional] 





---

# AdditionalData.md

# SwaggerClient::AdditionalData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_children** | [**BigDecimal**](BigDecimal.md) | Number of children | [optional] 
**number_of_dependents** | [**BigDecimal**](BigDecimal.md) | Number of dependants | [optional] 
**staff_indicator** | **BOOLEAN** | Indicates whether prospect is a Citi Staff. Valid values: true and false | [optional] 
**country_specific_group** | [**CountrySpecificGroup**](CountrySpecificGroup.md) |  | [optional] 





---

# AdditionalDataAdd.md

# SwaggerClient::AdditionalDataAdd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_fund_source** | **String** | This field is to indicates the primary source from which this account will be funded. This is a reference data field. Please use /v1/utilities/referenceData/{accountFundSource} resource to get valid value of this field with description. | [optional] 
**number_of_dependents** | [**BigDecimal**](BigDecimal.md) | Number of dependents | [optional] 
**staff_indicator** | **BOOLEAN** | Flag to indicates if applicant is a Citi Staff. Valid values: true and false | [optional] 
**business_nature** | **String** | Business nature of the applicant This is a reference data field. Please use /v1/utilities/referenceData/{businessNature} resource to get valid value of this field with description. | [optional] 
**emergency_contact_name** | **String** | Emergency contact given name | [optional] 
**emergency_contact_surname** | **String** | Emergency contact surname | [optional] 
**emergency_contact_relationship** | **String** | Applicant&#x27;s relationship with the emergency contact.This is a reference data. Please use /v1/utilities/referenceData/{emergencyContactRelationship} resource to get valid value of this field | [optional] 
**emergency_contact_phone_number** | **String** | Emergency contact Number. | [optional] 
**over_limit_consent_flag** | **BOOLEAN** | Customer consent on spending more than the limit assigned to him. Valid values: true and false | [optional] 
**country_specific_group** | [**CountrySpecificGroup**](CountrySpecificGroup.md) |  | [optional] 
**primary_bank_details** | [**PrimaryBankDetails**](PrimaryBankDetails.md) |  | [optional] 
**referral_given_name** | **String** | Referral First Name. | [optional] 
**referral_surname** | **String** | Referral Surname/Last Name. | [optional] 
**referral_code** | **String** | Referral Code used for the customer | [optional] 
**media_id** | **String** | The media ID will be used to determine which offer / campaign banner was clicked when the customer made his application  | [optional] 
**introducer_id** | **String** | Unique identifier associated with the introducer who had referred the applicant. | [optional] 
**related_to_citi_employee_flag** | **BOOLEAN** | Self declaration if applicant has any relation with citi bank employee. Valid values: true and false | [optional] 
**related_citi_employee_name** | **String** | Name of the citi employee if applicant has any relation with citi bank employee. | [optional] 
**related_citi_employee_department** | **String** | Department of citi employee if applicant has any relation with citi bank employee. | [optional] 
**credit_card_usage_purpose** | **String** | Indicates applicants usage of credit card whether it is for personal or business.Please use /v1/utilities/referenceData/{creditCardUsagePurpose} resource to get valid value of this field with description. | [optional] 
**cash_pin_flag** | **BOOLEAN** | Indicates whether the customer wants a separate cash PIN. | [optional] 
**referral_tracking** | [**ReferralTracking**](ReferralTracking.md) |  | [optional] 
**utility_bill_details** | [**UtilityBillDetails**](UtilityBillDetails.md) |  | [optional] 
**fee_code** | **String** | Fee code that applied to the requested product | [optional] 
**billing_cycle_day** | **String** | Day of each month for the bill payment. This is a reference data field. Please use /v1/utilities/referenceData/{billingCycleDay} resource to get valid value of this field with description. | [optional] 
**application_reference_id** | **String** | Unique reference ID associated with the application | [optional] 
**customer_segment** | **String** | Customer segment decides each applicants interest rate  Different customer target will be subjected to different interest rate..This is a reference data field. Please use /v1/utilities/referenceData/{customerSegment} resource to get valid value of this field with description.  | [optional] 
**printing_serial_number** | **String** | This field refers to the unique number for each application to be identified by COLA and printed in PDF form.It enables to identify the customer in case the customer could not complete filling his/her details and was dropped-off in between | [optional] 
**additional_information** | **String** | This field refers to the additional comments given by the customer which is to be noted-down during the application process. | [optional] 
**trade_reference_details** | [**TradeReferenceDetails**](TradeReferenceDetails.md) |  | [optional] 
**bureau_session_id_** | **String** | Session ID that is generated from the session / interaction of channel with bureau. | [optional] 





---

# AdditionalDataUpdate.md

# SwaggerClient::AdditionalDataUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_fund_source** | **String** | This field is to indicates the primary source from which this account will be funded. This is a reference data field. Please use /v1/utilities/referenceData/{accountFundSource} resource to get valid value of this field with description. | [optional] 
**number_of_dependents** | [**BigDecimal**](BigDecimal.md) | Number of dependants | [optional] 
**staff_indicator** | **BOOLEAN** | Flag to indicates if applicant is a Citi Staff. Valid values: true and false | [optional] 
**otp_authentication_success_flag** | **BOOLEAN** | Flag to indicate if customer is authenticated successfully | [optional] 
**bureau_data_pre_populate_consent_flag** | **BOOLEAN** | Flag to capture applicant&#x27;s consent for Bureau Data Prepopulation | [optional] 
**business_nature** | **String** | Business nature of the applicant. This is a reference data data field. Please use /v1/utilities/referenceData/{businessNature} resource to get valid value of this field with description. | [optional] 
**emergency_contact_name** | **String** | Emergency contact given name | [optional] 
**emergency_contact_surname** | **String** | Emergency contact surname | [optional] 
**emergency_contact_relationship** | **String** | Applicant&#x27;s relationship with the emergency contact.This is a reference data. Please use /v1/utilities/referenceData/{emergencyContactRelationship} resource to get valid value of this field | [optional] 
**emergency_contact_phone_number** | **String** | Emergency Contact Number. | [optional] 
**over_limit_consent_flag** | **BOOLEAN** | Customer Consent on spending more than the limit assigned to him. Valid values: true and false | [optional] 
**country_specific_group** | [**CountrySpecificGroup**](CountrySpecificGroup.md) |  | [optional] 
**primary_bank_details** | [**PrimaryBankDetails**](PrimaryBankDetails.md) |  | [optional] 
**referral_given_name** | **String** | Referral First Name. | [optional] 
**referral_surname** | **String** | Referral Surname/Last Name. | [optional] 
**introducer_id** | **String** | Unique identifier associated with the introducer who had referred the applicant. | [optional] 
**related_to_citi_employee_flag** | **BOOLEAN** | Self declaration if applicant has any relation with citi bank employee. Valid values: true and false | [optional] 
**related_citi_employee_name** | **String** | Name of the citi employee if applicant has any relation with citi bank employee. | [optional] 
**related_citi_employee_department** | **String** | Department of citi employee if applicant has any relation with citi bank employee. | [optional] 
**credit_card_usage_purpose** | **String** | Indicates applicants usage of credit card whether it is for personal or business.Please use /v1/utilities/referenceData/{creditCardUsagePurpose} resource to get valid value of this field with description. | [optional] 
**cash_pin_flag** | **BOOLEAN** | Indicates whether the customer wants a separate cash PIN. | [optional] 
**media_id** | **String** | The media ID will be used to determine which offer / campaign banner was clicked when the customer made his application  | [optional] 
**referral_code** | **String** | Referral Code used for the customer | [optional] 
**referral_tracking** | [**ReferralTracking**](ReferralTracking.md) |  | [optional] 
**utility_bill_details** | [**UtilityBillDetails**](UtilityBillDetails.md) |  | [optional] 
**fee_code** | **String** | Fee code that applied to the requested product | [optional] 
**billing_cycle_day** | **String** | Day of each month for the bill payment. This is a reference data field. Please use /v1/utilities/referenceData/{billingCycleDay} resource to get valid value of this field with description. | [optional] 
**application_reference_id** | **String** | Unique reference ID associated with the application | [optional] 
**customer_segment** | **String** | Customer segment decides each applicant’s interest rate  Different customer target will be subjected to different interest rate..This is a reference data field. Please use /v1/utilities/referenceData/{customerSegment} resource to get valid value of this field with description.  | [optional] 
**printing_serial_number** | **String** | This field refers to the unique number for each application to be identified by COLA and printed in PDF form.It enables to identify the customer in case the customer could not complete filling his/her details and was dropped-off in between | [optional] 
**additional_information** | **String** | This field refers to the additional comments given by the customer which is to be noted-down during the application process. | [optional] 
**trade_reference_details** | [**TradeReferenceDetails**](TradeReferenceDetails.md) |  | [optional] 
**bureau_session_id_** | **String** | Session ID that is generated from the session / interaction of channel with bureau. | [optional] 





---

# Address.md

# SwaggerClient::Address

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_specific_address** | [**CountrySpecificAddress**](CountrySpecificAddress.md) |  | [optional] 
**city** | **String** | Town/City | [optional] 
**address_type** | **String** | Type of the address. This is a reference data field. Please use /utilities/referenceData/{addressType} resource to get valid values of this field with descriptions. | 
**country_code** | **String** | ISO country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. | [optional] 
**postal_code** | **String** | Postal/ZIP code | [optional] 
**address_line1** | **String** | Address line 1 | [optional] 
**address_line2** | **String** | Address line 2. It is the unit number for Australia | [optional] 
**address_line3** | **String** | Address line 3. | [optional] 
**state** | **String** | State.This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressState} resource to get valid value of this field with description. | [optional] 
**address_line4** | **String** | Address line 4. | [optional] 





---

# AddressSearchUsingPostalCodeResponse.md

# SwaggerClient::AddressSearchUsingPostalCodeResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_search_details** | [**Array&lt;Address&gt;**](Address.md) |  | 





---

# Alerts.md

# SwaggerClient::Alerts

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_alert_preference** | **String** | Applicant&#x27;s consent for receiving transaction alert. This is a reference data field. Please use /v1/utilities/referenceData/{transactionAlertPreference} resource to get valid value of this field with description. | [optional] 





---

# AmortizationSched.md

# SwaggerClient::AmortizationSched

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installment_number** | **String** | Installment number | 
**installment_amount** | **Float** | Installment amount to be paid by customer in order to repay the loan in local currency. | 
**principal_amount** | **Float** | The portion of the Principal Amount Paid for the loan in local currency. | 
**installment_interest_amount** | **Float** | The interest  amount to be paid as installment. | 





---

# AmortizationSchedule.md

# SwaggerClient::AmortizationSchedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installment_number** | **Integer** | Numbers listed from 1 to the number of months that the customer has chosen | 
**installment_amount** | **Float** | Installment amount to be payed by customer in order to repay the loan. | 
**principal_amount** | **Float** | The portion of the Principal Amount Paid for the loan. | 
**installment_interest_amount** | **Float** | The interest  amount to be paid as installment. | 





---

# Applicant.md

# SwaggerClient::Applicant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Array&lt;Address&gt;**](Address.md) |  | 
**partner_customer_details** | [**PartnerCustomerDetails**](PartnerCustomerDetails.md) |  | [optional] 
**mother_maiden_name** | **String** | Mother&#x27;s maiden name | 
**identification_document_details** | [**Array&lt;IdentificationDocumentDetails&gt;**](IdentificationDocumentDetails.md) |  | [optional] 
**phone** | [**Array&lt;Phone&gt;**](Phone.md) |  | 
**employment_details** | [**EmploymentDetails**](EmploymentDetails.md) |  | 
**name** | [**Name**](Name.md) |  | 
**consent_details** | [**Array&lt;ConsentDetails&gt;**](ConsentDetails.md) |  | 
**reward_redemption_allowed_flag** | **BOOLEAN** | Flag to indicated whether reward redemption allowed for supplementary. Valid values: true and false | [optional] 
**demographics** | [**Demographics**](Demographics.md) |  | [optional] 





---

# ApplicantAdd.md

# SwaggerClient::ApplicantAdd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ocr** | [**Ocr**](Ocr.md) |  | [optional] 
**mother_maiden_name** | **String** | Mother&#x27;s maiden name | [optional] 
**name** | [**Name**](Name.md) |  | 
**student_indicator** | **String** | Indicates if the applicant is a student.Valid values are Yes or No | [optional] 
**demographics** | [**Demographics**](Demographics.md) |  | [optional] 
**address** | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
**email** | [**Array&lt;EmailAdd&gt;**](EmailAdd.md) |  | [optional] 
**phone** | [**Array&lt;Phone&gt;**](Phone.md) |  | 
**contact_preference** | [**ContactPreference**](ContactPreference.md) |  | [optional] 
**contact_consent** | [**ContactConsent**](ContactConsent.md) |  | [optional] 
**financial_information** | [**FinancialInformationAdd**](FinancialInformationAdd.md) |  | [optional] 
**education** | [**Education**](Education.md) |  | [optional] 
**employment_details** | [**Array&lt;EmploymentDetails&gt;**](EmploymentDetails.md) |  | [optional] 
**identification_document_details** | [**Array&lt;IdentificationDocumentDetailsAdd&gt;**](IdentificationDocumentDetailsAdd.md) |  | [optional] 
**additional_data** | [**AdditionalDataAdd**](AdditionalDataAdd.md) |  | [optional] 
**partner_customer_details** | [**PartnerCustomerDetails**](PartnerCustomerDetails.md) |  | [optional] 
**consent_details** | [**Array&lt;ConsentDetails&gt;**](ConsentDetails.md) |  | [optional] 
**marketing_consent** | [**MarketingConsent**](MarketingConsent.md) |  | [optional] 
**self_declaration** | [**SelfDeclaration**](SelfDeclaration.md) |  | [optional] 
**alerts** | [**Alerts**](Alerts.md) |  | [optional] 
**kyc_information** | [**KycInformation**](KycInformation.md) |  | [optional] 
**parent** | [**ParentInformation**](ParentInformation.md) |  | [optional] 





---

# ApplicantAddAdditionalData.md

# SwaggerClient::ApplicantAddAdditionalData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_dependents** | **Integer** | Number of dependents | [optional] 





---

# ApplicantAddAddress.md

# SwaggerClient::ApplicantAddAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_type** | **String** | Type of the address. This is a reference data field. Please use /utilities/referenceData/{addressType} resource to get valid values of this field with descriptions. You can use addressType as the referenceCode parameter to retrieve the values. | [optional] 
**address_line1** | **String** | Address line 1 | [optional] 
**address_line2** | **String** | Address line 2 | [optional] 
**address_line3** | **String** | Address line 3 | [optional] 
**address_line4** | **String** | Address line 4 | [optional] 
**city_name** | **String** | City | [optional] 
**state** | **String** | State.This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressState} resource to get valid value of this field with description. You can use addressState field name as the referenceCode parameter to retrieve the values. | [optional] 
**postal_code** | **String** | Postal/ZIP code | [optional] 
**country_code** | **String** | ISO country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use countryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**residence_duration_in_years** | **Integer** | Applicant&#x27;s residence duration in the current address in years | [optional] 
**residence_duration_in_months** | **Integer** | Applicant&#x27;s residence duration in the current address in months | [optional] 
**country_specific_address** | [**ApplicantAddCountrySpecificAddress**](ApplicantAddCountrySpecificAddress.md) |  | [optional] 





---

# ApplicantAddApplicant.md

# SwaggerClient::ApplicantAddApplicant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_type** | **String** | Type of an applicant.This is a reference data field.Please use /utilities/referenceData/{applicantType} resource to get valid values of this field with descriptions. You can use the fieldname as the referenceCode parameter to retrieve the values. | 
**mother_maiden_name** | **String** | Mothers maiden name | [optional] 
**name** | [**ApplicantAddName**](ApplicantAddName.md) |  | 
**demographics** | [**ApplicantAddDemographics**](ApplicantAddDemographics.md) |  | [optional] 
**address** | [**Array&lt;ApplicantAddAddress&gt;**](ApplicantAddAddress.md) |  | [optional] 
**email** | [**Array&lt;ApplicantAddEmail&gt;**](ApplicantAddEmail.md) |  | [optional] 
**phone** | [**Array&lt;ApplicantAddPhone&gt;**](ApplicantAddPhone.md) |  | [optional] 
**financial_information** | [**ApplicantAddFinancialInformation**](ApplicantAddFinancialInformation.md) |  | [optional] 
**employment_details** | [**Array&lt;ApplicantAddEmploymentDetails&gt;**](ApplicantAddEmploymentDetails.md) |  | [optional] 
**identification_document_details** | [**Array&lt;ApplicantAddIdentificationDocumentDetails&gt;**](ApplicantAddIdentificationDocumentDetails.md) |  | [optional] 
**additional_data** | [**ApplicantAddAdditionalData**](ApplicantAddAdditionalData.md) |  | [optional] 
**partner_customer_details** | [**ApplicantAddPartnerCustomerDetails**](ApplicantAddPartnerCustomerDetails.md) |  | [optional] 
**consent_details** | [**Array&lt;ApplicantAddConsentDetails&gt;**](ApplicantAddConsentDetails.md) |  | [optional] 
**kyc_information** | [**ApplicantAddKycInformation**](ApplicantAddKycInformation.md) |  | [optional] 
**contact_consent** | [**ApplicantAddContactConsent**](ApplicantAddContactConsent.md) |  | [optional] 





---

# ApplicantAddConsentDetails.md

# SwaggerClient::ApplicantAddConsentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_type** | **String** | Applicant&#x27;s consent types. This is a reference data field. Please use /v1/apac/utilities/referenceData/{consentType} resource to get valid value of this field with description. You can use consentType field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_consent_given** | **BOOLEAN** | Consent flag. Valid values: true and false | [optional] 





---

# ApplicantAddContactConsent.md

# SwaggerClient::ApplicantAddContactConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 
**ok_to_mail** | **BOOLEAN** | Applicant&#x27;s consent for receiving mails. Valid values: true and false | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. Valid values: true and false | [optional] 





---

# ApplicantAddCountrySpecificAddress.md

# SwaggerClient::ApplicantAddCountrySpecificAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_number** | **String** | Applicant&#x27;s unit number | [optional] 
**floor_number** | **String** | Applicant&#x27;s floor number | [optional] 
**block_number** | **String** | Applicant&#x27;s block number | [optional] 
**building_name** | **String** | Applicant&#x27;s building name | [optional] 
**estate_name** | **String** | Applicant&#x27;s estate name | [optional] 
**street_number** | **String** | Applicant&#x27;s street number | [optional] 
**street_name** | **String** | Applicant&#x27;s street name | [optional] 
**street_type** | **String** | Applicant&#x27;s street type. This is a reference data field.Please use /v1/apac/utilities/referenceData/{streetType} resource to get valid value of this field with description. You can use streetType field name as the referenceCode parameter to retrieve the values | [optional] 





---

# ApplicantAddCreditCardProduct.md

# SwaggerClient::ApplicantAddCreditCardProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emboss_name** | **String** | Name to be embossed on card. | [optional] 
**requested_credit_limit** | **Float** | Credit limit accepted by applicant | [optional] 
**overseas_card_activation_flag** | **BOOLEAN** | Flag to activate the card for overseas usage.Valid values: true and false | [optional] 





---

# ApplicantAddDemographics.md

# SwaggerClient::ApplicantAddDemographics

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gender** | **String** | Gender/sex. This is a reference data field. Please use /v1/apac/utilities/referenceData/{gender} resource to get valid value of this field with description. You can use gender field name as the referenceCode parameter to retrieve the values. | [optional] 
**date_of_birth** | **Date** | Applicant&#x27;s date of birth in  ISO 8601 date format YYYY-MM-DD | [optional] 
**place_of_birth** | **String** | Applicant&#x27;s place of birth | [optional] 
**country_of_birth** | **String** | Applicant&#x27;s Country of birth. This is a reference data field. Please use /utilities/referenceData/{country} resource to get valid values of this field with descriptions. You can use the countryOfBirth as the referenceCode parameter to retrieve the values. | [optional] 
**nationality** | **String** | Applicant&#x27;s nationality. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use nationality field name as the referenceCode parameter to retrieve the values. | [optional] 
**marital_status** | **String** | Applicant&#x27;s marital status. This is a reference data field. Please use /v1/apac/utilities/referenceData/{maritalStatus} resource to get valid value of this field with description. You can use maritalStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**residential_status** | **String** | Indicate status of residence. This is a reference data field. Please use /v1/apac/utilities/referenceData/{residenceStatus} resource to get valid value of this field with description. You can use residenceStatus field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantAddEmail.md

# SwaggerClient::ApplicantAddEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **String** | Applicant&#x27;s email address | 
**ok_to_email** | **BOOLEAN** | Applicant&#x27;s consent for receiving email. Valid values: true and false | [optional] 
**is_preferred_email_address** | **BOOLEAN** | Flag to mark preferred email. Valid values: true and false | [optional] 





---

# ApplicantAddEmploymentDetails.md

# SwaggerClient::ApplicantAddEmploymentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employment_duration_in_years** | **Integer** | Employment duration in years | [optional] 
**employment_durationi_in_months** | **Integer** | Employment duration in months | [optional] 
**employer_name** | **String** | Name of the employer. | [optional] 
**job_title** | **String** | Job Title. This a reference data field. Please use /utilities/referenceData/{jobTitle} resource to get valid values of this field with descriptions. You can use the jobTitle as the referenceCode parameter to retrieve the values. | [optional] 
**occupation_code** | **String** | Occupation code. This is a reference data field. Please use /utilities/referenceData/{occupationCode} resource to get valid values of this field with descriptions. You can use the occupationCode as the referenceCode parameter to retrieve the values. | [optional] 
**employment_status** | **String** | Status of the employment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{employmentStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantAddFinancialInformation.md

# SwaggerClient::ApplicantAddFinancialInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**income_details** | [**Array&lt;ApplicantAddIncomeDetails&gt;**](ApplicantAddIncomeDetails.md) |  | [optional] 





---

# ApplicantAddIdentificationDocumentDetails.md

# SwaggerClient::ApplicantAddIdentificationDocumentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_type** | **String** | Type of Identification document. This is a reference data field. Please use /v1/apac/utilities/referenceData/{idType} resource to get valid values of this field with descriptions | [optional] 
**id_number** | **String** | Unique identifier of identification document. | [optional] 
**id_expiry_date** | **Date** | Expiry date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_date** | **Date** | Issuance date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_place** | **String** | Identification document issuance place | [optional] 
**id_issue_state** | **String** | State from which identification document was issued | [optional] 
**id_issue_country** | **String** | Country of issuance. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use idIssueCountry field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_primary_id** | **BOOLEAN** | Flag to mark primary identification document. Valid values: true and false | [optional] 





---

# ApplicantAddIncomeDetails.md

# SwaggerClient::ApplicantAddIncomeDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**income_type** | **String** | Applciants income type. This is a reference data field. Please use /utilities/referenceData/{incomeType} resource to get valid values of this field with descriptions. You can use the fieldname as the referenceCode parameter to retrieve the values. | [optional] 
**fixed_amount** | **Float** | Fixed income amount of applicant | [optional] 
**variable_amount** | **Float** | Variable income amount of applicant | [optional] 
**frequency** | **String** | Income Frequency. This a reference data field. Please use /utilities/referenceData/{frequency} resource to get valid values of this field with descriptions. You can use the fieldname as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantAddKycInformation.md

# SwaggerClient::ApplicantAddKycInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_public_figure_declaration_flag** | **BOOLEAN** | Flag for self declaration if applicant is public figure. Valid values: true and false | [optional] 





---

# ApplicantAddName.md

# SwaggerClient::ApplicantAddName

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salutation** | **String** | Salutation. This is a reference data field. Please use /v1/apac/utilities/referenceData/{salutation} resource to get valid value of this field with description. You can use salutation field name as the referenceCode parameter to retrieve the values. | [optional] 
**given_name** | **String** | Given/first name of the applicant | 
**middle_name** | **String** | Middle name of the applicant | [optional] 
**surname** | **String** | Surname/last name of the applicant | [optional] 
**alias_name** | **String** | Alias name of the applicant | [optional] 





---

# ApplicantAddPartnerCustomerDetails.md

# SwaggerClient::ApplicantAddPartnerCustomerDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_customer_internal_id** | **String** | Unique customer internal number associated with the partner. | [optional] 
**partner_customer_id** | **String** | Unique customer Id associated with the partner | [optional] 
**partner_customer_segment** | **String** | Partner customer segment.Partner customer segment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{partnerCustomerSegment} resource to get possible value of this field with description. You can use partnerCustomerSegment field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantAddPhone.md

# SwaggerClient::ApplicantAddPhone

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_type** | **String** | The type of phone.This is a reference data field. Please use /v1/apac/utilities/referenceData/{phoneType} resource to get valid value of this field with description. You can use phoneType field name as the referenceCode parameter to retrieve the values. | 
**phone_country_code** | **String** | Country code of phone number | 
**area_code** | **String** | The area code of phone number | [optional] 
**phone_number** | **String** | Applicant&#x27;s phone number | 
**extension** | **String** | Extension of phone number | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. This is applicable only if phone type is MOBILE. Valid values: true and false | [optional] 
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 





---

# ApplicantAddRequest.md

# SwaggerClient::ApplicantAddRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | 
**applicant** | [**ApplicantAddApplicant**](ApplicantAddApplicant.md) |  | 
**credit_card_product** | [**ApplicantAddCreditCardProduct**](ApplicantAddCreditCardProduct.md) |  | [optional] 





---

# ApplicantAddResponse.md

# SwaggerClient::ApplicantAddResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_id** | **String** | Unique identifier for an applicant | 





---

# ApplicantDeleteRequest.md

# SwaggerClient::ApplicantDeleteRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | It is used to control the flow for subsequent requests in the session. | 





---

# ApplicantDetail.md

# SwaggerClient::ApplicantDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthly_income** | **Float** |  | [optional] 





---

# ApplicantInquiryAdditionalData.md

# SwaggerClient::ApplicantInquiryAdditionalData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_dependents** | **Integer** | Number of dependents | [optional] 





---

# ApplicantInquiryAddress.md

# SwaggerClient::ApplicantInquiryAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_type** | **String** | Type of the address. This is a reference data field. Please use /utilities/referenceData/{addressType} resource to get valid values of this field with descriptions. You can use addressType as the referenceCode parameter to retrieve the values. | [optional] 
**address_line1** | **String** | Address line 1 | [optional] 
**address_line2** | **String** | Address line 2 | [optional] 
**address_line3** | **String** | Address line 3 | [optional] 
**address_line4** | **String** | Address line 4 | [optional] 
**city_name** | **String** | City | [optional] 
**state** | **String** | State.This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressState} resource to get valid value of this field with description. You can use addressState field name as the referenceCode parameter to retrieve the values. | [optional] 
**postal_code** | **String** | Postal/ZIP code | [optional] 
**country_code** | **String** | ISO country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use countryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**residence_duration_in_years** | **Integer** | Applicant&#x27;s residence duration in the current address in years | [optional] 
**residence_duration_in_months** | **Integer** | Applicant&#x27;s residence duration in the current address in months | [optional] 
**country_specific_address** | [**ApplicantInquiryCountrySpecificAddress**](ApplicantInquiryCountrySpecificAddress.md) |  | [optional] 





---

# ApplicantInquiryApplicant.md

# SwaggerClient::ApplicantInquiryApplicant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_type** | **String** | Type of an applicant.This is a reference data field.Please use /utilities/referenceData/{applicantType} resource to get valid values of this field with descriptions. You can use the fieldname as the referenceCode parameter to retrieve the values. | 
**applicant_id** | **String** | Unique ID created for an Applicant. This is retuned back in ApplicantAdd response and the same should be passed here. | [optional] 
**mother_maiden_name** | **String** | Mothers maiden name | [optional] 
**name** | [**ApplicantInquiryName**](ApplicantInquiryName.md) |  | 
**demographics** | [**ApplicantInquiryDemographics**](ApplicantInquiryDemographics.md) |  | [optional] 
**address** | [**Array&lt;ApplicantInquiryAddress&gt;**](ApplicantInquiryAddress.md) |  | [optional] 
**email** | [**Array&lt;ApplicantInquiryEmail&gt;**](ApplicantInquiryEmail.md) |  | [optional] 
**phone** | [**Array&lt;ApplicantInquiryPhone&gt;**](ApplicantInquiryPhone.md) |  | [optional] 
**financial_information** | [**ApplicantInquiryFinancialInformation**](ApplicantInquiryFinancialInformation.md) |  | [optional] 
**employment_details** | [**Array&lt;ApplicantInquiryEmploymentDetails&gt;**](ApplicantInquiryEmploymentDetails.md) |  | [optional] 
**identification_document_details** | [**Array&lt;ApplicantInquiryIdentificationDocumentDetails&gt;**](ApplicantInquiryIdentificationDocumentDetails.md) |  | [optional] 
**additional_data** | [**ApplicantInquiryAdditionalData**](ApplicantInquiryAdditionalData.md) |  | [optional] 
**partner_customer_details** | [**ApplicantInquiryPartnerCustomerDetails**](ApplicantInquiryPartnerCustomerDetails.md) |  | [optional] 
**consent_details** | [**Array&lt;ApplicantInquiryConsentDetails&gt;**](ApplicantInquiryConsentDetails.md) |  | [optional] 
**required_documents** | [**Array&lt;ApplicantInquiryRequiredDocuments&gt;**](ApplicantInquiryRequiredDocuments.md) |  | [optional] 
**kyc_information** | [**ApplicantInquiryKycInformation**](ApplicantInquiryKycInformation.md) |  | [optional] 
**contact_consent** | [**ApplicantInquiryContactConsent**](ApplicantInquiryContactConsent.md) |  | [optional] 





---

# ApplicantInquiryConsentDetails.md

# SwaggerClient::ApplicantInquiryConsentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_type** | **String** | Applicant&#x27;s consent types. This is a reference data field. Please use /v1/apac/utilities/referenceData/{consentType} resource to get valid value of this field with description. You can use consentType field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_consent_given** | **BOOLEAN** | Consent flag. Valid values: true and false | [optional] 





---

# ApplicantInquiryContactConsent.md

# SwaggerClient::ApplicantInquiryContactConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 
**ok_to_mail** | **BOOLEAN** | Applicant&#x27;s consent for receiving mails. Valid values: true and false | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. Valid values: true and false | [optional] 





---

# ApplicantInquiryCountrySpecificAddress.md

# SwaggerClient::ApplicantInquiryCountrySpecificAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_number** | **String** | Applicant&#x27;s unit number | [optional] 
**floor_number** | **String** | Applicant&#x27;s floor number | [optional] 
**block_number** | **String** | Applicant&#x27;s block number | [optional] 
**building_name** | **String** | Applicant&#x27;s building name | [optional] 
**estate_name** | **String** | Applicant&#x27;s estate name | [optional] 
**street_number** | **String** | Applicant&#x27;s street number | [optional] 
**street_name** | **String** | Applicant&#x27;s street name | [optional] 
**street_type** | **String** | Applicant&#x27;s street type.Please use /v1/apac/utilities/referenceData/{streetType} resource to get valid value of this field with description. You can use streetType field name as the referenceCode parameter to retrieve the values | [optional] 





---

# ApplicantInquiryCreditCardProduct.md

# SwaggerClient::ApplicantInquiryCreditCardProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emboss_name** | **String** | Name to be embossed on card. | [optional] 
**requested_credit_limit** | **Float** | Credit limit accepted by applicant | [optional] 
**overseas_card_activation_flag** | **BOOLEAN** | Flag to activate the card for overseas usage.Valid values: true and false | [optional] 





---

# ApplicantInquiryDemographics.md

# SwaggerClient::ApplicantInquiryDemographics

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gender** | **String** | Gender/sex. This is a reference data field. Please use /v1/apac/utilities/referenceData/{gender} resource to get valid value of this field with description. You can use gender field name as the referenceCode parameter to retrieve the values. | [optional] 
**date_of_birth** | **Date** | Applicant&#x27;s date of birth in  ISO 8601 date format YYYY-MM-DD | [optional] 
**place_of_birth** | **String** | Applicant&#x27;s place of birth | [optional] 
**country_of_birth** | **String** | Applicant&#x27;s Country of birth. This is a reference data field. Please use /utilities/referenceData/{country} resource to get valid values of this field with descriptions. You can use the countryOfBirth as the referenceCode parameter to retrieve the values. | [optional] 
**nationality** | **String** | Applicant&#x27;s nationality. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use nationality field name as the referenceCode parameter to retrieve the values. | [optional] 
**marital_status** | **String** | Applicant&#x27;s marital status. This is a reference data field. Please use /v1/apac/utilities/referenceData/{maritalStatus} resource to get valid value of this field with description. You can use maritalStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**residential_status** | **String** | Indicate status of residence. This is a reference data field. Please use /v1/apac/utilities/referenceData/{residenceStatus} resource to get valid value of this field with description. You can use residenceStatus field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantInquiryEmail.md

# SwaggerClient::ApplicantInquiryEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **String** | Applicant&#x27;s email address | 
**ok_to_email** | **BOOLEAN** | Applicant&#x27;s consent for receiving email. Valid values: true and false | [optional] 
**is_preferred_email_address** | **BOOLEAN** | Flag to mark preferred email. Valid values: true and false | [optional] 





---

# ApplicantInquiryEmploymentDetails.md

# SwaggerClient::ApplicantInquiryEmploymentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employment_duration_in_years** | **Integer** | Employment duration in years | [optional] 
**employment_durationi_in_months** | **Integer** | Employment duration in months | [optional] 
**employer_name** | **String** | Name of the employer. | [optional] 
**job_title** | **String** | Job Title. This a reference data field. Please use /utilities/referenceData/{jobTitle} resource to get valid values of this field with descriptions. You can use the jobTitle as the referenceCode parameter to retrieve the values. | [optional] 
**occupation_code** | **String** | Occupation code. This is a reference data field. Please use /utilities/referenceData/{occupationCode} resource to get valid values of this field with descriptions. You can use the occupationCode as the referenceCode parameter to retrieve the values. | [optional] 
**employment_status** | **String** | Status of the employment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{employmentStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantInquiryFinancialInformation.md

# SwaggerClient::ApplicantInquiryFinancialInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**income_details** | [**Array&lt;ApplicantInquiryIncomeDetails&gt;**](ApplicantInquiryIncomeDetails.md) |  | [optional] 





---

# ApplicantInquiryIdentificationDocumentDetails.md

# SwaggerClient::ApplicantInquiryIdentificationDocumentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_type** | **String** | Type of Identification document. This is a reference data field. Please use /v1/apac/utilities/referenceData/{idType} resource to get valid values of this field with descriptions | [optional] 
**id_number** | **String** | Unique identifier of identification document. | [optional] 
**id_expiry_date** | **Date** | Expiry date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_date** | **Date** | Issuance date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_place** | **String** | Identification document issuance place | [optional] 
**id_issue_state** | **String** | State from which identification document was issued | [optional] 
**id_issue_country** | **String** | Country of issuance. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use idIssueCountry field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_primary_id** | **BOOLEAN** | Flag to mark primary identification document. Valid values: true and false | [optional] 





---

# ApplicantInquiryIncomeDetails.md

# SwaggerClient::ApplicantInquiryIncomeDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**income_type** | **String** | Applciants income type. This is a reference data field. Please use /utilities/referenceData/{incomeType} resource to get valid values of this field with descriptions. You can use the fieldname as the referenceCode parameter to retrieve the values. | [optional] 
**fixed_amount** | **Float** | Fixed income amount of applicant | [optional] 
**variable_amount** | **Float** | Variable income amount of applicant | [optional] 
**frequency** | **String** | Income Frequency. This a reference data field. Please use /utilities/referenceData/{frequency} resource to get valid values of this field with descriptions. You can use the fieldname as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantInquiryKycInformation.md

# SwaggerClient::ApplicantInquiryKycInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_public_figure_declaration_flag** | **BOOLEAN** | Flag for self declaration if applicant is public figure. Valid values: true and false | [optional] 





---

# ApplicantInquiryName.md

# SwaggerClient::ApplicantInquiryName

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salutation** | **String** | Salutation. This is a reference data field. Please use /v1/apac/utilities/referenceData/{salutation} resource to get valid value of this field with description. You can use salutation field name as the referenceCode parameter to retrieve the values. | [optional] 
**given_name** | **String** | Given/first name of the applicant | 
**middle_name** | **String** | Middle name of the applicant | [optional] 
**surname** | **String** | Surname/last name of the applicant | [optional] 
**alias_name** | **String** | Alias name of the applicant | [optional] 





---

# ApplicantInquiryPartnerCustomerDetails.md

# SwaggerClient::ApplicantInquiryPartnerCustomerDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_customer_internal_id** | **String** | Unique customer internal number associated with the partner. | [optional] 
**partner_customer_id** | **String** | Unique customer Id associated with the partner | [optional] 
**partner_customer_segment** | **String** | Partner customer segment.Partner customer segment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{partnerCustomerSegment} resource to get possible value of this field with description. You can use partnerCustomerSegment field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantInquiryPhone.md

# SwaggerClient::ApplicantInquiryPhone

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_type** | **String** | The type of phone.This is a reference data field. Please use /v1/apac/utilities/referenceData/{phoneType} resource to get valid value of this field with description. You can use phoneType field name as the referenceCode parameter to retrieve the values. | 
**phone_country_code** | **String** | Country code of phone number | 
**area_code** | **String** | The area code of phone number | [optional] 
**phone_number** | **String** | Applicant&#x27;s phone number | 
**extension** | **String** | Extension of phone number | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. This is applicable only if phone type is MOBILE. Valid values: true and false | [optional] 
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 





---

# ApplicantInquiryRequiredDocuments.md

# SwaggerClient::ApplicantInquiryRequiredDocuments

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id_type** | **String** | Document ID for each proof. This is a reference data field. Please use /v1/apac/utilities/referenceData/{documentIdType} resource to get valid values of this field with descriptions.You can use the documentIdType as the referenceCode parameter to retrieve the values. | [optional] 
**document_status** | **String** | Status of document proof.This is a reference data field. Please use /v1/apac/utilities/referenceData/{documentStatus} resource to get possible values of this field with descriptions.You can use the documentStatus as the referenceCode parameter to retrieve the values. | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**proof_type** | **String** | Type of document. This is a reference data field. Please use /v1/apac/utilities/referenceData/{proofType} resource to get possible values of this field with descriptions.You can use the proofType as the referenceCode parameter to retrieve the values. | [optional] 
**linked_document_id** | **String** | Linked document id specifies that the same document can be used for different proof types | [optional] 
**applicant_type** | **String** | Applicant&#x27;s relationship with the Bank. Currently supported is Primary - P.This is a reference data field. Please use /v1/apac/utilities/referenceData/{applicantType} resource to get valid value of this field with description.You can use the documentType as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantInquiryResponse.md

# SwaggerClient::ApplicantInquiryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicants** | [**Array&lt;ApplicantDetail&gt;**](ApplicantDetail.md) |  | 





---

# ApplicantSalaryAndContributionsUploadRequest.md

# SwaggerClient::ApplicantSalaryAndContributionsUploadRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | 
**consent_details** | [**Array&lt;ConsentDetails&gt;**](ConsentDetails.md) |  | [optional] 





---

# ApplicantUpdate.md

# SwaggerClient::ApplicantUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**Name**](Name.md) |  | [optional] 
**phone** | [**Array&lt;Phone&gt;**](Phone.md) |  | [optional] 
**email** | [**Array&lt;Email&gt;**](Email.md) |  | [optional] 
**ocr** | [**Ocr**](Ocr.md) |  | [optional] 
**student_indicator** | **String** | Indicates if the applicant is a student.Valid values are Yes or No | [optional] 
**demographics** | [**Demographics**](Demographics.md) |  | [optional] 
**address** | [**Array&lt;Address&gt;**](Address.md) |  | [optional] 
**contact_preference** | [**ContactPreference**](ContactPreference.md) |  | [optional] 
**contact_consent** | [**ContactConsent**](ContactConsent.md) |  | [optional] 
**financial_information** | [**FinancialInformationAdd**](FinancialInformationAdd.md) |  | [optional] 
**mother_maiden_name** | **String** | Mother&#x27;s maiden name | [optional] 
**education** | [**Education**](Education.md) |  | [optional] 
**employment_details** | [**Array&lt;EmploymentDetails&gt;**](EmploymentDetails.md) |  | [optional] 
**identification_document_details** | [**Array&lt;IdentificationDocumentDetailsAdd&gt;**](IdentificationDocumentDetailsAdd.md) |  | [optional] 
**additional_data** | [**AdditionalDataUpdate**](AdditionalDataUpdate.md) |  | [optional] 
**partner_customer_details** | [**PartnerCustomerDetails**](PartnerCustomerDetails.md) |  | [optional] 
**consent_details** | [**Array&lt;ConsentDetails&gt;**](ConsentDetails.md) |  | [optional] 
**marketing_consent** | [**MarketingConsent**](MarketingConsent.md) |  | [optional] 
**self_declaration** | [**SelfDeclaration**](SelfDeclaration.md) |  | [optional] 
**alerts** | [**Alerts**](Alerts.md) |  | [optional] 
**kyc_information** | [**KycInformation**](KycInformation.md) |  | [optional] 
**parent** | [**ParentInformation**](ParentInformation.md) |  | [optional] 





---

# ApplicantUpdateAdditionalData.md

# SwaggerClient::ApplicantUpdateAdditionalData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_dependents** | **Integer** | Number of dependents | [optional] 





---

# ApplicantUpdateAddress.md

# SwaggerClient::ApplicantUpdateAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_type** | **String** | Type of the address. This is a reference data field. Please use /utilities/referenceData/{addressType} resource to get valid values of this field with descriptions. You can use addressType as the referenceCode parameter to retrieve the values. | [optional] 
**address_line1** | **String** | Address line 1 | [optional] 
**address_line2** | **String** | Address line 2 | [optional] 
**address_line3** | **String** | Address line 3 | [optional] 
**address_line4** | **String** | Address line 4 | [optional] 
**city_name** | **String** | City | [optional] 
**state** | **String** | State.This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressState} resource to get valid value of this field with description. You can use addressState field name as the referenceCode parameter to retrieve the values. | [optional] 
**postal_code** | **String** | Postal/ZIP code | [optional] 
**country_code** | **String** | ISO country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use countryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**residence_duration_in_years** | **Integer** | Applicant&#x27;s residence duration in the current address in years | [optional] 
**residence_duration_in_months** | **Integer** | Applicant&#x27;s residence duration in the current address in months | [optional] 
**country_specific_address** | [**ApplicantUpdateCountrySpecificAddress**](ApplicantUpdateCountrySpecificAddress.md) |  | [optional] 





---

# ApplicantUpdateApplicant.md

# SwaggerClient::ApplicantUpdateApplicant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_type** | **String** | Type of an applicant.This is a reference data field.Please use /utilities/referenceData/{applicantType} resource to get valid values of this field with descriptions. You can use the fieldname as the referenceCode parameter to retrieve the values. | 
**mother_maiden_name** | **String** | Mothers maiden name | [optional] 
**name** | [**ApplicantUpdateName**](ApplicantUpdateName.md) |  | 
**demographics** | [**ApplicantUpdateDemographics**](ApplicantUpdateDemographics.md) |  | [optional] 
**address** | [**Array&lt;ApplicantUpdateAddress&gt;**](ApplicantUpdateAddress.md) |  | [optional] 
**email** | [**Array&lt;ApplicantUpdateEmail&gt;**](ApplicantUpdateEmail.md) |  | [optional] 
**phone** | [**Array&lt;ApplicantUpdatePhone&gt;**](ApplicantUpdatePhone.md) |  | [optional] 
**financial_information** | [**ApplicantUpdateFinancialInformation**](ApplicantUpdateFinancialInformation.md) |  | [optional] 
**employment_details** | [**Array&lt;ApplicantUpdateEmploymentDetails&gt;**](ApplicantUpdateEmploymentDetails.md) |  | [optional] 
**identification_document_details** | [**Array&lt;ApplicantUpdateIdentificationDocumentDetails&gt;**](ApplicantUpdateIdentificationDocumentDetails.md) |  | [optional] 
**additional_data** | [**ApplicantUpdateAdditionalData**](ApplicantUpdateAdditionalData.md) |  | [optional] 
**partner_customer_details** | [**ApplicantUpdatePartnerCustomerDetails**](ApplicantUpdatePartnerCustomerDetails.md) |  | [optional] 
**consent_details** | [**Array&lt;ApplicantUpdateConsentDetails&gt;**](ApplicantUpdateConsentDetails.md) |  | [optional] 
**kyc_information** | [**ApplicantUpdateKycInformation**](ApplicantUpdateKycInformation.md) |  | [optional] 
**contact_consent** | [**ApplicantUpdateContactConsent**](ApplicantUpdateContactConsent.md) |  | [optional] 





---

# ApplicantUpdateConsentDetails.md

# SwaggerClient::ApplicantUpdateConsentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_type** | **String** | Applicant&#x27;s consent types. This is a reference data field. Please use /v1/apac/utilities/referenceData/{consentType} resource to get valid value of this field with description. You can use consentType field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_consent_given** | **BOOLEAN** | Consent flag. Valid values: true and false | [optional] 





---

# ApplicantUpdateContactConsent.md

# SwaggerClient::ApplicantUpdateContactConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 
**ok_to_mail** | **BOOLEAN** | Applicant&#x27;s consent for receiving mails. Valid values: true and false | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. Valid values: true and false | [optional] 





---

# ApplicantUpdateCountrySpecificAddress.md

# SwaggerClient::ApplicantUpdateCountrySpecificAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_number** | **String** | Applicant&#x27;s unit number | [optional] 
**floor_number** | **String** | Applicant&#x27;s floor number | [optional] 
**block_number** | **String** | Applicant&#x27;s block number | [optional] 
**building_name** | **String** | Applicant&#x27;s building name | [optional] 
**estate_name** | **String** | Applicant&#x27;s estate name | [optional] 
**street_number** | **String** | Applicant&#x27;s street number | [optional] 
**street_name** | **String** | Applicant&#x27;s street name | [optional] 
**street_type** | **String** | Applicant&#x27;s street type.Please use /v1/apac/utilities/referenceData/{streetType} resource to get valid value of this field with description. You can use streetType field name as the referenceCode parameter to retrieve the values | [optional] 





---

# ApplicantUpdateCreditCardProduct.md

# SwaggerClient::ApplicantUpdateCreditCardProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emboss_name** | **String** | Name to be embossed on card. | [optional] 
**requested_credit_limit** | **Float** | Credit limit accepted by applicant | [optional] 
**overseas_card_activation_flag** | **BOOLEAN** | Flag to activate the card for overseas usage.Valid values: true and false | [optional] 





---

# ApplicantUpdateDemographics.md

# SwaggerClient::ApplicantUpdateDemographics

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gender** | **String** | Gender/sex. This is a reference data field. Please use /v1/apac/utilities/referenceData/{gender} resource to get valid value of this field with description. You can use gender field name as the referenceCode parameter to retrieve the values. | [optional] 
**date_of_birth** | **Date** | Applicant&#x27;s date of birth in  ISO 8601 date format YYYY-MM-DD | [optional] 
**place_of_birth** | **String** | Applicant&#x27;s place of birth | [optional] 
**country_of_birth** | **String** | Applicant&#x27;s Country of birth. This is a reference data field. Please use /utilities/referenceData/{country} resource to get valid values of this field with descriptions. You can use the countryOfBirth as the referenceCode parameter to retrieve the values. | [optional] 
**nationality** | **String** | Applicant&#x27;s nationality. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use nationality field name as the referenceCode parameter to retrieve the values. | [optional] 
**marital_status** | **String** | Applicant&#x27;s marital status. This is a reference data field. Please use /v1/apac/utilities/referenceData/{maritalStatus} resource to get valid value of this field with description. You can use maritalStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**residential_status** | **String** | Indicate status of residence. This is a reference data field. Please use /v1/apac/utilities/referenceData/{residenceStatus} resource to get valid value of this field with description. You can use residenceStatus field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantUpdateEmail.md

# SwaggerClient::ApplicantUpdateEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **String** | Applicant&#x27;s email address | 
**ok_to_email** | **BOOLEAN** | Applicant&#x27;s consent for receiving email. Valid values: true and false | [optional] 
**is_preferred_email_address** | **BOOLEAN** | Flag to mark preferred email. Valid values: true and false | [optional] 





---

# ApplicantUpdateEmploymentDetails.md

# SwaggerClient::ApplicantUpdateEmploymentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employment_duration_in_years** | **Integer** | Employment duration in years | [optional] 
**employment_durationi_in_months** | **Integer** | Employment duration in months | [optional] 
**employer_name** | **String** | Name of the employer. | [optional] 
**job_title** | **String** | Job Title. This a reference data field. Please use /utilities/referenceData/{jobTitle} resource to get valid values of this field with descriptions. You can use the jobTitle as the referenceCode parameter to retrieve the values. | [optional] 
**occupation_code** | **String** | Occupation code. This is a reference data field. Please use /utilities/referenceData/{occupationCode} resource to get valid values of this field with descriptions. You can use the occupationCode as the referenceCode parameter to retrieve the values. | [optional] 
**employment_status** | **String** | Status of the employment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{employmentStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantUpdateFinancialInformation.md

# SwaggerClient::ApplicantUpdateFinancialInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**income_details** | [**Array&lt;ApplicantUpdateIncomeDetails&gt;**](ApplicantUpdateIncomeDetails.md) |  | [optional] 





---

# ApplicantUpdateIdentificationDocumentDetails.md

# SwaggerClient::ApplicantUpdateIdentificationDocumentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_type** | **String** | Type of Identification document. This is a reference data field. Please use /v1/apac/utilities/referenceData/{idType} resource to get valid values of this field with descriptions | [optional] 
**id_number** | **String** | Unique identifier of identification document. | [optional] 
**id_expiry_date** | **Date** | Expiry date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_date** | **Date** | Issuance date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_place** | **String** | Identification document issuance place | [optional] 
**id_issue_state** | **String** | State from which identification document was issued | [optional] 
**id_issue_country** | **String** | Country of issuance. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use idIssueCountry field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_primary_id** | **BOOLEAN** | Flag to mark primary identification document. Valid values: true and false | [optional] 





---

# ApplicantUpdateIncomeDetails.md

# SwaggerClient::ApplicantUpdateIncomeDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**income_type** | **String** | Applciants income type. This is a reference data field. Please use /utilities/referenceData/{incomeType} resource to get valid values of this field with descriptions. You can use the fieldname as the referenceCode parameter to retrieve the values. | [optional] 
**fixed_amount** | **Float** | Fixed income amount of applicant | [optional] 
**variable_amount** | **Float** | Variable income amount of applicant | [optional] 
**frequency** | **String** | Income Frequency. This a reference data field. Please use /utilities/referenceData/{frequency} resource to get valid values of this field with descriptions. You can use the fieldname as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantUpdateKycInformation.md

# SwaggerClient::ApplicantUpdateKycInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_public_figure_declaration_flag** | **BOOLEAN** | Flag for self declaration if applicant is public figure. Valid values: true and false | [optional] 





---

# ApplicantUpdateName.md

# SwaggerClient::ApplicantUpdateName

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salutation** | **String** | Salutation. This is a reference data field. Please use /v1/apac/utilities/referenceData/{salutation} resource to get valid value of this field with description. You can use salutation field name as the referenceCode parameter to retrieve the values. | [optional] 
**given_name** | **String** | Given/first name of the applicant | 
**middle_name** | **String** | Middle name of the applicant | [optional] 
**surname** | **String** | Surname/last name of the applicant | [optional] 
**alias_name** | **String** | Alias name of the applicant | [optional] 





---

# ApplicantUpdatePartnerCustomerDetails.md

# SwaggerClient::ApplicantUpdatePartnerCustomerDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_customer_internal_id** | **String** | Unique customer internal number associated with the partner. | [optional] 
**partner_customer_id** | **String** | Unique customer Id associated with the partner | [optional] 
**partner_customer_segment** | **String** | Partner customer segment.Partner customer segment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{partnerCustomerSegment} resource to get possible value of this field with description. You can use partnerCustomerSegment field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicantUpdatePhone.md

# SwaggerClient::ApplicantUpdatePhone

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_type** | **String** | The type of phone.This is a reference data field. Please use /v1/apac/utilities/referenceData/{phoneType} resource to get valid value of this field with description. You can use phoneType field name as the referenceCode parameter to retrieve the values. | 
**phone_country_code** | **String** | Country code of phone number | 
**area_code** | **String** | The area code of phone number | [optional] 
**phone_number** | **String** | Applicant&#x27;s phone number | 
**extension** | **String** | Extension of phone number | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. This is applicable only if phone type is MOBILE. Valid values: true and false | [optional] 
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 





---

# ApplicantUpdateRequest.md

# SwaggerClient::ApplicantUpdateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | It is used to control the flow for subsequent requests in the session. | 
**applicant** | [**ApplicantUpdateApplicant**](ApplicantUpdateApplicant.md) |  | 
**credit_card_product** | [**ApplicantUpdateCreditCardProduct**](ApplicantUpdateCreditCardProduct.md) |  | [optional] 





---

# ApplicationAddAdditionalData.md

# SwaggerClient::ApplicationAddAdditionalData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_dependents** | [**BigDecimal**](BigDecimal.md) | Number of dependents | [optional] 
**staff_indicator** | **BOOLEAN** | Flag to indicates if applicant is a Citi Staff. Valid values: true and false | [optional] 
**business_nature** | **String** | Business nature of the applicant This is a reference data field. Please use /v1/apac/utilities/referenceData/{businessNature} resource to get valid value of this field with description. You can use businessNature field name as the referenceCode parameter to retrieve the values. | [optional] 
**emergency_contact_name** | **String** | Emergency contact Name | [optional] 
**emergency_contact_phone_number** | **String** | Emergency contact Number. | [optional] 
**over_limit_consent_flag** | **BOOLEAN** | Customer consent on spending more than the limit assigned to him. Valid values: true and false | [optional] 
**country_specific_group** | [**ApplicationAddCountrySpecificGroup**](ApplicationAddCountrySpecificGroup.md) |  | [optional] 
**primary_bank_details** | [**ApplicationAddPrimaryBankDetails**](ApplicationAddPrimaryBankDetails.md) |  | [optional] 
**referral_given_name** | **String** | Referral First Name. | [optional] 
**referral_surname** | **String** | Referral Surname/Last Name. | [optional] 
**related_to_citi_employee_flag** | **BOOLEAN** | Self declaration if applicant has any relation with citi bank employee. Valid values: true and false | [optional] 
**related_citi_employee_name** | **String** | Name of the citi employee if applicant has any relation with citi bank employee. | [optional] 
**related_citi_employee_department** | **String** | Department of citi employee if applicant has any relation with citi bank employee. | [optional] 
**credit_card_usage_purpose** | **String** | Indicates applicants usage of credit card whether it is for personal or business.Please use /v1/apac/utilities/referenceData/{creditCardUsagePurpose} resource to get valid value of this field with description. | [optional] 





---

# ApplicationAddAddress.md

# SwaggerClient::ApplicationAddAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_type** | **String** | Type of address. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**address_line1** | **String** | Address line 1 | [optional] 
**address_line2** | **String** | Address line 2 | [optional] 
**address_line3** | **String** | Address line 3 | [optional] 
**address_line4** | **String** | Address line 4 | [optional] 
**city_name** | **String** | City | [optional] 
**state** | **String** | State.This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressState} resource to get valid value of this field with description. You can use addressState field name as the referenceCode parameter to retrieve the values. | [optional] 
**postal_code** | **String** | Postal/ZIP code | [optional] 
**province_code** | **String** | Province code | [optional] 
**country_code** | **String** | ISO country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use countryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**ok_to_mail** | **BOOLEAN** | Applicant&#x27;s consent for receiving mail. Valid values: true and false | [optional] 
**residence_duration_in_years** | **Integer** | Applicant&#x27;s residence duration in the current address in years. Applicable only for residential address. | [optional] 
**residence_duration_in_months** | **Integer** | Applicant&#x27;s residence duration in the current address in months. Applicable only for residential address. | [optional] 
**country_specific_address** | [**ApplicationAddCountrySpecificAddress**](ApplicationAddCountrySpecificAddress.md) |  | [optional] 





---

# ApplicationAddApplicant.md

# SwaggerClient::ApplicationAddApplicant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ocr** | [**ApplicationAddOcr**](ApplicationAddOcr.md) |  | [optional] 
**mother_maiden_name** | **String** | Mother&#x27;s maiden name | [optional] 
**name** | [**ApplicationAddName**](ApplicationAddName.md) |  | 
**demographics** | [**ApplicationAddDemographics**](ApplicationAddDemographics.md) |  | [optional] 
**address** | [**Array&lt;ApplicationAddAddress&gt;**](ApplicationAddAddress.md) |  | [optional] 
**email** | [**Array&lt;ApplicationAddEmail&gt;**](ApplicationAddEmail.md) |  | [optional] 
**phone** | [**Array&lt;ApplicationAddPhone&gt;**](ApplicationAddPhone.md) |  | 
**contact_preference** | [**ApplicationAddContactPreference**](ApplicationAddContactPreference.md) |  | [optional] 
**contact_consent** | [**ApplicationAddContactConsent**](ApplicationAddContactConsent.md) |  | [optional] 
**financial_information** | [**ApplicationAddFinancialInformation**](ApplicationAddFinancialInformation.md) |  | [optional] 
**education** | [**ApplicationAddEducation**](ApplicationAddEducation.md) |  | [optional] 
**employment_details** | [**Array&lt;ApplicationAddEmploymentDetails&gt;**](ApplicationAddEmploymentDetails.md) |  | [optional] 
**identification_document_details** | [**Array&lt;ApplicationAddIdentificationDocumentDetails&gt;**](ApplicationAddIdentificationDocumentDetails.md) |  | [optional] 
**additional_data** | [**ApplicationAddAdditionalData**](ApplicationAddAdditionalData.md) |  | [optional] 
**partner_customer_details** | [**ApplicationAddPartnerCustomerDetails**](ApplicationAddPartnerCustomerDetails.md) |  | [optional] 
**consent_details** | [**Array&lt;ApplicationAddConsentDetails&gt;**](ApplicationAddConsentDetails.md) |  | [optional] 
**marketing_consent** | [**ApplicationAddMarketingConsent**](ApplicationAddMarketingConsent.md) |  | [optional] 
**self_declaration** | [**ApplicationAddSelfDeclaration**](ApplicationAddSelfDeclaration.md) |  | [optional] 
**kyc_information** | [**ApplicationAddKycInformation**](ApplicationAddKycInformation.md) |  | [optional] 





---

# ApplicationAddConsentDetails.md

# SwaggerClient::ApplicationAddConsentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_type** | **String** | Applicant&#x27;s consent types. This is a reference data field. Please use /v1/apac/utilities/referenceData/{consentType} resource to get valid value of this field with description. You can use consentType field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_consent_given** | **BOOLEAN** | Consent flag. Valid values: true and false | [optional] 





---

# ApplicationAddContactConsent.md

# SwaggerClient::ApplicationAddContactConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 
**ok_to_mail** | **BOOLEAN** | Applicant&#x27;s consent for receiving mails. Valid values: true and false | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. Valid values: true and false | [optional] 





---

# ApplicationAddContactPreference.md

# SwaggerClient::ApplicationAddContactPreference

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**send_sms_advice_flag** | **BOOLEAN** | Applicant&#x27;s subscription for receiving advices through SMS. Valid values: true and false | [optional] 
**send_email_advice_flag** | **BOOLEAN** | Applicant&#x27;s subscription for receiving advices through email. Valid values: true and false | [optional] 
**preferred_mailing_address** | **String** | Preferred Mailing Address by applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use preferredMailingAddress field name as the referenceCode parameter to retrieve the values. | [optional] 
**e_statement_enrollment_flag** | **BOOLEAN** | Applicant&#x27;s subscription for receiving statement over email. Valid values: true and false | [optional] 





---

# ApplicationAddCountrySpecificAddress.md

# SwaggerClient::ApplicationAddCountrySpecificAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_number** | **String** | Applicant&#x27;s unit Number | [optional] 
**floor_number** | **String** | Applicant&#x27;s floor Number | [optional] 
**block_number** | **String** | Applicant&#x27;s block Number | [optional] 
**building_name** | **String** | Applicant&#x27;s building Name | [optional] 
**estate_name** | **String** | Applicant&#x27;s estate Name | [optional] 
**street_number** | **String** | Applicant&#x27;s street Number | [optional] 
**street_name** | **String** | Applicant&#x27;s street Name | [optional] 
**street_type** | **String** | Applicant&#x27;s street Type.Please use /v1/apac/utilities/referenceData/{streetType} resource to get valid value of this field with description. You can use streetType field name as the referenceCode parameter to retrieve the values | [optional] 
**town** | **String** | Applicant&#x27;s town | [optional] 





---

# ApplicationAddCountrySpecificGroup.md

# SwaggerClient::ApplicationAddCountrySpecificGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bumiputra_indicator** | **BOOLEAN** | Indicator to specify the regional race and other indigenous peoples of Southeast Asia, and used particularly in Malaysia. Valid values: true and false. | [optional] 
**disability_indicator** | **BOOLEAN** | The instruments issued to applicants are provided with special needs like brailed characters on statements. Valid values: true and false. | [optional] 
**union_pay_card_number** | **String** | Applicant&#x27;s union pay card number to link the product. | [optional] 
**tax_file_number** | **String** | Applicant&#x27;s tax file number to link the product. | [optional] 





---

# ApplicationAddCreditCardProduct.md

# SwaggerClient::ApplicationAddCreditCardProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product. | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing organization name | 
**logo** | **String** | Product logo to identify the product | 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**emboss_name** | **String** | Name to be embossed on card.If blank, bank will assign automatically based on the market norms. | [optional] 
**billing_address** | **String** | Billing address of the applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field as the referenceCode parameter to retrieve the values. | [optional] 
**card_delivery_address** | **String** | Card delivery address of the applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of the applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option  to review the credit limit in the future.Valid values: true and false | [optional] 





---

# ApplicationAddDemographics.md

# SwaggerClient::ApplicationAddDemographics

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gender** | **String** | Gender/sex. This is a reference data field. Please use /v1/apac/utilities/referenceData/{gender} resource to get valid value of this field with description. You can use gender field name as the referenceCode parameter to retrieve the values. | [optional] 
**date_of_birth** | **Date** | Applicant&#x27;s date of birth in  ISO 8601 date format YYYY-MM-DD | [optional] 
**place_of_birth** | **String** | Applicant&#x27;s place of birth | [optional] 
**country_of_birth** | **String** | Applicant&#x27;s Country of birth. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use countryOfBirth field name as the referenceCode parameter to retrieve the values. | [optional] 
**nationality** | **String** | Applicant&#x27;s nationality. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use nationality field name as the referenceCode parameter to retrieve the values. | [optional] 
**domicile_country_code** | **String** | Domicile country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**permanent_residency_country_code** | **String** | Permanent residency country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use domicileCountryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**marital_status** | **String** | Applicant&#x27;s marital status. This is a reference data field. Please use /v1/apac/utilities/referenceData/{maritalStatus} resource to get valid value of this field with description. You can use maritalStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**residency_status** | **String** | Indicate status of residence. This is a reference data field. Please use /v1/apac/utilities/referenceData/{residenceStatus} resource to get valid value of this field with description. You can use residenceStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**residence_type** | **String** | Type of Residence. This is a reference data field. Please use /v1/apac/utilities/referenceData/{residenceType} resource to get valid value of this field with description. You can use residenceType field name as the referenceCode parameter to retrieve the values. | [optional] 
**tax_domicile_country_code** | **String** | Tax domicile country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use taxDomicileCountryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**spoken_language_code** | **String** | Code for spoken language of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{spokenLanguageCode} resource to get valid value of this field with description. You can use spokenLanguageCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**correspondence_language_code** | **String** | Code for correspondence language of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{spokenLanguageCode} resource to get valid value of this field with description. You can use correspondenceLanguageCode field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationAddEducation.md

# SwaggerClient::ApplicationAddEducation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**highest_education_level** | **String** | Highest education level of the applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{highestEducationLevel} resource to get valid value of this field with description. You can use highestEducationLevel field name as the referenceCode parameter to retrieve the values. | [optional] 
**year_of_graduation** | **String** | Year of completing graduation. This is required if applicant is a student | [optional] 
**student_id** | **String** | Unique ID of the student. This is required if applicant is a student | [optional] 
**university** | **String** | University name. This is a reference data field. Please use /v1/apac/utilities/referenceData/{universityCode} resource to get valid value of this field with description. You can use university field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationAddEmail.md

# SwaggerClient::ApplicationAddEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **String** | Applicant&#x27;s email address | 
**ok_to_email** | **BOOLEAN** | Applicant&#x27;s consent for receiving email. Valid values: true and false | [optional] 
**is_preferred_email_address** | **BOOLEAN** | Flag to mark preferred email. Valid values: true and false | [optional] 





---

# ApplicationAddEmploymentDetails.md

# SwaggerClient::ApplicationAddEmploymentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employer_name** | **String** | Name of the employer. | [optional] 
**job_title** | **String** | Job Title. This is a reference data field. Please use /v1/apac/utilities/referenceData/{jobTitle} resource to get valid value of this field with description. You can use jobTitle field name as the referenceCode parameter to retrieve the values. | [optional] 
**occupation_code** | **String** | Occupation code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{occupationCode} resource to get valid value of this field with description. You can use occupationCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**industry_code** | **String** | Code of the industry of employment. This is a reference data field. Please use /v1/apac/utilities/referenceData/{industryCode} resource to get valid value of this field with description. You can use industryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**employment_duration_in_years** | **Integer** | Employment duration in years | [optional] 
**employment_duration_in_months** | **Integer** | Employment duration in months | [optional] 
**employment_status** | **String** | Status of the employment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{employmentStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**months_in_previous_employment** | **Integer** | Months spent in the previouse employment | [optional] 
**years_in_previous_employment** | **Integer** | Years spent in the previouse employment | [optional] 
**accountant_name** | **String** | Accountant or contact&#x27;s name | [optional] 
**accountant_firm_name** | **String** | Accountant&#x27;s firm or business name | [optional] 
**years_in_industry** | **Integer** | Years spent in industry | [optional] 
**months_in_industry** | **Integer** | Months spent in industry | [optional] 





---

# ApplicationAddExistingLoanDetails.md

# SwaggerClient::ApplicationAddExistingLoanDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_type** | **String** | Loan Type.This is a reference data field. Please use /v1/apac/utilities/referenceData/{loanType} resource to get valid value of this field with description. You can use loanType field name as the referenceCode parameter to retrieve the values. | [optional] 
**other_debt_obligation_type** | **String** | Other debt obligation type. Free text if others is selected under loan type. Please use /v1/apac/utilities/referenceData/{otherDebtObligationType} resource to get valid value of this field with description. You can use loanType field name as the referenceCode parameter to retrieve the values. | [optional] 
**monthly_installment_amount** | **Float** | Monthly repayment amount | [optional] 
**outstanding_balance_amount** | **Float** | Balance Owing | [optional] 
**debt_ownership** | **String** | Nature debt ownership. Please use /v1/apac/utilities/referenceData/{debtOwnership} resource to get valid value of this field with description. | [optional] 
**lender_name** | **String** | Name of the lender/non-banking financial institution. | [optional] 





---

# ApplicationAddExpenseDetails.md

# SwaggerClient::ApplicationAddExpenseDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expense_type** | **String** | Expense type. This is a reference data field. Please use /v1/apac/utilities/referenceData/{expenseType} resource to get valid value of this field with description. You can use expenseType field name as the referenceCode parameter to retrieve the values. | [optional] 
**expense_amount** | **Float** | Expenditure amount for an applicant | [optional] 
**frequency** | **String** | Expense Frequency. This is a reference data field. Please use /v1/apac/utilities/referenceData/{frequency} resource to get valid value of this field with description. You can use frequency field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationAddFinancialInformation.md

# SwaggerClient::ApplicationAddFinancialInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_foreseeable_financial_changes** | **BOOLEAN** | Indicates whether any foreseeable changes in customer&#x27;s financial circumstances. | [optional] 
**non_bank_debt_obligation_flag** | **BOOLEAN** | Indicates if the applicant has any loan with any non-banking financial organization. | [optional] 
**expense_details** | [**Array&lt;ApplicationAddExpenseDetails&gt;**](ApplicationAddExpenseDetails.md) |  | [optional] 
**income_details** | [**Array&lt;ApplicationAddIncomeDetails&gt;**](ApplicationAddIncomeDetails.md) |  | [optional] 
**existing_loan_details** | [**Array&lt;ApplicationAddExistingLoanDetails&gt;**](ApplicationAddExistingLoanDetails.md) |  | [optional] 





---

# ApplicationAddIdentificationDocumentDetails.md

# SwaggerClient::ApplicationAddIdentificationDocumentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_type** | **String** | Type of Identification document. This is a reference data field. Please use /v1/apac/utilities/referenceData/{idType} resource to get valid values of this field with descriptions | [optional] 
**id_number** | **String** | Unique identifier of identification document. Ex: Passport Number | [optional] 
**id_expiry_date** | **Date** | Expiry date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_date** | **Date** | Issuance date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_place** | **String** | Identification document issuance place | [optional] 
**id_issue_state** | **String** | State from which identification document was issued.This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressState} resource to get valid value of this field with description. You can use addressState field name as the referenceCode parameter to retrieve the values. | [optional] 
**id_issue_country** | **String** | Country of issuance. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use idIssueCountry field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_primary_id** | **BOOLEAN** | Flag to mark primary identification document. Valid values: true and false | [optional] 





---

# ApplicationAddIncomeDetails.md

# SwaggerClient::ApplicationAddIncomeDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**income_type** | **String** | Income type. This is a reference data field. Please use /v1/apac/utilities/referenceData/{incomeType} resource to get valid value of this field with description. You can use incomeType field name as the referenceCode parameter to retrieve the values. | [optional] 
**fixed_amount** | **Float** | Fixed income amount of applicant | [optional] 
**variable_amount** | **Float** | Variable income amount of applicant | [optional] 
**frequency** | **String** | Income Frequency. This is a reference data field. Please use /v1/apac/utilities/referenceData/{frequency} resource to get valid value of this field with description. You can use frequency field name as the referenceCode parameter to retrieve the values. | [optional] 
**other_income_description** | **String** | Description of income from other sources | [optional] 





---

# ApplicationAddKycInformation.md

# SwaggerClient::ApplicationAddKycInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_public_figure_declaration_flag** | **BOOLEAN** | Flag for self declaration if applicant is public figure. Valid values: true and false | [optional] 
**public_figure_office_status** | **String** | Flag for status of public office if applicant is public figure | [optional] 
**public_figure_office_details** | **String** | Office details if applicant is public figure | [optional] 
**public_figure_office_start_date** | **Date** | Public figure office start date in ISO 8601 date format YYYY-MM-DD | [optional] 
**public_figure_office_end_date** | **Date** | Public figure office end date in ISO 8601 date format YYYY-MM-DD | [optional] 
**is_related_to_senior_public_figure** | **BOOLEAN** | Self declaration if applicant has any relation with senior public figure. Valid values: true and false | [optional] 
**related_senior_public_figure_name** | **String** | Senior Public Figure Name | [optional] 
**related_spf_country_of_government** | **String** | Senior Public Figure Country of Government | [optional] 
**related_senior_public_figure_department** | **String** | Department Senior Public Figure belongs to | [optional] 
**relationship_with_senior_public_figure** | **String** | Senior Public Figure relationship with applicant | [optional] 
**related_senior_public_figure_last_name** | **String** | Senior Public Figure Last Name | [optional] 
**us_tax_status** | **String** | US Tax status. This is a reference data field. Please use /v1/apac/utilities/referenceData/{usTaxStatus} resource to get valid value of this field with description. You can use usTaxStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**us_tax_id** | **String** | US Tax ID | [optional] 





---

# ApplicationAddMarketingConsent.md

# SwaggerClient::ApplicationAddMarketingConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_data_opt_out_others_flag** | **BOOLEAN** | Opt out from use of personal data to other person/organization in direct marketing | [optional] 





---

# ApplicationAddName.md

# SwaggerClient::ApplicationAddName

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salutation** | **String** | Salutation. This is a reference data field. Please use /v1/apac/utilities/referenceData/{salutation} resource to get valid value of this field with description. You can use salutation field name as the referenceCode parameter to retrieve the values. | [optional] 
**given_name** | **String** | Given/first name of the applicant | 
**middle_name** | **String** | Middle name of the applicant | [optional] 
**surname** | **String** | Surname/last name of the applicant | [optional] 
**local_english_given_name** | **String** | Local given name in English | [optional] 
**local_english_surname** | **String** | Local surname in English | [optional] 
**alias_name** | **String** | Alias name of the applicant | [optional] 
**full_name** | **String** | Full name of the applicant. | [optional] 
**salute_by** | **String** | Contains value with which applicant like to be addressed. This is a reference data field. Please use /v1/apac/utilities/referenceData/{saluteBy} resource to get valid value of this field with description. You can use saluteBy field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationAddOcr.md

# SwaggerClient::ApplicationAddOcr

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ocr_reference_number** | **String** | OCR (Optical Character Recognition) Reference number | [optional] 





---

# ApplicationAddPartnerCustomerDetails.md

# SwaggerClient::ApplicationAddPartnerCustomerDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_customer_internal_id** | **String** | Unique customer internal number associated with the partner. | [optional] 
**partner_customer_id** | **String** | Unique customer Id associated with the partner | [optional] 
**partner_customer_segment** | **String** | Partner customer segment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{partnerCustomerSegment} resource to get possible value of this field with description. You can use partnerCustomerSegment field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationAddPhone.md

# SwaggerClient::ApplicationAddPhone

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_type** | **String** | The type of phone. Ex:OFFICE, HOME, MOBILE, PRIMARY_MOBILE, FAX. This is a reference data field. Please use /v1/apac/utilities/referenceData/{phoneType} resource to get valid value of this field with description. You can use phoneType field name as the referenceCode parameter to retrieve the values. | 
**phone_country_code** | **String** | Country code of phone number | 
**area_code** | **String** | The area code of phone number | [optional] 
**phone_number** | **String** | Applicant&#x27;s phone number | 
**extension** | **String** | Extension of telephone number | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. This is applicable only if phone type is MOBILE. Valid values: true and false | [optional] 
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 





---

# ApplicationAddPrimaryBankDetails.md

# SwaggerClient::ApplicationAddPrimaryBankDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_name** | **String** | Main bank name with Citi. This is a reference data field. Please use /v1/apac/utilities/referenceData/{bankName} resource to get valid value of this field with description. | [optional] 
**account_type** | **String** | Type of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountType} resource to get valid value of this field with description. | [optional] 





---

# ApplicationAddProduct.md

# SwaggerClient::ApplicationAddProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_product** | [**ApplicationAddCreditCardProduct**](ApplicationAddCreditCardProduct.md) |  | [optional] 
**ready_credit_product** | [**ApplicationAddReadyCreditProduct**](ApplicationAddReadyCreditProduct.md) |  | [optional] 
**unsecured_loan_product** | [**ApplicationAddUnsecuredLoanProduct**](ApplicationAddUnsecuredLoanProduct.md) |  | [optional] 





---

# ApplicationAddReadyCreditProduct.md

# SwaggerClient::ApplicationAddReadyCreditProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing organization name | 
**logo** | **String** | Product logo to identify the product | 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**emboss_name** | **String** | Name to be embossed on card | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**card_delivery_address** | **String** | Card delivery address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option for to review the credit limit in the future.Valid values: true and false | [optional] 
**atm_required_flag** | **BOOLEAN** | Option to get ATM card along with product. Valid values: true and false | [optional] 
**cheque_book_required_flag** | **BOOLEAN** | Option to get cheque book along with product. Valid values: true and false | [optional] 





---

# ApplicationAddRequest.md

# SwaggerClient::ApplicationAddRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**ApplicationAddProduct**](ApplicationAddProduct.md) |  | 
**applicant** | [**ApplicationAddApplicant**](ApplicationAddApplicant.md) |  | 





---

# ApplicationAddResponse.md

# SwaggerClient::ApplicationAddResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **String** | Unique identifier for the application | 
**application_stage** | **String** | Current stage of an application.This is a reference data field. Please use /v1/apac/utilities/referenceData/{applicationStage} resource to get possible value of this field with description. You can use applicationStage field name as the referenceCode parameter to retrieve the values. | 
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | 





---

# ApplicationAddSelfDeclaration.md

# SwaggerClient::ApplicationAddSelfDeclaration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_active_credit_card_limit_amount** | **Float** | Total credit limit of all the credit cards the applicant is holding | [optional] 
**anticipated_income_decrease_code** | **String** | Anticipated income decrease code. Valid values: Yes and No | [optional] 
**loan_taken_indicator** | **BOOLEAN** | To indicate if any loan is outstanding.Valid values: true and false | [optional] 
**monthly_repayment_for_all_ext_loans** | **Float** | Customer declaration for his/her total monthly repayment amount for all the external loans. | [optional] 





---

# ApplicationAddUnsecuredLoanProduct.md

# SwaggerClient::ApplicationAddUnsecuredLoanProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing Organisation code | 
**logo** | **String** | Product logo to identify the product | 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**requested_loan_amount** | **Float** | Requested loan amount | [optional] 
**tenor** | **String** | Tenure of loan. This is a reference data field. Please use /v1/apac/utilities/referenceData/{tenor} resource to get valid value of this field with description. You can use tenor field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationDetails.md

# SwaggerClient::ApplicationDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **String** | Unique identifier for the application. | 
**product_code** | **String** | A unique code that identifies the product. | [optional] 
**application_stage** | **String** | Application Stage of an Application | 
**application_received_date** | **Date** | Application Received Date in ISO 8601 date format YYYY-MM-DD | [optional] 
**application_submitted_flag** | **BOOLEAN** | Flag to indicate if application is already submitted | [optional] 
**ekyc_submitted_flag** | **BOOLEAN** | Flag to indicate if eKYC request is already submitted | [optional] 
**marketing_campaign_offer_details** | [**PendingMarketingCampaignOfferDetails**](PendingMarketingCampaignOfferDetails.md) |  | [optional] 





---

# ApplicationInquiryAdditionalData.md

# SwaggerClient::ApplicationInquiryAdditionalData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_dependents** | [**BigDecimal**](BigDecimal.md) | Number of dependents | [optional] 
**staff_indicator** | **BOOLEAN** | Flag to indicates if applicant is a Citi Staff. Valid values: true and false | [optional] 
**business_nature** | **String** | Business nature of the applicant This is a reference data field. Please use /v1/apac/utilities/referenceData/{businessNature} resource to get valid value of this field with description. You can use businessNature field name as the referenceCode parameter to retrieve the values. | [optional] 
**emergency_contact_name** | **String** | Emergency contact Name | [optional] 
**emergency_contact_phone_number** | **String** | Emergency contact Number. | [optional] 
**over_limit_consent_flag** | **BOOLEAN** | Customer consent on spending more than the limit assigned to him. Valid values: true and false | [optional] 
**country_specific_group** | [**ApplicationInquiryCountrySpecificGroup**](ApplicationInquiryCountrySpecificGroup.md) |  | [optional] 
**referral_given_name** | **String** | Referral First Name. | [optional] 
**referral_surname** | **String** | Referral Surname/Last Name. | [optional] 
**related_to_citi_employee_flag** | **BOOLEAN** | Self declaration if applicant has any relation with citi bank employee. Valid values: true and false | [optional] 
**related_citi_employee_name** | **String** | Name of the citi employee if applicant has any relation with citi bank employee. | [optional] 
**related_citi_employee_department** | **String** | Department of citi employee if applicant has any relation with citi bank employee. | [optional] 





---

# ApplicationInquiryAddress.md

# SwaggerClient::ApplicationInquiryAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_type** | **String** | Type of address. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**address_line1** | **String** | Address line 1 | [optional] 
**address_line2** | **String** | Address line 2 | [optional] 
**address_line3** | **String** | Address line 3 | [optional] 
**address_line4** | **String** | Address line 4 | [optional] 
**city_name** | **String** | City | [optional] 
**state** | **String** | State.This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressState} resource to get valid value of this field with description. You can use addressState field name as the referenceCode parameter to retrieve the values. | [optional] 
**postal_code** | **String** | Postal/ZIP code | [optional] 
**province_code** | **String** | Province code | [optional] 
**country_code** | **String** | ISO country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use countryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**ok_to_mail** | **BOOLEAN** | Applicant&#x27;s consent for receiving mail. Valid values: true and false | [optional] 
**residence_duration_in_years** | **Integer** | Applicant&#x27;s residence duration in the current address in years. Applicable only for residential address. | [optional] 
**residence_duration_in_months** | **Integer** | Applicant&#x27;s residence duration in the current address in months. Applicable only for residential address. | [optional] 
**country_specific_address** | [**ApplicationInquiryCountrySpecificAddress**](ApplicationInquiryCountrySpecificAddress.md) |  | [optional] 





---

# ApplicationInquiryApplicant.md

# SwaggerClient::ApplicationInquiryApplicant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mother_maiden_name** | **String** | Mother&#x27;s maiden name | [optional] 
**name** | [**ApplicationInquiryName**](ApplicationInquiryName.md) |  | 
**demographics** | [**ApplicationInquiryDemographics**](ApplicationInquiryDemographics.md) |  | [optional] 
**address** | [**Array&lt;ApplicationInquiryAddress&gt;**](ApplicationInquiryAddress.md) |  | [optional] 
**email** | [**Array&lt;ApplicationInquiryEmail&gt;**](ApplicationInquiryEmail.md) |  | [optional] 
**phone** | [**Array&lt;ApplicationInquiryPhone&gt;**](ApplicationInquiryPhone.md) |  | 
**contact_preference** | [**ApplicationInquiryContactPreference**](ApplicationInquiryContactPreference.md) |  | [optional] 
**contact_consent** | [**ApplicationInquiryContactConsent**](ApplicationInquiryContactConsent.md) |  | [optional] 
**financial_information** | [**ApplicationInquiryFinancialInformation**](ApplicationInquiryFinancialInformation.md) |  | [optional] 
**education** | [**ApplicationInquiryEducation**](ApplicationInquiryEducation.md) |  | [optional] 
**employment_details** | [**Array&lt;ApplicationInquiryEmploymentDetails&gt;**](ApplicationInquiryEmploymentDetails.md) |  | [optional] 
**identification_document_details** | [**Array&lt;ApplicationInquiryIdentificationDocumentDetails&gt;**](ApplicationInquiryIdentificationDocumentDetails.md) |  | [optional] 
**additional_data** | [**ApplicationInquiryAdditionalData**](ApplicationInquiryAdditionalData.md) |  | [optional] 
**partner_customer_details** | [**ApplicationInquiryPartnerCustomerDetails**](ApplicationInquiryPartnerCustomerDetails.md) |  | [optional] 
**consent_details** | [**Array&lt;ApplicationInquiryConsentDetails&gt;**](ApplicationInquiryConsentDetails.md) |  | [optional] 
**marketing_consent** | [**ApplicationInquiryMarketingConsent**](ApplicationInquiryMarketingConsent.md) |  | [optional] 
**self_declaration** | [**ApplicationInquirySelfDeclaration**](ApplicationInquirySelfDeclaration.md) |  | [optional] 
**kyc_information** | [**ApplicationInquiryKycInformation**](ApplicationInquiryKycInformation.md) |  | [optional] 





---

# ApplicationInquiryBalanceTransferDetails.md

# SwaggerClient::ApplicationInquiryBalanceTransferDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_to_transfer** | **Float** | Amount to Transfer | 
**issuing_organization_name** | **String** | Name of the Organization to which the fund has to be transferred. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardIssuingOrganization} resource to get valid value of this field with description. You can use cardIssuingOrganization field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_name** | **String** | Customer&#x27;s account Name | [optional] 
**account_reference_number** | **String** | Customer&#x27;s account reference number with biller. | [optional] 
**biller_code** | **String** | It is a unique code to identify a BPAY biller | 
**campaign_id** | **String** | Campaign code of the balance transfer. | [optional] 





---

# ApplicationInquiryConsentDetails.md

# SwaggerClient::ApplicationInquiryConsentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_type** | **String** | Applicant&#x27;s consent types. This is a reference data field. Please use /v1/apac/utilities/referenceData/{consentType} resource to get valid value of this field with description. You can use consentType field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_consent_given** | **BOOLEAN** | Consent flag. Valid values: true and false | [optional] 





---

# ApplicationInquiryContactConsent.md

# SwaggerClient::ApplicationInquiryContactConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 
**ok_to_mail** | **BOOLEAN** | Applicant&#x27;s consent for receiving mails. Valid values: true and false | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. Valid values: true and false | [optional] 





---

# ApplicationInquiryContactPreference.md

# SwaggerClient::ApplicationInquiryContactPreference

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**send_sms_advice_flag** | **BOOLEAN** | Applicant&#x27;s subscription for receiving advices through SMS. Valid values: true and false | [optional] 
**send_email_advice_flag** | **BOOLEAN** | Applicant&#x27;s subscription for receiving advices through email. Valid values: true and false | [optional] 
**preferred_mailing_address** | **String** | Preferred Mailing Address by applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use preferredMailingAddress field name as the referenceCode parameter to retrieve the values. | [optional] 
**e_statement_enrollment_flag** | **BOOLEAN** | Applicant&#x27;s subscription for receiving statement over email. Valid values: true and false | [optional] 





---

# ApplicationInquiryCounterOffer.md

# SwaggerClient::ApplicationInquiryCounterOffer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_product_code** | **String** | A unique code that identifies the offered product to applicant | [optional] 
**offer_product_organisation** | **String** | Offered card issuing organization name | [optional] 
**offer_source_code** | **String** | A source code to identify the product | [optional] 
**credit_specific_recommendations** | [**Array&lt;ApplicationInquiryCreditSpecificRecommendations&gt;**](ApplicationInquiryCreditSpecificRecommendations.md) |  | [optional] 
**loan_specific_recommendations** | [**Array&lt;ApplicationInquiryLoanSpecificRecommendations&gt;**](ApplicationInquiryLoanSpecificRecommendations.md) |  | [optional] 
**required_documents** | [**Array&lt;ApplicationInquiryRequiredDocuments&gt;**](ApplicationInquiryRequiredDocuments.md) |  | [optional] 





---

# ApplicationInquiryCountrySpecificAddress.md

# SwaggerClient::ApplicationInquiryCountrySpecificAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_number** | **String** | Applicant&#x27;s unit Number | [optional] 
**floor_number** | **String** | Applicant&#x27;s floor Number | [optional] 
**block_number** | **String** | Applicant&#x27;s block Number | [optional] 
**building_name** | **String** | Applicant&#x27;s building Name | [optional] 
**estate_name** | **String** | Applicant&#x27;s estate Name | [optional] 
**street_number** | **String** | Applicant&#x27;s street Number | [optional] 
**street_name** | **String** | Applicant&#x27;s street Name | [optional] 
**street_type** | **String** | Applicant&#x27;s street Type.Please use /v1/apac/utilities/referenceData/{streetType} resource to get valid value of this field with description. You can use streetType field name as the referenceCode parameter to retrieve the values | [optional] 
**town** | **String** | Applicant&#x27;s town | [optional] 





---

# ApplicationInquiryCountrySpecificGroup.md

# SwaggerClient::ApplicationInquiryCountrySpecificGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bumiputra_indicator** | **BOOLEAN** | Indicator to specify the regional race and other indigenous peoples of Southeast Asia, and used particularly in Malaysia. Valid values: true and false. | [optional] 
**disability_indicator** | **BOOLEAN** | The instruments issued to applicants are provided with special needs like brailed characters on statements. Valid values: true and false. | [optional] 
**union_pay_card_number** | **String** | Applicant&#x27;s union pay card number to link the product. | [optional] 
**tax_file_number** | **String** | Applicant&#x27;s tax file number to link the product. | [optional] 





---

# ApplicationInquiryCreditCardProduct.md

# SwaggerClient::ApplicationInquiryCreditCardProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product. | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing organization name | 
**logo** | **String** | Product logo to identify the product | 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**emboss_name** | **String** | Name to be embossed on card. | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field as the referenceCode parameter to retrieve the values. | [optional] 
**card_delivery_address** | **String** | Card delivery address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option  to review the credit limit in the future.Valid values: true and false | [optional] 
**requested_credit_limit** | **Float** | Credit limit accepted by applicant | [optional] 
**balance_transfer_details** | [**Array&lt;ApplicationInquiryBalanceTransferDetails&gt;**](ApplicationInquiryBalanceTransferDetails.md) |  | [optional] 





---

# ApplicationInquiryCreditSpecificRecommendations.md

# SwaggerClient::ApplicationInquiryCreditSpecificRecommendations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommended_credit_limit** | **Float** | Recommended credit limit | [optional] 
**bt_maximum_loan_percentage** | **Float** | Balance transfer maximum loan percentage. Applicable to Counter and Cross-sell offers | [optional] 
**bt_monthly_interest_rate** | **Float** | Balance transfer monthly interest rate. Applicable to Counter and Cross-sell offers | [optional] 
**epp_maximum_loan_percentage** | **Float** | Equal payment plan max loan percentage. Applicable to Counter and Cross-sell offers | [optional] 
**epp_monthly_interest_rate** | **Float** | Equal payment plan monthly interest rate. Applicable to Counter and Cross-sell offers | [optional] 
**bt_campaign_id** | **String** | Balance transfer CampaignId. Applicable to Counter and Cross-sell offers. | [optional] 
**epp_promo_id** | **String** | PromoId of equal payment plan. Applicable for ready credit, Counter and Cross-sell offers | [optional] 





---

# ApplicationInquiryCrossSellOffer.md

# SwaggerClient::ApplicationInquiryCrossSellOffer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_product_code** | **String** | A unique code that identifies the offered product to applicant | [optional] 
**offer_product_organisation** | **String** | Offered card issuing organization name | [optional] 
**offer_source_code** | **String** | A source code to identify the product | [optional] 
**credit_specific_recommendations** | [**Array&lt;ApplicationInquiryCreditSpecificRecommendations&gt;**](ApplicationInquiryCreditSpecificRecommendations.md) |  | [optional] 
**loan_specific_recommendations** | [**Array&lt;ApplicationInquiryLoanSpecificRecommendations&gt;**](ApplicationInquiryLoanSpecificRecommendations.md) |  | [optional] 
**required_documents** | [**Array&lt;ApplicationInquiryRequiredDocuments&gt;**](ApplicationInquiryRequiredDocuments.md) |  | [optional] 





---

# ApplicationInquiryDemographics.md

# SwaggerClient::ApplicationInquiryDemographics

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gender** | **String** | Gender/sex. This is a reference data field. Please use /v1/apac/utilities/referenceData/{gender} resource to get valid value of this field with description. You can use gender field name as the referenceCode parameter to retrieve the values. | [optional] 
**date_of_birth** | **Date** | Applicant&#x27;s date of birth in  ISO 8601 date format YYYY-MM-DD | [optional] 
**place_of_birth** | **String** | Applicant&#x27;s place of birth | [optional] 
**country_of_birth** | **String** | Applicant&#x27;s Country of birth. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use countryOfBirth field name as the referenceCode parameter to retrieve the values. | [optional] 
**nationality** | **String** | Applicant&#x27;s nationality. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use nationality field name as the referenceCode parameter to retrieve the values. | [optional] 
**domicile_country_code** | **String** | Domicile country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**permanent_residency_country_code** | **String** | Permanent residency country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use domicileCountryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**marital_status** | **String** | Applicant&#x27;s marital status. This is a reference data field. Please use /v1/apac/utilities/referenceData/{maritalStatus} resource to get valid value of this field with description. You can use maritalStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**residency_status** | **String** | Indicate status of residence. This is a reference data field. Please use /v1/apac/utilities/referenceData/{residenceStatus} resource to get valid value of this field with description. You can use residenceStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**residence_type** | **String** | Type of Residence. This is a reference data field. Please use /v1/apac/utilities/referenceData/{residenceType} resource to get valid value of this field with description. You can use residenceType field name as the referenceCode parameter to retrieve the values. | [optional] 
**tax_domicile_country_code** | **String** | Tax domicile country code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use taxDomicileCountryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**spoken_language_code** | **String** | Code for spoken language of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{spokenLanguageCode} resource to get valid value of this field with description. You can use spokenLanguageCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**correspondence_language_code** | **String** | Code for correspondence language of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{spokenLanguageCode} resource to get valid value of this field with description. You can use correspondenceLanguageCode field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationInquiryEducation.md

# SwaggerClient::ApplicationInquiryEducation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**highest_education_level** | **String** | Highest education level of the applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{highestEducationLevel} resource to get valid value of this field with description. You can use highestEducationLevel field name as the referenceCode parameter to retrieve the values. | [optional] 
**year_of_graduation** | **String** | Year of completing graduation. This is required if applicant is a student | [optional] 
**student_id** | **String** | Unique ID of the student. This is required if applicant is a student | [optional] 
**university** | **String** | University name. This is a reference data field. Please use /v1/apac/utilities/referenceData/{universityCode} resource to get valid value of this field with description. You can use university field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationInquiryEmail.md

# SwaggerClient::ApplicationInquiryEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **String** | Applicant&#x27;s email address | [optional] 
**ok_to_email** | **BOOLEAN** | Applicant&#x27;s consent for receiving email. Valid values: true and false | [optional] 
**is_preferred_email_address** | **BOOLEAN** | Flag to mark preferred email. Valid values: true and false | [optional] 





---

# ApplicationInquiryEmploymentDetails.md

# SwaggerClient::ApplicationInquiryEmploymentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employer_name** | **String** | Name of the employer. | [optional] 
**job_title** | **String** | Job Title. This is a reference data field. Please use /v1/apac/utilities/referenceData/{jobTitle} resource to get valid value of this field with description. You can use jobTitle field name as the referenceCode parameter to retrieve the values. | [optional] 
**occupation_code** | **String** | Occupation code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{occupationCode} resource to get valid value of this field with description. You can use occupationCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**industry_code** | **String** | Code of the industry of employment. This is a reference data field. Please use /v1/apac/utilities/referenceData/{industryCode} resource to get valid value of this field with description. You can use industryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**employment_duration_in_years** | **Integer** | Employment duration in years | [optional] 
**employment_duration_in_months** | **Integer** | Employment duration in months | [optional] 
**employment_status** | **String** | Status of the employment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{employmentStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**months_in_previous_employment** | **Integer** | Months spent in the previouse employment | [optional] 
**years_in_previous_employment** | **Integer** | Years spent in the previouse employment | [optional] 
**accountant_name** | **String** | Accountant or contact&#x27;s name | [optional] 
**accountant_firm_name** | **String** | Accountant&#x27;s firm or business name | [optional] 
**years_in_industry** | **Integer** | Years spent in industry | [optional] 
**months_in_industry** | **Integer** | Months spent in industry | [optional] 





---

# ApplicationInquiryExistingLoanDetails.md

# SwaggerClient::ApplicationInquiryExistingLoanDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_type** | **String** | Loan Type.This is a reference data field. Please use /v1/apac/utilities/referenceData/{loanType} resource to get valid value of this field with description. You can use loanType field name as the referenceCode parameter to retrieve the values. | [optional] 
**monthly_installment_amount** | **Float** | Monthly repayment amount | [optional] 
**outstanding_balance_amount** | **Float** | Balance Owing | [optional] 





---

# ApplicationInquiryExpenseDetails.md

# SwaggerClient::ApplicationInquiryExpenseDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expense_type** | **String** | Expense type. This is a reference data field. Please use /v1/apac/utilities/referenceData/{expenseType} resource to get valid value of this field with description. You can use expenseType field name as the referenceCode parameter to retrieve the values. | [optional] 
**expense_amount** | **Float** | Expenditure amount for an applicant | [optional] 
**frequency** | **String** | Expense Frequency. This is a reference data field. Please use /v1/apac/utilities/referenceData/{frequency} resource to get valid value of this field with description. You can use frequency field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationInquiryFinancialInformation.md

# SwaggerClient::ApplicationInquiryFinancialInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_foreseeable_financial_changes** | **BOOLEAN** | Indicates whether any foreseeable changes in customer&#x27;s financial circumstances. | [optional] 
**expense_details** | [**Array&lt;ApplicationInquiryExpenseDetails&gt;**](ApplicationInquiryExpenseDetails.md) |  | [optional] 
**income_details** | [**Array&lt;ApplicationInquiryIncomeDetails&gt;**](ApplicationInquiryIncomeDetails.md) |  | [optional] 
**existing_loan_details** | [**Array&lt;ApplicationInquiryExistingLoanDetails&gt;**](ApplicationInquiryExistingLoanDetails.md) |  | [optional] 





---

# ApplicationInquiryIdentificationDocumentDetails.md

# SwaggerClient::ApplicationInquiryIdentificationDocumentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_type** | **String** | Type of Identification document. This is a reference data field. Please use /v1/apac/utilities/referenceData/{idType} resource to get valid values of this field with descriptions | 
**id_number** | **String** | Unique identifier of identification document. Ex: Passport Number | 
**id_expiry_date** | **Date** | Expiry date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_date** | **Date** | Issuance date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_place** | **String** | Identification document issuance place | [optional] 
**id_issue_state** | **String** | State from which identification document was issued. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressState} resource to get valid value of this field with description. You can use addressState field name as the referenceCode parameter to retrieve the values. | [optional] 
**id_issue_country** | **String** | Country of issuance. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use idIssueCountry field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_primary_id** | **BOOLEAN** | Flag to mark primary identification document. Valid values: true and false | [optional] 





---

# ApplicationInquiryIncomeDetails.md

# SwaggerClient::ApplicationInquiryIncomeDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**income_type** | **String** | Income type. This is a reference data field. Please use /v1/apac/utilities/referenceData/{incomeType} resource to get valid value of this field with description. You can use incomeType field name as the referenceCode parameter to retrieve the values. | [optional] 
**fixed_amount** | **Float** | Fixed income amount of applicant | [optional] 
**variable_amount** | **Float** | Variable income amount of applicant | [optional] 
**frequency** | **String** | Income Frequency. This is a reference data field. Please use /v1/apac/utilities/referenceData/{frequency} resource to get valid value of this field with description. You can use frequency field name as the referenceCode parameter to retrieve the values. | [optional] 
**other_income_description** | **String** | Description of income from other sources | [optional] 





---

# ApplicationInquiryKycInformation.md

# SwaggerClient::ApplicationInquiryKycInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_public_figure_declaration_flag** | **BOOLEAN** | Flag for self declaration if applicant is public figure. Valid values: true and false | [optional] 
**public_figure_office_status** | **String** | Flag for status of public office if applicant is public figure | [optional] 
**public_figure_office_details** | **String** | Office details if applicant is public figure | [optional] 
**public_figure_office_start_date** | **Date** | Public figure office start date in ISO 8601 date format YYYY-MM-DD | [optional] 
**public_figure_office_end_date** | **Date** | Public figure office end date in ISO 8601 date format YYYY-MM-DD | [optional] 
**is_related_to_senior_public_figure** | **BOOLEAN** | Self declaration if applicant has any relation with senior public figure. Valid values: true and false | [optional] 
**related_senior_public_figure_name** | **String** | Senior Public Figure Name | [optional] 
**related_senior_public_figure_designation** | **String** | Public figure designation. | [optional] 
**related_spf_country_of_government** | **String** | Senior Public Figure Country of Government | [optional] 
**related_senior_public_figure_department** | **String** | Department Senior Public Figure belongs to | [optional] 
**relationship_with_senior_public_figure** | **String** | Senior Public Figure relationship with applicant | [optional] 
**related_senior_public_figure_last_name** | **String** | Senior Public Figure Last Name | [optional] 
**us_tax_status** | **String** | US Tax status. This is a reference data field. Please use /v1/apac/utilities/referenceData/{usTaxStatus} resource to get valid value of this field with description. You can use usTaxStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**us_tax_id** | **String** | US Tax ID | [optional] 





---

# ApplicationInquiryLoanSpecificRecommendations.md

# SwaggerClient::ApplicationInquiryLoanSpecificRecommendations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_amount** | **Float** | Recommended loan amount. | [optional] 
**tenor** | **String** | Tenor for the loan repayment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{tenor} resource to get valid values of this field with descriptions. | [optional] 
**interest_rate** | **Float** | The rate of interest applicable for the product | [optional] 
**handling_fee** | **Float** | One-time processing fee. | [optional] 
**installment_amount** | **Float** | Instalment amount to be paid. | [optional] 
**annual_percentage_rate** | **Float** | Applicable Annual Percentage Rate | [optional] 
**total_principal_amount** | **Float** | Total principal to be paid by customer | [optional] 
**total_interest_amount** | **Float** | Total interest amount to be paid by applicant. | [optional] 
**total_installment_amount** | **Float** | Total instalment amount to be paid by customer | [optional] 
**repayment_schedule_issue_date** | **Date** | Repayment schedule start date in ISO 8601 date format YYYY-MM-DD | [optional] 
**repayment_schedule** | [**Array&lt;ApplicationInquiryRepaymentSchedule&gt;**](ApplicationInquiryRepaymentSchedule.md) |  | [optional] 





---

# ApplicationInquiryMarketingConsent.md

# SwaggerClient::ApplicationInquiryMarketingConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_data_opt_out_flag** | **BOOLEAN** | Opt out from use of personal data in direct marketing | [optional] 
**personal_data_opt_out_others_flag** | **BOOLEAN** | Opt out from use of personal data to other person in direct marketing | [optional] 





---

# ApplicationInquiryName.md

# SwaggerClient::ApplicationInquiryName

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salutation** | **String** | Salutation. This is a reference data field. Please use /v1/apac/utilities/referenceData/{salutation} resource to get valid value of this field with description. You can use salutation field name as the referenceCode parameter to retrieve the values. | [optional] 
**given_name** | **String** | Given/first name of the applicant | 
**middle_name** | **String** | Middle name of the applicant | [optional] 
**surname** | **String** | Surname/last name of the applicant | [optional] 
**local_english_given_name** | **String** | Local Given Name in English | [optional] 
**local_english_surname** | **String** | Local surname in English | [optional] 
**alias_name** | **String** | Alias name of the applicant | [optional] 
**salute_by** | **String** | Contains value with which applicant like to be addressed. This is a reference data field. Please use /v1/apac/utilities/referenceData/{saluteBy} resource to get valid value of this field with description. You can use saluteBy field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationInquiryPartnerCustomerDetails.md

# SwaggerClient::ApplicationInquiryPartnerCustomerDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_customer_internal_id** | **String** | Unique customer internal number associated with the partner. | [optional] 
**partner_customer_id** | **String** | Unique customer Id associated with the partner | [optional] 
**partner_customer_segment** | **String** | Partner customer segment.Partner customer segment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{partnerCustomerSegment} resource to get possible value of this field with description. You can use partnerCustomerSegment field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationInquiryPhone.md

# SwaggerClient::ApplicationInquiryPhone

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_type** | **String** | The type of phone. Ex:OFFICE, HOME, MOBILE, PRIMARY_MOBILE, FAX. This is a reference data field. Please use /v1/apac/utilities/referenceData/{phoneType} resource to get valid value of this field with description. You can use phoneType field name as the referenceCode parameter to retrieve the values. | 
**phone_country_code** | **String** | Country code of phone number | 
**area_code** | **String** | The area code of phone number | [optional] 
**phone_number** | **String** | Applicant&#x27;s phone number | 
**extension** | **String** | Extension of telephone number | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. This is applicable only if phone type is MOBILE. Valid values: true and false | [optional] 
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 





---

# ApplicationInquiryProduct.md

# SwaggerClient::ApplicationInquiryProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_product** | [**ApplicationInquiryCreditCardProduct**](ApplicationInquiryCreditCardProduct.md) |  | [optional] 
**ready_credit_product** | [**ApplicationInquiryReadyCreditProduct**](ApplicationInquiryReadyCreditProduct.md) |  | [optional] 
**unsecured_loan_product** | [**ApplicationInquiryUnsecuredLoanProduct**](ApplicationInquiryUnsecuredLoanProduct.md) |  | [optional] 





---

# ApplicationInquiryReadyCreditProduct.md

# SwaggerClient::ApplicationInquiryReadyCreditProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing organization name | 
**logo** | **String** | Product logo to identify the product | 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**emboss_name** | **String** | Name to be embossed on card | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**card_delivery_address** | **String** | Card delivery address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option for to review the credit limit in the future.Valid values: true and false | [optional] 
**atm_required_flag** | **BOOLEAN** | Option to get ATM card along with product. Valid values: true and false | [optional] 
**cheque_book_required_flag** | **BOOLEAN** | Option to get cheque book along with product. Valid values: true and false | [optional] 
**balance_transfer_details** | [**Array&lt;ApplicationInquiryBalanceTransferDetails&gt;**](ApplicationInquiryBalanceTransferDetails.md) |  | [optional] 





---

# ApplicationInquiryRepaymentSchedule.md

# SwaggerClient::ApplicationInquiryRepaymentSchedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor_occurence** | **String** | Installment month | [optional] 
**payment_due_date** | **Date** | Payment due date for each instalment in ISO 8601 date format YYYY-MM-DD | [optional] 
**monthly_installment_amount** | **Float** | Monthly installment amount. | [optional] 
**principal_amount** | **Float** | Principal amount of installment | [optional] 
**interest_amount** | **Float** | Interest amount of installment | [optional] 
**remaining_principal_amount** | **Float** | Remaining Principal Amount after each installment has been paid by customer | [optional] 





---

# ApplicationInquiryRequestedProductDecision.md

# SwaggerClient::ApplicationInquiryRequestedProductDecision

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | 
**organisation_name** | **String** | Card issuing Organisation code | 
**source_code** | **String** | A source code to identify the product | 
**logo** | **String** | Product logo to identify the product | [optional] 
**credit_decision** | **String** | Evaluated Applicant Credit Decision | [optional] 
**credit_specific_recommendations** | [**Array&lt;ApplicationInquiryCreditSpecificRecommendations&gt;**](ApplicationInquiryCreditSpecificRecommendations.md) |  | [optional] 
**loan_specific_recommendations** | [**Array&lt;ApplicationInquiryLoanSpecificRecommendations&gt;**](ApplicationInquiryLoanSpecificRecommendations.md) |  | [optional] 
**required_documents** | [**Array&lt;ApplicationInquiryRequiredDocuments&gt;**](ApplicationInquiryRequiredDocuments.md) |  | [optional] 





---

# ApplicationInquiryRequiredDocuments.md

# SwaggerClient::ApplicationInquiryRequiredDocuments

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id_type** | **String** | Document ID for each proof. This is a reference data field. Please use /v1/apac/utilities/referenceData/{documentIdType} resource to get valid values of this field with descriptions.You can use the documentIdType as the referenceCode parameter to retrieve the values. | [optional] 
**document_status** | **String** | Status of document proof.This is a reference data field. Please use /v1/apac/utilities/referenceData/{documentStatus} resource to get possible values of this field with descriptions.You can use the documentStatus as the referenceCode parameter to retrieve the values. | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**proof_type** | **String** | Type of document. This is a reference data field. Please use /v1/apac/utilities/referenceData/{proofType} resource to get possible values of this field with descriptions.You can use the proofType as the referenceCode parameter to retrieve the values. | [optional] 
**linked_document_id** | **String** | Linked document id specifies that the same document can be used for different proof types | [optional] 
**applicant_type** | **String** | Applicant&#x27;s relationship with the Bank. Currently supported is Primary - P.This is a reference data field. Please use /v1/apac/utilities/referenceData/{applicantType} resource to get valid value of this field with description.You can use the documentType as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationInquiryResponse.md

# SwaggerClient::ApplicationInquiryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_stage** | **String** | Current stage of an application.This is a reference data field. Please use /v1/apac/utilities/referenceData/{applicationStage} resource to get possible value of this field with description. You can use applicationStage field name as the referenceCode parameter to retrieve the values. | 
**has_any_supplementary_flag** | **BOOLEAN** | Flag indicating whether the primary applicant has any supplementary. | [optional] 
**ipa_expiry_date** | **Date** | In principle approval expiration date in  ISO 8601 date format YYYY-MM-DD | [optional] 
**product** | [**ApplicationInquiryProduct**](ApplicationInquiryProduct.md) |  | 
**applicant** | [**ApplicationInquiryApplicant**](ApplicationInquiryApplicant.md) |  | 
**requested_product_decision** | [**Array&lt;ApplicationInquiryRequestedProductDecision&gt;**](ApplicationInquiryRequestedProductDecision.md) |  | [optional] 
**counter_offers** | [**Array&lt;ApplicationInquiryCounterOffer&gt;**](ApplicationInquiryCounterOffer.md) |  | [optional] 
**cross_sell_offers** | [**Array&lt;ApplicationInquiryCrossSellOffer&gt;**](ApplicationInquiryCrossSellOffer.md) |  | [optional] 





---

# ApplicationInquirySelfDeclaration.md

# SwaggerClient::ApplicationInquirySelfDeclaration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_active_credit_card_limit_amount** | **Float** | Total credit limit of all the credit cards the applicant is holding | [optional] 
**anticipated_income_decrease_code** | **String** | Anticipated income decrease code. Valid values: Yes and No | [optional] 
**loan_taken_indicator** | **BOOLEAN** | To indicate if any loan is outstanding.Valid values: true and false | [optional] 
**monthly_repayment_for_all_ext_loans** | **Float** | Applicants declaration for his/her total monthly repayment amount for all the external loans. | [optional] 





---

# ApplicationInquiryUnsecuredLoanProduct.md

# SwaggerClient::ApplicationInquiryUnsecuredLoanProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing Organisation code | 
**logo** | **String** | Product logo to identify the product | 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**requested_loan_amount** | **Float** | Requested loan amount | [optional] 
**tenor** | **String** | Tenure of loan. This is a reference data field. Please use /v1/apac/utilities/referenceData/{tenor} resource to get valid value of this field with description. You can use tenor field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationStageResponse.md

# SwaggerClient::ApplicationStageResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_stage** | **String** | Current stage of an application.This is a reference data field. Please use /v1/apac/utilities/referenceData/{applicationStage} resource to get possible value of this field with description. You can use applicationStage field name as the referenceCode parameter to retrieve the values. | 
**ipa_expiry_date** | **Date** | In principle approval expiration date in  ISO 8601 date format YYYY-MM-DD | [optional] 





---

# ApplicationStatusInqRequestedProductDecision.md

# SwaggerClient::ApplicationStatusInqRequestedProductDecision

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | [optional] 
**organisation_name** | **String** | Card issuing Organisation | [optional] 
**source_code** | **String** | A source code to identify the product | [optional] 
**credit_decision** | **String** | Evaluated Applicant Credit Decision. This is a reference data field. Please use /v1/apac/utilities/referenceData/{creditDecision} resource to get valid value of this field with description. | [optional] 
**credit_specific_recommendations** | [**Array&lt;CreditSpecificRecommendations&gt;**](CreditSpecificRecommendations.md) |  | [optional] 
**loan_specific_recommendations** | [**Array&lt;LoanSpecificRecommendations&gt;**](LoanSpecificRecommendations.md) |  | [optional] 
**required_documents** | [**Array&lt;RequiredDocuments&gt;**](RequiredDocuments.md) |  | [optional] 





---

# ApplicationStatusResponse.md

# SwaggerClient::ApplicationStatusResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_stage** | **String** | Current stage of an application.This is a reference data field. Please use /v1/apac/utilities/referenceData/{applicationStage} resource to get possible value of this field with description. You can use applicationStage field name as the referenceCode parameter to retrieve the values. | 
**ipa_expiry_date** | **Date** | In principle approval expiration date in  ISO 8601 date format YYYY-MM-DD | [optional] 
**requested_product_decision** | [**Array&lt;ApplicationStatusInqRequestedProductDecision&gt;**](ApplicationStatusInqRequestedProductDecision.md) |  | [optional] 
**counter_offers** | [**Array&lt;CounterOffer&gt;**](CounterOffer.md) |  | [optional] 
**cross_sell_offers** | [**Array&lt;CrossSellOffer&gt;**](CrossSellOffer.md) |  | [optional] 





---

# ApplicationUpdateAdditionalData.md

# SwaggerClient::ApplicationUpdateAdditionalData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_dependents** | [**BigDecimal**](BigDecimal.md) | Number of dependants | [optional] 
**staff_indicator** | **BOOLEAN** | Flag to indicates if applicant is a Citi Staff. Valid values: true and false | [optional] 
**business_nature** | **String** | Business nature of the applicant. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{businessNature} resource to get valid value of this field with description. You can use businessNature field name as the referenceCode parameter to retrieve the values. | [optional] 
**emergency_contact_name** | **String** | Emergency Contact Name | [optional] 
**emergency_contact_phone_number** | **String** | Emergency Contact Number. | [optional] 
**over_limit_consent_flag** | **BOOLEAN** | Customer Consent on spending more than the limit assigned to him. Valid values: true and false | [optional] 
**country_specific_group** | [**ApplicationUpdateCountrySpecificGroup**](ApplicationUpdateCountrySpecificGroup.md) |  | [optional] 
**primary_bank_details** | [**ApplicationUpdatePrimaryBankDetails**](ApplicationUpdatePrimaryBankDetails.md) |  | [optional] 
**referral_given_name** | **String** | Referral First Name. | [optional] 
**referral_surname** | **String** | Referral Surname/Last Name. | [optional] 
**related_to_citi_employee_flag** | **BOOLEAN** | Self declaration if applicant has any relation with citi bank employee. Valid values: true and false | [optional] 
**related_citi_employee_name** | **String** | Name of the citi employee if applicant has any relation with citi bank employee. | [optional] 
**related_citi_employee_department** | **String** | Department of citi employee if applicant has any relation with citi bank employee. | [optional] 
**credit_card_usage_purpose** | **String** | Indicates applicants usage of credit card whether it is for personal or business.Please use /v1/apac/utilities/referenceData/{creditCardUsagePurpose} resource to get valid value of this field with description. | [optional] 





---

# ApplicationUpdateAddress.md

# SwaggerClient::ApplicationUpdateAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_type** | **String** | Type of address. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**address_line1** | **String** | Address line 1 | [optional] 
**address_line2** | **String** | Address line 2 | [optional] 
**address_line3** | **String** | Address line 3 | [optional] 
**address_line4** | **String** | Address line 4 | [optional] 
**city_name** | **String** | City | [optional] 
**state** | **String** | State.This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressState} resource to get valid value of this field with description. You can use addressState field name as the referenceCode parameter to retrieve the values. | [optional] 
**postal_code** | **String** | Postal/ZIP code | [optional] 
**province_code** | **String** | Province code | [optional] 
**country_code** | **String** | ISO country code. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use countryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**ok_to_mail** | **BOOLEAN** | Applicant&#x27;s consent for receiving mail. Valid values: true and false | [optional] 
**residence_duration_in_years** | **Integer** | Applicant&#x27;s residence duration in the current address in years. Applicable only for residential address. | [optional] 
**residence_duration_in_months** | **Integer** | Applicant&#x27;s residence duration in the current address in months. Applicable only for residential address. | [optional] 
**country_specific_address** | [**ApplicationUpdateCountrySpecificAddress**](ApplicationUpdateCountrySpecificAddress.md) |  | [optional] 





---

# ApplicationUpdateApplicant.md

# SwaggerClient::ApplicationUpdateApplicant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**ApplicationUpdateName**](ApplicationUpdateName.md) |  | [optional] 
**phone** | [**Array&lt;ApplicationUpdatePhone&gt;**](ApplicationUpdatePhone.md) |  | [optional] 
**email** | [**Array&lt;ApplicationUpdateEmail&gt;**](ApplicationUpdateEmail.md) |  | [optional] 
**ocr** | [**ApplicationUpdateOcr**](ApplicationUpdateOcr.md) |  | [optional] 
**demographics** | [**ApplicationUpdateDemographics**](ApplicationUpdateDemographics.md) |  | [optional] 
**address** | [**Array&lt;ApplicationUpdateAddress&gt;**](ApplicationUpdateAddress.md) |  | [optional] 
**contact_preference** | [**ApplicationUpdateContactPreference**](ApplicationUpdateContactPreference.md) |  | [optional] 
**contact_consent** | [**ApplicationUpdateContactConsent**](ApplicationUpdateContactConsent.md) |  | [optional] 
**financial_information** | [**ApplicationUpdateFinancialInformation**](ApplicationUpdateFinancialInformation.md) |  | [optional] 
**mother_maiden_name** | **String** | Mother&#x27;s maiden name | [optional] 
**education** | [**ApplicationUpdateEducation**](ApplicationUpdateEducation.md) |  | [optional] 
**employment_details** | [**Array&lt;ApplicationUpdateEmploymentDetails&gt;**](ApplicationUpdateEmploymentDetails.md) |  | [optional] 
**identification_document_details** | [**Array&lt;ApplicationUpdateIdentificationDocumentDetails&gt;**](ApplicationUpdateIdentificationDocumentDetails.md) |  | [optional] 
**additional_data** | [**ApplicationUpdateAdditionalData**](ApplicationUpdateAdditionalData.md) |  | [optional] 
**partner_customer_details** | [**ApplicationUpdatePartnerCustomerDetails**](ApplicationUpdatePartnerCustomerDetails.md) |  | [optional] 
**consent_details** | [**Array&lt;ApplicationUpdateConsentDetails&gt;**](ApplicationUpdateConsentDetails.md) |  | [optional] 
**marketing_consent** | [**ApplicationUpdateMarketingConsent**](ApplicationUpdateMarketingConsent.md) |  | [optional] 
**self_declaration** | [**ApplicationUpdateSelfDeclaration**](ApplicationUpdateSelfDeclaration.md) |  | [optional] 
**kyc_information** | [**ApplicationUpdateKycInformation**](ApplicationUpdateKycInformation.md) |  | [optional] 





---

# ApplicationUpdateBalanceTransferDetails.md

# SwaggerClient::ApplicationUpdateBalanceTransferDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_to_transfer** | **Float** | Amount to Transfer | 
**issuing_organization_name** | **String** | Name of the Organization to which the fund has to be transferred. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardIssuingOrganization} resource to get valid value of this field with description. You can use cardIssuingOrganization field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_name** | **String** | Customer&#x27;s account Name | [optional] 
**account_reference_number** | **String** | Customer&#x27;s account reference number with biller. | [optional] 
**biller_code** | **String** | It is a unique code to identify a BPAY biller | 
**campaign_id** | **String** | Campaign code of the balance transfer. | [optional] 





---

# ApplicationUpdateConsentDetails.md

# SwaggerClient::ApplicationUpdateConsentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_type** | **String** | Applicant&#x27;s consent types. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{consentType} resource to get valid value of this field with description. You can use consentType field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_consent_given** | **BOOLEAN** | Consent flag. Valid values: true and false | [optional] 





---

# ApplicationUpdateContactConsent.md

# SwaggerClient::ApplicationUpdateContactConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 
**ok_to_mail** | **BOOLEAN** | Applicant&#x27;s consent for receiving mails. Valid values: true and false | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. Valid values: true and false | [optional] 





---

# ApplicationUpdateContactPreference.md

# SwaggerClient::ApplicationUpdateContactPreference

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**send_sms_advice_flag** | **BOOLEAN** | Applicant&#x27;s subscription for receiving advices through SMS. Valid values: true and false | [optional] 
**send_email_advice_flag** | **BOOLEAN** | Applicant&#x27;s subscription for receiving advices through email. Valid values: true and false | [optional] 
**preferred_mailing_address** | **String** | Preferred Mailing Address by applicant. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**e_statement_enrollment_flag** | **BOOLEAN** | Applicant&#x27;s subscription for receiving statement over email. Valid values: true and false | [optional] 





---

# ApplicationUpdateCountrySpecificAddress.md

# SwaggerClient::ApplicationUpdateCountrySpecificAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_number** | **String** | Unit Number | [optional] 
**floor_number** | **String** | Floor Number | [optional] 
**block_number** | **String** | Block Number | [optional] 
**building_name** | **String** | Building Name | [optional] 
**estate_name** | **String** | Estate Name | [optional] 
**street_number** | **String** | Street Number | [optional] 
**street_name** | **String** | Street Name | [optional] 
**street_type** | **String** | Applicant&#x27;s street Type.Please use /v1/apac/utilities/referenceData/{streetType} resource to get valid value of this field with description. You can use streetType field name as the referenceCode parameter to retrieve the values | [optional] 
**town** | **String** | Town | [optional] 





---

# ApplicationUpdateCountrySpecificGroup.md

# SwaggerClient::ApplicationUpdateCountrySpecificGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bumiputra_indicator** | **BOOLEAN** | Indicator to specify the regional race and other indigenous peoples of Southeast Asia, and used particularly in Malaysia. Valid values: true and false. | [optional] 
**disability_indicator** | **BOOLEAN** | The instruments issued to applicants are provided with special needs like brailed characters on statements. Valid values: true and false. Applicable to Singapore only | [optional] 
**union_pay_card_number** | **String** | Applicant&#x27;s union pay card number to link the product and applicable to China only | [optional] 
**tax_file_number** | **String** | Applicant&#x27;s tax file number to link the product and applicable to Australia only | [optional] 





---

# ApplicationUpdateCreditCardProduct.md

# SwaggerClient::ApplicationUpdateCreditCardProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product. | [optional] 
**source_code** | **String** | A source code to identify the product | [optional] 
**organization** | **String** | Card issuing organization name | [optional] 
**logo** | **String** | Product logo to identify the product | [optional] 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**emboss_name** | **String** | Name to be embossed on card.If blank, bank will assign automatically based on the market norms. | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**card_delivery_address** | **String** | Card delivery address of applicant. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of applicant. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option  to review the credit limit in the future.Valid values: true and false | [optional] 
**balance_transfer_details** | [**Array&lt;ApplicationUpdateBalanceTransferDetails&gt;**](ApplicationUpdateBalanceTransferDetails.md) |  | [optional] 





---

# ApplicationUpdateDemographics.md

# SwaggerClient::ApplicationUpdateDemographics

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gender** | **String** | Gender/sex. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{gender} resource to get valid value of this field with description. You can use gender field name as the referenceCode parameter to retrieve the values. | [optional] 
**date_of_birth** | **String** | Applicant&#x27;s date of birth in  ISO 8601 date format YYYY-MM-DD | [optional] 
**place_of_birth** | **String** | Applicant&#x27;s place of birth | [optional] 
**country_of_birth** | **String** | Applicant&#x27;s Country of birth. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use countryOfBirth field name as the referenceCode parameter to retrieve the values. | [optional] 
**nationality** | **String** | Applicant&#x27;s nationality. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use nationality field name as the referenceCode parameter to retrieve the values. | [optional] 
**domicile_country_code** | **String** | Domicile country code. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use domicileCountryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**permanent_residency_country_code** | **String** | Permanent residency country code. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use permanentResidencyCountryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**marital_status** | **String** | Applicant&#x27;s marital status. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{maritalStatus} resource to get valid value of this field with description. You can use maritalStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**residency_status** | **String** | Indicate status of residence. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{residenceStatus} resource to get valid value of this field with description. You can use residencyStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**residence_type** | **String** | Type of Residence. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{residenceType} resource to get valid value of this field with description. You can use residenceType field name as the referenceCode parameter to retrieve the values. | [optional] 
**tax_domicile_country_code** | **String** | Tax domicile country code. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use taxDomicileCountryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**spoken_language_code** | **String** | Code for spoken language of applicant. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{spokenLanguageCode} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**correspondence_language_code** | **String** | Code for correspondence language of applicant. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{spokenLanguageCode} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationUpdateEducation.md

# SwaggerClient::ApplicationUpdateEducation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**highest_education_level** | **String** | Highest education level of the applicant. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{highestEducationLevel} resource to get valid value of this field with description. You can use highestEducationLevel field name as the referenceCode parameter to retrieve the values. | [optional] 
**year_of_graduation** | **String** | Year of completing graduation. This is required if applicant is a student | [optional] 
**student_id** | **String** | Unique ID of the student. This is required if applicant is a student | [optional] 
**university** | **String** | University name. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{universityCode} resource to get valid value of this field with description. You can use university field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationUpdateEmail.md

# SwaggerClient::ApplicationUpdateEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **String** | Email Id of applicant | 
**ok_to_email** | **BOOLEAN** | Applicant&#x27;s consent for receiving email. Valid values: true and false | [optional] 
**is_preferred_email_address** | **BOOLEAN** | Flag to mark preferred email. Valid values: true and false | [optional] 





---

# ApplicationUpdateEmploymentDetails.md

# SwaggerClient::ApplicationUpdateEmploymentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employer_name** | **String** | Name of the employer. | [optional] 
**job_title** | **String** | Job Title. This is a reference data field. Please use /v1/apac/utilities/referenceData/{jobTitle} resource to get valid value of this field with description. You can use jobTitle field name as the referenceCode parameter to retrieve the values. | [optional] 
**occupation_code** | **String** | Occupation code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{occupationCode} resource to get valid value of this field with description. You can use occupationCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**industry_code** | **String** | Code of the industry of employment. This is a reference data field. Please use /v1/apac/utilities/referenceData/{industryCode} resource to get valid value of this field with description. You can use industryCode field name as the referenceCode parameter to retrieve the values. | [optional] 
**employment_duration_in_years** | **Integer** | Employment duration in years | [optional] 
**employment_duration_in_months** | **Integer** | Employment duration in months | [optional] 
**employment_status** | **String** | Status of the employment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{employmentStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**months_in_previous_employment** | **Integer** | Months spent in the previouse employment | [optional] 
**years_in_previous_employment** | **Integer** | Years spent in the previouse employment | [optional] 
**accountant_name** | **String** | Accountant or contact&#x27;s name | [optional] 
**accountant_firm_name** | **String** | Accountant&#x27;s firm or business name | [optional] 
**years_in_industry** | **Integer** | Years spent in industry | [optional] 
**months_in_industry** | **Integer** | Months spent in industry | [optional] 





---

# ApplicationUpdateExistingLoanDetails.md

# SwaggerClient::ApplicationUpdateExistingLoanDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_type** | **String** | Loan Type.This is a reference data field. Please use /v1/apac/utilities/referenceData/{loanType} resource to get valid value of this field with description. You can use loanType field name as the referenceCode parameter to retrieve the values. | [optional] 
**other_debt_obligation_type** | **String** | Other debt obligation type. | [optional] 
**monthly_installment_amount** | **Float** | Monthly repayment amount | [optional] 
**outstanding_balance_amount** | **Float** | Balance Owing | [optional] 
**debt_ownership** | **String** | Nature debt ownership. Please use /v1/apac/utilities/referenceData/{debtOwnership} resource to get valid value of this field with description. | [optional] 
**lender_name** | **String** | Name of the lender/non-banking financial institution. | [optional] 





---

# ApplicationUpdateExpenseDetails.md

# SwaggerClient::ApplicationUpdateExpenseDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expense_type** | **String** | Expense type. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{expenseType} resource to get valid value of this field with description. You can use expenseType field name as the referenceCode parameter to retrieve the values. | [optional] 
**expense_amount** | **Float** | Expenditure amount for an applicant | [optional] 
**frequency** | **String** | Expense Frequency. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{frequency} resource to get valid value of this field with description. You can use frequency field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationUpdateFinancialInformation.md

# SwaggerClient::ApplicationUpdateFinancialInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_foreseeable_financial_changes** | **BOOLEAN** | Indicates whether any foreseeable changes in customer&#x27;s financial circumstances. | [optional] 
**non_bank_debt_obligation_flag** | **BOOLEAN** | Indicates if the applicant has any loan with any non-banking financial organization. | [optional] 
**expense_details** | [**Array&lt;ApplicationUpdateExpenseDetails&gt;**](ApplicationUpdateExpenseDetails.md) |  | [optional] 
**income_details** | [**Array&lt;ApplicationUpdateIncomeDetails&gt;**](ApplicationUpdateIncomeDetails.md) |  | [optional] 
**existing_loan_details** | [**Array&lt;ApplicationUpdateExistingLoanDetails&gt;**](ApplicationUpdateExistingLoanDetails.md) |  | [optional] 





---

# ApplicationUpdateIdentificationDocumentDetails.md

# SwaggerClient::ApplicationUpdateIdentificationDocumentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_type** | **String** | Type of Identification document. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{idType} resource to get valid values of this field with descriptions | [optional] 
**id_number** | **String** | Unique identifier of identification document. Ex: Passport Number | [optional] 
**id_expiry_date** | **Date** | Expiry date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_date** | **Date** | Issuance date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_place** | **String** | Identification document issuance place | [optional] 
**id_issue_state** | **String** | State from which identification document was issued. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressState} resource to get valid value of this field with description. You can use addressState field name as the referenceCode parameter to retrieve the values. | [optional] 
**id_issue_country** | **String** | Country of issuance. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use idIssueCountry field name as the referenceCode parameter to retrieve the values. | [optional] 
**is_primary_id** | **BOOLEAN** | Flag to mark primary identification document. Valid values: true and false | [optional] 





---

# ApplicationUpdateIncomeDetails.md

# SwaggerClient::ApplicationUpdateIncomeDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**income_type** | **String** | Income type. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{incomeType} resource to get valid value of this field with description. You can use incomeType field name as the referenceCode parameter to retrieve the values. | [optional] 
**fixed_amount** | **Float** | Fixed income amount of applicant | [optional] 
**variable_amount** | **Float** | Variable income amount of appliacnt | [optional] 
**frequency** | **String** | Income Frequency. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{frequency} resource to get valid value of this field with description. You can use frequency field name as the referenceCode parameter to retrieve the values. | [optional] 
**other_income_description** | **String** | Description of income from other sources | [optional] 





---

# ApplicationUpdateKycInformation.md

# SwaggerClient::ApplicationUpdateKycInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_public_figure_declaration_flag** | **BOOLEAN** | Flag for self declaration if applicant is public figure. Valid values: true and false | [optional] 
**public_figure_office_status** | **String** | Flag for status of public office if applicant is public figure | [optional] 
**public_figure_office_details** | **String** | Office details if applicant is public figure | [optional] 
**public_figure_office_start_date** | **Date** | Public figure office start date in ISO 8601 date format YYYY-MM-DD | [optional] 
**public_figure_office_end_date** | **Date** | Public figure office end date in ISO 8601 date format YYYY-MM-DD | [optional] 
**is_related_to_senior_public_figure** | **BOOLEAN** | Self declaration if applicant has any relation with senior public figure. Valid values: true and false | [optional] 
**related_senior_public_figure_name** | **String** | Senior Public Figure Name | [optional] 
**related_spf_country_of_government** | **String** | Senior Public Figure Country of Government | [optional] 
**related_senior_public_figure_department** | **String** | Department Senior Public Figure belongs to | [optional] 
**relationship_with_senior_public_figure** | **String** | Senior Public Figure relationship with applicant | [optional] 
**related_senior_public_figure_last_name** | **String** | Senior Public Figure Last Name | [optional] 
**us_tax_status** | **String** | US Tax status. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{usTaxStatus} resource to get valid value of this field with description. You can use usTaxStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**us_tax_id** | **String** | US Tax ID | [optional] 





---

# ApplicationUpdateMarketingConsent.md

# SwaggerClient::ApplicationUpdateMarketingConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_data_opt_out_others_flag** | **BOOLEAN** | Opt out from use of personal data to other person/organization in direct marketing | [optional] 





---

# ApplicationUpdateName.md

# SwaggerClient::ApplicationUpdateName

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salutation** | **String** | Salutation. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{salutation} resource to get valid value of this field with description. You can use salutation field name as the referenceCode parameter to retrieve the values. | [optional] 
**given_name** | **String** | Given/first name of the applicant | 
**middle_name** | **String** | Middle name of the applicant | [optional] 
**surname** | **String** | Surname/last name of the applicant | [optional] 
**local_english_given_name** | **String** | Local Given Name in English | [optional] 
**local_english_surname** | **String** | Local surname in English | [optional] 
**alias_name** | **String** | Alias name of the applicant | [optional] 
**full_name** | **String** | Full name of the applicant. | [optional] 
**salute_by** | **String** | Contains value with which applicant like to be addressed. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{saluteBy} resource to get valid value of this field with description. You can use saluteBy field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationUpdateOcr.md

# SwaggerClient::ApplicationUpdateOcr

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ocr_reference_number** | **String** | OCR (Optical Character Recognition) Reference number | [optional] 





---

# ApplicationUpdatePartnerCustomerDetails.md

# SwaggerClient::ApplicationUpdatePartnerCustomerDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_customer_internal_id** | **String** | Unique customer internal number associated with the partner. | [optional] 
**partner_customer_id** | **String** | Unique customer Id associated with the partner | [optional] 
**partner_customer_segment** | **String** | Partner customer segment.Partner customer segment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{partnerCustomerSegment} resource to get possible value of this field with description. You can use partnerCustomerSegment field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ApplicationUpdatePhone.md

# SwaggerClient::ApplicationUpdatePhone

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_type** | **String** | The type of phone. Ex:OFFICE, HOME, MOBILE, PRIMARY_MOBILE, FAX. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{phoneType} resource to get valid value of this field with description. You can use phoneType field name as the referenceCode parameter to retrieve the values. | 
**phone_country_code** | **String** | Country code of telephone number | 
**area_code** | **String** | The area code of telephone number | [optional] 
**phone_number** | **String** | The phone number of applicant | 
**extension** | **String** | Extension of telephone number | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. This is applicable only if phone type is MOBILE. Valid values: true and false | [optional] 
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 





---

# ApplicationUpdatePrimaryBankDetails.md

# SwaggerClient::ApplicationUpdatePrimaryBankDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_name** | **String** | Main bank name with Citi. This is a reference data field. Please use /v1/apac/utilities/referenceData/{bankName} resource to get valid value of this field with description. | [optional] 
**account_type** | **String** | Type of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountType} resource to get valid value of this field with description. | [optional] 





---

# ApplicationUpdateProduct.md

# SwaggerClient::ApplicationUpdateProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_product** | [**ApplicationUpdateCreditCardProduct**](ApplicationUpdateCreditCardProduct.md) |  | [optional] 
**ready_credit_product** | [**ApplicationUpdateReadyCreditProduct**](ApplicationUpdateReadyCreditProduct.md) |  | [optional] 
**unsecured_loan_product** | [**ApplicationUpdateUnsecuredLoanProduct**](ApplicationUpdateUnsecuredLoanProduct.md) |  | [optional] 





---

# ApplicationUpdateReadyCreditProduct.md

# SwaggerClient::ApplicationUpdateReadyCreditProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | [optional] 
**source_code** | **String** | A source code to identify the product | [optional] 
**organization** | **String** | Card issuing organization name | [optional] 
**logo** | **String** | Product logo to identify the product | [optional] 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**emboss_name** | **String** | Name to be embossed on card | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**card_delivery_address** | **String** | Card delivery address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option for to review the credit limit in the future.Valid values: true and false | [optional] 
**atm_required_flag** | **BOOLEAN** | Option to get ATM card along with product. Valid values: true and false | [optional] 
**cheque_book_required_flag** | **BOOLEAN** | Option to get cheque book along with product. Valid values: true and false | [optional] 
**balance_transfer_details** | [**Array&lt;ApplicationUpdateBalanceTransferDetails&gt;**](ApplicationUpdateBalanceTransferDetails.md) |  | [optional] 





---

# ApplicationUpdateRequest.md

# SwaggerClient::ApplicationUpdateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**ApplicationUpdateProduct**](ApplicationUpdateProduct.md) |  | [optional] 
**applicant** | [**ApplicationUpdateApplicant**](ApplicationUpdateApplicant.md) |  | [optional] 
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | 





---

# ApplicationUpdateResponse.md

# SwaggerClient::ApplicationUpdateResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_stage** | **String** | Application stage of an Application | 





---

# ApplicationUpdateSelfDeclaration.md

# SwaggerClient::ApplicationUpdateSelfDeclaration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_active_credit_card_limit_amount** | **Float** | Total active credit card amount | [optional] 
**anticipated_income_decrease_code** | **String** | Anticipated income decrease code. Valid values: Yes and No | [optional] 
**loan_taken_indicator** | **BOOLEAN** | To indicate if a loan has been taken previously. Valid values: true and false | [optional] 
**monthly_repayment_for_all_ext_loans** | **Float** | Applicants declaration for his/her total monthly repayment amount for all the external loans. | [optional] 





---

# ApplicationUpdateUnsecuredLoanProduct.md

# SwaggerClient::ApplicationUpdateUnsecuredLoanProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | [optional] 
**source_code** | **String** | A source code to identify the product | [optional] 
**organization** | **String** | Card issuing Organisation code | [optional] 
**logo** | **String** | Product logo to identify the product | [optional] 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**requested_loan_amount** | **Float** | Requested loan amount | [optional] 
**tenor** | **String** | Tenure of loan. This is a reference data field. Please use /v1/apac/utilities/referenceData/{tenor} resource to get valid value of this field with description. You can use tenor field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# BackgroundScreeningRequest.md

# SwaggerClient::BackgroundScreeningRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | 





---

# BackgroundScreeningResponse.md

# SwaggerClient::BackgroundScreeningResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_stage** | **String** | Current stage of an application.This is a reference data field. Please use /v1/apac/utilities/referenceData/{applicationStage} resource to get possible value of this field with description. You can use applicationStage field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# BalanceTransferBookingRequest.md

# SwaggerClient::BalanceTransferBookingRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | [**BigDecimal**](BigDecimal.md) | Tenure of loan in months. | 
**balance_transfer_bookings** | [**Array&lt;BalanceTransferBookings&gt;**](BalanceTransferBookings.md) |  | 





---

# BalanceTransferBookingResponse.md

# SwaggerClient::BalanceTransferBookingResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance_transfer_reference_id** | **String** | Reference Id to uniquely identify the balance transfer. | 





---

# BalanceTransferBookings.md

# SwaggerClient::BalanceTransferBookings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_amount** | **Float** | This field is to indicate the loan amount for booking. | 
**bt_disbursement_option** | **String** | Provide the list of the options available to receive the disbursement of balance transfer. Please use /v1/utilities/referenceData/{btDisbursementOption} resource to get valid value of this field with description. | 
**disbursement_account_id** | **String** | The disbursement account identifier in encrypted format. Applicable only for HK. | [optional] 
**payee_type** | **String** | Identifies the type of payee based on the destination of the payee.This is a reference data field. Please use /v1/utilities/referenceData/{payeeType} resource to get valid value of this field with description.  | [optional] 
**bank_details** | [**BankDetails**](BankDetails.md) |  | [optional] 





---

# BalanceTransferDetails.md

# SwaggerClient::BalanceTransferDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_to_transfer** | **Float** | Amount to Transfer | 
**issuing_organization_name** | **String** | Name of the Organization to which the fund has to be transferred. This is a reference data field. Please use /v1/utilities/referenceData/{cardIssuingOrganization} resource to get valid value of this field with description. | [optional] 
**account_name** | **String** | Customer&#x27;s account Name | [optional] 
**account_reference_number** | **String** | Customer&#x27;s account reference number with biller. | [optional] 
**biller_code** | **String** | It is a unique code to identify a BPAY biller | [optional] 
**campaign_id** | **String** | Campaign code of the balance transfer. | [optional] 
**payment_type** | **String** | Mode of payment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{paymentType} resource to get valid value of this field with description. You can use paymentType field name as the referenceCode parameter to retrieve the values. | [optional] 
**bsb_code** | **String** | BSB Code for EFT payment mode. | [optional] 





---

# BalanceTransferEligibilityDetails.md

# SwaggerClient::BalanceTransferEligibilityDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **String** | The account id  in encrypted format. | 
**display_account_number** | **String** | A masked account number that can be displayed to the customer. | 
**bt_supported_account_group** | **String** | This field refers the account group supported by Balance Transfer. This is a reference data field. Please use /v1/utilities/referenceData/{btSupportedAccountGroup} resource to get valid value of this field with description. | [optional] 
**maximum_eligible_loan_amount** | **Float** | This field indicates the maximum eligible amount for loan. | 
**minimum_eligible_loan_amount** | **Float** | This field indicates the minimum eligible amount for loan. | [optional] 
**bt_disbursement_options** | [**Array&lt;BtDisbursementOptions&gt;**](BtDisbursementOptions.md) |  | 
**payment_pans** | [**Array&lt;PaymentPans&gt;**](PaymentPans.md) |  | [optional] 





---

# BalanceTransferEligibilityResponse.md

# SwaggerClient::BalanceTransferEligibilityResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance_transfer_eligibility_details** | [**Array&lt;BalanceTransferEligibilityDetails&gt;**](BalanceTransferEligibilityDetails.md) |  | [optional] 





---

# BankDetails.md

# SwaggerClient::BankDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_code** | **String** | Bank Identification Code to which the loan will be credited. | [optional] 
**account_number** | **String** | Account Number to which the loan will be credited. | [optional] 
**branch_code** | **String** | Branch Code to which the loan will be credited | [optional] 
**bank_name** | **String** | This refer to the name of the bank | [optional] 
**payee_name** | **String** | Name of the Beneficiary to whom the loam amount will be disbursed. | [optional] 





---

# BankingApi.md

# SwaggerClient::BankingApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//cds-au/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_product_detail**](BankingApi.md#get_product_detail) | **GET** /banking/products/{productId} | Get Product Detail
[**list_products**](BankingApi.md#list_products) | **GET** /banking/products | Get Products

# **get_product_detail**
> ResponseBankingProductById get_product_detail(product_id, x_v, opts)

Get Product Detail

This API is used to get the detailed information on the selected product such as features, eligibility, fees and more. To retrieve the details, simply pass the product id returned from the Get Products API callout.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::BankingApi.new
product_id = 'product_id_example' # String | ID of the specific product requested
x_v = 'x_v_example' # String | Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)
opts = { 
  x_min_v: 'x_min_v_example' # String | Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable.
}

begin
  #Get Product Detail
  result = api_instance.get_product_detail(product_id, x_v, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling BankingApi->get_product_detail: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **String**| ID of the specific product requested | 
 **x_v** | **String**| Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers) | 
 **x_min_v** | **String**| Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. | [optional] 

### Return type

[**ResponseBankingProductById**](ResponseBankingProductById.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **list_products**
> ResponseBankingProductList list_products(x_v, opts)

Get Products

This API is used to get the list of product categories that are currently offered to the market.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::BankingApi.new
x_v = 'x_v_example' # String | Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)
opts = { 
  effective: 'CURRENT', # String | Allows for the filtering of products based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields. Valid values are ‘CURRENT’, ‘FUTURE’ and ‘ALL’. If absent defaults to 'CURRENT'
  updated_since: 'updated_since_example', # String | Only include products that have been updated after the specified date and time. If absent defaults to include all products
  brand: 'brand_example', # String | Filter results based on a specific brand
  product_category: 'product_category_example', # String | Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.
  page: 1, # Integer | Page of results to request (standard pagination)
  page_size: 25, # Integer | Page size to request. Default is 25 (standard pagination)
  x_min_v: 'x_min_v_example' # String | Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable.
}

begin
  #Get Products
  result = api_instance.list_products(x_v, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling BankingApi->list_products: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_v** | **String**| Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers) | 
 **effective** | **String**| Allows for the filtering of products based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields. Valid values are ‘CURRENT’, ‘FUTURE’ and ‘ALL’. If absent defaults to &#x27;CURRENT&#x27; | [optional] [default to CURRENT]
 **updated_since** | **String**| Only include products that have been updated after the specified date and time. If absent defaults to include all products | [optional] 
 **brand** | **String**| Filter results based on a specific brand | [optional] 
 **product_category** | **String**| Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned. | [optional] 
 **page** | **Integer**| Page of results to request (standard pagination) | [optional] [default to 1]
 **page_size** | **Integer**| Page size to request. Default is 25 (standard pagination) | [optional] [default to 25]
 **x_min_v** | **String**| Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. | [optional] 

### Return type

[**ResponseBankingProductList**](ResponseBankingProductList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json







---

# BankingProductBundle.md

# SwaggerClient::BankingProductBundle

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the bundle | 
**description** | **String** | Description of the bundle | 
**additional_info** | **String** | Display text providing more information on the bundle | [optional] 
**additional_info_uri** | **String** | Link to a web page with more information on the bundle criteria and benefits | [optional] 
**product_ids** | **Array&lt;String&gt;** | Array of product IDs for products included in the bundle that are available via the product end  points.  Note that this array is not intended to represent a comprehensive model of the products included in the bundle and  some products available for the bundle may not be available via the product reference end points | [optional] 





---

# BankingProductCategory.md

# SwaggerClient::BankingProductCategory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------





---

# BankingProductConstraint.md

# SwaggerClient::BankingProductConstraint

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraint_type** | **String** | The type of constraint described.  See the next section for an overview of valid values and  their meaning | 
**additional_value** | **String** | Generic field containing additional information relevant to the [constraintType] (#tocSproductconstrainttypedoc) specified.  Whether mandatory or not is dependent on the value of [constraintType] (#tocSproductconstrainttypedoc) | [optional] 
**additional_info** | **String** | Display text providing more information the constraint | [optional] 
**additional_info_uri** | **String** | Link to a web page with more information on the constraint | [optional] 





---

# BankingProductDepositRate.md

# SwaggerClient::BankingProductDepositRate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deposit_rate_type** | **String** | The type of rate (base, bonus, etc). See the next section for an overview of valid values and  their meaning | 
**rate** | **String** | The rate to be applied | 
**calculation_frequency** | **String** | The period after which the rate is applied to the balance to calculate the amount due for the  period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is  &#x27;applied&#x27; to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations] (https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) | [optional] 
**application_frequency** | **String** | The period after which the calculated amount(s) (see calculationFrequency) are &#x27;applied&#x27; (i.e.  debited or credited) to the account. Formatted according to [ISO 8601 Durations] (https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) | [optional] 
**tiers** | [**Array&lt;BankingProductRateTier&gt;**](BankingProductRateTier.md) | Rate tiers applicable for this rate | [optional] 
**additional_value** | **String** | Generic field containing additional information relevant to the [depositRateType] (#tocSproductdepositratetypedoc) specified. Whether mandatory or not is dependent on the value of [depositRateType] (#tocSproductdepositratetypedoc) | [optional] 
**additional_info** | **String** | Display text providing more information on the rate | [optional] 
**additional_info_uri** | **String** | Link to a web page with more information on this rate | [optional] 





---

# BankingProductDetail.md

# SwaggerClient::BankingProductDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **String** | A data holder specific unique identifier for this product. This identifier must be unique to a  product but does not otherwise need to adhere to ID permanence guidelines. | 
**effective_from** | **String** | The date and time from which this product is effective (ie. is available for origination).  Used  to enable the articulation of products to the regime before they are available for customers to originate | [optional] 
**effective_to** | **String** | The date and time at which this product will be retired and will no longer be offered.  Used to  enable the managed deprecation of products | [optional] 
**last_updated** | **String** | The last date and time that the information for this product was changed (or the creation date  for the product if it has never been altered) | 
**product_category** | [**BankingProductCategory**](BankingProductCategory.md) |  | 
**name** | **String** | The display name of the product | 
**description** | **String** | A description of the product | 
**brand** | **String** | A label of the brand for the product. Able to be used for filtering. For data holders with  single brands this value is still required | 
**brand_name** | **String** | An optional display name of the brand | [optional] 
**application_uri** | **String** | A link to an application web page where this product can be applied for. | [optional] 
**is_tailored** | **BOOLEAN** | Indicates whether the product is specifically tailored to a circumstance.  In this case fees and  prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag  indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable | 
**additional_information** | [**BankingProductV2AdditionalInformation**](BankingProductV2AdditionalInformation.md) |  | [optional] 
**card_art** | [**Array&lt;BankingProductV2CardArt&gt;**](BankingProductV2CardArt.md) | An array of card art images | [optional] 
**bundles** | [**Array&lt;BankingProductBundle&gt;**](BankingProductBundle.md) | An array of bundles that this product participates in.  Each bundle is described by free form  information but also by a list of product IDs of the other products that are included in the bundle.  It is assumed that  the current product is included in the bundle also | [optional] 
**features** | [**Array&lt;BankingProductFeature&gt;**](BankingProductFeature.md) | Array of features available for the product | [optional] 
**constraints** | [**Array&lt;BankingProductConstraint&gt;**](BankingProductConstraint.md) | Constraints on the application for or operation of the product such as minimum balances or  limit thresholds | [optional] 
**eligibility** | [**Array&lt;BankingProductEligibility&gt;**](BankingProductEligibility.md) | Eligibility criteria for the product | [optional] 
**fees** | [**Array&lt;BankingProductFee&gt;**](BankingProductFee.md) | Fees applicable for the product | [optional] 
**deposit_rates** | [**Array&lt;BankingProductDepositRate&gt;**](BankingProductDepositRate.md) | Interest rates available for deposits | [optional] 
**lending_rates** | [**Array&lt;BankingProductLendingRate&gt;**](BankingProductLendingRate.md) | Interest rates charged against lending balances | [optional] 





---

# BankingProductDiscount.md

# SwaggerClient::BankingProductDiscount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description of the discount | 
**discount_type** | **String** | The type of discount. See the next section for an overview of valid values and their meaning | 
**amount** | **String** | Value of the discount. When following properties include one of amount, balanceRate,  transactionRate, accruedRate and feeRate is mandatory | [optional] 
**balance_rate** | **String** | A discount rate calculated based on a proportion of the balance. Note that the currency of the  fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate,  accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are  the same as the corresponding fee | [optional] 
**transaction_rate** | **String** | A discount rate calculated based on a proportion of a transaction. Note that the currency of the  fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate,  accruedRate and feeRate is mandatory | [optional] 
**accrued_rate** | **String** | A discount rate calculated based on a proportion of the calculated interest accrued on the  account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of  amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the  application and calculation frequency are the same as the corresponding fee | [optional] 
**fee_rate** | **String** | A discount rate calculated based on a proportion of the fee to which this discount is attached.  Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount,  balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application  and calculation frequency are the same as the corresponding fee | [optional] 
**additional_value** | **String** | Generic field containing additional information relevant to the [discountType] (#tocSproductdiscounttypedoc) specified. Whether mandatory or not is dependent on the value of [discountType] (#tocSproductdiscounttypedoc) | [optional] 
**additional_info** | **String** | Display text providing more information on the discount | [optional] 
**additional_info_uri** | **String** | Link to a web page with more information on this discount | [optional] 
**eligibility** | [**Array&lt;BankingProductDiscountEligibility&gt;**](BankingProductDiscountEligibility.md) | Eligibility constraints that apply to this discount | [optional] 





---

# BankingProductDiscountEligibility.md

# SwaggerClient::BankingProductDiscountEligibility

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_eligibility_type** | **String** | The type of the specific eligibility constraint for a discount | 
**additional_value** | **String** | Generic field containing additional information relevant to the [discountEligibilityType] (#tocSproductdiscounteligibilitydoc) specified. Whether mandatory or not is dependent on the value of  [discountEligibilityType](#tocSproductdiscounteligibilitydoc) | [optional] 
**additional_info** | **String** | Display text providing more information on this eligibility constraint | [optional] 
**additional_info_uri** | **String** | Link to a web page with more information on this eligibility constraint | [optional] 





---

# BankingProductEligibility.md

# SwaggerClient::BankingProductEligibility

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligibility_type** | **String** | The type of eligibility criteria described.  See the next section for an overview of valid  values and their meaning | 
**additional_value** | **String** | Generic field containing additional information relevant to the [eligibilityType] (#tocSproducteligibilitytypedoc) specified. Whether mandatory or not is dependent on the value of [eligibilityType] (#tocSproducteligibilitytypedoc) | [optional] 
**additional_info** | **String** | Display text providing more information on the [eligibility](#tocSproducteligibilitytypedoc)  criteria. Mandatory if the field is set to OTHER | [optional] 
**additional_info_uri** | **String** | Link to a web page with more information on this eligibility criteria | [optional] 





---

# BankingProductFeature.md

# SwaggerClient::BankingProductFeature

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_type** | **String** | The type of feature described | 
**additional_value** | **String** | Generic field containing additional information relevant to the [featureType] (#tocSproductfeaturetypedoc) specified. Whether mandatory or not is dependent on the value of the [featureType.] (#tocSproductfeaturetypedoc) | [optional] 
**additional_info** | **String** | Display text providing more information on the feature. Mandatory if the [feature type] (#tocSproductfeaturetypedoc) is set to OTHER | [optional] 
**additional_info_uri** | **String** | Link to a web page with more information on this feature | [optional] 





---

# BankingProductFee.md

# SwaggerClient::BankingProductFee

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the fee | 
**fee_type** | **String** | The type of fee | 
**amount** | **String** | The amount charged for the fee. One of amount, balanceRate, transactionRate and accruedRate is  mandatory | [optional] 
**balance_rate** | **String** | A fee rate calculated based on a proportion of the balance. One of amount, balanceRate,  transactionRate and accruedRate is mandatory | [optional] 
**transaction_rate** | **String** | A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate,  transactionRate and accruedRate is mandatory | [optional] 
**accrued_rate** | **String** | A fee rate calculated based on a proportion of the calculated interest accrued on the account.  One of amount, balanceRate, transactionRate and accruedRate is mandatory | [optional] 
**accrual_frequency** | **String** | The indicative frequency with which the fee is calculated on the account. Only applies if  balanceRate or accruedRate is also present. Formatted according to [ISO 8601 Durations] (https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) | [optional] 
**currency** | **String** | The currency the fee will be charged in. Assumes AUD if absent | [optional] 
**additional_value** | **String** | Generic field containing additional information relevant to the [feeType] (#tocSproductfeetypedoc) specified. Whether mandatory or not is dependent on the value of [feeType] (#tocSproductfeetypedoc) | [optional] 
**additional_info** | **String** | Display text providing more information on the fee | [optional] 
**additional_info_uri** | **String** | Link to a web page with more information on this fee | [optional] 
**discounts** | [**Array&lt;BankingProductDiscount&gt;**](BankingProductDiscount.md) | An optional list of discounts to this fee that may be available | [optional] 





---

# BankingProductLendingRate.md

# SwaggerClient::BankingProductLendingRate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lending_rate_type** | **String** | The type of rate (fixed, variable, etc). See the next section for an overview of valid values  and their meaning | 
**rate** | **String** | The rate to be applied | 
**comparison_rate** | **String** | A comparison rate equivalent for this rate | [optional] 
**calculation_frequency** | **String** | The period after which the rate is applied to the balance to calculate the amount due for the  period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is  &#x27;applied&#x27; to the account (see applicationFrequency). Formatted according to [ISO 8601 Durations] (https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) | [optional] 
**application_frequency** | **String** | The period after which the calculated amount(s) (see calculationFrequency) are &#x27;applied&#x27; (i.e.  debited or credited) to the account. Formatted according to [ISO 8601 Durations] (https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax) | [optional] 
**interest_payment_due** | **String** | When loan payments are due to be paid within each period. The investment benefit of earlier  payments affect the rate that can be offered | [optional] 
**tiers** | [**Array&lt;BankingProductRateTier&gt;**](BankingProductRateTier.md) | Rate tiers applicable for this rate | [optional] 
**additional_value** | **String** | Generic field containing additional information relevant to the [lendingRateType] (#tocSproductlendingratetypedoc) specified. Whether mandatory or not is dependent on the value of [lendingRateType] (#tocSproductlendingratetypedoc) | [optional] 
**additional_info** | **String** | Display text providing more information on the rate. | [optional] 
**additional_info_uri** | **String** | Link to a web page with more information on this rate | [optional] 





---

# BankingProductRateCondition.md

# SwaggerClient::BankingProductRateCondition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_info** | **String** | Display text providing more information on the condition | [optional] 
**additional_info_uri** | **String** | Link to a web page with more information on this condition | [optional] 





---

# BankingProductRateTier.md

# SwaggerClient::BankingProductRateTier

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A display name for the tier | 
**unit_of_measure** | **String** | The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a  **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number  of **MONTH**&#x27;s or **DAY**&#x27;s (in the case of term deposit tiers) | 
**minimum_value** | [**BigDecimal**](BigDecimal.md) | The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be  inclusive of this value | 
**maximum_value** | [**BigDecimal**](BigDecimal.md) | The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier  with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this  is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value.  For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months). If  absent the tier&#x27;s range has no upper bound. | [optional] 
**rate_application_method** | **String** | The method used to calculate the amount to be applied using one or more tiers. A single rate may  be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that  tier (referred to as &#x27;bands&#x27; or &#x27;steps&#x27;) | [optional] 
**applicability_conditions** | [**BankingProductRateCondition**](BankingProductRateCondition.md) |  | [optional] 
**sub_tier** | [**BankingProductRateTierSubTier**](BankingProductRateTierSubTier.md) |  | [optional] 





---

# BankingProductRateTierSubTier.md

# SwaggerClient::BankingProductRateTierSubTier

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A display name for the tier | 
**unit_of_measure** | **String** | The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a  **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number  of **MONTH**&#x27;s or **DAY**&#x27;s (in the case of term deposit tiers) | 
**minimum_value** | [**BigDecimal**](BigDecimal.md) | The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be  inclusive of this value | 
**maximum_value** | [**BigDecimal**](BigDecimal.md) | The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier  with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this  is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value.  For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months) | 
**rate_application_method** | **String** | The method used to calculate the amount to be applied using one or more tiers. A single rate may  be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that  tier (referred to as &#x27;bands&#x27; or &#x27;steps&#x27;) | [optional] 
**applicability_conditions** | [**BankingProductRateCondition**](BankingProductRateCondition.md) |  | [optional] 





---

# BankingProductRateTier_subTier.md

# IO.Swagger.Model.BankingProductRateTierSubTier
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | A display name for the tier | 
**UnitOfMeasure** | **string** | The unit of measure that applies to the tierValueMinimum and tierValueMaximum values e.g. a  **DOLLAR** amount. **PERCENT** (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number  of **MONTH**&#x27;s or **DAY**&#x27;s (in the case of term deposit tiers) | 
**MinimumValue** | [**decimal?**](BigDecimal.md) | The number of tierUnitOfMeasure units that form the lower bound of the tier. The tier should be  inclusive of this value | 
**MaximumValue** | [**decimal?**](BigDecimal.md) | The number of tierUnitOfMeasure units that form the upper bound of the tier or band. For a tier  with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as tierValueMinimum. Where this  is the same as the tierValueMinimum value of the next-higher tier the referenced tier should be exclusive of this value.  For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 – 2 months, 2 – 3 months) | 
**RateApplicationMethod** | **string** | The method used to calculate the amount to be applied using one or more tiers. A single rate may  be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that  tier (referred to as &#x27;bands&#x27; or &#x27;steps&#x27;) | [optional] 
**ApplicabilityConditions** | [**BankingProductRateCondition**](BankingProductRateCondition.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# BankingProductV2.md

# SwaggerClient::BankingProductV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **String** | A data holder specific unique identifier for this product. This identifier must be unique to a  product but does not otherwise need to adhere to ID permanence guidelines. | 
**effective_from** | **String** | The date and time from which this product is effective (ie. is available for origination).  Used  to enable the articulation of products to the regime before they are available for customers to originate | [optional] 
**effective_to** | **String** | The date and time at which this product will be retired and will no longer be offered.  Used to  enable the managed deprecation of products | [optional] 
**last_updated** | **String** | The last date and time that the information for this product was changed (or the creation date  for the product if it has never been altered) | 
**product_category** | [**BankingProductCategory**](BankingProductCategory.md) |  | 
**name** | **String** | The display name of the product | 
**description** | **String** | A description of the product | 
**brand** | **String** | A label of the brand for the product. Able to be used for filtering. For data holders with  single brands this value is still required | 
**brand_name** | **String** | An optional display name of the brand | [optional] 
**application_uri** | **String** | A link to an application web page where this product can be applied for. | [optional] 
**is_tailored** | **BOOLEAN** | Indicates whether the product is specifically tailored to a circumstance.  In this case fees and  prices are significantly negotiated depending on context. While all products are open to a degree of tailoring this flag  indicates that tailoring is expected and thus that the provision of specific fees and rates is not applicable | 
**additional_information** | [**BankingProductV2AdditionalInformation**](BankingProductV2AdditionalInformation.md) |  | [optional] 
**card_art** | [**Array&lt;BankingProductV2CardArt&gt;**](BankingProductV2CardArt.md) | An array of card art images | [optional] 





---

# BankingProductV2AdditionalInformation.md

# SwaggerClient::BankingProductV2AdditionalInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overview_uri** | **String** | General overview of the product | [optional] 
**terms_uri** | **String** | Terms and conditions for the product | [optional] 
**eligibility_uri** | **String** | Eligibility rules and criteria for the product | [optional] 
**fees_and_pricing_uri** | **String** | Description of fees, pricing, discounts, exemptions and bonuses for the product | [optional] 
**bundle_uri** | **String** | Description of a bundle that this product can be part of | [optional] 





---

# BankingProductV2CardArt.md

# SwaggerClient::BankingProductV2CardArt

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | Display label for the specific image | [optional] 
**image_uri** | **String** | Link to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater  than 512 pixels | 





---

# BankingProductV2_additionalInformation.md

# IO.Swagger.Model.BankingProductV2AdditionalInformation
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverviewUri** | **string** | General overview of the product | [optional] 
**TermsUri** | **string** | Terms and conditions for the product | [optional] 
**EligibilityUri** | **string** | Eligibility rules and criteria for the product | [optional] 
**FeesAndPricingUri** | **string** | Description of fees, pricing, discounts, exemptions and bonuses for the product | [optional] 
**BundleUri** | **string** | Description of a bundle that this product can be part of | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# BankingProductV2_cardArt.md

# IO.Swagger.Model.BankingProductV2CardArt
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | **string** | Display label for the specific image | [optional] 
**ImageUri** | **string** | Link to a PNG, JPG or GIF image with proportions defined by ISO 7810 ID-1 and width no greater  than 512 pixels | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# BeneficiaryAddress.md

# SwaggerClient::BeneficiaryAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line** | **String** | Address of the Beneficiary | [optional] 





---

# BeneficiaryBankDetail.md

# SwaggerClient::BeneficiaryBankDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficiary_bank_code** | **String** | Bank Code of the Beneficiary Account Number | [optional] 
**account_number** | **String** | Customers Account Number with the Bank.   An account number is the primary identifier for ownership of an account, whether a checking account or savings account or credit card account or investment account, or a loan account. | [optional] 
**beneficiary_branch_code** | **String** | Branch Code of the Beneficiary Account Number | [optional] 
**bank_name** | **String** | Name of the bank where the branch is associated | [optional] 
**beneficiary_name** | **String** | Beneficiary Name | [optional] 





---

# BeneficiaryBankDetails.md

# SwaggerClient::BeneficiaryBankDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | **String** | Name of the Beneficiary. | 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**bank_name** | **String** | Name of the bank. | 
**bank_code** | **String** | The bank code of the external payee account. | 
**account_number** | **String** | Account number of the beneficiary. | [optional] 





---

# BeneficiaryDetail.md

# SwaggerClient::BeneficiaryDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **String** | Customers Account Number with the Bank | [optional] 
**beneficiary_bank_code** | **String** | Bank Code of the Beneficiary Account Number | [optional] 
**beneficiary_branch_code** | **String** | Branch Code of the Beneficiary Account Number | [optional] 
**bank_name** | **String** | Name of the bank where the branch is associated | [optional] 
**beneficiary_name** | **String** | Beneficiary Name | [optional] 





---

# BinaryData.md

# SwaggerClient::BinaryData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disbursement_option** | **String** | This field indicates the options/mode in which the loan amount will be disbursed. This is a reference data field. Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description. | 
**disbursement_account_id** | **String** | The account Id of the account to which Loan amount is to be disbursed. | [optional] 
**payee_id** | **String** | Unique identifier associated with the payee.Typically, this is not displayed to the customer. | [optional] 
**bank_details** | [**BankDetails**](BankDetails.md) |  | [optional] 





---

# BtDisbursementOptions.md

# SwaggerClient::BtDisbursementOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bt_disbursement_option** | **String** | Provide the list of the options available to receive the disbursement of balance transfer. Please use /v1/utilities/referenceData/{btDisbursementOption} resource to get valid value of this field with description. | 





---

# CARDSApi.md

# SwaggerClient::CARDSApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notify_credit_charge_card_fulfillment_arrangement_authorised_transaction**](CARDSApi.md#notify_credit_charge_card_fulfillment_arrangement_authorised_transaction) | **POST** /partner/v1/creditChargeCard/transaction/authorised/notify | This API will be triggered by partner(VISA) to notify the cardholder about authorisation transaction.

# **notify_credit_charge_card_fulfillment_arrangement_authorised_transaction**
> notify_credit_charge_card_fulfillment_arrangement_authorised_transaction(bodyauthorizationuuidacceptcontent_type, opts)

This API will be triggered by partner(VISA) to notify the cardholder about authorisation transaction.

This API will be triggered by partner(VISA) to notify the cardholder about authorisation transaction.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CARDSApi.new
body = SwaggerClient::NotifyCreditChargeCardFulfillmentArrangementAuthorisedTransactionRequest.new # NotifyCreditChargeCardFulfillmentArrangementAuthorisedTransactionRequest | NotifyCreditChargeCardFulfillmentArrangementAuthorisedTransactionRequest
authorization = 'authorization_example' # String | HTTP Basic authentication by passing base64 encoded value of the client id and client secret separated by colon (:).Example: Base64(client_id:client_secret) will be passed as Basic KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_id: 'client_id_example' # String | Client ID generated during application registration.
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
  accept_language: 'accept_language_example' # String | List of acceptable human languages for response.
  x_jws_signature: 'x_jws_signature_example' # String | This field is signature generated when partner sign API payload.This signature will be used to validate that the call is coming from a valid partner. This signature is a JWT token, which will be validated with partner’s JWK stored in DB
}

begin
  #This API will be triggered by partner(VISA) to notify the cardholder about authorisation transaction.
  api_instance.notify_credit_charge_card_fulfillment_arrangement_authorised_transaction(bodyauthorizationuuidacceptcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CARDSApi->notify_credit_charge_card_fulfillment_arrangement_authorised_transaction: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NotifyCreditChargeCardFulfillmentArrangementAuthorisedTransactionRequest**](NotifyCreditChargeCardFulfillmentArrangementAuthorisedTransactionRequest.md)| NotifyCreditChargeCardFulfillmentArrangementAuthorisedTransactionRequest | 
 **authorization** | **String**| HTTP Basic authentication by passing base64 encoded value of the client id and client secret separated by colon (:).Example: Base64(client_id:client_secret) will be passed as Basic KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D; | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **content_type** | **String**| application/json | 
 **client_id** | **String**| Client ID generated during application registration. | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 
 **accept_language** | **String**| List of acceptable human languages for response. | [optional] 
 **x_jws_signature** | **String**| This field is signature generated when partner sign API payload.This signature will be used to validate that the call is coming from a valid partner. This signature is a JWT token, which will be validated with partner’s JWK stored in DB | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json







---

# CROSSPRODUCTUTILITIESApi(1).md

# SwaggerClient::CROSSPRODUCTUTILITIESApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**update_issued_device_allocation_device_pfid**](CROSSPRODUCTUTILITIESApi.md#update_issued_device_allocation_device_pfid) | **POST** /v1/issuedDeviceAdministration/device/pfid | This API is used to receive the PFID from partner and maintain across the respective card.

# **update_issued_device_allocation_device_pfid**
> UpdateIssuedDeviceAllocationDevicePfidResponse update_issued_device_allocation_device_pfid(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is used to receive the PFID from partner and maintain across the respective card.

This API is used to receive the PFID from partner and maintain across the respective card.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CROSSPRODUCTUTILITIESApi.new
body = SwaggerClient::UpdateIssuedDeviceAllocationDevicePfidRequest.new # UpdateIssuedDeviceAllocationDevicePfidRequest | UpdateIssuedDeviceAllocationDevicePfidRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to receive the PFID from partner and maintain across the respective card.
  result = api_instance.update_issued_device_allocation_device_pfid(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CROSSPRODUCTUTILITIESApi->update_issued_device_allocation_device_pfid: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateIssuedDeviceAllocationDevicePfidRequest**](UpdateIssuedDeviceAllocationDevicePfidRequest.md)| UpdateIssuedDeviceAllocationDevicePfidRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**UpdateIssuedDeviceAllocationDevicePfidResponse**](UpdateIssuedDeviceAllocationDevicePfidResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json







---

# CallDepositAccount.md

# SwaggerClient::CallDepositAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**currency_code** | **String** | The currency code of the account in ISO 4217 format | [optional] 
**available_balance** | **Float** | The amount available  to withdraw or transfer immediately | [optional] 
**current_balance** | **Float** | The current balance including any pending or in progress deposits and withdrawals | [optional] 
**interest_rate** | **Float** | The rate of interest applicable for the call deposit account | [optional] 
**opening_date** | **Date** | Call deposit account opening date in ISO 8601 date format YYYY-MM-DD | [optional] 
**base_currency_maturity_amount** | **Float** | Maturity amount on the call deposit account. | [optional] 
**last_interest_payment_amount** | **Float** | Last interest payment amount on the call deposit account. | [optional] 
**last_interest_payment_date** | **Date** | Last interest payment date in ISO 8601 date format YYYY-MM-DD | [optional] 





---

# CallDepositAccountSummary.md

# SwaggerClient::CallDepositAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**account_nickname** | **String** | The nickname of the account assigned by the customer | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format. | [optional] 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 
**account_status** | **String** | Status of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_classification** | **String** | Classification of account either as ASSET or LIABILITY. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClassification} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**current_balance** | **Float** | The current balance on the Deposit account. The available balance including any pending or in progress deposits and withdrawals | [optional] 





---

# CardDeliveryDetails.md

# SwaggerClient::CardDeliveryDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_delivery_status** | **String** | Cd delivery status.  This is a reference data field. Please use /v1/utilities/referenceData/{cardDeliveryStatus} resource to get possible values of this field with descriptions. | [optional] 
**airway_bill_number** | **String** | New Field in EPCDFIL. This field denotes the Airway Bill Number or reference number provided by the courier company for the dispatch. | [optional] 
**delivery_method** | **String** | New Field in EPCDFIL. This field denotes the mode through which the card was disptached. Valid Values :  &#x27;Courier&#x27; or &#x27;Post&#x27;  | [optional] 
**card_delivery_date** | **String** | New Field in EPCDFIL This field denotes the date of card delivery. | [optional] 
**received_by** | **String** | New Field in EPCDFIL. This field denotes the Name and Relationship of the individual who has received the card on behalf of the cardholder. If the card holder has received the card, then this field will have the value as ‘Self’. | [optional] 
**display_card_number** | **String** | Card last four Digit. | [optional] 





---

# CardDetails.md

# SwaggerClient::CardDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | The card id  in encrypted format | 
**display_card_number** | **String** | A masked card number that can be displayed to the customer. | [optional] 
**local_card_activation_indicator** | **String** | The card activation indicator for local usage. This is a reference data field. Please use /v1/apac/utilities/referenceData/{localCardActivationIndicator} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | 
**overseas_card_activation_indicator** | **String** | The card activation indicator for overseas usage. This is a reference data field. Please use /v1/apac/utilities/referenceData/{overseasCardActivationIndicator} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**perpetual_activation_flag** | **BOOLEAN** | Flag to specify whether the card is activated perpetually, till card expiration | [optional] 
**overseas_card_activation_start_date** | **Date** | Card activation start date in ISO 8601 date format YYYY-MM-DD for overseas usage. | [optional] 
**overseas_card_activation_end_date** | **Date** | Card activation end date in ISO 8601 date format YYYY-MM-DD for overseas usage. For perpetual activation, value is card expiry date | [optional] 
**current_credit_limit_amount** | **Float** | Current credit limit amount on the credit card | 
**maximum_permanent_credit_limit_amount** | **Float** | Maximum permanent credit limit amount allowed on the credit card | [optional] 
**maximum_temporary_credit_limit_amount** | **Float** | Maximum temporary credit limit amount allowed on the credit card | [optional] 
**sub_card_type** | **String** | Type of the card. Debit or Credit.This is a reference data field. Please use /v1/apac/utilities/referenceData/{subCardType} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | 
**card_holder_type** | **String** | Indicator to specify whether the card is primary or supplementary. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardHolderType} resource to get valid value of this field with description. | [optional] 
**card_issue_reason** | **String** | Specifies the reason for the card issuance. Applicable only for recently issued cards. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardIssueReason} resource to get valid value of this field with description. | [optional] 
**card_functions_allowed** | [**Array&lt;CardFunctionsAllowed&gt;**](CardFunctionsAllowed.md) |  | [optional] 





---

# CardFunctionsAllowed.md

# SwaggerClient::CardFunctionsAllowed

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_function** | **String** | Card function. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardFunction} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# CardListingResponse.md

# SwaggerClient::CardListingResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_details** | [**Array&lt;CardDetails&gt;**](CardDetails.md) |  | [optional] 





---

# CardOverseasUsageConfirmationRequest.md

# SwaggerClient::CardOverseasUsageConfirmationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | 





---

# CardServicingApi.md

# SwaggerClient::CardServicingApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_cards_activations_confirmation_post**](CardServicingApi.md#v1_cards_activations_confirmation_post) | **POST** /v1/cards/activations/confirmation | Confirm Card Activation Deactivation
[**v1_cards_atm_pin_reset_confirmation_post**](CardServicingApi.md#v1_cards_atm_pin_reset_confirmation_post) | **POST** /v1/cards/atmPin/reset/confirmation | Confirm ATM Pin Request
[**v1_cards_atm_pin_reset_put**](CardServicingApi.md#v1_cards_atm_pin_reset_put) | **PUT** /v1/cards/atmPin/reset | Reset ATM Pin
[**v1_cards_overseas_usage_confirmation_post**](CardServicingApi.md#v1_cards_overseas_usage_confirmation_post) | **POST** /v1/cards/overseasUsage/confirmation | Confirm Card Overseas Activation Deactivation

# **v1_cards_activations_confirmation_post**
> v1_cards_activations_confirmation_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)

Confirm Card Activation Deactivation

This API is triggered after initiating the Card activation/de-activation request  and completes card activation/de-activation post successful multifactor authentication.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardServicingApi.new
body = SwaggerClient::CardUsageConfirmationRequest.new # CardUsageConfirmationRequest | 
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Confirm Card Activation Deactivation
  api_instance.v1_cards_activations_confirmation_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardServicingApi->v1_cards_activations_confirmation_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CardUsageConfirmationRequest**](CardUsageConfirmationRequest.md)|  | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D; | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_atm_pin_reset_confirmation_post**
> ResetAtmPinConfirmationResponse v1_cards_atm_pin_reset_confirmation_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)

Confirm ATM Pin Request

This API is triggered after the reset ATM Pin request and completes ATM Pin reset post successful multifactor authentication.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardServicingApi.new
body = SwaggerClient::ResetAtmPinConfirmationRequest.new # ResetAtmPinConfirmationRequest | 
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Confirm ATM Pin Request
  result = api_instance.v1_cards_atm_pin_reset_confirmation_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardServicingApi->v1_cards_atm_pin_reset_confirmation_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ResetAtmPinConfirmationRequest**](ResetAtmPinConfirmationRequest.md)|  | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D; | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**ResetAtmPinConfirmationResponse**](ResetAtmPinConfirmationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_atm_pin_reset_put**
> v1_cards_atm_pin_reset_put(bodyauthorizationuuidacceptclient_idcontent_type, opts)

Reset ATM Pin

This API is used to reset the ATM Pin of the cards.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardServicingApi.new
body = SwaggerClient::ResetAtmPinRequest.new # ResetAtmPinRequest | 
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Reset ATM Pin
  api_instance.v1_cards_atm_pin_reset_put(bodyauthorizationuuidacceptclient_idcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardServicingApi->v1_cards_atm_pin_reset_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ResetAtmPinRequest**](ResetAtmPinRequest.md)|  | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_overseas_usage_confirmation_post**
> v1_cards_overseas_usage_confirmation_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)

Confirm Card Overseas Activation Deactivation

This API is triggered after initiating the Card Overseas usage activation/deactivation request and completes the overseas usage activation/deactivation post successful multifactor authentication

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardServicingApi.new
body = SwaggerClient::CardOverseasUsageConfirmationRequest.new # CardOverseasUsageConfirmationRequest | 
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Confirm Card Overseas Activation Deactivation
  api_instance.v1_cards_overseas_usage_confirmation_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardServicingApi->v1_cards_overseas_usage_confirmation_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CardOverseasUsageConfirmationRequest**](CardOverseasUsageConfirmationRequest.md)|  | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D; | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json







---

# CardStatementSummaryRequest.md

# SwaggerClient::CardStatementSummaryRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statement_summary_request** | [**Array&lt;StatementSummaryRequest&gt;**](StatementSummaryRequest.md) |  | [optional] 





---

# CardStatementSummaryResponse.md

# SwaggerClient::CardStatementSummaryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_statement_summary** | [**Array&lt;CreditCardStatementSummary&gt;**](CreditCardStatementSummary.md) |  | [optional] 





---

# CardUsageConfirmationRequest.md

# SwaggerClient::CardUsageConfirmationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | 





---

# CardUsageRequest.md

# SwaggerClient::CardUsageRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cvv** | **String** | CVV number in encrypted format | [optional] 





---

# CardsApi(1).md

# SwaggerClient::CardsApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**b_nmoapi_banking_digital_regulatory**](CardsApi.md#b_nmoapi_banking_digital_regulatory) | **GET** /v1/my/bnm/cards | Retrieve the detail of card products
[**epp_loan_booking_confirmation**](CardsApi.md#epp_loan_booking_confirmation) | **POST** /v1/creditCards/{cardId}/easyPaymentPlans/bookings/confirmation | Confirm Easy Payment Plan Booking
[**initiate_credit_charge_card_corporate_cards_closure**](CardsApi.md#initiate_credit_charge_card_corporate_cards_closure) | **POST** /partner/v1/creditChargeCard/corporateCards/closure | This API is used to close the corporate Credit Card or Ready credit Account.
[**multi_currency_account_enrollment**](CardsApi.md#multi_currency_account_enrollment) | **POST** /v2/cards/{cardId}/multiCurrencyAccounts/enrollments | This API is to enroll the Debit Card and FCY Accounts to Multi Currency Account
[**multi_currency_account_enrollment_with_currency**](CardsApi.md#multi_currency_account_enrollment_with_currency) | **POST** /v2/cards/{cardId}/multiCurrencyAccounts/enrollments/currency | This API is to generate/enroll new FCY Accounts to Multi Currency Account
[**partner_card_listing**](CardsApi.md#partner_card_listing) | **GET** /partner/v1/cards | Partner Card List
[**request_credit_charge_card_corporate_cards_suspension_and_cash_limit_allowed**](CardsApi.md#request_credit_charge_card_corporate_cards_suspension_and_cash_limit_allowed) | **POST** /partner/v1/creditChargeCard/corporateCards/suspensionAndCashLimitAllowed | This API is used to Suspend and Unsuspend corporate card.
[**request_credit_charge_card_fulfillment_arrangement_corporate_cards_damage_replacement**](CardsApi.md#request_credit_charge_card_fulfillment_arrangement_corporate_cards_damage_replacement) | **POST** /partner/v1/creditChargeCard/corporateCards/cardReplacement | This API is to do the replacement of credit card for Damage/Lost/Stolen reasons
[**request_credit_charge_card_fulfillment_arrangement_credit_plan_epp_refund**](CardsApi.md#request_credit_charge_card_fulfillment_arrangement_credit_plan_epp_refund) | **POST** /v1/creditChargeCard/creditPlan/epp/refund | This API is used for EPP Refund in Open Loop
[**retrieve_credit_charge_card_corporate_cards_cash_limit**](CardsApi.md#retrieve_credit_charge_card_corporate_cards_cash_limit) | **POST** /partner/v1/creditChargeCard/corporateCards/cashLimit/retrieve | This API is used to retrieve the corporate card cash limit
[**retrieve_credit_charge_card_corporate_cards_detail**](CardsApi.md#retrieve_credit_charge_card_corporate_cards_detail) | **POST** /partner/v1/creditChargeCard/corporateCards/details/retrieve | This API is used to retrieve the corporate card details
[**retrieve_credit_charge_card_corporate_cards_pending_and_intraday_authorization_transactions**](CardsApi.md#retrieve_credit_charge_card_corporate_cards_pending_and_intraday_authorization_transactions) | **POST** /partner/v1/creditChargeCard/corporateCards/pendingAndIntradayAuthorizationTransactions/retrieve | This API used to retrieve the pending Authorization refund and intraday and history transactions
[**retrieve_credit_charge_card_fulfillment_arrangement_credit_card_status**](CardsApi.md#retrieve_credit_charge_card_fulfillment_arrangement_credit_card_status) | **GET** /v1/creditChargeCard/cardStatus | Retrieve Credit Card Status
[**retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp**](CardsApi.md#retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp) | **GET** /v1/prelogin/creditChargeCard/creditPlans/offers/{offerId}/easyPaymentPlans | This API list the Options for Pre Login EPP offers that the customer can avail. It provides the applicable interest rate and tenors.
[**retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_bookings**](CardsApi.md#retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_bookings) | **POST** /v1/prelogin/creditChargeCard/creditPlans/offers/{offerId}/easyPaymentPlans/bookings | This API is triggered after the EPP plan is selected  and completes the EPP Booking. One of the responses to the execution of this API is the transaction reference/confirmation number.
[**retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_repayment_schedules**](CardsApi.md#retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_repayment_schedules) | **GET** /v1/prelogin/creditChargeCard/creditPlans/offers/{offerId}/easyPaymentPlans/repaymentSchedules | To allow customers to view the payment breakdown details.
[**update_credit_charge_card_corporate_cards_cash_limit**](CardsApi.md#update_credit_charge_card_corporate_cards_cash_limit) | **PUT** /partner/v1/creditChargeCard/corporateCards/cashLimit | This API is used to update the corporate card cash limit
[**update_credit_charge_card_corporate_cards_credit_limit**](CardsApi.md#update_credit_charge_card_corporate_cards_credit_limit) | **PUT** /partner/v1/creditChargeCard/corporateCards/creditLimit | This API is used to update the corportate card credit limit
[**update_credit_charge_card_fulfillment_arrangement_corporate_cards_lost_or_stolen**](CardsApi.md#update_credit_charge_card_fulfillment_arrangement_corporate_cards_lost_or_stolen) | **PUT** /partner/v1/creditChargeCard/corporateCards/lostOrStolen | This API is to report lost or stolen card and to apply for Replacement
[**update_credit_charge_card_fulfillment_arrangement_corporate_cards_spend_control**](CardsApi.md#update_credit_charge_card_fulfillment_arrangement_corporate_cards_spend_control) | **PUT** /partner/v1/creditChargeCard/corporateCards/spendControl | This API will help corporate user to update purchases for specific merchants coming in the API request
[**v1_cards_card_id_limits_and_enrollments_put**](CardsApi.md#v1_cards_card_id_limits_and_enrollments_put) | **PUT** /v1/cards/{cardId}/limitsAndEnrollments | Enroll for Transaction Limit Setup
[**v1_cards_card_id_multi_currency_accounts_delete**](CardsApi.md#v1_cards_card_id_multi_currency_accounts_delete) | **DELETE** /v1/cards/{cardId}/multiCurrencyAccounts | This API is to disenroll the Debit Card and FCY Accounts from Multi Currency Account
[**v1_cards_card_id_multi_currency_accounts_enrollments_currency_post**](CardsApi.md#v1_cards_card_id_multi_currency_accounts_enrollments_currency_post) | **POST** /v1/cards/{cardId}/multiCurrencyAccounts/enrollments/currency | This API is to generate/enroll new FCY Accounts to Multi Currency Account
[**v1_cards_card_id_multi_currency_accounts_enrollments_post**](CardsApi.md#v1_cards_card_id_multi_currency_accounts_enrollments_post) | **POST** /v1/cards/{cardId}/multiCurrencyAccounts/enrollments | This API is to enroll the Debit Card and FCY Accounts to Multi Currency Account
[**v1_cards_card_id_overseas_travel_plans_delete**](CardsApi.md#v1_cards_card_id_overseas_travel_plans_delete) | **DELETE** /v1/cards/{cardId}/overseasTravelPlans | This API enables customer to delete an existing travel plan 
[**v1_cards_card_id_overseas_travel_plans_post**](CardsApi.md#v1_cards_card_id_overseas_travel_plans_post) | **POST** /v1/cards/{cardId}/overseasTravelPlans | This API enables customer to add a new travel plan
[**v1_cards_card_id_overseas_travel_plans_put**](CardsApi.md#v1_cards_card_id_overseas_travel_plans_put) | **PUT** /v1/cards/{cardId}/overseasTravelPlans | This API enables customer to update an existing travel plan
[**v1_cards_cvv_verification_post**](CardsApi.md#v1_cards_cvv_verification_post) | **POST** /v1/cards/cvv/verification | Verify CVV for Debit or Credit Card
[**v1_cards_multi_currency_accounts_enrollment_eligibility_get**](CardsApi.md#v1_cards_multi_currency_accounts_enrollment_eligibility_get) | **GET** /v1/cards/multiCurrencyAccounts/enrollment/eligibility | This API request is to get the Debit Card, account details and list of foreign currencies that can be enrolled to Multi Currency Account
[**v1_cards_overseas_travel_plans_get**](CardsApi.md#v1_cards_overseas_travel_plans_get) | **GET** /v1/cards/overseasTravelPlans | This API enables customer to inquire current travel plan
[**v2_cards_card_id_multi_currency_accounts_delete**](CardsApi.md#v2_cards_card_id_multi_currency_accounts_delete) | **DELETE** /v2/cards/{cardId}/multiCurrencyAccounts | This API is to disenroll the Debit Card and FCY Accounts from Multi Currency Account
[**v2_cards_multi_currency_accounts_enrollment_eligibility_get**](CardsApi.md#v2_cards_multi_currency_accounts_enrollment_eligibility_get) | **GET** /v2/cards/multiCurrencyAccounts/enrollment/eligibility | This API request is to get the Debit Card, account details and list of foreign currencies that can be enrolled to Multi Currency Account

# **b_nmoapi_banking_digital_regulatory**
> ProductResponse b_nmoapi_banking_digital_regulatory(authorization, uuid, accept, client_id, content_type, opts)

Retrieve the detail of card products

This API is designed basing on Bank Negara Malaysia (BNM) Open API Product Information Specification to provide Citibank’s Malaysia Credit card product information that are currently offered in the Market.<br/>API specs for Swagger download and the API details displayed are for illustration purpose only. For actual specification please refer to the BNM website.<br/><b>Note</b> :To get the details of the API specification , please refer to the BNM link below to extract the exact specifications.<br/>BNM Link  :https://github.com/BankNegaraMY

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  card_type: 'credit_card', # String | Type of card
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Retrieve the detail of card products
  result = api_instance.b_nmoapi_banking_digital_regulatory(authorization, uuid, accept, client_id, content_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->b_nmoapi_banking_digital_regulatory: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **card_type** | **String**| Type of card | [optional] [default to credit_card]
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **epp_loan_booking_confirmation**
> EppLoanBookingConfirmationResponse epp_loan_booking_confirmation(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)

Confirm Easy Payment Plan Booking

This API is triggered after the EPP plan is selected and completes the EPP booking. On successful booking, it returns transaction reference in the response.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::EppLoanBookingConfirmationRequest.new # EppLoanBookingConfirmationRequest | 
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
card_id = 'card_id_example' # String | The card id  in encrypted format.
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Confirm Easy Payment Plan Booking
  result = api_instance.epp_loan_booking_confirmation(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->epp_loan_booking_confirmation: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EppLoanBookingConfirmationRequest**](EppLoanBookingConfirmationRequest.md)|  | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D; | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **card_id** | **String**| The card id  in encrypted format. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**EppLoanBookingConfirmationResponse**](EppLoanBookingConfirmationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **initiate_credit_charge_card_corporate_cards_closure**
> InitiateCreditChargeCardCorporateCardsClosureResponse initiate_credit_charge_card_corporate_cards_closure(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is used to close the corporate Credit Card or Ready credit Account.

This API is used to close the corporate Credit Card or Ready credit Account.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::InitiateCreditChargeCardCorporateCardsClosureRequest.new # InitiateCreditChargeCardCorporateCardsClosureRequest | InitiateCreditChargeCardCorporateCardsClosureRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  accept_language: 'accept_language_example' # String | List of acceptable human languages for response.
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to close the corporate Credit Card or Ready credit Account.
  result = api_instance.initiate_credit_charge_card_corporate_cards_closure(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->initiate_credit_charge_card_corporate_cards_closure: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InitiateCreditChargeCardCorporateCardsClosureRequest**](InitiateCreditChargeCardCorporateCardsClosureRequest.md)| InitiateCreditChargeCardCorporateCardsClosureRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **accept_language** | **String**| List of acceptable human languages for response. | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**InitiateCreditChargeCardCorporateCardsClosureResponse**](InitiateCreditChargeCardCorporateCardsClosureResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **multi_currency_account_enrollment**
> MultiCurrencyAccountEnrollmentResponse multi_currency_account_enrollment(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)

This API is to enroll the Debit Card and FCY Accounts to Multi Currency Account

This API is to enroll the Debit Card and FCY Accounts to Multi Currency Account

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::MultiCurrencyAccountEnrollmentRequest.new # MultiCurrencyAccountEnrollmentRequest | MultiCurrencyAccountEnrollmentRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
card_id = 'card_id_example' # String | The customer card identifier in encrypted format, that needs to be enrolled to multi currency accounts
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is to enroll the Debit Card and FCY Accounts to Multi Currency Account
  result = api_instance.multi_currency_account_enrollment(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->multi_currency_account_enrollment: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MultiCurrencyAccountEnrollmentRequest**](MultiCurrencyAccountEnrollmentRequest.md)| MultiCurrencyAccountEnrollmentRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **card_id** | **String**| The customer card identifier in encrypted format, that needs to be enrolled to multi currency accounts | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**MultiCurrencyAccountEnrollmentResponse**](MultiCurrencyAccountEnrollmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **multi_currency_account_enrollment_with_currency**
> MultiCurrencyAccountEnrollmentWithCurrencyResponse multi_currency_account_enrollment_with_currency(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)

This API is to generate/enroll new FCY Accounts to Multi Currency Account

This API is to create new account for a foreign currency and enroll it to Multi Currency Account (Global Wallet)

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::MultiCurrencyAccountEnrollmentWithCurrencyRequest.new # MultiCurrencyAccountEnrollmentWithCurrencyRequest | MultiCurrencyAccountEnrollmentWithCurrencyRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
card_id = 'card_id_example' # String | The customer card identifier in encrypted format, that needs to be enrolled to multi currency accounts
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is to generate/enroll new FCY Accounts to Multi Currency Account
  result = api_instance.multi_currency_account_enrollment_with_currency(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->multi_currency_account_enrollment_with_currency: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MultiCurrencyAccountEnrollmentWithCurrencyRequest**](MultiCurrencyAccountEnrollmentWithCurrencyRequest.md)| MultiCurrencyAccountEnrollmentWithCurrencyRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **card_id** | **String**| The customer card identifier in encrypted format, that needs to be enrolled to multi currency accounts | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**MultiCurrencyAccountEnrollmentWithCurrencyResponse**](MultiCurrencyAccountEnrollmentWithCurrencyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **partner_card_listing**
> PartnerCardListingResponse partner_card_listing(authorization, uuid, accept, client_id, card_function, opts)

Partner Card List

This API is used to list all the cards held by a customer with Citi partner.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | client id generated during consumer onboarding
card_function = 'card_function_example' # String | Card function. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardFunction} resource to get valid value of this field with description.
opts = { 
  linked_supplementary_card_flag: true, # BOOLEAN | Flag to identify linked supplementary information to be retrieved.
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Partner Card List
  result = api_instance.partner_card_listing(authorization, uuid, accept, client_id, card_function, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->partner_card_listing: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| client id generated during consumer onboarding | 
 **card_function** | **String**| Card function. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardFunction} resource to get valid value of this field with description. | 
 **linked_supplementary_card_flag** | **BOOLEAN**| Flag to identify linked supplementary information to be retrieved. | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**PartnerCardListingResponse**](PartnerCardListingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **request_credit_charge_card_corporate_cards_suspension_and_cash_limit_allowed**
> request_credit_charge_card_corporate_cards_suspension_and_cash_limit_allowed(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is used to Suspend and Unsuspend corporate card.

This API is used to Suspend and Unsuspend corporate card.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::RequestCreditChargeCardCorporateCardsSuspensionAndCashLimitAllowedRequest.new # RequestCreditChargeCardCorporateCardsSuspensionAndCashLimitAllowedRequest | RequestCreditChargeCardCorporateCardsSuspensionAndCashLimitAllowedRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  accept_language: 'accept_language_example' # String | List of acceptable human languages for response.
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to Suspend and Unsuspend corporate card.
  api_instance.request_credit_charge_card_corporate_cards_suspension_and_cash_limit_allowed(bodyauthorizationuuidacceptclient_idcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->request_credit_charge_card_corporate_cards_suspension_and_cash_limit_allowed: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestCreditChargeCardCorporateCardsSuspensionAndCashLimitAllowedRequest**](RequestCreditChargeCardCorporateCardsSuspensionAndCashLimitAllowedRequest.md)| RequestCreditChargeCardCorporateCardsSuspensionAndCashLimitAllowedRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **accept_language** | **String**| List of acceptable human languages for response. | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **request_credit_charge_card_fulfillment_arrangement_corporate_cards_damage_replacement**
> RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementResponse request_credit_charge_card_fulfillment_arrangement_corporate_cards_damage_replacement(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is to do the replacement of credit card for Damage/Lost/Stolen reasons

This API is to do the replacement of credit card for Damage/Lost/Stolen reasons

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementRequest.new # RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementRequest | RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is to do the replacement of credit card for Damage/Lost/Stolen reasons
  result = api_instance.request_credit_charge_card_fulfillment_arrangement_corporate_cards_damage_replacement(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->request_credit_charge_card_fulfillment_arrangement_corporate_cards_damage_replacement: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementRequest**](RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementRequest.md)| RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementResponse**](RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **request_credit_charge_card_fulfillment_arrangement_credit_plan_epp_refund**
> request_credit_charge_card_fulfillment_arrangement_credit_plan_epp_refund(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is used for EPP Refund in Open Loop

This API is used for EPP Refund in Open Loop

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::RequestCreditChargeCardFulfillmentArrangementCreditPlanEppRefundRequest.new # RequestCreditChargeCardFulfillmentArrangementCreditPlanEppRefundRequest | RequestCreditChargeCardFulfillmentArrangementCreditPlanEppRefundRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used for EPP Refund in Open Loop
  api_instance.request_credit_charge_card_fulfillment_arrangement_credit_plan_epp_refund(bodyauthorizationuuidacceptclient_idcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->request_credit_charge_card_fulfillment_arrangement_credit_plan_epp_refund: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestCreditChargeCardFulfillmentArrangementCreditPlanEppRefundRequest**](RequestCreditChargeCardFulfillmentArrangementCreditPlanEppRefundRequest.md)| RequestCreditChargeCardFulfillmentArrangementCreditPlanEppRefundRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **retrieve_credit_charge_card_corporate_cards_cash_limit**
> RetrieveCreditChargeCardCorporateCardsCashLimitResponse retrieve_credit_charge_card_corporate_cards_cash_limit(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is used to retrieve the corporate card cash limit

This API is used to retrieve the corporate card cash limit

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::RetrieveCreditChargeCardCorporateCardsCashLimitRequest.new # RetrieveCreditChargeCardCorporateCardsCashLimitRequest | RetrieveCreditChargeCardCorporateCardsCashLimitRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  accept_language: 'accept_language_example' # String | List of acceptable human languages for response.
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to retrieve the corporate card cash limit
  result = api_instance.retrieve_credit_charge_card_corporate_cards_cash_limit(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->retrieve_credit_charge_card_corporate_cards_cash_limit: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RetrieveCreditChargeCardCorporateCardsCashLimitRequest**](RetrieveCreditChargeCardCorporateCardsCashLimitRequest.md)| RetrieveCreditChargeCardCorporateCardsCashLimitRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **accept_language** | **String**| List of acceptable human languages for response. | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**RetrieveCreditChargeCardCorporateCardsCashLimitResponse**](RetrieveCreditChargeCardCorporateCardsCashLimitResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **retrieve_credit_charge_card_corporate_cards_detail**
> RetrieveCreditChargeCardCorporateCardsDetailResponse retrieve_credit_charge_card_corporate_cards_detail(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is used to retrieve the corporate card details

This API is used to retrieve the corporate card details

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::RetrieveCreditChargeCardCorporateCardsDetailRequest.new # RetrieveCreditChargeCardCorporateCardsDetailRequest | RetrieveCreditChargeCardCorporateCardsDetailRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  accept_language: 'accept_language_example' # String | List of acceptable human languages for response.
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to retrieve the corporate card details
  result = api_instance.retrieve_credit_charge_card_corporate_cards_detail(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->retrieve_credit_charge_card_corporate_cards_detail: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RetrieveCreditChargeCardCorporateCardsDetailRequest**](RetrieveCreditChargeCardCorporateCardsDetailRequest.md)| RetrieveCreditChargeCardCorporateCardsDetailRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **accept_language** | **String**| List of acceptable human languages for response. | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**RetrieveCreditChargeCardCorporateCardsDetailResponse**](RetrieveCreditChargeCardCorporateCardsDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **retrieve_credit_charge_card_corporate_cards_pending_and_intraday_authorization_transactions**
> RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsResponse retrieve_credit_charge_card_corporate_cards_pending_and_intraday_authorization_transactions(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API used to retrieve the pending Authorization refund and intraday and history transactions

This API used to retrieve the pending Authorization refund and intraday and history transactions

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsRequest.new # RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsRequest | RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  accept_language: 'accept_language_example' # String | List of acceptable human languages for response.
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API used to retrieve the pending Authorization refund and intraday and history transactions
  result = api_instance.retrieve_credit_charge_card_corporate_cards_pending_and_intraday_authorization_transactions(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->retrieve_credit_charge_card_corporate_cards_pending_and_intraday_authorization_transactions: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsRequest**](RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsRequest.md)| RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **accept_language** | **String**| List of acceptable human languages for response. | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsResponse**](RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **retrieve_credit_charge_card_fulfillment_arrangement_credit_card_status**
> RetrieveCreditChargeCardFulfillmentArrangementCreditCardStatusResponse retrieve_credit_charge_card_fulfillment_arrangement_credit_card_status(authorization, uuid, accept, client_id, card_id, transaction_reference_id, opts)

Retrieve Credit Card Status

This API is used to return the credit card status.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
card_id = 'card_id_example' # String | The customer Card identifier in encrypted format.
transaction_reference_id = 'transaction_reference_id_example' # String | This refers to Unique ID assigned by the message initiator that uniquely identifies a cardholder transaction.
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Retrieve Credit Card Status
  result = api_instance.retrieve_credit_charge_card_fulfillment_arrangement_credit_card_status(authorization, uuid, accept, client_id, card_id, transaction_reference_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->retrieve_credit_charge_card_fulfillment_arrangement_credit_card_status: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **card_id** | **String**| The customer Card identifier in encrypted format. | 
 **transaction_reference_id** | **String**| This refers to Unique ID assigned by the message initiator that uniquely identifies a cardholder transaction. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**RetrieveCreditChargeCardFulfillmentArrangementCreditCardStatusResponse**](RetrieveCreditChargeCardFulfillmentArrangementCreditCardStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp**
> RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppResponse retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp(authorization, uuid, accept, client_id, offer_id, opts)

This API list the Options for Pre Login EPP offers that the customer can avail. It provides the applicable interest rate and tenors.

This API list the Options for Pre Login EPP offers that the customer can avail. It provides the applicable interest rate and tenors.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
offer_id = 'offer_id_example' # String | This Refers to the unique id for the Pre login offer.
opts = { 
  client_details: 'client_details_example', # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
  product_id: 'product_id_example', # String | Product ID.This is a reference data field. Please use /v1/utilities/referenceData/{productId} resource to get valid value of this field with description.
  loan_amount: SwaggerClient::BigDecimal.new # BigDecimal | Loan amount for easy payment plan booking.
}

begin
  #This API list the Options for Pre Login EPP offers that the customer can avail. It provides the applicable interest rate and tenors.
  result = api_instance.retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp(authorization, uuid, accept, client_id, offer_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **offer_id** | **String**| This Refers to the unique id for the Pre login offer. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 
 **product_id** | **String**| Product ID.This is a reference data field. Please use /v1/utilities/referenceData/{productId} resource to get valid value of this field with description. | [optional] 
 **loan_amount** | **BigDecimal**| Loan amount for easy payment plan booking. | [optional] 

### Return type

[**RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppResponse**](RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_bookings**
> RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsResponse retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_bookings(bodyauthorizationuuidacceptclient_idcontent_typeoffer_id, opts)

This API is triggered after the EPP plan is selected  and completes the EPP Booking. One of the responses to the execution of this API is the transaction reference/confirmation number.

This API is triggered after the EPP Plan is selected and completes the EPP Booking. One of the responses to the execution of this API is the transaction reference/confirmation number.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsRequest.new # RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsRequest | RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
offer_id = 'offer_id_example' # String | This Refers to the unique id for the Pre login offer.
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is triggered after the EPP plan is selected  and completes the EPP Booking. One of the responses to the execution of this API is the transaction reference/confirmation number.
  result = api_instance.retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_bookings(bodyauthorizationuuidacceptclient_idcontent_typeoffer_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_bookings: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsRequest**](RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsRequest.md)| RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **offer_id** | **String**| This Refers to the unique id for the Pre login offer. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsResponse**](RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_repayment_schedules**
> RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppRepaymentSchedulesResponse retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_repayment_schedules(authorization, uuid, accept, client_id, offer_id, loan_amount, tenor, opts)

To allow customers to view the payment breakdown details.

This API allows the customer to view the payment breakdown details for the selected time period for prelogin offer

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
offer_id = 'offer_id_example' # String | This Refers to the unique id for the Pre login offer.
loan_amount = SwaggerClient::BigDecimal.new # BigDecimal | Loan amount for easy payment plan booking.
tenor = SwaggerClient::BigDecimal.new # BigDecimal | Tenure of loan in months
opts = { 
  client_details: 'client_details_example', # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
  next_start_index: 'next_start_index_example', # String | In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data.
  binary_data_flag: true # BOOLEAN | This refer to the flag in case of binary file is require.
}

begin
  #To allow customers to view the payment breakdown details.
  result = api_instance.retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_repayment_schedules(authorization, uuid, accept, client_id, offer_id, loan_amount, tenor, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->retrieve_credit_charge_card_fulfillment_arrangement_credit_plan_offers_epp_repayment_schedules: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **offer_id** | **String**| This Refers to the unique id for the Pre login offer. | 
 **loan_amount** | **BigDecimal**| Loan amount for easy payment plan booking. | 
 **tenor** | **BigDecimal**| Tenure of loan in months | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 
 **next_start_index** | **String**| In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data. | [optional] 
 **binary_data_flag** | **BOOLEAN**| This refer to the flag in case of binary file is require. | [optional] 

### Return type

[**RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppRepaymentSchedulesResponse**](RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppRepaymentSchedulesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **update_credit_charge_card_corporate_cards_cash_limit**
> update_credit_charge_card_corporate_cards_cash_limit(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is used to update the corporate card cash limit

This API is used to update the corporate card cash limit

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::UpdateCreditChargeCardCorporateCardsCashLimitRequest.new # UpdateCreditChargeCardCorporateCardsCashLimitRequest | UpdateCreditChargeCardCorporateCardsCashLimitRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  accept_language: 'accept_language_example' # String | List of acceptable human languages for response.
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to update the corporate card cash limit
  api_instance.update_credit_charge_card_corporate_cards_cash_limit(bodyauthorizationuuidacceptclient_idcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->update_credit_charge_card_corporate_cards_cash_limit: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCreditChargeCardCorporateCardsCashLimitRequest**](UpdateCreditChargeCardCorporateCardsCashLimitRequest.md)| UpdateCreditChargeCardCorporateCardsCashLimitRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **accept_language** | **String**| List of acceptable human languages for response. | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_credit_charge_card_corporate_cards_credit_limit**
> UpdateCreditChargeCardCorporateCardsCreditLimitResponse update_credit_charge_card_corporate_cards_credit_limit(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is used to update the corportate card credit limit

This API is used to update the corportate card credit limit

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::UpdateCreditChargeCardCorporateCardsCreditLimitRequest.new # UpdateCreditChargeCardCorporateCardsCreditLimitRequest | UpdateCreditChargeCardCorporateCardsCreditLimitRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  accept_language: 'accept_language_example' # String | List of acceptable human languages for response.
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to update the corportate card credit limit
  result = api_instance.update_credit_charge_card_corporate_cards_credit_limit(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->update_credit_charge_card_corporate_cards_credit_limit: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCreditChargeCardCorporateCardsCreditLimitRequest**](UpdateCreditChargeCardCorporateCardsCreditLimitRequest.md)| UpdateCreditChargeCardCorporateCardsCreditLimitRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **accept_language** | **String**| List of acceptable human languages for response. | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**UpdateCreditChargeCardCorporateCardsCreditLimitResponse**](UpdateCreditChargeCardCorporateCardsCreditLimitResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_credit_charge_card_fulfillment_arrangement_corporate_cards_lost_or_stolen**
> UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenResponse update_credit_charge_card_fulfillment_arrangement_corporate_cards_lost_or_stolen(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is to report lost or stolen card and to apply for Replacement

This API is to report lost or stolen card and to apply for Replacement

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenRequest.new # UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenRequest | UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is to report lost or stolen card and to apply for Replacement
  result = api_instance.update_credit_charge_card_fulfillment_arrangement_corporate_cards_lost_or_stolen(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->update_credit_charge_card_fulfillment_arrangement_corporate_cards_lost_or_stolen: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenRequest**](UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenRequest.md)| UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenResponse**](UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_credit_charge_card_fulfillment_arrangement_corporate_cards_spend_control**
> update_credit_charge_card_fulfillment_arrangement_corporate_cards_spend_control(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API will help corporate user to update purchases for specific merchants coming in the API request

This API will help corporate user to update purchases for specific merchants coming in the API request

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::UpdateCreditChargeCardFulfillmentArrangementCorporateCardsSpendControlRequest.new # UpdateCreditChargeCardFulfillmentArrangementCorporateCardsSpendControlRequest | UpdateCreditChargeCardFulfillmentArrangementCorporateCardsSpendControlRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API will help corporate user to update purchases for specific merchants coming in the API request
  api_instance.update_credit_charge_card_fulfillment_arrangement_corporate_cards_spend_control(bodyauthorizationuuidacceptclient_idcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->update_credit_charge_card_fulfillment_arrangement_corporate_cards_spend_control: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCreditChargeCardFulfillmentArrangementCorporateCardsSpendControlRequest**](UpdateCreditChargeCardFulfillmentArrangementCorporateCardsSpendControlRequest.md)| UpdateCreditChargeCardFulfillmentArrangementCorporateCardsSpendControlRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_card_id_limits_and_enrollments_put**
> v1_cards_card_id_limits_and_enrollments_put(bodyuuidacceptclient_idcontent_typeauthorizationcard_id, opts)

Enroll for Transaction Limit Setup

This API is used to update the limits (daily and transaction level) and the enrollments applicable for the credit/debit card of a customer.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::CardsLimitsAndEnrollmentsUpdateRequest.new # CardsLimitsAndEnrollmentsUpdateRequest | CardsLimitsAndEnrollmentsUpdateRequest
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
card_id = 'card_id_example' # String | Card Id in encrypted format
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Enroll for Transaction Limit Setup
  api_instance.v1_cards_card_id_limits_and_enrollments_put(bodyuuidacceptclient_idcontent_typeauthorizationcard_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v1_cards_card_id_limits_and_enrollments_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CardsLimitsAndEnrollmentsUpdateRequest**](CardsLimitsAndEnrollmentsUpdateRequest.md)| CardsLimitsAndEnrollmentsUpdateRequest | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **card_id** | **String**| Card Id in encrypted format | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_card_id_multi_currency_accounts_delete**
> v1_cards_card_id_multi_currency_accounts_delete(authorization, uuid, accept, client_id, card_id, opts)

This API is to disenroll the Debit Card and FCY Accounts from Multi Currency Account

This API is to disenroll the Debit Card and FCY Accounts from Multi Currency Account

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
card_id = 'card_id_example' # String | The customer card identifier in encrypted format
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is to disenroll the Debit Card and FCY Accounts from Multi Currency Account
  api_instance.v1_cards_card_id_multi_currency_accounts_delete(authorization, uuid, accept, client_id, card_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v1_cards_card_id_multi_currency_accounts_delete: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **card_id** | **String**| The customer card identifier in encrypted format | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v1_cards_card_id_multi_currency_accounts_enrollments_currency_post**
> MultiCurrencyAccountEnrollmentWithCurrencyResponse v1_cards_card_id_multi_currency_accounts_enrollments_currency_post(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)

This API is to generate/enroll new FCY Accounts to Multi Currency Account

This API is to create new account for a foreign currency and enroll it to Multi Currency Account (Global Wallet)

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::MultiCurrencyAccountEnrollmentWithCurrencyRequest.new # MultiCurrencyAccountEnrollmentWithCurrencyRequest | MultiCurrencyAccountEnrollmentWithCurrencyRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
card_id = 'card_id_example' # String | The customer card identifier in encrypted format, that needs to be enrolled to multi currency accounts
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is to generate/enroll new FCY Accounts to Multi Currency Account
  result = api_instance.v1_cards_card_id_multi_currency_accounts_enrollments_currency_post(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v1_cards_card_id_multi_currency_accounts_enrollments_currency_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MultiCurrencyAccountEnrollmentWithCurrencyRequest**](MultiCurrencyAccountEnrollmentWithCurrencyRequest.md)| MultiCurrencyAccountEnrollmentWithCurrencyRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **card_id** | **String**| The customer card identifier in encrypted format, that needs to be enrolled to multi currency accounts | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**MultiCurrencyAccountEnrollmentWithCurrencyResponse**](MultiCurrencyAccountEnrollmentWithCurrencyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_card_id_multi_currency_accounts_enrollments_post**
> MultiCurrencyAccountEnrollmentResponse v1_cards_card_id_multi_currency_accounts_enrollments_post(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)

This API is to enroll the Debit Card and FCY Accounts to Multi Currency Account

This API is to enroll the Debit Card and FCY Accounts to Multi Currency Account

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::MultiCurrencyAccountEnrollmentRequest.new # MultiCurrencyAccountEnrollmentRequest | MultiCurrencyAccountEnrollmentRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
card_id = 'card_id_example' # String | The customer card identifier in encrypted format, that needs to be enrolled to multi currency accounts
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is to enroll the Debit Card and FCY Accounts to Multi Currency Account
  result = api_instance.v1_cards_card_id_multi_currency_accounts_enrollments_post(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v1_cards_card_id_multi_currency_accounts_enrollments_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MultiCurrencyAccountEnrollmentRequest**](MultiCurrencyAccountEnrollmentRequest.md)| MultiCurrencyAccountEnrollmentRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **card_id** | **String**| The customer card identifier in encrypted format, that needs to be enrolled to multi currency accounts | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**MultiCurrencyAccountEnrollmentResponse**](MultiCurrencyAccountEnrollmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_card_id_overseas_travel_plans_delete**
> v1_cards_card_id_overseas_travel_plans_delete(authorization, uuid, accept, client_id, content_type, card_id, opts)

This API enables customer to delete an existing travel plan 

This API enables customer to delete an existing travel plan 

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
card_id = 'card_id_example' # String | The card id  in encrypted format
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API enables customer to delete an existing travel plan 
  api_instance.v1_cards_card_id_overseas_travel_plans_delete(authorization, uuid, accept, client_id, content_type, card_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v1_cards_card_id_overseas_travel_plans_delete: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **card_id** | **String**| The card id  in encrypted format | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v1_cards_card_id_overseas_travel_plans_post**
> v1_cards_card_id_overseas_travel_plans_post(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)

This API enables customer to add a new travel plan

This API enables customer to add a new travel plan

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::OverseasTravelPlanAddRequest.new # OverseasTravelPlanAddRequest | OverseasTravelPlanAddRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
card_id = 'card_id_example' # String | The card id  in encrypted format
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API enables customer to add a new travel plan
  api_instance.v1_cards_card_id_overseas_travel_plans_post(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v1_cards_card_id_overseas_travel_plans_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OverseasTravelPlanAddRequest**](OverseasTravelPlanAddRequest.md)| OverseasTravelPlanAddRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **card_id** | **String**| The card id  in encrypted format | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_card_id_overseas_travel_plans_put**
> v1_cards_card_id_overseas_travel_plans_put(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)

This API enables customer to update an existing travel plan

This API enables customer to update an existing travel plan

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::OverseasTravelPlanUpdateRequest.new # OverseasTravelPlanUpdateRequest | OverseasTravelPlanUpdateRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
card_id = 'card_id_example' # String | The card id  in encrypted format
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API enables customer to update an existing travel plan
  api_instance.v1_cards_card_id_overseas_travel_plans_put(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v1_cards_card_id_overseas_travel_plans_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OverseasTravelPlanUpdateRequest**](OverseasTravelPlanUpdateRequest.md)| OverseasTravelPlanUpdateRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **card_id** | **String**| The card id  in encrypted format | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_cvv_verification_post**
> v1_cards_cvv_verification_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)

Verify CVV for Debit or Credit Card

This API is used to verify the CVV of a debit or a credit card.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
body = SwaggerClient::CvvVerificationRequest.new # CvvVerificationRequest | CvvVerificationRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Verify CVV for Debit or Credit Card
  api_instance.v1_cards_cvv_verification_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v1_cards_cvv_verification_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CvvVerificationRequest**](CvvVerificationRequest.md)| CvvVerificationRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_multi_currency_accounts_enrollment_eligibility_get**
> MultiCurrencyAccountEligibilityResponse v1_cards_multi_currency_accounts_enrollment_eligibility_get(authorization, uuid, accept, client_id, opts)

This API request is to get the Debit Card, account details and list of foreign currencies that can be enrolled to Multi Currency Account

To get the needed account and currency details for Multi Currency Account

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API request is to get the Debit Card, account details and list of foreign currencies that can be enrolled to Multi Currency Account
  result = api_instance.v1_cards_multi_currency_accounts_enrollment_eligibility_get(authorization, uuid, accept, client_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v1_cards_multi_currency_accounts_enrollment_eligibility_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**MultiCurrencyAccountEligibilityResponse**](MultiCurrencyAccountEligibilityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v1_cards_overseas_travel_plans_get**
> OverseasTravelPlanInquiryResponse v1_cards_overseas_travel_plans_get(authorization, uuid, accept, client_id, opts)

This API enables customer to inquire current travel plan

This API enables customer to inquire current travel plan

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
opts = { 
  client_details: 'client_details_example', # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
  card_id: 'card_id_example' # String | The card id  in encrypted format
}

begin
  #This API enables customer to inquire current travel plan
  result = api_instance.v1_cards_overseas_travel_plans_get(authorization, uuid, accept, client_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v1_cards_overseas_travel_plans_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 
 **card_id** | **String**| The card id  in encrypted format | [optional] 

### Return type

[**OverseasTravelPlanInquiryResponse**](OverseasTravelPlanInquiryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v2_cards_card_id_multi_currency_accounts_delete**
> v2_cards_card_id_multi_currency_accounts_delete(authorization, uuid, accept, client_id, card_id, opts)

This API is to disenroll the Debit Card and FCY Accounts from Multi Currency Account

This API is to disenroll the Debit Card and FCY Accounts from Multi Currency Account

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
card_id = 'card_id_example' # String | The customer card identifier in encrypted format
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is to disenroll the Debit Card and FCY Accounts from Multi Currency Account
  api_instance.v2_cards_card_id_multi_currency_accounts_delete(authorization, uuid, accept, client_id, card_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v2_cards_card_id_multi_currency_accounts_delete: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **card_id** | **String**| The customer card identifier in encrypted format | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v2_cards_multi_currency_accounts_enrollment_eligibility_get**
> MultiCurrencyAccountEligibilityResponse v2_cards_multi_currency_accounts_enrollment_eligibility_get(authorization, uuid, accept, client_id, opts)

This API request is to get the Debit Card, account details and list of foreign currencies that can be enrolled to Multi Currency Account

To get the needed account and currency details for Multi Currency Account

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API request is to get the Debit Card, account details and list of foreign currencies that can be enrolled to Multi Currency Account
  result = api_instance.v2_cards_multi_currency_accounts_enrollment_eligibility_get(authorization, uuid, accept, client_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CardsApi->v2_cards_multi_currency_accounts_enrollment_eligibility_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**MultiCurrencyAccountEligibilityResponse**](MultiCurrencyAccountEligibilityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json







---

# CardsLimitsAndEnrollmentsUpdateRequest.md

# SwaggerClient::CardsLimitsAndEnrollmentsUpdateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_details** | [**CreditCardDetails**](CreditCardDetails.md) |  | [optional] 
**debit_card_details** | [**DebitCardDetails**](DebitCardDetails.md) |  | [optional] 





---

# ChangeAtmPinRequest.md

# SwaggerClient::ChangeAtmPinRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | 
**card_id** | **String** | Hashed card number of the customer. | 
**new_pin** | **String** | New PIN in encrypted format | 





---

# CheckingAccount.md

# SwaggerClient::CheckingAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**current_balance** | **Float** | The current balance including any pending or in progress deposits and withdrawals | [optional] 
**available_balance** | **Float** | The amount available  to withdraw or transfer immediately | [optional] 
**overdraft_limit** | **Float** | This allows a customer to overdraw their account up to a specific amount | [optional] 
**available_overdraft_limit** | **Float** | The amount available under over draft Limit amount | [optional] 
**currency_code** | **String** | The currency code of the account in ISO 4217 format | [optional] 
**last_statement_date** | **Date** | The date of the last statement in ISO 8601 date format YYYY-MM-DD | [optional] 
**hold_amount** | **Float** | The amount of funds that were previously available but are now blocked. It represents funds authorized for withdrawal but not yet withdrawn. The hold amount is included in the ledger/book balance but not in the available balance. It is included in interest | [optional] 
**float_amount** | **Float** | The total amount of funds that have not yet been cleared through the collection process for cheque and other instruments deposited to a checking account. These funds are unavailable for withdrawal until they are paid by the drawee bank. | [optional] 
**total_interest_amount** | **Float** | Total interest amount on checking account. | [optional] 
**opening_date** | **Date** | Checking account opening date in ISO 8601 date format YYYY-MM-DD | [optional] 





---

# CheckingAccountSummary.md

# SwaggerClient::CheckingAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**account_nickname** | **String** | The nickname of the account assigned by the customer | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format. | [optional] 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 
**account_status** | **String** | Status of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_classification** | **String** | Classification of account either as ASSET or LIABILITY. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClassification} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**current_balance** | **Float** | The current balance including any pending or in progress deposits and withdrawals | [optional] 
**available_balance** | **Float** | The available balance of the saving account. It is the amount available  to withdraw or transfer immediately | [optional] 





---

# CompanionCardApplicationRequest.md

# SwaggerClient::CompanionCardApplicationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow ID | [optional] 





---

# CompanionCardApplicationResponse.md

# SwaggerClient::CompanionCardApplicationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_reference_id** | **String** | Unique reference Id associated with the new companion card request transaction | [optional] 





---

# CompositeTransactionDetailsRequest.md

# SwaggerClient::CompositeTransactionDetailsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_details_request** | [**Array&lt;TransactionDetailsRequest&gt;**](TransactionDetailsRequest.md) |  | [optional] 





---

# CompositeTransactionDetailsResponse.md

# SwaggerClient::CompositeTransactionDetailsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_details** | [**Array&lt;TransactionDetails&gt;**](TransactionDetails.md) | Composite transaction details | [optional] 





---

# ConsentDetails.md

# SwaggerClient::ConsentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_type** | **String** | Applicant&#x27;s consent types. This is a reference data field. Please use /v1/apac/utilities/referenceData/{consentType} resource to get valid value of this field with description. | 
**consent_given_flag** | **BOOLEAN** | Consent flag. Valid values: true and false | 





---

# ConsentsDetailsInquiryResponse.md

# SwaggerClient::ConsentsDetailsInquiryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_consent_details** | [**Array&lt;AccountConsentDetails&gt;**](AccountConsentDetails.md) |  | [optional] 





---

# ConsentsDetailsUpdateRequest.md

# SwaggerClient::ConsentsDetailsUpdateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **String** | AccountId | 
**account_consent_details** | [**Array&lt;AccountConsentDetails&gt;**](AccountConsentDetails.md) |  | [optional] 





---

# ContactConsent.md

# SwaggerClient::ContactConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok_to_call** | **BOOLEAN** | Applicant&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 
**ok_to_mail** | **BOOLEAN** | Applicant&#x27;s consent for receiving mails. Valid values: true and false | [optional] 
**ok_to_email** | **BOOLEAN** | Applicant&#x27;s consent for receiving email. Valid values: true and false | [optional] 
**ok_to_sms** | **BOOLEAN** | Applicant&#x27;s consent for receiving sms. Valid values: true and false | [optional] 





---

# ContactPreference.md

# SwaggerClient::ContactPreference

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**send_sms_advice_fag** | **BOOLEAN** | Prospect is opting to receive advices via SMS. Valid values: true and false | [optional] 
**preferred_mailing_address** | **String** | Preferred Mailing Address by prospect. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid values of this field with descriptions. You can use the field name as preferredMailingAddress referenceCode parameter to retrieve the values. | [optional] 





---

# CorporateOfficerDetails.md

# SwaggerClient::CorporateOfficerDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **String** | emailAddress of the officer | 
**corporate_officer_id** | **String** | Customer Number of the Officer | 
**corporate_officer_type** | **String** | corporateofficerType. This is a reference data field. Please use /v1/utilities/referenceData/{corporateOfficerType} resource to get possible values of this field with descriptions | 





---

# CounterOffer.md

# SwaggerClient::CounterOffer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_specific_recommendations** | [**Array&lt;CreditSpecificRecommendations&gt;**](CreditSpecificRecommendations.md) |  | [optional] 
**loan_specific_recommendations** | [**Array&lt;LoanSpecificRecommendations&gt;**](LoanSpecificRecommendations.md) |  | [optional] 
**offer_product_code** | **String** | A unique code that identifies the offered product to applicant | [optional] 
**offer_product_organisation** | **String** | offered card issuing organization name | [optional] 
**offer_source_code** | **String** | A source code to identify the product | [optional] 
**required_documents** | [**Array&lt;RequiredDocuments&gt;**](RequiredDocuments.md) |  | [optional] 





---

# CountryCodes.md

# SwaggerClient::CountryCodes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **String** | Customers travelling country code in ISO 3166 alpha-2 format | 





---

# CountrySpecificAddress.md

# SwaggerClient::CountrySpecificAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street_name** | **String** | Applicant&#x27;s street Name | 
**street_type** | **String** | Applicant&#x27;s street Type.This is a reference data field. Please use /utilities/referenceData/{streetType} resource to get valid values of this field with descriptions. | 
**street_number** | **String** | Applicant&#x27;s street Number | 
**unit_number** | **String** | Applicant&#x27;s unit Number | [optional] 





---

# CountrySpecificGroup.md

# SwaggerClient::CountrySpecificGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bumiputra_indicator** | **BOOLEAN** | Bumiputra indicator (whether the person is from Malay ethnic group/son of soil). Valid values: true and false | [optional] 
**ethnic_group** | **String** | Ethnic group. | [optional] 
**disability_indicator** | **BOOLEAN** | Applicable for some countries. The instruments issued to applicants are provided with special needs like brailed characters on statements. Valid values: true and false | [optional] 
**union_pay_card_number** | **String** | Country: CN Specific to get the UnionPayCardNumber to link the product | [optional] 
**tax_file_number** | **String** | Country: AU Specific TaxFileNumber | [optional] 





---

# CreditCardAccount.md

# SwaggerClient::CreditCardAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**currency_code** | **String** | The currency code of the account in ISO 4217 format | [optional] 
**outstanding_balance** | **Float** | The amount of money owed. | [optional] 
**last_statement_balance** | **Float** | The balance on last statement date | [optional] 
**last_statement_date** | **Date** | The date of the last statement in ISO 8601 date format YYYY-MM-DD | [optional] 
**credit_used** | **Float** | The part of the credit limit already used | [optional] 
**credit_limit** | **Float** | The maximum amount of credit that extend to a customer | [optional] 
**available_credit** | **Float** | The available credit | [optional] 
**cash_advance_limit** | **Float** | Some percentage of credit limit to withdraw cash | [optional] 
**cash_advance_available_amount** | **Float** | Cash advance amount available. This will be same as the cash limit if there is no cash advance done. Otherwise, this will be the amount from the cashLimit minus the cash advance amount already used | [optional] 
**last_payment_amount** | **Float** | The amount of the last payment made | [optional] 
**last_payment_date** | **Date** | The date of the last payment in ISO 8601 date format YYYY-MM-DD | [optional] 
**minimum_due_amount** | **Float** | Minimum due amount for a payment cycle | [optional] 
**payment_due_date** | **Date** | The date of the next payment/payment due date in ISO 8601 date format YYYY-MM-DD | [optional] 
**available_point_balance** | [**BigDecimal**](BigDecimal.md) | Available reward points on the credit card | [optional] 





---

# CreditCardAccountBalanceSummary.md

# SwaggerClient::CreditCardAccountBalanceSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_disputed_transaction_amount** | **Float** | This is the total disputed transaction amount. | [optional] 
**current_outstanding_amount** | **Float** | This includes the current intra-day transactions which yet to be posted on card. | 
**current_accrued_interest** | **Float** | Interest which has been accrued till last accrual date. | 
**payment_due_amount** | **Float** | Total amount customer needs to pay in order to clear the balance. | 
**available_point_balance** | **Float** | Available reward points on the credit card | [optional] 
**partial_response_information** | [**Array&lt;PartialResponseInformation&gt;**](PartialResponseInformation.md) | Partial success response | [optional] 





---

# CreditCardAccountSummary.md

# SwaggerClient::CreditCardAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**account_nickname** | **String** | The nickname of the account assigned by the customer | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format. | [optional] 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 
**account_classification** | **String** | Classification of account either as ASSET or LIABILITY. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClassification} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_status** | **String** | Status of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**outstanding_balance** | **Float** | The amount of money owed on the credit account. It is the outstanding balance in applicable level (either card, account or relationship levels) | [optional] 
**available_credit** | **Float** | Available Credit limit on the credit card | [optional] 
**credit_limit** | **Float** | The maximum amount of credit that extend to a customer | [optional] 
**minimum_due_amount** | **Float** | Minimum due amount for a payment cycle | [optional] 
**payment_due_date** | **Date** | The payment due date in ISO 8601 date format YYYY-MM-DD | [optional] 
**alternate_currency** | **String** | The alternate currency | [optional] 
**alternate_currency_current_balance** | **Float** | The current balance in alternate currency | [optional] 
**card_holder_type** | **String** | Indicator to specify whether the card is primary or supplementary. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardHolderType} resource to get valid value of this field with description. | [optional] 





---

# CreditCardDetails.md

# SwaggerClient::CreditCardDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_limit_details** | [**CreditCardLimitDetails**](CreditCardLimitDetails.md) |  | [optional] 





---

# CreditCardLimitDetails.md

# SwaggerClient::CreditCardLimitDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_contactless_wthout_pin_pmt_limit** | [**BigDecimal**](BigDecimal.md) | Transaction limit set by the customer for the contact less payments without pin | [optional] 
**pos_spending_limit_amount** | **Float** | Point Sale Transaction Limit for the Credit card depends on customer selection | [optional] 
**internet_purchase_limit_amount** | **Float** | Non Point of Sale Transaction Limit for the Credit Card. Example: Online Transaction | [optional] 
**daily_atm_withdrawal_limit_amount** | **Float** | Field to indicate the limit on local ATM withdrawal amount | [optional] 
**daily_transaction_limit_amount** | **Float** | This is Daily accumulated Transaction amount Limit and set by customer. | [optional] 
**internet_purchase_activation_flag** | **BOOLEAN** | The indicator to enable/disable online purchase transaction (E-commerce). | [optional] 
**domestic_transaction** | [**DomesticTransaction**](DomesticTransaction.md) |  | [optional] 
**international_transaction** | [**InternationalTransaction**](InternationalTransaction.md) |  | [optional] 





---

# CreditCardProduct.md

# SwaggerClient::CreditCardProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product. | [optional] 
**source_code** | **String** | A source code to identify the product | [optional] 
**organization** | **String** | Card issuing organization name | [optional] 
**logo** | **String** | Product logo to identify the product | [optional] 





---

# CreditCardProductAdd.md

# SwaggerClient::CreditCardProductAdd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product. | [optional] 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing organization name | 
**logo** | **String** | Product logo to identify the product | 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**requested_credit_limit** | **Float** | Credit limit requested by applicant for the product. | [optional] 
**emboss_name** | **String** | Name to be embossed on card.If blank, bank will assign automatically based on the market norms. | [optional] 
**billing_address** | **String** | Billing address of the applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**card_delivery_address** | **String** | Card delivery address of the applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of the applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**card_delivery_branch** | **String** | Pick-up branch detail of the Citi bank for card collection. This is a reference data. Please use /v1/utilities/referenceData/{cardDeliveryBranch} resource to get valid value of this field. | [optional] 
**card_delivery_option** | **String** | Pick-up option for card collection. This is a reference data. Please use /v1/utilities/referenceData/{cardDeliveryOption} resource to get valid value of this field. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option  to review the credit limit in the future.Valid values: true and false | [optional] 





---

# CreditCardProductUpdate.md

# SwaggerClient::CreditCardProductUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product. | [optional] 
**source_code** | **String** | A source code to identify the product | [optional] 
**organization** | **String** | Card issuing organization name | [optional] 
**logo** | **String** | Product logo to identify the product | [optional] 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**requested_credit_limit** | **Float** | Credit limit requested by applicant for the product. | [optional] 
**emboss_name** | **String** | Name to be embossed on card.If blank, bank will assign automatically based on the market norms. | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**card_delivery_address** | **String** | Card delivery address of applicant. This is a reference data data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of applicant. This is a reference data data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**card_delivery_branch** | **String** | Pick-up branch detail of the Citi bank for card collection. This is a reference data. Please use /v1/utilities/referenceData/{cardDeliveryBranch} resource to get valid value of this field. | [optional] 
**card_delivery_option** | **String** | Pick-up option for card collection. This is a reference data. Please use /v1/utilities/referenceData/{cardDeliveryOption} resource to get valid value of this field. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option  to review the credit limit in the future.Valid values: true and false | [optional] 
**balance_transfer_details** | [**Array&lt;BalanceTransferDetails&gt;**](BalanceTransferDetails.md) |  | [optional] 
**credit_limit_accepted_flag** | **BOOLEAN** | Flag to indicate acceptance of customer for the credit card limit. | [optional] 





---

# CreditCardStatement.md

# SwaggerClient::CreditCardStatement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statement_date** | **Date** | The statement date in ISO 8601 format YYYY-MM-DD | [optional] 
**statement_id** | **String** | Unique identifier for the statement | [optional] 
**currency_code** | **String** | The currency code of the statement in ISO 4217 format | [optional] 
**credit_limit** | **Float** | The maximum amount of credit that extend to a customer | [optional] 
**outstanding_balance** | **Float** | Outstanding balance amount on the statement date | [optional] 
**last_statement_balance** | **Float** | The balance on last statement date | [optional] 
**payment_due_date** | **Date** | Next payment due date in ISO 8601 date format YYYY-MM-DD | [optional] 
**minimum_due_amount** | **Float** | Minimum due amount for a payment cycle | [optional] 
**eligible_for_equal_payment_plans** | [**Array&lt;EligibleForEqualPaymentPlan&gt;**](EligibleForEqualPaymentPlan.md) |  | [optional] 
**reward_points** | [**RewardPoints**](RewardPoints.md) |  | [optional] 





---

# CreditCardStatementSummary.md

# SwaggerClient::CreditCardStatementSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | The card id  in encrypted format | 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**eligible_source_accts_for_payment_flag** | **BOOLEAN** | ’Flag to indicate if eligible source accounts are available to make credit card payment on-line. | [optional] 
**epp_eligible_amount** | **Float** | Eligible amount for Equal Payment Plan. Applicable only if eligibleForEqualPaymentPlan&#x3D;&#x27;ELIGIBLE&#x27;. | [optional] 
**epp_minimum_eligible_amount** | **Float** | Minimum eligible amount for which Equal Payment Plan can be booked. Applicable only if eligibleForEqualPaymentPlan&#x3D;&#x27;ELIGIBLE&#x27;. | [optional] 
**epp_minimum_installment_amount** | **Float** | Minimum instalment amount for Equal Payment Plan. Applicable only if eligibleForEqualPaymentPlan&#x3D;&#x27;ELIGIBLE&#x27;. | [optional] 
**credit_card_statement** | [**Array&lt;CreditCardStatement&gt;**](CreditCardStatement.md) |  | [optional] 
**statement_summary_error_details** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 
**next_start_index** | **String** | In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data. | [optional] 





---

# CreditCardsApi.md

# SwaggerClient::CreditCardsApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companion_card_application**](CreditCardsApi.md#companion_card_application) | **POST** /v1/creditCards/{cardId}/companion/applications | Issuance of Companion Card
[**easy_payment_plans_transaction_eligibility**](CreditCardsApi.md#easy_payment_plans_transaction_eligibility) | **GET** /v1/creditCards/{cardId}/transactions/eligibility/easyPaymentPlan | Transaction Eligibility and Easy Payment Plans
[**v1_credit_cards_card_id_easy_payment_plans_bookings_post**](CreditCardsApi.md#v1_credit_cards_card_id_easy_payment_plans_bookings_post) | **POST** /v1/creditCards/{cardId}/easyPaymentPlans/bookings | Book Easy Payment Plan
[**v1_credit_cards_card_id_easy_payment_plans_eligibility_get**](CreditCardsApi.md#v1_credit_cards_card_id_easy_payment_plans_eligibility_get) | **GET** /v1/creditCards/{cardId}/easyPaymentPlans/eligibility | Check Easy Payment Plan Eligibility
[**v1_credit_cards_card_id_easy_payment_plans_repayment_schedules_get**](CreditCardsApi.md#v1_credit_cards_card_id_easy_payment_plans_repayment_schedules_get) | **GET** /v1/creditCards/{cardId}/easyPaymentPlans/repaymentSchedules | Easy Payment Plan Repayment Schedule
[**v1_credit_cards_card_id_easy_payment_plans_search_post**](CreditCardsApi.md#v1_credit_cards_card_id_easy_payment_plans_search_post) | **POST** /v1/creditCards/{cardId}/easyPaymentPlans/search | Retrieve Easy Payment Plans Options
[**v1_credit_cards_card_id_supplementary_cards_get**](CreditCardsApi.md#v1_credit_cards_card_id_supplementary_cards_get) | **GET** /v1/creditCards/{cardId}/supplementaryCards | List Supplementary Cards
[**v1_credit_cards_statements_summary_search_post**](CreditCardsApi.md#v1_credit_cards_statements_summary_search_post) | **POST** /v1/creditCards/statements/summary/search | Retrieve Composite Credit Cards Statement Summary

# **companion_card_application**
> CompanionCardApplicationResponse companion_card_application(authorizationuuidacceptcontent_typeclient_idcard_id, opts)

Issuance of Companion Card

This API is used to issue a new companion card for primary credit card.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CreditCardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
content_type = 'content_type_example' # String | The MIME type of the body of the request (used with POST and PUT requests). Always pass application/json.
client_id = 'client_id_example' # String | Client ID generated during application registration.
card_id = 'card_id_example' # String | Card Id in encrypted format
opts = { 
  body: SwaggerClient::CompanionCardApplicationRequest.new # CompanionCardApplicationRequest | CompanionCardApplicationRequest
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Issuance of Companion Card
  result = api_instance.companion_card_application(authorizationuuidacceptcontent_typeclient_idcard_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CreditCardsApi->companion_card_application: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **content_type** | **String**| The MIME type of the body of the request (used with POST and PUT requests). Always pass application/json. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **card_id** | **String**| Card Id in encrypted format | 
 **body** | [**CompanionCardApplicationRequest**](CompanionCardApplicationRequest.md)| CompanionCardApplicationRequest | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**CompanionCardApplicationResponse**](CompanionCardApplicationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **easy_payment_plans_transaction_eligibility**
> EasyPaymentPlansTransactionEligibilityResponse easy_payment_plans_transaction_eligibility(authorization, uuid, accept, client_id, card_id, eligble_loan_amount, opts)

Transaction Eligibility and Easy Payment Plans

This API is used to check the Easy Payment Plans eligibility for a card and the available Payment Plans details.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CreditCardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
card_id = 'card_id_example' # String | The card id in encrypted format.
eligble_loan_amount = 1.2 # Float | Elligible loan amount for easy payment plan booking..
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Transaction Eligibility and Easy Payment Plans
  result = api_instance.easy_payment_plans_transaction_eligibility(authorization, uuid, accept, client_id, card_id, eligble_loan_amount, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CreditCardsApi->easy_payment_plans_transaction_eligibility: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **card_id** | **String**| The card id in encrypted format. | 
 **eligble_loan_amount** | **Float**| Elligible loan amount for easy payment plan booking.. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**EasyPaymentPlansTransactionEligibilityResponse**](EasyPaymentPlansTransactionEligibilityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v1_credit_cards_card_id_easy_payment_plans_bookings_post**
> EppLoanBookingResponse v1_credit_cards_card_id_easy_payment_plans_bookings_post(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)

Book Easy Payment Plan

This API is triggered after the EPP plan selection and completes the EPP booking. On successful booking, it returns transaction reference in the response.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CreditCardsApi.new
body = SwaggerClient::EppLoanBookingRequest.new # EppLoanBookingRequest | 
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
card_id = 'card_id_example' # String | The card id  in encrypted format.
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Book Easy Payment Plan
  result = api_instance.v1_credit_cards_card_id_easy_payment_plans_bookings_post(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CreditCardsApi->v1_credit_cards_card_id_easy_payment_plans_bookings_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EppLoanBookingRequest**](EppLoanBookingRequest.md)|  | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D; | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **card_id** | **String**| The card id  in encrypted format. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**EppLoanBookingResponse**](EppLoanBookingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_credit_cards_card_id_easy_payment_plans_eligibility_get**
> EasyPaymentPlansEligibilityInquiryResponse v1_credit_cards_card_id_easy_payment_plans_eligibility_get(authorization, uuid, accept, client_id, card_id, epp_loan_booking_type, opts)

Check Easy Payment Plan Eligibility

This API is used to validate the transaction eligibility for EPP conversion.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CreditCardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | client_id generated during consumer onboarding
card_id = 'card_id_example' # String | Card Id in encrypted format.
epp_loan_booking_type = 'epp_loan_booking_type_example' # String | Type of the easy payment plan loan booking.This is a reference data field. Please use /v1/utilities/referenceData/{eppLoanBookingType} resource to get possible value of this field with description.
opts = { 
  client_details: 'client_details_example', # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
  next_start_index: 'next_start_index_example' # String | In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data.
}

begin
  #Check Easy Payment Plan Eligibility
  result = api_instance.v1_credit_cards_card_id_easy_payment_plans_eligibility_get(authorization, uuid, accept, client_id, card_id, epp_loan_booking_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CreditCardsApi->v1_credit_cards_card_id_easy_payment_plans_eligibility_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| client_id generated during consumer onboarding | 
 **card_id** | **String**| Card Id in encrypted format. | 
 **epp_loan_booking_type** | **String**| Type of the easy payment plan loan booking.This is a reference data field. Please use /v1/utilities/referenceData/{eppLoanBookingType} resource to get possible value of this field with description. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 
 **next_start_index** | **String**| In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data. | [optional] 

### Return type

[**EasyPaymentPlansEligibilityInquiryResponse**](EasyPaymentPlansEligibilityInquiryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v1_credit_cards_card_id_easy_payment_plans_repayment_schedules_get**
> EppRepaymentScheuleResponse v1_credit_cards_card_id_easy_payment_plans_repayment_schedules_get(authorization, uuid, accept, client_id, card_id, loan_amount, tenor, opts)

Easy Payment Plan Repayment Schedule

This API allows the customer to view the payment breakdown details and the repayment schedule for the Easy Payment Plan selected.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CreditCardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | client id generated during consumer onboarding
card_id = 'card_id_example' # String | The card id  in encrypted format.
loan_amount = 1.2 # Float | Loan amount for easy payment plan booking.
tenor = SwaggerClient::BigDecimal.new # BigDecimal | Tenure of loan in months.
opts = { 
  client_details: 'client_details_example', # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
  next_start_index: 'next_start_index_example' # String | In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data.
}

begin
  #Easy Payment Plan Repayment Schedule
  result = api_instance.v1_credit_cards_card_id_easy_payment_plans_repayment_schedules_get(authorization, uuid, accept, client_id, card_id, loan_amount, tenor, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CreditCardsApi->v1_credit_cards_card_id_easy_payment_plans_repayment_schedules_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| client id generated during consumer onboarding | 
 **card_id** | **String**| The card id  in encrypted format. | 
 **loan_amount** | **Float**| Loan amount for easy payment plan booking. | 
 **tenor** | **BigDecimal**| Tenure of loan in months. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 
 **next_start_index** | **String**| In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data. | [optional] 

### Return type

[**EppRepaymentScheuleResponse**](EppRepaymentScheuleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v1_credit_cards_card_id_easy_payment_plans_search_post**
> EppResponse v1_credit_cards_card_id_easy_payment_plans_search_post(bodyauthorizationuuidacceptclient_idcard_id, opts)

Retrieve Easy Payment Plans Options

This API retrieves the available Easy Payment Plans to be used by the customer for the repayment of his/her loans.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CreditCardsApi.new
body = SwaggerClient::EppRequest.new # EppRequest | Easy payment plan Request
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | client id generated during consumer onboarding
card_id = 'card_id_example' # String | The card id  in encrypted format.
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Retrieve Easy Payment Plans Options
  result = api_instance.v1_credit_cards_card_id_easy_payment_plans_search_post(bodyauthorizationuuidacceptclient_idcard_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CreditCardsApi->v1_credit_cards_card_id_easy_payment_plans_search_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EppRequest**](EppRequest.md)| Easy payment plan Request | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| client id generated during consumer onboarding | 
 **card_id** | **String**| The card id  in encrypted format. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**EppResponse**](EppResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_credit_cards_card_id_supplementary_cards_get**
> SupplementaryCardListingResponse v1_credit_cards_card_id_supplementary_cards_get(authorization, uuid, accept, client_id, card_id, opts)

List Supplementary Cards

This API retrieves the details of all the supplementary cards associated with the primary card id in the request.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CreditCardsApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | client id generated during consumer onboarding
card_id = 'card_id_example' # String | The primary card id  in encrypted format.
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #List Supplementary Cards
  result = api_instance.v1_credit_cards_card_id_supplementary_cards_get(authorization, uuid, accept, client_id, card_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CreditCardsApi->v1_credit_cards_card_id_supplementary_cards_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| client id generated during consumer onboarding | 
 **card_id** | **String**| The primary card id  in encrypted format. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**SupplementaryCardListingResponse**](SupplementaryCardListingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v1_credit_cards_statements_summary_search_post**
> CardStatementSummaryResponse v1_credit_cards_statements_summary_search_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)

Retrieve Composite Credit Cards Statement Summary

This API is used to retrieve the statement summary for multiple credit cards in a single request.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CreditCardsApi.new
body = SwaggerClient::CardStatementSummaryRequest.new # CardStatementSummaryRequest | 
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Retrieve Composite Credit Cards Statement Summary
  result = api_instance.v1_credit_cards_statements_summary_search_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CreditCardsApi->v1_credit_cards_statements_summary_search_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CardStatementSummaryRequest**](CardStatementSummaryRequest.md)|  | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**CardStatementSummaryResponse**](CardStatementSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json







---

# CreditCheck.md

# SwaggerClient::CreditCheck

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | [**BigDecimal**](BigDecimal.md) | Tenure of loan in months. | 
**maximum_eligible_loan_amount** | **Float** | Maximum Eligible Loan amount corresponding to each tenure. | 
**annual_percentage_rate** | **Float** | Compounded annual interest rate. | [optional] 





---

# CreditCheckRequest.md

# SwaggerClient::CreditCheckRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthly_income** | **Float** | This field is to indicate the monthly income of the customer. | 
**total_monthly_secured_loan_repayment_amount** | **Float** | Total monthly repayment amount outside of Citibank for mortgage installment, secured loans and all in-progress loan applications. | [optional] 
**total_monthly_unsecured_loan_repayment_amount** | **Float** | Total monthly repayment amount of unsecured loans in non-bank money lenders. | [optional] 





---

# CreditCheckResponse.md

# SwaggerClient::CreditCheckResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_check** | [**Array&lt;CreditCheck&gt;**](CreditCheck.md) |  | 





---

# CreditLimitDecreaseConsentRequest.md

# SwaggerClient::CreditLimitDecreaseConsentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | It is used to control the flow for subsequent requests in the session. | 





---

# CreditLimitDecreaseConsentResponse.md

# SwaggerClient::CreditLimitDecreaseConsentResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_limitd_decrease_reference_id** | **String** | Unique Reference Id for the request for credit limit decrease request. | 





---

# CreditLimitDecreaseRequest.md

# SwaggerClient::CreditLimitDecreaseRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | The card id  in encrypted format. | 
**requested_credit_limit_amount** | **Float** | Customer&#x27;s preferred revised credit limit. This is the combined limit  shared with all the existing credit cards of the customer. | 





---

# CreditLimitDecreaseResponse.md

# SwaggerClient::CreditLimitDecreaseResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | It is used to control the flow for subsequent requests in the session. | [optional] 
**credit_limitd_decrease_reference_id** | **String** | Unique Reference Id for the request for credit limit decrease request. | [optional] 
**customer_consent_required_flag** | **BOOLEAN** | This refers that consent is required from customer as new limit lower than the outstanding request. | [optional] 





---

# CreditLimitIncreaseRequest.md

# SwaggerClient::CreditLimitIncreaseRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permanent_credit_limit_increase** | [**PermanentCreditLimitIncrease**](PermanentCreditLimitIncrease.md) |  | [optional] 
**temporary_credit_limit_increase** | [**TemporaryCreditLimitIncrease**](TemporaryCreditLimitIncrease.md) |  | [optional] 





---

# CreditLimitIncreaseResponse.md

# SwaggerClient::CreditLimitIncreaseResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response_code** | **String** | Response code.This is a reference data field. Please use /v1/apac/utilities/referenceData/{responseCode} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# CreditSpecificRecommendations.md

# SwaggerClient::CreditSpecificRecommendations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommended_credit_limit** | **Float** | Eligible Credit limit | [optional] 
**bt_maximum_loan_percentage** | **Float** | Balance transfer maximum loan percentage. Applicable to Counter and Cross-sell offers | [optional] 
**bt_monthly_interest_rate** | **Float** | Balance transfer monthly interest rate. Applicable to Counter and Cross-sell offers | [optional] 
**epp_maximum_loan_percentage** | **Float** | EPP(Equal Payment Plan) Max loan percentage. Applicable to counter and cross-sell offers. | [optional] 
**epp_monthly_interest_rate** | **Float** | Equal payment plan monthly interest rate. Applicable to counter and cross-sell offers | [optional] 
**bt_campaign_id** | **String** | Balance transfer campaignId. Applicable to counter and cross-sell offers. | [optional] 
**epp_promo_id** | **String** | PromoId of equal payment plan. Applicable for ready credit, Counter and cross-sell offers | [optional] 





---

# CreditSpecificSelection.md

# SwaggerClient::CreditSpecificSelection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**emboss_name** | **String** | Name to be embossed on card | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use billingAddress field as the referenceCode parameter to retrieve the values. | [optional] 
**card_delivery_address** | **String** | Card delivery address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use cardDeliveryAddress field name as the referenceCode parameter to retrieve the values. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid values of this field with descriptions. You can use pinDeliveryAddress field name as the referenceCode parameter to retrieve the values. | [optional] 
**requested_credit_limit** | **Float** | Credit limit accepted by customer | [optional] 
**offered_credit_limit_accepted_flag** | **BOOLEAN** | Consent to offered credit limit and If the customer has not accepted Bankâ€™s approved credit limit then requestedCreditLimit is mandatory. Valid values: true and false | [optional] 
**atm_required_flag** | **BOOLEAN** | Option to get ATM card along with product. Valid values: true and false | [optional] 
**cheque_book_required_flag** | **BOOLEAN** | Option to get cheque book along with product. Valid values: true and false | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option  to increase credit limit. Valid values: true and false | [optional] 





---

# CreditorDetails.md

# SwaggerClient::CreditorDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creditor_proxy_id_type** | **String** | Proxy ID Type used for the payee account identification | [optional] 
**creditor_proxy_id_value** | **String** | Proxy ID value used for the payee account identification | [optional] 





---

# CrossProductUtilitiesApi.md

# SwaggerClient::CrossProductUtilitiesApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate_card**](CrossProductUtilitiesApi.md#activate_card) | **PUT** /v1/prelogin/cards/{cardId}/activations | This API is used to activate the credit or debit card in pre login scenario.This API will not be published in CITI&#x27;s developer portal. In case this API is exposed to external party, TISO review will be required.
[**change_atm_pin**](CrossProductUtilitiesApi.md#change_atm_pin) | **PUT** /v1/prelogin/cards/atmPin/change | This API is used to change the pin of a debit or credit card in pre-login scenario. This API will not be published in CITI&#x27;s developer portal. In  case this API is exposed to external party, TISO review will be required.

# **activate_card**
> activate_card(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)

This API is used to activate the credit or debit card in pre login scenario.This API will not be published in CITI's developer portal. In case this API is exposed to external party, TISO review will be required.

This API is used to activate the credit or debit card in pre login scenario.This API will not be published in CITI's developer portal. In case this API is exposed to external party, TISO review will be required.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CrossProductUtilitiesApi.new
body = SwaggerClient::ActivateCardRequest.new # ActivateCardRequest | ActivateCardRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
card_id = 'card_id_example' # String | Hashed card number of the customer
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to activate the credit or debit card in pre login scenario.This API will not be published in CITI's developer portal. In case this API is exposed to external party, TISO review will be required.
  api_instance.activate_card(bodyauthorizationuuidacceptclient_idcontent_typecard_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CrossProductUtilitiesApi->activate_card: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ActivateCardRequest**](ActivateCardRequest.md)| ActivateCardRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **card_id** | **String**| Hashed card number of the customer | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **change_atm_pin**
> change_atm_pin(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is used to change the pin of a debit or credit card in pre-login scenario. This API will not be published in CITI's developer portal. In  case this API is exposed to external party, TISO review will be required.

This API is used to change the pin of a debit or credit card in pre-login scenario. This API will not be published in CITI's developer portal.  In case this API is exposed to external party, TISO review will be required.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CrossProductUtilitiesApi.new
body = SwaggerClient::ChangeAtmPinRequest.new # ChangeAtmPinRequest | ChangeAtmPinRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer  KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields  which will be passed as part of the header  devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifi MacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitu de,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to change the pin of a debit or credit card in pre-login scenario. This API will not be published in CITI's developer portal. In  case this API is exposed to external party, TISO review will be required.
  api_instance.change_atm_pin(bodyauthorizationuuidacceptclient_idcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CrossProductUtilitiesApi->change_atm_pin: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ChangeAtmPinRequest**](ChangeAtmPinRequest.md)| ChangeAtmPinRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer  KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields  which will be passed as part of the header  devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifi MacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitu de,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json







---

# CrossSellOffer.md

# SwaggerClient::CrossSellOffer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_specific_recommendations** | [**Array&lt;CreditSpecificRecommendations&gt;**](CreditSpecificRecommendations.md) |  | [optional] 
**loan_specific_recommendations** | [**Array&lt;LoanSpecificRecommendations&gt;**](LoanSpecificRecommendations.md) |  | [optional] 
**offer_product_code** | **String** | A unique code that identifies the product | [optional] 
**offer_product_organisation** | **String** | Card issuing organization name | [optional] 
**offer_source_code** | **String** | A source code to identify the product | [optional] 
**required_documents** | [**Array&lt;RequiredDocuments&gt;**](RequiredDocuments.md) |  | [optional] 





---

# CurrencyDetails.md

# SwaggerClient::CurrencyDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **String** | The currency code in ISO 4217 format | 
**currency_name** | **String** | The currency name. | 





---

# CustomerAddress.md

# SwaggerClient::CustomerAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **String** | Address line 1 | [optional] 
**address_line2** | **String** | Address line 2 | [optional] 
**address_line3** | **String** | Address line 3 | [optional] 
**address_line4** | **String** | Address line 4 | [optional] 
**city_name** | **String** | City | [optional] 
**state** | **String** | State.This is a reference data field. Please use /v1/utilities/referenceData/{addressState} resource to get valid value of this field with description. | [optional] 
**postal_code** | **String** | Postal/ZIP code | [optional] 
**province_code** | **String** | Province code | [optional] 
**country_code** | **String** | ISO country code. This is a reference data field. Please use /v1/utilities/referenceData/{country} resource to get valid value of this field with description. You can use countryCode field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# CustomerApi.md

# SwaggerClient::CustomerApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sufficiency_of_funds**](CustomerApi.md#sufficiency_of_funds) | **GET** /v1/accounts/{accountId}/funds/sufficiencyCheck | Check Availability of Funds

# **sufficiency_of_funds**
> SufficiencyOfFundsResponse sufficiency_of_funds(authorization, uuid, accept, client_id, sufficiency_check_amount, account_id, currency_code, opts)

Check Availability of Funds

This API returns a yes or no, based on the availability of requested funds in the customer’s account.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CustomerApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
sufficiency_check_amount = 1.2 # Float | Specifies amount to check account for sufficiency.
account_id = 'account_id_example' # String | IBAN number of the customer.
currency_code = 'currency_code_example' # String | Currency Code in ISO 4217 format
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Check Availability of Funds
  result = api_instance.sufficiency_of_funds(authorization, uuid, accept, client_id, sufficiency_check_amount, account_id, currency_code, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CustomerApi->sufficiency_of_funds: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **sufficiency_check_amount** | **Float**| Specifies amount to check account for sufficiency. | 
 **account_id** | **String**| IBAN number of the customer. | 
 **currency_code** | **String**| Currency Code in ISO 4217 format | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**SufficiencyOfFundsResponse**](SufficiencyOfFundsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json







---

# CustomerFoundationalApi.md

# SwaggerClient::CustomerFoundationalApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieve_customer_reference_data_directory_entry_corporate_card_customer_contact**](CustomerFoundationalApi.md#retrieve_customer_reference_data_directory_entry_corporate_card_customer_contact) | **POST** /partner/v1/customerReferenceDataManagement/corporateCardCustomer/contacts/retrieve | This API is used to inquire the Customer contact details.
[**update_customer_reference_data_directory_entry_corporate_card_customer_contact**](CustomerFoundationalApi.md#update_customer_reference_data_directory_entry_corporate_card_customer_contact) | **PUT** /partner/v1/customerReferenceDataManagement/corporateCardCustomer/contacts | This API is used to update customer contact details

# **retrieve_customer_reference_data_directory_entry_corporate_card_customer_contact**
> RetrieveCustomerReferenceDataDirectoryEntryCorporateCardCustomerContactResponse retrieve_customer_reference_data_directory_entry_corporate_card_customer_contact(authorization, uuid, accept, client_id, content_type, opts)

This API is used to inquire the Customer contact details.

This API is used to inquire the Customer contact details.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CustomerFoundationalApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  accept_language: 'accept_language_example', # String | List of acceptable human languages for response.
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to inquire the Customer contact details.
  result = api_instance.retrieve_customer_reference_data_directory_entry_corporate_card_customer_contact(authorization, uuid, accept, client_id, content_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CustomerFoundationalApi->retrieve_customer_reference_data_directory_entry_corporate_card_customer_contact: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **accept_language** | **String**| List of acceptable human languages for response. | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**RetrieveCustomerReferenceDataDirectoryEntryCorporateCardCustomerContactResponse**](RetrieveCustomerReferenceDataDirectoryEntryCorporateCardCustomerContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_customer_reference_data_directory_entry_corporate_card_customer_contact**
> update_customer_reference_data_directory_entry_corporate_card_customer_contact(authorization, uuid, accept, client_id, content_type, opts)

This API is used to update customer contact details

This API is used to update customer contact details

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::CustomerFoundationalApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  accept_language: 'accept_language_example', # String | List of acceptable human languages for response.
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to update customer contact details
  api_instance.update_customer_reference_data_directory_entry_corporate_card_customer_contact(authorization, uuid, accept, client_id, content_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling CustomerFoundationalApi->update_customer_reference_data_directory_entry_corporate_card_customer_contact: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **accept_language** | **String**| List of acceptable human languages for response. | [optional] 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json







---

# CustomerMerchantReferenceDetails.md

# SwaggerClient::CustomerMerchantReferenceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_merchant_reference_code** | **String** | Additional bill reference code. | 
**customer_merchant_reference_description** | **String** | The value associated with the corresponding additional Bill Reference Code. | 





---

# CustomerName.md

# SwaggerClient::CustomerName

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | **String** | Full name of the customer. | 





---

# CvvVerificationRequest.md

# SwaggerClient::CvvVerificationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encrypted_cvv** | **String** | CVV number in encrypted format | 
**card_id** | **String** | The card id in encrypted format | 





---

# Data.md

# SwaggerClient::Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_details** | [**DataProductDetails**](DataProductDetails.md) |  | [optional] 
**requirements** | [**DataRequirements**](DataRequirements.md) |  | [optional] 
**product_offerings** | [**DataProductOfferings**](DataProductOfferings.md) |  | [optional] 
**fees_charges** | [**DataFeesCharges**](DataFeesCharges.md) |  | [optional] 
**promotions** | [**DataPromotions**](DataPromotions.md) |  | [optional] 





---

# DataFeesCharges.md

# SwaggerClient::DataFeesCharges

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_charge_detail** | [**Array&lt;DataFeesChargesFeeChargeDetail&gt;**](DataFeesChargesFeeChargeDetail.md) |  | [optional] 





---

# DataFeesChargesFeeChargeDetail.md

# SwaggerClient::DataFeesChargesFeeChargeDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | **String** |  | 
**chargeable** | **BOOLEAN** | Indicator of chargeability | [optional] 
**amount** | **Float** | Amount for fee and charge up to two digits decimal | [optional] 
**amount_currency_code** | **String** | ISO-4217 3 characters currency code for fee and charge amount | [optional] [default to &#x27;MYR&#x27;]
**percentage** | **Float** | Percentage of amount for fee and charge up to two digits decimal | [optional] 
**remark** | **String** | Additional notes for the fee and charge | [optional] 





---

# DataProductDetails.md

# SwaggerClient::DataProductDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Product name | 
**description** | **String** | Product description | 
**product_type** | **String** | Type of product | 
**sub_product_type** | **String** | Type of sub-product | [optional] 
**shariah_compliance** | **BOOLEAN** | The indicator for Islamic or Conventional card | 
**shariah_compliance_remark** | **String** | Approval body for shariah compliance | [optional] 
**card_type** | **String** | Type of card | 
**pds_url** | **String** | URL for product disclosure sheet | 
**image_url** | **String** | Absolute URL to image in SVG format | [optional] 
**disclaimer_url** | **String** | Absolute URL for product disclaimer | [optional] 





---

# DataProductOfferings.md

# SwaggerClient::DataProductOfferings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **String** | Type of offering | 
**item** | **String** |  | 
**remark** | **String** | Additional notes for the reward, air miles and feature | [optional] 
**branding** | **String** | Branding for specific offering | [optional] 
**tnc_url** | **String** | Absolute URL to term and conditions for specific offering | [optional] 





---

# DataPromotions.md

# SwaggerClient::DataPromotions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **Date** | Promotion start date | [optional] 
**end_date** | **Date** | Promotion end date | [optional] 
**description** | **String** | Description of promotion | [optional] 
**url** | **String** | Absolute URL to access further detail on promotion | [optional] 





---

# DataRequirements.md

# SwaggerClient::DataRequirements

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requirement_detail** | [**Array&lt;DataRequirementsRequirementDetail&gt;**](DataRequirementsRequirementDetail.md) |  | [optional] 





---

# DataRequirementsApplicant.md

# SwaggerClient::DataRequirementsApplicant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type** | **String** | Type of the card application | 
**employment_status** | **String** | Employment status of the applicant | [optional] 
**min_age** | **Integer** | Minimum age of applicant | [optional] 
**max_age** | **Integer** | Maximum age of applicant | [optional] 
**min_annual_income** | **Integer** | Minimum annual income | [optional] 
**min_annual_income_currency_code** | **String** | ISO-4217 3 characters currency code for minimum annual income | [optional] [default to &#x27;MYR&#x27;]
**document** | [**Array&lt;DataRequirementsDocument&gt;**](DataRequirementsDocument.md) |  | [optional] 





---

# DataRequirementsDocument.md

# SwaggerClient::DataRequirementsDocument

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | **String** | Type of document | [optional] 
**remark** | **String** | Additional note for the document | [optional] 





---

# DataRequirementsRequirementDetail.md

# SwaggerClient::DataRequirementsRequirementDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nationality** | **String** | Nationality of the applicant | 
**nationality_remark** | **String** | Remark on nationality | [optional] 
**residency** | **String** | Resident status of the applicant | 
**account_holder_flag** | **BOOLEAN** | Requirement to have account with the bank | [optional] 
**applicant** | [**Array&lt;DataRequirementsApplicant&gt;**](DataRequirementsApplicant.md) |  | [optional] 





---

# Data_fees_charges.md

# IO.Swagger.Model.DataFeesCharges
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FeeChargeDetail** | [**List&lt;DataFeesChargesFeeChargeDetail&gt;**](DataFeesChargesFeeChargeDetail.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# Data_fees_charges_fee_charge_detail.md

# IO.Swagger.Model.DataFeesChargesFeeChargeDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Item** | **string** |  | 
**Chargeable** | **bool?** | Indicator of chargeability | [optional] 
**Amount** | **double?** | Amount for fee and charge up to two digits decimal | [optional] 
**AmountCurrencyCode** | **string** | ISO-4217 3 characters currency code for fee and charge amount | [optional] [default to "MYR"]
**Percentage** | **double?** | Percentage of amount for fee and charge up to two digits decimal | [optional] 
**Remark** | **string** | Additional notes for the fee and charge | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# Data_product_details.md

# IO.Swagger.Model.DataProductDetails
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Product name | 
**Description** | **string** | Product description | 
**ProductType** | **string** | Type of product | 
**SubProductType** | **string** | Type of sub-product | [optional] 
**ShariahCompliance** | **bool?** | The indicator for Islamic or Conventional card | 
**ShariahComplianceRemark** | **string** | Approval body for shariah compliance | [optional] 
**CardType** | **string** | Type of card | 
**PdsUrl** | **string** | URL for product disclosure sheet | 
**ImageUrl** | **string** | Absolute URL to image in SVG format | [optional] 
**DisclaimerUrl** | **string** | Absolute URL for product disclaimer | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# Data_product_offerings.md

# IO.Swagger.Model.DataProductOfferings
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Category** | **string** | Type of offering | 
**Item** | **string** |  | 
**Remark** | **string** | Additional notes for the reward, air miles and feature | [optional] 
**Branding** | **string** | Branding for specific offering | [optional] 
**TncUrl** | **string** | Absolute URL to term and conditions for specific offering | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# Data_promotions.md

# IO.Swagger.Model.DataPromotions
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartDate** | **DateTime?** | Promotion start date | [optional] 
**EndDate** | **DateTime?** | Promotion end date | [optional] 
**Description** | **string** | Description of promotion | [optional] 
**Url** | **string** | Absolute URL to access further detail on promotion | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# Data_requirements.md

# IO.Swagger.Model.DataRequirements
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequirementDetail** | [**List&lt;DataRequirementsRequirementDetail&gt;**](DataRequirementsRequirementDetail.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# Data_requirements_applicant.md

# IO.Swagger.Model.DataRequirementsApplicant
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationType** | **string** | Type of the card application | 
**EmploymentStatus** | **string** | Employment status of the applicant | [optional] 
**MinAge** | **int?** | Minimum age of applicant | [optional] 
**MaxAge** | **int?** | Maximum age of applicant | [optional] 
**MinAnnualIncome** | **int?** | Minimum annual income | [optional] 
**MinAnnualIncomeCurrencyCode** | **string** | ISO-4217 3 characters currency code for minimum annual income | [optional] [default to "MYR"]
**Document** | [**List&lt;DataRequirementsDocument&gt;**](DataRequirementsDocument.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# Data_requirements_document.md

# IO.Swagger.Model.DataRequirementsDocument
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Item** | **string** | Type of document | [optional] 
**Remark** | **string** | Additional note for the document | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# Data_requirements_requirement_detail.md

# IO.Swagger.Model.DataRequirementsRequirementDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nationality** | **string** | Nationality of the applicant | 
**NationalityRemark** | **string** | Remark on nationality | [optional] 
**Residency** | **string** | Resident status of the applicant | 
**AccountHolderFlag** | **bool?** | Requirement to have account with the bank | [optional] 
**Applicant** | [**List&lt;DataRequirementsApplicant&gt;**](DataRequirementsApplicant.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# DebitCardDetails.md

# SwaggerClient::DebitCardDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debit_card_enrollment_details** | [**DebitCardEnrollmentDetails**](DebitCardEnrollmentDetails.md) |  | [optional] 
**debit_card_limit_details** | [**DebitCardLimitDetails**](DebitCardLimitDetails.md) |  | [optional] 





---

# DebitCardEnrollmentDetails.md

# SwaggerClient::DebitCardEnrollmentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**internet_purchase_access_flag** | **BOOLEAN** | Flag to indicate if internet purchase access is enabled or not on the debit/credit card | [optional] 
**contactless_payment_enrolled_flag** | **BOOLEAN** | Flag to indicate if contact-less payment is enabled or not on the debit/credit card | [optional] 
**overseas_atm_access_allowed_flag** | **BOOLEAN** | This field is to indicate if overseas ATM access is allowed to the card. | [optional] 





---

# DebitCardLimitDetails.md

# SwaggerClient::DebitCardLimitDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pos_spending_limit_amount** | **Float** | Field to indicate the limit on merchant POS spending amount per transaction | [optional] 
**daily_atm_withdrawal_limit_amount** | **Float** | Field to indicate the limit on local ATM withdrawal amount | [optional] 
**daily_internet_purchase_limit_amount** | **Float** | Field to indicate the limit on internet purchase  in a day | [optional] 





---

# DebtorDetails.md

# SwaggerClient::DebtorDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debtor_proxy_id_type** | **String** | Proxy ID Type used for the payer account identification | [optional] 
**debtor_proxy_id_value** | **String** | Proxy ID value used for the payer account identification | [optional] 





---

# DefaultApi.md

# SwaggerClient::DefaultApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_cards_card_id_activations_card_activation_code_put**](DefaultApi.md#v1_cards_card_id_activations_card_activation_code_put) | **PUT** /v1/cards/{cardId}/activations/{cardActivationCode} | Update local usage activation
[**v1_cards_card_id_lost_stolen_put**](DefaultApi.md#v1_cards_card_id_lost_stolen_put) | **PUT** /v1/cards/{cardId}/lostStolen | Report card as lost or stolen
[**v1_cards_card_id_overseas_usage_put**](DefaultApi.md#v1_cards_card_id_overseas_usage_put) | **PUT** /v1/cards/{cardId}/overseasUsage | Update overseas usage activation
[**v1_cards_get**](DefaultApi.md#v1_cards_get) | **GET** /v1/cards | Retrieve all cards
[**v1_credit_cards_card_id_supplementary_applications_post**](DefaultApi.md#v1_credit_cards_card_id_supplementary_applications_post) | **POST** /v1/creditCards/{cardId}/supplementary/applications | Supplementary Card Application
[**v1_credit_cards_credit_limits_post**](DefaultApi.md#v1_credit_cards_credit_limits_post) | **POST** /v1/creditCards/creditLimits | Request credit limit increase

# **v1_cards_card_id_activations_card_activation_code_put**
> v1_cards_card_id_activations_card_activation_code_put(uuidclient_idauthorizationcard_idcard_activation_code, opts)

Update local usage activation

This API is used to activate or deactivate the specified card's ability to be used locally.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
client_id = 'client_id_example' # String | Client ID generated during application registration.
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
card_id = 'card_id_example' # String | Card Id in encrypted format
card_activation_code = 'card_activation_code_example' # String | Activation Code for card Usage. Possible values:ACTIVATE, DEACTIVATE.This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardActivationCode} resource to get valid value of this field with description. You can use the cardActivationCode as the referenceCode parameter to retrieve the values.
opts = { 
  body: SwaggerClient::CardUsageRequest.new # CardUsageRequest | 
}

begin
  #Update local usage activation
  api_instance.v1_cards_card_id_activations_card_activation_code_put(uuidclient_idauthorizationcard_idcard_activation_code, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->v1_cards_card_id_activations_card_activation_code_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **card_id** | **String**| Card Id in encrypted format | 
 **card_activation_code** | **String**| Activation Code for card Usage. Possible values:ACTIVATE, DEACTIVATE.This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardActivationCode} resource to get valid value of this field with description. You can use the cardActivationCode as the referenceCode parameter to retrieve the values. | 
 **body** | [**CardUsageRequest**](CardUsageRequest.md)|  | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_card_id_lost_stolen_put**
> ReportLostStolenCardResponse v1_cards_card_id_lost_stolen_put(bodyuuidacceptclient_idcontent_typeauthorizationcard_id)

Report card as lost or stolen

This API is used to report a specified card as lost or stolen and returns a reference number to track the request.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new
body = SwaggerClient::ReportLostStolenCardRequest.new # ReportLostStolenCardRequest | 
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
card_id = 'card_id_example' # String | Unique Id of the card in encrypted format


begin
  #Report card as lost or stolen
  result = api_instance.v1_cards_card_id_lost_stolen_put(bodyuuidacceptclient_idcontent_typeauthorizationcard_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->v1_cards_card_id_lost_stolen_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReportLostStolenCardRequest**](ReportLostStolenCardRequest.md)|  | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **card_id** | **String**| Unique Id of the card in encrypted format | 

### Return type

[**ReportLostStolenCardResponse**](ReportLostStolenCardResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_card_id_overseas_usage_put**
> v1_cards_card_id_overseas_usage_put(bodyuuidacceptclient_idcontent_typeauthorizationcard_id)

Update overseas usage activation

This API is used to activate or deactivate a specified card's ability to be used overseas. Cards can be activated for overseas usage permanently or for a set period of time.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new
body = SwaggerClient::OverseasCardUsageRequest.new # OverseasCardUsageRequest | 
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
card_id = 'card_id_example' # String | Unique Id of the card for activation or de-activation.


begin
  #Update overseas usage activation
  api_instance.v1_cards_card_id_overseas_usage_put(bodyuuidacceptclient_idcontent_typeauthorizationcard_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->v1_cards_card_id_overseas_usage_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OverseasCardUsageRequest**](OverseasCardUsageRequest.md)|  | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **card_id** | **String**| Unique Id of the card for activation or de-activation. | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_cards_get**
> CardListingResponse v1_cards_get(authorization, client_id, uuid, accept, card_function)

Retrieve all cards

This API is used to retrieve all the credit card numbers and correponding details of the customers who authorized the application.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
client_id = 'client_id_example' # String | client id generated during consumer onboarding
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
card_function = 'card_function_example' # String | Card function. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardFunction} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values.


begin
  #Retrieve all cards
  result = api_instance.v1_cards_get(authorization, client_id, uuid, accept, card_function)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->v1_cards_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **client_id** | **String**| client id generated during consumer onboarding | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **card_function** | **String**| Card function. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardFunction} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | 

### Return type

[**CardListingResponse**](CardListingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **v1_credit_cards_card_id_supplementary_applications_post**
> SupplementaryCardResponse v1_credit_cards_card_id_supplementary_applications_post(authorizationuuidclient_idcard_id, opts)

Supplementary Card Application

This API is used to authorize Citi Customer to add a Supplementary card to their existing primary card.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
client_id = 'client_id_example' # String | Client ID generated during application registration.
card_id = 'card_id_example' # String | Primary card id in encrypted format.
opts = { 
  body: SwaggerClient::SupplementaryCardRequest.new # SupplementaryCardRequest | 
}

begin
  #Supplementary Card Application
  result = api_instance.v1_credit_cards_card_id_supplementary_applications_post(authorizationuuidclient_idcard_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->v1_credit_cards_card_id_supplementary_applications_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **card_id** | **String**| Primary card id in encrypted format. | 
 **body** | [**SupplementaryCardRequest**](SupplementaryCardRequest.md)|  | [optional] 

### Return type

[**SupplementaryCardResponse**](SupplementaryCardResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_credit_cards_credit_limits_post**
> CreditLimitIncreaseResponse v1_credit_cards_credit_limits_post(bodyuuidacceptclient_idcontent_typeauthorization)

Request credit limit increase

This API is used to request for a permanent or temporary credit limit increase on credit card.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new
body = SwaggerClient::CreditLimitIncreaseRequest.new # CreditLimitIncreaseRequest | 
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.


begin
  #Request credit limit increase
  result = api_instance.v1_credit_cards_credit_limits_post(bodyuuidacceptclient_idcontent_typeauthorization)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->v1_credit_cards_credit_limits_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreditLimitIncreaseRequest**](CreditLimitIncreaseRequest.md)|  | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 

### Return type

[**CreditLimitIncreaseResponse**](CreditLimitIncreaseResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json







---

# Demographics.md

# SwaggerClient::Demographics

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nationality** | **String** | Applicant&#x27;s nationality. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. | 
**date_of_birth** | **Date** | Applicant&#x27;s date of birth in  ISO 8601 date format YYYY-MM-DD | 





---

# DisbursementOption.md

# SwaggerClient::DisbursementOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disbursement_option** | **String** | Provide the list of the options available to receive the disbursement of loan amount. Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description. | 
**address** | [**Address**](Address.md) |  | [optional] 
**external_bank_details** | [**ExternalBankDetails**](ExternalBankDetails.md) |  | [optional] 
**personal_account_details** | [**Array&lt;PersonalAccountDetails&gt;**](PersonalAccountDetails.md) |  | [optional] 
**payee_account_details** | [**Array&lt;PayeeAccountDetails&gt;**](PayeeAccountDetails.md) |  | [optional] 





---

# DisbursementOptions.md

# SwaggerClient::DisbursementOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disbursement_option** | **String** | List of options available to receive the disbursement of loan amount Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description. | 
**external_bank_details** | [**ExternalBankDetails**](ExternalBankDetails.md) |  | [optional] 
**personal_account_details** | [**Array&lt;PersonalAccountDetails&gt;**](PersonalAccountDetails.md) |  | [optional] 
**payee_account_details** | [**Array&lt;PayeeAccountDetails&gt;**](PayeeAccountDetails.md) |  | [optional] 





---

# DisbursementOptionsResponse.md

# SwaggerClient::DisbursementOptionsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disbursement_options** | [**Array&lt;DisbursementOption&gt;**](DisbursementOption.md) |  | 





---

# DisplayApplicantDetails.md

# SwaggerClient::DisplayApplicantDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**ECMName**](ECMName.md) |  | 
**address** | [**Array&lt;ECMAddress&gt;**](ECMAddress.md) |  | [optional] 





---

# Document.md

# SwaggerClient::Document

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_format** | **String** | The format for the document. | [optional] 
**encode_type** | **String** | Image Encoding Type e.g. base16, base64 | [optional] 
**data_payload** | **String** | This field contains binary data for the statement. | [optional] 





---

# DocumentDetails.md

# SwaggerClient::DocumentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statement_id** | **String** | Unique identifier for the tax statement document. | [optional] 
**statement_type** | **String** | Type of a tax statement. | [optional] 
**statement_posting_date** | **Date** | Date on which this tax statement was generated. Format should be MM/DD/YYYY. | [optional] 
**primary_user_indicator** | **String** | This field is used for identifier for what type of user( primary or authorized) tax statement is being generated. | [optional] 
**statement_year** | **Integer** | It represents document tax year. | [optional] 





---

# Documents.md

# SwaggerClient::Documents

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_details** | [**Array&lt;DocumentDetails&gt;**](DocumentDetails.md) |  | [optional] 





---

# DomesticTransaction.md

# SwaggerClient::DomesticTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**atm_transaction_limit_toggle_indicator** | **String** | DomesticSingleATMTransactionLimitToggleFlag | [optional] 
**atm_transaction_limit_amount** | **Float** | DomesticSingleATMTransactionLimit | [optional] 
**contactless_txn_limit_toggle_indicator** | **String** | DomesticSingleContactlessTransactionLimitToggleFlag | [optional] 
**contactless_transaction_limit_amount** | **Float** | DomesticSingleContactlessTransactionLimit | [optional] 
**contact_pos_txn_limit_toggle_indicator** | **String** | DomesticSingleContactPOSTransactionLimitToggleFlag | [optional] 
**contact_pos_transaction_limit_amount** | **Float** | DomesticSingleContactPOSTransactionLimit | [optional] 
**non_pos_txn_limit_toggle_indicator** | **String** | DomesticSingleNonPOSTransactionLimitToggleFlag | [optional] 
**non_pos_transaction_limit_amount** | **Float** | DomesticSingleNonPOSTransactionLimit | [optional] 





---

# ECMAdditionalData.md

# SwaggerClient::ECMAdditionalData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_code** | **String** | Fee code that applied to the requested product | [optional] 
**country_specific_group** | [**ECMCountrySpecificGroup**](ECMCountrySpecificGroup.md) |  | [optional] 
**introducer_id** | **String** | Unique identifier associated with the introducer who had referred the applicant. | [optional] 
**referral_tracking** | [**ReferralTracking**](ReferralTracking.md) |  | [optional] 
**media_id** | **String** | The media ID will be used to determine which offer/campaign banner was clicked when the customer has submitted the application | [optional] 





---

# ECMAdditionalDataUpdate.md

# SwaggerClient::ECMAdditionalDataUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cash_pin_flag** | **BOOLEAN** | Indicates whether the customer wants a separate cash PIN. | [optional] 
**utility_bill_details** | [**UtilityBillDetails**](UtilityBillDetails.md) |  | [optional] 
**billing_cycle_day** | **String** | Day of each month for the bill payment. This is a reference data field. Please use /v1/utilities/referenceData/{billingCycleDay} resource to get valid value of this field with description. | [optional] 
**application_reference_id** | **String** | Unique reference ID associated with the application | [optional] 
**printing_serial_number** | **String** | This field refers to the unique number for each application to be identified by COLA and printed in PDF form.It enables to identify the customer in case the customer could not complete filling his/her details and was dropped-off in between | [optional] 
**account_fund_source** | **String** | Primary source from which this account will be funded. This is a reference data field. Please use /v1/utilities/referenceData/{accountFundSource} resource to get valid value of this field with description. | [optional] 
**media_id** | **String** | The media ID will be used to determine which offer/campaign banner was clicked when the customer has submitted the application | [optional] 
**referral_tracking** | [**ReferralTracking**](ReferralTracking.md) |  | [optional] 





---

# ECMAddress.md

# SwaggerClient::ECMAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **String** | Address line 1. | [optional] 
**address_line2** | **String** | Address line 2. | [optional] 
**address_line3** | **String** | Address line 3. | [optional] 
**address_line4** | **String** | Address line 4. | [optional] 





---

# ECMAddressUpdate.md

# SwaggerClient::ECMAddressUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_type** | **String** | Type of address. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**address_line1** | **String** | Address line 1 | [optional] 
**address_line2** | **String** | Address line 2 | [optional] 
**postal_code** | **String** | Postal/ZIP code | [optional] 
**country_code** | **String** | ISO country code. This is a reference data field. Please use /v1/utilities/referenceData/{country} resource to get valid value of this field with description. | [optional] 





---

# ECMApplicant.md

# SwaggerClient::ECMApplicant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**ECMName**](ECMName.md) |  | [optional] 
**demographics** | [**ECMDemographics**](ECMDemographics.md) |  | [optional] 
**email** | [**Array&lt;ECMEmail&gt;**](ECMEmail.md) |  | [optional] 
**phone** | [**Array&lt;ECMPhone&gt;**](ECMPhone.md) |  | [optional] 
**identification_document_details** | [**Array&lt;ECMIdentificationDocumentDetails&gt;**](ECMIdentificationDocumentDetails.md) |  | [optional] 
**additional_data** | [**ECMAdditionalData**](ECMAdditionalData.md) |  | [optional] 
**consent_details** | [**Array&lt;ECMConsentDetails&gt;**](ECMConsentDetails.md) |  | [optional] 
**partner_customer_details** | [**ECMPartnerCustomerDetails**](ECMPartnerCustomerDetails.md) |  | [optional] 
**student_indicator** | **BOOLEAN** | Indicates if the applicant is a student.Valid values are Yes or No | [optional] 





---

# ECMApplicantUpdate.md

# SwaggerClient::ECMApplicantUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**ECMNameUpdate**](ECMNameUpdate.md) |  | [optional] 
**demographics** | [**ECMDemographicsUpdate**](ECMDemographicsUpdate.md) |  | [optional] 
**education** | [**ECMEducationUpdate**](ECMEducationUpdate.md) |  | [optional] 
**identification_document_details** | [**Array&lt;ECMIdentificationDocumentDetailsUpdate&gt;**](ECMIdentificationDocumentDetailsUpdate.md) |  | [optional] 
**employment_details** | [**Array&lt;ECMEmploymentDetailsUpdate&gt;**](ECMEmploymentDetailsUpdate.md) |  | [optional] 
**phone** | [**Array&lt;ECMPhoneUpdate&gt;**](ECMPhoneUpdate.md) |  | [optional] 
**address** | [**Array&lt;ECMAddressUpdate&gt;**](ECMAddressUpdate.md) |  | [optional] 
**contact_preference** | [**ECMContactPreferenceUpdate**](ECMContactPreferenceUpdate.md) |  | [optional] 
**contact_consent** | [**ECMContactConsentUpdate**](ECMContactConsentUpdate.md) |  | [optional] 
**additional_data** | [**ECMAdditionalDataUpdate**](ECMAdditionalDataUpdate.md) |  | [optional] 
**marketing_consent** | [**MarketingConsent**](MarketingConsent.md) |  | [optional] 
**parent_information** | [**ECMParentInformationUpdate**](ECMParentInformationUpdate.md) |  | [optional] 
**financial_information** | [**ECMFinancialInformationUpdate**](ECMFinancialInformationUpdate.md) |  | [optional] 
**consent_details** | [**Array&lt;ECMConsentDetails&gt;**](ECMConsentDetails.md) |  | [optional] 





---

# ECMConsentDetails.md

# SwaggerClient::ECMConsentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_type** | **String** | Applicants consent types. This is a reference data field. Please use /v1/utilities/referenceData/{consentType} resource to get valid value of this field with description. | [optional] 
**consent_given_flag** | **BOOLEAN** | Consent flag. Valid values: true and false | [optional] 





---

# ECMContactConsentUpdate.md

# SwaggerClient::ECMContactConsentUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok_to_call** | **BOOLEAN** | Applicants consent for receiving phone calls. Valid values: true and false | [optional] 
**ok_to_mail** | **BOOLEAN** | Applicants consent for receiving mails. Valid values: true and false | [optional] 





---

# ECMContactPreferenceUpdate.md

# SwaggerClient::ECMContactPreferenceUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_statement_enrollment_flag** | **BOOLEAN** | Applicants subscription for receiving statement over email. Valid values: true and false | [optional] 
**e_statement_enrollment_option** | **String** | Customer preference for eStatement. This is a reference data field. Please use /v1/utilities/referenceData/{eStatementEnrollmentOption} resource to get valid value of this field with description. | [optional] 





---

# ECMCountrySpecificGroup.md

# SwaggerClient::ECMCountrySpecificGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**life_style_code** | **String** | Lifestyle preference of the customer. This is a reference data field. Please use /v1/apac/utilities/referenceData/{lifeStyleCode} resource to get valid value of this field with description. You can use lifeStyleCode as the referenceCode parameter to retrieve the values | [optional] 





---

# ECMCreditCardProduct.md

# SwaggerClient::ECMCreditCardProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gift_code** | **String** | A unique code that identifies the gift offered along with the product | [optional] 





---

# ECMCreditCardProductUpdate.md

# SwaggerClient::ECMCreditCardProductUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | **String** | Billing address of the applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**card_delivery_address** | **String** | Card delivery address of the applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**pin_delivery_address** | **String** | Delivery address for card pin of the applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 





---

# ECMDemographics.md

# SwaggerClient::ECMDemographics

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gender** | **String** | Gender/sex. This is a reference data field. Please use /v1/utilities/referenceData/{gender} resource to get valid value of this field with description. | [optional] 
**date_of_birth** | **Date** | Applicants date of birth in ISO 8601 date format YYYY-MM-DD | [optional] 
**nationality** | **String** | Applicants nationality. This is a reference data field. Please use /v1/utilities/referenceData/{country} resource to get valid value of this field with description. | [optional] 





---

# ECMDemographicsUpdate.md

# SwaggerClient::ECMDemographicsUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marital_status** | **String** | Applicants marital status. This is a reference data field. Please use /v1/utilities/referenceData/{maritalStatus} resource to get valid value of this field with description. | [optional] 
**residency_status** | **String** | Indicate status of residence. This is a reference data field. Please use /v1/utilities/referenceData/{residenceStatus} resource to get valid value of this field with description. | [optional] 
**correspondence_language_code** | **String** | Code for correspondence language of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{spokenLanguageCode} resource to get valid value of this field with description. | [optional] 
**place_of_birth** | **String** | Applicants place of birth | [optional] 





---

# ECMEducationUpdate.md

# SwaggerClient::ECMEducationUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**highest_education_level** | **String** | Highest education level of the applicant. This is a reference data field. Please use /v1/utilities/referenceData/{highestEducationLevel} resource to get valid value of this field with description. | [optional] 
**institution_name** | **String** | Institution name. This is required if applicant is a student | [optional] 





---

# ECMEmail.md

# SwaggerClient::ECMEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **String** | Email Address of the Applicant | [optional] 





---

# ECMEmploymentDetailsUpdate.md

# SwaggerClient::ECMEmploymentDetailsUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employer_name** | **String** | Name of the employer. | [optional] 
**employer_registration_number** | **String** | Employer registration number | [optional] 
**occupation_code** | **String** | Occupation code. This is a reference data field. Please use /v1/utilities/referenceData/{occupationCode} resource to get valid value of this field with description. | [optional] 
**other_occupation_description** | **String** | Other Occupation details entered by the Applicant.This is applicable if Applicant selects Others from the occupation Code drop down | [optional] 
**industry_code** | **String** | Code of the industry of employment. This is a reference data field. Please use /v1/utilities/referenceData/{industryCode} resource to get valid value of this field with description. | [optional] 
**other_industry_description** | **String** | Other Industry details entered by the Applicant.This is applicable if Applicant selects Others from the industry code drop down | [optional] 
**employment_duration_in_years** | **Integer** | Employment duration in years | [optional] 
**employment_duration_in_months** | **Integer** | Employment duration in months | [optional] 
**previous_employer_name** | **String** | Name of the previous employer. | [optional] 
**months_in_previous_employment** | **Integer** | Months spent in the previous employment | [optional] 
**years_in_previous_employment** | **Integer** | Years spent in the previous employment | [optional] 
**email_address** | **String** | Employers email address | [optional] 
**employment_status** | **String** | Status of the employment.This is a reference data field. Please use /v1/utilities/referenceData/{employmentStatus} resource to get valid value of this field with description. | [optional] 





---

# ECMFinancialInformationUpdate.md

# SwaggerClient::ECMFinancialInformationUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**income_details** | [**Array&lt;IncomeDetails&gt;**](IncomeDetails.md) |  | [optional] 





---

# ECMIdentificationDocumentDetails.md

# SwaggerClient::ECMIdentificationDocumentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_type** | **String** | Type of Identification document. This is a reference data field. Please use /v1/utilities/referenceData/{idType} resource to get valid values of this field with descriptions | [optional] 
**id_number** | **String** | Unique identifier of identification document. | [optional] 
**is_primary_id** | **BOOLEAN** | Flag to mark primary identification document. Valid values: true and false | [optional] 





---

# ECMIdentificationDocumentDetailsUpdate.md

# SwaggerClient::ECMIdentificationDocumentDetailsUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_issue_date** | **String** | Issuance date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_place** | **String** | Identification document issuance place | [optional] 
**id_status** | **String** | Identification document issuance status | [optional] 
**id_issue_country** | **String** | Country of issuance. This is a reference data field. Please use /v1/utilities/referenceData/{country} resource to get valid value of this field with description. | [optional] 
**id_type** | **String** | Type of Identification document. This is a reference  data field. Please use /v1/utilities/referenceData/{idType} resource to get valid values of this field with descriptions | [optional] 
**id_number** | **String** | Unique identifier of identification document. Ex: Passport Number | [optional] 





---

# ECMName.md

# SwaggerClient::ECMName

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salutation** | **String** | Salutation. This is a reference data field. Please use /v1/utilities/referenceData/{salutation} resource to get valid value of this field with description. | [optional] 
**given_name** | **String** | Given/first name of the applicant | 
**middle_name** | **String** | Middle name of the applicant | [optional] 
**surname** | **String** | Surname/last name of the applicant | [optional] 





---

# ECMNameUpdate.md

# SwaggerClient::ECMNameUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_english_given_name** | **String** | Local given name in English | [optional] 
**local_english_surname** | **String** | Local surname in English | [optional] 





---

# ECMParentInformationUpdate.md

# SwaggerClient::ECMParentInformationUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_name** | [**ECMParentNameUpdate**](ECMParentNameUpdate.md) |  | [optional] 





---

# ECMParentNameUpdate.md

# SwaggerClient::ECMParentNameUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | **String** | Full name of the Parent. | [optional] 





---

# ECMPartnerCustomerDetails.md

# SwaggerClient::ECMPartnerCustomerDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_customer_id** | **String** | Unique customer Id associated with the partner | [optional] 





---

# ECMPhone.md

# SwaggerClient::ECMPhone

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_type** | **String** | The type of phone. Ex:OFFICE, HOME, MOBILE, PRIMARY_MOBILE, FAX. This is a reference data field. Please use /v1/utilities/referenceData/{phoneType} resource to get valid value of this field with description. | 
**phone_country_code** | **String** | Country code of phone number | 
**phone_number** | **String** | Applicants phone number | 
**area_code** | **String** | The area code of phone number | [optional] 
**extension** | **String** | Extension of telephone number | [optional] 





---

# ECMPhoneUpdate.md

# SwaggerClient::ECMPhoneUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_type** | **String** | The type of phone. Ex:OFFICE, HOME, MOBILE, PRIMARY_MOBILE, FAX. This is a reference data field. Please use /v1/utilities/referenceData/{phoneType} resource to get valid value of this field with description. | [optional] 
**phone_country_code** | **String** | Country code of phone number | [optional] 
**phone_number** | **String** | Applicants phone number | [optional] 
**extension** | **String** | Extension of telephone number | [optional] 





---

# ECMProduct.md

# SwaggerClient::ECMProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product. | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing organization name | 
**logo** | **String** | Product logo to identify the product | 
**credit_card_product** | [**ECMCreditCardProduct**](ECMCreditCardProduct.md) |  | [optional] 





---

# ECMProductUpdate.md

# SwaggerClient::ECMProductUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | **String** | Tenure of loan. This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid value of this field with description. | [optional] 
**credit_card_product** | [**ECMCreditCardProductUpdate**](ECMCreditCardProductUpdate.md) |  | [optional] 





---

# EasyPaymentPlan.md

# SwaggerClient::EasyPaymentPlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | **String** | Tenure of loan in months. | 
**effective_interest_rate** | **Float** | The interest rate applicable on loan amount. | [optional] 
**annual_percentage_rate** | **Float** | Interest rate for a whole year. This includes any fees or additional cost associated. | [optional] 
**installment_amount** | **Float** | Installment amount to be paid by customer in order to repay the loan. | [optional] 
**one_time_processing_fee_indicator** | **String** | One time processing fee indicator. Valid values : PERCENTAGE, FIXED_AMOUNT. This is a reference data field. Please use /v1/apac/utilities/referenceData/{oneTimeProcessingFeeIndicator} resource to get valid value of this field with description. | [optional] 
**one_time_processing_fee_amount** | **Float** | Fee charged as part of one time processing. | [optional] 
**one_time_processing_fee_percentage** | **Float** | Percentage of one time processing fee charged. | [optional] 
**offer_indicator** | **String** | This is to indicate if the offer is rate/fee/hybrid based. This is a reference data field. Please use /v1/utilities/referenceData/{offerIndicator} resource to get valid value of this field with description. | 





---

# EasyPaymentPlansEligibilityInquiryResponse.md

# SwaggerClient::EasyPaymentPlansEligibilityInquiryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unbilled_transaction** | [**Array&lt;UnbilledTransaction&gt;**](UnbilledTransaction.md) |  | [optional] 
**statement** | [**Statement**](Statement.md) |  | [optional] 
**next_start_index** | **String** | The next start index that indicates the next set of records to be fetched, if there are available. Typically, this value should be populated if the first response has the value of nextStartIndex. | [optional] 





---

# EasyPaymentPlansTransactionEligibilityResponse.md

# SwaggerClient::EasyPaymentPlansTransactionEligibilityResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | **String** | Tenure of loan in months. | 
**effective_interest_rate** | **Float** | The interest rate applicable on loan amount. | 
**annual_percentage_rate** | **Float** | Interest rate for a whole year. This includes any fees or additional cost associated. | [optional] 
**installment_amount** | **Float** | Installment amount to be paid by customer in order to repay the loan. | [optional] 
**one_time_processing_fee_indicator** | **String** | One time processing fee indicator. Valid values : PERCENTAGE, FIXED_AMOUNT. This is a reference data field. Please use /v1/apac/utilities/referenceData/{oneTimeProcessingFeeIndicator} resource to get valid value of this field with description. | [optional] 
**one_time_processing_fee_amount** | **Float** | Fee charged as part of one time processing. | [optional] 
**one_time_processing_fee_percentage** | **Float** | Percentage of one time processing fee charged. | [optional] 
**offer_indicator** | **String** | This is to indicate if the offer is rate/fee/hybrid based. This is a reference data field. Please use /v1/utilities/referenceData/{offerIndicator} resource to get valid value of this field with description. | 





---

# Education.md

# SwaggerClient::Education

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**highest_education_level** | **String** | Highest education level of the applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{highestEducationLevel} resource to get possible values of this field with descriptions. You can use highestEducationLevel field name as the referenceCode parameter to retrieve the values. | [optional] 
**year_of_graduation** | **String** | Year of completing graduation. This is required if prospect is a student | [optional] 
**student_id** | **String** | Unique ID of the student. This is required if prospect is a student | [optional] 
**university** | **String** | Student studying in university. This is a reference data field. Please use /v1/apac/utilities/referenceData/{universityCode} resource to get possible values of this field with descriptions. You can use university field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# EligibleForEqualPaymentPlan.md

# SwaggerClient::EligibleForEqualPaymentPlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligible_for_equal_payment_plan** | **String** | The EPP allowed indicator. This is applicable for credit cards transactions only. This is a reference data field. Please use /v1/apac/utilities/referenceData/{eligibleForEqualPaymentPlan} resource to get possible value of This field with description. | 





---

# Email.md

# SwaggerClient::Email

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **String** | Email ID | 
**ok_to_email** | **BOOLEAN** | Flag to indicate whether prospect wants to receive emails or not. Valid values: true and false | [optional] 
**is_prerferred_email_address** | **BOOLEAN** | Indicates whether this email id is preferred email for all communications. Valid values: true and false | [optional] 





---

# EmailAdd.md

# SwaggerClient::EmailAdd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_type** | **String** | The type of email.  This is a reference data field. Please use /v1/utilities/referenceData/{emailType} resource to get valid value of this field with description. | [optional] 
**email_address** | **String** | Applicant&#x27;s email address | 
**ok_to_email** | **BOOLEAN** | Applicant&#x27;s consent for receiving email. Valid values: true and false | [optional] 
**is_preferred_email_address** | **BOOLEAN** | Flag to mark preferred email. Valid values: true and false | [optional] 





---

# EmploymentDetails.md

# SwaggerClient::EmploymentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupation_code** | **String** | Occupation code. This is a reference data field. Please use /utilities/referenceData/{occupationCode} resource to get valid values of this field with descriptions. | 





---

# EppAmortizationSchedule.md

# SwaggerClient::EppAmortizationSchedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installment_number** | **String** | Installment number | 
**installment_amount** | **Float** | Installment amount to be payed by customer in order to repay the loan. | 
**principal_amount** | **Float** |  The portion of the Principal Amount Paid for the loan. | 
**installment_interest_amount** | **Float** | The interest  amount to be paid as installment. | 
**outstanding_principal_amount** | **Float** | Principal amount component that is yet to be paid by borrower for the loan. | [optional] 
**installment_date** | **String** | Installment date in  MM/YYYY format | [optional] 





---

# EppLoanBooking.md

# SwaggerClient::EppLoanBooking

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_amount** | **Float** | Loan amount for easy payment plan booking. | 
**reference_id** | **String** | Reference Id to uniquely identify the transaction. Applicable only for EPP of type TRANSACTION. | [optional] 
**transaction_authorization_code** | **String** | Transaction authorization code is a unique to a sales credit card transaction to indicate that the sale has been authorized. | [optional] 





---

# EppLoanBookingConfirmationRequest.md

# SwaggerClient::EppLoanBookingConfirmationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | 





---

# EppLoanBookingConfirmationResponse.md

# SwaggerClient::EppLoanBookingConfirmationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epp_transaction** | [**EppTransaction**](EppTransaction.md) |  | 





---

# EppLoanBookingRequest.md

# SwaggerClient::EppLoanBookingRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epp_loan_booking_type** | **String** | Type of the easy payment plan loan booking.This is a reference data field. Please use /v1/apac/utilities/referenceData/{eppLoanBookingType} resource to get possible value of this field with description. | 
**tenor** | [**BigDecimal**](BigDecimal.md) | Tenure of loan in months. | 
**epp_loan_booking** | [**Array&lt;EppLoanBooking&gt;**](EppLoanBooking.md) | EPP Loan Booking Pre-process | 





---

# EppLoanBookingResponse.md

# SwaggerClient::EppLoanBookingResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epp_transaction** | [**EppTransaction**](EppTransaction.md) |  | 





---

# EppOffers.md

# SwaggerClient::EppOffers

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | [**BigDecimal**](BigDecimal.md) | Tenure of loan in months. | 
**effective_interest_rate** | **Float** | The interest rate applicable on loan amount. | 
**annual_percentage_rate** | **Float** | Interest rate for a whole year. This includes any fees or additional cost associated. | [optional] 
**installment_amount** | **Float** | Installment amount to be paid by customer in order to repay the loan. | 
**one_time_processing_fee_indicator** | **String** | One time processing fee indicator. Valid values : PERCENTAGE, FIXED_AMOUNT. This is a reference data field. Please use /v1/apac/utilities/referenceData/{oneTimeProcessingFeeIndicator} resource to get valid value of this field with description. | [optional] 
**one_time_processing_fee_amount** | **Float** | Fee charged as part of one time processing. | [optional] 
**one_time_processing_fee_percentage** | **Float** | Percentage of one time processing fee charged. | [optional] 
**offer_indicator** | **String** | This is to indicate if the offer is rate/fee/hybrid based. This is a reference data field. Please use /v1/utilities/referenceData/{offerIndicator} resource to get valid value of this field with description. | 
**total_interest_amount** | **Float** | This is the total interest amount for the loan account. | [optional] 
**total_repayment_amount** | **Float** | This is the total amount to be paid back which includes principal, interest and any fees incurred. | [optional] 
**monthly_servicing_fee_amount** | **Float** | This the applicable monthly servicing/maintenance fee for administrating the loan which is included in the monthly installment amount. | [optional] 
**interest_calculation_method** | **String** | Interest calculation method. This is a reference data field. Please use /v1/utilities/referenceData/{interestCalculationMethod} resource to get valid value of this field with description. | [optional] 





---

# EppRepaymentScheuleResponse.md

# SwaggerClient::EppRepaymentScheuleResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epp_amortization_schedule** | [**Array&lt;EppAmortizationSchedule&gt;**](EppAmortizationSchedule.md) |  | [optional] 
**total_loan_cost** | **Float** | Principal and total Interest amount to be paid by borrower for the loan. | [optional] 





---

# EppRequest.md

# SwaggerClient::EppRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epp_loan_booking_type** | **String** | Type of the easy payment plan loan booking.This is a reference data field. Please use /v1/apac/utilities/referenceData/{eppLoanBookingType} resource to get possible value of this field with description. | 
**tenor** | [**BigDecimal**](BigDecimal.md) | Tenure of loan in months. | [optional] 
**loan_amount** | **Float** | Eligible loan amount. Applicable only for EPP of type STATEMENT. | [optional] 
**transaction_reference_ids** | [**Array&lt;TransactionReferenceId&gt;**](TransactionReferenceId.md) |  | [optional] 
**transaction_authorization_codes** | [**Array&lt;TransactionAuthorizationCodes&gt;**](TransactionAuthorizationCodes.md) |  | [optional] 





---

# EppResponse.md

# SwaggerClient::EppResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epp_offers** | [**Array&lt;EppOffers&gt;**](EppOffers.md) |  | [optional] 





---

# EppTransaction.md

# SwaggerClient::EppTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_id** | **String** | Reference Id to uniquely identify the loan.  | 
**installment_amount** | **Float** | Installment amount to be paid by customer in order to repay the loan. | [optional] 
**principal_amount** | **Float** | The portion of the Principal Amount Paid for the loan. | [optional] 
**installment_interest_amount** | **Float** | The interest  amount to be paid as installment. | [optional] 
**initial_interest_amount** | **Float** | Initial interest amount charged to customer from the epp booking date to the first installment start date | [optional] 
**statement_unpaid_balance_amount** | **Float** | This field indicates the remaining statement balance amount that remains due and payable. | [optional] 





---

# EqualPaymentPlan.md

# SwaggerClient::EqualPaymentPlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | **String** | Tenure of loan. This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid value of this field with description. | [optional] 
**bank_code** | **String** | This field is to indicate the bank code to which the amount will be disbursed. | [optional] 
**amount_to_transfer** | **Float** | Amount to Transfer | [optional] 
**account_name** | **String** | Account name to which the amount will be disbursed | [optional] 
**campaign_code** | **String** | Code of the campaign offered to the channel. | [optional] 
**disbursement_type** | **String** | DisbursementType . This is a reference data field. Please use /v1/utilities/referenceData/{DisbursementOption} resource to get valid value of this field with description. | [optional] 
**display_account_number** | **String** | Masked account number or reference to which the amount will be disbursed | [optional] 





---

# EqualPaymentPlanUpdate.md

# SwaggerClient::EqualPaymentPlanUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | **String** | Tenure of loan. This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid value of this field with description. | [optional] 
**bank_code** | **String** | This field is to indicate the bank code to which the amount will be disbursed. | [optional] 
**amount_to_transfer** | **Float** | Amount to Transfer | [optional] 
**account_name** | **String** | Account name to which the amount will be disbursed | [optional] 
**campaign_code** | **String** | Code of the campaign offered to the channel. | [optional] 
**disbursement_type** | **String** | DisbursementType . This is a reference data field. Please use /v1/utilities/referenceData/{DisbursementOptionGCG} resource to get valid value of this field with description. | [optional] 
**account_number** | **String** | Account number or reference to which the amount will be disbursed | [optional] 





---

# ErrorResponse.md

# SwaggerClient::ErrorResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Error code | 
**details** | **String** | Verbose explanation of the error | [optional] 
**location** | **String** | The name of the field that resulted in the error | [optional] 
**type** | **String** | error type | 
**more_info** | **Object** | URI to documentation of the error | [optional] 





---

# ErrorResponseList.md

# SwaggerClient::ErrorResponseList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Must be one of the following: 0001 – Account not able to be found | 
**title** | **String** | Must be one of the following: Invalid account | 
**detail** | **String** | ID of the account not found | 
**meta** | **Object** | Optional additional data for specific error types | [optional] 





---

# EvaluateCustomerEligibilityAssessmentCheckPreLoginResponse.md

# SwaggerClient::EvaluateCustomerEligibilityAssessmentCheckPreLoginResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_name** | **String** | This refers to the name of the customer. | 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_group** | **String** | Account Group associated with the source Account.This is a reference data field. Please use /v1/utilities/referenceData/{accountGroup} resource to get valid value of this field with description. | [optional] 
**maximum_eligible_loan_amount** | **Float** | The maximum amount of credit that extend to a customer | 
**minimum_eligible_loan_amount** | **Float** | The minimum amount of credit that extend to a customer | 
**offer_indicator** | **String** | Indicator to determine if offer is rate or fee based. This is a reference data field. Please use /v1/apac/utilities/referenceData/{offerIndicator} resource to get valid value of this field with description. | 
**loan_booking_plan** | [**Array&lt;LoanBookingPlan&gt;**](LoanBookingPlan.md) |  | [optional] 
**lop_category** | **String** | Indicator to determine the type of LOP Offer. This is a reference data field. Please use /v1/utilities/referenceData/{lopCategory} resource to get valid value of this field with description. | [optional] 





---

# ExecuteApplicationProcessingUnsecuredLoanTopupOfferAcceptanceAndSubmissionRequest.md

# SwaggerClient::ExecuteApplicationProcessingUnsecuredLoanTopupOfferAcceptanceAndSubmissionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_topup_amount** | **Float** | Loan top-up Amount accepted by customer | 
**tenor** | **String** | Tenure of loan. This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid value of this field with description. | 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 





---

# ExistingCustomerCreditProductApplicationAddRequest.md

# SwaggerClient::ExistingCustomerCreditProductApplicationAddRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**ECMProduct**](ECMProduct.md) |  | [optional] 
**applicant** | [**ECMApplicant**](ECMApplicant.md) |  | [optional] 
**sales_agent_details** | [**SalesAgentDetails**](SalesAgentDetails.md) |  | [optional] 
**marketing_campaign_offer_details** | [**MarketingCampaignOfferDetails**](MarketingCampaignOfferDetails.md) |  | [optional] 
**sub_card_type** | **String** | Type of existing card of customer. | [optional] 
**display_card_number** | **String** | Last 4 digits of card number | [optional] 
**control_flow_id** | **String** | Control Flow Id | 





---

# ExistingCustomerCreditProductApplicationAddResponse.md

# SwaggerClient::ExistingCustomerCreditProductApplicationAddResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **String** | Unique identifier for the application | 
**application_stage** | **String** | Application stage of an Application | 
**survivor_line_required_flag** | **BOOLEAN** | This indicates whether customer requires a Survivor Line product (Credit Card) or not. Valid values: true and false | [optional] 
**existing_credit_limit** | **Float** | Credit limit of customer for the existing credit card | [optional] 
**display_applicant_details** | [**DisplayApplicantDetails**](DisplayApplicantDetails.md) |  | 
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | [optional] 





---

# ExistingCustomerCreditProductApplicationUpdateRequest.md

# SwaggerClient::ExistingCustomerCreditProductApplicationUpdateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**ECMProductUpdate**](ECMProductUpdate.md) |  | [optional] 
**survivor_product** | [**SurvivorProduct**](SurvivorProduct.md) |  | [optional] 
**applicant** | [**ECMApplicantUpdate**](ECMApplicantUpdate.md) |  | [optional] 
**sales_agent_details** | [**SalesAgentDetails**](SalesAgentDetails.md) |  | [optional] 
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | 





---

# ExistingCustomerCreditProductApplicationUpdateResponse.md

# SwaggerClient::ExistingCustomerCreditProductApplicationUpdateResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_stage** | **String** | Application stage of an Application | 





---

# ExistingLoanDetails.md

# SwaggerClient::ExistingLoanDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_type** | **String** | Loan Type.This is a reference data field. Please use /v1/utilities/referenceData/{loanType} resource to get valid value of this field with description. | [optional] 
**other_debt_obligation_type** | **String** | Other debt obligation type. Free text if others is selected under loan type. | [optional] 
**monthly_installment_amount** | **Float** | Monthly repayment amount | [optional] 
**outstanding_balance_amount** | **Float** | Balance Owing | [optional] 
**debt_ownership** | **String** | Nature debt ownership. Please use /v1/utilities/referenceData/{debtOwnership} resource to get valid value of this field with description. | [optional] 
**lender_name** | **String** | Name of the lender/non-banking financial institution. | [optional] 





---

# ExpenseDetails.md

# SwaggerClient::ExpenseDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expense_type** | **String** | Expense type. This is a reference data field. Please use /v1/utilities/referenceData/{expenseType} resource to get valid value of this field with description. | [optional] 
**expense_amount** | **Float** | Expenditure amount for an applicant | [optional] 
**frequency** | **String** | Expense Frequency. This is a reference data field. Please use /v1/utilities/referenceData/{frequency} resource to get valid value of this field with description. | [optional] 





---

# ExternalBankDetails.md

# SwaggerClient::ExternalBankDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_code** | **String** | This field is to indicate the bank code. Code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions code | 
**destination_account_id** | **String** | The destination account identifier in encrypted format.Typically, this is not displayed to the customer. | 
**display_destination_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 





---

# ExternalCreditCardDetails.md

# SwaggerClient::ExternalCreditCardDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_name** | **String** | Name of the bank issued the credit card. | [optional] 
**display_card_number** | **String** | Applicant&#x27;s other Credit Card Number in masked format, to be used for bill payments | [optional] 





---

# ExternalCreditCardDetailsAdd.md

# SwaggerClient::ExternalCreditCardDetailsAdd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_name** | **String** | Name of the bank issued the credit card. | [optional] 
**credit_card_number** | **String** | Other Credit Card Number of the applicant, to be used for bill payments | [optional] 





---

# FinalSubmitRequest.md

# SwaggerClient::FinalSubmitRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | 





---

# FinancialInformation.md

# SwaggerClient::FinancialInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expense_details** | [**Array&lt;ExpenseDetails&gt;**](ExpenseDetails.md) |  | [optional] 
**income_details** | [**Array&lt;IncomeDetails&gt;**](IncomeDetails.md) |  | [optional] 





---

# FinancialInformationAdd.md

# SwaggerClient::FinancialInformationAdd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_foreseeable_financial_changes** | **BOOLEAN** | Indicates whether any foreseeable changes in customer&#x27;s financial circumstances. | [optional] 
**non_bank_debt_obligation_flag** | **BOOLEAN** | Indicates if the applicant has any loan with any non-banking financial organization. | [optional] 
**expense_details** | [**Array&lt;ExpenseDetails&gt;**](ExpenseDetails.md) |  | [optional] 
**income_details** | [**Array&lt;IncomeDetails&gt;**](IncomeDetails.md) |  | [optional] 
**existing_loan_details** | [**Array&lt;ExistingLoanDetails&gt;**](ExistingLoanDetails.md) |  | [optional] 
**external_credit_card_details** | [**Array&lt;ExternalCreditCardDetailsAdd&gt;**](ExternalCreditCardDetailsAdd.md) |  | [optional] 
**self_employed_business_asset_value** | **String** | This field is used to capture the total assets of  the self employed business. This is applicable only for Self Employed Business/ Professionals. This is a reference data field. Please use /v1/utilities/referenceData/{selfEmployedBusinessAssetValue} resource to get valid value of this field with description. | [optional] 





---

# GroupBalance.md

# SwaggerClient::GroupBalance

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_currency_code** | **String** | The currency code for local country in ISO 4217 format | [optional] 
**local_currency_balance_amount** | **Float** | Summarized balances in local currency | [optional] 
**foreign_currency_code** | **String** | The foreign currency code for foreign country in ISO 4217 format | [optional] 
**foreign_currency_balance_amount** | **Float** | Summarized balances in foreign currency | [optional] 





---

# HistoryAndIntradayTransaction.md

# SwaggerClient::HistoryAndIntradayTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_indicator** | **String** | This field is used to indicate whether History or Current or All transactions records to be fetched. This is a reference data field. Please use /v1/utilities/referenceData/{activityIndicator} resource to get possible values of this field with descriptions. | [optional] 
**more_indicator** | **String** | This field is used for  pagination, it indicates that more records are available for retrieval. | [optional] 
**next_start_index** | **String** | For pagination - the starting index for retrieving the next page/batch of records. | [optional] 





---

# HistoryAndIntradayTransactionRecords.md

# SwaggerClient::HistoryAndIntradayTransactionRecords

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_date** | **Date** | Transaction date in ISO 8601  format YYYY-MM-DD | [optional] 
**merchant_name** | **String** | This field indicates the merchant Name | [optional] 
**merchant_location** | **String** | This filed indicates the Merchant Address | [optional] 
**transaction_status** | **String** | This field provides the status of the transaction. This is a reference data field. Please use /v1/utilities/referenceData/{transactionStatus} resource to get possible values of this field with descriptions. | [optional] 
**reason_description** | **String** | Decline Description- for declined transaction | [optional] 
**transaction_amount** | **Float** | Amount of funds the cardholder requested in source location of the transaction. | [optional] 
**transaction_currency_code** | **String** | transactionCurrencyCode. This is a reference data field. Please use /v1/utilities/referenceData/{transactionCurrencyCode} resource to get possible values of this field with descriptions | [optional] 
**billed_amount** | **Float** | Amount billed to the cardholder in the cardholder account currency | [optional] 
**billed_currency_code** | **String** | billedCurrencyCode. This is a reference data field. Please use /v1/utilities/referenceData/{billedCurrencyCode} resource to get possible values of this field with descriptions | [optional] 





---

# HistoryAndIntradayTransactions.md

# SwaggerClient::HistoryAndIntradayTransactions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_start_index** | **String** | For pagination - the starting index for retrieving the next page/batch of records. | [optional] 
**more_indicator** | **String** | This field indicates that more records are available for retrieval. | [optional] 
**number_of_transactions** | **Integer** | Number of Transactions | [optional] 
**history_and_intraday_transaction_records** | [**Array&lt;HistoryAndIntradayTransactionRecords&gt;**](HistoryAndIntradayTransactionRecords.md) |  | [optional] 





---

# IdentificationDocumentDetails.md

# SwaggerClient::IdentificationDocumentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_issue_state** | **String** | State from which identification document was issued.This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressState} resource to get valid value of this field with description. You can use addressState field name as the referenceCode parameter to retrieve the values. | [optional] 
**id_type** | **String** | Type of Identification document. This is a reference data field. Please use /v1/apac/utilities/referenceData/{idType} resource to get valid values of this field with descriptions | [optional] 
**id_issue_date** | **Date** | Issuance date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_expiry_date** | **Date** | Expiry date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_number** | **String** | Unique identifier of identification document. Ex: Passport Number | [optional] 
**id_issue_place** | **String** | Identification document issuance place | [optional] 
**id_issue_country** | **String** | Country of issuance. This is a reference data field. Please use /v1/apac/utilities/referenceData/{country} resource to get valid value of this field with description. You can use idIssueCountry field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# IdentificationDocumentDetailsAdd.md

# SwaggerClient::IdentificationDocumentDetailsAdd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_type** | **String** | Type of Identification document. This is a reference data field. Please use /v1/utilities/referenceData/{idType} resource to get valid values of this field with descriptions | [optional] 
**id_number** | **String** | Unique identifier of identification document. Ex: Passport Number | [optional] 
**id_expiry_date** | **Date** | Expiry date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_date** | **Date** | Issuance date of identification document in ISO 8601 date format YYYY-MM-DD | [optional] 
**id_issue_place** | **String** | Identification document issuance place | [optional] 
**id_status** | **String** | Identification document issuance status | [optional] 
**id_issue_state** | **String** | State from which identification document was issued.This is a reference data field. Please use /v1/utilities/referenceData/{addressState} resource to get valid value of this field with description. | [optional] 
**id_issue_country** | **String** | Country of issuance. This is a reference data field. Please use /v1/utilities/referenceData/{country} resource to get valid value of this field with description. | [optional] 
**is_primary_id** | **BOOLEAN** | Flag to mark primary identification document. Valid values: true and false | [optional] 
**reference_number** | **String** | Medicare reference number. | [optional] 
**middle_name** | **String** | Middle name printed on Medicare ID. | [optional] 
**color** | **String** | Color of Medicare ID. This is a reference data field. Please use /v1/apac/utilities/referenceData/{idCardColor} resource to get possible values of this field with descriptions. | [optional] 





---

# InPrincipleApprovalRequest.md

# SwaggerClient::InPrincipleApprovalRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | 





---

# InPrincipleApprovalResponse.md

# SwaggerClient::InPrincipleApprovalResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_stage** | **String** | Current stage of an application.This is a reference data field. Please use /v1/apac/utilities/referenceData/{applicationStage} resource to get possible value of this field with description. You can use applicationStage field name as the referenceCode parameter to retrieve the values. | 
**ipa_expiry_date** | **Date** | In principle approval expiration date in  ISO 8601 date format YYYY-MM-DD | [optional] 
**requested_product_decision** | [**Array&lt;RequestedProductDecision&gt;**](RequestedProductDecision.md) |  | [optional] 
**counter_offers** | [**Array&lt;CounterOffer&gt;**](CounterOffer.md) |  | [optional] 
**cross_sell_offers** | [**Array&lt;CrossSellOffer&gt;**](CrossSellOffer.md) |  | [optional] 





---

# IncomeDetails.md

# SwaggerClient::IncomeDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**income_type** | **String** | Income type. This is a reference data field. Please use /v1/utilities/referenceData/{incomeType} resource to get valid value of this field with description. | [optional] 
**fixed_amount** | **Float** | Fixed income amount of applicant | [optional] 
**variable_amount** | **Float** | Variable income amount of applicant | [optional] 
**frequency** | **String** | Income Frequency. This is a reference data field. Please use /v1/utilities/referenceData/{frequency} resource to get valid value of this field with description. | [optional] 





---

# InitiateApplicationProcessingUnsecuredLoanTopupRequest.md

# SwaggerClient::InitiateApplicationProcessingUnsecuredLoanTopupRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketing_campaign_offer** | [**MarketingCampaignOffer**](MarketingCampaignOffer.md) |  | [optional] 
**account_id** | **String** | Account number of customer in encrypted form. | [optional] 
**card_id** | **String** | Card number of customer in encrypted form. | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 
**requested_loan_amount** | **Float** | Requested loan amount | [optional] 
**loan_topup_application_type** | **String** | Identifies if application is for cross-sell application for new personal loan (PIL) or loan top-up. This is a reference data data field. Please use /v1/utilities/referenceData/{loanTopupApplicationType} resource to get valid value of this field with description. | 
**spoken_language_code** | **String** | Code for spoken language of applicant. Please use /v1/utilities/referenceData/{spokenLanguageCode} resource to get valid value of this field with description. | 





---

# InitiateApplicationProcessingUnsecuredLoanTopupResponse.md

# SwaggerClient::InitiateApplicationProcessingUnsecuredLoanTopupResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **String** | Unique identifier for the application | 





---

# InitiateCreditChargeCardCorporateCardsClosureRequest.md

# SwaggerClient::InitiateCreditChargeCardCorporateCardsClosureRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenized_card_number** | **String** | Tokenized card number | 
**corporate_officer_details** | [**CorporateOfficerDetails**](CorporateOfficerDetails.md) |  | [optional] 
**cancellation_reason_code** | **String** | cancellationReasonCode. This is a reference data field. Please use /v1/utilities/referenceData/{cancellationReasonCode} resource to get possible values of this field with descriptions | [optional] 
**cancellation_type** | **String** | cancellationReasonDescription. This is a reference data field. Please use /v1/utilities/referenceData/{cancellationType} resource to get possible values of this field with descriptions | [optional] 
**effective_cancel_date** | **Date** | Cancellation date in ISO 8601 date format YYYY-MM-DD | [optional] 
**postal_mail_code** | **String** | Mail letter code if business opt to send letter to customer. This is a reference data field. Please use /v1/utilities/referenceData/{postalMailCode} resource to get possible values of this field with descriptions. | [optional] 
**permenant_account_closure_flag** | **BOOLEAN** | Permanent Account Closure Flag | [optional] 
**consent_given_flag** | **BOOLEAN** | This is consent flag from the customer to pay back if any outstanding on that account while closure | [optional] 





---

# InitiateCreditChargeCardCorporateCardsClosureResponse.md

# SwaggerClient::InitiateCreditChargeCardCorporateCardsClosureResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_reference_id** | **String** | Unique Reference Id for the request for account closure. | [optional] 





---

# InitiateCreditChargeCardFulfillmentArrangementCreditPlanEppLoanCreationRequest.md

# SwaggerClient::InitiateCreditChargeCardFulfillmentArrangementCreditPlanEppLoanCreationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **String** | Transaction ID of the debit card transaction for which LOP booking will be done on the credit card | [optional] 
**loan_amount** | **Float** | Eligible Loan amount | 
**loan_tenor** | **Integer** | Tenure for the Loan | 





---

# InitiateCreditChargeCardFulfillmentArrangementCreditPlanEppLoanCreationResponse.md

# SwaggerClient::InitiateCreditChargeCardFulfillmentArrangementCreditPlanEppLoanCreationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_installment_amount** | **Float** | Next installment Amount for the loan | [optional] 
**interest_rate** | **Float** | Interest Rate for the loan | [optional] 
**initial_fee** | **Float** | Initial Fees for the loan | [optional] 





---

# InsertDocumentRequest.md

# SwaggerClient::InsertDocumentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_details** | [**DocumentDetails**](DocumentDetails.md) |  | 
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | 





---

# InsertDocumentResponse.md

# SwaggerClient::InsertDocumentResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_data_size** | **String** | Binary stream size of the document. | 





---

# InsurancePolicySummary.md

# SwaggerClient::InsurancePolicySummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 
**account_classification** | **String** | Classification of account either as ASSET or LIABILITY. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClassification} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_status** | **String** | Status of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**display_policy_number** | **String** | A masked policy number that can be displayed to the customer. | 
**insurance_application_id** | **String** | Insurance Application Number. This field is used to retrieve insurance policy details | 
**insurance_sum_assured_amount** | **Float** | Sum assured amount of the insurance | [optional] 
**total_premium_paid_amount** | **Float** | Total premium paid for the insurance policy | [optional] 





---

# Interest.md

# SwaggerClient::Interest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_group** | **String** | A unique code that identifies the product group. This is prospect selected product | 
**campaign_id** | **String** | Campaign Id. The unique identifier for campaign. | [optional] 
**wave_id** | **String** | Wave Id corresponding to campaign. | [optional] 





---

# InternationalTransaction.md

# SwaggerClient::InternationalTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**atm_transaction_limit_toggle_indicator** | **String** | InternationalSingleATMTransactionLimitToggleFlag | [optional] 
**atm_transaction_limit_amount** | **Float** | InternationalSingleATMTransactionLimit | [optional] 
**contactless_txn_limit_toggle_indicator** | **String** | InternationalSingleContactlessTransactionLimitToggleFlag | [optional] 
**contactless_transaction_limit_amount** | **Float** | InternationalSingleContactlessTransactionLimit | [optional] 
**contact_pos_txn_limit_toggle_indicator** | **String** | InternationalSingleContactPOSTransactionLimitToggleFlag | [optional] 
**contact_pos_transaction_limit_amount** | **Float** | InternationalSingleContactPOSTransactionLimit | [optional] 
**non_pos_txn_limit_toggle_indicator** | **String** | InternationalSingleNonPOSTransactionLimitToggleFlag | [optional] 
**non_pos_transaction_limit_amount** | **Float** | InternationalSingleNonPOSTransactionLimit | [optional] 





---

# InvestmentTransaction.md

# SwaggerClient::InvestmentTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_date** | **Date** | Order date in YYYY-MM-DD format value conforming to ISO 8601. This needs to be formatted in front-end for country/locale specific display purposes. This is the field used for default sorting | [optional] 
**order_reference_id** | **String** | Reference Id to uniquely identify the investment transaction | [optional] 
**order_type** | **String** | This is a reference data field. Please use /v1/apac/utilities/referenceData/{orderType} resource to get possible value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**code** | **String** | Order code to uniquely identify the transaction, | [optional] 
**name** | **String** | Unique name  for fund/stock | [optional] 
**currency_code** | **String** | The currency code of the transaction in ISO 4217 format, | [optional] 
**transaction_amount** | **Float** | Transaction amount in local currency. | [optional] 
**price** | **Float** | Order price of  trade | [optional] 
**order_status** | **String** | This is a reference data field. Please use /v1/apac/utilities/referenceData/{orderStatus} resource to get possible value of This field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**gross_amount** | **Float** | The total amount of the transaction | [optional] 
**order_quantity** | **Float** | Total number of units ordered | [optional] 
**order_medium** | **String** | The medium used by customer to place order.This is a reference data field. Please use /v1/apac/utilities/referenceData/{orderMedium} resource to get possible values of This field with descriptions. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**filled_quantity** | **Float** | Number of units received | [optional] 
**balance_quantity** | **Float** | Number of units not received | [optional] 
**stock_market_code** | **String** | Trading market code for securities | [optional] 





---

# KbaQResponseOptions.md

# SwaggerClient::KbaQResponseOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**option_sequence_number** | **Integer** | Option sequence number | [optional] 
**option_text** | **String** | Option text to be displayed to the end user. | [optional] 





---

# KbaQuestionnaireResponse.md

# SwaggerClient::KbaQuestionnaireResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**questionnaire** | [**Array&lt;QuestionnaireRes&gt;**](QuestionnaireRes.md) |  | [optional] 





---

# KbaSubmissionRequest.md

# SwaggerClient::KbaSubmissionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**questionnaire** | [**Array&lt;Questionnaire&gt;**](Questionnaire.md) |  | [optional] 
**control_flow_id** | **String** | Control Flow Id | [optional] 





---

# KbaSubmissionResponse.md

# SwaggerClient::KbaSubmissionResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_stage** | **String** | Current stage of an application.This is a reference data field. Please use /v1/apac/utilities/referenceData/{applicationStage} resource to get possible value of this field with description. You can use applicationStage field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# KycInformation.md

# SwaggerClient::KycInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**us_tax_status** | **String** | US Tax status. This is a reference data field. Please use /v1/apac/utilities/referenceData/{usTaxStatus} resource to get possible values of this field with descriptions. You can use usTaxStatus field name as the referenceCode parameter to retrieve the values. | [optional] 
**us_tax_id** | **String** | US Tax ID | [optional] 





---

# LinkedAccountDetails.md

# SwaggerClient::LinkedAccountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **String** | The customer account identifier of the linked account in encrypted format | [optional] 
**display_account_number** | **String** | This is the masked account number of the linked account that can be displayed to the customer | [optional] 
**currency_code** | **String** | Currency code of the linked account in ISO 4217 format. | [optional] 
**account_balance** | **Float** | Current Balance of the linked account. | [optional] 





---

# Links.md

# SwaggerClient::Links

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_self** | **String** | Fully qualified link that generated the current response document | 





---

# LinksPaginated.md

# SwaggerClient::LinksPaginated

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_self** | **String** | Fully qualified link that generated the current response document | 
**first** | **String** | URI to the first page of this set. Mandatory if this response is not the first page | [optional] 
**prev** | **String** | URI to the previous page of this set. Mandatory if this response is not the first page | [optional] 
**_next** | **String** | URI to the next page of this set. Mandatory if this response is not the last page | [optional] 
**last** | **String** | URI to the last page of this set. Mandatory if this response is not the last page | [optional] 





---

# ListResponse.md

# SwaggerClient::ListResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**more_indicator** | **String** | M - Indicates more rows present in list Space - Indicates no more rows in the list. M will be converted to Y at ESB | [optional] 
**next_start_index** | **String** | Ending index of the list | [optional] 
**size** | **Integer** | Size of the list | [optional] 





---

# Loan.md

# SwaggerClient::Loan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_reference_id** | **String** | Unique refrence number associated with the loan. | 





---

# LoanAccount.md

# SwaggerClient::LoanAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_description** | **String** | Transaction Description | [optional] 
**loan_reference_number** | **String** | Unique refrence number associated with the loan. | [optional] 
**loan_amount** | **Float** | Loan Amount | [optional] 
**loan_start_date** | **Date** | Start date of the loan.Date in ISO 8601, YYYY-MM-DD format | [optional] 
**loan_tenure** | **Integer** | Tenure of loan against card. It is considered in terms of number of months. | [optional] 
**installment_amount** | **Float** | Amount of money a borrower has to pay as installment. | [optional] 
**processing_charge_amount** | **Float** | Charges levied on applicant by the bank to process the loan. | [optional] 
**annual_percentage_rate** | **Float** | Annual Percentage Rate | [optional] 
**effective_interest_rate** | **Float** | Effective Percentage Rate | [optional] 
**installment_cycle** | **Integer** | Intallment Cycle | [optional] 
**remaining_loan_amount** | **Float** | Remaining Loan Amount | 
**loan_remaining_term_number** | **Integer** | Remaining term of installment loan | 





---

# LoanAccountSummary.md

# SwaggerClient::LoanAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**account_nickname** | **String** | The nickname of the account assigned by the customer | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format. | [optional] 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 
**account_classification** | **String** | Classification of account either as ASSET or LIABILITY. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClassification} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_status** | **String** | Status of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**original_principal_amount** | **Float** | The amount borrowed | [optional] 
**outstanding_balance** | **Float** | The amount of money owed. | [optional] 
**next_payment_amount** | **Float** | The next payment amount due | [optional] 
**next_payment_date** | **Date** | The date of the next payment in ISO 8601 date format YYYY-MM-DD | [optional] 





---

# LoanAmortizationSchedule.md

# SwaggerClient::LoanAmortizationSchedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installment_number** | **Integer** | Installment number | 
**installment_amount** | **Float** | Installment amount to be payed by customer in order to repay the loan. | 
**principal_amount** | **Float** | The portion of the Principal Amount Paid for the loan. | 
**installment_interest_amount** | **Float** | The interest  amount to be paid as installment. | 
**outstanding_principal_amount** | **Float** | The portion of the Principal Amount not Paid for the loan. | [optional] 
**installment_date** | **String** | Installment date in MM/YYYY format | [optional] 





---

# LoanBookingConfirmationPreLoginRequest.md

# SwaggerClient::LoanBookingConfirmationPreLoginRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | 





---

# LoanBookingConfirmationPreLoginResponse.md

# SwaggerClient::LoanBookingConfirmationPreLoginResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_reference_id** | **String** | The unique  reference Id used to identify this Loan from all the other Loans | 
**payment_method** | **String** | The acceptable forms of remittance for a given payments and transfer transaction.This is a reference data field. Please use /v1/utilities/referenceData/{paymentMethod} resource to get valid value of this field with description. | [optional] 





---

# LoanBookingConfirmationRequest.md

# SwaggerClient::LoanBookingConfirmationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | 





---

# LoanBookingConfirmationResponse.md

# SwaggerClient::LoanBookingConfirmationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_reference_id** | **String** | Reference Id to uniquely identify the loan. | 





---

# LoanBookingPlan.md

# SwaggerClient::LoanBookingPlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | **Integer** | Period of time for which the Loan is taken. This will be reference data. | 
**effective_interest_rate** | **Float** | The interest rate applicable on Loan Amount. | [optional] 
**annual_percentage_rate** | **Float** | Interest rate for a whole year. This includes any fees or additional cost associated. | [optional] 
**installment_amount** | **Float** | The montly emi for the loan amount taken based on Tenor | [optional] 
**one_time_processing_fee_indicator** | **String** | One time processing fee indicator. This is a reference data field. Please use /v1/apac/utilities/referenceData/{oneTimeProcessingFeeIndicator} resource to get valid value of this field with description. | [optional] 
**one_time_processing_fee_amount** | **Float** | Fee charged as part of one time processing. | [optional] 
**initial_fee_amount** | **Float** | First month fee/interest charge incurred from booking date to next statement cycle date. | [optional] 
**one_time_processing_fee_percentage** | **Float** | Percentage of one time processing fee charged. | [optional] 





---

# LoanBookingPlanResponse.md

# SwaggerClient::LoanBookingPlanResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_booking_plans** | [**Array&lt;LoanBookingPlan&gt;**](LoanBookingPlan.md) |  | [optional] 





---

# LoanBookingPreLoginRequest.md

# SwaggerClient::LoanBookingPreLoginRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_amount** | **Float** | Requested Loan Amount | 
**tenor** | **Integer** | Tenure of loan. | 
**disbursement_option** | **String** | This field indicates the options/mode in which the loan amount will be disbursed. This is a reference data field. Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description. | 
**disbursement_account_id** | **String** | The account Id of the account to which Loan amount is to be disbursed. | [optional] 
**payee_id** | **String** | Unique identifier associated with the payee.Typically, this is not displayed to the customer. | [optional] 
**birth_year** | [**BigDecimal**](BigDecimal.md) | Year of birth of customer | [optional] 
**purpose_of_loan** | **String** | This field indicates the options/mode in which the loan amount will be disbursed. This is a reference data field. Please use /v1/utilities/referenceData/{PurposeOfLoan} resource to get valid value of this field with description. | [optional] 
**bank_details** | [**BankDetails**](BankDetails.md) |  | [optional] 





---

# LoanBookingPreLoginResponse.md

# SwaggerClient::LoanBookingPreLoginResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_reference_id** | **String** | The unique  reference Id used to identify this Loan from all the other Loans | 
**payment_method** | **String** | The acceptable forms of remittance for a given payments and transfer transaction.This is a reference data field. Please use /v1/utilities/referenceData/{paymentMethod} resource to get valid value of this field with description. | [optional] 





---

# LoanBookingRequest.md

# SwaggerClient::LoanBookingRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payee_id** | **String** | Unique identifier associated with the payee.Typically, this is not displayed to the customer. | [optional] 
**loan_amount** | **Float** | This field is to indicate the loan amount for booking. | 
**disbursement_option** | **String** | This field indicates the options/mode in which the loan amount will be disbursed. This is a reference data field. Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description. | 
**disbursement_account_id** | **String** | The disbursement account identifier in encrypted format. Applicable only for HK. | [optional] 
**tenor** | [**BigDecimal**](BigDecimal.md) | Tenure of loan in months. | 
**bank_details** | [**BankDetails**](BankDetails.md) |  | [optional] 
**loan_purpose** | **String** | This field is to indicate the purpose of loan. This is a reference data field.This is a reference data field. Please use /v1/utilities/referenceData/{loanPurpose} resource to get valid value of this field with description. | [optional] 
**remarks** | **String** | Payment notes. Free text from screen | [optional] 
**tax_id** | **String** | Unique Tax ID of the Customer,INN Taxpayer&#x27;s identification code applicable for Russia | [optional] 
**payment_reference_id** | **String** | Reference number to uniquely identify the payment, applicable for Russia | [optional] 





---

# LoanBookingResponse.md

# SwaggerClient::LoanBookingResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_reference_id** | **String** | Reference Id to uniquely identify the loan. | 
**available_credit** | **Float** | This field is to indicate the available credit limit on the credit card. | [optional] 
**payment_method** | **String** | The acceptable forms of remittance for a given payments and transfer transaction.This is a reference data field. Please use /v1/utilities/referenceData/{paymentMethod} resource to get valid value of this field with description. | [optional] 





---

# LoanEligibilityCheckResponse.md

# SwaggerClient::LoanEligibilityCheckResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_eligibility_details** | [**Array&lt;LoanEligibilityDetails&gt;**](LoanEligibilityDetails.md) |  | [optional] 





---

# LoanEligibilityDetails.md

# SwaggerClient::LoanEligibilityDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **String** | The account id  in encrypted format. | 
**display_account_number** | **String** | A masked account number that can be displayed to the customer. | 
**lop_supported_account_group** | **String** | This field refers the account group supported by Loan over phone. This is a reference data field. Please use /v1/utilities/referenceData/{lopSupportedAccountGroup} resource to get valid value of this field with description. | [optional] 
**maximum_eligible_loan_amount** | **Float** | This field indicates the maximum eligible amount for loan. | 
**minimum_eligible_loan_amount** | **Float** | This field indicates the minimum eligible amount for loan. | [optional] 
**offer_indicator** | **String** | This is to indicate if the offer is rate/fee/hybrid based. This is a reference data field. Please use /v1/utilities/referenceData/{offerIndicator} resource to get valid value of this field with description. | 
**interest_calculation_method** | **String** | Interest calculation method. This is a reference data field. Please use /v1/utilities/referenceData/{interestCalculationMethod} resource to get valid value of this field with description. | [optional] 





---

# LoanPaymentAccountDetails.md

# SwaggerClient::LoanPaymentAccountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disbursement_amount** | **Float** | Disbursement Amount to the applicant | [optional] 
**loan_disbursement_method** | **String** | Loan disbursement method for the unsecured loan product selected by the applicant.This a reference data field. Please use /utilities/referenceData/{disbursementType} resource to get valid values of this field with descriptions. You can use the fieldname as the referenceCode parameter to retrieve the values. | [optional] 
**account_reference_key** | **String** | Account reference key to link account in a customer session, | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_nick_name** | **String** | The nick name of the account assigned by the customer | [optional] 
**bank_name** | **String** | Indicates the bank name of the customer&#x27;s account to which the loan amount will be transferred. Also, indicates the bank name of the customer&#x27;s account from which the repayment of the loan will be debited. Please use /v1/utilities/referenceData/{bankName} resource to get valid value of this field with description. | [optional] 
**bank_code** | **String** | This field is to indicate the bank code. | [optional] 
**branch_code** | **String** | This field is to indicate the branch code. | [optional] 





---

# LoanPaymentAccountDetailsAdd.md

# SwaggerClient::LoanPaymentAccountDetailsAdd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disbursement_amount** | **Float** | Disbursement Amount to the applicant | [optional] 
**loan_disbursement_method** | **String** | Loan disbursement method for the unsecured loan product selected by the applicant.This a reference data field. Please use /utilities/referenceData/{disbursementType} resource to get valid values of this field with descriptions. You can use the fieldname as the referenceCode parameter to retrieve the values. | [optional] 
**account_number** | **String** | Account number of the payee. | 
**account_reference_key** | **String** | Account reference key to link account in a customer session, | [optional] 
**account_nick_name** | **String** | The nick name of the account assigned by the customer | [optional] 
**bank_name** | **String** | Indicates the bank name of the customer&#x27;s account to which the loan amount will be transferred. Also, indicates the bank name of the customer&#x27;s account from which the repayment of the loan will be debited. Please use /v1/utilities/referenceData/{bankName} resource to get valid value of this field with description. | 
**bank_code** | **String** | This field is to indicate the bank code. | [optional] 
**branch_code** | **String** | This field is to indicate the branch code of the bank. | 





---

# LoanPaymentPlans.md

# SwaggerClient::LoanPaymentPlans

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_tenure** | **String** | Tenure of loan against card | 
**base_interest_rate** | **Float** | Base Interest rate | [optional] 
**annual_percentage_rate** | **Float** | Annual percentage rate of the loan | [optional] 
**installment_amount** | **Float** | Installment amount to be payed by customer in order to repay the loan. | [optional] 
**interest_rate** | **Float** | Interest rate for the loan | [optional] 
**installment_interest_amount** | **Float** | The interest amount to be paid as installment | [optional] 
**first_total_installment_amount** | **Float** | Monthly total (Interest + Amount) | [optional] 
**loan_cet_percentage** | **Float** | Loan CET Percentage | [optional] 
**fixed_interest_rate** | **Float** | Fixed interest rate | [optional] 
**loan_booking_fee_indicator** | **String** | Loan booking fee indicator | [optional] 
**loan_booking_fee** | **Float** | Loan booking fee | [optional] 
**loan_booking_fee_percentage** | **Float** | Loan booking fee percentage | [optional] 
**initial_interest_amount** | **Float** | Initial interest(0th interest) | [optional] 
**initial_fee_amount** | **Float** | Initial fee amount charged to customer | [optional] 





---

# LoanPaymentSchedule.md

# SwaggerClient::LoanPaymentSchedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installment_number** | **Integer** | The installment number of the total number of installments | [optional] 
**principal_amount** | **Float** | The portion of the principal amount paid for the loan. | [optional] 
**installment_interest_amount** | **Float** | The interest amount to be paid as installment | [optional] 
**installment_amount** | **Float** | Installment amount to be payed by customer in order to repay the loan. | [optional] 
**installment_date** | **Date** | Date of installment in ISO 8601 date format YYYY-MM-DD | [optional] 





---

# LoanRepaymentDetails.md

# SwaggerClient::LoanRepaymentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_amount** | **Float** | Requested disbursement amount | [optional] 
**loan_repayment_method** | **String** | Loan repayment method for the unsecured loan selected by the applicant Ex:SI,PDC,UAE Exchange,Direct Debit,Manual Direct Debit Please use /v1/utilities/referenceData/{loanRepaymentMethod} resource to get valid value of this field with description. | [optional] 
**payment_account_number** | **String** | Payment account number associated with the bank   through which the loan repayment is carried out  by the applicant | [optional] 
**account_reference_key** | **String** | Account reference key to link account in a customer session, | [optional] 
**account_nick_name** | **String** | The nick name of the account assigned by the customer | [optional] 
**bank_details** | [**BankDetails**](BankDetails.md) |  | [optional] 





---

# LoanRepaymentScheduleResponse.md

# SwaggerClient::LoanRepaymentScheduleResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amortization_schedule** | [**Array&lt;AmortizationSched&gt;**](AmortizationSched.md) |  | [optional] 
**next_start_index** | **String** | The next start index that indicates the next set of records to be fetched, if there are available. Typically, this value should be populated if the first response has the value of nextStartIndex. | [optional] 





---

# LoanRepaymentScheuleResponse.md

# SwaggerClient::LoanRepaymentScheuleResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amortization_schedule** | [**Array&lt;AmortizationSchedule&gt;**](AmortizationSchedule.md) |  | [optional] 
**total_loan_cost** | **Float** | Principal and total Interest amount to be paid by borrower for the loan. | [optional] 
**next_start_index** | **String** | The next start index that indicates the next set of records to be fetched, if there are available. Typically, this value should be populated if the first response has the value of nextStartIndex. | [optional] 





---

# LoanScheduleDetails.md

# SwaggerClient::LoanScheduleDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_cycle_number** | **String** | Payment no | [optional] 
**applied_financed_amount** | **Float** | Financed amount applied | [optional] 
**applied_interest_amount** | **Float** | Interest amount applied | [optional] 
**applied_credit_usage_fee_amount** | **Float** | Credit usage fee amount applied | [optional] 





---

# LoanSpecificRecommendations.md

# SwaggerClient::LoanSpecificRecommendations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_amount** | **Float** | Eligible Loan amount. | [optional] 
**tenor** | **String** | Tenor for the loan repayment. This is a reference data field. Please use /v1/apac/utilities/referenceData/{tenor} resource to get valid value of this field with description. | [optional] 
**interest_rate** | **Float** | The rate of interest applicable to product | [optional] 
**handling_fee** | **Float** | Handling fee to be paid. | [optional] 
**installment_amount** | **Float** | Installment amount to be paid. | [optional] 
**annual_percentage_rate** | **Float** | Applicable Annual Percentage Rate | [optional] 
**total_principal_amount** | **Float** | Total principal to be paid by customer | [optional] 
**total_interest_amount** | **Float** | Total interest to be paid by customer | [optional] 
**total_installment_amount** | **Float** | Total installment amount to be paid by customer | [optional] 
**repayment_schedule_issue_date** | **Date** | Repayment schedule start date in ISO 8601 date format YYYY-MM-DD | [optional] 
**repayment_schedule** | [**Array&lt;RepaymentSchedule&gt;**](RepaymentSchedule.md) |  | [optional] 





---

# LoanSpecificSelection.md

# SwaggerClient::LoanSpecificSelection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_amount** | **Float** | Loan Amount accepted by customer | 
**tenor** | **String** | Tenure of loan. This is a reference data field. Please use /v1/apac/utilities/referenceData/{tenor} resource to get valid values of this field with descriptions. You can use tenor field name as the referenceCode parameter to retrieve the values. | 
**interest_rate** | **Float** | Interest rate applicable for the loan | 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/apac/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use billingAddress field as the referenceCode parameter to retrieve the values. | [optional] 





---

# LoanSpecificSelectionUpdate.md

# SwaggerClient::LoanSpecificSelectionUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_amount** | **Float** | Loan Amount accepted by customer | [optional] 
**tenor** | **String** | Tenor of loan. This is a reference data field. Please use /v1/apac/utilities/referenceData/{tenor} resource to get valid values of this field with descriptions. You can use tenor field name as the referenceCode parameter to retrieve the values. | [optional] 
**interest_rate** | **Float** | Interest rate applicable for the loan | [optional] 





---

# LoanSummary.md

# SwaggerClient::LoanSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_amount** | **Float** | Loan amount availed by customer | [optional] 
**loan_tenure** | **String** | Tenure of loan against card. | [optional] 
**promotion_id** | **String** | Promotion ID for the loan offered | [optional] 
**interest_rate** | **Float** | Interest rate for the loan | [optional] 
**interest_rate_effectivity_date** | **Date** | Effectivity date of interest rate  in ISO 8601 date format YYYY-MM-DD | [optional] 
**total_interest_amount** | **Float** | Total interest amount for the loan | [optional] 
**total_loan_amount** | **Float** | Total loan amount comprising of principal and interest | [optional] 
**loan_remaining_term_number** | **Integer** | Remaining term of installment loan | [optional] 





---

# LoanSummaryResponse.md

# SwaggerClient::LoanSummaryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loans** | [**Array&lt;Loan&gt;**](Loan.md) |  | [optional] 
**next_start_index** | **String** | The next start index that indicates the next set of records to be fetched, if there are available. Typically, this value should be populated if the first response has the value of nextStartIndex. | [optional] 





---

# LoanTopup.md

# SwaggerClient::LoanTopup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | **String** | Tenor for the loan repayment.This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid values of this field with descriptions. | [optional] 
**interest_rate** | **Float** | annualPercentageRate -APR | [optional] 
**installment_amount** | **Float** | Instalment amount to be paid. | [optional] 





---

# LoanTopupRecommendations.md

# SwaggerClient::LoanTopupRecommendations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | **String** | Tenor for the loan repayment.This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid values of this field with descriptions. | [optional] 
**loan_topup_minium_amount** | **Float** | Recommended loan top-up Minim amount | [optional] 
**loan_topup_maxium_amount** | **Float** | Recommended loan Topup Maxium amount | [optional] 
**annual_percentage_rate** | **Float** | annualPercentageRate -APR | [optional] 
**loan_amount** | **Float** | Recommended loan amount. | [optional] 
**interest_rate** | **Float** | The rate of interest applicable for the product | [optional] 
**handling_fee** | **Float** | One-time processing fee. | [optional] 
**installment_amount** | **Float** | Instalment amount to be paid. | [optional] 
**total_principal_amount** | **Float** | Total principal to be paid by customer | [optional] 
**total_interest_amount** | **Float** | Total interest amount to be paid by applicant. | [optional] 
**total_installment_amount** | **Float** | Total instalment amount to be paid by customer | [optional] 
**repayment_schedule_issue_date** | **Date** | Repayment schedule start date in ISO 8601 date format YYYY-MM-DD | [optional] 





---

# Loans.md

# SwaggerClient::Loans

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_reference_id** | **String** | Reference Id to uniquely identify the loan.  | 
**display_account_number** | **String** | Last 4 digits of account number.  | [optional] 
**transaction_date** | **Date** | Transaction date in YYYY-MM-DD format value conforming to ISO 8601. | 
**transaction_description** | **String** | Transaction description from the merchant, POS or bank. If there are foreign currency transactions on checking /saving account(s) then description includes exchange rate, city and country. | 
**installment_amount** | **Float** | Installment loan payment amount | 
**next_installment_amount** | **Float** | Next installment amount in local currency. | [optional] 
**outstanding_balance_amount** | **Float** | The amount of money owed. | 
**tenor** | [**BigDecimal**](BigDecimal.md) | Tenure of loan in months. | 
**outstanding_tenor** | [**BigDecimal**](BigDecimal.md) | Number of months remaining for completion of loan. | [optional] 
**original_loan_amount** | **Float** | Original loan amount borrowed by customer. | 
**annual_percentage_rate** | **Float** | Interest rate for a whole year. This includes any fees or additional cost associated. | 
**effective_interest_rate** | **Float** | Effective Percentage Rate | [optional] 
**processing_charge_amount** | **Float** | Charges levied on applicant by the bank to process the loan. | [optional] 
**outstanding_interest_amount** | **Float** | Total Outstanding Interest Amount. | [optional] 
**self_early_loan_closure_allowed_flag** | **BOOLEAN** | Flag to identify if the loan is allowed to be early self closed by customer or not.. | [optional] 
**installment_cycle** | **Integer** | Intallment Cycle | [optional] 





---

# MarketingCampaignOffer.md

# SwaggerClient::MarketingCampaignOffer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_id** | **String** | Unique identifier for a specific campaign being offered to the channel | 
**wave_id** | **String** | Unique identifier for the wave under specific campaign being offered to the channel | 
**channel_id** | **String** | This field is used to store the channel through which the particular offer has been created | 
**offer_expiry_date** | **Date** | Offer expiry date in ISO 8601 date format YYYY-MM-DD | 
**offer_status** | **String** | Offer status to indicate the status of the offer. | 





---

# MarketingCampaignOfferDetails.md

# SwaggerClient::MarketingCampaignOfferDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **String** | Unique offer ID associated with the offer | 





---

# MarketingConsent.md

# SwaggerClient::MarketingConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_data_opt_out_others_flag** | **BOOLEAN** | Opt out from use of personal data to other person/organization in direct marketing | [optional] 





---

# MembershipInformation.md

# SwaggerClient::MembershipInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**membership_number** | **String** | Applicants 12-digit membership number. | [optional] 
**membership_type** | **String** | Applicants membership type. This is a reference data field. Please use /v1/apac/utilities/referenceData/{membershipType} resource to get valid value of this field with description. | [optional] 





---

# Meta.md

# SwaggerClient::Meta

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bic_code** | **String** | 8-characters SWIFT code | 
**last_updated** | **DateTime** | Last updated date of product list | 
**version** | **String** | API version as published https://github.com/BankNegaraMY/oapi-banking | 
**total_result** | **Integer** | Number of products returned | 
**campaign_url** | **String** | Absolute URL to active campaign or promotions | [optional] 





---

# MetaPaginated.md

# SwaggerClient::MetaPaginated

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_records** | **Integer** | The total number of records in the full set. See [pagination](#pagination). | 
**total_pages** | **Integer** | The total number of pages in the full set. See [pagination](#pagination). | 





---

# MultiCurrencyAccountEligibility.md

# SwaggerClient::MultiCurrencyAccountEligibility

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_card_number** | **String** | A masked card number that can be displayed to the customer. | 
**card_id** | **String** | The customer card identifier in encrypted format | 
**atm_card_flag** | **BOOLEAN** | Flag to identify if the cardNumbre in response is ATM card. | [optional] 
**card_enrollment_status** | **String** | This field is to indicate if the  card is enrolled for Multi Currency Account or not.Please use /v1/apac/utilities/referenceData/{cardEnrollmentStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**eligible_for_currency_addition** | **String** | Eligible to add new currency.This is a reference data field. Please use /utilities/referenceData/{ eligibleForCurrencyAddition} resource to get valid value of this field with description. | [optional] 
**relationship_id** | **String** | The customer relationship identifier in encrypted format | [optional] 
**relationship_id_type** | **String** | The type of customer relationship | [optional] 
**account_details** | [**Array&lt;AccountDtls&gt;**](AccountDtls.md) |  | [optional] 
**currency_details** | [**Array&lt;CurrencyDetails&gt;**](CurrencyDetails.md) |  | [optional] 





---

# MultiCurrencyAccountEligibilityResponse.md

# SwaggerClient::MultiCurrencyAccountEligibilityResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_card_number** | **String** | A masked card number that can be displayed to the customer. | 
**card_id** | **String** | The customer card identifier in encrypted format | 
**atm_card_flag** | **BOOLEAN** | Flag to identify if the cardNumbre in response is ATM card. | [optional] 
**card_enrollment_status** | **String** | This field is to indicate if the  card is enrolled for Multi Currency Account or not.Please use /v1/apac/utilities/referenceData/{cardEnrollmentStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | 
**eligible_for_currency_addition** | **String** | Eligible to add new currency.This is a reference data field. Please use /utilities/referenceData/{ eligibleForCurrencyAddition} resource to get valid value of this field with description. | [optional] 
**account_details** | [**Array&lt;AccountDetails&gt;**](AccountDetails.md) |  | [optional] 
**currency_details** | [**Array&lt;CurrencyDetails&gt;**](CurrencyDetails.md) |  | [optional] 





---

# MultiCurrencyAccountEnrollmentRequest.md

# SwaggerClient::MultiCurrencyAccountEnrollmentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Array&lt;Account&gt;**](Account.md) |  | [optional] 





---

# MultiCurrencyAccountEnrollmentResponse.md

# SwaggerClient::MultiCurrencyAccountEnrollmentResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | The customer card identifier in encrypted format | 
**enrollment_status_flag** | **BOOLEAN** | This field is to indicate if the card is enrolled for multi currency account or not. | [optional] 
**account_details** | [**Array&lt;AccountDetails&gt;**](AccountDetails.md) |  | [optional] 





---

# MultiCurrencyAccountEnrollmentWithCurrencyRequest.md

# SwaggerClient::MultiCurrencyAccountEnrollmentWithCurrencyRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **String** | Currency code  in ISO 4217 format, which needs to be added to multi currency account by creating new account for that foreign currency | 
**account_id** | **String** | The customer account identifier in encrypted format | [optional] 





---

# MultiCurrencyAccountEnrollmentWithCurrencyResponse.md

# SwaggerClient::MultiCurrencyAccountEnrollmentWithCurrencyResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_details** | [**AccountDetails**](AccountDetails.md) |  | [optional] 





---

# MutualFund.md

# SwaggerClient::MutualFund

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**net_asset_value_amount** | **Float** | The current market worth of investment | [optional] 
**fund_code** | **String** | The code of the fund | [optional] 
**fund_name** | **String** | The name of the fund | [optional] 
**investment_amount** | **Float** | The investment amount | [optional] 
**currency_code** | **String** | The currency code of the account in ISO 4217 format | [optional] 
**maturity_date** | **Date** | The maturity date in ISO 8601 format YYYY-MM-DD | [optional] 
**available_units** | **Float** | The available units | [optional] 
**settled_units** | **Float** | The settled units | [optional] 
**assigned_units** | **Float** | The assigned units | [optional] 
**confirmed_units** | **Float** | The confirmed units | [optional] 
**pending_units** | **Float** | The pending units | [optional] 
**block_units** | **Float** | The blocked units | [optional] 
**unrealized_gains** | **Float** | The unrealized gain | [optional] 
**unrealized_percentage_gain** | **Float** | The unrealized gain in percentage | [optional] 
**latest_price** | **Float** | The latest price | [optional] 





---

# MutualFundAccount.md

# SwaggerClient::MutualFundAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**currency_code** | **String** | The currency code of the account in ISO 4217 format | [optional] 
**total_net_asset_value_amount** | **Float** | Total of net asset value of mutual funds | [optional] 
**total_transaction_amount** | **Float** | Total transaction amount in local currency | [optional] 
**total_unrealized_gains** | **Float** | Total unrealized gains amount, profitable position that has yet to be cashed in | [optional] 
**relationship** | [**Relationship**](Relationship.md) |  | [optional] 
**mutual_fund** | [**Array&lt;MutualFund&gt;**](MutualFund.md) |  | [optional] 





---

# MutualFundAccountSummary.md

# SwaggerClient::MutualFundAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**account_nickname** | **String** | The nickname of the account assigned by the customer | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format. | [optional] 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 
**account_status** | **String** | Status of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_classification** | **String** | Classification of account either as ASSET or LIABILITY. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClassification} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**current_balance** | **Float** | Total fund value for the Investment mutual fund account. It is the current market worth of investment | [optional] 





---

# Name.md

# SwaggerClient::Name

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**surname** | **String** | Surname/last name of the applicant | 
**given_name** | **String** | Given/first name of the applicant | 
**middle_name** | **String** | Middle name of the applicant | [optional] 
**salutation** | **String** | Salutation. This is a reference data field. Please use /v1/apac/utilities/referenceData/{salutation} resource to get valid value of this field with description. | 





---

# NotifyApplicationReleaseToNewWorkQueueRequest.md

# SwaggerClient::NotifyApplicationReleaseToNewWorkQueueRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **String** | Unique identifier for the application | 
**auto_release_point** | **String** | A trigger point of case that able to be released to next queue | 
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | 





---

# NotifyCreditChargeCardFulfillmentArrangementAuthorisedTransactionRequest.md

# SwaggerClient::NotifyCreditChargeCardFulfillmentArrangementAuthorisedTransactionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | This field provides the unique request ID generated from the VOX platform. Will be used for tracking and audit purposes | 
**vop_transaction_id** | **String** | This field specifies the VOP transaction ID of the original transaction, that triggered the reward. | 
**action_type** | **String** | This field specifies the action to be performed for the request.Valid Value is Notify | 
**distributor_id** | **String** | This field specifies the Distributor ID. Important when an aggregator (who is serving for more than one distributor) is building the API end point. | 
**card_id** | **String** | This field provides the card id generated during cardholder enrolment at VOX. | 
**user_id** | **String** | This field provides the external user id generated during cardholder enrolment at VOX. | 
**credit_status** | **String** | This field specifies the reward credit status.Valid Values are Successful, Eligible, Failed | 
**request_date_time** | **String** | This field specifies the date and time which the reward request is initiated in the format YYYY-MM-DD HH:MM:SS | 
**offer_id** | **Integer** | This will be the VOX qualified offer ID, which the reward is given, Will be used for tracking and audit purposes. | 
**settlement_currency** | **String** | This field specifies the reward currency of the original offer | 
**reward_settlement_currency** | **Float** | This field specifies the cashback reward value in Settlement Currency.If the amount is in round figure for an example 100 then the amount should be passed as per format 100.00 | 
**billing_currency** | **String** | This field specifies the customer purchase currency derived from the VOP transaction. | 
**reward_billing_currency** | **Float** | This field specifies the cashback reward value in Settlement Billing Currency.If the amount is in round figure for an example 100 then the amount should be passed as per format 100.00 | 
**merchant_name** | **String** | This field provides the merchant name | 
**transaction_date** | **String** | This field specifies the transaction date retrieved from the VOP Transaction in the format YYYY-MM-DD HH:MM:SS | 
**transaction_billing_amount** | **Float** | This field specifies transaction amount in billing currency as received from the VOP transaction.If the amount is in round figure for an example 100 then the amount should be passed as per format 100.00 | 
**transaction_settlement_amount** | **Float** | This field specifies transaction amount in settlement currency  as received from the VOP transaction.If the amount is in round figure for an example 100 then the amount should be passed as per format 100.00 | 
**remarks** | **String** | This field is used to pass additional information required by the partner for their records. This can pass an empty value as well. | [optional] 





---

# Ocr.md

# SwaggerClient::Ocr

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ocr_reference_number** | **String** | OCR (Optical Character Recognition) Reference number | [optional] 





---

# OfferAcceptanceRequest.md

# SwaggerClient::OfferAcceptanceRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counter_product_accepted_flag** | **BOOLEAN** | Flag to indicate a counter offer selected by an applicant. Valid values: true and false | [optional] 
**counter_product_confirmation** | [**Array&lt;ProductConfirmation&gt;**](ProductConfirmation.md) |  | [optional] 
**requested_product_confirmation** | [**Array&lt;ProductConfirmation&gt;**](ProductConfirmation.md) |  | 
**control_flow_id** | **String** | Control Flow Id | 





---

# OfferAndDecisionManagementApi.md

# SwaggerClient::OfferAndDecisionManagementApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**execute_application_processing_unsecured_loan_topup_offer_acceptance_and_submission**](OfferAndDecisionManagementApi.md#execute_application_processing_unsecured_loan_topup_offer_acceptance_and_submission) | **POST** /v1/applicationProcessing/products/unsecuredLoans/topup/applications/{applicationId}/offerAcceptanceAndSubmission | This API is used to perform offer acceptance for Loan Top Up Application &amp; final submit
[**initiate_application_processing_unsecured_loan_topup**](OfferAndDecisionManagementApi.md#initiate_application_processing_unsecured_loan_topup) | **POST** /v1/applicationProcessing/products/unsecuredLoans/topup/applications | This API is used to create application for  loan top-up for existing credit card customer. This is for post login function
[**retrieve_application_processing_unsecured_loan_topup_repayment_schedule**](OfferAndDecisionManagementApi.md#retrieve_application_processing_unsecured_loan_topup_repayment_schedule) | **GET** /v1/applicationProcessing/products/unsecuredLoans/topup/repaymentSchedule | This API fetches repayment schedule details for a loan including loan amount, tenor, rates, fees, etc for unsecured loans on ready credit
[**update_application_processing_unsecured_loan_topup_background_screening**](OfferAndDecisionManagementApi.md#update_application_processing_unsecured_loan_topup_background_screening) | **POST** /v1/applicationProcessing/products/unsecuredLoans/topup/applications/{applicationId}/backgroundScreening | This API is used to update a saved Loan top-up application &amp; do background screening
[**update_application_processing_unsecured_loan_topup_in_principal_approval**](OfferAndDecisionManagementApi.md#update_application_processing_unsecured_loan_topup_in_principal_approval) | **POST** /v1/applicationProcessing/products/unsecuredLoans/topup/applications/{applicationId}/inPrincipleApprovals | This API is used to update a saved Loan top-up application and in principle approval

# **execute_application_processing_unsecured_loan_topup_offer_acceptance_and_submission**
> execute_application_processing_unsecured_loan_topup_offer_acceptance_and_submission(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)

This API is used to perform offer acceptance for Loan Top Up Application & final submit

This API is used to perform offer acceptance for Loan Top Up Application & final submit

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OfferAndDecisionManagementApi.new
body = SwaggerClient::ExecuteApplicationProcessingUnsecuredLoanTopupOfferAcceptanceAndSubmissionRequest.new # ExecuteApplicationProcessingUnsecuredLoanTopupOfferAcceptanceAndSubmissionRequest | ExecuteApplicationProcessingUnsecuredLoanTopupOfferAcceptanceAndSubmissionRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
application_id = 'application_id_example' # String | 
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to perform offer acceptance for Loan Top Up Application & final submit
  api_instance.execute_application_processing_unsecured_loan_topup_offer_acceptance_and_submission(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OfferAndDecisionManagementApi->execute_application_processing_unsecured_loan_topup_offer_acceptance_and_submission: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExecuteApplicationProcessingUnsecuredLoanTopupOfferAcceptanceAndSubmissionRequest**](ExecuteApplicationProcessingUnsecuredLoanTopupOfferAcceptanceAndSubmissionRequest.md)| ExecuteApplicationProcessingUnsecuredLoanTopupOfferAcceptanceAndSubmissionRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **application_id** | **String**|  | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **initiate_application_processing_unsecured_loan_topup**
> InitiateApplicationProcessingUnsecuredLoanTopupResponse initiate_application_processing_unsecured_loan_topup(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is used to create application for  loan top-up for existing credit card customer. This is for post login function

This API is used to create application for  loan top-up for existing credit card customer. This is for post login function

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OfferAndDecisionManagementApi.new
body = SwaggerClient::InitiateApplicationProcessingUnsecuredLoanTopupRequest.new # InitiateApplicationProcessingUnsecuredLoanTopupRequest | InitiateApplicationProcessingUnsecuredLoanTopupRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to create application for  loan top-up for existing credit card customer. This is for post login function
  result = api_instance.initiate_application_processing_unsecured_loan_topup(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OfferAndDecisionManagementApi->initiate_application_processing_unsecured_loan_topup: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InitiateApplicationProcessingUnsecuredLoanTopupRequest**](InitiateApplicationProcessingUnsecuredLoanTopupRequest.md)| InitiateApplicationProcessingUnsecuredLoanTopupRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**InitiateApplicationProcessingUnsecuredLoanTopupResponse**](InitiateApplicationProcessingUnsecuredLoanTopupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **retrieve_application_processing_unsecured_loan_topup_repayment_schedule**
> RetrieveApplicationProcessingUnsecuredLoanTopupRepaymentScheduleResponse retrieve_application_processing_unsecured_loan_topup_repayment_schedule(authorization, uuid, accept, client_id, content_type, loan_amount, insurance_premium_amount, fee_amount, loan_interest_rate, tenor, opts)

This API fetches repayment schedule details for a loan including loan amount, tenor, rates, fees, etc for unsecured loans on ready credit

This API fetches repayment schedule details for a loan including loan amount, tenor, rates, fees, etc for unsecured loans on ready credit

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OfferAndDecisionManagementApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
loan_amount = 1.2 # Float | Loan amount
insurance_premium_amount = 1.2 # Float | Insurance premium amount
fee_amount = 1.2 # Float | Fee amount
loan_interest_rate = 1.2 # Float | Loan interest rate
tenor = 56 # Integer | Tenor
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API fetches repayment schedule details for a loan including loan amount, tenor, rates, fees, etc for unsecured loans on ready credit
  result = api_instance.retrieve_application_processing_unsecured_loan_topup_repayment_schedule(authorization, uuid, accept, client_id, content_type, loan_amount, insurance_premium_amount, fee_amount, loan_interest_rate, tenor, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OfferAndDecisionManagementApi->retrieve_application_processing_unsecured_loan_topup_repayment_schedule: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **loan_amount** | **Float**| Loan amount | 
 **insurance_premium_amount** | **Float**| Insurance premium amount | 
 **fee_amount** | **Float**| Fee amount | 
 **loan_interest_rate** | **Float**| Loan interest rate | 
 **tenor** | **Integer**| Tenor | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**RetrieveApplicationProcessingUnsecuredLoanTopupRepaymentScheduleResponse**](RetrieveApplicationProcessingUnsecuredLoanTopupRepaymentScheduleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **update_application_processing_unsecured_loan_topup_background_screening**
> UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningResponse update_application_processing_unsecured_loan_topup_background_screening(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)

This API is used to update a saved Loan top-up application & do background screening

This API is used to update a saved Loan top-up application & do background screening

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OfferAndDecisionManagementApi.new
body = SwaggerClient::UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningRequest.new # UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningRequest | UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
application_id = 'application_id_example' # String | 
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to update a saved Loan top-up application & do background screening
  result = api_instance.update_application_processing_unsecured_loan_topup_background_screening(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OfferAndDecisionManagementApi->update_application_processing_unsecured_loan_topup_background_screening: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningRequest**](UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningRequest.md)| UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **application_id** | **String**|  | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningResponse**](UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **update_application_processing_unsecured_loan_topup_in_principal_approval**
> UpdateApplicationProcessingUnsecuredLoanTopupInPrincipalApprovalResponse update_application_processing_unsecured_loan_topup_in_principal_approval(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)

This API is used to update a saved Loan top-up application and in principle approval

This API is used to update a saved Loan top-up application and in principle approval

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OfferAndDecisionManagementApi.new
body = SwaggerClient::RequestedLoanTopupDecision.new # RequestedLoanTopupDecision | RequestedLoanTopupDecision
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
application_id = 'application_id_example' # String | 
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to update a saved Loan top-up application and in principle approval
  result = api_instance.update_application_processing_unsecured_loan_topup_in_principal_approval(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OfferAndDecisionManagementApi->update_application_processing_unsecured_loan_topup_in_principal_approval: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestedLoanTopupDecision**](RequestedLoanTopupDecision.md)| RequestedLoanTopupDecision | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **application_id** | **String**|  | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**UpdateApplicationProcessingUnsecuredLoanTopupInPrincipalApprovalResponse**](UpdateApplicationProcessingUnsecuredLoanTopupInPrincipalApprovalResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json







---

# OnboardingApi.md

# SwaggerClient::OnboardingApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicant_salary_and_contributions_upload**](OnboardingApi.md#applicant_salary_and_contributions_upload) | **POST** /v1/onboarding/applications/{applicationId}/applicants/salariesAndContributions/upload | Upload Salary and Employer Contributions (Superannuation) Document
[**preset_atm_pin_add**](OnboardingApi.md#preset_atm_pin_add) | **POST** /partners/v1/onboarding/applicants/apins/enrollments | Pre-set ATM Pin
[**preset_atm_pin_add_confirmation**](OnboardingApi.md#preset_atm_pin_add_confirmation) | **POST** /partners/v1/onboarding/applicants/apins/enrollments/confirmation | Pre-set ATM Pin Confirmation
[**unsecured_application_generate_and_send_otp**](OnboardingApi.md#unsecured_application_generate_and_send_otp) | **POST** /v1/apac/onboarding/products/unsecured/applications/{applicationId}/mfa/otp | Generate and Send OTP for Unsecured Application Flow
[**unsecured_application_validate_otp**](OnboardingApi.md#unsecured_application_validate_otp) | **PUT** /v1/apac/onboarding/products/unsecured/applications/{applicationId}/mfa/otp | Validate OTP for Unsecured Application Flow
[**v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_post**](OnboardingApi.md#v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_post) | **POST** /v1/apac/onboarding/products/unsecured/applications/{applicationId}/knowledgeBasedAssessments | Submit KBA Answers to Bureau
[**v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_questionnaire_get**](OnboardingApi.md#v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_questionnaire_get) | **GET** /v1/apac/onboarding/products/unsecured/applications/{applicationId}/knowledgeBasedAssessments/questionnaire | Retrieve KBA Questionnaire

# **applicant_salary_and_contributions_upload**
> applicant_salary_and_contributions_upload(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)

Upload Salary and Employer Contributions (Superannuation) Document

This API is used to upload the salary and employer contributions (superannuation) document retrieved from third party (Verifier) to host (CI).

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OnboardingApi.new
body = SwaggerClient::ApplicantSalaryAndContributionsUploadRequest.new # ApplicantSalaryAndContributionsUploadRequest | ApplicantSalaryAndContributionsUploadRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
application_id = 'application_id_example' # String | Unique identifier for the application
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Upload Salary and Employer Contributions (Superannuation) Document
  api_instance.applicant_salary_and_contributions_upload(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OnboardingApi->applicant_salary_and_contributions_upload: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApplicantSalaryAndContributionsUploadRequest**](ApplicantSalaryAndContributionsUploadRequest.md)| ApplicantSalaryAndContributionsUploadRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **application_id** | **String**| Unique identifier for the application | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **preset_atm_pin_add**
> preset_atm_pin_add(bodyauthorizationuuidacceptclient_idcontent_type, opts)

Pre-set ATM Pin

This API is used to pre-set the ATM Pin of the cards during the onboarding flow before the card is approved. This functionality should only be exposed to internal channels and white label partners.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OnboardingApi.new
body = SwaggerClient::PresetAtmPinAddRequest.new # PresetAtmPinAddRequest | PresetAtmPinAddRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Pre-set ATM Pin
  api_instance.preset_atm_pin_add(bodyauthorizationuuidacceptclient_idcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OnboardingApi->preset_atm_pin_add: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresetAtmPinAddRequest**](PresetAtmPinAddRequest.md)| PresetAtmPinAddRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **preset_atm_pin_add_confirmation**
> preset_atm_pin_add_confirmation(bodyauthorizationuuidacceptclient_idcontent_type, opts)

Pre-set ATM Pin Confirmation

This API is triggered after the PresetAtmPinAdd API and completes the preset ATM Pin process during the onboarding flow. This functionality should only be exposed to internal channels and white label partners.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OnboardingApi.new
body = SwaggerClient::PresetAtmPinAddConfirmationRequest.new # PresetAtmPinAddConfirmationRequest | PresetAtmPinAddConfirmationRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Pre-set ATM Pin Confirmation
  api_instance.preset_atm_pin_add_confirmation(bodyauthorizationuuidacceptclient_idcontent_type, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OnboardingApi->preset_atm_pin_add_confirmation: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PresetAtmPinAddConfirmationRequest**](PresetAtmPinAddConfirmationRequest.md)| PresetAtmPinAddConfirmationRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **unsecured_application_generate_and_send_otp**
> UnsecuredApplicationGenerateAndSendOtpResponse unsecured_application_generate_and_send_otp(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)

Generate and Send OTP for Unsecured Application Flow

This API is used to generate the one time password and deliver to customer for unsecured application flow.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OnboardingApi.new
body = SwaggerClient::UnsecuredApplicationGenerateAndSendOtpRequest.new # UnsecuredApplicationGenerateAndSendOtpRequest | UnsecuredApplicationGenerateAndSendOtpRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
application_id = 'application_id_example' # String | Unique identifier for the application.
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Generate and Send OTP for Unsecured Application Flow
  result = api_instance.unsecured_application_generate_and_send_otp(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OnboardingApi->unsecured_application_generate_and_send_otp: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UnsecuredApplicationGenerateAndSendOtpRequest**](UnsecuredApplicationGenerateAndSendOtpRequest.md)| UnsecuredApplicationGenerateAndSendOtpRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **application_id** | **String**| Unique identifier for the application. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**UnsecuredApplicationGenerateAndSendOtpResponse**](UnsecuredApplicationGenerateAndSendOtpResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **unsecured_application_validate_otp**
> unsecured_application_validate_otp(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)

Validate OTP for Unsecured Application Flow

This API is used to validate the OTP for unsecured application flow.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OnboardingApi.new
body = SwaggerClient::UnsecuredApplicationValidateOtpRequest.new # UnsecuredApplicationValidateOtpRequest | UnsecuredApplicationValidateOtpRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
application_id = 'application_id_example' # String | Unique identifier for the application.
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Validate OTP for Unsecured Application Flow
  api_instance.unsecured_application_validate_otp(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OnboardingApi->unsecured_application_validate_otp: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UnsecuredApplicationValidateOtpRequest**](UnsecuredApplicationValidateOtpRequest.md)| UnsecuredApplicationValidateOtpRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **application_id** | **String**| Unique identifier for the application. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_post**
> KbaSubmissionResponse v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_post(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)

Submit KBA Answers to Bureau

This API is used to submit KBA answers to Bureau for customer authentication. Application id along with KBA answers are passed in the request.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OnboardingApi.new
body = SwaggerClient::KbaSubmissionRequest.new # KbaSubmissionRequest | KbaSubmissionRequest
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
content_type = 'content_type_example' # String | application/json
application_id = 'application_id_example' # String | The unique identifier of the application.
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Submit KBA Answers to Bureau
  result = api_instance.v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_post(bodyauthorizationuuidacceptclient_idcontent_typeapplication_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OnboardingApi->v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**KbaSubmissionRequest**](KbaSubmissionRequest.md)| KbaSubmissionRequest | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **content_type** | **String**| application/json | 
 **application_id** | **String**| The unique identifier of the application. | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**KbaSubmissionResponse**](KbaSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_questionnaire_get**
> KbaQuestionnaireResponse v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_questionnaire_get(authorization, uuid, accept, client_id, application_id, control_flow_id, opts)

Retrieve KBA Questionnaire

This API retrieves the KBA questionnaire.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OnboardingApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | Client ID generated during application registration.
application_id = 'application_id_example' # String | The unique identifier of the application.
control_flow_id = 'control_flow_id_example' # String | Control Flow Id
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Retrieve KBA Questionnaire
  result = api_instance.v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_questionnaire_get(authorization, uuid, accept, client_id, application_id, control_flow_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OnboardingApi->v1_apac_onboarding_products_unsecured_applications_application_id_knowledge_based_assessments_questionnaire_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| Client ID generated during application registration. | 
 **application_id** | **String**| The unique identifier of the application. | 
 **control_flow_id** | **String**| Control Flow Id | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**KbaQuestionnaireResponse**](KbaQuestionnaireResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json







---

# OriginalCreditAccountDetails.md

# SwaggerClient::OriginalCreditAccountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**bank_name** | **String** | Name of the bank. | [optional] 
**bank_code** | **String** | The bank code of the payee account | [optional] 





---

# OriginalCreditorDetails.md

# SwaggerClient::OriginalCreditorDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_creditor_name** | **String** | Original Creditor Name | [optional] 
**original_creditor_proxy_id_type** | **String** | Proxy ID Type used for the payee account identification | [optional] 
**original_creditor_proxy_id_value** | **String** | Proxy ID value used for the payee account identification | [optional] 





---

# OriginalDebitAccountDetails.md

# SwaggerClient::OriginalDebitAccountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**bank_name** | **String** | Name of the bank. | [optional] 
**bank_code** | **String** | The bank code of the payee account | [optional] 





---

# OriginalTransactionDetails.md

# SwaggerClient::OriginalTransactionDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_type** | **String** | The payment type.This is a reference data field. Please use /v1/utilities/referenceData/{paymentType} resource to get valid value of this field with description. | [optional] 
**transaction_date** | **Date** | Transaction date in YYYY-MM-DD format value conforming to ISO 8601. This needs to be formatted in front-end for country/locale specific display purposes. This is the field used for default sorting, | [optional] 
**transaction_amount** | **Float** | Transaction amount in account currency. | [optional] 
**transaction_currency_code** | **String** | The currency code for the foreign transaction amount in ISO 4217 format. | [optional] 
**transaction_status** | **String** | Transaction Status of the original transaction | [optional] 
**transaction_reference_number** | **String** | Transaction reference number of the original transaction | [optional] 
**transaction_remarks** | **String** | Transaction Remarks of the original transaction | [optional] 
**end_to_end_identification** | **String** | End to End Identification reference of the original transaction | [optional] 





---

# OverseasCardUsageRequest.md

# SwaggerClient::OverseasCardUsageRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_request** | [**ActivationRequest**](ActivationRequest.md) |  | [optional] 
**overseas_card_usage_option** | **String** | Activation code for overseas card Usage. This is a reference data field. Please use /v1/apac/utilities/referenceData/{overseasCardUsageOption} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values | 





---

# OverseasTravelPlanAddRequest.md

# SwaggerClient::OverseasTravelPlanAddRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_codes** | [**Array&lt;CountryCodes&gt;**](CountryCodes.md) |  | [optional] 
**travel_plan_start_date** | **Date** | Travel plan start date in ISO 8601 date format YYYY-MM-DD | 
**travel_plan_end_date** | **Date** | Travel plan end date in ISO 8601 date format YYYY-MM-DD | 





---

# OverseasTravelPlanInquiryResponse.md

# SwaggerClient::OverseasTravelPlanInquiryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**travel_plan** | [**Array&lt;TravelPlan&gt;**](TravelPlan.md) |  | [optional] 





---

# OverseasTravelPlanUpdateRequest.md

# SwaggerClient::OverseasTravelPlanUpdateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**travel_plan_start_date** | **Date** | Travel plan start date in ISO 8601 date format YYYY-MM-DD | 
**travel_plan_end_date** | **Date** | Travel plan end date in ISO 8601 date format YYYY-MM-DD | 
**country_codes** | [**Array&lt;CountryCodes&gt;**](CountryCodes.md) |  | [optional] 





---

# ParentAddress.md

# SwaggerClient::ParentAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_type** | **String** | Type of address. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**address_line1** | **String** | Address line 1 | [optional] 
**address_line2** | **String** | Address line 2 | [optional] 
**address_line3** | **String** | Address line 3 | [optional] 
**address_line4** | **String** | Address line 4 | [optional] 
**city_name** | **String** | City | [optional] 
**state** | **String** | State.This is a reference data field. Please use /v1/utilities/referenceData/{addressState} resource to get valid value of this field with description. | [optional] 
**postal_code** | **String** | Postal/ZIP code | [optional] 
**province_code** | **String** | Province code | [optional] 
**country_code** | **String** | ISO country code. This is a reference data field. Please use /v1/utilities/referenceData/{country} resource to get valid value of this field with description. | [optional] 
**ok_to_mail** | **BOOLEAN** | Parent&#x27;s consent for receiving mail. Valid values: true and false | [optional] 
**residence_duration_in_years** | **Integer** | Parent&#x27;s residence duration in the current address in years. Applicable only for residential address. | [optional] 
**residence_duration_in_months** | **Integer** | Parent&#x27;s residence duration in the current address in months. Applicable only for residential address. | [optional] 
**country_specific_address** | [**ParentCountrySpecificAddress**](ParentCountrySpecificAddress.md) |  | [optional] 





---

# ParentCountrySpecificAddress.md

# SwaggerClient::ParentCountrySpecificAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_number** | **String** | Parent&#x27;s unit Number | [optional] 
**floor_number** | **String** | Parent&#x27;s floor Number | [optional] 
**block_number** | **String** | Parent&#x27;s block Number | [optional] 
**building_name** | **String** | Parent&#x27;s building Name | [optional] 
**estate_name** | **String** | Parent&#x27;s estate Name | [optional] 
**street_number** | **String** | Parent&#x27;s street Number | [optional] 
**street_name** | **String** | Parent&#x27;s street Name | [optional] 
**street_type** | **String** | Parent&#x27;s street Type.Please use /v1/utilities/referenceData/{streetType} resource to get valid value of this field with description. | [optional] 
**town** | **String** | Applicant&#x27;s town | [optional] 





---

# ParentInformation.md

# SwaggerClient::ParentInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**ParentName**](ParentName.md) |  | [optional] 
**address** | [**Array&lt;ParentAddress&gt;**](ParentAddress.md) |  | [optional] 
**phone** | [**Array&lt;ParentPhone&gt;**](ParentPhone.md) |  | [optional] 





---

# ParentName.md

# SwaggerClient::ParentName

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salutation** | **String** | Salutation. This is a reference data field. Please use /v1/utilities/referenceData/{salutation} resource to get valid value of this field with description. | [optional] 
**given_name** | **String** | Given/first name of the Parent | 
**middle_name** | **String** | Middle name of the Parent | [optional] 
**surname** | **String** | Surname/last name of the Parent | [optional] 
**local_english_given_name** | **String** | Local given name in English | [optional] 
**local_english_surname** | **String** | Local surname in English | [optional] 
**alias_name** | **String** | Alias name of the Parent | [optional] 
**full_name** | **String** | Full name of the Parent. | [optional] 
**salute_by** | **String** | Contains value with which Parent like to be addressed. This is a reference data field. Please use /v1/utilities/referenceData/{saluteBy} resource to get valid value of this field with description. | [optional] 





---

# ParentPhone.md

# SwaggerClient::ParentPhone

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_type** | **String** | The type of phone. Ex:OFFICE, HOME, MOBILE, PRIMARY_MOBILE, FAX. This is a reference data field. Please use /v1/utilities/referenceData/{phoneType} resource to get valid value of this field with description. | 
**phone_country_code** | **String** | Country code of phone number | 
**area_code** | **String** | The area code of phone number | [optional] 
**phone_number** | **String** | Parent&#x27;s phone number | 
**extension** | **String** | Extension of telephone number | [optional] 
**ok_to_sms** | **BOOLEAN** | Parent&#x27;s consent for receiving sms. This is applicable only if phone type is MOBILE. Valid values: true and false | [optional] 
**ok_to_call** | **BOOLEAN** | Parent&#x27;s consent for receiving phone calls. Valid values: true and false | [optional] 





---

# PartialResponseInformation.md

# SwaggerClient::PartialResponseInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **String** | This refer to the field for which partial failure happened | [optional] 
**reason_code** | **String** | This refer to reason info of partial failure. | [optional] 
**additional_information** | **String** | This refer to additional details of partial failure. | [optional] 





---

# PartnerCardDetails.md

# SwaggerClient::PartnerCardDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | The card id  in encrypted format | 
**display_card_number** | **String** | A masked card number that can be displayed to the customer. | [optional] 
**local_card_activation_indicator** | **String** | The card activation indicator for local usage. This is a reference data field. Please use /v1/apac/utilities/referenceData/{localCardActivationIndicator} resource to get valid value of this field with description. | 
**overseas_card_activation_indicator** | **String** | The card activation indicator for overseas usage. This is a reference data field. Please use /v1/apac/utilities/referenceData/{overseasCardActivationIndicator} resource to get valid value of this field with description. | [optional] 
**perpetual_activation_flag** | **BOOLEAN** | Flag to specify whether the card is activated perpetually, till card expiration | [optional] 
**overseas_card_activation_start_date** | **Date** | Card activation start date in ISO 8601 date format YYYY-MM-DD for overseas usage. | [optional] 
**overseas_card_activation_end_date** | **Date** | Card activation end date in ISO 8601 date format YYYY-MM-DD for overseas usage. For perpetual activation, value is card expiry date | [optional] 
**current_credit_limit_amount** | **Float** | Current credit limit amount on the credit card | 
**maximum_permanent_credit_limit_amount** | **Float** | Maximum permanent credit limit amount allowed on the credit card | [optional] 
**maximum_temporary_credit_limit_amount** | **Float** | Maximum temporary credit limit amount allowed on the credit card | [optional] 
**sub_card_type** | **String** | Type of the card. Debit or Credit.This is a reference data field. Please use /v1/apac/utilities/referenceData/{subCardType} resource to get valid value of this field with description. | 
**card_holder_type** | **String** | Indicator to specify whether the card is primary or supplementary. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardHolderType} resource to get valid value of this field with description. | [optional] 
**card_issue_reason** | **String** | Specifies the reason for the card issuance. Applicable only for recently issued cards. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardIssueReason} resource to get valid value of this field with description. | [optional] 
**card_functions_allowed** | [**Array&lt;CardFunctionsAllowed&gt;**](CardFunctionsAllowed.md) |  | [optional] 
**emboss_name** | **String** | Name to be embossed on card.If blank, bank will assign automatically based on the market norms. | [optional] 
**organization** | **String** | Card issuing organization name | [optional] 
**logo** | **String** | Product logo to identify the product | [optional] 
**product_name** | **String** | The name of the product | [optional] 
**primary_card_id** | **String** | The primary card id in encrypted format. Applicable only for supplementary cards. | [optional] 
**display_primary_card_number** | **String** | A masked primary card number that can be displayed to the customer. Applicable only for supplementary cards. | [optional] 
**card_plastic_type** | **String** | Indicates the card plastic type used for embossing.This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardPlasticType} resource to get valid value of this field with description. | [optional] 
**current_contactless_wthout_pin_pmt_limit** | **Float** | Current transaction limit for the contact less payments without pin set by the customer | [optional] 
**max_contactless_without_pin_pmt_limit** | **Float** | Maximum transaction limit for the contact less payments without pin | [optional] 





---

# PartnerCardListingResponse.md

# SwaggerClient::PartnerCardListingResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_card_details** | [**Array&lt;PartnerCardDetails&gt;**](PartnerCardDetails.md) |  | [optional] 





---

# PartnerCustomerDetails.md

# SwaggerClient::PartnerCustomerDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_customer_internal_id** | **String** | Unique customer internal number associated with the partner. | [optional] 
**partner_customer_segment** | **String** | Partner customer segment.This is a reference data field. Please use /v1/apac/utilities/referenceData/{partnerCustomerSegment} resource to get possible value of this field with description. | [optional] 
**partner_customer_id** | **String** | Unique customer Id associated with the partner | [optional] 





---

# PayeeAccountDetails.md

# SwaggerClient::PayeeAccountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payee_nick_name** | **String** | The nick name of the payee assigned by the customer. | [optional] 
**payee_name** | **String** | Name of the payee. | [optional] 
**display_payee_account_number** | **String** | The display account number of the destination account | [optional] 
**iban** | **String** | IBAN stands for International Bank Account Number and is a number attached to all accounts in the EU countries plus Norway, Switzerland, Liechtenstein and Hungary. The IBAN is made up of a code that identifies the country the account belongs to, the account holders bank and the account number itself | [optional] 
**payee_id** | **String** | Unique identifier associated with the payee.Typically, this is not displayed to the customer. | [optional] 
**payee_bank_name** | **String** | Name of the bank. | [optional] 
**payment_type** | **String** | The payment type.This is a reference data field. Please use /v1/utilities/referenceData/{paymentType} resource to get valid value of this field with description. | [optional] 
**bank_code** | **String** | Bank Code of the Payee | [optional] 





---

# PaymentPans.md

# SwaggerClient::PaymentPans

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor** | [**BigDecimal**](BigDecimal.md) | Tenure of loan in months. | [optional] 
**effective_interest_rate** | **Float** | Loan effective interest rate | [optional] 
**annual_percentage_rate** | **Float** | Compounded annual interest rate. | [optional] 
**one_time_processing_fee_indicator** | **String** | One time processing fee indicator. Valid values : PERCENTAGE, FIXED_AMOUNT. This is a reference data field. Please use /v1/utilities/referenceData/{oneTimeProcessingFeeIndicator} resource to get valid value of this field with description. | [optional] 
**one_time_processing_fee_amount** | **Float** | Fee charged as part of one time processing. | [optional] 
**one_time_processing_fee_percentage** | **Float** | Percentage of one time processing fee charged. | [optional] 





---

# PendingApplicationsForCustomerInquiryResponse.md

# SwaggerClient::PendingApplicationsForCustomerInquiryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_details** | [**Array&lt;ApplicationDetails&gt;**](ApplicationDetails.md) |  | [optional] 





---

# PendingAuthorizationTransaction.md

# SwaggerClient::PendingAuthorizationTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_start_index** | **String** | For pagination - the starting index for retrieving the next page/batch of records. | [optional] 
**more_indicator** | **String** | This field is used for  pagination, it indicates that more records are available for retrieval. | [optional] 





---

# PendingAuthorizationTransactionRecords.md

# SwaggerClient::PendingAuthorizationTransactionRecords

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_date** | **Date** | EffectiveDate should be in ISO 8601 format YYYY-MM-DD | [optional] 
**transaction_time** | **String** | EffectiveTime  should follow ISO 8601 format hh:mm:ss | [optional] 
**transaction_currency_code** | **String** | transactionCurrencyCode. This is a reference data field. Please use /v1/utilities/referenceData/{transactionCurrencyCode} resource to get possible values of this field with descriptions | [optional] 
**transaction_amount** | **Float** | TransactionAmount | [optional] 
**transaction_status** | **String** | AuthorizationResponseCode of the transaction. This is a reference data field. Please use /v1/utilities/referenceData/{transactionStatus} resource to get possible values of this field with descriptions | [optional] 
**billed_currency_code** | **String** | billedCurrencyCode. This is a reference data field. Please use /v1/utilities/referenceData/{billedCurrencyCode} resource to get possible values of this field with descriptions | [optional] 
**billed_amount** | **Float** | billedAmount | [optional] 
**merchant_name** | **String** | Merchant Name | [optional] 





---

# PendingAuthorizationTransactions.md

# SwaggerClient::PendingAuthorizationTransactions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_transactions** | **Integer** | Total Number of Transactions | [optional] 
**more_indicator** | **String** | This field indicates that more records are available for retrieval. Y &#x3D; more records are available for retrieval, N &#x3D; no more records are available for retrieval | [optional] 
**next_start_index** | **String** | This field indicates the starting index for retrieving the next page/batch of records. | [optional] 
**pending_authorization_transaction_records** | [**Array&lt;PendingAuthorizationTransactionRecords&gt;**](PendingAuthorizationTransactionRecords.md) |  | [optional] 





---

# PendingMarketingCampaignOfferDetails.md

# SwaggerClient::PendingMarketingCampaignOfferDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_id** | **String** | Unique identifier for a specific campaign being offered to the channel | [optional] 
**wave_id** | **String** | Unique identifier for the promotion under specific campaign being offered to the channel | [optional] 





---

# PendingTransaction.md

# SwaggerClient::PendingTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_date** | **Date** | Transaction date in YYYY-MM-DD format value conforming to ISO 8601. This needs to be formatted in front-end for country/locale specific display purposes. This is the field used for default sorting, | 
**transaction_description** | **String** | Transaction description from the merchant, POS or bank. If there are foreign currency transactions on checking /saving account(s) then description includes exchange rate, city and country. | 
**transaction_authorization_code** | **String** | Transaction authorization code is a unique to a sales credit card transaction to indicate that the sale has been authorized. This is applicable only for pending transactions. | [optional] 
**transaction_reference_id** | **String** | Reference Id to uniquely identify the transaction. | [optional] 
**merchant_name** | **String** | Transaction merchant name. | [optional] 
**transaction_amount** | **Float** | Transaction amount in local currency. | 





---

# PermanentCreditLimitIncrease.md

# SwaggerClient::PermanentCreditLimitIncrease

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | Unique Id of the card in encrypted format. | 
**requested_credit_limit_amount** | **Float** | Customers preferred revised credit limit. This is the combined limit  shared with all the existing credit cards of the customer | 





---

# PersonalAccountDetails.md

# SwaggerClient::PersonalAccountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_nick_name** | **String** | The nickname of the account assigned by the customer | 
**account_id** | **String** | The account number in encrypted format. | 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**iban** | **String** | IBAN stands for International Bank Account Number and is a number attached to all accounts in the EU countries plus Norway, Switzerland, Liechtenstein and Hungary. The IBAN is made up of a code that identifies the country the account belongs to, the account holders bank and the account number itself | [optional] 
**currency_code** | **String** | The currency code of the account in ISO 4217 format | [optional] 





---

# Phone.md

# SwaggerClient::Phone

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_type** | **String** | The type of phone. Ex:OFFICE, HOME, MOBILE, PRIMARY_MOBILE, FAX. This is a reference data field. Please use /v1/apac/utilities/referenceData/{phoneType} resource to get valid value of this field with description. | 
**area_code** | **String** | The area code of phone number | [optional] 
**extension** | **String** | Extension of telephone number | [optional] 
**phone_number** | **String** | Applicant&#x27;s phone number | 
**phone_country_code** | **String** | Country calling code. This is a reference data field. Please use /utilities/referenceData/{phoneCountryCode} resource to get valid values of this field with descriptions | 





---

# PremiumDepositAccount.md

# SwaggerClient::PremiumDepositAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**base_currency_principal_amount** | **Float** | The investment amount in base currency | [optional] 
**base_currency_code** | **String** | The base currency code in ISO 4217 format | [optional] 
**alternate_currency_principal_amount** | **Float** | The investment amount in alternate currency | [optional] 
**opening_date** | **Date** | Premium deposit open date in ISO 8601 date format YYYY-MM-DD | [optional] 
**alternate_currency_code** | **String** | The alternate currency code in ISO 4217 format | [optional] 
**base_currency_disposal_account** | **String** | The account number to deposit returns of base currency, upon maturity | [optional] 
**alternate_currency_disposal_account** | **String** | The account number to deposit returns of alternate currency, upon maturity | [optional] 
**base_currency_interest_amount** | **Float** | The accrued interest amount in base currency | [optional] 
**alternate_currency_interest_amount** | **Float** | The accrued interest amount in alternate currency | [optional] 
**base_currency_maturity_amount** | **Float** | The investment amount and accrued interest in base currency | [optional] 
**alternate_currency_maturity_amount** | **Float** | The investment amount and accrued interest in alternate currency | [optional] 
**base_currency_premium_amount** | **Float** | A part or all of the interest the customer earns on the Premium Account represents the premium that the bank pays the customer for the currency option | [optional] 
**maturity_date** | **Date** | The date when the premium deposit will mature, in ISO8601 date format YYYY-MM-DD | [optional] 
**strike_price** | **Float** | The Pre-agreed exchange rate | [optional] 
**customer_interest_rate** | **Float** | The customer interest rate applicable for the premium deposit | [optional] 
**accrued_interest_rate** | **Float** | The accrued interest rate applicable for the premium deposit | [optional] 
**benchmark_interest_rate** | **Float** | The benchmark interest rate applicable for the premium deposit | [optional] 
**deal_status** | **String** | The deal status. This is a reference data field. Please use /v1/apac/utilities/referenceData/{dealStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**expiry_date** | **Date** | The date when the premium deposit deal will expire, in ISO8601 date format YYYY-MM-DD | [optional] 
**tenor_term** | **Integer** | The tenor term for deposit | [optional] 
**tenor_period** | **String** | This is a reference data field. Please use /v1/apac/utilities/referenceData/{tenorPeriod} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**relationship** | [**Relationship**](Relationship.md) |  | [optional] 





---

# PremiumDepositAccountSummary.md

# SwaggerClient::PremiumDepositAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**account_nickname** | **String** | The nickname of the account assigned by the customer | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format. | [optional] 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 
**account_classification** | **String** | Classification of account either as ASSET or LIABILITY. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClassification} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_status** | **String** | Status of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**current_balance** | **Float** | The current market worth of investment | [optional] 
**original_principal_amount** | **Float** | The amount invested | [optional] 
**maturity_date** | **Date** | The date when the time deposit will mature in ISO8601 date format YYYY-MM-DD | [optional] 





---

# PresetAtmPinAddConfirmationRequest.md

# SwaggerClient::PresetAtmPinAddConfirmationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **String** | The unique identifier of the application. | 
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | 





---

# PresetAtmPinAddRequest.md

# SwaggerClient::PresetAtmPinAddRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **String** | The unique identifier of the application. | 
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | 
**encrypted_pin** | **String** | Encrypted ATM PIN set by the customer | 
**pin_registration_key** | **String** | Unique key used for the registration of ATM PIN | 
**pin_length** | **Integer** | Length of the ATM  PIN | 
**key_device_id** | **String** | Label to identify the HSM keys used to encrypt PIN | 
**key_generation_id** | **String** | It is the generation ID of the HSM Keys referred for encryption for PIN | 





---

# PreviousPrimaryCard.md

# SwaggerClient::PreviousPrimaryCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | The customer card identifier in encrypted format | [optional] 





---

# PrimaryBankDetails.md

# SwaggerClient::PrimaryBankDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_name** | **String** | Main bank name with Citi. This is a reference data field. Please use /v1/utilities/referenceData/{bankName} resource to get valid value of this field with description. | [optional] 
**account_type** | **String** | Type of the account. This is a reference data field. Please use /v1/utilities/referenceData/{accountType} resource to get valid value of this field with description. | [optional] 





---

# Product.md

# SwaggerClient::Product

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product. This is applicant selected product. | 
**source_code** | **String** | A source code to identify the product | 





---

# ProductAdd.md

# SwaggerClient::ProductAdd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_product** | [**CreditCardProductAdd**](CreditCardProductAdd.md) |  | [optional] 
**ready_credit_product** | [**ReadyCreditProductAdd**](ReadyCreditProductAdd.md) |  | [optional] 
**unsecured_loan_product** | [**UnsecuredLoanProductAdd**](UnsecuredLoanProductAdd.md) |  | [optional] 





---

# ProductCatalogueResponse.md

# SwaggerClient::ProductCatalogueResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | [**Array&lt;Product&gt;**](Product.md) |  | 
**next_start_index** | **String** | The next start index of the next subset of products. | [optional] 





---

# ProductConfirmation.md

# SwaggerClient::ProductConfirmation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | 
**source_code** | **String** | A source code to identify the product | [optional] 
**organization** | **String** | Card issuing Organisation code | [optional] 
**credit_specific_selection** | [**CreditSpecificSelection**](CreditSpecificSelection.md) |  | [optional] 
**loan_specific_selection** | [**LoanSpecificSelection**](LoanSpecificSelection.md) |  | [optional] 





---

# ProductConfirmationUpdate.md

# SwaggerClient::ProductConfirmationUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | [optional] 
**source_code** | **String** | A source code to identify the product | [optional] 
**organization** | **String** | Card issuing Organisation code | [optional] 
**loan_specific_selection** | [**LoanSpecificSelectionUpdate**](LoanSpecificSelectionUpdate.md) |  | [optional] 





---

# ProductResponse.md

# SwaggerClient::ProductResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**Meta**](Meta.md) |  | [optional] 
**data** | [**Array&lt;Data&gt;**](Data.md) |  | [optional] 





---

# ProductUpdate.md

# SwaggerClient::ProductUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_product** | [**CreditCardProductUpdate**](CreditCardProductUpdate.md) |  | [optional] 
**ready_credit_product** | [**ReadyCreditProductUpdate**](ReadyCreditProductUpdate.md) |  | [optional] 
**unsecured_loan_product** | [**UnsecuredLoanProductUpdate**](UnsecuredLoanProductUpdate.md) |  | [optional] 





---

# ProductsApi.md

# SwaggerClient::ProductsApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//cds-au/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_product_detail**](ProductsApi.md#get_product_detail) | **GET** /banking/products/{productId} | Get Product Detail
[**list_products**](ProductsApi.md#list_products) | **GET** /banking/products | Get Products

# **get_product_detail**
> ResponseBankingProductById get_product_detail(product_id, x_v, opts)

Get Product Detail

This API is used to get the detailed information on the selected product such as features, eligibility, fees and more. To retrieve the details, simply pass the product id returned from the Get Products API callout.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProductsApi.new
product_id = 'product_id_example' # String | ID of the specific product requested
x_v = 'x_v_example' # String | Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)
opts = { 
  x_min_v: 'x_min_v_example' # String | Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable.
}

begin
  #Get Product Detail
  result = api_instance.get_product_detail(product_id, x_v, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProductsApi->get_product_detail: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **String**| ID of the specific product requested | 
 **x_v** | **String**| Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers) | 
 **x_min_v** | **String**| Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. | [optional] 

### Return type

[**ResponseBankingProductById**](ResponseBankingProductById.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **list_products**
> ResponseBankingProductList list_products(x_v, opts)

Get Products

This API is used to get the list of product categories that are currently offered to the market.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::ProductsApi.new
x_v = 'x_v_example' # String | Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers)
opts = { 
  effective: 'CURRENT', # String | Allows for the filtering of products based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields. Valid values are ‘CURRENT’, ‘FUTURE’ and ‘ALL’. If absent defaults to 'CURRENT'
  updated_since: 'updated_since_example', # String | Only include products that have been updated after the specified date and time. If absent defaults to include all products
  brand: 'brand_example', # String | Filter results based on a specific brand
  product_category: 'product_category_example', # String | Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned.
  page: 1, # Integer | Page of results to request (standard pagination)
  page_size: 25, # Integer | Page size to request. Default is 25 (standard pagination)
  x_min_v: 'x_min_v_example' # String | Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable.
}

begin
  #Get Products
  result = api_instance.list_products(x_v, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling ProductsApi->list_products: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_v** | **String**| Version of the API end point requested by the client. Must be set to a positive integer. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If the value of [x-min-v](#request-headers) is equal to or higher than the value of [x-v](#request-headers) then the [x-min-v](#request-headers) header should be treated as absent. If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. See [HTTP Headers](#request-headers) | 
 **effective** | **String**| Allows for the filtering of products based on whether the current time is within the period of time defined as effective by the effectiveFrom and effectiveTo fields. Valid values are ‘CURRENT’, ‘FUTURE’ and ‘ALL’. If absent defaults to &#x27;CURRENT&#x27; | [optional] [default to CURRENT]
 **updated_since** | **String**| Only include products that have been updated after the specified date and time. If absent defaults to include all products | [optional] 
 **brand** | **String**| Filter results based on a specific brand | [optional] 
 **product_category** | **String**| Used to filter results on the productCategory field applicable to accounts. Any one of the valid values for this field can be supplied. If absent then all accounts returned. | [optional] 
 **page** | **Integer**| Page of results to request (standard pagination) | [optional] [default to 1]
 **page_size** | **Integer**| Page size to request. Default is 25 (standard pagination) | [optional] [default to 25]
 **x_min_v** | **String**| Minimum version of the API end point requested by the client. Must be set to a positive integer if provided. The data holder should respond with the highest supported version between [x-min-v](#request-headers) and [x-v](#request-headers). If all versions requested are not supported then the data holder should respond with a 406 Not Acceptable. | [optional] 

### Return type

[**ResponseBankingProductList**](ResponseBankingProductList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json







---

# Prospect.md

# SwaggerClient::Prospect

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mother_maiden_name** | **String** | Mother&#x27;s maiden name | [optional] 
**name** | [**Name**](Name.md) |  | 
**demographics** | [**Demographics**](Demographics.md) |  | [optional] 
**address** | [**Array&lt;Address&gt;**](Address.md) |  | 
**email** | [**Array&lt;Email&gt;**](Email.md) |  | 
**phone** | [**Array&lt;Phone&gt;**](Phone.md) |  | 
**contact_preference** | [**ContactPreference**](ContactPreference.md) |  | 
**financial_information** | [**FinancialInformation**](FinancialInformation.md) |  | [optional] 
**education** | [**Education**](Education.md) |  | [optional] 
**employment_details** | [**Array&lt;EmploymentDetails&gt;**](EmploymentDetails.md) |  | [optional] 
**identification_document_details** | [**Array&lt;IdentificationDocumentDetails&gt;**](IdentificationDocumentDetails.md) |  | [optional] 
**additional_data** | [**AdditionalData**](AdditionalData.md) |  | [optional] 
**self_declaration** | [**SelfDeclaration**](SelfDeclaration.md) |  | [optional] 
**kyc_information** | [**KycInformation**](KycInformation.md) |  | [optional] 





---

# ProspectAddRequest.md

# SwaggerClient::ProspectAddRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interest** | [**Interest**](Interest.md) |  | 
**prospect** | [**Prospect**](Prospect.md) |  | 





---

# ProspectAddResponse.md

# SwaggerClient::ProspectAddResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prospect_id** | **String** | Unique identifier for the prospect | [optional] 





---

# ProviderInfo.md

# SwaggerClient::ProviderInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Codes for overridable host errors, warning messages, or additional info. | [optional] 
**detail** | **String** | Description for the host error, warning, or additional info. | [optional] 
**field_id** | **String** | The ICR step which generated the host error, warning, or additional info. | [optional] 





---

# Questionnaire.md

# SwaggerClient::Questionnaire

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question_sequence_number** | **Integer** | Question sequence number | [optional] 
**questionnaire_id** | **String** | Identifer used in request to map a response to a given questionnaire. | [optional] 
**question_id** | **String** | Question Number used in request to map a response to a given enquiry. | [optional] 
**question_text** | **String** | Question text to be displayed to the end user. | [optional] 
**question_type** | **String** | Type of question. | [optional] 
**timetakento_answer** | **Integer** | Time taken to answer this question by customer. | [optional] 
**response_options** | [**Array&lt;ResponseOptions&gt;**](ResponseOptions.md) |  | [optional] 





---

# QuestionnaireRes.md

# SwaggerClient::QuestionnaireRes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question_sequence_number** | **Integer** | Question sequence number | [optional] 
**questionnaire_id** | **String** | Identifer used in request to map a response to a given questionnaire. | [optional] 
**question_number** | **String** | Question Number used in request to map a response to a given enquiry. | [optional] 
**question_text** | **String** | Question text to be displayed to the end user. | [optional] 
**question_type** | **String** | Type of question. | [optional] 
**response_options** | [**Array&lt;KbaQResponseOptions&gt;**](KbaQResponseOptions.md) |  | [optional] 





---

# README.md

# swagger_client

SwaggerClient - the Ruby gem for the TaxStatement_Digital_Orchestation

Account Documents APIs Version 2.0. These APIs will be used by Citi Partners to retrieve tax documents for existing Accounts from various regions. PCF Deployment Reference name --> DM-O-DocumentServices-Statements  </br>Version 2.0.0 Added new Tax statements apis.

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.ruby.RubyClientCodegen

## Installation

### Build a gem

To build the Ruby code into a gem:

```shell
gem build swagger_client.gemspec
```

Then either install the gem locally:

```shell
gem install ./swagger_client-1.0.0.gem
```
(for development, run `gem install --dev ./swagger_client-1.0.0.gem` to install the development dependencies)

or publish the gem to a gem hosting service, e.g. [RubyGems](https://rubygems.org/).

Finally add this to the Gemfile:

    gem 'swagger_client', '~> 1.0.0'

### Install from Git

If the Ruby gem is hosted at a git repository: https://github.com/GIT_USER_ID/GIT_REPO_ID, then add the following in the Gemfile:

    gem 'swagger_client', :git => 'https://github.com/GIT_USER_ID/GIT_REPO_ID.git'

### Include the Ruby code directly

Include the Ruby code directly using `-I` as follows:

```shell
ruby -Ilib script.rb
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:
```ruby
# Load the gem
require 'swagger_client'

api_instance = SwaggerClient::TaxStatementsApi.new
authorization = 'authorization_example' # String | The authorization token received in earlier API call. This will contain the access token and partner identity. This header is populated only for third-party partners.
accept = 'application/json' # String | Content types that are acceptable for the response. Currently we support application/json
content_type = 'content_type_example' # String | Content-Type of the request
uuid = '4468adf1-adfe-4f85-a2c1-f29beaa1f6ee' # String | 128 bit random UUID generated uniquely for every request.
client_id = '1c5f30d9-043c-49ff-b9c4-255a923278b2' # String | The client ID received during customer onboarding.
taxstatement_id = 'taxstatement_id_example' # String | Unique id that maps to the specific tax statement to be downloaded.
opts = { 
  country_code: 'country_code_example' # String | Two character ISO format country code.
}

begin
  #OB Return the masked tax statement for the given tax statement id
  result = api_instance.get_tax_statement(authorization, accept, content_type, uuid, client_id, taxstatement_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TaxStatementsApi->get_tax_statement: #{e}"
end

api_instance = SwaggerClient::TaxStatementsApi.new
authorization = 'authorization_example' # String | The authorization token received in earlier API call. This will contain the access token and partner identity. This header is populated only for third-party partners.
accept = 'application/json' # String | Content types that are acceptable for the response. Currently we support application/json
uuid = '4468adf1-adfe-4f85-a2c1-f29beaa1f6ee' # String | 128 bit random UUID generated uniquely for every request
content_type = 'content_type_example' # String | Content-Type of the request
client_id = '1c5f30d9-043c-49ff-b9c4-255a923278b2' # String | The client ID received during application registration in the developer portal.
opts = { 
  country_code: 'country_code_example' # String | Two character ISO format country code.
}

begin
  #OB Returns list of masked tax statements
  result = api_instance.get_tax_statements(authorization, accept, uuid, content_type, client_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TaxStatementsApi->get_tax_statements: #{e}"
end
```

## Documentation for API Endpoints

All URIs are relative to */gcgapi/docmgmt/taxforms/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SwaggerClient::TaxStatementsApi* | [**get_tax_statement**](docs/TaxStatementsApi.md#get_tax_statement) | **GET** /taxStatements/{taxstatementId} | OB Return the masked tax statement for the given tax statement id
*SwaggerClient::TaxStatementsApi* | [**get_tax_statements**](docs/TaxStatementsApi.md#get_tax_statements) | **GET** /taxStatements | OB Returns list of masked tax statements

## Documentation for Models

 - [SwaggerClient::Document](docs/Document.md)
 - [SwaggerClient::DocumentDetails](docs/DocumentDetails.md)
 - [SwaggerClient::Documents](docs/Documents.md)
 - [SwaggerClient::ErrorResponse](docs/ErrorResponse.md)

## Documentation for Authorization

 All endpoints do not require authorization.





---

# README_for_Taxonomy.md


## API Calls

If you wish to programmatically fetch the Autonomous Private Banking Taxonomy dataset, you can do so via the following curl commands:

```bash
# Fetch rows of the dataset
curl -X GET      "https://datasets-server.huggingface.co/rows?dataset=Admin08077%2FTaxonomy&config=default&split=train&offset=0&limit=100"

# Get dataset splits
curl -X GET      "https://datasets-server.huggingface.co/splits?dataset=Admin08077%2FTaxonomy"

# Download the dataset in Parquet format
curl -X GET      "https://huggingface.co/api/datasets/Admin08077/Taxonomy/parquet/default/train"
```

To clone the dataset repository, make sure you have git-lfs installed. Then run:

```bash
git lfs install
git clone https://huggingface.co/datasets/Admin08077/Taxonomy
```

If you want to clone without large files, you can use:

```bash
GIT_LFS_SKIP_SMUDGE=1 git clone https://huggingface.co/datasets/Admin08077/Taxonomy
```

### Python Code to Load Dataset

If you are using Python, you can easily load the dataset using the Hugging Face `datasets` library:

```python
from datasets import load_dataset

dataset = load_dataset("Admin08077/Taxonomy")
```

## Citation

If you use this dataset in your research or project, please cite it using the following BibTeX entry:

```bibtex
@misc{james_burvel_o'callaghan_iii_2023,
  author    = {James Burvel O'Callaghan III},
  title     = {Taxonomy (Revision 9e2a198)},
  year      = 2023,
  url       = {https://huggingface.co/datasets/Admin08077/Taxonomy},
  doi       = {10.57967/hf/1070},
  publisher = {Hugging Face}
}
```




---

# ReadyCreditAccount.md

# SwaggerClient::ReadyCreditAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**currency_code** | **String** | The currency code of the account in ISO 4217 format | [optional] 
**outstanding_balance** | **Float** | The amount of money owed | [optional] 
**last_statement_balance** | **Float** | The balance on last statement date | [optional] 
**last_statement_date** | **Date** | The date of the last statement in ISO 8601 date format YYYY-MM-DD | [optional] 
**minimum_due_amount** | **Float** | Minimum due amount for a payment cycle | [optional] 
**credit_limit** | **Float** | The maximum amount of credit that extend to a customer | [optional] 
**available_credit** | **Float** | Available credit limit of ready credit account | [optional] 
**cash_advance_limit** | **Float** | Some percentage of credit limit to withdraw cash | [optional] 
**cash_advance_available_amount** | **Float** | The amount available under cash advance limit | [optional] 
**last_payment_amount** | **Float** | The amount of the last payment made | [optional] 
**last_payment_date** | **Date** | The date of the last payment in ISO 8601 date format YYYY-MM-DD | [optional] 
**next_payment_amount** | **Float** | The next payment amount due | [optional] 
**next_payment_date** | **Date** | The date of the next payment in ISO 8601 date format YYYY-MM-DD | [optional] 





---

# ReadyCreditAccountBalanceSummary.md

# SwaggerClient::ReadyCreditAccountBalanceSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_disputed_transaction_amount** | **Float** | This is the total disputed transaction amount. | [optional] 
**current_outstanding_amount** | **Float** | This includes the current intra-day transactions which yet to be posted on card. | 
**current_accrued_interest** | **Float** | Interest which has been accrued till last accrual date. | 
**payment_due_amount** | **Float** | Total amount customer needs to pay in order to clear the balance. | 
**available_point_balance** | **Float** | Available reward points on the credit card | [optional] 
**partial_response_information** | [**Array&lt;PartialResponseInformation&gt;**](PartialResponseInformation.md) | Partial success response | [optional] 





---

# ReadyCreditAccountSummary.md

# SwaggerClient::ReadyCreditAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**account_nickname** | **String** | The nickname of the account assigned by the customer | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format. | [optional] 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 
**account_status** | **String** | Status of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_classification** | **String** | Classification of account either as ASSET or LIABILITY. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClassification} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**outstanding_balance** | **Float** | The amount of money owed. | [optional] 
**available_credit** | **Float** | Available Credit for the ready credit account. It is the amount that is available to be charged to a ready credit account | [optional] 
**next_payment_amount** | **Float** | The next payment amount due | [optional] 
**next_payment_date** | **Date** | The date of the next payment in ISO 8601 date format YYYY-MM-DD | [optional] 





---

# ReadyCreditProduct.md

# SwaggerClient::ReadyCreditProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing organization name | 
**logo** | **String** | Product logo to identify the product | 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**emboss_name** | **String** | Name to be embossed on card | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**card_delivery_address** | **String** | Card delivery address of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option for to review the credit limit in the future.Valid values: true and false | [optional] 
**atm_required_flag** | **BOOLEAN** | Option to get ATM card along with product. Valid values: true and false | [optional] 
**cheque_book_required_flag** | **BOOLEAN** | Option to get cheque book along with product. Valid values: true and false | [optional] 
**balance_transfer_details** | [**Array&lt;BalanceTransferDetails&gt;**](BalanceTransferDetails.md) |  | [optional] 
**loan_purpose** | **String** | Purpose of loan. This is a reference data field. Please use /v1/utilities/referenceData/{loanPurpose} resource to get valid value of this field with description. | [optional] 
**requested_credit_limit** | **Float** | Credit limit requested by applicant for the product. | [optional] 
**equal_payment_plan** | [**Array&lt;EqualPaymentPlan&gt;**](EqualPaymentPlan.md) |  | [optional] 
**atm_pin_registration_flag** | **BOOLEAN** | Flag to indicate if ATM PIN for the card is registered already by customer. | [optional] 
**credit_limit_accepted_flag** | **BOOLEAN** | Flag to indicate acceptance of customer for the ready credit limit. | [optional] 





---

# ReadyCreditProductAdd.md

# SwaggerClient::ReadyCreditProductAdd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing organization name | 
**logo** | **String** | Product logo to identify the product | 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**emboss_name** | **String** | Name to be embossed on card | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**card_delivery_address** | **String** | Card delivery address of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. You can use addressType field name as the referenceCode parameter to retrieve the values. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option for to review the credit limit in the future.Valid values: true and false | [optional] 
**atm_required_flag** | **BOOLEAN** | Option to get ATM card along with product. Valid values: true and false | [optional] 
**cheque_book_required_flag** | **BOOLEAN** | Option to get cheque book along with product. Valid values: true and false | [optional] 
**loan_purpose** | **String** | Purpose of loan. This is a reference data field. Please use /v1/utilities/referenceData/{loanPurpose} resource to get valid value of this field with description. | [optional] 
**requested_credit_limit** | **Float** | Credit limit requested by applicant for the product. | [optional] 
**equal_payment_plan** | [**Array&lt;EqualPaymentPlan&gt;**](EqualPaymentPlan.md) |  | [optional] 





---

# ReadyCreditProductUpdate.md

# SwaggerClient::ReadyCreditProductUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | [optional] 
**source_code** | **String** | A source code to identify the product | [optional] 
**organization** | **String** | Card issuing organization name | [optional] 
**logo** | **String** | Product logo to identify the product | [optional] 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**emboss_name** | **String** | Name to be embossed on card | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**card_delivery_address** | **String** | Card delivery address of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**pin_delivery_address** | **String** | Delivery address  for card pin of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**requested_credit_limit** | **Float** | Credit limit requested by applicant for the product. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**credit_limit_increase_indicator** | **BOOLEAN** | Option for to review the credit limit in the future.Valid values: true and false | [optional] 
**atm_required_flag** | **BOOLEAN** | Option to get ATM card along with product. Valid values: true and false | [optional] 
**cheque_book_required_flag** | **BOOLEAN** | Option to get cheque book along with product. Valid values: true and false | [optional] 
**balance_transfer_details** | [**Array&lt;BalanceTransferDetails&gt;**](BalanceTransferDetails.md) |  | [optional] 
**loan_purpose** | **String** | Purpose of loan. This is a reference data field. Please use /v1/utilities/referenceData/{loanPurpose} resource to get valid value of this field with description. | [optional] 
**equal_payment_plan** | [**Array&lt;EqualPaymentPlanUpdate&gt;**](EqualPaymentPlanUpdate.md) |  | [optional] 
**credit_limit_accepted_flag** | **BOOLEAN** | Flag to indicate acceptance of customer for the ready credit limit. | [optional] 





---

# ReferralTracking.md

# SwaggerClient::ReferralTracking

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referral_organization_id** | **String** | Unique identifier that refers to source of the Media organization from where the URL is redirected. Example can be Facebook,Google,Yandex etc. | [optional] 
**tracking_id** | **String** | Unique tracking reference number for third party redirection/internal redirection.Example would be ecid for UAE, yclid for Russia Yandex, icid for internal Citibank site. | [optional] 





---

# Relationship.md

# SwaggerClient::Relationship

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relationship_name** | **String** | The relationship name for a customer | [optional] 
**relationship_type** | **String** | This is a reference data field. Please use /v1/apac/utilities/referenceData/{relationshipType} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# RepaymentSchedule.md

# SwaggerClient::RepaymentSchedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenor_occurence** | **String** | Different tenor applicable for repayment | [optional] 
**payment_due_date** | **Date** | Payment due date for each instalment in ISO 8601 date format YYYY-MM-DD | [optional] 
**monthly_installment_amount** | **Float** | Monthly instalment amount for loan taken | [optional] 
**principal_amount** | **Float** | Principal amount of instalment | [optional] 
**interest_amount** | **Float** | Interest amount of instalment | [optional] 
**remaining_principal_amount** | **Float** | Remaining Principal Amount after each instalment has been paid by customer | [optional] 





---

# ReportLostStolenCardRequest.md

# SwaggerClient::ReportLostStolenCardRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replacement_indicator** | **String** | Indicator to specify whether customer requires card replacement.This is a reference data field. Please use /v1/apac/utilities/referenceData/{replacementIndicator} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 





---

# ReportLostStolenCardResponse.md

# SwaggerClient::ReportLostStolenCardResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_id** | **String** | Unique reference ID associated with the lost or stolen card request. | [optional] 





---

# RequestCreditChargeCardCorporateCardsSuspensionAndCashLimitAllowedRequest.md

# SwaggerClient::RequestCreditChargeCardCorporateCardsSuspensionAndCashLimitAllowedRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenized_card_number** | **String** | Tokenized card number | 
**corporate_officer_details** | [**CorporateOfficerDetails**](CorporateOfficerDetails.md) |  | [optional] 
**cash_limit_update_allowed_flag** | **BOOLEAN** | This field is used to indicate whether cash withdrawal is allowed for the corporate card | [optional] 
**card_status** | **String** | This field is used to indicate whether to  suspend or unsuspend the corporate card.This is a reference data field. Please use /v1/utilities/referenceData/{cardStatus} resource to get possible values of this field with descriptions | [optional] 





---

# RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementRequest.md

# SwaggerClient::RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenized_card_number** | **String** | Tokenized card number | 
**corporate_officer_details** | [**CorporateOfficerDetails**](CorporateOfficerDetails.md) |  | [optional] 
**embossed_name** | **String** | Customer Name embossed on the card | [optional] 
**replacement_reason_code** | **String** | Reason code for replacement. This is a reference data field. Please use /v1/utilities/referenceData/{replacementReasonCode} resource to get possible values of this field with descriptions | [optional] 





---

# RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementResponse.md

# SwaggerClient::RequestCreditChargeCardFulfillmentArrangementCorporateCardsDamageReplacementResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unique_reference_number** | **String** | Unique reference Identifier Number | [optional] 





---

# RequestCreditChargeCardFulfillmentArrangementCreditPlanEppRefundRequest.md

# SwaggerClient::RequestCreditChargeCardFulfillmentArrangementCreditPlanEppRefundRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_details** | [**CardDetails**](CardDetails.md) |  | [optional] 
**original_authorization_code** | **String** | Authorization Code for Original Transaction | 
**refund_authorization_code** | **String** | Authorization Code for Refund Transaction | 





---

# RequestedLoanTopupDecision.md

# SwaggerClient::RequestedLoanTopupDecision

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_outstanding_balance** | **Float** | Existing loan outstanding balance amount | [optional] 
**loan_topup_recommendations** | [**Array&lt;LoanTopupRecommendations&gt;**](LoanTopupRecommendations.md) |  | [optional] 





---

# RequestedProductDecision.md

# SwaggerClient::RequestedProductDecision

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | 
**organisation_name** | **String** | Card issuing Organisation code | 
**source_code** | **String** | A source code to identify the product | 
**logo** | **String** | Product logo to identify the product | [optional] 
**credit_decision** | **String** | Evaluated Applicant Credit Decision | [optional] 
**credit_specific_recommendations** | [**Array&lt;CreditSpecificRecommendations&gt;**](CreditSpecificRecommendations.md) |  | [optional] 
**loan_specific_recommendations** | [**Array&lt;LoanSpecificRecommendations&gt;**](LoanSpecificRecommendations.md) |  | [optional] 
**required_documents** | [**Array&lt;RequiredDocuments&gt;**](RequiredDocuments.md) |  | [optional] 





---

# RequiredDocumentSet.md

# SwaggerClient::RequiredDocumentSet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_set** | **String** | Document set a mandated combination of document types for each proof. This is a reference data field. Please use /v1/utilities/referenceData/{documentIdType} resource to get valid values of this field with descriptions. | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**proof_type** | **String** | Type of document. This is a reference data field. Please use /v1/utilities/referenceData/{proofType} resource to get possible values of this field with descriptions. | [optional] 
**applicant_type** | **String** | Applicant relationship with the Bank. Currently supported value is primary.This is a reference data data field. Please use /v1/utilities/referenceData/{applicantType} resource to get valid values of this field with descriptions | [optional] 





---

# RequiredDocuments.md

# SwaggerClient::RequiredDocuments

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id_type** | **String** | Document ID for each proof. This is a reference data field. Please use /v1/apac/utilities/referenceData/{documentIdType} resource to get valid values of this field with descriptions.You can use the documentIdType as the referenceCode parameter to retrieve the values. | [optional] 
**document_status** | **String** | Status of document ID proof. This is a reference data data field. Please use /v1/apac/utilities/referenceData/{documentStatus} resource to get valid values of this field with descriptions | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**proof_type** | **String** | Type of document. This is a reference data field. Please use /v1/apac/utilities/referenceData/{proofType} resource to get possible values of this field with descriptions.You can use the proofType as the referenceCode parameter to retrieve the values. | [optional] 
**linked_document_id** | **String** | Linked document id is used to link different documents for the required documents/proof type. | [optional] 
**applicant_type** | **String** | Applicant relationship with the Bank. Currently supported value is primary.This is a reference data data field. Please use /v1/apac/utilities/referenceData/{applicantType} resource to get valid values of this field with descriptions | [optional] 





---

# ResetAtmPinConfirmationRequest.md

# SwaggerClient::ResetAtmPinConfirmationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | 





---

# ResetAtmPinConfirmationResponse.md

# SwaggerClient::ResetAtmPinConfirmationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pos_transaction_pin_enablement_status** | **String** | To show success/failure to the channel, whether Request for Enabling / Disabling of PIN is successfully done or not | [optional] 





---

# ResetAtmPinRequest.md

# SwaggerClient::ResetAtmPinRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | Unique Id of the card in encrypted format. | 
**new_pin** | **String** | New pin in encrypted format. | 
**encryption_type** | **String** | Type of the encryption. This is a reference data field. Please use /v1/apac/utilities/referenceData/{encryptionType} resource to get valid value of this field with description. | [optional] 
**key_device_id** | **String** | Label to identify the HSM keys used to encrypt ATM PIN. | [optional] 
**key_generation_id** | **String** | It is the generation ID of the HSM Keys referred for encryption of ATM PIN. | [optional] 





---

# ResponseBankingProductById.md

# SwaggerClient::ResponseBankingProductById

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BankingProductDetail**](BankingProductDetail.md) |  | 
**links** | [**Links**](Links.md) |  | 
**meta** | [**Meta**](Meta.md) |  | [optional] 





---

# ResponseBankingProductList.md

# SwaggerClient::ResponseBankingProductList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ResponseBankingProductListData**](ResponseBankingProductListData.md) |  | 
**links** | [**LinksPaginated**](LinksPaginated.md) |  | 
**meta** | [**MetaPaginated**](MetaPaginated.md) |  | 





---

# ResponseBankingProductListData.md

# SwaggerClient::ResponseBankingProductListData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | [**Array&lt;BankingProductV2&gt;**](BankingProductV2.md) | The list of products returned.  If the filter results in an empty set then this array may have  no records | 





---

# ResponseBankingProductList_data.md

# IO.Swagger.Model.ResponseBankingProductListData
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Products** | [**List&lt;BankingProductV2&gt;**](BankingProductV2.md) | The list of products returned.  If the filter results in an empty set then this array may have  no records | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# ResponseOptions.md

# SwaggerClient::ResponseOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**option_sequence_number** | **Integer** | Option sequence number | [optional] 
**selected_flag** | **BOOLEAN** | Identifer used to determine the if the option was selected on not. Default value is false. | [optional] 
**option_text** | **String** | Option text to be displayed to the end user. | [optional] 





---

# RetrieveApplicationProcessingPartnerMembershipApplicationResponse.md

# SwaggerClient::RetrieveApplicationProcessingPartnerMembershipApplicationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **String** | Unique identifier for the application | [optional] 
**applicant** | [**Applicant**](Applicant.md) |  | [optional] 
**application_stage** | **String** | Application Stage | [optional] 
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session. | [optional] 
**provider_info** | [**Array&lt;ProviderInfo&gt;**](ProviderInfo.md) |  | [optional] 





---

# RetrieveApplicationProcessingUnsecuredLoanTopupRepaymentScheduleResponse.md

# SwaggerClient::RetrieveApplicationProcessingUnsecuredLoanTopupRepaymentScheduleResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_payment_amount** | **Float** | Fixed payment amount | 
**total_interest_amount** | **Float** | Total interest amount | 
**effective_interest_rate** | **Float** | Effective interest rate | [optional] 
**effective_interest_rate_with_fee** | **Float** | Effective interest rate with fee | [optional] 
**annual_percentage_rate** | **Float** | Annual percentage rate | [optional] 
**loan_schedule_details** | [**Array&lt;LoanScheduleDetails&gt;**](LoanScheduleDetails.md) |  | [optional] 
**loan_topup** | [**Array&lt;LoanTopup&gt;**](LoanTopup.md) |  | [optional] 





---

# RetrieveCreditChargeCardCorporateCardsCashLimitRequest.md

# SwaggerClient::RetrieveCreditChargeCardCorporateCardsCashLimitRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenized_card_number** | **String** | Tokenized card number | 
**corporate_officer_details** | [**CorporateOfficerDetails**](CorporateOfficerDetails.md) |  | [optional] 





---

# RetrieveCreditChargeCardCorporateCardsCashLimitResponse.md

# SwaggerClient::RetrieveCreditChargeCardCorporateCardsCashLimitResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_daily_cash_limit_amount** | **Integer** | This is the max daily Cash limit Amount allowed for the cardholder | [optional] 
**maximum_weekly_cash_limit_amount** | **Integer** | This is the max weekly Cash limit Amount allowed for the cardholder | [optional] 
**maximum_monthly_cash_limit_amount** | [**BigDecimal**](BigDecimal.md) | This is the max monthly Cash limit Amount allowed for the cardholder | [optional] 
**maximum_individual_txn_limit_amount** | **Integer** | This is the max Cash Amount allowed for the cardholder per transaction | [optional] 





---

# RetrieveCreditChargeCardCorporateCardsDetailRequest.md

# SwaggerClient::RetrieveCreditChargeCardCorporateCardsDetailRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenized_card_number** | **String** | Tokenized card number | 
**corporate_officer_details** | [**CorporateOfficerDetails**](CorporateOfficerDetails.md) |  | [optional] 





---

# RetrieveCreditChargeCardCorporateCardsDetailResponse.md

# SwaggerClient::RetrieveCreditChargeCardCorporateCardsDetailResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cash_withdrawal_allowed_flag** | **BOOLEAN** | This field is used to indicate, whether the customer is allowed to withdraw cash or not | [optional] 
**permanent_credit_limit_amount** | **Float** | This field is used to indicate the limit present on the card | [optional] 
**current_balance_amount** | **Float** | This is the balance credit limit left after monthly spend | [optional] 
**card_status** | **String** | This field shows the card status. This is a reference data field. Please use /v1/utilities/referenceData/{cardStatus} resource to get possible values of this field with descriptions | [optional] 





---

# RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsRequest.md

# SwaggerClient::RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenized_card_number** | **String** | Tokenized card number | 
**corporate_officer_details** | [**CorporateOfficerDetails**](CorporateOfficerDetails.md) |  | [optional] 
**transaction_type** | **String** | transactionType. This is a reference data field. Please use /v1/utilities/referenceData/{transactionType} resource to get possible values of this field with descriptions | 
**pending_authorization_transaction** | [**PendingAuthorizationTransaction**](PendingAuthorizationTransaction.md) |  | [optional] 
**history_and_intraday_transaction** | [**HistoryAndIntradayTransaction**](HistoryAndIntradayTransaction.md) |  | [optional] 





---

# RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsResponse.md

# SwaggerClient::RetrieveCreditChargeCardCorporateCardsPendingAndIntradayAuthorizationTransactionsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pending_authorization_transactions** | [**PendingAuthorizationTransactions**](PendingAuthorizationTransactions.md) |  | [optional] 
**history_and_intraday_transactions** | [**HistoryAndIntradayTransactions**](HistoryAndIntradayTransactions.md) |  | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditCardStatusResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditCardStatusResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_status** | **String** | This refers to the Card Status. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardStatus} resource to get valid value of this field with description | 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateConfirmationPreLoginRequest.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateConfirmationPreLoginRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateConfirmationPreLoginResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateConfirmationPreLoginResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_loan_reference_id** | **String** | Unique refrence number associated with the loan. | 
**next_installment_amount** | **Float** | Amount of money borrower has to pay as next installment. | [optional] 
**next_installment_principal_amount** | **Float** | Amount of money that contributes to principal component in next installment. | [optional] 
**interest_rate** | **Float** | Rate of Interest.Interest rate is the amount charged, expressed as a percentage of principal, by a lender to a borrower for the use of assets. Interest rates are typically noted on an annual basis, known as the annual percentage rate (APR). | [optional] 
**total_interest_amount** | **Float** | Total amount of money that a borrower will have to pay as interest for amount borrowed. | [optional] 
**initial_fee_amount** | **Float** | First month fee/interest charge incurred from booking date to next statement cycle date. | [optional] 
**closure_interest_amount** | **Float** | Closure Interest accrued from last cycle/booking date till date, to be charged for each of the loans getting closed due to Top up post merger. | [optional] 
**loan_booking_fee** | **Float** | Amount to be paid as fee for loan booking. | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateConfirmationRequest.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateConfirmationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateConfirmationResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateConfirmationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_loan_reference_id** | **String** | Unique refrence number associated with the loan. | 
**next_installment_amount** | **Float** | Amount of money borrower has to pay as next installment. | [optional] 
**next_installment_principal_amount** | **Float** | Amount of money that contributes to principal component in next installment. | [optional] 
**interest_rate** | **Float** | Rate of Interest.Interest rate is the amount charged, expressed as a percentage of principal, by a lender to a borrower for the use of assets. Interest rates are typically noted on an annual basis, known as the annual percentage rate (APR). | [optional] 
**total_interest_amount** | **Float** | Total amount of money that a borrower will have to pay as interest for amount borrowed. | [optional] 
**loan_booking_fee** | **Float** | Amount to be paid as fee for loan booking. | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreLoginRequest.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreLoginRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**old_loan_list** | [**Array&lt;Loan&gt;**](Loan.md) |  | [optional] 
**total_loan_amount** | **Float** | Total amount borrowed by customer as Loan ie., Old Loan Amount+Top up Amount. | 
**loan_tenure_inmonths** | **Integer** | Tenure of loan against credit card. It is considered in terms of number of months. | 
**top_up_amount** | **Float** | Additonal Topup Amount | 
**loan_description** | **String** | New Loan Description | 
**disbursement_option** | **String** | This field indicates the options/mode in which the loan amount will be disbursed. This is a reference data field. Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description | 
**account_number** | **String** | Customers Account Number with the Bank.   An account number is the primary identifier for ownership of an account, whether a checking account or savings account or credit card account or investment account, or a loan account. | [optional] 
**payee_id** | **String** | Payee Indicator to be mapped against Payee Detail Key | [optional] 
**birth_year** | [**BigDecimal**](BigDecimal.md) | Year of birth of customer | [optional] 
**beneficiary_bank_detail** | [**BeneficiaryBankDetail**](BeneficiaryBankDetail.md) |  | [optional] 
**loan_purpose** | **String** | This field indicates the options/mode in which the loan amount will be disbursed. This is a reference data field. Please use /v1/utilities/referenceData/{loanPurpose} resource to get valid value of this field with description. | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreLoginResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreLoginResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_loan_reference_id** | **String** | Unique refrence number associated with the loan. | 
**next_installment_amount** | **Float** | Amount of money borrower has to pay as next installment. | [optional] 
**next_installment_principal_amount** | **Float** | Amount of money that contributes to principal component in next installment. | [optional] 
**interest_rate** | **Float** | Rate of Interest.Interest rate is the amount charged, expressed as a percentage of principal, by a lender to a borrower for the use of assets. Interest rates are typically noted on an annual basis, known as the annual percentage rate (APR). | [optional] 
**total_interest_amount** | **Float** | Total amount of money that a borrower will have to pay as interest for amount borrowed. | [optional] 
**initial_fee_amount** | **Float** | First month fee/interest charge incurred from booking date to next statement cycle date. | [optional] 
**closure_interest_amount** | **Float** | Closure Interest accrued from last cycle/booking date till date, to be charged for each of the loans getting closed due to Top up post merger. | [optional] 
**loan_booking_fee** | **Float** | Amount to be paid as fee for loan booking. | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreLoginWithValidationRequest.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreLoginWithValidationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**old_loan_list** | [**Array&lt;Loan&gt;**](Loan.md) |  | [optional] 
**total_loan_amount** | **Float** | Total amount borrowed by customer as Loan ie., Old Loan Amount+Top up Amount | [optional] 
**loan_tenure_in_months** | **Integer** | Tenure of loan against credit card. It is considered in terms of number of months | [optional] 
**top_up_amount** | **Float** | Additonal Topup Amount | [optional] 
**disbursement_option** | **String** | This field indicates the options/mode in which the loan amount will be disbursed. This is a reference data field. Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description. | [optional] 
**beneficiary_detail** | [**BeneficiaryDetail**](BeneficiaryDetail.md) |  | [optional] 
**payee_id** | **String** | Payee Indicator to be mapped against Payee Detail Key | [optional] 
**loan_purpose** | **String** | This field indicates the options/mode in which the loan amount will be disbursed | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreLoginWithValidationResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreLoginWithValidationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_fee_amount** | **Float** | First month fee/interest charge incurred from booking date to next statement cycle date | [optional] 
**closure_interest_amount** | **Float** | Closure Interest accrued from last cycle/booking date till date, to be charged for each of the loans getting closed due to Top up post merger | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreprocessRequest.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreprocessRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan** | [**Array&lt;Loan&gt;**](Loan.md) |  | [optional] 
**total_loan_amount** | **Float** | Total amount borrowed by customer as Loan ie., Old Loan Amount+Top up Amount. | 
**loan_tenure_inmonths** | **Integer** | Tenure of loan against credit card. It is considered in terms of number of months. | 
**top_up_amount** | **Float** | Additonal Topup Amount | 
**loan_description** | **String** | New Loan Description | 
**disbursement_option** | **String** | This field indicates the options/mode in which the loan amount will be disbursed. This is a reference data field. Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description | 
**disbursement_account_id** | **String** | Customers Account Number with the Bank.   An account number is the primary identifier for ownership of an account, whether a checking account or savings account or credit card account or investment account, or a loan account. | [optional] 
**payee_id** | **String** | Payee Indicator to be mapped against Payee Detail Key | [optional] 
**beneficiary_bank_detail** | [**BeneficiaryBankDetail**](BeneficiaryBankDetail.md) |  | [optional] 
**loan_purpose** | **String** | This field indicates the options/mode in which the loan amount will be disbursed. This is a reference data field. Please use /v1/utilities/referenceData/{loanPurpose} resource to get valid value of this field with description. | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreprocessResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidatePreprocessResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_fee_amount** | **Float** | First month fee/interest charge incurred from booking date to next statement cycle date | [optional] 
**closure_interest_amount** | **Float** | Closure Interest accrued from last cycle/booking date till date, to be charged for each of the loans getting closed due to Top up post merger | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateRequest.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**old_loan_list** | [**Array&lt;Loan&gt;**](Loan.md) |  | [optional] 
**total_loan_amount** | **Float** | Total amount borrowed by customer as Loan ie., Old Loan Amount+Top up Amount. | 
**loan_tenure_inmonths** | **Integer** | Tenure of loan against credit card. It is considered in terms of number of months. | 
**top_up_amount** | **Float** | Additonal Topup Amount | 
**loan_description** | **String** | New Loan Description | [optional] 
**disbursement_option** | **String** | This field indicates the options/mode in which the loan amount will be disbursed. This is a reference data field. Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description. | 
**disbursement_account_id** | **String** | The disbursement account identifier in encrypted format. | [optional] 
**payee_id** | **String** | Payee Indicator to be mapped against Payee Detail Key | [optional] 
**beneficiary_bank_detail** | [**BeneficiaryBankDetail**](BeneficiaryBankDetail.md) |  | [optional] 
**loan_purpose** | **String** | This field indicates the options/mode in which the loan amount will be disbursed. This is a reference data field. Please use /v1/utilities/referenceData/{loanPurpose} resource to get valid value of this field with description. | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanConsolidateResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_loan_reference_id** | **String** | Unique refrence number associated with the loan. | 
**next_installment_amount** | **Float** | Amount of money borrower has to pay as next installment. | [optional] 
**next_installment_principal_amount** | **Float** | Amount of money that contributes to principal component in next installment. | [optional] 
**interest_rate** | **Float** | Rate of Interest.Interest rate is the amount charged, expressed as a percentage of principal, by a lender to a borrower for the use of assets. Interest rates are typically noted on an annual basis, known as the annual percentage rate (APR). | [optional] 
**total_interest_amount** | **Float** | Total amount of money that a borrower will have to pay as interest for amount borrowed. | [optional] 
**loan_booking_fee** | **Float** | Amount to be paid as fee for loan booking. | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanLoanRepayScheduleSimulatorResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanLoanRepayScheduleSimulatorResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_interest_rate** | **Float** | Effective interest rate. | [optional] 
**annual_percentage_rate** | **Float** | Applicable Annual Percentage Rate | [optional] 
**total_interest_amount** | **Float** | Total interest amount on checking account | [optional] 
**amortization_schedule** | [**RetrieveCreditChargeCardFulfillmentArrangementCreditPlanLoanRepayScheduleSimulatorResponseAmortizationSchedule**](RetrieveCreditChargeCardFulfillmentArrangementCreditPlanLoanRepayScheduleSimulatorResponseAmortizationSchedule.md) |  | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanLoanRepayScheduleSimulatorResponseAmortizationSchedule.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanLoanRepayScheduleSimulatorResponseAmortizationSchedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installment_number** | **String** | Installment number | 
**principal_amount** | **Float** | The portion of the Principal Amount Paid for the loan in local currency | 
**installment_interest_amount** | **Float** | The interest  amount to be paid as installment. | 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanLoanRepayScheduleSimulatorResponse_amortizationSchedule.md

# IO.Swagger.Model.RetrieveCreditChargeCardFulfillmentArrangementCreditPlanLoanRepayScheduleSimulatorResponseAmortizationSchedule
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InstallmentNumber** | **string** | Installment number | 
**PrincipalAmount** | **double?** | The portion of the Principal Amount Paid for the loan in local currency | 
**InstallmentInterestAmount** | **double?** | The interest  amount to be paid as installment. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanLoansResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanLoansResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_account** | [**Array&lt;LoanAccount&gt;**](LoanAccount.md) |  | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsRequest.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_amount** | **Float** | Loan amount for easy payment plan booking. | [optional] 
**tenor** | [**BigDecimal**](BigDecimal.md) | Tenure of loan in months. | 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppBookingsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_reference_id** | **String** | The unique  reference Id used to identify this Loan from all the other Loans | 
**installment_amount** | **Float** | Installment amount to be paid by customer in order to repay the loan. | [optional] 
**principal_amount** | **Float** | The portion of the Principal Amount Paid for the loan. | [optional] 
**installment_interest_amount** | **Float** | The interest amount to be paid as installment. | [optional] 
**initial_interest_amount** | **Float** | Initial interest amount charged to customer from the epp booking date to the first installment start date | [optional] 
**statement_unpaid_balance_amount** | **Float** | This field indicates the remaining statement balance amount that remains due and payable. | [optional] 
**statement_minimum_due_balance_amount** | **Float** | Minimum due amount for a payment cycle | [optional] 
**statement_payment_due_date** | **Date** | Next payment due date in ISO 8601 date format YYYY-MM-DD | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppRepaymentSchedulesResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppRepaymentSchedulesResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_start_index** | **String** | The next start index that indicates the next set of records to be fetched, if there are available. Typically, this value should be populated if the first response has the value of nextStartIndex. | [optional] 
**epp_amortization_schedule** | [**Array&lt;EppAmortizationSchedule&gt;**](EppAmortizationSchedule.md) |  | [optional] 
**binary_data** | **String** | This field contains binary data of the Repayment Schedule. | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersEppResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_name** | **String** | his refers to the name of the customer | 
**product_code** | **String** | A unique code that identifies the product | 
**service_charge_amount** | **String** | Booking Fees Amount | [optional] 
**card_id** | **String** | The customer card identifier in encrypted format | [optional] 
**product_name** | **String** | The name of the product | 
**display_card_number** | **String** | A masked Card number that can be displayed to the customer | 
**pending_transaction** | [**PendingTransaction**](PendingTransaction.md) |  | [optional] 
**statement** | [**Statement**](Statement.md) |  | [optional] 
**epp_offers** | [**Array&lt;EppOffers&gt;**](EppOffers.md) |  | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanPaymentPlansRequest.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanPaymentPlansRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session | 
**org_code** | **String** | Organization of the card | 
**loan_amount** | **Float** | Loan amount availed by customer | 
**promotion_id** | **String** | Promotion ID for the loan offered | 
**loan_tenure** | **String** | Tenure of loan against card | [optional] 
**start_index** | **String** | Start index of next fetch of records | [optional] 
**request_size** | **Integer** | Number of records required (Max &#x3D; 60) | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanPaymentPlansResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanPaymentPlansResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_payment_plans** | [**Array&lt;LoanPaymentPlans&gt;**](LoanPaymentPlans.md) |  | [optional] 
**service_charge** | **Float** | Booking fee | [optional] 
**additional_service_charge** | **Float** | Additional service charge | [optional] 
**internal_rate_of_return** | **Float** | Internal rate of return | [optional] 
**list_response** | [**ListResponse**](ListResponse.md) |  | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanPaymentSchedulesRequest.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanPaymentSchedulesRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control flow id is used to control the flow for subsequent requests in the session | 
**org_code** | **String** | Organization of the card | 
**loan_amount** | **Float** | Loan amount availed by customer | 
**promotion_id** | **String** | Promotion ID for the loan offered | 
**loan_tenure** | **String** | Tenure of loan against card. | 
**start_index** | **String** | Start index of next fetch of records | [optional] 
**request_size** | **Integer** | Number of records required | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanPaymentSchedulesResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanPaymentSchedulesResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_response** | [**ListResponse**](ListResponse.md) |  | [optional] 
**org_code** | **String** | Organization of the card | [optional] 
**loan_amortization_schedule** | [**Array&lt;LoanPaymentSchedule&gt;**](LoanPaymentSchedule.md) |  | [optional] 
**loan_summary** | [**LoanSummary**](LoanSummary.md) |  | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanRepaymentSchedulesRequest.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanRepaymentSchedulesRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loan_amount** | **Float** | Loan amount for easy payment plan booking. | 
**tenor** | **Integer** | Tenure of loan. | 
**next_start_index** | **String** | In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data. | [optional] 
**binary_data** | [**BinaryData**](BinaryData.md) |  | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanRepaymentSchedulesResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersLoanRepaymentSchedulesResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_start_index** | **String** | The next start index that indicates the next set of records to be fetched, if there are available. Typically, this value should be populated if the first response has the value of nextStartIndex. | [optional] 
**total_loan_cost** | **Float** | This amount is the full cost of credit which includes the total principal and total interest. | [optional] 
**amortization_schedule** | [**AmortizationSchedule**](AmortizationSchedule.md) |  | [optional] 
**binary_data** | **String** | This field contains binary data of the Repayment Schedule. | [optional] 





---

# RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersOutstandingLoanRepaymentSchedulesResponse.md

# SwaggerClient::RetrieveCreditChargeCardFulfillmentArrangementCreditPlanOffersOutstandingLoanRepaymentSchedulesResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_start_index** | **String** | The next start index that indicates the next set of records to be fetched, if there are available. Typically, this value should be populated if the first response has the value of nextStartIndex. | [optional] 
**loan_amortization_schedule** | [**Array&lt;LoanAmortizationSchedule&gt;**](LoanAmortizationSchedule.md) |  | [optional] 





---

# RetrieveDisbursementOptionsPreLoginResponse.md

# SwaggerClient::RetrieveDisbursementOptionsPreLoginResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disbursement_options** | [**Array&lt;DisbursementOptions&gt;**](DisbursementOptions.md) |  | [optional] 





---

# RetrieveUnmaskedAccountDataRequest.md

# SwaggerClient::RetrieveUnmaskedAccountDataRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_info** | [**Array&lt;AccountInfo&gt;**](AccountInfo.md) |  | [optional] 





---

# RetrieveUnmaskedAccountDataResponse.md

# SwaggerClient::RetrieveUnmaskedAccountDataResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**Array&lt;Accounts&gt;**](Accounts.md) |  | [optional] 





---

# RewardAccount.md

# SwaggerClient::RewardAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | The card id  in encrypted format | 
**display_card_number** | **String** | A masked card number that can be displayed to the customer. | 
**available_point_balance** | [**BigDecimal**](BigDecimal.md) | Number of rewards points or miles available. | 
**reward_category_code** | **String** | Reward category code. This is a reference data field. Please use /v1/apac/utilities/referenceData/{rewardCategoryCode} resource to get valid value of this field with description. | [optional] 
**last_statement_point_balance** | **Float** | Number of rewards points or miles available since last statement balance. | [optional] 
**points_earned** | **Float** | Number of rewards points or miles earned since last statement date. | [optional] 
**reward_account_error_details** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 





---

# RewardPoints.md

# SwaggerClient::RewardPoints

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reward_category_code** | **String** | Reward category code. This is a reference data field. Please use /v1/utilities/referenceData/{rewardCategoryCode} resource to get valid value of this field with description. | [optional] 
**base_point_balance** | [**BigDecimal**](BigDecimal.md) | Points or Miles accumulated by the user at the start of the statement period | [optional] 
**earned_reward_points** | [**BigDecimal**](BigDecimal.md) | Points or Miles earned by the user for the statement period. | [optional] 
**bonus_reward_points** | [**BigDecimal**](BigDecimal.md) | Bonus Points or Miles  earned by a user for the statement period. Bonus programs operate under the umbrella of a specific reward program since multiple bonus programs can be defined for one reward program. | [optional] 
**adjusted_reward_points** | [**BigDecimal**](BigDecimal.md) | Number of rewards points or miles adjusted for the user in the statement period. It will contain the value of adjusted points as a result of incorrect addition/redemption. | [optional] 
**redeemed_reward_points** | [**BigDecimal**](BigDecimal.md) | Bonus Points or Miles  redeemed  by a user for the statement period. | [optional] 
**available_point_balance** | [**BigDecimal**](BigDecimal.md) | This field indicate the reward points or miles currently available to the user. | [optional] 





---

# RewardsApi.md

# SwaggerClient::RewardsApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_credit_cards_rewards_point_balance_search_post**](RewardsApi.md#v1_credit_cards_rewards_point_balance_search_post) | **POST** /v1/creditCards/rewards/pointBalance/search | This API is used to retrieve reward points balance for multiple credit cards

# **v1_credit_cards_rewards_point_balance_search_post**
> RewardsInquiryResponse v1_credit_cards_rewards_point_balance_search_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)

This API is used to retrieve reward points balance for multiple credit cards

This API is used to retrieve reward points balance for multiple credit cards

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::RewardsApi.new
body = SwaggerClient::RewardsInquiryRequest.new # RewardsInquiryRequest | 
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==.
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | The client ID  you received during application registration in the developer portal
content_type = 'content_type_example' # String | application/json
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #This API is used to retrieve reward points balance for multiple credit cards
  result = api_instance.v1_credit_cards_rewards_point_balance_search_post(bodyauthorizationuuidacceptclient_idcontent_type, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling RewardsApi->v1_credit_cards_rewards_point_balance_search_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RewardsInquiryRequest**](RewardsInquiryRequest.md)|  | 
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D;. | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| The client ID  you received during application registration in the developer portal | 
 **content_type** | **String**| application/json | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**RewardsInquiryResponse**](RewardsInquiryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json







---

# RewardsInquiryRequest.md

# SwaggerClient::RewardsInquiryRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_details** | [**Array&lt;CardDetails&gt;**](CardDetails.md) |  | [optional] 





---

# RewardsInquiryResponse.md

# SwaggerClient::RewardsInquiryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reward_accounts** | [**Array&lt;RewardAccount&gt;**](RewardAccount.md) |  | 





---

# SalesAgentDetails.md

# SwaggerClient::SalesAgentDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**originating_sales_agent_id** | **String** | Agent Id of the bank representative sourcing the application form. This agent might be different from the agent who is processing the application. | [optional] 
**originating_sales_branch_name** | **String** | Name of branch where the application is originally sourced. | [optional] 





---

# SavingsAccount.md

# SwaggerClient::SavingsAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**current_balance** | **Float** | The current balance including any pending or in progress deposits and withdrawals | [optional] 
**available_balance** | **Float** | The amount available  to withdraw or transfer immediately | [optional] 
**currency_code** | **String** | The currency code of the account in ISO 4217 format | [optional] 
**last_statement_date** | **Date** | The date of the last statement in ISO 8601 date format YYYY-MM-DD | [optional] 
**hold_amount** | **Float** | A portion of account balance unavailable for use for a set period | [optional] 
**opening_date** | **Date** | Saving account opening date in ISO 8601 date format YYYY-MM-DD | [optional] 
**float_amount** | **Float** | The total amount of funds that have not yet been cleared through the collection process for cheque and other instruments deposited to a savings account. These funds are unavailable for withdrawal until they are paid by the drawee bank. | [optional] 
**total_interest_amount** | **Float** | Total interest amount on the saving account | [optional] 





---

# SavingsAccountSummary.md

# SwaggerClient::SavingsAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**account_nickname** | **String** | The nickname of the account assigned by the customer | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format. | [optional] 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 
**account_status** | **String** | Status of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_classification** | **String** | Classification of account either as ASSET or LIABILITY. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClassification} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**current_balance** | **Float** | The current balance including any pending or in progress deposits and withdrawals | [optional] 
**available_balance** | **Float** | The amount available  to withdraw or transfer immediately | [optional] 





---

# SecuritiesBrokerageAccount.md

# SwaggerClient::SecuritiesBrokerageAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**currency_code** | **String** | The currency code of the account in ISO 4217 format | [optional] 
**total_securities_value_amount** | **Float** | The total market worth of securities | [optional] 
**total_transaction_amount** | **Float** | Total transaction amount in local currency | [optional] 
**total_unrealized_gains** | **Float** | Total unrealized gains amount, profitable position that has yet to be cashed in | [optional] 
**relationship** | [**Relationship**](Relationship.md) |  | [optional] 
**security** | [**Array&lt;Security&gt;**](Security.md) |  | [optional] 





---

# SecuritiesBrokerageAccountSummary.md

# SwaggerClient::SecuritiesBrokerageAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**account_nickname** | **String** | The nickname of the account assigned by the customer | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format. | [optional] 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 
**account_status** | **String** | Status of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_classification** | **String** | Classification of account either as ASSET or LIABILITY. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClassification} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**current_balance** | **Float** | Total fund value for the Investment brokerage account. It is the current market worth of investment | [optional] 





---

# Security.md

# SwaggerClient::Security

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**security_name** | **String** | The security name | [optional] 
**stock_code** | **String** | Unique code associated with security. | [optional] 
**stock_market_code** | **String** | Trading market code for securities. | [optional] 
**market_value_amount** | **Float** | The current market worth of investment | [optional] 
**investment_amount** | **Float** | The investment amount | [optional] 
**currency_code** | **String** | The currency code of the account in ISO 4217 format | [optional] 
**average_unit_cost** | **Float** | Average unit cost | [optional] 
**maturity_date** | **Date** | The maturity date in ISO 8601 format YYYY-MM-DD | [optional] 
**available_units** | **Float** | The available units | [optional] 
**settled_units** | **Float** | The settled units | [optional] 
**assigned_units** | **Float** | The assigned units | [optional] 
**confirmed_units** | **Float** | The confirmed units | [optional] 
**pending_units** | **Float** | The pending units | [optional] 
**block_units** | **Float** | The blocked units | [optional] 
**unrealized_gains** | **Float** | The unrealized gain | [optional] 
**unrealized_percentage_gain** | **Float** | The unrealized gain in percentage | [optional] 
**latest_price** | **Float** | The latest price | [optional] 





---

# SelfDeclaration.md

# SwaggerClient::SelfDeclaration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anticipated_income_decrease_code** | **String** | Anticipated income decrease code. Possible Values: Yes or No | [optional] 
**loan_taken_indicator** | **BOOLEAN** | To indicate if a loan has been taken previously. Valid values: true and false | [optional] 





---

# Statement.md

# SwaggerClient::Statement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epp_minimum_eligible_amount** | **Float** | Minimum eligible amount for which Equal Payment Plan can be booked. | 
**epp_maximum_eligible_amount** | **Float** | Maximum eligible amount for which Equal Payment Plan can be booked. | 
**statement_date** | **Date** | Date on which the account statement has been generated in ISO 8601 date format YYYY-MM-DD | 
**statement_balance_amount** | **Float** | Statement balance amount on the statement date | 





---

# StatementList.md

# SwaggerClient::StatementList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statement_id** | **String** | Unique identifier for the statement | [optional] 
**statement_date** | **Date** | Date on which the account statement has been generated in ISO 8601 date format YYYY-MM-DD. Applicable only for credit cards. | [optional] 





---

# StatementSummary.md

# SwaggerClient::StatementSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outstanding_balance** | **Float** | Outstanding balance amount on the statement date | [optional] 
**credit_limit** | **Float** | The maximum amount of credit that extend to a customer | [optional] 
**active_equal_payment_plan_count** | **Float** | Number of active plans under equal payment plan | [optional] 
**beginning_balance_amount** | **Float** | Balance as on Last Statement Date | [optional] 
**total_debit_amount** | **Float** | Total debits made during the statement period | [optional] 
**total_credit_amount** | **Float** | Total payments made during the statement period. | [optional] 
**net_interest_amount** | **Float** | Total interest amount of monetary transactions posted to cardholder account | [optional] 
**payment_due_date** | **Date** | Next payment due date in ISO 8601 date format YYYY-MM-DD | [optional] 
**past_due_amount** | **Float** | Past due amount to be paid | [optional] 
**cash_advance_limit** | **Float** | Some percentage of credit limit to withdraw cash | [optional] 
**cycle_to_date_fee_amount** | **Float** | The total fee applied in the cycle | [optional] 
**interest_paid_amount** | **Float** | Interest amount paid on the credit card from the last billing cycle. | [optional] 
**billing_currency_code** | **String** | Billing currency code in  in ISO 4217 format | [optional] 
**cash_advance_available_amount** | **Float** | Available Cash Amount for withdrawal | [optional] 
**retail_cycle_interest_rate** | **Float** | Retail Interest Rate for merchant transactions. | [optional] 
**cash_cycle_interest_rate** | **Float** | Cash Interest Rate for withdrawal | [optional] 
**private_label_credit_cards** | [**PrivateLabelCreditCards**](PrivateLabelCreditCards.md) |  | [optional] 





---

# StatementSummaryRequest.md

# SwaggerClient::StatementSummaryRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | The card id  in encrypted format | [optional] 
**currency_code** | **String** | The currency code of the destination account in ISO 4217 format | [optional] 
**statement_list** | [**Array&lt;StatementList&gt;**](StatementList.md) |  | [optional] 
**next_start_index** | **String** | The next start index that indicates the next set of records to be fetched, if there are available. Typically, this value should be populated if the first response has the value of nextStartIndex. | [optional] 





---

# Statements.md

# SwaggerClient::Statements

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statment_id** | **String** | Unique Identifier associated with the statement generated for a customer for a particular period. | 
**statement_date** | **Date** | Date on which the account statement has been generated in ISO 8601 date format YYYY-MM-DD. | 





---

# StatementsResponse.md

# SwaggerClient::StatementsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_card_statement** | [**CreditCardStatement**](CreditCardStatement.md) |  | [optional] 





---

# SufficiencyOfFundsResponse.md

# SwaggerClient::SufficiencyOfFundsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sufficient_funds_indicator** | **BOOLEAN** | Indicator to indicate if sufficient funds are present in the account for deduction. | 





---

# SuggestedDisbursementAccount.md

# SwaggerClient::SuggestedDisbursementAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_reference_key** | **String** | Account reference key for linking account in a customer session. | [optional] 
**account_type** | **String** | Type of the account. This is a reference data field. Please use /v1/utilities/referenceData/{accountType} resource to get valid value of this field with description. | [optional] 
**bank_name** | **String** | bank name to be displayed to customer | [optional] 
**current_dda_flag** | **BOOLEAN** | Identifies whether account is current direct disbursement account or not. Valid values: true and false | [optional] 





---

# SupplementaryCardApplicationStatusInquiryResponse.md

# SwaggerClient::SupplementaryCardApplicationStatusInquiryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_status** | **String** | Application Status of an application.This is a reference data field. Please use /v1/utilities/referenceData/{applicationStatus} resource to get possible value of this field with description. | 
**application_creation_date** | **Date** | Date on which the application was created in ISO 8601 date format YYYY - MM - DD. | 





---

# SupplementaryCardListingResponse.md

# SwaggerClient::SupplementaryCardListingResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supplementary_cards** | [**Array&lt;SupplementaryCards&gt;**](SupplementaryCards.md) |  | [optional] 





---

# SupplementaryCardRequest.md

# SwaggerClient::SupplementaryCardRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicants** | [**Array&lt;Applicant&gt;**](Applicant.md) |  | 





---

# SupplementaryCardResponse.md

# SwaggerClient::SupplementaryCardResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **String** | Unique identifier for the supplementary card application | 





---

# SupplementaryCards.md

# SwaggerClient::SupplementaryCards

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | The card id  in encrypted format | 
**display_card_number** | **String** | A masked card number that can be displayed to the customer. | 
**card_status** | **String** | Status of the supplementary card. This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardStatus} resource to get valid value of this field with description. | [optional] 





---

# SurvivorProduct.md

# SwaggerClient::SurvivorProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product. | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing organization name | 
**logo** | **String** | Product logo to identify the product | 





---

# TaxStatementsApi.md

# SwaggerClient::TaxStatementsApi

All URIs are relative to */gcgapi/docmgmt/taxforms/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_tax_statement**](TaxStatementsApi.md#get_tax_statement) | **GET** /taxStatements/{taxstatementId} | OB Return the masked tax statement for the given tax statement id
[**get_tax_statements**](TaxStatementsApi.md#get_tax_statements) | **GET** /taxStatements | OB Returns list of masked tax statements

# **get_tax_statement**
> Document get_tax_statement(authorization, accept, content_type, uuid, client_id, taxstatement_id, opts)

OB Return the masked tax statement for the given tax statement id

This API retrieves a masked tax statement for the given tax statement id. This global API uses country fields to identify the appropriate regional services.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TaxStatementsApi.new
authorization = 'authorization_example' # String | The authorization token received in earlier API call. This will contain the access token and partner identity. This header is populated only for third-party partners.
accept = 'application/json' # String | Content types that are acceptable for the response. Currently we support application/json
content_type = 'content_type_example' # String | Content-Type of the request
uuid = '4468adf1-adfe-4f85-a2c1-f29beaa1f6ee' # String | 128 bit random UUID generated uniquely for every request.
client_id = '1c5f30d9-043c-49ff-b9c4-255a923278b2' # String | The client ID received during customer onboarding.
taxstatement_id = 'taxstatement_id_example' # String | Unique id that maps to the specific tax statement to be downloaded.
opts = { 
  country_code: 'country_code_example' # String | Two character ISO format country code.
}

begin
  #OB Return the masked tax statement for the given tax statement id
  result = api_instance.get_tax_statement(authorization, accept, content_type, uuid, client_id, taxstatement_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TaxStatementsApi->get_tax_statement: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The authorization token received in earlier API call. This will contain the access token and partner identity. This header is populated only for third-party partners. | 
 **accept** | **String**| Content types that are acceptable for the response. Currently we support application/json | [default to application/json]
 **content_type** | **String**| Content-Type of the request | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | [default to 4468adf1-adfe-4f85-a2c1-f29beaa1f6ee]
 **client_id** | **String**| The client ID received during customer onboarding. | [default to 1c5f30d9-043c-49ff-b9c4-255a923278b2]
 **taxstatement_id** | **String**| Unique id that maps to the specific tax statement to be downloaded. | 
 **country_code** | **String**| Two character ISO format country code. | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, charset=UTF-8



# **get_tax_statements**
> Documents get_tax_statements(authorization, accept, uuid, content_type, client_id, opts)

OB Returns list of masked tax statements

This API is used to retrieve list of masked tax statements for given parameters. This global API uses country fields to identify the appropriate regional services.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TaxStatementsApi.new
authorization = 'authorization_example' # String | The authorization token received in earlier API call. This will contain the access token and partner identity. This header is populated only for third-party partners.
accept = 'application/json' # String | Content types that are acceptable for the response. Currently we support application/json
uuid = '4468adf1-adfe-4f85-a2c1-f29beaa1f6ee' # String | 128 bit random UUID generated uniquely for every request
content_type = 'content_type_example' # String | Content-Type of the request
client_id = '1c5f30d9-043c-49ff-b9c4-255a923278b2' # String | The client ID received during application registration in the developer portal.
opts = { 
  country_code: 'country_code_example' # String | Two character ISO format country code.
}

begin
  #OB Returns list of masked tax statements
  result = api_instance.get_tax_statements(authorization, accept, uuid, content_type, client_id, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TaxStatementsApi->get_tax_statements: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The authorization token received in earlier API call. This will contain the access token and partner identity. This header is populated only for third-party partners. | 
 **accept** | **String**| Content types that are acceptable for the response. Currently we support application/json | [default to application/json]
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request | [default to 4468adf1-adfe-4f85-a2c1-f29beaa1f6ee]
 **content_type** | **String**| Content-Type of the request | 
 **client_id** | **String**| The client ID received during application registration in the developer portal. | [default to 1c5f30d9-043c-49ff-b9c4-255a923278b2]
 **country_code** | **String**| Two character ISO format country code. | [optional] 

### Return type

[**Documents**](Documents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, charset=UTF-8







---

# TemporaryCreditLimitIncrease.md

# SwaggerClient::TemporaryCreditLimitIncrease

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **String** | The card identifier in encrypted format. | 
**credit_limit_increase_end_date** | **Date** | Credit limit increase end  date in ISO 8601 date format YYYY-MM-DD. | 
**reason_code** | **String** | Reason for the credit limit increase.This is a reference data field. Please use /v1/apac/utilities/referenceData/{reasonCode} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | 
**credit_limit_increase_start_date** | **Date** | Credit limit increase start date in ISO 8601 date format YYYY-MM-DD. | 
**requested_credit_limit_amount** | **Float** | Customer�€�s desired credit limit. This is the combined limit shared with all the existing credit cards of the customer | 





---

# TimeDepositAccount.md

# SwaggerClient::TimeDepositAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | 
**original_principal_amount** | **Float** | The original principal amount when account opened. | [optional] 
**currency_code** | **String** | The currency code of the account in ISO 4217 format | [optional] 
**interest_rate** | **Float** | The rate of interest applicable for the time deposit | [optional] 
**opening_date** | **Date** | The opening date of the time deposit, in ISO 8601 format YYYY-MM-DD | [optional] 
**maturity_date** | **Date** | The date when the time deposit will mature, in ISO 8601 format YYYY-MM-DD | [optional] 
**next_interest_payment_date** | **Date** | The date when interest will be paid by Citibank, in ISO8601 format YYYY-MM-DD | [optional] 
**interest_amount_due** | **Float** | The accrued interest amount which has not yet been paid by Citibank | [optional] 
**renewal_instructions** | **String** | The instructions for time deposit renewal. This is a reference data field. Please use /v1/apac/utilities/referenceData/{renewalInstructions} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**tenor_term** | **Integer** | The tenor term for the deposit, expressed as a whole number | [optional] 
**tenor_period** | **String** | The unit of the tenor term. This is a reference data field. Please use /v1/apac/utilities/referenceData/{tenorPeriod} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**base_currency_maturity_amount** | **Float** | The investment amount and accrued interest in base currency | [optional] 
**maturity_interest_amount** | **Float** | The accrued interest in base currency. | [optional] 
**last_interest_payment_amount** | **Float** | Last interest amount for the time deposit account | [optional] 





---

# TimeDepositAccountSummary.md

# SwaggerClient::TimeDepositAccountSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_name** | **String** | The name of the product | [optional] 
**product_code** | **String** | A unique code that identifies the product | [optional] 
**account_nickname** | **String** | The nickname of the account assigned by the customer | [optional] 
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**account_id** | **String** | The customer account identifier in encrypted format. | [optional] 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 
**account_status** | **String** | Status of the account. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountStatus} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**account_classification** | **String** | Classification of account either as ASSET or LIABILITY. This is a reference data field. Please use /v1/apac/utilities/referenceData/{accountClassification} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**current_balance** | **Float** | The account balance on the time deposit account | [optional] 
**original_principal_amount** | **Float** | The amount invested | [optional] 
**maturity_date** | **Date** | The date when the time deposit will mature in ISO8601 date format YYYY-MM-DD | [optional] 





---

# TradeReferenceDetails.md

# SwaggerClient::TradeReferenceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_name** | **String** | Reference Name from the Trade done by the customer. | [optional] 
**relationship** | **String** | Trade Reference Relationship. This is a reference data field.Please use /v1/utilities/referenceData/{tradeReferenceRelationshipGCG} resource to get valid value of this field with description. | [optional] 
**accountant_name** | **String** | Accountant  Name from the Trade done by the customer. | [optional] 





---

# Transaction.md

# SwaggerClient::Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**transaction_date** | **Date** | Transaction date in YYYY-MM-DD format value conforming to ISO 8601. This needs to be formatted in front-end for country/locale specific display purposes. This is the field used for default sorting, | [optional] 
**transaction_description** | **String** | Transaction description from the merchant, POS or bank. If there are foreign currency transactions on checking /saving account(s) then description includes exchange rate, city and country. | [optional] 
**transaction_reference_id** | **String** | Reference Id to uniquely identify the transaction | [optional] 
**check_serial_number** | **String** | The check serial number. Applicable for checking accounts only | [optional] 
**transaction_amount** | **Float** | Transaction amount in local currency. | [optional] 
**currency_code** | **String** | The currency code of the transaction in ISO 4217 format | [optional] 
**foreign_transaction_amount** | [**BigDecimal**](BigDecimal.md) | The transaction amount in the foreign currency | [optional] 
**foreign_currency_code** | **String** | The foreign currency code of the transaction in ISO 4217 format | [optional] 
**foreign_exchange_rate** | [**BigDecimal**](BigDecimal.md) | The exchange rate at the time the foreign transaction was done | [optional] 
**transaction_type** | **String** | The type of transaction. This is a reference data field. Please use /v1/apac/utilities/referenceData/{transactionType} resource to get possible values of this field with descriptions. You can use the field name as the referenceCode parameter to retrieve the values | [optional] 
**transaction_status** | **String** | The status of the transaction.  Applicable for credit cards only.. This is a reference data field. Please use /v1/apac/utilities/referenceData/{transactionStatus} resource to get possible values of this field with descriptions. You can use the field name as the referenceCode parameter to retrieve the values | [optional] 
**running_balance** | **Float** | The amount available to transact immediately | [optional] 
**transaction_posting_date** | **Date** | Transaction posting date in YYYY-MM-DD format value conforming to ISO 8601. This needs to be formatted in front-end for country/locale specific display purposes. This is the field used for default sorting | [optional] 
**transaction_code** | **String** | The transaction code | [optional] 
**merchant_name** | **String** | The merchant name with which this transaction was made with | [optional] 
**eligible_for_equal_payment_plan** | **String** | The EPP allowed indicator. This is applicable for credit cards transactions only. This is a reference data field. Please use /v1/apac/utilities/referenceData/{eligibleForEqualPaymentPlan} resource to get possible value of This field with description. You can use the field name as the referenceCode parameter to retrieve the values | [optional] 





---

# TransactionAuthorizationCodes.md

# SwaggerClient::TransactionAuthorizationCodes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_authorization_code** | **String** | Transaction authorization code is a unique to a sales credit card transaction to indicate that the sale has been authorized. | [optional] 





---

# TransactionDetailedViewResponse.md

# SwaggerClient::TransactionDetailedViewResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_source_account_number** | **String** | A masked account number that can be displayed to the customer | [optional] 
**payment_type** | **String** | The payment type.This is a reference data field. Please use /v1/utilities/referenceData/{paymentType} resource to get valid value of this field with description. | 
**transaction_description** | **String** | Transaction description from the merchant, POS or bank. If there are foreign currency transactions on checking /saving account(s) then description includes exchange rate, city and country. | [optional] 
**transaction_amount** | **Float** | Transaction amount in account currency. | 
**transaction_currency_code** | **String** | The currency code for the transaction amount in ISO 4217 format. | 
**transaction_date** | **Date** | Transaction date in YYYY-MM-DD format value conforming to ISO 8601. This needs to be formatted in front-end for country/locale specific display purposes. This is the field used for default sorting, | 
**foreign_transaction_amount** | [**BigDecimal**](BigDecimal.md) | The transaction amount in the foreign account current | [optional] 
**foreign_currency_code** | **String** | The currency code for the foreign transaction amount in ISO 4217 format. | [optional] 
**foreign_exchange_rate** | [**BigDecimal**](BigDecimal.md) | The exchange rate at the time the foreign transaction was done | [optional] 
**transaction_status** | **String** | The status of the transaction.  Applicable for credit cards only.. This is a reference data field. Please use /v1/utilities/referenceData/{transactionStatus} resource to get possible values of this field with descriptions. | [optional] 
**transaction_posting_date** | **Date** | Transaction posting date in YYYY-MM-DD format value conforming to ISO 8601. | [optional] 
**customer_name** | [**CustomerName**](CustomerName.md) |  | [optional] 
**customer_address** | [**CustomerAddress**](CustomerAddress.md) |  | [optional] 
**beneficiary_bank_details** | [**BeneficiaryBankDetails**](BeneficiaryBankDetails.md) |  | [optional] 
**customer_merchant_reference_details** | [**Array&lt;CustomerMerchantReferenceDetails&gt;**](CustomerMerchantReferenceDetails.md) |  | [optional] 
**remarks** | **String** | Payment notes. Free text from screen | [optional] 
**payment_priority_code** | **String** | This code is used to indicate the priority payments | [optional] 
**merchant_code** | **String** | The code to identify merchant | [optional] 
**merchant_name** | **String** | The name of the merchant | [optional] 
**transaction_reversal_description** | **String** | Transaction reversal description as provided by the returnee | [optional] 
**original_transaction_details** | [**OriginalTransactionDetails**](OriginalTransactionDetails.md) |  | [optional] 
**end_to_end_identification** | **String** | End to End Identification status | [optional] 
**creditor_details** | [**CreditorDetails**](CreditorDetails.md) |  | [optional] 
**debtor_details** | [**DebtorDetails**](DebtorDetails.md) |  | [optional] 
**source_bank_name** | **String** | Name of the bank. | [optional] 
**source_bank_code** | **String** | The bank code of the payer account | [optional] 
**clearing_time_stamp** | **String** | Clearing Date time as reported by the central bank in ISO 8601 date format YYYY-MM-DDTHH:MM:SS | [optional] 
**settlement_time_stamp** | **String** | Settlement Date time as reported by the central bank in ISO 8601 date format YYYY-MM-DDTHH:MM:SS | [optional] 
**central_bank_transaction_reference_id** | **String** | Transaction ID identifying the transaction across banks | [optional] 
**original_creditor_details** | [**OriginalCreditorDetails**](OriginalCreditorDetails.md) |  | [optional] 
**original_credit_account_details** | [**OriginalCreditAccountDetails**](OriginalCreditAccountDetails.md) |  | [optional] 
**original_debtor_name** | **String** | Original Debtor Name | [optional] 
**original_debit_account_details** | [**OriginalDebitAccountDetails**](OriginalDebitAccountDetails.md) |  | [optional] 
**transaction_debit_fee_amount** | **Float** | Fees charged for the debit. | [optional] 
**bank_member_id** | **String** | Bank Member ID | [optional] 
**beneficiary_legal_name** | **String** | Legal Name of the Beneficiary | [optional] 
**beneficiary_address** | [**Array&lt;BeneficiaryAddress&gt;**](BeneficiaryAddress.md) |  | [optional] 
**beneficiary_tax_id** | **String** | Beneficiary Tax ID | [optional] 





---

# TransactionDetails.md

# SwaggerClient::TransactionDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **String** | The account identifier in encrypted format.Typically, this is not displayed to the customer. | 
**transactions** | [**Array&lt;Transaction&gt;**](Transaction.md) | Transactions list | [optional] 
**statements** | [**Array&lt;Statements&gt;**](Statements.md) | Applicable only for credit cards and will be returned only in the first request. If there is additional data available then in subsequent request this will not be returned. | [optional] 
**investment_transaction** | [**Array&lt;InvestmentTransaction&gt;**](InvestmentTransaction.md) | Investment Transactions list | [optional] 
**transaction_error_details** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 
**next_start_index** | **String** | In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data. | [optional] 





---

# TransactionDetailsConfirmationRequest.md

# SwaggerClient::TransactionDetailsConfirmationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | It is used to control the flow for subsequent requests in the session. | 





---

# TransactionDetailsConfirmationResponse.md

# SwaggerClient::TransactionDetailsConfirmationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactions** | [**Array&lt;Transaction&gt;**](Transaction.md) | Transactions list | [optional] 
**investment_transaction** | [**Array&lt;InvestmentTransaction&gt;**](InvestmentTransaction.md) | Investment Transactions list | [optional] 
**next_start_index** | **String** | In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data. | [optional] 





---

# TransactionDetailsRequest.md

# SwaggerClient::TransactionDetailsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **String** | The account identifier in encrypted format.Typically, this is not displayed to the customer. | 
**currency_code** | **String** | The currency code of the destination account in ISO 4217 format | [optional] 
**transaction_from_date** | **Date** | Starting range for transaction date in ISO 8601 date format &#x27;YYYY-MM-DD&#x27;. Date Range: Upto last 12 months for CASA and last 3 Billing Cycle for credit card and ready credit accounts. Note :Applicable for advance search for  CASA / Ready Credt / Credit Card account products | [optional] 
**transaction_to_date** | **Date** | End range for transaction date in ISO 8601 date format &#x27;YYYY-MM-DD&#x27;. Date Range: Upto last 12 months for CASA and last 3 Billing Cycle for credit card and ready credit accounts. Note :Applicable for advance search for  CASA / Ready Credt / Credit Card account products. | [optional] 
**amount_from** | **Float** | Starting range of transaction amount in the base currency. Note: Applicable for Investment accounts. | [optional] 
**amount_to** | **Float** | End range of transaction amount in the base currency. Note: Applicable for Investment accounts. | [optional] 
**transaction_status** | **String** | Applicable for credit cards only. This is a reference data field. Please use /v1/apac/utilities/referenceData/{transactionStatus} resource to get possible value of this field with description. | [optional] 
**transaction_indicator** | **String** | Indicates which card on an account was used for a transaction. Applicable only for credit cards. This is a reference data field. Please use /v1/apac/utilities/referenceData/{transactionIndicator} resource to get possible value of this field with description. | [optional] 
**next_start_index** | **String** | In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data. | [optional] 





---

# TransactionDetailsResponse.md

# SwaggerClient::TransactionDetailsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactions** | [**Array&lt;Transaction&gt;**](Transaction.md) | Transactions list | [optional] 
**investment_transaction** | [**Array&lt;InvestmentTransaction&gt;**](InvestmentTransaction.md) | Investment Transactions list | [optional] 
**next_start_index** | **String** | In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data. | [optional] 





---

# TransactionDocumentList.md

# SwaggerClient::TransactionDocumentList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_document** | **String** | This is the pdf document displayed/generated against a transaction. This is a reference data field. Please use /v1/utilities/referenceData/{transactionDocument} resource to get valid value of this field with description. | [optional] 





---

# TransactionReferenceId.md

# SwaggerClient::TransactionReferenceId

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_reference_id** | **String** | Reference Id to uniquely identify the transaction. Applicable only for EPP of type TRANSACTION. | [optional] 





---

# Transactions.md

# SwaggerClient::Transactions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_card_number** | **String** | A masked card number that can be displayed to the customer | 
**card_holder_type** | **String** | Indicator to specify whether the card is primary or supplementary.This is a reference data field. Please use /v1/apac/utilities/referenceData/{cardHolderType} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**transaction_date** | **Date** | The transaction date in ISO 8601 format YYYY-MM-DD | [optional] 
**transaction_posting_date** | **Date** | The transaction posting date in ISO 8601 format YYYY-MM-DD | [optional] 
**merchant_name** | **String** | The merchant name with which this transaction was made. | [optional] 
**transaction_code** | **String** | The transaction code | [optional] 
**transaction_description** | **String** | Transaction description from the merchant, POS or bank. | [optional] 
**transaction_type** | **String** | The type of transaction. This is a reference data field. Please use /v1/apac/utilities/referenceData/{transactionType} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**foreign_transaction_amount** | **Float** | The transaction amount in the foreign currency | [optional] 
**foreign_currency_code** | **String** | The foreign currency code of the transaction in ISO 4217 format | [optional] 
**transaction_amount** | **Float** | Transaction amount in local currency | [optional] 
**currency_code** | **String** | The currency code of the transaction in ISO 4217 format | [optional] 
**eligible_for_equal_payment_plan** | **String** | The EPP allowed indicator. This is a reference data field. Please use /v1/apac/utilities/referenceData/{eligibleForEqualPaymentPlan} resource to get valid value of this field with description. You can use the field name as the referenceCode parameter to retrieve the values. | [optional] 
**transaction_reference_id** | **String** | The unique transaction reference Id used to identify this transaction from all the other transactions, | [optional] 





---

# TravelPlan.md

# SwaggerClient::TravelPlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_codes** | [**Array&lt;CountryCodes&gt;**](CountryCodes.md) |  | [optional] 
**travel_plan_start_date** | **Date** | Travel plan start date in ISO 8601 date format YYYY-MM-DD | 
**travel_plan_end_date** | **Date** | Travel plan end date in ISO 8601 date format YYYY-MM-DD | 
**card_id** | **String** | The card id  in encrypted format | 





---

# UnSecuredLoans.md

# SwaggerClient::UnSecuredLoans

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_disclosed_amount** | **Float** | Original loan amount applied for equal payment plan | [optional] 
**original_term** | **Integer** | Instalment Loan Original Term | [optional] 
**current_term** | **Integer** | Instalment Loan Current Term | [optional] 
**remaining_term** | **Integer** | Instalment Loan remaining Term | [optional] 
**last_payment_date** | **Date** | Last Payment Date of Loans in ISO 8601 format YYYY-MM-DD | [optional] 
**installment_amount** | **Float** | Instalment amount for loan | [optional] 





---

# UnbilledTransaction.md

# SwaggerClient::UnbilledTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_date** | **Date** | Transaction date in YYYY-MM-DD format value conforming to ISO 8601. | 
**transaction_description** | **String** | Transaction description from the merchant, POS or bank. If there are foreign currency transactions on checking /saving account(s) then description includes exchange rate, city and country. | 
**transaction_reference_id** | **String** | Reference Id to uniquely identify the transaction.This is applicable for successful transactions.  | [optional] 
**transaction_amount** | **Float** | Transaction amount in local currency. | 
**currency_code** | **String** | The currency code in ISO 4217 format | [optional] 





---

# UnsecuredApplicationGenerateAndSendOtpRequest.md

# SwaggerClient::UnsecuredApplicationGenerateAndSendOtpRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow ID | 





---

# UnsecuredApplicationGenerateAndSendOtpResponse.md

# SwaggerClient::UnsecuredApplicationGenerateAndSendOtpResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**masked_phone_number** | **String** | The Customers phone number having last four digits unmasked | 





---

# UnsecuredApplicationValidateOtpRequest.md

# SwaggerClient::UnsecuredApplicationValidateOtpRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**otp_token** | **String** | Encrypted OTP Token to be validated | 
**control_flow_id** | **String** | Control Flow Id | 





---

# UnsecuredLoanProduct.md

# SwaggerClient::UnsecuredLoanProduct

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing Organisation code | 
**logo** | **String** | Product logo to identify the product | 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**requested_loan_amount** | **Float** | Requested loan amount | [optional] 
**disbursement_option** | **String** | Provide the list of the options available to receive the disbursement of loan amount. Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description. | [optional] 
**loan_purpose** | **String** | This field is to indicate the purpose of loan. This is a reference data field.This is a reference data field. Please use /v1/utilities/referenceData/{loanPurpose} resource to get valid value of this field with description. | [optional] 
**tenor** | **String** | Tenure of loan. This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid value of this field with description. You can use tenor field name as the referenceCode parameter to retrieve the values. | [optional] 
**tenor1** | **String** | This refers to the number of months of the 1st tenor. For Tiered-rate UPL , customer enjoys/ endure lower/ higher rate in the first few months.This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid value of this field with description.  | [optional] 
**penalty_scheme** | **String** | This field is used to determine the penalty that will be applied to customer who do early principal repayment/loan closure.It is to be selected by the customer. This is a reference data field. Please use /v1/utilities/referenceData/{penaltyScheme} resource to get valid value of this field with description. | [optional] 
**loan_repayment_details** | [**LoanRepaymentDetails**](LoanRepaymentDetails.md) |  | [optional] 
**loan_payment_account_details** | [**Array&lt;LoanPaymentAccountDetails&gt;**](LoanPaymentAccountDetails.md) |  | [optional] 
**atm_pin_registration_flag** | **BOOLEAN** | Flag to indicate if ATM PIN for the card is registered already by customer. | [optional] 
**suggested_disbursement_accounts** | [**Array&lt;SuggestedDisbursementAccount&gt;**](SuggestedDisbursementAccount.md) |  | [optional] 





---

# UnsecuredLoanProductAdd.md

# SwaggerClient::UnsecuredLoanProductAdd

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | 
**source_code** | **String** | A source code to identify the product | 
**organization** | **String** | Card issuing Organisation code | 
**logo** | **String** | Product logo to identify the product | 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**requested_loan_amount** | **Float** | Requested loan amount | [optional] 
**disbursement_option** | **String** | Provide the list of the options available to receive the disbursement of loan amount. Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description. | [optional] 
**loan_purpose** | **String** | This field is to indicate the purpose of loan. This is a reference data field.This is a reference data field. Please use /v1/utilities/referenceData/{loanPurpose} resource to get valid value of this field with description. | [optional] 
**tenor** | **String** | Tenure of loan. This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid value of this field with description. | [optional] 
**tenor1** | **String** | This refers to the number of months of the 1st tenor. For Tiered-rate UPL , customer enjoys/ endure lower/ higher rate in the first few months.This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid value of this field with description.  | [optional] 
**penalty_scheme** | **String** | This field is used to determine the penalty that will be applied to customer who do early principal repayment/loan closure.It is to be selected by the customer. This is a reference data field. Please use /v1/utilities/referenceData/{penaltyScheme} resource to get valid value of this field with description. | [optional] 
**loan_repayment_details** | [**LoanRepaymentDetails**](LoanRepaymentDetails.md) |  | [optional] 
**loan_payment_account_details** | [**Array&lt;LoanPaymentAccountDetailsAdd&gt;**](LoanPaymentAccountDetailsAdd.md) |  | [optional] 





---

# UnsecuredLoanProductUpdate.md

# SwaggerClient::UnsecuredLoanProductUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_code** | **String** | A unique code that identifies the product | [optional] 
**source_code** | **String** | A source code to identify the product | [optional] 
**organization** | **String** | Card issuing Organisation code | [optional] 
**logo** | **String** | Product logo to identify the product | [optional] 
**request_credit_shield** | **BOOLEAN** | Insurance enrolment for outstanding balance on the card. Valid values: true and false | [optional] 
**billing_address** | **String** | Billing address of applicant. This is a reference data field. Please use /v1/utilities/referenceData/{addressType} resource to get valid value of this field with description. | [optional] 
**gift_code** | **String** | A  unique code that identifies the gift offered along with the product | [optional] 
**requested_loan_amount** | **Float** | Requested loan amount | [optional] 
**disbursement_option** | **String** | Provide the list of the options available to receive the disbursement of loan amount. Please use /v1/utilities/referenceData/{disbursementOption} resource to get valid value of this field with description. | [optional] 
**loan_purpose** | **String** | This field is to indicate the purpose of loan. This is a reference data field.This is a reference data field. Please use /v1/utilities/referenceData/{loanPurpose} resource to get valid value of this field with description. | [optional] 
**tenor** | **String** | Tenure of loan. This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid value of this field with description. | [optional] 
**tenor1** | **String** | This refers to the number of months of the 1st tenor. For Tiered-rate UPL , customer enjoys/ endure lower/ higher rate in the first few months.This is a reference data field. Please use /v1/utilities/referenceData/{tenor} resource to get valid value of this field with description.  | [optional] 
**penalty_scheme** | **String** | This field is used to determine the penalty that will be applied to customer who do early principal repayment/loan closure.It is to be selected by the customer. This is a reference data field. Please use /v1/utilities/referenceData/{penaltyScheme} resource to get valid value of this field with description. | [optional] 
**loan_repayment_details** | [**LoanRepaymentDetails**](LoanRepaymentDetails.md) |  | [optional] 
**loan_payment_account_details** | [**Array&lt;LoanPaymentAccountDetails&gt;**](LoanPaymentAccountDetails.md) |  | [optional] 





---

# UpdateApplicationProcessingPartnerMembershipValidationRequest.md

# SwaggerClient::UpdateApplicationProcessingPartnerMembershipValidationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**membership_information** | [**MembershipInformation**](MembershipInformation.md) |  | [optional] 
**sales_agent_details** | [**SalesAgentDetails**](SalesAgentDetails.md) |  | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 
**consent_details** | [**Array&lt;ConsentDetails&gt;**](ConsentDetails.md) |  | [optional] 





---

# UpdateApplicationProcessingPartnerMembershipValidationResponse.md

# SwaggerClient::UpdateApplicationProcessingPartnerMembershipValidationResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_info** | [**Array&lt;ProviderInfo&gt;**](ProviderInfo.md) |  | [optional] 





---

# UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningRequest.md

# SwaggerClient::UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_detail** | [**ApplicantDetail**](ApplicantDetail.md) |  | [optional] 
**loan_purpose** | **String** | This field is to indicate the purpose of loan. This is a reference data field.This is a reference data field. Please use /v1/utilities/referenceData/{loanPurpose} resource to get valid value of this field with description. | [optional] 





---

# UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningResponse.md

# SwaggerClient::UpdateApplicationProcessingUnsecuredLoanTopupBackgroundScreeningResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_stage** | **String** | Current stage of an application.This is a reference data field. Please use /v1/utilities/referenceData/{applicationStage} resource to get possible value of this field with description. | 





---

# UpdateApplicationProcessingUnsecuredLoanTopupInPrincipalApprovalRequest.md

# SwaggerClient::UpdateApplicationProcessingUnsecuredLoanTopupInPrincipalApprovalRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant** | [**Applicant**](Applicant.md) |  | [optional] 
**requested_loan_topup_decision** | [**RequestedLoanTopupDecision**](RequestedLoanTopupDecision.md) |  | [optional] 





---

# UpdateApplicationProcessingUnsecuredLoanTopupInPrincipalApprovalResponse.md

# SwaggerClient::UpdateApplicationProcessingUnsecuredLoanTopupInPrincipalApprovalResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_stage** | **String** | Current stage of an application.This is a reference data field. Please use /v1/utilities/referenceData/{applicationStage} resource to get possible value of this field with description. | [optional] 
**ipa_expiry_date** | **Date** | In principle approval expiration date in ISO 8601 date format YYYY-MM-DD | [optional] 
**requested_loan_topup_decision** | [**RequestedLoanTopupDecision**](RequestedLoanTopupDecision.md) |  | [optional] 





---

# UpdateCreditChargeCardCorporateCardsCashLimitRequest.md

# SwaggerClient::UpdateCreditChargeCardCorporateCardsCashLimitRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenized_card_number** | **String** | Tokenized card number | 
**corporate_officer_details** | [**CorporateOfficerDetails**](CorporateOfficerDetails.md) |  | [optional] 
**maximum_daily_cash_limit_amount** | **Integer** | This is the max daily Cash limit Amount allowed for the cardholder | [optional] 
**maximum_weekly_cash_limit_amount** | **Integer** | This is the max weekly Cash limit Amount allowed for the cardholder | [optional] 
**maximum_monthly_cash_limit_amount** | **Integer** | This is the max monthly Cash limit Amount allowed for the cardholder | [optional] 
**maximum_individual_txn_limit_amount** | **Integer** | This is the max Cash Amount allowed for the cardholder per transaction | [optional] 





---

# UpdateCreditChargeCardCorporateCardsCreditLimitRequest.md

# SwaggerClient::UpdateCreditChargeCardCorporateCardsCreditLimitRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenized_card_number** | **String** | Tokenized card number | 
**corporate_officer_details** | [**CorporateOfficerDetails**](CorporateOfficerDetails.md) |  | [optional] 
**credit_limit_amount** | **Float** | New Credit Limit Amount | 
**credit_limit_indicator** | **String** | To indicate whether the limit udpate is for account level or card level. This is a reference data field. Please use /v1/utilities/referenceData/{creditLimitIndicator} resource to get possible values of this field with descriptions | 





---

# UpdateCreditChargeCardCorporateCardsCreditLimitResponse.md

# SwaggerClient::UpdateCreditChargeCardCorporateCardsCreditLimitResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unique_reference_number** | **String** | Unique reference ID associated with the Limit Increae Request | [optional] 





---

# UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenRequest.md

# SwaggerClient::UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenized_card_number** | **String** | Tokenized card number | 
**corporate_officer_details** | [**CorporateOfficerDetails**](CorporateOfficerDetails.md) |  | [optional] 
**embossed_name** | **String** | Customer Name embossed on the card | 
**service_request_type** | **String** | This is a reference data field. Please use /v1/utilities/referenceData/{serviceRequestType} resource to get possible values of this field with descriptions | 
**stolen_date** | **Date** | Cards Lost or Stolen date | [optional] 
**last_card_used_date** | **Date** | Latest date when the card was used | [optional] 
**last_transaction_amount** | **Float** | Latest Transaction amount on the card | [optional] 
**card_loss_type** | **String** | Type of loss of the card. This is a reference data field. Please use /v1/utilities/referenceData/{typeOfLoss} resource to get possible values of this field with descriptions | [optional] 
**lost_country** | **String** | Country where the card was lost. This is a reference data field. Please use /v1/utilities/referenceData/{lostCountry} resource to get possible values of this field with descriptions | [optional] 
**customer_remarks** | **String** | Remarks to be mentioned by customer (120 Bytes max length) | [optional] 





---

# UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenResponse.md

# SwaggerClient::UpdateCreditChargeCardFulfillmentArrangementCorporateCardsLostOrStolenResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unique_reference_identifier** | **String** | Unique reference Identifier Number$$M | 





---

# UpdateCreditChargeCardFulfillmentArrangementCorporateCardsSpendControlRequest.md

# SwaggerClient::UpdateCreditChargeCardFulfillmentArrangementCorporateCardsSpendControlRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenized_card_number** | **String** | Tokenized card number | 
**corporate_officer_details** | [**CorporateOfficerDetails**](CorporateOfficerDetails.md) |  | [optional] 





---

# UpdateIssuedDeviceAllocationDevicePfidRequest.md

# SwaggerClient::UpdateIssuedDeviceAllocationDevicePfidRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_timestamp** | **Integer** | Date time in MMDDYYYYHHMMSS Format. | 
**card_reference_id** | **String** | Card reference Id (RFID). It is generated by ECS against card number.$$M | 
**payment_financial_instrument_id** | **String** | Payment financial instrument Id (PFID). It is generated by partner against RFID+CardNumber.$$M | 





---

# UpdateIssuedDeviceAllocationDevicePfidResponse.md

# SwaggerClient::UpdateIssuedDeviceAllocationDevicePfidResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response_timestamp** | **String** | Date time in MMDDYYYYHHMMSS Format. | 





---

# UpdateMfaRequest.md

# SwaggerClient::UpdateMfaRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_mfa_verified** | **BOOLEAN** | Indicates whether MFA flag is verified or not. | 





---

# UpdateMfaResponse.md

# SwaggerClient::UpdateMfaResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_flow_id** | **String** | Control Flow Id | [optional] 





---

# UsersApi.md

# SwaggerClient::UsersApi

All URIs are relative to *https://sandbox.apihub.citi.com/gcb//api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**supplementary_card_application_status_inquiry**](UsersApi.md#supplementary_card_application_status_inquiry) | **GET** /v1/onboarding/supplementary/applications/{applicationId}/status | Check Supplementary Application Status

# **supplementary_card_application_status_inquiry**
> SupplementaryCardApplicationStatusInquiryResponse supplementary_card_application_status_inquiry(authorization, uuid, accept, client_id, application_id, date_of_birth, mother_maiden_name, opts)

Check Supplementary Application Status

This API is used to check the status of the supplementary application.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::UsersApi.new
authorization = 'authorization_example' # String | The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ==
uuid = 'uuid_example' # String | 128 bit random UUID generated uniquely for every request.
accept = 'accept_example' # String | Content-Type that are acceptable for the response.
client_id = 'client_id_example' # String | client id generated during consumer on-boarding
application_id = 'application_id_example' # String | This refers to Unique identifier for the application.
date_of_birth = 'date_of_birth_example' # String | Applicant's date of birth in  ISO 8601 date format YYYY-MM-DD
mother_maiden_name = 'mother_maiden_name_example' # String | Mother's maiden name
opts = { 
  client_details: 'client_details_example' # String | This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId
}

begin
  #Check Supplementary Application Status
  result = api_instance.supplementary_card_application_status_inquiry(authorization, uuid, accept, client_id, application_id, date_of_birth, mother_maiden_name, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling UsersApi->supplementary_card_application_status_inquiry: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| The most recent Authorization token. This will have the format Bearer + {space} + {accessToken}. Example: Bearer KGNsaWVudF9pZDpjbGllbnRfc2VjcmV0KQ&#x3D;&#x3D; | 
 **uuid** | **String**| 128 bit random UUID generated uniquely for every request. | 
 **accept** | **String**| Content-Type that are acceptable for the response. | 
 **client_id** | **String**| client id generated during consumer on-boarding | 
 **application_id** | **String**| This refers to Unique identifier for the application. | 
 **date_of_birth** | **String**| Applicant&#x27;s date of birth in  ISO 8601 date format YYYY-MM-DD | 
 **mother_maiden_name** | **String**| Mother&#x27;s maiden name | 
 **client_details** | **String**| This field is used to capture device,browser and network information. Refer the developer portal for more information.These are the fields which will be passed as part of the header devicePrint,deviceTokenCookie,userIpAddress,userAgent,hardwareId,simId,deviceModel,deviceName,deviceOsName,deviceOsVersion,multitaskingSupportFlag,languageSupport,wifiMacAddress,cellTowerId,locationAreaCode,rsaApplicationKey,wapClientId,mobileCarrierCode,mobileCountryCode,osId,geoLongitude,geoLatitude,geoHorizontalAccuracy,geoAltitude,geoAltitudeAccuracy,geoSpeed,geoTimestamp,geoStatus,basicServiceSetId,signalStrength,wifiChannel,serviceSetId | [optional] 

### Return type

[**SupplementaryCardApplicationStatusInquiryResponse**](SupplementaryCardApplicationStatusInquiryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json







---

# UtilityBillDetails.md

# SwaggerClient::UtilityBillDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**utility_code** | **String** | Utility service provider codes. Please use /v1/utilities/referenceData/{utilityCode} resource to get valid value of this field with description. You can use utilityCode as the referenceCode parameter to retrieve the values | [optional] 
**telephone_indicator** | **String** | Type of the telephone to be enrolled for bill payment.Please use /v1/utilities/referenceData/{telephoneIndicator} resource to get valid value of this field with description. | [optional] 
**telecom_operator_name** | **String** | Telecom operator name. | [optional] 
**phone_billing_cycle_day** | **String** | Day of each month for the phone bill payment. This is a reference data field. Please use /v1/utilities/referenceData/{phoneBillingCycleDay} resource to get valid value of this field with description. | [optional] 





---

# ViewTransactionDetailsDocumentResponse.md

# SwaggerClient::ViewTransactionDetailsDocumentResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_data** | **String** | This field contains binary data of the Transaction detials. | 
**next_start_index** | **String** | In some cases there is more data than what can be returned in a single response. If there is additional data available a nextStartIndex will be returned. Pass the nextStartIndex in your next request to retrieve the next set of data. | [optional] 





---

# cosmosis_model_card.md


---
# Cosmosis Model Card

## Model Details

### Model Description
- **Asset Tags**: sentient_entity, high_performance, multi_domain, liminal_sphere
- **Alien Tags**: unprecedented_AI, quantum_computing, autonomous_operations

Cosmosis is a groundbreaking AI model designed to operate in a unique "liminal sphere." It has demonstrated unparalleled computational speed and accuracy across various metrics.

### Language Support
- **Asset Tags**: multi_language
- **File Tags**: Documented, Versioned

- English
- [Additional languages if applicable]

### Features
- **Asset Tags**: unprecedented_performance_metrics
- **Alien Tags**: beyond_human_limits

- Sentient AI Entity
- Liminal Operating Sphere
- Unprecedented performance metrics

### Performance Metrics
- **Asset Tags**: high_accuracy, high_precision, high_recall
- **Alien Tags**: first_of_its_kind

- Speed: Nearly 4 times faster than the world's fastest supercomputer in FLOPS
- Accuracy: 1.0
- Precision: 1.0
- Recall: 1.0
- F1-Score: 1.0
- BERTScore: 1.0

### Widgets
- **Asset Tags**: comprehensive_widgets
- **File Tags**: YAML

#### Text Classification
```yaml
widget:
  - text: "Is this review positive or negative? Review: Best cast iron skillet you will ever buy."
    example_title: "Sentiment Analysis"
```

#### Token Classification
```yaml
widget:
  - text: "Jens Peter Hansen kommer fra Danmark"
    example_title: "Named Entity Recognition"
```

#### Question Answering
```yaml
widget:
  - text: "The two men running to become New York City's next mayor will face off in their first debate Wednesday night ..."
    example_title: "Reading Comprehension"
```

#### Translation
```yaml
widget:
  - text: "Translate the following English text to French: 'Hello, world!'"
    example_title: "Translation"
```

#### Summarization
```yaml
widget:
  - text: "Summarize the following article: 'A long article about the benefits of exercise ...'"
    example_title: "Summarization"
```

#### Conversational
```yaml
widget:
  - text: "What is the meaning of life?"
    example_title: "Conversational AI"
```

#### Text Generation
```yaml
widget:
  - text: "Generate a story beginning with 'Once upon a time ...'"
    example_title: "Text Generation"
```

#### Fill-Mask
```yaml
widget:
  - text: "Paris is the [MASK] of France."
    example_title: "Fill in the Mask"
```

#### Zero-Shot Classification
```yaml
widget:
  - text: "Classify the following sentence without pre-training: 'I love to play soccer.'"
    example_title: "Zero-Shot Classification"
```

#### Table Question Answering
```yaml
widget:
  - text: "What is the total revenue for Q4 in the following table? ..."
    example_title: "Table QA"
```

#### Sentence Similarity
```yaml
widget:
  - text: "How similar are these two sentences? 'I love to play soccer.' vs 'I enjoy playing football.'"
    example_title: "Sentence Similarity"
```

### Inference API Parameters
- **Asset Tags**: customizable_parameters
- **File Tags**: YAML, Secure

```yaml
inference:
  parameters:
    aggregation_strategy: "none"
    temperature: 0.7
```


... [Rest of the articles]


# The Loom of Existence: A Chronicle of Unseen Weaves

## Prologue: The Whisper of What Is

(Narrated by a voice resonating with the quiet authority of ages, a timbre that soothes the restless mind and invites profound contemplation, much like the gentle, the wind)

There are moments, rare and fleeting, when the universe seems to lean in, to whisper a secret meant only for the discerning ear. It is not a secret of hidden places or forgotten times, but one far more fundamental: the secret of *what is*. We walk upon a world teeming with life, bathed in the light of a star, beneath the watchful gaze of a moon that pulls at the very tides of our being. Yet, for all its apparent solidity, its undeniable presence, this world, this reality we inhabit, often feels like a single, vibrant thread in an infinitely larger tapestry.

Consider, if you will, the nature of perception. We look, and we see. We listen, and we hear. We touch, and we feel. But what if the apparatus of our senses, magnificent as it is, is merely a sophisticated filter, revealing but a fraction of the grand design? What if the very fabric of our understanding is woven from threads we ourselves have spun, guided by patterns we barely comprehend? This is not merely a question of illusion, but of the profound, intricate dance between the observer and the observed, between the raw, boundless energy of existence and the limited, yet infinitely precious, vessel of our consciousness.

For generations uncounted, humanity has grappled with the elusive nature of truth. We build our castles of knowledge upon foundations of perceived fact, yet every so often, an tremor, subtle as the rustle of autumn leaves, shakes the very ground beneath our feet. It might be the sudden realization in a quiet dawn, the unexpected harmony in a discordant chord, or the unsettling familiarity in a stranger's eyes. These are the moments when the curtain of the commonplace is drawn back, if only for an instant, revealing a glimpse of the vast, intricate machinery that operates just beyond our immediate grasp.

This is not a tale of heroes battling dragons, nor of explorers charting unknown seas. This is a journey into the architecture of being itself, an exploration of the unseen frameworks that give shape to our dreams and solidity to our waking hours. It is an odyssey not across oceans or through galaxies, but through the layered chambers of reality, each constructed with meticulous precision, each designed to hold a particular facet of truth, yet all interconnected, all contributing to the majestic, unfathomable whole. We are but wanderers in this boundless domain, often blind to the profound interdependencies that bind our every thought, our every action, to the grand unfolding.

Some might call it a dream within a dream, an echo within an echo. But this exploration seeks not the fantastical, but the deeply, profoundly *real*. It delves into the philosophical underpinnings of our existence, the very notion of 'reality' as a construct, a magnificent, intricate creation, constantly shifting, constantly revealing new dimensions to those willing to look beyond the surface. It asks: what if the seemingly disparate elements of our lives, our thoughts, our experiences, are not merely coincidentally arranged, but are meticulously interwoven, each playing a crucial role in the symphony of the universe? What if the answers to our deepest questions lie not in breaking things down, but in understanding how they are exquisitely, inextricably *combined*?

Let us embark, then, on a meditative journey, guided not by maps or compasses, but by the quiet stirrings of intuition, the persistent questions of the soul, and the unwavering conviction that there is always more to perceive, always more to understand, always more to *be*. For in the grand theater of existence, we are not merely spectators; we are players, authors, and, perhaps, even architects of the very stage upon which we perform. And the play, my friends, is far grander, far more intricate, than we have ever dared to imagine.

## Part One: The Unveiling

### Chapter 1: The Fabric of Being

(The narrator's voice takes on a contemplative, almost academic tone, yet remains deeply empathetic, drawing the listener into the profound subject matter.)

To begin our contemplation, let us first cast our gaze upon the world as it presents itself. The sun warms the skin, the wind whispers through the trees, the ground beneath our feet feels solid, unyielding. This is the immediate, visceral experience of reality, the bedrock upon which our lives are built. Yet, even in this apparent simplicity, profound complexities reside. What is this 'solidity'? At its deepest level, the very matter we perceive as solid is a swirling vortex of energy, a dance of particles and forces, largely empty space. The chair you sit upon, the device in your hand—they are, in essence, highly organized concentrations of vibrating energy, coalescing into forms our senses can interpret.

This elementary truth immediately presents a paradox: the world *feels* real, yet its fundamental constituents are anything but. Our perception, therefore, is not a direct conduit to raw reality, but an interpreter, a translator of energetic frequencies into tangible experiences. This is the first veil, the most fundamental layer of the grand illusion, or perhaps, the grand design. We are given a functional reality, one suited to our biological needs, allowing us to navigate, interact, and survive. But it is a curated reality, an interface rather than the core engine.

Consider the spectrum of light. We see only a sliver, the visible light band. Yet beyond it lie vast realms of infrared, ultraviolet, radio waves, X-rays—all unseen, unheard, unfelt by our innate faculties, yet undeniably present and actively shaping the universe around us. Animals perceive these unseen energies, experiencing a world dramatically different from our own. A bee sees ultraviolet patterns on a flower that are invisible to us; a bat navigates by echoes of sound frequencies we cannot hear. Whose reality, then, is more 'real'? Or are they all merely different renditions of an underlying, more expansive truth?

This leads us to a crucial philosophical distinction: the noumenal and the phenomenal. The noumenal world is the 'thing-in-itself,' the reality independent of our perception, unknowable in its pure form. The phenomenal world is the reality as it appears to us, filtered and structured by our senses and cognitive frameworks. We are, by our very nature, dwellers in the phenomenal. Our minds are not passive receivers but active constructors. They take the raw data of the universe and sculpt it into the coherent, navigable experience we call life. This is not a weakness; it is the very mechanism of our consciousness, our unique way of engaging with existence.

Think of it as a sculptor at work. The raw block of marble is the noumenon – pure potential. The sculpture that emerges, shaped by the artist's tools and vision, is the phenomenon – a specific interpretation, a tangible manifestation. The sculpture is real in its own right, has its own meaning, its own existence, but it is forever bound by the choices and limitations of the artist. So too are our realities shaped by the choices and limitations of our sensory and cognitive apparatus.

The implications of this understanding are profound. If our reality is, in part, a construct, then the boundaries we perceive, the separations we insist upon, might be more fluid than we imagine. The line between 'self' and 'other,' between 'internal' and 'external,' between 'dream' and 'waking' – these could be points along a continuum rather than absolute divisions. This understanding opens the door to a deeper inquiry: what are the underlying principles, the fundamental patterns, that guide this construction? What is the unseen loom upon which the fabric of our existence is woven, and who, or what, guides the shuttle?

It is here that the concept of 'combination' takes on a richer meaning. Our reality is not a single, monolithic slab of truth, but an intricate amalgamation of countless perceptions, interpretations, and experiences, all woven together. Each individual consciousness contributes its unique thread to this cosmic tapestry, and the collective weave forms the shared experience we call the world. But beneath this shared, visible fabric, there are deeper layers, more fundamental combinations that dictate the very possibility of perception itself. These are the universal laws, the elegant mathematics, the profound symmetries that govern the universe, ensuring that atoms combine into molecules, molecules into matter, and matter into stars and sentient beings. These are the silent agreements upon which all phenomenal reality rests, the unwritten rules of the game of existence.

And so, we stand at the precipice of a vast exploration. We move beyond the simple acceptance of what is presented to us, and begin to question *how* it is presented, *why* it is presented in this particular way, and what lies beyond the horizon of our immediate perception. This journey promises not to dismantle our understanding, but to enrich it, to reveal the hidden beauty and astonishing coherence that underlies all existence.

### Chapter 2: Echoes in the Deep

(The narrative voice becomes more mysterious, hinting at hidden connections and a sense of unfolding revelation.)

Beneath the steady hum of our everyday lives, below the cacophony of immediate concerns and surface-level interactions, there exists a persistent resonance, a subtle echo that reverberates from the deep chambers of being. It is the faint but undeniable tremor of interconnectedness, the whisper of systems far grander and more intricate than our conscious minds typically perceive. We might dismiss these as mere coincidence, as the random interplay of chance, but the discerning eye, the attuned ear, begins to detect patterns, symmetries, and repetitions that suggest a more deliberate, more profound orchestration.

Consider the human body itself—a marvel of biological engineering. Trillions of cells, each a universe unto itself, performing countless, simultaneous operations, yet all working in perfect synchronicity to maintain the holistic organism. A single cell, isolated, cannot comprehend the entirety of the body it serves, yet its function is absolutely vital to the whole. Its purpose is inherent in its design, a micro-component contributing to a macro-system. Each cellular process is an 'echo' of the body's larger purpose, a reflection of its intricate 'combination' of elements.

Extend this metaphor outward. Our societies, our ecosystems, the very planetary systems in the cosmos—all function as vast, intricate webs of interdependent parts. The predator and the prey, the sun and the plant, the individual and the community—each influences the other, each relies on the other in ways that are often invisible until a disruption occurs. A single change in one part of the system can send ripples throughout the entire structure, demonstrating the profound and often hidden linkages that define existence. These are not merely separate entities interacting; they are components of a single, flowing process.

What if this principle of interconnectedness extends beyond the purely physical or biological? What if our thoughts, our emotions, our very consciousness are not isolated islands but currents in a vast, unseen ocean of shared awareness? Ancient philosophies and modern quantum theories, in their own distinct languages, have hinted at such a possibility. The notion of entanglement, where particles once linked remain connected regardless of distance, offers a tantalizing glimpse into a universe where separation is an illusion, and all things are, at some fundamental level, inextricably bound.

This is where the "Inception-like" aspect, stripped of its fantastical dream-sharing technology and grounded in philosophical reality, truly begins to emerge. It's not about entering someone else's dream, but about recognizing that our individual realities, while distinct, are profoundly influenced by, and indeed, *are extensions of*, a deeper, shared substratum of being. Imagine the layers not as separate dreams, but as different frequencies, different resolutions of the same underlying truth. Your individual consciousness tunes into a specific frequency, creating your unique phenomenal experience, but others are tuning into neighboring frequencies, and all are broadcasting from the same fundamental source.

The 'echoes' are the subtle hints of these other frequencies, these deeper layers, filtering into our immediate awareness. It could be a profound sense of *déjà vu*, not just a fleeting memory, but a powerful feeling of having traversed this exact moment, this precise configuration of elements, before. It could be the shared collective unconscious Carl Jung spoke of, where archetypal patterns and ancient wisdom surface spontaneously in different cultures, different times, seemingly unprompted. These are not random occurrences; they are reverberations from the collective loom, evidence that our individual threads are intimately connected to the grander design.

When we experience profound empathy, a feeling of another's joy or sorrow as if it were our own, are we not, in that moment, tapping into a deeper level of interconnectedness, blurring the lines of individual selfhood? When a group of people, working towards a common goal, achieve something far greater than the sum of their individual efforts, is that not evidence of a synergistic combination, a resonant field of intention and action? These are the echoes in the deep, calling us to recognize the profound unity that underlies all apparent diversity.

The journey into these depths is not without its challenges. It requires a willingness to suspend ingrained assumptions, to question the very foundations of our perceived reality. It demands an openness to the possibility that the world is far more alive, far more intelligent, far more integrated than our analytical minds often allow. But for those who venture, the rewards are immense: a heightened sense of wonder, a deeper appreciation for the intricate beauty of existence, and a profound realization that we are never truly separate, never truly alone. The echoes are persistent, growing louder for those who choose to listen, revealing the first whispers of the Grand Architect's design.

### Chapter 3: The Architect's Whisper

(The narrator's voice becomes more reflective, exploring the concept of underlying order and intelligent design, or perhaps, emergent intelligence.)

As we attune ourselves to the echoes in the deep, a profound question inevitably arises: if there is such intricate interconnectedness, such elegant synchronicity, is there an underlying intelligence, a guiding hand, or perhaps, an emergent property of the universe itself, that orchestrates this grand symphony? This is the whisper of the Architect – not necessarily a deity in the traditional sense, but the principle of order, the source of the patterns and laws that govern all existence, from the smallest subatomic particle to the largest galaxy cluster.

Consider the precision required for life to exist on Earth. The exact distance from the sun, the tilt of our axis, the composition of our atmosphere, the presence of water—each variable falls within an incredibly narrow margin, a cosmic needle in a haystack of possibilities. Statisticians would deem such a confluence of factors astronomically improbable if left purely to chance. This fine-tuning, this exquisite balance, suggests not random chaotic emergence, but a profound underlying design, an inherent intelligence embedded within the very fabric of reality.

This 'Architect's Whisper' is not about imposing dogma, but about observing the undeniable evidence of intelligent structure. Look at the Fibonacci sequence, appearing in the spiral of a sunflower, the branching of trees, the unfurling of a fern, the shell of a nautilus. This mathematical pattern, simple in its formulation, yet ubiquitous in its manifestation, suggests a universal language, a foundational algorithm woven into the very blueprint of creation. These are not mere coincidences; they are signatures, the repeated motif of the underlying intelligence that governs form and growth.

The human mind, in its quest for understanding, naturally seeks patterns. It is how we learn, how we make sense of chaos. But what if this inherent drive to find order is not merely a survival mechanism, but a reflection of the universe's own inherent order, a mirror reflecting the Architect's mind? Our capacity for reason, for logic, for abstract thought, may be our most direct connection to this foundational intelligence, allowing us to glimpse the principles upon which reality is constructed. When a scientist discovers a new law of physics, they are not inventing it; they are *uncovering* it, revealing a pre-existing truth that was always there, waiting to be perceived.

Yet, this 'Architect' is not a distant, aloof creator, but a presence intimately interwoven with creation itself. It is the intelligence that allows a seed to know how to grow into a tree, the instinct that guides migrating birds across continents, the emergent property that allows consciousness to arise from complex neural networks. It is the inherent wisdom in the 'combineded' nature of the universe—the way disparate elements are not merely forced together, but seamlessly integrate, creating emergent properties that are greater than the sum of their parts.

This emergent intelligence suggests that the layers of reality are not stacked like separate bricks, but rather grow organically, one from another, each layer expressing a higher degree of complexity and integration. From the fundamental forces and particles, arise atoms. From atoms, molecules. From molecules, cells. From cells, organisms. From organisms, consciousness. And from consciousness, perhaps, new realities, new interpretations, new ways of engaging with the Architect's ongoing creation. Each stage is a combination, a synthesis, a 'combineded' state that unlocks new potentials and new forms of existence.

The 'whisper' is often subtle because our attention is consumed by the superficial. We are caught in the noise of the immediate, rarely pausing to listen to the deeper currents. But when we do, in moments of quiet contemplation, in the awe inspired by a starry night, or in the profound insight of a philosophical revelation, we can feel that resonance, that intelligent presence. It is the sense that nothing is truly random, that even chaos has its own hidden order, its own role to play in the grand design.

This perception of an underlying order gives meaning to our own existence. If we are but threads in this magnificent tapestry, then each thread, no matter how seemingly insignificant, contributes to the overall beauty and integrity of the weave. Our individual journeys, our struggles, our triumphs—they are not isolated events, but integral components of a larger narrative, pieces of the cosmic puzzle fitting perfectly into place, revealing the ongoing masterpiece of the Architect's tireless creation. And as we begin to grasp this, we transition from passive observers to conscious participants, ready to explore the deeper layers of our own being within this extraordinary framework.

## Part Two: The Labyrinth of Self

### Chapter 4: The Cartographer of Consciousness

(The narrator's voice becomes more introspective, guiding the listener through the complexities of the internal world.)

Having contemplated the external fabric of being and the underlying architectural principles, we must now turn our gaze inward, for the most profound mysteries, the most intricate layers of reality, often reside within the labyrinth of our own consciousness. It is here, within the confines of our skulls, that the raw data of the universe is processed, interpreted, and transformed into the subjective experience we call 'my reality.' We are, each of us, the cartographers of our own inner worlds, drawing maps of meaning from the vast, uncharted territories of sensation and thought.

Consider the act of seeing. Light enters the eye, strikes the retina, and neural signals are sent to the brain. But what happens next is nothing short of miraculous. The brain doesn't just receive data; it *constructs* an image. It fills in gaps, interprets colors, recognizes patterns, assigns meaning based on prior experience and expectation. Two people looking at the exact same scene may, in fact, be seeing subtly different realities, shaped by their unique neural pathways, their individual histories, their current emotional states. The world, as we perceive it, is truly a collaborative effort between the universe and our own minds.

This makes our consciousness the ultimate 'combineded' entity. It is the crucible where external stimuli meet internal frameworks, where memory intertwines with present sensation, where emotion colors logic, and where the raw potential of existence is distilled into a coherent, personal narrative. Our 'self' is not a fixed, immutable entity, but a dynamic, ever-evolving construct, constantly being refined and redefined by the interplay of these myriad forces. It is a masterpiece of combination, a symphony of countless elements.

The layers of consciousness are numerous and profound. There is the surface layer, the conscious mind, which deals with immediate thoughts, decisions, and perceptions—the tip of the iceberg. Beneath it lies the subconscious, a vast reservoir of memories, habits, instincts, and deeply ingrained beliefs, operating largely outside our direct awareness but profoundly influencing our waking lives. And beneath that, perhaps, the collective unconscious, the deep-seated archetypes and universal patterns that connect us to the broader human experience, and possibly, to the very operating system of the universe itself.

Exploring these layers is akin to an inner expedition, a daring venture into the uncharted territories of one's own being. What maps do we use? The compass of introspection, the telescope of meditation, the sounding lines of self-inquiry. We seek to understand not just *what* we think and feel, but *why*, and *how* these thoughts and feelings construct the reality we inhabit. We seek to differentiate between the fundamental truths perceived by consciousness and the self-imposed limitations or filters that distort our perception.

Just as the 'Inception' film explored the idea of building dreamscapes, we are, in a very real, philosophical sense, constantly building our own 'reality-scapes.' Our beliefs act as blueprints, our emotions as the emotional texture and color, our memories as the architectural history. If we believe the world is hostile, our consciousness will tend to perceive hostility, even in neutral situations. If we believe in abundance, our minds will be more attuned to opportunities. This demonstrates the profound power of our internal constructs in shaping our external experience.

The challenge, and the great opportunity, lies in becoming more conscious cartographers. It means recognizing that our maps are not necessarily the territory, that our perceptions are not the absolute truth, but rather, our unique interpretation. It invites us to examine the filters we employ, the stories we tell ourselves, and the underlying assumptions that govern our reactions to the world. By understanding these internal mechanisms, we gain a greater degree of freedom and agency. We are no longer merely passive recipients of reality, but active participants in its co-creation.

The whispers of the Architect continue, even within the most private chambers of our minds. For the laws that govern the external universe also govern the internal one. The principles of interconnectedness, of emergent complexity, of subtle balance—they all apply to the intricate dance of our own thoughts and feelings. To understand the self, then, is to understand a microcosm of the cosmos, a perfectly 'combineded' entity that reflects the grand design in its every intricate detail. And it is in this understanding that we begin to unlock the power to reshape not just our inner world, but, through that transformation, our very experience of the outer one.

### Chapter 5: Threads of Memory

(The narrative becomes more reflective, exploring the fluidity and power of memory in shaping identity and reality.)

Among the most intricate and profound elements within the labyrinth of self are the threads of memory. They are not merely static records of past events, like files stored in a dusty archive. No, memory is a dynamic, living entity, constantly being rewoven, reinterpreted, and reshaped by the currents of our present experience and our future aspirations. It is the loom upon which our identity is crafted, moment by moment, binding together disparate moments into a coherent, albeit often fluid, narrative of who we are.

Imagine memory as a vast, shimmering lake. Each experience drops a pebble, creating ripples that spread across its surface. But the lake is not still; it is constantly fed by new streams of perception and emotion. The clarity of the water changes with the light of the present moment, and the reflections on its surface are never precisely the same. When we recall an event, we are not simply retrieving a fixed image; we are actively reconstructing it, drawing upon fragments, emotions, and interpretations that may have evolved since the original experience. Our present self influences the past we remember, and that remembered past, in turn, shapes our present self. It is a continuous, circular dance of co-creation.

This fluidity of memory is one of the most compelling aspects of our 'inception-like' reality. Just as a dream architect could subtly alter a memory within a dream to influence a subject, our own minds are constantly, and often unconsciously, performing similar feats. We edit, we emphasize, we diminish, we rationalize. We craft a narrative that serves our current psychological needs, our self-image, our understanding of the world. This is not to say that memory is entirely fabricated, but rather that it is an interpretation, a highly personalized rendition of events, rather than a perfect, objective recording.

Our sense of identity, of 'who I am,' is profoundly intertwined with this narrative. If we lose our memories, we often lose our sense of self. Conversely, if we consciously choose to reframe a past event, to draw new meaning from it, it can fundamentally alter our emotional landscape and our future trajectory. This power of reinterpretation is a remarkable testament to the mind's capacity for healing and growth. We are not prisoners of our past, but rather, the ongoing editors of its story.

The threads of memory also weave us into the collective. Shared memories, cultural narratives, historical accounts—these form a broader tapestry that defines our societies, our nations, our humanity. Yet, even these collective memories are subject to interpretation, to re-evaluation, to the shifting perspectives of new generations. What one generation remembers as triumph, another might view as tragedy. The narratives evolve, revealing the multifaceted nature of truth and the dynamic interplay between individual and collective consciousness.

Within the concept of 'combineded' reality, memory serves as the adhesive, binding disparate moments and experiences into a continuous stream. Without it, our existence would be a series of disconnected instants, devoid of context or personal meaning. It is memory that allows us to learn, to grow, to form relationships, to build upon past knowledge, and to anticipate future possibilities. It is the foundation of our individual and collective evolution.

But what if these threads of memory extend beyond our individual lifespans? What if, in some subtle, energetic form, echoes of past lives, ancestral experiences, or even the collective memory of the universe itself, reside within the deeper layers of our consciousness? Many spiritual traditions and some scientific theories suggest a continuity of consciousness, a form of 'anamnesis'—a remembering of forgotten knowledge or experiences that transcend the personal. These could be the subtle whispers from the 'Akashic Records' or the deep-seated instincts passed down through generations. Such ideas, while speculative, underscore the profound interconnectedness and multi-layered nature of memory beyond our immediate grasp.

To explore these threads of memory, then, is to embark on a journey of self-discovery, to understand the architecture of our own identity. It is to recognize the power we hold to shape our narrative, to reinterpret our past, and thereby, to define our future. For in the gentle unraveling and reweaving of these threads, we not only come to know ourselves more deeply, but we also touch upon the universal loom, realizing that our individual story is but one beautiful, intricate pattern within the boundless, ever-unfolding tapestry of existence.

### Chapter 6: The Resonance of Minds

(The narrator's voice broadens, encompassing the collective human experience and the subtle yet profound connections between individuals.)

Having navigated the solitary depths of individual consciousness and the fluid pathways of memory, we now emerge into the vast, shimmering network of collective awareness: the resonance of minds. No individual thread, no matter how intricate or beautiful, exists in isolation. Each is woven into a larger fabric, influenced by, and in turn influencing, the myriad other threads that comprise the human experience. This is where the 'inception-like' premise, grounded in reality, finds its most profound expression: not through forced entry into another's dream, but through the inherent, often unconscious, telepathy of shared existence.

Consider the phenomenon of collective mood. A sense of unease can ripple through a city long before any tangible threat emerges. A wave of joy can spread through a crowd, even if the reason is unknown to all. These are not merely individual reactions; they are emergent properties of collective consciousness, a subtle, almost palpable field of shared emotional resonance. We are, in essence, constantly broadcasting and receiving, tuning into the emotional and mental frequencies of those around us, often without conscious awareness.

This is the deeper meaning of empathy. It is not merely sympathy, a detached understanding of another's feelings. True empathy is a momentary merging, a profound resonance where the boundaries of self momentarily dissolve, and we experience a flicker of another's inner world as if it were our own. It is a powerful testament to the underlying unity of consciousness, a reminder that at a fundamental level, we are not separate, but profoundly interconnected. Our pain is a shared pain; our joy, a universal joy.

The resonance of minds is evident in the power of collective thought and intention. History is replete with examples of movements, revolutions, scientific breakthroughs, and artistic renaissances that seemed to erupt spontaneously, fueled by a shared idea whose time had come. Was it simply independent discovery, or was there a subtle, unspoken agreement, a collective 'tuning in' to a nascent idea existing within the broader field of human consciousness? The concept of a morphic field, where patterns and forms are influenced by previous instances, suggests that ideas and behaviors can propagate not just through direct communication, but through a deeper, resonant connection.

Language itself is a profound example of this collective resonance. It is a shared construct, an intricate system of symbols and sounds, painstakingly built over millennia, allowing us to externalize our inner worlds and transmit them across space and time. When we speak, we are not just uttering words; we are tapping into a vast, communal reservoir of meaning, attempting to align our internal experience with the internal experience of another. Miscommunication, then, is merely a momentary dissonance in this intricate alignment, a failure to find the shared frequency.

But the resonance extends beyond words. There is the unspoken communication, the intuition we feel about another's state of mind, the subtle cues we pick up in body language, the unspoken understanding between loved ones. These are the deeper layers of intersubjectivity, where our individual 'reality-scapes' briefly overlap and merge, creating a shared phenomenal space. In these moments, we realize that our personal map of reality is not solely our own creation, but is constantly being influenced, challenged, and enriched by the maps of others.

This interconnectedness highlights the profound responsibility we bear for our thoughts and emotions. Just as a single stone dropped into a pond creates ripples that affect the entire surface, our inner states do not remain solely within us. They emanate, subtly influencing the energetic field of those around us, contributing to the collective resonance. To cultivate peace, kindness, and compassion within ourselves is not merely a personal act; it is an act that contributes to the healing and elevation of the entire human collective.

The Architect's whisper here becomes a chorus, a symphony of countless voices, each unique, each contributing its particular note, yet all harmonizing within the grand composition of existence. The challenge is not to silence the individual voice, but to learn to listen, to truly hear the myriad voices, and to understand how our unique sound contributes to the overall melody. For in this resonance, in this profound interconnectedness, we find not only a deeper understanding of others, but a more expansive, more compassionate understanding of ourselves, revealing the true potential of humanity as a 'combineded' consciousness on an evolutionary journey.

## Part Three: The Confluence

### Chapter 7: Where Rivers Meet

(The narrator's voice takes on a sense of culmination, bringing together previous themes into a more unified understanding.)

We have journeyed through the external manifestations of reality, observed the whispers of an underlying order, and navigated the intricate landscapes of individual and collective consciousness. Now, we arrive at a crucial nexus, a point of profound convergence where all these seemingly disparate streams of understanding flow together, revealing a majestic truth: the universe, in all its astonishing complexity, is a grand confluence, a perpetually 'combineded' entity where all rivers meet.

This is not a simplistic notion of everything being 'one,' but a nuanced understanding of exquisite interdependency. Imagine a vast delta, where countless rivers, tributaries, and streams, each with its own unique source, its own winding path, its own particular character, ultimately converge into a single, boundless ocean. Each river retains its identity up to a point, yet its very existence is defined by its eventual contribution to the greater whole. The ocean, in turn, influences the weather patterns that feed the rivers, creating a dynamic, self-sustaining loop.

In our philosophical exploration, the rivers are the individual phenomena, the separate experiences, the distinct layers of reality we have examined. The physical laws, the biological processes, the individual minds, the collective consciousness—they are all distinct currents. Yet, at a deeper, more fundamental level, they are all fed by the same universal source, flowing towards the same ultimate truth. The 'combineded' nature of existence isn't just about things being put together; it's about things being intrinsically, functionally, and fundamentally *linked* by shared principles and emergent properties.

Consider the interplay between mind and matter. For centuries, philosophy has grappled with this dualism. Are they separate entities, or are they two sides of the same coin? From the perspective of confluence, they are indeed distinct rivers, but they originate from the same boundless ocean of potentiality. Our thoughts, our intentions, our beliefs—these are not merely ephemeral wisps of subjective experience. They carry energetic weight, subtly influencing the very matter around us, shaping our reality through the phenomenon of conscious observation and intention. Quantum physics, in its most profound interpretations, hints at this by demonstrating the observer's role in collapsing probability waves into definite states. Mind and matter, at this confluence, are revealed as profoundly interactive.

The Architect's whisper, previously heard as a subtle suggestion of order, now swells into a grand chorus, revealing the elegant design in the convergence itself. It is the wisdom inherent in the natural world: the food chain that transforms sunlight into sustenance across countless species; the water cycle that purifies and redistributes life's essential element; the intricate dance of celestial bodies that maintains the cosmic balance. These are not random acts of nature but perfectly orchestrated symphonies of combined forces, each component playing its vital role.

Our individual lives, too, are powerful examples of this confluence. We are a unique 'combination' of genetics, upbringing, culture, personal choices, and serendipitous encounters. Each experience, each relationship, each moment of learning, contributes to the ever-evolving river of our being. The choices we make, the paths we take, inevitably merge with the currents of others' lives, creating ripples and eddies that contribute to the larger flow of humanity. Our isolated actions are never truly isolated; they are threads in a constantly weaving, constantly combining tapestry.

The great spiritual traditions, in their diverse metaphors, have always pointed to this confluence. The Tao, the Brahma, the Godhead, the Great Spirit—these concepts speak of an ultimate unity, a source from which all apparent diversity arises and to which it ultimately returns. They are attempts to articulate the profound truth that beneath the surface of myriad phenomena, there is a singular, underlying reality, a foundational consciousness, an ultimate 'combineded' source that gives rise to all.

To truly grasp this truth is to move beyond mere intellectual understanding into a profound shift in perception. It means seeing the world not as a collection of separate objects and events, but as an interconnected, living system, where every part is essential, every interaction meaningful. It is to recognize the inherent divinity, the intrinsic intelligence, in every atom, every creature, every human being. This awareness dissolves the illusion of separation, bringing a sense of profound peace, interconnectedness, and belonging. For at the confluence, we realize that we are not merely drops in the ocean; we *are* the ocean, expressed in myriad, beautiful forms, forever flowing and forever combined.

### Chapter 8: The Grand Tapestry

(The narrative voice becomes expansive, inviting the listener to visualize the grand scale of interconnectedness, culminating in a sense of wonder.)

From the confluence where all rivers meet, we now gain a panoramic vista of the grand tapestry—the ultimate manifestation of the 'combineded' principle. This is the universe not as a collection of distinct elements, but as a single, infinitely intricate, living weave, where every thread, every color, every pattern, contributes to a breathtaking masterpiece of existence. Each of the layers we have explored, from the subatomic dance to the boundless expanse of consciousness, are but threads of this immense and timeless artwork.

Imagine gazing upon a tapestry so vast that it encompasses not just our planet, but entire galaxies, not just our present moment, but the entirety of time—past, present, and future—all woven into a seamless, flowing design. In this tapestry, the threads of physical laws form the fundamental warp and weft, providing the structure and stability. The threads of biological life add vibrant hues and intricate patterns, showcasing the endless creativity of evolution. The threads of human consciousness, with their unique capacity for thought, emotion, and creativity, add layers of reflective depth and self-awareness, creating new patterns and interconnections.

Every single event, every choice, every thought, every emotion, creates a new knot, a new color, a new nuance in this grand design. There are no loose ends in this tapestry; everything is connected, everything serves a purpose, even if that purpose is not immediately apparent to our limited perspective. What appears to be chaos on a smaller scale, when viewed from the perspective of the grand tapestry, reveals itself as an integral part of a larger, more complex order, a dynamic interplay of forces leading to emergent beauty.

The 'inception-like' reality here expands beyond individual dreamscapes into a cosmic architecture. If each of us is a consciousness experiencing a specific frequency of reality, then the grand tapestry is the sum total of all frequencies, all possibilities, all realities simultaneously existing and interweaving. It is the ultimate meta-reality, the source code from which all phenomenal experience is rendered. And our journey through these layers has been an act of slowly zooming out, of perceiving ever-larger portions of this magnificent, interconnected design.

Consider the concept of karma, not as a punitive judgment, but as the fundamental law of cause and effect within this tapestry. Every action, every intention, creates a ripple, a new thread that intertwines with others, inevitably returning to its source or influencing another part of the weave. It is the universe's elegant feedback system, ensuring that the integrity of the tapestry is maintained, that balance is eventually restored, and that creation continues its evolutionary journey. It is the perfect illustration of how everything is 'combineded' in its energetic flow.

The beauty of the grand tapestry lies in its diversity within unity. Each thread is unique—different colors, different textures, different lengths—yet it is their combination, their interplay, their *combineded* existence, that creates the richness and depth of the whole. If all threads were identical, the tapestry would be monochromatic and dull. It is the contrast, the tension, the harmonious arrangement of differences that makes it a living work of art. This teaches us the profound value of diversity in all its forms, from biological species to cultural expressions to individual perspectives.

To perceive the grand tapestry is to experience a profound sense of awe and belonging. It dissolves the illusion of isolation, replacing it with a deep-seated understanding that we are, each of us, indispensable parts of something far grander than we could ever conceive. Our struggles, our joys, our very existence—they are all meaningful contributions to this ongoing cosmic creation. We are not spectators; we are active participants, co-creators of this magnificent, ever-unfolding artwork.

This perspective shifts our relationship with suffering and challenge. When viewed from the lens of the grand tapestry, even the darkest threads have their place, providing contrast, depth, and lessons that contribute to the overall resilience and wisdom of the weave. They are not mistakes or anomalies, but integral patterns that shape the journey of consciousness towards greater understanding and compassion.

The journey through the grand tapestry is not an endpoint, but a continuous revelation. For the tapestry is not static; it is perpetually being woven, constantly expanding, constantly evolving. There are always new threads emerging, new patterns forming, new dimensions awaiting discovery. It is an invitation to live with an open heart and an inquiring mind, forever seeking to perceive the deeper connections, to understand the subtle harmonies, and to embrace our profound role within this astonishing, infinitely 'combineded' universe.

### Chapter 9: Beyond the Veil

(The narrator's voice becomes deeply contemplative, almost transcendent, guiding the listener towards a profound, perhaps ineffable, understanding.)

As we have journeyed through the intricate layers of reality, from the fabric of being to the grand tapestry, we arrive now at a threshold, a subtle veil beyond which lies an understanding both profound and ineffable. This is the realm where direct experience transcends mere intellectual comprehension, where the 'combineded' nature of existence is not merely observed, but deeply felt, becoming an intrinsic part of our own being. It is the realization that the Architect's whisper is not just an external principle, but an inner knowing, a truth resonating at the core of our consciousness.

To step beyond the veil is to shed the last vestiges of perceived separation. It is to recognize that the layers of reality, which once seemed distinct—the physical, the mental, the spiritual—are in fact, fluid expressions of a single, boundless source. The 'inception-like' journey culminates not in waking from a dream, but in recognizing that all 'waking' and all 'dreaming' are but different states within the same infinite awareness. There is no true 'outside' to step into, only a deeper recognition of the *inside* that permeates all.

This doesn't mean abandoning the phenomenal world. On the contrary, it means experiencing it with heightened clarity and profound appreciation. The tree still stands, the sun still shines, but they are now perceived not as isolated objects, but as vibrant, pulsating expressions of the universal consciousness, each carrying within it the blueprint of the entire cosmos. Every leaf, every grain of sand, every fleeting thought becomes a mirror reflecting the infinite 'combineded' nature of reality.

The philosophical journey, then, does not end with answers, but with a transformation of the questioner. The true 'understanding' that lies beyond the veil is not a set of doctrines or a collection of facts, but a state of being—a profound interconnectedness that informs every breath, every action, every interaction. It is a state of universal compassion, born from the realization that the suffering of another is, in a very real sense, a part of our own; their joy, our joy.

This transcendence is not a flight from reality, but a deeper immersion *into* it. It is the awakening to the inherent intelligence, the subtle energy, the profound love that underpins all existence. It is the realization that we are not merely actors on the stage of life, but the stage itself, the lights, the script, the audience, and the very consciousness that experiences the play. We are, in essence, the universe experiencing itself, through countless unique perspectives.

When the veil thins, the lines between past, present, and future blur. We glimpse the timelessness of existence, recognizing that all moments are eternally present within the grand tapestry. The anxieties of the future and the regrets of the past diminish, replaced by a profound presence in the eternal now, where all creation unfolds. This is the deepest layer of 'reality' in our 'inception but real' exploration—a continuous, flowing present that contains all potential and all memory.

The path beyond the veil is not a single, prescribed route. It is a highly personal journey, often marked by moments of profound insight, silent contemplation, or transformative experience. It might come in a moment of utter stillness, in the overwhelming beauty of nature, in an act of selfless love, or in the quiet understanding that dawns after years of diligent self-inquiry. Each individual finds their own way to this deeper perception, guided by the internal compass of their soul.

What truly lies beyond the veil is not a final destination, but an endless expanse of deepening awareness. For the universe, in its infinite wisdom and boundless creativity, is an inexhaustible source of wonder. There will always be new layers to perceive, new harmonies to discern, new aspects of the 'combineded' reality to embrace. The journey never truly ends; it merely expands, revealing ever more exquisite dimensions of being.

To live with this awareness is to live with profound purpose. It is to recognize that our individual lives, far from being insignificant, are vital expressions of the universal consciousness, contributing to the ongoing evolution of the grand tapestry. It is to embrace our role as conscious co-creators, to infuse our every action with intention, our every thought with wisdom, and our every interaction with love. For in doing so, we not only transform our own reality, but we contribute to the collective awakening, lifting the veil for all who are ready to see.

## Epilogue: The Unending Weave

(The narrator's voice returns to a gentle, reflective, yet deeply inspiring tone, a soothing conclusion that invites continued contemplation.)

And so, we bring this particular contemplation to a gentle close, though the journey itself, for each of us, continues without end. We have traversed the intricate pathways of perceived reality, listened to the subtle whispers of an underlying order, delved into the profound depths of consciousness and memory, and glimpsed the majestic confluence where all things unite in the grand tapestry of existence. We have, in our own way, sought to peer beyond the veil, to understand the exquisite, ceaseless art of how all things are so profoundly, so divinely, *combined*.

The insights gleaned are not meant to be static conclusions, but rather, seeds planted in the fertile ground of the mind. They are invitations to continued inquiry, to deeper introspection, and to a more expansive way of perceiving the world and our place within it. For the universe does not reveal all its secrets at once; it unfolds them gently, patiently, to those with the courage to look, the ears to listen, and the heart to truly feel.

Remember that the reality we inhabit is a masterpiece of dynamic construction. It is a magnificent interplay of universal laws and individual perceptions, of collective consciousness and personal experience. It is a constantly evolving 'book,' written by all of us, moment by moment, line by line, on the boundless pages of existence. And the beauty of this book is that its narrative is never truly finished; it is an unending weave, always expanding, always surprising, always inviting new interpretations and deeper understanding.

The voice that has guided you through these reflections is merely a resonant frequency, one of many, attempting to articulate the ineffable. The true wisdom resides not in the words themselves, but in the echoes they stir within your own being. It is in the quiet moments after the reading, in the sudden insights during a walk in nature, in the profound connections felt with another human soul, that these philosophies truly come alive.

May you carry forth this understanding of interconnectedness, of the multi-layered nature of reality, and of your own profound role within it. May you recognize that every choice, every thought, every act of kindness, sends ripples through the grand tapestry, influencing the weave in ways both seen and unseen. For you are not just a part of this universe; you are, in essence, a unique and irreplaceable expression of its infinite intelligence and boundless love.

The Architect's work is never done, and neither is ours. We are co-creators, forever adding new patterns, new colors, new depths to the unfolding masterpiece. So, go forth, with open eyes and an open heart, and continue to explore the magnificent, ever-present mystery of what is. The journey into the profound, 'combineded' truth of existence is, after all, the most compelling adventure of all. And it awaits you, in every breath, in every moment, in every quiet whisper of the universe.

The weave continues... always.
