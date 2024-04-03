// Import the Google Sheets API library
const { google } = require('googleapis');

// Load credentials from a JSON file (client_secret.json)
const credentials = require('./client_secret.json');

// Create a new instance of the Google Sheets API
const sheets = google.sheets({ version: 'v4', auth: credentials });

// Function to read and parse existing data from Google Sheets
async function readExistingGoogleSheet(spreadsheetId, range) {
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });
        const rows = response.data.values;
        if (rows.length) {
            return rows.map(row => ({
                id: row[0],
                netType: row[1],
                pillarType: row[2],
                luminairType: row[3],
                pillarHeight: row[4],
                luminaireHeight: row[5],
            }));
        }
    } catch (err) {
        console.error('Error reading Google Sheet:', err);
    }
}

// Function to update Google Sheets with new marker data
async function updateGoogleSheet(spreadsheetId, range, newData) {
    const values = newData.map(item => [item.id, item.netType, item.pillarType, item.luminairType, item.pillarHeight, item.luminaireHeight]);
    const resource = { values };
    try {
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            resource,
        });
        console.log('Google Sheet updated successfully!');
    } catch (err) {
        console.error('Error updating Google Sheet:', err);
    }
}

// Function to handle adding a new marker to the map and updating Google Sheets
async function addNewMarker(spreadsheetId, range, markerData) {
    const values = [[
        markerData.id,
        markerData.netType,
        markerData.pillarType,
        markerData.luminairType,
        markerData.pillarHeight,
        markerData.luminaireHeight
    ]];
    const resource = { values };
    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            resource,
        });
        console.log('New marker added to Google Sheets successfully!');
    } catch (err) {
        console.error('Error adding new marker to Google Sheets:', err);
    }
}

module.exports = {
    readExistingGoogleSheet,
    updateGoogleSheet,
    addNewMarker,
};
