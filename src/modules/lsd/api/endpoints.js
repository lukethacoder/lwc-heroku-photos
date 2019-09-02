import { gql } from 'apollo-boost';

export const ALL_PHOTOS_QUERY = gql`
    {
        salesforce_photo__c(
            where: {
                file_location__c: { _is_null: false }
                sfid: { _is_null: false }
            }
        ) {
            sfid
            name
            location__longitude__s
            location__latitude__s
            file_location__c
        }
    }
`;
export const ADD_PHOTO = gql`
    {
        mutation {
            insert_salesforce_photo__c(
                objects: {
                    file_location__c: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    name: ""
                    location__longitude__s: ""
                    location__latitude__s: ""
                    date_time_taken__c: ""
                }
            ) {
                returning {
                    file_location__c
                    sfid
                }
                affected_rows
            }
        }
    }
`;
