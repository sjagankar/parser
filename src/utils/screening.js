import React from "react";
import {formatMessage} from "@/utils/locale";
import {findObjectInArray} from "@/utils/utils";
import COUNTRY_CODES from '@/constants/currency';

import {
	Form,
	Select,
	Input,
	Switch,
	DatePicker
} 
	from "antd";


const {Option} = Select;
const {TextArea} = Input;


export function getScreeningAnswers(fields, questions) {

	let answers = [];
	for (var key in fields) {
		if (key.includes("screening_question_") || (key.includes("rmtt_") && !(key.includes("rmtt_email") || key.includes("rmtt_id") || key.includes("rmtt_ctc_currency") || key.includes("rmtt_phone") || key.includes("rmtt_first_name") || key.includes("rmtt_last_name") || key.includes("rmtt_notice_period_interval")))) {
			var question_id = key.split("_").pop();
			if(key.includes("rmtt_")){
				question_id = key.substring(5);
			}
			let choice = {};
			var question = key.includes("rmtt_") ? findObjectInArray("rmtt_mapping_field", question_id, questions) : findObjectInArray("id", question_id, questions);

			choice.type = question.type;
			if (fields[key] !== undefined) {
				if (choice.type === "file") {
					choice.answer = fields[key][0]["name"];
				}
				else if (choice.type === "multiple") {
					choice.answer = fields[key].length > 0 ? fields[key].join() : [].join();
				} else {
					choice.answer = fields[key];
				}
				choice.question_id = question.id;
				answers.push(choice);
			}
		}
	}
	return answers;

}




export function getRmttFieldsFromFormValues(fields) {
	let rmttFields = [];
	for (var key in fields) {
		if (key.includes("rmtt_")) {
			var rmtt_key = key.replace("rmtt_", "");
			var answer = fields[key];
			rmttFields.push({
				key: rmtt_key,
				value: answer
			});
		}
	}
	return rmttFields;
}



export function formatQuestionLabel(que){
	return (<div
		className={"custom-question-label"}
		style={{fontSize:"14px"}}
		dangerouslySetInnerHTML={{__html: que}}
	/>);

}


export function getValuePropType(questionType){
	let valuePropName = "value";
	switch (questionType) {
	case "switch":
		valuePropName="checked";
		break;
	case "file":
		valuePropName="fileList";
		break;
	default:
		valuePropName="value";
		break;
	}
	return valuePropName;
}



export function  getFormInitialValuesForSwitch(questions) {
	let initialValues = {rmtt_notice_period_interval:"M"};
	questions.forEach(k => {
		let name = k.rmtt_mapping_field !== null && k.rmtt_mapping_field !== "" ? `rmtt_${k.rmtt_mapping_field}` : `screening_question_${k.id}`;
		if(k.type==="switch") {
			initialValues[name] = true;
		}
	});
	return initialValues;
}

export function  getFormDefaultValues(candidate) {
	let initialValues = Object.keys(candidate).reduce(function(result, key) {
		if(key!=='visa_expiry_date') {result[`rmtt_${key}`] = candidate[key];}
		return result;
	}, {});
	return initialValues;
}

