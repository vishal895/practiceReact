import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Url = () => {
    const { rule_type } = useParams();
    // const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getRulesList = () => {
        // if (!rule_type) {
        //     console.error("rule_type is undefined");
        //     return;
        // }

        // setLoading(true);
        // const apiPath = `${"https://api.dev.hyprespace.com/v1"}rule/${rule_type}`;
        
        // console.log(`API Path: ${apiPath}`); // Log the API path

        axios.get("https://api.dev.hyprespace.com/v1/rule")
            .then((res) => {
                if (res?.status === 200) {
                    setData(res?.data?.records);
                    console.log(data,"hello")
                }
            })
            .catch((err) => {
                console.error("Failed", err);
            })
            // .finally(() => {
            //     setLoading(false);
            // });
    };

    // useEffect(() => {
    //     if (rule_type) {
    //         getRulesList();
    //     }
    // }, [rule_type]);
    useEffect(()=>{
   getRulesList()
    },[])

    const ruleName = "Example Rule Name"; // Replace with actual state or prop
    const triggerEvent = "Example Trigger Event"; // Replace with actual state or prop
    const selectedSurvey = "Example Survey"; // Replace with actual state or prop
    const alertTemplateData = "Example Alert Template"; // Replace with actual state or prop
    const executionMode = "Example Execution Mode"; // Replace with actual state or prop
    const executionFrequency = "Example Execution Frequency"; // Replace with actual state or prop
    const formattedRules = []; // Replace with actual state or prop
    const updatedRules = []; // Replace with actual state or prop
    const isActive = true; // Replace with actual state or prop
    const isNotify = true; // Replace with actual state or prop
    const Booleanlogic = "AND"; // Replace with actual state or prop

    const formData = {
        name: ruleName,
        trigger_event: triggerEvent,
        table_name: selectedSurvey,
        sequence_number: 0,
        alert_template: alertTemplateData,
        execution_mode: executionMode,
        execution_frequency: executionFrequency ? executionFrequency : null,
        rule_criterias: formattedRules,
        rule_column_updates: updatedRules,
        rule_type: rule_type, // Use the rule_type from useParams
        is_active: isActive,
        notify: isNotify,
        boolean_logic: Booleanlogic,
    };

    console.log('Form Data:', JSON.stringify(formData, null, 2)); // Log the form data

    return (
        <div>
            {/* Your component code here */}
            <h1>vishal</h1>
        </div>
    );
};

export default Url;
