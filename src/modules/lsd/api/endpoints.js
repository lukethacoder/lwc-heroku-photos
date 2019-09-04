import { gql } from 'apollo-boost';

export const ALL_PHOTOS_QUERY = gql`
    {
        salesforce_photo__c(
            where: {
                file_location__c: { _is_null: false }
                heroku_id__c: { _is_null: false }
            }
        ) {
            heroku_id__c
            sfid
            name
            location__longitude__s
            location__latitude__s
            file_location__c
        }
    }
`;

export const CREATE_PHOTO_MUTATION = gql`
    mutation createPhoto(
        $heroku_id: String!
        $file_location: String!
        $name: String!
    ) {
        insert_salesforce_photo__c(
            objects: {
                heroku_id__c: $heroku_id
                file_location__c: $file_location
                name: $name
            }
        ) {
            returning {
                file_location__c
                id
            }
            affected_rows
        }
    }
`;