export function  getRmttSuffix(k) {
	const daysSelectAfter = (          
		<Form.Item name="rmtt_notice_period_interval" noStyle>
			<Select  style={{
				width: 100
			}}>
				<Option  key={"D"}  value={"D"} label={formatMessage({
					id: "applyjobs.days"
				})}>
					{formatMessage({id:"applyjobs.days", defaultMessage:"Days"})}
				</Option>
				<Option  key={"W"}  value={"W"} label={formatMessage({
					id: "applyjobs.weeks"
				})}>
					{formatMessage({id:"applyjobs.weeks", defaultMessage:"Weeks"})}
				</Option>
				<Option  key={"M"}  value={"M"} label={formatMessage({
					id: "applyjobs.months"
				})}> 
					{formatMessage({id:"applyjobs.months", defaultMessage:"Months"})}
				</Option>
			</Select>
		</Form.Item>
	);

	const countryCodesSelect = (
		<Form.Item name="rmtt_ctc_currency" noStyle>
			<Select  style={{
				width: 100
			}}  placeholder={formatMessage({
				id: "applyjobs.currency"
			})} showSearch>
				{countryCodeOptions(COUNTRY_CODES, 'currency_code', 'currency_code')}
			</Select>
		</Form.Item>
	);

	let InputField;
	switch (k.rmtt_mapping_field) {
	case "notice_period":
		InputField = daysSelectAfter;
		break;
	case "current_ctc":
		InputField = countryCodesSelect;
		break;
	case "expected_ctc":
		InputField = countryCodesSelect;
		break;
	case "qualification":
		InputField = null;
		break;
	default:
		InputField = null;
		break;
	}
	return InputField;

}


export function getQuestionInputComponent(k){
	let inputComponent = <Input name={name}/>;
	switch (k.type) {
	case "text":
		inputComponent = (<TextArea placeholder={formatMessage({
			id: "applyjobs.inputurans"
		})}  autosize={{
			minRows: 3,
			maxRows: 6
		}} />);
		break;
	case "select":
	case "multiple":
		inputComponent = (<Select style={{width:"100%"}} placeholder={formatMessage({
			id: "applyjobs.selectoptions"
		})}  mode={k.type === "multiple" ? "multiple" : "default"}>             
			{k.choices.data.map(option => (
				<Option key={option.id} value={option.choice}>{option.choice}</Option>
			))}
		</Select>);
		break;
	case "url":
		inputComponent = (<Input placeholder='https://example.com' />);
		break;
	case "date":
		inputComponent = (<DatePicker style={{width:'100%'}} format='DD-MM-YYYY' placeholder='DD-MM-YYYY' />);
		break;
	case "email":
		inputComponent = <Input placeholder="abc@xyz.com"/>;
		break;
	case "switch":
		inputComponent = (<Switch style={{
			marginLeft: "10px"
		}}/>);
		break;
	case "file":
		inputComponent = <Input/>;
		break;
	case "number":
		inputComponent = (<Input placeholder='1234'  addonAfter={getRmttSuffix(k)}/>);
		break;
	default:
		inputComponent = (<Input placeholder={formatMessage({
			id: "applyjobs.inputurans"
		})}   addonAfter={getRmttSuffix(k)}/>);
	}

	return inputComponent;

}



export function getFormRules(type, isRequired){
  
	let rules = [{
		required: isRequired,
		message: "Required"
	}];
    
	let customRules = [];
	switch (type) {
	case "url":
		customRules = [
			{ 
				type: "string", 
				min: 4, 
				pattern : new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/),
				message : "The input is not a valid URL"}
		];
		break;
	case "date":
		customRules = {
			type : "date",
			message : "The input is not a valid Date"
		};
		break;
	case "email":
		customRules = [{
			type : "email",
			message : "The input is not valid E-mail"
		}];
		break;
	case "number":
		customRules = [{
			type : "string",
			message : "The input is not valid Number",
			pattern: new RegExp(/^[0-9]+$/)
		}];
		break;
	case "switch":
		break;
	case "phone":
        
	customRules = [{
		type: "string",
		message: "The input is not a phone number!",
		pattern: new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. ()]*(\d{1,4})[-. ()]*(\d{1,4})[-. ]*(\d{1,4})(?: *x(\d+))?\s*$/),
		min: 6
	}];

		break;
	case "multiple":
		customRules = [{
			type : "array",
			message : "Please select an option from dropdown"
		}];
		break;
	}
	Array.prototype.push.apply(rules,customRules);
	return rules;
}



export function countryCodeOptions(country_codes,label,value) {

	return country_codes.map(stat => (
		<Option 
			key={stat["id"]} 
			value={stat[value]}
			label={stat[label]}
		>
			{stat[label]}
		</Option>
	));

}
  