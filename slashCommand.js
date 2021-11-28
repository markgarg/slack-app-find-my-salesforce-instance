const axios = require("axios");
const URL_TEMPLATE = process.env.SALESFORCE_SEARCH_URL || 'https://api.status.salesforce.com/v1/search/';

const findInstanceForAlias = async (alias) => {
    _validateCommandInput(alias);

    const url = `${URL_TEMPLATE}${alias}`;
    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data[0].instanceKey;
    } catch (error) {
        console.error('error in findInstanceForAlias :', error);
        throw error;
    }
}

const _validateCommandInput = (alias) => {
    if(!alias) {
        throw new Error('Alias is required');
    }
}

module.exports = findInstanceForAlias;